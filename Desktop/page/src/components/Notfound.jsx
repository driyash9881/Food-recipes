import React from 'react'
import { Link } from 'react-router-dom'
import { HiArrowNarrowRight } from 'react-icons/hi'
import styled from 'styled-components'
import img from '../assets/notFound.svg'
const Notfound = () => {
  return (
    <Wrapper>
     <Container>
        <img src={img} alt="notFound.svg" />
        <h1>Loks like You are Lost</h1>
        <p>We can't seem to find the page you're looking for </p>
     <Link to={"/"}>Back to Home <span><HiArrowNarrowRight/></span> </Link>

     </Container>
</Wrapper>
  )
}
const Wrapper = styled.div`
display: flex;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  background: url(/background.svg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: right;

  @media (max-width: 600px) {
      padding:30px 20px;    
    img {
      width: 100%
  }
  h1 {
      font-size: 1.75rem
  }
}

`
const Container = styled.div`
max-width: 1500px;
  text-align: center

  img {
  margin-bottom: 2rem
}

h1 {
  font-size: 2.75rem;
  font-weight: 300;
  color: #222;
  margin-bottom: .5rem
}

p {
  font-size: 18px;
  font-weight: 300;
  color: #555;
  margin-bottom: 1.5rem
}

a {
  border: 1px solid black;
  padding: 8px 28px;
  border-radius: 30px;
  display: flex;
  width: fit-content;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-size: 15px;
  color: #111
}
a span {
  margin-left: 1rem;
  padding: 6px;
  background: #111;
  border-radius: 100%;
  color: #fff
}

a:hover {
  color: #fff;
  background: #111;
  transition: ease-in-out .3s
}

a:hover span {
  background: #fff;
  color: #111
}


`
export default Notfound