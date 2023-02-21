import styled from "styled-components";

export const Print = styled.div`
  max-width: 40vw;

  &:first-child {
    margin-top: 5rem;
  }

  &:last-child {
    margin-bottom: 5rem;
  }

  @media only screen and (max-width: 1000px) {
    max-width: 95vw;
  }
`;
