import styled from 'styled-components';
import { PiHamburgerDuotone, PiPizzaDuotone } from "react-icons/pi";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import { NavLink } from 'react-router-dom';

// Category component displaying cuisine options
const Category = () => {
  return (
    <Wrapper>
      <List>
        {/* Link to Italian cuisine */}
        <NavSlink to={'/cuisine/italian'}>
          <PiPizzaDuotone size={30} />
          <h2>Italian</h2>
        </NavSlink>
        
        {/* Link to American cuisine */}
        <NavSlink to={'/cuisine/american'}>
          <PiHamburgerDuotone size={30} />
          <h2>American</h2>
        </NavSlink>
        
        {/* Link to Thai cuisine */}
        <NavSlink to={'/cuisine/thai'}>
          <GiChopsticks size={30} />
          <h2>Thai</h2>
        </NavSlink>
        
        {/* Link to Japanese cuisine */}
        <NavSlink to={'/cuisine/japanese'}>
          <GiNoodles size={30} />
          <h2>Japanese</h2>
        </NavSlink>
      </List>
    </Wrapper>
  );
}

// Wrapper component for the Category component
const Wrapper = styled.div`
  font-family: "Poppins";
  margin: 1rem 0;
  h2 {
    font-size: 1em;
    color: #7b8171;
  }
  @media (max-width: 768px) {
    margin: 1rem 0rem;
    h2 {
      font-size: 0.9em;
    }
  }
  @media (max-width: 480px) {
  
    h2 {
      font-size: 0.8em;
      
    }
  }
`;

// List component to arrange NavSlink components in a row
const List = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  text-align: center;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-right: 4rem; 
  }
  @media (max-width: 480px) {
    flex-wrap: wrap;
    gap: 0.3rem;
    margin-right: 4rem;
  }
`;

// NavSlink component to style each link
const NavSlink = styled(NavLink)`
  border: 0.1px solid #51534f53;
  background-color: #f4f4f4;
  border-radius: 50%;
  width: 5rem;
  height: 5rem;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  padding: 1rem;
  align-items: center;
  justify-content: center;
  transition: 0.3s ease-out;
  cursor: pointer;

  &:hover {
    background-color: #5762656d;
    svg {
      color: #3d50c9;
    }
    h2 {
      color: black;
    }
  }

  @media (max-width: 768px) {
    width: 4rem;
    height: 4rem;
    padding: 0.5rem;
    h2 {
      display: none;
    }
    &:hover {
      background-color: #c1c1c1; /* Lighter hover background for smaller screens */
    }

  }

  @media (max-width: 480px) {
    width: 3rem;
    height: 3rem;
    padding: 0.3rem;
    h2 {
      display: none;
    }
    &:hover {
      background-color: #e0e0e0; /* Even lighter hover background for very small screens */
    }
  }

  svg {
    color: #211212b3;
  }
`;

export default Category;
