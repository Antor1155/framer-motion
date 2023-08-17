"use client"
import Image from 'next/image'
import logo from "@/public/logo.png"

import React from 'react'
import Link from 'next/link'
import Button from '../Button/Button'
import { styled } from 'styled-components'

import {FaRocket, FaWallet} from "react-icons/fa"


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

`;

const Header = () => {
    return (
        <HeaderStyled>
            <nav>
                <div className='logo'>
                    <Image src={logo} alt="logo" width={36}  />
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

        </HeaderStyled>
    )
}

export default Header