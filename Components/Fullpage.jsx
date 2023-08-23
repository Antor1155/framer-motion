import Image from 'next/image'
import React from 'react'
import { styled } from 'styled-components'

const Fullpage = () => {
  return (
    <FullpageStyled>
        <div className="image">
            <Image
                src="/images/rover.jpg"
                alt="rover"
                fill={true}
                style={{
                    objectFit: "cover",
                    objectPosition: "center",
                    padding: "1.5rem",
                }}
             />
        </div>
    </FullpageStyled>
  )
}

const FullpageStyled = styled.div`
    .image{
        height: 100vh;
        width: calc(100% - 10rem);
        margin: 0 auto;
        position: relative;
        border-radius: 8px;
        border: 1px solid var(--color-border);
        transition: border 0.3s ease-in-out;

        &:hover{
            border: 1px solid #f2994a;
        }

    }

`

export default Fullpage