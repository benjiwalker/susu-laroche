import styled from "styled-components";

export const Contact = styled.div`
  > *:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

export const Text = styled.p`
  font-size: 1.5rem;
  max-width: none;
  text-align: center;

  @media only screen and (max-width: 1000px) {
    text-align: left;
  }
`;

export const Link = styled.a``;
