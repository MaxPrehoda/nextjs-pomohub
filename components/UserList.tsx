import { useState, useEffect } from 'react'

function UserList() {
  const [data, setData] = useState<any[]>([])
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('/api/users')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])

  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No profile data</p>
  
  console.log('data', data)
  return ( 
    // make a list of users with className='w-[300px] h-[25px] pb-2 mb-2 bg-white rounded-md' key={user.id}>{user.username}
    <ul>
      {data.map((user) => (
        <li className='w-[300px] h-[30px] pb-2 mb-2 bg-zinc-700 rounded-md pl-2 pt-1' key={user.id}>{user.username}</li>
      ))}
    </ul>
  )
      }


export default UserList