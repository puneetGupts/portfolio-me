import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import SmallTitle from '../Components/SmallTitle';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';
import ResumeItem from '../Components/ResumeItem';

function Resume() {
    const briefcase = <BusinessCenterIcon />
    const school = <SchoolIcon />
    return (
        <ResumeStyled>
            <Title title={'TimeLine'} span={'timeline'} />
            <InnerLayout>
                <div className="small-title">
                    <SmallTitle icon={briefcase} title={'Working Experience'} />
                </div>
                <div className="resume-content">
                    <ResumeItem 
                        year={'2020 - 2021'} 
                        title={'Software Developer'}
                        subTitle={'Linux Foundation'}
                        text={'Created Analytics tools that helped Open Source Projects under Linux Foundation to grow and expand. Majorly focussed on performing extract, transform and load on social media data from platforms like Facebook, twitter, linkedIn , pintrest and visualizing data. '} 
                    />
                    <ResumeItem 
                        year={'2017 - 2020'} 
                        title={'Software Developer'}
                        subTitle={'Tata Consultancy Services'}
                        text={'Worked as an analyst for Enterprise Application Services and was responsible to maintain and enhance the EAS systems for a major UK conglomerate. Worked as a full stack developer to build a brand new UI for the client using Javascript, CSS HTML with backend as Siebel scripts. '} 
                    />
                    <ResumeItem 
                        year={'2015 - 2017'} 
                        title={'Joint Membership head'}
                        subTitle={'IEEE-PCE'}
                        text={'As a member head of IEEE my duties involved creating workshops on different technologies at our college. I was responsible for managing ,conducting and registering members for these workshops . I also maintained the websites , social media handles for the college chapter of IEEE-PCE. '} 
                    />
                </div>
                
                <div className="small-title u-small-title-margin">
                    <SmallTitle icon={school} title={'Educational Qualifications'} />
                </div>
                <div className="resume-content ">
                    <ResumeItem 
                        year={'2021 - Present'} 
                        title={"Mater's in Computer Science"}
                        subTitle={'University of Texas at Dallas'}
                        text={'I am currently Pusrsuing my masters education in computer science at the University of Texas at Dallas with majors in Data Science and Machine Learning. '} 
                    />
                    <ResumeItem 
                        year={'2013 - 2017'} 
                        title={"Bachelor's in Computer Engineering"}
                        subTitle={"Pillai's College of Engineering"}
                        text={"I completed my Bachelor's in Computer Engineering from Pillai's College of Engineering . I secured a GPA of 8.65 our of 10 and was amongst the top rankers. "} 
                    />
                    <ResumeItem 
                        year={'2015 - 2017'} 
                        title={"Higher Secondary Education"}
                        subTitle={'Pace Junior Science College'}
                        text={"I completed my Higher Secondary Education from Pace Junior Science College and secured an overall percentage of 87% out of 100. I took basic C++ course as a optional subject."} 
                    />
                </div>
            </InnerLayout>
        </ResumeStyled>    
    )
}

const ResumeStyled = styled.section`
    .small-title{
        padding-bottom: 3rem;
    }
    .u-small-title-margin{
        margin-top: 4rem;
    }

    .resume-content{
        border-left: 2px solid var(--border-color);
    }
`;
export default Resume
