import React, { useContext, useEffect, useRef, useState } from 'react'
import { v4 as uuid } from 'uuid'
import { TStatus } from '../../../types/test'
import { AppContext } from '../contexts'
import useOnClickOutside from '../hooks/useOnClickOutside'
import { Button } from './Button'
import { Status } from './Status'

export const CreateTest = () => {
  const [showModal, setShowModal] = useState(false)
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [status, setStatus] = useState<TStatus>('pending')
  const [isLoading, setIsLoading] = useState(false)

  const { createTestCase } = useContext(AppContext)
  const ref = useRef()

  useOnClickOutside(ref, () => setShowModal(false))

  useEffect(() => {
    if (!showModal) {
      setName('')
      setDescription('')
      setStatus('pending')
    }
  }, [showModal])

  const handleCreateTestCase = async () => {
    setIsLoading(true)
    await createTestCase({ id: uuid(), name, description, status })
    setIsLoading(false)
    setShowModal(false)
  }

  return (
    <>
      <button
        onClick={() => setShowModal((show) => !show)}
        className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded fit"
      >
        Create Test
      </button>
      {showModal && (
        <div
          ref={ref}
          className="fixed bg-white rounded-lg text-left w-[650px] shadow-xl transition-all sm:my-8 top-1/4 left-[calc(50%_+_144px)] transform -translate-x-1/2 -translate-y-1/2"
        >
          <div className="bg-white p-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div>
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3 className="text-xl leading-6 font-medium text-gray-900" id="modal-title">
                  Create test
                </h3>
                <div className="my-3">
                  <p className="text-sm text-gray-500">Describe and create a new test case</p>
                </div>
                <div className="flex flex-col gap-3">
                  <input
                    className="border text-gray-900 text-sm rounded-lg block w-full p-2.5  border-gray-600  "
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    autoFocus={showModal}
                  />

                  <div>
                    <input
                      className="border text-gray-900 text-sm rounded-lg block w-full p-2.5 border-gray-600  "
                      placeholder="Description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </div>
                  <div>
                    <Status status={status} onUpdate={(status) => setStatus(status)} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <Button
              variant="primary"
              onClick={handleCreateTestCase}
              Icon={
                isLoading ? <i className="fa-solid fa-circle-notch animate-spin"></i> : undefined
              }
              styles="ml-1"
            >
              Create
            </Button>
            <button
              type="button"
              onClick={() => setShowModal(false)}
              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  )
}
