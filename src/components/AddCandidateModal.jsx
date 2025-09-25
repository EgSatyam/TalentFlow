// src/components/AddCandidateModal.jsx
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'

export default function AddCandidateModal({ open, onClose, jobId, onCreated }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [stage, setStage] = useState('applied')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setError(null)
    try {
      const res = await fetch(`/jobs/${jobId}/candidates`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, stage })
      })
      if (!res.ok) {
        const errBody = await res.json().catch(() => ({}))
        throw new Error(errBody.message || 'Failed to create candidate')
      }
      const candidate = await res.json()
      onCreated(candidate)
      setName('')
      setEmail('')
      setStage('applied')
      onClose()
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        {/* Backdrop */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/50" />
        </Transition.Child>

        {/* Modal panel with slide down animation */}
        <div className="fixed inset-0 flex items-start justify-center mt-20">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 -translate-y-8"
            enterTo="opacity-100 translate-y-0"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 -translate-y-8"
          >
            <Dialog.Panel className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-md w-full p-6">
              <Dialog.Title className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Add Candidate
              </Dialog.Title>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full rounded-md border px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />

                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full rounded-md border px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />

                <select
                  value={stage}
                  onChange={(e) => setStage(e.target.value)}
                  className="w-full rounded-md border px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                >
                  <option value="applied">Applied</option>
                  <option value="interview">Interview</option>
                  <option value="hired">Hired</option>
                  <option value="rejected">Rejected</option>
                </select>

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
                    {loading ? 'Adding...' : 'Add'}
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
