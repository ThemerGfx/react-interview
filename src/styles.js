import styled, { keyframes } from 'styled-components';

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  width: calc(35% - 32px); /* 2 cards per row */
  box-sizing: border-box;
  animation: ${fadeIn} 0.5s ease-in-out;
  margin: 16px;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 16px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    width: calc(100% - 32px); /* 1 card per row on mobile */
  }
`;

export const CardHeader = styled.div`
  background-color: #f5f5f5;
  padding: 16px;
`;

export const CardBody = styled.div`
  padding: 16px;
  background-color: #eceeec;
`;

export const CardFooter = styled.div`
  background-color: #f5f5f5;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

export const Title = styled.h3`
  font-weight: bold;
  margin: 0;
`;

export const Category = styled.p`
  color: #555;
  margin: 8px 0 0;
`;

export const LikesDislikes = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
`;

export const TextLikeDislike = styled.p`
  color: #000000;
  margin: 2px 0 0 0;
`;

export const LikeDislikeButton = styled(Button)`
  background-color: ${props => (props.like ? '#28a745' : '#dc3545')};
  display: flex;
  align-items: center;
  border-radius: 10px 100px / 120px;
  gap: 8px;

  svg {
    margin: 1px 1px 0px;
  }

  &:hover {
    background-color: ${props => (props.like ? '#19632a' : '#91202b')};
  }
`;

export const FilterContainer = styled.div`
  margin: 16px 0;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Select = styled.select`
  width: 100%;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const AppContainer = styled.div`
  padding: 16px;
`;


export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;

export const PaginationButton = styled.button`
  background-color: #9e9b9b;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  margin: 0 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #5e5c5c;
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

export const ItemsPerPageSelect = styled.select`
  padding: 8px;
  margin-left: 16px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: white;
  cursor: pointer;
`;
