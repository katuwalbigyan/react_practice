import React, { useEffect, useState } from 'react'
import User from './User'

const GitFinder = () => {

    const [username, setUsername] = useState('katuwalbigyan')
    const [userData, setUserData] = useState(null)
    const [loading, setLoading] = useState(false)

    function handleSubmit(){
        fetchUserData()
    }

    async function fetchUserData(){
        setLoading(true)
        const res = await fetch(`https://api.github.com/users/${username}`)

        const data = await res.json()

        if(data){
            setUserData(data)
        }

        setLoading(false)
        console.log(data)
        setUsername("")
    }

    useEffect(()=>{
        fetchUserData()
    }, [])

    if(loading){
        return <h1>Loading...</h1>
    }

  return (
    <div id="wrapper">
      <div>
        <input 
        name="search"
        type='text'
        value={username}
        placeholder="Search Github Username"
        onChange={(event) => setUsername(event.target.value)}
        />
        <button onClick={handleSubmit}>
            Search
        </button>
        {
            userData !== null ? 
            <User user={userData} />
            : null
        }
      </div>
    </div>
  )
}

export default GitFinder
