import React, { useEffect, useRef, useState } from 'react'
// import Typed from 'react-typed'
import styled from 'styled-components'
// import MainButton from '../components/styled-components/MainButton'
import Typed from "typed.js";
import { motion } from 'framer-motion'
import Footer from '../components/Footer';


const Home = () => {
    const el = useRef<any>(null)
    const [typingComplete, setTypingComplete] = useState(false)

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: [
                "I’m an interfa",
                `<p>I'm a software engineer and I specialize in building <br/> (and occasionally designing) clean, high-performant, pixel-perfect user interfaces and digital experiences.<br/>I sometimes take up open source responsibilities but currently, I'm focused on building accessible, human centered products at <a style="color: rgb(0 127 244)" href="https://kinfolk.vc" target="_blank">Kinfolk.</a></p>`,
            ],
            contentType: 'html',
            startDelay: 300,
            typeSpeed: 70,
            backSpeed: 10,
            backDelay: 300,
            smartBackspace: false,
            showCursor: true,
            cursorChar: ''
        });

        // Destroying
        return () => {
            typed.destroy();
        };
    }, []);
    useEffect(() => {
        setTimeout(() => {
            setTypingComplete(true)
        }, 24000);

        return () => {
            setTypingComplete(false)
        }
    }, [typingComplete])

    return (
        <motion.div className="bgImg w-screen h-screen relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 1 } }}
            exit={{ opacity: 0, transition: { delay: 0.5, duration: .5 } }}
        >
            <div className='bg-[#010816] absolute w-full h-full top-0 left-0 z-10 opacity-[0.8]'></div>
            <div className='h-[calc(100vh-73px)] w-full max-w-[1100px] mx-auto flex flex-col justify-start px-[20px] pt-[150px] z-40'>
                <div className='z-50'>
                    <span className='block mb-[30px] text-mainBlue font-medium'><code>Hi, my name is</code></span>
                    <h1 className='big-heading leading-[1.3] opacity-100'>Chukwudalu Ayika.</h1>
                    <h2 className='big-heading leading-[1.3] text-[#cbcbcb]'>I build things for the web.</h2>
                    <StyledTypingEffect ref={el} className='md-texts it-text-shadow max-w-[540px] min-h-[120px] md:min-h-[180px] mt-[30px] text-[#cbcbcb] font-medium'></StyledTypingEffect>
                    <div className="cta flex items-center justify-start mt-12">
                        {/* <Link to='/showcase' className='contents'> */}
                        {/* <MainButton className={typingComplete ? 'visible opacity-100 main-transition' : 'invisible opacity-0 main-transition'}><code>GET IN TOUCH</code></MainButton> */}
                    </div>
                </div>
            </div>
            <Footer />
        </motion.div>
    )
}

const StyledTypingEffect = styled.div`
    .typed-cursor {
        max-height: 40px!important;
    }
`

export default Home