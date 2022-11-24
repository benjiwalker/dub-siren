import styled from "styled-components";

export const Heading = styled.h1``;

export const Siren = styled.span<{
  globalTrigger: boolean;
}>`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  padding: 1rem;

  @keyframes flash {
    0% {
      filter: drop-shadow(0 0 0 #ff0000);
    }
    50% {
      filter: drop-shadow(0 0 3rem #ff0000);
    }
    100% {
      filter: drop-shadow(0 0 0 #ff0000);
    }
  }

  animation: ${(props) =>
    props.globalTrigger ? "flash linear 1s infinite" : "none"};
  -webkit-filter: ${(props) =>
    props.globalTrigger ? "none" : "grayscale(100%)"};
  filter: ${(props) => (props.globalTrigger ? "none" : "grayscale(100%)")};
`;

export const Title = styled.div`
  cursor: default;
`;
