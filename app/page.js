"use client"
import Header from '@/Components/Header/Header'
import SectionLayout from '@/Components/SectionLayout/SectionLayout'
import { styled } from 'styled-components'
import { cards } from '@/utils/cards'
import Card from '@/Components/Cards/Card'
import Fullpage from '@/Components/Fullpage'
import TextSection from '@/Components/TextSection/TextSection'
import Footer from '@/Components/Footer/Footer'

const MainStyled = styled.main`
  min-height: 100vh;
  width: 100vw;

  .cards{
    display: grid;
    grid-template-columns: repeat(5, 17rem);
    gap: 4rem;
    posiition: absolute;
  }

  .video{
    padding: 2rem;
    background-color: #161616;
    border-radius: 1rem;
    iframe{
      border: none;
      width: 100%;
      height: 70vh;
    }
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

        <Fullpage></Fullpage>

        <SectionLayout>
          <div className='cards'>
            {cards.map(cardInfo => (<Card
              key={cardInfo.id}
              {...cardInfo}
            >

            </Card>))}
          </div>
        </SectionLayout>

        <SectionLayout>
          <TextSection />
        </SectionLayout>

        <SectionLayout>
          <div className='video'>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/BAHKFybRrZc" title="YouTube video player" frameborder="0" allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

          </div>
        </SectionLayout>

        <SectionLayout>
          <TextSection />
        </SectionLayout>

        <Footer></Footer>
      </MainStyled>

    </>
  )
}
