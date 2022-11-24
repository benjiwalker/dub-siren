import styled from "styled-components";

export const Button = styled.button`
  background: ${({ theme }) => theme.colors.oliveDrab};
  border: 2px solid ${({ theme }) => theme.colors.secondary};
`;

export const Option = styled.div`
  flex-direction: column;
  padding: 0.5rem;

  @media (max-width: 880px) {
    flex-direction: row;
    gap: 0.25rem;
    width: 18%;
  }
`;

export const PatchBay = styled.section`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  border: 3px solid ${({ theme }) => theme.colors.oliveDrab.shades[50]};
  box-shadow: 0 0 0 1pt ${({ theme }) => theme.colors.primary};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-top: 1rem;
  width: 90ch;

  @media (max-width: 880px) {
    max-width: 90vw;
  }
`;

export const Radio = styled.input.attrs({
  type: "radio",
})`
  accent-color: ${({ theme }) => theme.colors.oliveDrab.shades[50]};
  cursor: pointer;
  height: 15px;
  padding: 0;
  width: 15px;
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.secondary};
  @media (max-width: 880px) {
    margin: 0.5rem 0;
    width: 100%;
  }
`;

export const Label = styled.p`
  color: ${({ theme }) => theme.colors.secondary};
`;
