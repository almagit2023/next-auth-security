import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
import LoginForm from '@/components/LoginForm'

export default function Home() {
  return (
    <main>
      <LoginForm/>
    </main>
  )
}
