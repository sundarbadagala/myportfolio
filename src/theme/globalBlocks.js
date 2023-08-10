import { styled } from "styled-components";

export const Container = styled.div`
  @media screen and (min-width: 1440px) {
    width: 1320px;
  }
  @media screen and (min-width: 1200px) and (max-width: 1440px) {
    width: 1140px;
  }
  @media screen and (min-width: 992px) and (max-width: 1200px) {
    width: 960px;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    width: 720px;
  }
  @media screen and (min-width: 576px) and (max-width: 768px) {
    width: 540px;
  }
  @media screen and (max-width: 576px) {
    width: 100%;
  }
`;

export const Flex = styled.div`
  display: flex;
  align-items: ${({ $align }) => $align || "center"};
  justify-content: ${({ $justify }) => $justify || "center"};
`;

export const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;
