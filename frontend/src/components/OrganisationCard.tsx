import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Organisation as OrganistionType } from '../../../types/organisation'

const avatarSizeMap = (size: 'sm' | 'md' | 'lg') => {
  switch (size) {
    case 'sm':
      return 'text-md w-8 h-8'
    case 'md':
      return 'text-xl w-10 h-10'
    case 'lg':
      return 'text-4xl w-16 h-16'
    default:
      return 'text-xl w-10 h-10'
  }
}

export const Avatar = ({
  letter,
  size = 'md',
  onClick,
}: {
  size?: 'sm' | 'md' | 'lg'
  letter: string
  onClick?: () => void
}) => (
  <div
    onClick={onClick}
    className={`flex justify-center items-center rounded-full bg-indigo-500 text-white font-bold ${avatarSizeMap(
      size
    )}  ${onClick && 'hover:bg-indigo-700 cursor-pointer'} relative`}
  >
    {letter}
  </div>
)

const Modal = ({
  name,
  description,
  id,
  onClose,
}: {
  name: string
  description: string
  id: string
  onClose: () => void
}) => (
  <div className="w-[400px] absolute top-10 right-10 rounded-lg border-2 bg-white border-slate-200 shadow-lg p-6 flex flex-col items-center gap-4">
    <Avatar letter="G" size="lg" />
    <div className="text-lg font-bold">{name}</div>
    <div className="text-md text-slate-600">{description}</div>
    <Link to={`/organisation/${id}`} onClick={onClose}>
      <button className="rounded-full border-2 border-slate-500  py-1 px-5 text-slate-900 hover:bg-slate-50">
        Edit
      </button>
    </Link>
  </div>
)

export const OrganisationCard = () => {
  const [showModal, setShowModal] = useState(false)
  const [organisation, setOrganisation] = useState<OrganistionType>()

  const getOrgData = async () => {
    const res = await fetch('api/organisation/1')
    const json: OrganistionType = await res.json()
    setOrganisation(json)
  }

  useEffect(() => {
    getOrgData()
  }, [])

  if (organisation)
    return (
      <div className="absolute top-0 right-0 m-5 z-10">
        <div>
          <Avatar
            letter={organisation.name[0] || ''}
            onClick={() => setShowModal((show) => !show)}
          />
          {showModal && (
            <Modal
              name={organisation.name}
              description={organisation.description}
              id={organisation.id}
              onClose={() => setShowModal(false)}
            />
          )}
        </div>
      </div>
    )
  return null
}
