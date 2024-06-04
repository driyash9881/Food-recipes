import React from 'react'
import Popular from '../components/Popular'
import Veggies from '../components/Veggies'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <motion.div 
    animate={{opacity:2}}
    initial={{opacity:-1}}
    exit={{opacity:3}}
    transition={{duration:1}}
    >
      <Container>
      <Popular/>   
      <Veggies/>
      </Container>
    
</motion.div>
  )
}

const Container = styled.div`
  margin: 3rem 5rem;
  overflow: hidden;
  @media (max-width: 768px) {
 margin: 1rem 1rem;
 
  }
`

export default Home