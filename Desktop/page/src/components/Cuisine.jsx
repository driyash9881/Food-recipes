import { useState,useEffect } from 'react'
import {useParams , Link } from 'react-router-dom'
import styled from 'styled-components'
import {motion} from 'framer-motion'

  

const Cuisine = () => {
  const [cuisine, setCuisine] = useState([]); // State to store the fetched cuisine data
  let params = useParams(); // Hook to access the URL parameters
  
  // useEffect hook to call getCuisine whenever the 'params.type' changes
  useEffect(() => {
    getCuisine(params.type); // Calling the getCuisine function with the current cuisine type from URL params
  }, [params.type]); // Dependency array includes 'params.type' to re-run effect when it changes
  
  // Asynchronous function to fetch cuisine data based on type
  async function getCuisine(type) {
    try {
      // Making a fetch request to the MealDB API with the specified cuisine type
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${type}`);
      const data = await response.json(); // Parsing the JSON response
      setCuisine(data.meals); // Updating the state with the fetched meals data
    } catch (error) {
      // Catching and logging any errors that occur during the fetch request
      console.error("Failed to fetch cuisine", error);
    }
  }
  return (
    <Container>
    <h1>{params.type}</h1>
<Grid  
  animate={{opacity:1}}
  initial={{opacity:0}}
  exit={{opacity:0}}
  transition={{duration:0.5}}
 >

{cuisine.map((item) => {
  return (
    <Card
      whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
      whileTap={{ scale: 0.95 }}
      key={item.idMeal}
    >
      <Slink to={`/recipe/${item.idMeal}`}>
        <img src={item.strMealThumb} alt={item.strMeal} />
        <p>{item.strMeal}</p>
      </Slink>
    </Card>
  );
})}
</Grid>
</Container>

    
  )
    }
 const Container = styled.div`
    display: flex;
    flex-direction: column;
    
    h1{
      font-family: 'Poppins';
    text-transform: capitalize;
    font-size: 5em;
    letter-spacing: 1px;
    margin: 0 3rem;
    padding: 21px 1rem;
    transition: 0.5s ease-in;
    &:hover{
      color: #8d8787;
      transition: 0.2s ease-out;
    }
    }
 `
  const Grid = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 3rem;
    margin: 0 3rem;

 `
const Card = styled.div`
  img{
    width: 100%;
    border-radius: 2rem;
    }
   p{
    color: #8f938dd1;
    font-family: 'Poppins';
    font-size: 1.5em;
    text-align: center;
    padding: 1rem;
  }
   
  
`
const Slink = styled(Link)`
 text-decoration: none;
 color: inherit;
`


export default Cuisine