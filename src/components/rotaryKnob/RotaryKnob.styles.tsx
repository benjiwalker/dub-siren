import styled from "styled-components";

export const Container = styled.div<{ active: boolean }>`
  flex-direction: column;
  height: 100px;
  ${(props) => props.active && "filter: drop-shadow(0 0 .5rem #FFD700)"};
  width: 100px;
`;

export const Label = styled.label``;
