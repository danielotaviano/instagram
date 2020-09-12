import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 614px;
  background: ${({ theme }) => theme.colors.secondary};
  border: 1px solid ${({ theme }) => theme.colors.lineDivision};
  border-radius: 3px;

  margin-bottom: 60px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;

  span {
    cursor: pointer;
  }
`;

export const UserContent = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 32px;
    height: auto;
    border-radius: 50%;
  }

  span {
    color: #262626;
    font-weight: 600;
    line-height: 18px;
    font-size: 14px;
    margin-left: 14px;
  }
`;

export const Content = styled.div``;

export const Media = styled.div`
  img {
    width: 100%;
    height: auto;
  }
`;

export const ActCard = styled.div`
  margin-top: 4px;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const LeftSide = styled.div`
  svg {
    box-sizing: border-box;
    width: 24px;
    height: auto;
    margin: 0 8px;
  }
`;

export const RightSide = styled.div``;

export const LikesContent = styled.div`
  display: flex;
  align-items: center;
  padding: 0 16px;
  margin-bottom: 8px;
  img {
    margin: 0 8px;
    width: 24px;
    height: auto;
    border-radius: 50%;
  }
`;

export const BottomContent = styled.div`
  font-size: 14px;
  line-height: 18px;
`;

export const DescriptionContent = styled.div`
  margin-bottom: 4px;
  padding: 0 16px;
`;

export const ComentsContent = styled.div`
  padding: 0 16px;
`;

export const TotalComments = styled.div`
  margin-bottom: 4px;
  color: #8e8e8e;
`;

export const Comments = styled.div`
  > * {
    margin-bottom: 4px;
  }
`;

export const Comment = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TimeAgo = styled.span`
  font-size: 10px;
  display: block;
  letter-spacing: 0.2px;
  text-transform: uppercase;
  color: #8e8e8e;
  margin-bottom: 8px;
  padding: 0 16px;
`;

export const CommentInput = styled.div`
  width: 100%;
  min-height: 56px;
  border-top: 1px solid ${({ theme }) => theme.colors.lineDivision};
  display: flex;
  align-items: center;
  justify-content: space-between;

  form {
    display: flex;
    width: 100%;
    align-items: center;
    margin-right: 8px;
    justify-content: center;
    input {
      width: 100%;
      margin: 0 16px;
      border: 0;
      height: 18px;
      color: #262626;
      font-size: 14px;
      line-height: 18px;
    }

    button {
      opacity: 0.3;
      background: none;
      color: #0095f6;
      font-weight: 600;
      font-size: 14px;
      line-height: 18px;
    }
  }
`;
