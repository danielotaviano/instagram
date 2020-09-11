import styled from 'styled-components';

interface ScrollProps {
  leftPosition: number | undefined;
}

export const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 614px;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  height: 118px;

  padding: 16px 0;
  border-radius: 3px;
  border: 1px solid ${({ theme }) => theme.colors.lineDivision};
  background: ${({ theme }) => theme.colors.secondary};

  white-space: nowrap;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: -ms-autohiding-scrollbar;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  a {
    user-select: none;
  }

  a:nth-child(1) {
    margin-left: 20px;
  }
`;

export const ButtonNext = styled.div<ScrollProps>`
  position: absolute;
  width: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 0;
  top: 50%;
  transform: translateY(-50%);

  svg {
    width: 50%;
    height: auto;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.5));
  }
`;

export const ButtonPrev = styled.div<ScrollProps>`
  position: absolute;
  width: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 0;
  top: 50%;
  transform: translateY(-50%);

  svg {
    width: 50%;
    height: auto;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.5));
  }
`;
