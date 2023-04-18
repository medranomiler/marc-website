import React from 'react'
import AboutMe from '../components/AboutMe'

const About = () => {
  return (
<>
<div className="max-w-screen relative">
<div className="absolute top-0 left-0 w-full h-full bg-[url('../../public/genesisColored.svg')] opacity-[0.05] bg-image object-cover"/>
<AboutMe className="z-98"/>

</div>
</>
  )
}

export default About