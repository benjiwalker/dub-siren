import styled from "styled-components";

export const Button = styled.button<{ isActive: boolean }>`
  background: none;
  border: none;
  filter: ${(props) =>
    props.isActive ? "drop-shadow(0 0 .5rem #FFD700)" : "none"};
`;

export const Switch = styled.div`
  flex-direction: column;
`;

export const Label = styled.label`
  margin-top: 0;
`;
