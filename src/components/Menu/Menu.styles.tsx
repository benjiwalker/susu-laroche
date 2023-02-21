import styled from "styled-components";

export const Menu = styled.nav<{ open: boolean }>`
  margin-bottom: 1rem;
  padding: 0.75rem;
  position: fixed;
  top: 0;
  z-index: 1;

  @media only screen and (max-width: 1000px) {
    background-color: ${({ open }) => (open ? "#000" : "transparent")};
    margin: 0;
    padding: 0;
    width: 100vw;
  }
`;

export const Dropdown = styled.div`
  display: inline-block;
  position: relative;
`;

export const Button = styled.button``;

export const Content = styled.div<{ open: boolean }>`
  background-color: #000;
  display: ${({ open }) => (open ? "block" : "none")};
  position: absolute;
  margin-top: 5px;

  @media only screen and (max-width: 1000px) {
    margin-top: 0;
    text-align: center;
    width: 100vw;
  }
`;

export const Link = styled.div<{ current?: boolean }>`
  background-color: ${({ current }) => (current ? "#fff" : "#000")};
  color: ${({ current }) => (current ? "#000" : "#fff")};
  font-size: 2rem;
  padding: 10px 15px 10px 10px;
  width: 100%;

  &:hover {
    background-color: #fff;
    color: #000;
    cursor: pointer;
  }

  @media only screen and (max-width: 1000px) {
    font-size: 1.8rem;
  }
`;
