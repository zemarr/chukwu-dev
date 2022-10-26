import React, { Fragment, useState } from 'react'
import { Tab } from '@headlessui/react'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion';

const Work = () => {
  const [selectedIndex, setSelectedIndex] = useState(0)

  const workExperience = [
    {
      company: 'Kinfolk',
      company_website: 'https://kinfolk.vc/en',
      role: 'Software Engineer',
      duration: 'October 2021 - Present',
      duties: [
        'Write modern, performant, maintainable code for array of clients and internal projects',
        'Work with a variety of different languages, platforms, frameworks and content management systems such as Javascript, Typescript, Vue, NuxtJs, NestJs, React, Wordpress and Netlify',
        'Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis',
        'Collect, organize and document KPIs for startups making progress towards Sustainable Development Goals (SDGs)'
      ]
    },
    {
      company: 'Quabbly',
      company_website: 'https://quabbly.com',
      role: 'Frontend Engineer',
      duration: 'May - October 2021',
      duties: [
        'Engineered and maintained major features of Quabbly web app using Angular, Typescript and SCSS',
        'Proposed and implemented scalable solutions to issues identified with services and applications responsible for communicating with Quabbly web app',
        'Interfaced with user experience designers and other developers to ensure thoughtful and coherent user experiences across Quabbly’s apps',
        'Ran unit tests on the user interface before launching new features to ensure quality, error-free production-ready code',
        "Rebuilt the company's main website using NextJs, SCSS and Wordpress as a CMS"
      ]
    }
  ]
  return (
    <motion.div className='min-h-[calc(100vh-73px)] w-full max-w-[1100px] mx-auto flex flex-col md:justify-center justify-start px-[20px] md:py-0 py-[100px] pt-[150px]'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 1 } }}
      exit={{ opacity: 0, transition: { delay: 0.5, duration: .5 } }}
    >
      <div className="heading flex items-center justify-start w-full mb-8">
        <h1 className='mr-4 font-semibold md:text-[30px] text-[24px]'><span className='text-mainBlue font-bold mr-2 md:text-[25px] text-[20px]'><code>02.</code></span>Where I've Worked</h1>
      </div>
      <div className="work flex items-start md:flex-row flex-col md:ml-4">
        <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
          <Tab.List className={'flex md:flex-col flex-row justify-start items-start w-[max-content] md:ml-4 ml-0 z-10 md:mb-0 mb-8'}>
            {workExperience.map((experience, id) => (
              <Tab as={Fragment} key={id}>
                {({ selected }) => (
                  <StyledJobsButton className={selected ? 'text-left text-mainBlue text-[13px] leading-[13px] relative transition-all flex items-center justify-start w-full h-[42px] pt-0 py-[2px] px-[20px] bg-[transparent] whitespace-nowrap md:border-l-[#007FF4] border-l-[transparent]' : 'text-left text-[13px] leading-[13px] relative transition-all flex items-center justify-start w-full h-[42px] pt-0 py-[2px] px-[20px] bg-[transparent] whitespace-nowrap md:border-l-[2px] border-b-[2px]'}>
                    <code>{experience.company}</code>
                  </StyledJobsButton>
                )}
              </Tab>
            ))}
          </Tab.List>

          <Tab.Panels>
            {workExperience.map((experience, i) => (
              
              <Tab.Panel className='md:ml-4 ml-0 min-h-[400px] max-w-[800px]' key={i}>
                <AnimatePresence>
                  <StyledJobsPanel>
                    <motion.ul
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1, transition: { delay: .2 } }}
                      exit={{ opacity: 0, transition: { duration: .5 } }}
                    >
                      <li>
                        <div className='content-wrap'>
                          <div className="head">
                            <h3 className='md:text-[20px] text-[18px] font-medium leading-[1.3] mb-[10px]'>{experience.role} <a className='text-mainBlue' href={experience.company_website} target="_blank" rel="noreferrer">@ {experience.company}</a></h3>
                            <p className='period text-[13px] leading-[13px] mb-[25px]'><code>{experience.duration}</code></p>
                          </div>
                          <ul className="body">
                            {workExperience[i].duties.map((exp, index) => (
                              <li className='text-faintText' key={index}>{exp}</li>
                            ))}
                          </ul>
                        </div>
                      </li>
                    </motion.ul>
                  </StyledJobsPanel>
                </AnimatePresence>
                </Tab.Panel>
            ))}
            {/* ... */}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </motion.div>)
}

const StyledJobsPanel = styled.div`
  .body {
    li {
      padding-left: 30px;
      position: relative;
      margin-bottom: 10px;
      font-size: 16px;
      ::before {
        content: "▹";
        color: #007FF4;
        position: absolute;
        left: 0;
        font-size: 18px;
      }

      @media screen and (min-width: 768px) {
        font-size: 18px;
      }
    }
  }
`

const StyledJobsButton = styled.button`
  border: solid 2px transparent;
  border-left-color: transparent;
  // border-bottom-color: #007FF4;

  &:focus {
    outline: none;
  }
  &:active {
    border-bottom-color: #b7b7b74d;
  }


  //  md:border-l-mainBlue border-[transparent] border-l-[transparent] border-2 md:active:border-l-[#b7b7b74d] active:border-b-[#b7b7b74d] md:focus:border-l-[2px] focus:border-b-[2px] focus-visible:outline-0 md:focus-visible:border-l-[2px] focus-visible:border-b-[2px]
  

  @media screen and (min-width: 768px) {
    // border-left-color: #007FF4;
  }
`

export default Work