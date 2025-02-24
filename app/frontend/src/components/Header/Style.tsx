import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 10vh;
  padding: 1rem 0;
  background-color: #1F2631;
  color: #fff;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

export const Title = styled.div`
  width: 20%;

  h1 {
    font-size: 2rem;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 1.2rem;
    }
  }
`;

export const Search = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  input {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 7px;
  }

  input:focus {
    outline: none;
  }

  @media (max-width: 768px) {
    width: 50%;
  }
`;

export const Icons = styled.div`  
  width: 10%;
  display: flex;
  gap: 1rem;

  a {
    color: #fff;
  }

  a:hover {
    color: #ccc;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
