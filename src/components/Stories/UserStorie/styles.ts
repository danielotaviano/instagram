import styled from 'styled-components';

export const Container = styled.div`
  width: 80px;
  height: 122px;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 83%;
    height: auto;
    border-radius: 50%;
    padding: 2px;
    border: 2px solid #70d73c;
    margin-bottom: 2px;
  }

  span {
    font-size: 12px;
    max-width: 64px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
