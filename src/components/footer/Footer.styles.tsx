import styled from "styled-components";

export const Controls = styled.p`
  @media (max-width: 645px) {
    display: none;
  }
`;

export const Footer = styled.footer`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100px;
  justify-content: space-between;
  margin: 1rem 0;
  text-align: center;
  width: 90ch;

  @media (max-width: 880px) {
    width: 90vw;
    height: 70px;
  }
`;

export const Link = styled.a``;

export const Logo = styled.img`
  width: 25px;
`;

export const Text = styled.p``;
