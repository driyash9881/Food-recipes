import { useState, useEffect } from  "react";
import styled from "styled-components";
import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import "@splidejs/splide/dist/css/splide.min.css"
import { json , Link} from "react-router-dom";
import axios from 'axios'

const Popular = () => {
 
 // Define the API URL for fetching meal data
const API_URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=potato';

// Initialize state to store the fetched meal data
const [meals, setMeals] = useState([]);

// Function to fetch data from the API
const fetchData = async () => {
  try {
    // Make a GET request to the API URL using Axios
    const response = await axios.get(API_URL);
    // Update the state with the fetched meal data
    setMeals(response.data.meals);
    // Log the fetched meal data to the console
    console.log(response.data.meals);
  } catch (error) {
    // Log any errors that occur during the fetch request
    console.error('Error fetching data:', error);
  }
};

// useEffect hook to fetch data when the component mounts
useEffect(() => {
  // Call the fetchData function
  fetchData();
}, []);

  return (
    <Wrapper>
    <h1>Popular Picks</h1>
    {/* Conditional rendering: If meals array is not empty, display the Splide slider, otherwise show a loading message */}
    {meals.length > 0 ? (
      <Splide
        options={{
          perPage: 3,         // Number of slides per page
          gap: '1rem',        // Gap between slides
          pagination: false,  // Disable pagination
          drag: 'free',       // Enable free dragging
          arrows: true        // Show navigation arrows
        }}
      >
        {/* Map over the meals array to create a SplideSlide for each meal */}
        {meals.map((meal) => (
          <SplideSlide key={meal.idMeal}> {/* Each slide needs a unique key, use meal.idMeal */}
            <Link to={`/recipe/${meal.idMeal}`}> {/* Link to the recipe page for the meal */}
              <Card>
                <p>{meal.strMeal}</p> {/* Display the meal name */}
                <img src={meal.strMealThumb} alt={meal.strMeal} /> {/* Display the meal image */}
                <Gradient /> {/* Overlay gradient for visual effect */}
              </Card>
            </Link>
          </SplideSlide>
        ))}
      </Splide>
    ) : (
      <p className="loading">Loading...</p> /* Show loading message while meals are being fetched */
    )}
  </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 170vh;
  margin:-1rem 0;
  display: grid;
  font-family: "Poppins";
  
  h1{
    font-size: 2em;
    font-weight: 600;
    color: #403c3c;
    font-family: 'Poppins';
    transition: 0.5s ease-in;
    &:hover{
      color: #8d8787;
      transition: 0.2s ease-out;
    }
    }
    @media (max-width: 768px) { 
      width: 100vh;
    
  }
`;

const Card = styled.div`
min-height: 15rem;
width: 100%;
  border-radius:2rem;
  overflow: hidden;
  position: relative;

  p{
    position: absolute;
    z-index: 10;
    text-align: center;
    font-weight: 600;
    color: white;
    left: 50%;
    top: 30%;
    width: 100%;
    transform: translate(-50%,0%);
    font-size: 1em;
    height: 40%;
    justify-content: center;
    display: flex;
    align-items: center;
    word-spacing:0.2pc;
    letter-spacing: 0.1px;

  }
  img{
    border-radius: 2rem;
    position: absolute;
    background-color: #ffffff24;
    box-shadow: 0px 0px 20px 14px rgba(0,0,0,0.2);
    object-fit: cover;
    width: 100%;
    height: 100%;

  }
`
const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.5));
`

export default Popular