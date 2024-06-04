import React, { useState } from 'react'
import styled from 'styled-components'
import { CiSearch } from "react-icons/ci";
import { NavLink, useNavigate } from 'react-router-dom';
import { MdHome } from "react-icons/md";

const Search = () => {
   const[valinput,setValInput]= useState("")
    const navigate = useNavigate()
   const submitHandler=(e)=>{
    e.preventDefault()
     navigate('/searchData/' + valinput)
   }
   
  return (
    <div>
   
    <FormCon onSubmit={submitHandler}>
    <Slink to={'/'}>
   <MdHome size={30}  />
   </Slink>
        <div>
            <CiSearch/>
            <input 
             onChange={(e)=>setValInput(e.target.value)}
             placeholder='Search..'
             type='text'
             value={valinput }/>
        </div>
    
    </FormCon>
    </div>
  )
}

const FormCon = styled.form`
position: relative;
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
    padding: -1px 0 5rem 0;
 
    div{
    svg{
        z-index: 10;
       position: absolute;
       font-size: 1.5rem;
       padding: 0% 1%;
       margin-top: 3.9rem;
        
    }
    input{
      z-index: -1;
    margin-right:5rem ;
    border-radius: 24px;
    width: 15rem;
    height: 1rem;
    color: #1e3950;
   margin-top: 3.5rem;
   transition: ease-in 0.5s;
   font-size: 1em;
   padding: 8px 40px;
    }
    @media (max-width: 768px) {
    margin-right: 1%;
    input{
      align-items: center;
      width: 25%;
      height: 1rem;
      font-size: 1em;
    }
   svg{
    font-size: 1rem;
    padding: 1% 1%;
   }
  }
  }

`

const Slink = styled(NavLink)`
  svg{
   color: black;
   margin-top: 3.5rem;
   transition: ease-in 0.5s;
   padding: 2px 0;
   &:hover{
    border-radius: 1px;
    border-bottom: 1px solid #7e7b7b;
    transition: ease-out 0.3s;
    color: #393838;

   }

  }

  
`

export default Search