import styled from 'styled-components';

export const MainContainer = styled.div`
  margin: 0 auto;
  display: flex;
  width: 100%;
  max-width: 935px;
  align-items: flex-start;

  @media (max-width: 1000px) {
    align-items: center;
    justify-content: center;
  }
`;

export const Content = styled.div`
  padding-top: 30px;
  margin-right: 28px;
`;

export const Feeds = styled.div``;
