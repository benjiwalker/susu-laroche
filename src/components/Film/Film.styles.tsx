import styled from "styled-components";

export const Film = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
  max-width: fit-content;

  a {
    text-decoration: underline;
  }

  > *:not(:last-child) {
    margin-bottom: 1rem;
  }

  @media only screen and (max-width: 1000px) {
    align-items: flex-start;
    flex-direction: column;
    max-width: 90vw;
  }
`;

export const Container = styled.div<{ noLeftMargin?: boolean }>`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media only screen and (max-width: 1000px) {
    align-items: flex-start;
    justify-content: flex-start;
    margin-left: 0;
  }
`;

export const Heading = styled.h1``;

export const Text = styled.div`
  font-size: 1.5rem;
  max-width: 60ch;
  text-align: center;

  p {
    max-width: 80ch;
  }

  @media only screen and (max-width: 1000px) {
    text-align: left;
  }
`;
