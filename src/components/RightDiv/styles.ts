import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 50px;
  left: 50%;
  margin-left: ${-[614 / 2 - 500]}px;
  width: 100%;
  max-width: 293px;
  height: auto;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media (max-width: 1000px) {
    display: none;
  }
`;

export const UserContent = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 3px;
`;
export const ImgContent = styled.div`
  img {
    width: 56px;
    height: auto;
    border-radius: 50%;
  }
`;
export const InfoContent = styled.div`
  margin-left: 20px;

  h1 {
    color: #262626;
    font-weight: 600;
    overflow-x: hidden;
    font-size: 14px;
    text-overflow: ellipsis;
    cursor: pointer;
  }

  span {
    font-size: 12px;
    line-height: 14px;
    overflow: hidden;
    color: #8e8e8e;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export const SuggestionsContent = styled.div`
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-top: 20px;

    h1 {
      font-size: 14px;
      line-height: 18px;
      color: #8e8e8e;
      margin: -3px 0 -4px;
    }

    span {
      color: #262626;
      font-weight: 600;
      font-size: 12px;
      line-height: 14px;
      margin: -2px 0 -3px;
      cursor: pointer;
    }
  }
`;

export const UsersSugestions = styled.div`
  margin-bottom: 12px;
  padding-top: 8px;
`;

export const Footer = styled.footer`
  nav ul {
    display: flex;
    width: 100%;
    margin-top: 20px;
    flex-wrap: wrap;
    margin-bottom: 16px;

    a {
      font-size: 11px;
      font-weight: 400;
      line-height: 13px;
      text-transform: none;
      color: #c7c7c7;
    }

    li a::after {
      content: '\\00b7';
      margin: 0 0.25em 0 0.25em;
      color: #c7c7c7;
      font-size: 11px;
      font-weight: 400;
      line-height: 13px;
      text-transform: none;
    }
  }

  span {
    text-transform: uppercase;
    color: #c7c7c7;
    font-size: 11px;
    font-weight: 400;
    line-height: 13px;
  }
`;
