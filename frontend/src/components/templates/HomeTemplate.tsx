import * as React from 'react'
import { Header } from '../organisms/Header'
import { Hero } from '../molecules/Hero/Hero'
import { Footer } from '../organisms/Footer'
import { ProposalList } from '../organisms/Proposal/ProposalList'
import { ProposalWithVotes } from '../../shared/utils'

interface HomeTemplateProps {
  proposals: ProposalWithVotes[];
}
const HomeTemplate: React.FC<HomeTemplateProps> = ({
   proposals
}: HomeTemplateProps) => {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <ProposalList proposals={proposals} />
      </main>
      <Footer />
    </div>
  )
}

export default HomeTemplate
