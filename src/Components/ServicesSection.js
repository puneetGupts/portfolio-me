import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import ServiceCard from '../Components/ServiceCard';
import design from '../img/design.svg';
import intelligence from '../img/intelligence.svg';
import gamedev from '../img/game-dev.svg';
import data from '../img/data-storage-device.svg';


function ServicesSection() {
    return (
        <InnerLayout>
            <ServicesSectionStyled>
                <Title title={'Expertise'} span={'expertise'} />
                <div className="services">
                    <ServiceCard 
                        image={design} 
                        title={'Software'} 
                        paragraph={'Software is what runs the whole world. I have an experience of 3+ years in software development and open source technologies.'}
                    />
                    <div className="mid-card">
                        <ServiceCard 
                            image={data} 
                            title={'Data Science'} 
                            paragraph={'The stream of data science excites me. I have built analytics tools in the past and have used Machine learning to develop predicting models out of the data.'}
                        />
                    </div>
                    <ServiceCard 
                        image={intelligence} 
                        title={'Other Technologies'} 
                        paragraph={'I have worked on Devops ,Cloud and Languages like Golang,C++ including frameworks like Hibernate,ELK etc'}
                    />
                </div>
            </ServicesSectionStyled>
        </InnerLayout>
    )
}

const ServicesSectionStyled = styled.section`
    .services{
        margin-top: 5rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1.5rem;
        @media screen and (max-width:1000px){
            flex-direction: column;
        }
        @media screen and (max-width:950px){
            grid-template-columns: repeat(2, 1fr);
        }
        @media screen and (max-width:650px){
            grid-template-columns: repeat(1, 1fr);
        }
       
    }
`;

export default ServicesSection;
