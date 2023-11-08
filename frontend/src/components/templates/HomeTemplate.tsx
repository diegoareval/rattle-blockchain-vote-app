import * as React from 'react'
import { Header } from '../organisms/Header'
import { Hero } from '../molecules/Hero/Hero'
import { Footer } from '../organisms/Footer'

interface HomeTemplateProps {
  children: React.ReactNode
}
const HomeTemplate: React.FC<HomeTemplateProps> = ({
  children,
}: HomeTemplateProps) => {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default HomeTemplate
