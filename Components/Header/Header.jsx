"use client"
import Image from 'next/image'
import logo from "@/public/logo.png"

import React, { useRef } from 'react'
import Link from 'next/link'
import Button from '../Button/Button'
import { styled } from 'styled-components'

import { FaRocket, FaWallet } from "react-icons/fa"
import { Abril_Fatface } from 'next/font/google'
import Hover3d from '@/utils/Hover'

const abrid = Abril_Fatface({
    subsets: ["latin"],
    weight: ["400"],

})


const HeaderStyled = styled.header`

    nav{
        padding: 0 4rem;
        min-height: 10vh;
        border: 1px solid var(--color-border);
        display: flex;
        justify-content: space-between;
        align-items: center;

        .logo{
            display: flex;
            align-items: center;
            gap: 1rem;
            cursor: pointer;
        }

        .input{
            flex: 2;
            display: flex;
            justify-content: center;

            input{
                width: 55%;
                padding: 0.6rem 0.8rem;
                border-radius: 8px;
                background-color: #161616;
                border: 1px solid var(--color-border);

                &::placeholder {
                    color: var(--color-border);
                    font-weight: 500;
                }
            }
        }

        .nav-items{
            display: flex;
            align-items: center;
            gap: 2rem;

            li{
                transition: all 0.2s ease-in-out;

                &:hover{
                    color: white;
                    transform: scale(1.1);
                }
            }

        }

    }

    .header-content {
        display: grid;
        grid-template-columns: 1fr 1fr;

        justify-content: space-between;
        align-items: center;
        gap: 4rem;
        min-height: calc(100vh - 10vh);
        padding: 5%;

        .text-content {
            h1{
                font-size: clamp(2rem, 3vw, 3rem);
                color: #f2994a;
                transition: all 0.01s linear;
                padding-bottom: 1.5rem;
            }

            .buttons {
                display: flex;
                gap: 1rem;
                margin-top: 2.5rem;
            }
        }

        .image-content{
            padding: 1rem;
            border-radius: 8px;
            background-color: var(--color-bg);
            border: 1px solid var(--color-border);
            width: 100%;
            height: 100%;
        }

        .image-content .image{

            width: 100%;
            height: 100%;
            position: relative;

            img{
                border-radius: 8px;
            }
        }

    }

`;


const Header = () => {
    const hero = useRef(null)

    const hoverHero = Hover3d(hero, {x: 50, y: -50, z: 30})

    return (
        <HeaderStyled>
            <nav>
                <div className='logo'>
                    <Image src={logo} alt="logo" width={36} />
                    <h2>Logo</h2>
                </div>

                <div className="input">
                    <input type="text" placeholder='Search' />
                </div>

                <ul className='nav-items'>
                    <li>
                        <Link href="#" > Home</Link>
                    </li>
                    <li>
                        <Link href="#" > Auctions</Link>
                    </li>
                    <li>
                        <Link href="#" > Marketplace</Link>
                    </li>
                    <li>
                        <Link href="#" > About</Link>
                    </li>

                    <Button name="Connect Wallet" icon={<FaWallet></FaWallet>} ></Button>
                </ul>

            </nav>

            <div className="header-content" ref={hero}>
                <div className="text-content">
                    <div className={abrid.className}>
                        <h1>Buy, collect and sell extraordinary NFTs</h1>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, eius. Perspiciatis sequi labore sunt, corporis dolorum fugiat eligendi, consequuntur, voluptatem nihil hic delectus earum expedita maxime velit distinctio illum provident.</p>

                        <div className='buttons'>
                            <Button
                                name="Get Started"
                                background='#f2994a'
                                color="#fff"
                                border="1px solid #f2994a"
                                icon={<FaRocket />}
                            />
                            <Button name="Learn More" />
                        </div>
                    </div>
                </div>

                <div className="image-content"
                    style={
                        {
                        transform: hoverHero.transform,
                        transformStyle: "preserve-3d",
                        perspective: "1000px"
                    }
                    }

                >
                    <div className="image">
                        <Image
                            src="/images/monkey.png"
                            alt='hero'
                            fill={true} />
                    </div>
                </div>
            </div>

        </HeaderStyled>
    )
}

export default Header