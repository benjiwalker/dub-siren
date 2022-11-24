import styled from "styled-components";

export const DubSiren = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
  grid-gap: 10px;
  width: 90ch;

  section:nth-of-type(2) {
    order: 3;
  }

  section:nth-of-type(3) {
    order: 5;
  }

  section:nth-of-type(5) {
    order: 4;
  }

  section:nth-of-type(6) {
    order: 6;
  }

  @media (max-width: 880px) {
    width: 90vw;
  }

  @media (max-width: 645px) {
    section:nth-of-type(2) {
      order: 2;
    }

    section:nth-of-type(3) {
      order: 3;
    }

    section:nth-of-type(4) {
      order: 4;
    }

    section:nth-of-type(5) {
      order: 5;
    }

    section:nth-of-type(6) {
      order: 6;
    }
  }
`;
