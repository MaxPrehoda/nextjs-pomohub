import Link from 'next/link'
import { useState, useEffect } from 'react'

//generate a random number between 0 and 62

const randomNum = () => {
    return Math.floor(Math.random() * 62)
}

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
        <Link href='/userStats'>
        <li className='relative w-[300px] h-[40px] pb-2 mb-3 bg-neutral-700 rounded-md pl-2 pt-2' key={user.id}>{user.username}<p className='absolute right-0 pr-2 -mt-6'><span>
            {randomNum()}<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="-mt-6 ml-5 w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
                  </svg>
        </span>
      </p></li></Link>
      ))}
    </ul>
  )
      }


export default UserList