"use client"
import Image from 'next/image'
import React from 'react'
import { styled } from 'styled-components'
import logo from "/public/logo.png"
import footer from '@/utils/footer'

import {
    AiFillGithub,
    AiFillTwitterCircle,
    AiFillInstagram,
    AiFillLinkedin
} from "react-icons/ai"

import { BsDiscord } from "react-icons/bs"

const Footer = () => {
    return (
        <FooterStyled>
            <nav>
                <div className='logo-con'>
                    <div className="logo">
                        <Image src={logo} width={36} alt="logo" />
                        <h2>Logo</h2>
                    </div>

                    <div className='input'>
                        <input type="text" placeholder='Subscribe here...' />
                        <button> &#8594;</button>
                    </div>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores deleniti
                    </p>
                    <div className="social">
                        <AiFillGithub />
                        <AiFillTwitterCircle />
                        <AiFillInstagram />
                        <BsDiscord />
                        <AiFillLinkedin />
                    </div>
                </div>
                <div>

                    {footer.map((item, index) => {
                        return (
                            <div key={index}>
                                <h4>{item.title}</h4>
                                <ul>
                                    {item.links.map((text, index) => {
                                        return (
                                            <li key={index}>
                                                <a href=''>{text.name}</a>
                                            </li>
                                        )
                                    })}
                                </ul>

                            </div>
                        )
                    })}
                </div>
            </nav>
        </FooterStyled>
    )
}

const FooterStyled = styled.footer`
    postion: relative;
    z-index: 10;
    padding: 5rem 10rem 0 10rem;
    background-color: var(--color-bg);
    border-top: 1px solid var(--color-border);

    nav{
        display: flex;
        justify-content: space-between;
        gap: 3rem;

        .logo-con{
            display: flex;
            flex-direction: column;
            gap: 2rem;
            width: 50%;

            .input{
                position: relative;

                input{
                    width: 100%;
                    padding: 1rem 0.8rem;
                    border-radius: 8px;
                    background-color: #161616;
                    border: 1px solid var(--color-border);

                    &::placeholder{
                        color: var(--color-border);
                        font-weight: 500;
                    }
                }

                button {
                    position: absolute;
                    right: 2rem;
                    top: 50%;
                    transform: translateY(-50%);
                    background: transparent;
                    cursor: pointer;
                    transition: all 0.3s ease-in-out;

                    &:hover{
                        color: white;
                        transform: translateY(-50%) translateX(0.5rem);
                    }
                }
            }
        }
    }
`;

export default Footer