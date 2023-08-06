import React from 'react'
import styled from 'styled-components';
import { motion } from 'framer-motion'
import Footer from '../components/Footer';

const About = () => {
    const technologies = ['Javascript', 'Typescript', 'React', 'Vue', 'NextJS', 'NuxtJS', 'Tailwindcss', 'Wordpress']
    const technologiesList = technologies.map((technology) => (<li key={technology} className='flex items-center text-faintText text-[13px]'>
        <span className='text-mainBlue mr-4'>
            <svg width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.80998 3.61691L0.562258 0.0589938C0.505276 0.0203463 0.440638 0 0.37484 0C0.309042 0 0.244404 0.0203463 0.187421 0.0589938C0.13022 0.0977893 0.0827599 0.153652 0.049848 0.220926C0.0169361 0.288199 -0.000259269 0.364494 2.95481e-06 0.442086V7.55791C-0.000259269 7.63551 0.0169361 7.7118 0.049848 7.77907C0.0827599 7.84635 0.13022 7.90221 0.187421 7.94101C0.244404 7.97965 0.309042 8 0.37484 8C0.440638 8 0.505276 7.97965 0.562258 7.94101L5.80998 4.38309C5.86766 4.34469 5.91565 4.28899 5.94903 4.22169C5.98241 4.15439 6 4.07789 6 4C6 3.92211 5.98241 3.84561 5.94903 3.77831C5.91565 3.71101 5.86766 3.65531 5.80998 3.61691ZM0.749677 6.79613V1.20387L4.87288 4L0.749677 6.79613Z" fill="currentColor" />
            </svg>
        </span>
        <code>{technology}</code>
    </li>))
    return (
        <motion.div className='min-h-[calc(100vh-73px)] w-full max-w-[1100px] mx-auto flex flex-col justify-center px-[20px] md:py-0 py-[100px] pt-[150px] relative'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 1 } }}
            exit={{ opacity: 0, transition: { delay: 0.5, duration: .5 } }}
        >
            <div className="heading flex items-center justify-start w-full mb-8">
                <h1 className='mr-4 font-semibold md:text-[30px] text-[24px]'><span className='text-mainBlue font-bold mr-2 md:text-[25px] text-[20px]'><code>01.</code></span>Profile</h1>
            </div>
            <div className="details flex items-center md:flex-row flex-col-reverse">
                <div className="left lg:max-w-[60%] md:max-w-[50%] max-w-full">
                    <p className='md-texts text-faintText'>My name is Chukwudalu and I enjoy creating things that live on the internet. My interest in web development started back in 2021 when I decided to try re-designing paystack’s website  — turns out hacking my way in creating the website altogether taught me a lot about HTML & CSS! <br /><br />
                        Fast-forward to today, and I’ve had the privilege of working at a start-up, <a className='text-mainBlue' href="https://stutern.com" target="_blank" rel="noreferrer">an educational organization</a>, <a className='text-mainBlue' href="https://kinfolk.vc" target="_blank" rel="noreferrer">a VC</a>, and <a className='text-mainBlue' href="https://quabbly.com" target="_blank" rel="noreferrer">a no-code software company</a>. My main focus these days is building accessible, inclusive products and digital experiences at Kinfolk for a variety of porfolio companies. <br /><br />
                        Here are a few technologies I’ve been working with recently:</p>
                    <ul className='mt-6 grid grid-cols-2 gap-3'>
                        {technologiesList}
                    </ul>
                </div>
                <div className="right lg:w-[40%] md:w-[50%] w-full flex items-center md:justify-center justify-start">
                    <StyledHeadshot className='relative max-w-[320px] min-h-[320px] rounded-[8px] md:mt-0 mt-8 mb-16 cursor-none'>
                        <img src='https://res.cloudinary.com/cdacs/image/upload/v1691278945/chukwu_ayika.f63cffee_amrt8s.webp' alt="chukwu" className='w-full h-full z-[2] relative blur-[4px] hover:blur-none transition-all' /> {/* blur-[2px] hover:blur-none transition-all */}
                        {/* <span className='indicate text-[13px] font-medium flex items-center justify-center rounded-full max-w-[max-content] px-[20px] py-[10px] mx-auto bg-[#ffffff3d] absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-[2] opacity-[1] border-[2px] border-mainBlue'>
                            Hover here
                            <span className='block text-mainBlue ml-3'>
                                <svg className='w-[20px] h-[20px]' xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M21.07,16.83,19,14.71a3.08,3.08,0,0,0-3.4-.57l-.9-.9a7,7,0,1,0-1.41,1.41l.89.89A3,3,0,0,0,14.71,19l2.12,2.12a3,3,0,0,0,4.24,0A3,3,0,0,0,21.07,16.83Zm-8.48-4.24a5,5,0,1,1,0-7.08A5,5,0,0,1,12.59,12.59Zm7.07,7.07a1,1,0,0,1-1.42,0l-2.12-2.12a1,1,0,0,1,0-1.42,1,1,0,0,1,1.42,0l2.12,2.12A1,1,0,0,1,19.66,19.66Z" />
                                </svg>
                            </span>
                        </span> */}
                    </StyledHeadshot>
                </div>
            </div>
            <Footer />
        </motion.div>
    )
}

const StyledHeadshot = styled.div`
    ::before {
        content: 'Hover me 🙃';
        display: block;
        position: absolute;
        left: 40%;
        top: 50%;
        z-index: 3;
        background-color: #ffffff0d;
        color: white;
        font-size: 12px;
        padding: 6px 8px;
        border-radius: 8px;

    }
    ::after {
        content: '';
        display: block;
        position: absolute;
        left: 12px;
        top: 12px;
        max-width: 320px;
        width: 100%;
        min-height: 320px;
        height: 100%;
        border: solid 2px #007FF4;
        border-radius: 8px;
        z-index: 1;
    }
    :hover {
        ::after {
            left: 10px;
            top: 10px;
            transition: all .2s;
        }
        ::before {
            opacity: 0;
            transition: all .2s;
        }
        .indicate {
            opacity: 0;
            display: none;
        }
    }
`

export default About