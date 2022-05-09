import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../contexts'

const Register = () => {
  const [organisation, setOrganisation] = useState('')
  const { createOrganisation, error } = useContext(AppContext)

  return (
    <div className="bg-white p-5 max-w-lg mx-auto rounded shadow-sm space-y-5">
      <h2 className="text-4xl px-4 ">Create account</h2>

      <input
        className="w-full border rounded h-12 px-4 focus:outline-none"
        placeholder="Organisation name"
        value={organisation}
        onChange={(e) => setOrganisation(e.target.value)}
      />
      <div className="text-red-400 text-sm text-center">{error}</div>
      <div>
        <div className="flex flex-col">
          <button
            className="bg-orange-500 text-sm active:bg-gray-700 cursor-pointer font-regular text-white px-4 py-2 rounded uppercase mb-5"
            onClick={async () => await createOrganisation(organisation)}
          >
            Register
          </button>
          <p
            className="text-gray-400 text-sm
    underline self-center
    md:self-auto mt-4 md:mt-0 text-center"
          >
            <Link to="/login">Already have an account?</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Register
