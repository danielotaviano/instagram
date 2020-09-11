import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.header`
  width: 100%;
  height: 54px;
  background: ${({ theme }) => theme.colors.secondary};
  border-bottom: 1px solid ${({ theme }) => theme.colors.lineDivision};
`;

export const Content = styled.div`
  width: 100%;
  max-width: 935px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LeftSide = styled.div`
  margin-top: 7px;
  svg {
    width: 110px;
    padding: 0;
    height: auto;
  }
`;

export const Center = styled.div`
  width: 215px;
  height: 28px;
  background: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.lineDivision};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  color: #8e8e8e;

  span {
    margin: auto 0;
  }
  span + span {
    margin-left: 6px;
    font-size: 15px;
    font-weight: 300;
    line-height: 18px;
  }

  @media (max-width: 550px) {
    display: none;
  }
`;

export const RightSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    svg {
      width: 22px;
      height: auto;
    }
    & + a {
      margin-left: 22px;
    }
  }

  div {
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background: ${({ theme }) => shade(0.2, theme.colors.primary)};
  }

  img {
    width: 22px;
    height: auto;
    border-radius: 50%;
  }
`;
