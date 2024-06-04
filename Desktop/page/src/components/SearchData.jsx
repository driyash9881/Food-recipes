import { useEffect, useState, useCallback } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import Notfound from './Notfound'; // Make sure to import the Notfound component

const SearchData = () => {
  const [searchdata, setSearchData] = useState([]);
  const params = useParams();

  const getSearchedData = useCallback(async () => {
    try {
      const api = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${params.search}`
      );
      console.log(api)
      const data = await api.json();
      setSearchData(data.meals);
      console.log("data is ", params.search, data.meals);
    } catch (error) {
      console.error('Error fetching data:', error);
      setSearchData(null);
    }
  }, [params.search]); // Include params.search in the dependency array
  
  useEffect(() => {
    getSearchedData();
  }, [getSearchedData]); // No need to include params.search here

  const cardVariants = {
    hover: {
      scale: 1.1,
      transition: {
        type: 'spring',
        stiffness: 300,
      },
    },
  };

  if (searchdata === null) {
    return <Notfound />;
  }

  return (
    <Container>
      <h1>{params.search}</h1>
      <Grid>
        {searchdata && searchdata.length > 0 && searchdata.map((search) => (
          <Link to={`/recipe/${search.idMeal}`} key={search.idMeal}>
            <Card variants={cardVariants} whileHover="hover">
              <img src={search.strMealThumb} alt={search.strMeal} />
              <p>{search.strMeal}</p>
            </Card>
          </Link>
        ))}
      </Grid>
    </Container>
  );
};

const Container = styled.div`
  width: 200vh;
  text-align: center;
  h1 {
    display: flex;
    font-size: 3em;
    text-transform: uppercase;
    text-align: center;
    align-items: center;
    color: #555d5e;
    padding: 0 3rem;
    border-bottom: 1px solid black;
  }
  @media (max-width: 768px) { 
    width: 10vh;
    display: grid;
    h1 {
      text-align: center;
      align-items: center;
    }
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* This will create 4 columns */
  grid-gap: 3rem;
  margin: 0 3rem;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr); /* 3 columns for smaller screens */
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr); /* 2 columns for even smaller screens */
  }
`;

const Card = styled(motion.div)`
  background-color: aliceblue;
  img {
    width: 100%;
    border-radius: 2rem;
  }
  p {
    text-align: center;
    padding: 1rem;
  }
  &:hover {
    // Your hover styles, e.g., box-shadow for depth
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

export default SearchData;
