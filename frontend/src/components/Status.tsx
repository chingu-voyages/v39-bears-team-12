import React, { useRef, useState } from 'react'
import { TStatus } from '../../../types/test'
import useOnClickOutside from '../hooks/useOnClickOutside'

const colorMap = {
  passed: 'bg-green-500',
  failed: 'bg-red-500',
  pending: 'bg-gray-500',
}

export const Status = ({
  status,
  onUpdate,
}: {
  status: TStatus
  onUpdate: (newStatus: TStatus) => void
}) => {
  const [showOptions, setShowOptions] = useState(false)
  const handleClose = () => {
    setShowOptions(false)
  }
  const ref = useRef()
  useOnClickOutside(ref, handleClose)

  return (
    <div ref={ref}>
      <div
        className={`${colorMap[status]} flex flex-wrap justify-between items-center rounded-full capitalize cursor-pointer py-2 px-4 w-28 relative`}
        onClick={() => setShowOptions((show) => !show)}
      >
        <div className="text-white font-semibold text-sm">{status}</div>
        <div>
          <i className="fa-solid fa-angle-down fa-fw" style={{ color: 'white' }}></i>
        </div>
      </div>
      {showOptions && (
        <StatusOptions
          options={Object.keys(colorMap) as TStatus[]}
          onSelect={(option) => {
            onUpdate(option)
            setShowOptions(false)
          }}
        />
      )}
    </div>
  )
}

const StatusOptions = ({
  options,
  onSelect,
}: {
  options: TStatus[]
  onSelect: (newStatus: TStatus) => void
}) => (
  <div
    className="z-10 absolute mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
    role="menu"
    aria-orientation="vertical"
    aria-labelledby="menu-button"
  >
    <div className="py-1" role="none">
      {options.map((option) => (
        <a
          href="#"
          className="text-gray-700 block px-4 py-2 text-sm capitalize"
          onClick={() => onSelect(option)}
        >
          {option}
        </a>
      ))}
    </div>
  </div>
)
