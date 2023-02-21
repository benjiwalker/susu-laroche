import styled from "styled-components";

export const List = styled.div`
  text-align: center;

  a {
    text-decoration: underline;
  }

  p {
    max-width: none;
    font-size: 1.5rem;
  }

  p:not(:last-child) {
    margin-bottom: 5px;
  }

  @media only screen and (max-width: 1000px) {
    text-align: left;

    p:not(:last-child) {
      margin-bottom: 20px;
    }
  }
`;
