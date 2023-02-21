import styled from "styled-components";

export const Card = styled.div`
  height: 300px;
  margin: 2rem 2rem 6rem 2rem;
  max-width: 90vw;
  width: 400px;

  &:hover {
    a {
      text-decoration: none;
    }
    p {
      background-color: #fff;
      color: #000;
      opacity: 1;
    }
  }
`;

export const Title = styled.p`
  font-size: 1.5rem;
  margin-top: 10px;
  width: fit-content;
`;
