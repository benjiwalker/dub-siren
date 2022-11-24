import styled from "styled-components";

export const App = styled.div`
  width: 100vw;
  min-height: 100vh;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.primary};
`;
