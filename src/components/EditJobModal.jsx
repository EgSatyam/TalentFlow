// src/components/EditJobModal.jsx
import { Fragment, useState, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'

export default function EditJobModal({ open, onClose, job, onUpdated }) {
  const [title, setTitle] = useState('')
  const [slug, setSlug] = useState('')
  const [tags, setTags] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  // Prefill form when job changes
  useEffect(() => {
    if (job) {
      setTitle(job.title || '')
      setSlug(job.slug || '')
      setTags(job.tags?.join(', ') || '')
    }
  }, [job])

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setError(null)
    try {
      const res = await fetch(`/jobs/${job.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title,
          slug,
          tags: tags.split(',').map(t => t.trim()).filter(Boolean)
        })
      })
      if (!res.ok) {
        const errBody = await res.json().catch(() => ({}))
        throw new Error(errBody.message || 'Failed to update job')
      }
      const updated = await res.json()
      onUpdated(updated)
      onClose()
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  if (!job) return null

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <div className="fixed inset-0 bg-black/50" />

        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-md w-full p-6">
            <Dialog.Title className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Edit Job
            </Dialog.Title>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Job title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className="w-full rounded-md border px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
              <input
                type="text"
                placeholder="Slug"
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                required
                className="w-full rounded-md border px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
              <input
                type="text"
                placeholder="Tags (comma separated)"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                className="w-full rounded-md border px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />

              {error && <p className="text-sm text-red-500">{error}</p>}

              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 rounded-md border hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 disabled:opacity-50"
                >
                  {loading ? 'Saving...' : 'Save'}
                </button>
              </div>
            </form>
          </Dialog.Panel>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
