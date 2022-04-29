import React from 'react'
export type TStatus = 'passed' | 'failed' | 'pending'

const colorMap = {
  passed: 'bg-green-500',
  failed: 'bg-red-500',
  pending: 'bg-gray-500',
}

export const Status = ({ status }: { status: TStatus }) => (
  <div
    className={`${colorMap[status]} flex flex-wrap justify-between items-center rounded-full capitalize cursor-pointer py-2 px-4 w-28`}
  >
    <div className="text-white font-semibold text-sm">{status}</div>
    <div>
      <i className="fa-solid fa-angle-down fa-fw" style={{ color: 'white' }}></i>
    </div>
  </div>
)
