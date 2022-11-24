import styled from "styled-components";

export const Controls = styled.div`
  justify-content: space-evenly;
`;

export const Module = styled.section`
  background-color: ${({ theme }) => theme.colors.oliveDrab.main};
  border: 3px solid ${({ theme }) => theme.colors.oliveDrab.shades[50]};
  box-shadow: 0 0 0 1pt ${({ theme }) => theme.colors.primary};
`;

export const Heading = styled.h3`
  @media (max-width: 645px) {
    margin: 5px 0 0 0;
  }
`;
