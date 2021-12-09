import React, { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Card from './components/card'

const App: React.FC = () => {
  const [data, setData] = useState([])
  const [loading, setloading] = useState(false)

  ///for calling an API
  const getUsers = async () => {
    setloading(true)
    const response = await fetch('https://api.github.com/users')
    const data = await response.json()
    setloading(false)
    setData(data)
  }

  //handler for calling an api method to render the users
  const handleUsers = () => {
    getUsers()
  }

  return (
    <>
      <h1 className="text-center mt-5">Github Users</h1>
      <button
        type="button"
        className="btn btn-primary ml-5 mt-5"
        onClick={() => handleUsers()}
      >
        {loading && (
          <div className="spinner-border spinner-border-sm" role="status">
            <span className="sr-only"></span>
          </div>
        )}
        Show Users
      </button>
      <div className="container-fluid mt-5">
        <div className="row text-center">
          <Card data={data} />
        </div>
      </div>
    </>
  )
}

export default App
