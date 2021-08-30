import Head from 'next/head'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { HeroSection } from '../components/HeroSection'
import { SignUpForm } from '../components/SignUpForm'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="flex flex-wrap justify-center">
        <HeroSection />
        <SignUpForm />
      </main>

      <Footer />
    </div>
  )
}
