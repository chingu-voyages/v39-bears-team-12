import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../contexts'

const Login = () => {
  const { handleLogin, error } = useContext(AppContext)
  const [orgName, setOrgName] = useState('')
  return (
    <div className="bg-white p-8 max-w-lg rounded-lg shadow-lg w-96">
      <h2 className="text-4xl px-4 text-center">Log in</h2>
      <form
        className="mt-10 space-y-5"
        onSubmit={(e) => {
          e.preventDefault()
        }}
      >
        <input
          className="w-full border rounded h-12 px-4 focus:outline-none"
          placeholder="Organisation name"
          value={orgName}
          onChange={(e) => setOrgName(e.target.value)}
        />
        <div className="text-red-400 text-sm text-center">{error}</div>
        <div>
          <div className="flex flex-col">
            <button
              className="bg-orange-500 text-sm hover:bg-orange-600 cursor-pointer font-regular text-white px-4 py-2 rounded uppercase mb-5"
              onClick={() => {
                if (orgName.length) {
                  handleLogin(orgName)
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
