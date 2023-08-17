"use client"
import Header from '@/Components/Header/Header'
import SectionLayout from '@/Components/SectionLayout/SectionLayout'
import { styled } from 'styled-components'
import { cards } from '@/utils/cards'
import Card from '@/Components/Cards/Card'

const MainStyled = styled.main`
  min-height: 100vh;
  width: 100vw;

  .cards{
    display: grid;
    grid-template-columns: repeat(5, 17rem);
    gap: 4rem;
    posiition: absolute;
  }
`

export default function Home() {
  return (
    <>
      <Header />
      <MainStyled>
        <SectionLayout>
          <div className='cards'>
            {cards.map(cardInfo => (<Card
              key={cardInfo.id}
              {...cardInfo}
            >

            </Card>))}
          </div>
        </SectionLayout>
      </MainStyled>

    </>
  )
}
