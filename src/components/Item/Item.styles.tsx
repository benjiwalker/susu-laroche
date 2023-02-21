import styled from "styled-components";

export const Item = styled.div`
  display: flex;
  font-size: 1.5rem;
  max-width: 70vw;

  a {
    text-decoration: underline;
  }

  @media only screen and (max-width: 1000px) {
    align-items: flex-start;
    flex-direction: column;
    max-width: 90vw;
  }
`;

export const Container = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 20px;

  @media only screen and (max-width: 1000px) {
    margin-left: 0;
  }
`;

export const Heading = styled.h1`
  @media only screen and (max-width: 1000px) {
    margin-top: 1rem;
  }
`;

export const Text = styled.div`
  font-size: 1.5rem;
  max-width: 60ch;
  text-align: left;

  p {
    margin-bottom: 0.8rem;
    max-width: 60ch;
  }
`;
