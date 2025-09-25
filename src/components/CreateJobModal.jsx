// src/components/CreateJobModal.jsx
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { BriefcaseIcon } from '@heroicons/react/24/outline'

export default function CreateJobModal({ open, onClose, onCreated, existingSlugs = [] }) {
  const [title, setTitle] = useState('')
  const [slug, setSlug] = useState('')
  const [tags, setTags] = useState('')
  const [error, setError] = useState(null)
  const [submitting, setSubmitting] = useState(false)

  function genSlugFromTitle(t) {
    return t.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setError(null)
    if (!title.trim()) { setError('Title is required'); return }
    const computed = slug.trim() || genSlugFromTitle(title)
    if (existingSlugs.includes(computed)) { setError('Slug already exists'); return }

    const body = { title: title.trim(), slug: computed, status: 'active', tags: tags.split(',').map(t=>t.trim()).filter(Boolean), order: Date.now() }
    try {
      setSubmitting(true)
      const res = await fetch('/jobs', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) })
      if (!res.ok) throw new Error('Create failed')
      const created = await res.json()
      onCreated(created)
      setTitle(''); setSlug(''); setTags('')
      onClose()
    } catch (err) {
      setError(err.message)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        {/* backdrop */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" />
        </Transition.Child>

        {/* panel slides down from near top-center */}
        <div className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-14">
          <Transition.Child
            as={Fragment}
            enter="transform transition ease-out duration-250"
            enterFrom="-translate-y-8 opacity-0"
            enterTo="translate-y-0 opacity-100"
            leave="transform transition ease-in duration-200"
            leaveFrom="translate-y-0 opacity-100"
            leaveTo="-translate-y-8 opacity-0"
          >
            <Dialog.Panel className="mx-auto w-full max-w-lg rounded-2xl bg-white/85 dark:bg-gray-800/85 backdrop-blur-md shadow-2xl p-6 border border-white/20 dark:border-gray-700/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-full bg-indigo-100 dark:bg-indigo-700">
                  <BriefcaseIcon className="h-6 w-6 text-indigo-600 dark:text-indigo-200" />
                </div>
                <Dialog.Title className="text-xl font-semibold text-gray-900 dark:text-white">
                  Create a New Job
                </Dialog.Title>
              </div>

              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Title</label>
                  <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    onBlur={() => { if (!slug) setSlug(genSlugFromTitle(title)) }}
                    placeholder="e.g. Frontend Engineer"
                    className="mt-1 w-full rounded-md border px-3 py-2 bg-white/70 dark:bg-gray-700/70 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Slug (unique)</label>
                  <input
                    value={slug}
                    onChange={(e) => setSlug(e.target.value)}
                    placeholder="frontend-engineer"
                    className="mt-1 w-full rounded-md border px-3 py-2 bg-white/70 dark:bg-gray-700/70 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Tags (comma separated)</label>
                  <input
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                    placeholder="React, Remote, UI"
                    className="mt-1 w-full rounded-md border px-3 py-2 bg-white/70 dark:bg-gray-700/70 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>

                {error && <p className="text-sm text-red-500">{error}</p>}

                <div className="flex justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
                    disabled={submitting}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-md bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium shadow hover:from-indigo-700 hover:to-purple-700 transition disabled:opacity-60"
                    disabled={submitting}
                  >
                    {submitting ? 'Creating...' : 'Create Job'}
                  </button>
                </div>
              </form>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
