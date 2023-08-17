"use client"

import Image from 'next/image'
import React from 'react'
import { styled } from 'styled-components'

const CardStyled = styled.div`
`

const Card = ({ title, description, image }) => {
    return (
        <CardStyled>
            <div className='image' style={{height: "100%",
                    width: "100%",}}>
                
                <p className='new'>New</p>
                <div className='text'>
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
                <Image src={image} alt="product" style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                    borderRadius: "8px",

                }}/>
            </div>

            <div className='overlay'></div>

        </CardStyled>
    )
}

export default Card