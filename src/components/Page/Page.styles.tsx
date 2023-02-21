import styled from "styled-components";

export const Page = styled.div<{ background: string }>`
  align-items: center;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${({ background }) => background}) no-repeat center center fixed;
  background-color: #000;
  -moz-background-size: cover;
  -webkit-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 100vh;
  min-width: 100vw;
  padding: 6rem 2rem 0 2rem;
`;

export const Content = styled.div<{ margin: number }>`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;

  > *:last-child {
    margin-bottom: 2rem;
  }

  > *:not(:last-child) {
    margin-bottom: ${({ margin }) => `${margin}rem`};
  }

  @media only screen and (max-width: 1000px) {
    > *:not(:last-child) {
      margin-bottom: ${({ margin }) => `${margin / 2}rem`};
    }

    justify-content: flex-start;
  }
`;
