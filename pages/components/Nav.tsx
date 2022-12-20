// write a boilerplate nav component here nextjs ts style boi

import Link from 'next/link'

export default function Nav() {
    return (
        <nav className="pl-6 pt-4 pb-4 absolute top-0 flex flex-row gap-8 bg-neutral-800 border-[1px] border-neutral-600 w-screen">
        <Link href="/">
            <p className="text-white">Home</p>
        </Link>
        <Link href="/login">
            <p className="text-white">Download</p>
        </Link>
        <Link href="/leaderboard">
            <p className="text-white">Leaderboard</p>
        </Link>
        </nav>
    )
    }
