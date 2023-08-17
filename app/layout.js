"use client"
import { styled } from 'styled-components'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

const LinesContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  z-index: -1;

  display: flex;
  justify-content: space-around;

  div{
    width: 1px;
    height: 100%; 
    background-color: var(--color-border);
    color: var(--color-border);
    padding-top: 10vh;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    font-size: 15px;
    font-weight: bolder;

  }
`

export default function RootLayout({ children }) {
  const shapes = []

  for (let i= 0; i < 11; i++){
    shapes.push(<p>o</p>)
    shapes.push(<p>x</p>)
  }

  return (
    <html lang="en">
      <body className={inter.className}>
        <LinesContainer>
          <div>
           {shapes}
          </div>
          <div>
           {shapes}
          </div>
          <div>
           {shapes}
          </div>
          <div>
           {shapes}
          </div>
          
        
        </LinesContainer>
        {children}
      </body>
    </html>
  )
}
