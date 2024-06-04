import Pages from './pages/Pages'
import styled from 'styled-components'
import Category from './components/Category'
import {Link , BrowserRouter } from 'react-router-dom'
import Search from './components/Search'

function App() {
  return (
    <>
    <BrowserRouter>
<Logo> <SLink to={"/"}> Food Recipies </SLink></Logo>
<Container>
      <Search/>
    <Category/>
     <Pages/>
    </Container>
    </BrowserRouter>
    

    </>
  )
}

const Container = styled.div`
  margin-top: -5rem;
  @media (max-width: 768px) { 
    margin-top: --3rem;

  }
  
`
const Logo =  styled.div`

margin-top: -1rem;
  font-size: 2em;
  font-weight: 900;
  font-family: 'Poppins';
  padding: 2%  6%;
  margin-left: -2rem;
  @media (max-width: 768px) { 
    font-size: 2.2em;
    padding: 5%  6%;
  font-weight: 900;
  margin-left: 0rem;
    
  }
`
const SLink = styled(Link)`
  transition: ease-in 1ms;
  text-decoration: none;
  margin-right: 0;
  cursor: pointer;
  color: #01a3f4;
  &:hover{
    color: #0d0e0e;
    transition: ease-in 1ms;
  }
 
`
export default App
