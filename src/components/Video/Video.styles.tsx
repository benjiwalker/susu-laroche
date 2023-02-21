import styled from "styled-components";

export const Video = styled.div`
  display: block;
  vertical-align: top;
  width: 640px;

  @media only screen and (max-width: 1000px) {
    max-height: 50vh;
    max-width: 90vw;
  }
`;
