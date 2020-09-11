import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  & + div {
    margin-top: 4px;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  h1 {
    color: #262626;
    font-weight: 600;
    line-height: 18px;
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  span {
    display: block;
    font-size: 12px;
    line-height: 14px;
    color: #8e8e8e;
    margin-top: 3px;
  }
`;

export const UserContent = styled.div`
  padding-top: 8px;
  width: 100%;
  display: flex;
  img {
    margin-right: 12px;
    width: 32px;
    height: auto;
    border-radius: 50%;
  }
`;

export const Follow = styled.span`
  font-size: 12px;
  height: 100%;

  font-weight: 600;
  margin: -2px 0 -3px;
  margin-top: 5px;
  color: #0095f6;
  cursor: pointer;
`;
