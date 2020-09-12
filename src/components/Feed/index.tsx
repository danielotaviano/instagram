/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

import {
  Container,
  Header,
  UserContent,
  Content,
  Media,
  ActCard,
  LeftSide,
  RightSide,
  LikesContent,
  BottomContent,
  DescriptionContent,
  ComentsContent,
  TotalComments,
  Comments,
  TimeAgo,
  CommentInput,
  Comment,
} from './styles';

import { ReactComponent as TreeDots } from '../../assets/icons/treeDots.svg';

import { ReactComponent as HearthIcon } from '../../assets/icons/hearth.svg';
import { ReactComponent as SendIcon } from '../../assets/icons/send.svg';
import { ReactComponent as ChatIcon } from '../../assets/icons/chat.svg';
import { ReactComponent as SavePhotoIcon } from '../../assets/icons/savePhoto.svg';

const Feed: React.FC = () => {
  return (
    <Container>
      <Header>
        <UserContent>
          <a href="/">
            <img
              src="https://instagram.fnat1-1.fna.fbcdn.net/v/t51.2885-15/e35/82144316_566852513862988_3795611742500042126_n.jpg?_nc_ht=instagram.fnat1-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=_wNRKiBJHNgAX8rKXfr&oh=29b8b4bff81babec3d31be84bbbc978a&oe=5F840CFC"
              alt="Bruna Marques"
            />
          </a>

          <a href="/">
            <span>brunamarques</span>
          </a>
        </UserContent>
        <span>
          <TreeDots />
        </span>
      </Header>

      <Content>
        <Media>
          <img
            src="https://instagram.fnat1-1.fna.fbcdn.net/v/t51.2885-15/e35/58745496_293491431599527_4540126393921386358_n.jpg?_nc_ht=instagram.fnat1-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=JSiLhSRqQk4AX8u_uXn&oh=9b2faca4a0752865821da8847497ba9f&oe=5F838E31"
            alt="Bruna Marques"
          />
        </Media>
        <ActCard>
          <LeftSide>
            <HearthIcon />
            <ChatIcon />
            <SendIcon />
          </LeftSide>
          <RightSide>
            <SavePhotoIcon />
          </RightSide>
        </ActCard>
        <LikesContent>
          <img
            src="https://instagram.fnat1-1.fna.fbcdn.net/v/t51.2885-15/e35/82144316_566852513862988_3795611742500042126_n.jpg?_nc_ht=instagram.fnat1-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=_wNRKiBJHNgAX8rKXfr&oh=29b8b4bff81babec3d31be84bbbc978a&oe=5F840CFC"
            alt="bruna marques"
          />
          <p>
            Curtido por <strong> brunamarques</strong> e
            <strong> outras 7 pessoas</strong>
          </p>
        </LikesContent>
        <BottomContent>
          <DescriptionContent>
            <span>
              <strong>brunamarques</strong> Sou rica e fui pra argentina!
            </span>
          </DescriptionContent>
          <ComentsContent>
            <TotalComments>
              <span>Ver todos os 192 comentários</span>
            </TotalComments>
            <Comments>
              <Comment>
                <p>
                  <strong>danielotavs</strong> Te amo muitoooooooo
                </p>
                <HearthIcon />
              </Comment>

              <Comment>
                <p>
                  <strong>danielotavs</strong> Te amo muitoooooooo
                </p>
                <HearthIcon />
              </Comment>
            </Comments>
          </ComentsContent>
          <TimeAgo>há 17 horas</TimeAgo>
          <CommentInput>
            <form action="submit">
              <input type="text" placeholder="Adicione um comentário..." />
              <button type="button">Publicar</button>
            </form>
          </CommentInput>
        </BottomContent>
      </Content>
    </Container>
  );
};

export default Feed;
