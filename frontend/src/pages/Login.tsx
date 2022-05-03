import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../contexts'

const Login = () => {
  const { getOrganisation } = useContext(AppContext)
  const [orgId, setOrgId] = useState('')
  return (
    <div className="bg-white p-5 max-w-lg mx-auto rounded shadow-sm">
      <h2 className="text-4xl px-4 ">Log In</h2>
      <form
        className="mt-10 space-y-8"
        value={orgId}
        onChange={(e) => setOrgId(e.target.value)}
        onSubmit={(e) => {
          e.preventDefault()
        }}
      >
        <input
          className="w-full border rounded h-12 px-4 focus:outline-none"
          placeholder="Organisation id"
        />
        <div>
          <div className="flex flex-col">
            <button
              className="bg-orange-500 text-sm hover:bg-orange-600 cursor-pointer font-regular text-white px-4 py-2 rounded uppercase mb-5"
              onClick={() => {
                if (orgId.length) {
                  getOrganisation(orgId)
                }
              }}
            >
              Log in
            </button>
            <p
              className="text-gray-400 text-sm
        underline self-center
        md:self-auto mt-4 md:mt-0 text-center"
            >
              <Link to="/register">Don't have an account?</Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Login
