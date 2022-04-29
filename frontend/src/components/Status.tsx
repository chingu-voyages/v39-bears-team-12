import React from 'react'
import { DropDownIcon } from './Icons/DropDown'

type TStatus = 'passed' | 'failed' | 'pending'

const colorMap = {
  passed: 'bg-green-500',
  failed: 'bg-red-500',
  pending: 'bg-gray-500',
}

export const Status = ({ status }: { status: TStatus }) => (
  <div
    className={`${colorMap[status]} flex flex-wrap justify-between rounded-full capitalize cursor-pointer py-2 px-4 w-28`}
  >
    <span className="text-white font-semibold text-sm">{status}</span>
    <DropDownIcon />
  </div>
)
