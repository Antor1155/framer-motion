import React, { useRef } from 'react'
import { styled } from 'styled-components'

const TextWrapper = ({ children }) => {
  const text = useRef(null)
  return (
    <div ref={text}>
      <p>
        {children}
      </p>
    </div>
  )
}

const TextSection = () => {
  return (
    <TextSectionStyled>x
      <TextWrapper>
        Lorem, ipsum dolor sit amet consectetur adipisicing
      </TextWrapper>
      <TextWrapper>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </TextWrapper>
      <TextWrapper>
        Lorem ipsum, dolor sit amet consectetur adipisicing
      </TextWrapper>

      <TextWrapper>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      </TextWrapper>
      <TextWrapper>
        Lorem, ipsum dolor sit amet consectetur adipisicing
      </TextWrapper>
      <TextWrapper>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </TextWrapper>


    </TextSectionStyled>
  )
}

const TextSectionStyled = styled.section`
  p{
    font-size: 2.3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 3rem;
  }
`

export default TextSection