import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const Recipes = () => {
  const { id } = useParams(); // Use useParams only once
  const [recipe, setRecipe] = useState({});
  const [activeTab, setActiveTab] = useState("Instructions");

  const recipeData = async () => {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch recipe data');
      }
      const detailedData = await response.json();
      setRecipe(detailedData.meals[0]); // Make sure to access the first item of the array
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    recipeData();
  }, [id]); // Use id as the dependency

  return (

    <Container>
      <ColOne>
       <h1>{recipe.strMeal}</h1>
       <img src={recipe.strMealThumb} alt={recipe.strMeal} />
       {/* <p</p> */}
       </ColOne>
     
     <ColTwo> 
     <div>
     <Button className={ activeTab === ("Instructions") ? "active" : " "}  onClick={()=>setActiveTab("Instructions")}>Instructions</Button>
     <Button className={activeTab === ("Ingredients")? "active" : " "} onClick={()=>setActiveTab("Ingredients")}>Ingredients</Button>
  </div>
  <div>
    {activeTab === ("Instructions") && (
        <div>
         <h3 dangerouslySetInnerHTML={{__html:recipe.strInstructions}}></h3>  
        </div>
    ) }
    {activeTab === ("Ingredients") && (
        <ul>
     <li>{recipe.strYoutube}</li>
        </ul>
    ) }
      </div>
   
    
     </ColTwo>
    </Container>
  )
}


const Container = styled.div`
  min-height: 50vh;
  min-width: 100%;
  margin: 3rem 5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 7rem; /* Adjust the gap between rows */
  align-items: center;
  justify-content: center;
  font-family: 'Poppins';

  h1 {
    color: #3a3838;
  }

  @media (max-width: 1200px) {
    margin: 2rem 4rem;
    gap: 1rem;
  }

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    margin: 2rem 3rem;
    gap: 1rem;
  }

  @media (max-width: 768px) {
    min-height: 10vh;
    min-width: 100%;
    margin: 1rem 2rem;
    gap: 1rem;
  }

  @media (max-width: 480px) {
    width: 17%;
    margin: 1rem;
    gap: 1rem;
  }
`;

const ColOne = styled.div`
display: flex;
flex-direction: column;
width: 80%;
height: 100%;
align-items: center;
justify-content: start;
gap:2rem
h1{
  font-size: 2em;
  color: grey;
  
}
img{
  width: 100%;
  border-radius: 20px;
  
}
@media  (max-width:480){
  width: 50%;
  justify-content: start;
  align-items: start
  h1{
    font-size: 1.5em;
    text-align: start;
  }
}
`
const ColTwo = styled.div`
width: 80%;
height: 100%;

display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
gap: rem;
h2{
  letter-spacing: 1px;
  line-height: 1.5rem;
  padding: 20px;
  font-size: 1em;
  font-weight: 500;
  color: #2d2e2e;
}
h3{
  margin-top: 6rem;
  letter-spacing: 1px;
  line-height: 1.8rem;
  padding: 20px;
  height: 10rem;
  font-size: 0.9em;
  font-weight: 400;

}
`
const Button = styled.div`
   position: relative;
    display: inline-grid;
    border: 1px solid black;
    border-radius: 5px;
    width: 10rem;
    height: 2.5rem;
    padding: 1px;
    margin-top: -12rem;
    margin:1rem 1rem;
    font-size: 1.2em;
    font-weight: 500;
    text-align:center;
   
    &.active{
      border: 1px solid black;
      background-color: black;
      color: white;
    }
    
   @media (max-width:780px) {
    margin-top: -1rem;
   }
 
`


export default Recipes