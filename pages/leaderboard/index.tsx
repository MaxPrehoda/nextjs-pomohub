import Head from 'next/head'
import Image from 'next/image'
import { BoltIcon, ChartBarIcon, ClockIcon, DevicePhoneMobileIcon, GlobeAltIcon, GlobeAsiaAustraliaIcon, ListBulletIcon, ScaleIcon } from '@heroicons/react/24/outline'
import styles from '../../styles/home.module.css'
import * as medium1 from '../../public/medium1.png'
import React from 'react'
import { sendUsers } from '../api/users'
import UserList from '../../components/UserList'

const features = [
  {
    name: 'Time your work',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: ClockIcon,
  },
  {
    name: 'Complete your tasks',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: ListBulletIcon,
  },
  {
    name: 'Use it anywhere',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: GlobeAsiaAustraliaIcon,
  },
  {
    name: 'View your stats',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: ChartBarIcon,
  },
]

//function that gets the users from the api

export default function leaderBoard() {
  return(
    <div className={' bg-neutral-900'}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main+' bg-neutral-900'}>
      <div className="flex-col justify-center space-y-2">
      <span className="">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="inline w-8 h-8 pb-1.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
          />
        </svg>
        <h1 className="text-2xl inline text-white pl-1">Leaderboard</h1>
      </span>
    <UserList />
    </div>
      </main>

      <footer className={styles.footer+' mt-20'}>
        <a
          href="https://pomohub.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pomo Hub Footer Placeholder :0
        </a>
      </footer>
    </div>
  )
}
