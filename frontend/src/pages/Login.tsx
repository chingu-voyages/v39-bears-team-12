import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => (
  <div className="bg-white p-5 max-w-lg mx-auto rounded shadow-sm">
    <h2 className="text-4xl px-4 ">Log In</h2>
    <form className="mt-10 space-y-8">
      <input
        className="w-full border rounded h-12 px-4 focus:outline-none"
        placeholder="Email adress "
        type="email"
      />

      <div className="flex items-center ">
        <input
          className="w-full border rounded h-12 px-4 focus:outline-none -mr-7"
          placeholder="Password"
          type="password"
        />
      </div>
      <div>
        <div className="flex flex-col">
          <button
            className="bg-orange text-sm active:bg-gray-700 cursor-pointer font-regular text-white px-4 py-2 rounded uppercase mb-5"
            type="submit"
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

export default Login
