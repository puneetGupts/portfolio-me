import React from 'react'
import styled from 'styled-components';
import FacebookIcon from '@material-ui/icons/Facebook';
import GithubIcon from '@material-ui/icons/GitHub';
import Particle from '../Components/Particle';
import { init } from 'ityped';
import { useEffect,useRef } from "react";
import { LinkedIn } from '@material-ui/icons';
function HomePage() {
    const textRef=useRef();
    useEffect(()=>{
        init(textRef.current, {
            showCursor: true,
            backDelay:1500,
            backSpeed:60,
            strings: ["Developer","Enthusiast","Engineer"],
          });
    },[]);    
    return (
        <HomePageStyled>
            <div className="particle-con">
                <Particle />
            </div>
            <div className="typography">
                <h1>Hi, I'm <span>Puneet Gupta</span></h1>
                <p>
                Software <span ref={textRef}></span>
                </p>
                <div className="icons">
                    <a href="https://www.facebook.com/profile.php?id=100006848388380" className="icon i-facebook" target="_blank">
                        <FacebookIcon />
                    </a>
                    <a href="https://github.com/puneetGupts" className="icon i-github" target="_blank">
                        <GithubIcon />
                    </a>
                    <a href="https://www.linkedin.com/in/puneet-gupta-6bb335ab/" className="icon i-linkedin" target="_blank">
                        <LinkedIn />
                    </a>
                </div>
            </div>
        </HomePageStyled>
    )
}

const HomePageStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;
   
    .typography{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 80%;

        .icons{
            display: flex;
            justify-content: center;
            margin-top: 1rem;
            .icon{
                border: 2px solid var(--border-color);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all .4s ease-in-out;
                cursor: pointer;
                &:hover{
                    border: 2px solid var(--primary-color);
                    color: var(--primary-color);
                }
                &:not(:last-child){
                    margin-right: 1rem;
                }
                svg{
                    margin: .5rem;
                }
            }
            .i-github{
                &:hover{
                    border: 2px solid #5F4687;
                    color: #5F4687;
                }
            }
        }
    }
`;

export default HomePage;
