"use client"
import Header from '@/Components/Header/Header'
import Image from 'next/image'
import { styled } from 'styled-components'


const MainStyled = styled.main`
  min-height: 100vh;
  width: 100vw;
`

export default function Home() {
  return (
    <>
      <Header />
      <MainStyled>

      </MainStyled>

    </>
  )
}
