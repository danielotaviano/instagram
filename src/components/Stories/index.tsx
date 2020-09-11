import React, { useRef, useCallback, useState } from 'react';

import { ReactComponent as ArrowLeft } from '../../assets/icons/arrowLeft.svg';
import { ReactComponent as ArrowRight } from '../../assets/icons/arrowRight.svg';
import { Content, Container, ButtonNext, ButtonPrev } from './styles';

import UserStorie from './UserStorie';

const users = [
  {
    name: 'Bruna Marques1',
    user: 'brunamarques1',
    image_url:
      'https://instagram.fnat1-1.fna.fbcdn.net/v/t51.2885-15/e35/82144316_566852513862988_3795611742500042126_n.jpg?_nc_ht=instagram.fnat1-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=_wNRKiBJHNgAX8rKXfr&oh=29b8b4bff81babec3d31be84bbbc978a&oe=5F840CFC',
  },
  {
    name: 'Daniel Pontes',
    user: 'danielotavs',
    image_url:
      'https://instagram.fnat1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/79719260_1217439048466505_6413537038615982441_n.jpg?_nc_ht=instagram.fnat1-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=LolQu1DftjMAX9q88n9&oh=05f4685f93279ffbaa81ef0e797b54e9&oe=5F863C06',
  },
  {
    name: 'Daniel Pontes',
    user: 'danielotavs',
    image_url:
      'https://instagram.fnat1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/79719260_1217439048466505_6413537038615982441_n.jpg?_nc_ht=instagram.fnat1-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=LolQu1DftjMAX9q88n9&oh=05f4685f93279ffbaa81ef0e797b54e9&oe=5F863C06',
  },
  {
    name: 'Daniel Pontes',
    user: 'danielotavs',
    image_url:
      'https://instagram.fnat1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/79719260_1217439048466505_6413537038615982441_n.jpg?_nc_ht=instagram.fnat1-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=LolQu1DftjMAX9q88n9&oh=05f4685f93279ffbaa81ef0e797b54e9&oe=5F863C06',
  },
  {
    name: 'Daniel Pontes',
    user: 'danielotavs',
    image_url:
      'https://instagram.fnat1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/79719260_1217439048466505_6413537038615982441_n.jpg?_nc_ht=instagram.fnat1-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=LolQu1DftjMAX9q88n9&oh=05f4685f93279ffbaa81ef0e797b54e9&oe=5F863C06',
  },
  {
    name: 'Daniel Pontes',
    user: 'danielotavs',
    image_url:
      'https://instagram.fnat1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/79719260_1217439048466505_6413537038615982441_n.jpg?_nc_ht=instagram.fnat1-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=LolQu1DftjMAX9q88n9&oh=05f4685f93279ffbaa81ef0e797b54e9&oe=5F863C06',
  },
  {
    name: 'Daniel Pontes',
    user: 'danielotavs',
    image_url:
      'https://instagram.fnat1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/79719260_1217439048466505_6413537038615982441_n.jpg?_nc_ht=instagram.fnat1-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=LolQu1DftjMAX9q88n9&oh=05f4685f93279ffbaa81ef0e797b54e9&oe=5F863C06',
  },
  {
    name: 'Bruna Marques2',
    user: 'brunamarques2',
    image_url:
      'https://instagram.fnat1-1.fna.fbcdn.net/v/t51.2885-15/e35/82144316_566852513862988_3795611742500042126_n.jpg?_nc_ht=instagram.fnat1-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=_wNRKiBJHNgAX8rKXfr&oh=29b8b4bff81babec3d31be84bbbc978a&oe=5F840CFC',
  },
  {
    name: 'Daniel Pontes',
    user: 'danielotavs',
    image_url:
      'https://instagram.fnat1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/79719260_1217439048466505_6413537038615982441_n.jpg?_nc_ht=instagram.fnat1-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=LolQu1DftjMAX9q88n9&oh=05f4685f93279ffbaa81ef0e797b54e9&oe=5F863C06',
  },
  {
    name: 'Daniel Pontes',
    user: 'danielotavs',
    image_url:
      'https://instagram.fnat1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/79719260_1217439048466505_6413537038615982441_n.jpg?_nc_ht=instagram.fnat1-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=LolQu1DftjMAX9q88n9&oh=05f4685f93279ffbaa81ef0e797b54e9&oe=5F863C06',
  },
  {
    name: 'Daniel Pontes',
    user: 'danielotavs',
    image_url:
      'https://instagram.fnat1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/79719260_1217439048466505_6413537038615982441_n.jpg?_nc_ht=instagram.fnat1-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=LolQu1DftjMAX9q88n9&oh=05f4685f93279ffbaa81ef0e797b54e9&oe=5F863C06',
  },
  {
    name: 'Daniel Pontes',
    user: 'danielotavs',
    image_url:
      'https://instagram.fnat1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/79719260_1217439048466505_6413537038615982441_n.jpg?_nc_ht=instagram.fnat1-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=LolQu1DftjMAX9q88n9&oh=05f4685f93279ffbaa81ef0e797b54e9&oe=5F863C06',
  },
  {
    name: 'Daniel Pontes',
    user: 'danielotavs',
    image_url:
      'https://instagram.fnat1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/79719260_1217439048466505_6413537038615982441_n.jpg?_nc_ht=instagram.fnat1-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=LolQu1DftjMAX9q88n9&oh=05f4685f93279ffbaa81ef0e797b54e9&oe=5F863C06',
  },
  {
    name: 'Daniel Pontes',
    user: 'danielotavs',
    image_url:
      'https://instagram.fnat1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/79719260_1217439048466505_6413537038615982441_n.jpg?_nc_ht=instagram.fnat1-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=LolQu1DftjMAX9q88n9&oh=05f4685f93279ffbaa81ef0e797b54e9&oe=5F863C06',
  },
  {
    name: 'Bruna Marques3',
    user: 'brunamarques3',
    image_url:
      'https://instagram.fnat1-1.fna.fbcdn.net/v/t51.2885-15/e35/82144316_566852513862988_3795611742500042126_n.jpg?_nc_ht=instagram.fnat1-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=_wNRKiBJHNgAX8rKXfr&oh=29b8b4bff81babec3d31be84bbbc978a&oe=5F840CFC',
  },
  {
    name: 'Daniel Pontes',
    user: 'danielotavs',
    image_url:
      'https://instagram.fnat1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/79719260_1217439048466505_6413537038615982441_n.jpg?_nc_ht=instagram.fnat1-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=LolQu1DftjMAX9q88n9&oh=05f4685f93279ffbaa81ef0e797b54e9&oe=5F863C06',
  },
  {
    name: 'Daniel Pontes',
    user: 'danielotavs',
    image_url:
      'https://instagram.fnat1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/79719260_1217439048466505_6413537038615982441_n.jpg?_nc_ht=instagram.fnat1-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=LolQu1DftjMAX9q88n9&oh=05f4685f93279ffbaa81ef0e797b54e9&oe=5F863C06',
  },
  {
    name: 'Daniel Pontes',
    user: 'danielotavs',
    image_url:
      'https://instagram.fnat1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/79719260_1217439048466505_6413537038615982441_n.jpg?_nc_ht=instagram.fnat1-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=LolQu1DftjMAX9q88n9&oh=05f4685f93279ffbaa81ef0e797b54e9&oe=5F863C06',
  },
  {
    name: 'Daniel Pontes',
    user: 'danielotavs',
    image_url:
      'https://instagram.fnat1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/79719260_1217439048466505_6413537038615982441_n.jpg?_nc_ht=instagram.fnat1-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=LolQu1DftjMAX9q88n9&oh=05f4685f93279ffbaa81ef0e797b54e9&oe=5F863C06',
  },
  {
    name: 'Daniel Pontes',
    user: 'danielotavs',
    image_url:
      'https://instagram.fnat1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/79719260_1217439048466505_6413537038615982441_n.jpg?_nc_ht=instagram.fnat1-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=LolQu1DftjMAX9q88n9&oh=05f4685f93279ffbaa81ef0e797b54e9&oe=5F863C06',
  },
  {
    name: 'Daniel Pontes',
    user: 'danielotavs',
    image_url:
      'https://instagram.fnat1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/79719260_1217439048466505_6413537038615982441_n.jpg?_nc_ht=instagram.fnat1-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=LolQu1DftjMAX9q88n9&oh=05f4685f93279ffbaa81ef0e797b54e9&oe=5F863C06',
  },
  {
    name: 'Bruna Marques4',
    user: 'brunamarques4',
    image_url:
      'https://instagram.fnat1-1.fna.fbcdn.net/v/t51.2885-15/e35/82144316_566852513862988_3795611742500042126_n.jpg?_nc_ht=instagram.fnat1-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=_wNRKiBJHNgAX8rKXfr&oh=29b8b4bff81babec3d31be84bbbc978a&oe=5F840CFC',
  },
  {
    name: 'Daniel Pontes',
    user: 'danielotavs',
    image_url:
      'https://instagram.fnat1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/79719260_1217439048466505_6413537038615982441_n.jpg?_nc_ht=instagram.fnat1-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=LolQu1DftjMAX9q88n9&oh=05f4685f93279ffbaa81ef0e797b54e9&oe=5F863C06',
  },
  {
    name: 'Daniel Pontes',
    user: 'danielotavs',
    image_url:
      'https://instagram.fnat1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/79719260_1217439048466505_6413537038615982441_n.jpg?_nc_ht=instagram.fnat1-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=LolQu1DftjMAX9q88n9&oh=05f4685f93279ffbaa81ef0e797b54e9&oe=5F863C06',
  },
  {
    name: 'Daniel Pontes',
    user: 'danielotavs',
    image_url:
      'https://instagram.fnat1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/79719260_1217439048466505_6413537038615982441_n.jpg?_nc_ht=instagram.fnat1-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=LolQu1DftjMAX9q88n9&oh=05f4685f93279ffbaa81ef0e797b54e9&oe=5F863C06',
  },
  {
    name: 'Daniel Pontes',
    user: 'danielotavs',
    image_url:
      'https://instagram.fnat1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/79719260_1217439048466505_6413537038615982441_n.jpg?_nc_ht=instagram.fnat1-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=LolQu1DftjMAX9q88n9&oh=05f4685f93279ffbaa81ef0e797b54e9&oe=5F863C06',
  },
  {
    name: 'Daniel Pontes',
    user: 'danielotavs',
    image_url:
      'https://instagram.fnat1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/79719260_1217439048466505_6413537038615982441_n.jpg?_nc_ht=instagram.fnat1-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=LolQu1DftjMAX9q88n9&oh=05f4685f93279ffbaa81ef0e797b54e9&oe=5F863C06',
  },
  {
    name: 'Daniel Pontes',
    user: 'danielotavs',
    image_url:
      'https://instagram.fnat1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/79719260_1217439048466505_6413537038615982441_n.jpg?_nc_ht=instagram.fnat1-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=LolQu1DftjMAX9q88n9&oh=05f4685f93279ffbaa81ef0e797b54e9&oe=5F863C06',
  },
  {
    name: 'Bruna Marques5',
    user: 'brunamarques5',
    image_url:
      'https://instagram.fnat1-1.fna.fbcdn.net/v/t51.2885-15/e35/82144316_566852513862988_3795611742500042126_n.jpg?_nc_ht=instagram.fnat1-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=_wNRKiBJHNgAX8rKXfr&oh=29b8b4bff81babec3d31be84bbbc978a&oe=5F840CFC',
  },
  {
    name: 'Daniel Pontes',
    user: 'danielotavs',
    image_url:
      'https://instagram.fnat1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/79719260_1217439048466505_6413537038615982441_n.jpg?_nc_ht=instagram.fnat1-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=LolQu1DftjMAX9q88n9&oh=05f4685f93279ffbaa81ef0e797b54e9&oe=5F863C06',
  },
  {
    name: 'Daniel Pontes',
    user: 'danielotavs',
    image_url:
      'https://instagram.fnat1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/79719260_1217439048466505_6413537038615982441_n.jpg?_nc_ht=instagram.fnat1-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=LolQu1DftjMAX9q88n9&oh=05f4685f93279ffbaa81ef0e797b54e9&oe=5F863C06',
  },
  {
    name: 'Daniel Pontes',
    user: 'danielotavs',
    image_url:
      'https://instagram.fnat1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/79719260_1217439048466505_6413537038615982441_n.jpg?_nc_ht=instagram.fnat1-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=LolQu1DftjMAX9q88n9&oh=05f4685f93279ffbaa81ef0e797b54e9&oe=5F863C06',
  },
  {
    name: 'Daniel Pontes',
    user: 'danielotavs',
    image_url:
      'https://instagram.fnat1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/79719260_1217439048466505_6413537038615982441_n.jpg?_nc_ht=instagram.fnat1-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=LolQu1DftjMAX9q88n9&oh=05f4685f93279ffbaa81ef0e797b54e9&oe=5F863C06',
  },
  {
    name: 'Daniel Pontes',
    user: 'danielotavs',
    image_url:
      'https://instagram.fnat1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/79719260_1217439048466505_6413537038615982441_n.jpg?_nc_ht=instagram.fnat1-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=LolQu1DftjMAX9q88n9&oh=05f4685f93279ffbaa81ef0e797b54e9&oe=5F863C06',
  },

  {
    name: 'Bruna Marques1',
    user: 'brunamarques1',
    image_url:
      'https://instagram.fnat1-1.fna.fbcdn.net/v/t51.2885-15/e35/82144316_566852513862988_3795611742500042126_n.jpg?_nc_ht=instagram.fnat1-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=_wNRKiBJHNgAX8rKXfr&oh=29b8b4bff81babec3d31be84bbbc978a&oe=5F840CFC',
  },
  {
    name: 'Daniel Pontes',
    user: 'danielotavs',
    image_url:
      'https://instagram.fnat1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/79719260_1217439048466505_6413537038615982441_n.jpg?_nc_ht=instagram.fnat1-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=LolQu1DftjMAX9q88n9&oh=05f4685f93279ffbaa81ef0e797b54e9&oe=5F863C06',
  },
  {
    name: 'Daniel Pontes',
    user: 'danielotavs',
    image_url:
      'https://instagram.fnat1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/79719260_1217439048466505_6413537038615982441_n.jpg?_nc_ht=instagram.fnat1-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=LolQu1DftjMAX9q88n9&oh=05f4685f93279ffbaa81ef0e797b54e9&oe=5F863C06',
  },
  {
    name: 'Daniel Pontes',
    user: 'danielotavs',
    image_url:
      'https://instagram.fnat1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/79719260_1217439048466505_6413537038615982441_n.jpg?_nc_ht=instagram.fnat1-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=LolQu1DftjMAX9q88n9&oh=05f4685f93279ffbaa81ef0e797b54e9&oe=5F863C06',
  },
  {
    name: 'Daniel Pontes',
    user: 'danielotavs',
    image_url:
      'https://instagram.fnat1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/79719260_1217439048466505_6413537038615982441_n.jpg?_nc_ht=instagram.fnat1-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=LolQu1DftjMAX9q88n9&oh=05f4685f93279ffbaa81ef0e797b54e9&oe=5F863C06',
  },
  {
    name: 'Daniel Pontes',
    user: 'danielotavs',
    image_url:
      'https://instagram.fnat1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/79719260_1217439048466505_6413537038615982441_n.jpg?_nc_ht=instagram.fnat1-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=LolQu1DftjMAX9q88n9&oh=05f4685f93279ffbaa81ef0e797b54e9&oe=5F863C06',
  },
  {
    name: 'Daniel Pontes',
    user: 'danielotavs',
    image_url:
      'https://instagram.fnat1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/79719260_1217439048466505_6413537038615982441_n.jpg?_nc_ht=instagram.fnat1-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=LolQu1DftjMAX9q88n9&oh=05f4685f93279ffbaa81ef0e797b54e9&oe=5F863C06',
  },
  {
    name: 'Bruna Marques1',
    user: 'brunamarques1',
    image_url:
      'https://instagram.fnat1-1.fna.fbcdn.net/v/t51.2885-15/e35/82144316_566852513862988_3795611742500042126_n.jpg?_nc_ht=instagram.fnat1-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=_wNRKiBJHNgAX8rKXfr&oh=29b8b4bff81babec3d31be84bbbc978a&oe=5F840CFC',
  },
  {
    name: 'Daniel Pontes',
    user: 'danielotavs',
    image_url:
      'https://instagram.fnat1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/79719260_1217439048466505_6413537038615982441_n.jpg?_nc_ht=instagram.fnat1-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=LolQu1DftjMAX9q88n9&oh=05f4685f93279ffbaa81ef0e797b54e9&oe=5F863C06',
  },
  {
    name: 'Daniel Pontes',
    user: 'danielotavs',
    image_url:
      'https://instagram.fnat1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/79719260_1217439048466505_6413537038615982441_n.jpg?_nc_ht=instagram.fnat1-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=LolQu1DftjMAX9q88n9&oh=05f4685f93279ffbaa81ef0e797b54e9&oe=5F863C06',
  },
  {
    name: 'Daniel Pontes',
    user: 'danielotavs',
    image_url:
      'https://instagram.fnat1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/79719260_1217439048466505_6413537038615982441_n.jpg?_nc_ht=instagram.fnat1-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=LolQu1DftjMAX9q88n9&oh=05f4685f93279ffbaa81ef0e797b54e9&oe=5F863C06',
  },
  {
    name: 'Daniel Pontes',
    user: 'danielotavs',
    image_url:
      'https://instagram.fnat1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/79719260_1217439048466505_6413537038615982441_n.jpg?_nc_ht=instagram.fnat1-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=LolQu1DftjMAX9q88n9&oh=05f4685f93279ffbaa81ef0e797b54e9&oe=5F863C06',
  },
  {
    name: 'Daniel Pontes',
    user: 'danielotavs',
    image_url:
      'https://instagram.fnat1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/79719260_1217439048466505_6413537038615982441_n.jpg?_nc_ht=instagram.fnat1-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=LolQu1DftjMAX9q88n9&oh=05f4685f93279ffbaa81ef0e797b54e9&oe=5F863C06',
  },
  {
    name: 'Daniel Pontes',
    user: 'danielotavs',
    image_url:
      'https://instagram.fnat1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/79719260_1217439048466505_6413537038615982441_n.jpg?_nc_ht=instagram.fnat1-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=LolQu1DftjMAX9q88n9&oh=05f4685f93279ffbaa81ef0e797b54e9&oe=5F863C06',
  },
  {
    name: 'Bruna Marques1',
    user: 'brunamarques1',
    image_url:
      'https://instagram.fnat1-1.fna.fbcdn.net/v/t51.2885-15/e35/82144316_566852513862988_3795611742500042126_n.jpg?_nc_ht=instagram.fnat1-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=_wNRKiBJHNgAX8rKXfr&oh=29b8b4bff81babec3d31be84bbbc978a&oe=5F840CFC',
  },
  {
    name: 'Daniel Pontes',
    user: 'danielotavs',
    image_url:
      'https://instagram.fnat1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/79719260_1217439048466505_6413537038615982441_n.jpg?_nc_ht=instagram.fnat1-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=LolQu1DftjMAX9q88n9&oh=05f4685f93279ffbaa81ef0e797b54e9&oe=5F863C06',
  },
  {
    name: 'Daniel Pontes',
    user: 'danielotavs',
    image_url:
      'https://instagram.fnat1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/79719260_1217439048466505_6413537038615982441_n.jpg?_nc_ht=instagram.fnat1-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=LolQu1DftjMAX9q88n9&oh=05f4685f93279ffbaa81ef0e797b54e9&oe=5F863C06',
  },
  {
    name: 'Daniel Pontes',
    user: 'danielotavs',
    image_url:
      'https://instagram.fnat1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/79719260_1217439048466505_6413537038615982441_n.jpg?_nc_ht=instagram.fnat1-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=LolQu1DftjMAX9q88n9&oh=05f4685f93279ffbaa81ef0e797b54e9&oe=5F863C06',
  },
  {
    name: 'Daniel Pontes',
    user: 'danielotavs',
    image_url:
      'https://instagram.fnat1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/79719260_1217439048466505_6413537038615982441_n.jpg?_nc_ht=instagram.fnat1-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=LolQu1DftjMAX9q88n9&oh=05f4685f93279ffbaa81ef0e797b54e9&oe=5F863C06',
  },
  {
    name: 'Daniel Pontes',
    user: 'danielotavs',
    image_url:
      'https://instagram.fnat1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/79719260_1217439048466505_6413537038615982441_n.jpg?_nc_ht=instagram.fnat1-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=LolQu1DftjMAX9q88n9&oh=05f4685f93279ffbaa81ef0e797b54e9&oe=5F863C06',
  },
  {
    name: 'Daniel Pontes',
    user: 'danielotavs',
    image_url:
      'https://instagram.fnat1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/79719260_1217439048466505_6413537038615982441_n.jpg?_nc_ht=instagram.fnat1-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=LolQu1DftjMAX9q88n9&oh=05f4685f93279ffbaa81ef0e797b54e9&oe=5F863C06',
  },
  {
    name: 'Bruna Marques1',
    user: 'brunamarques1',
    image_url:
      'https://instagram.fnat1-1.fna.fbcdn.net/v/t51.2885-15/e35/82144316_566852513862988_3795611742500042126_n.jpg?_nc_ht=instagram.fnat1-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=_wNRKiBJHNgAX8rKXfr&oh=29b8b4bff81babec3d31be84bbbc978a&oe=5F840CFC',
  },
  {
    name: 'Daniel Pontes',
    user: 'danielotavs',
    image_url:
      'https://instagram.fnat1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/79719260_1217439048466505_6413537038615982441_n.jpg?_nc_ht=instagram.fnat1-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=LolQu1DftjMAX9q88n9&oh=05f4685f93279ffbaa81ef0e797b54e9&oe=5F863C06',
  },
  {
    name: 'Daniel Pontes',
    user: 'danielotavs',
    image_url:
      'https://instagram.fnat1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/79719260_1217439048466505_6413537038615982441_n.jpg?_nc_ht=instagram.fnat1-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=LolQu1DftjMAX9q88n9&oh=05f4685f93279ffbaa81ef0e797b54e9&oe=5F863C06',
  },
  {
    name: 'Daniel Pontes',
    user: 'danielotavs',
    image_url:
      'https://instagram.fnat1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/79719260_1217439048466505_6413537038615982441_n.jpg?_nc_ht=instagram.fnat1-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=LolQu1DftjMAX9q88n9&oh=05f4685f93279ffbaa81ef0e797b54e9&oe=5F863C06',
  },
  {
    name: 'Daniel Pontes',
    user: 'danielotavs',
    image_url:
      'https://instagram.fnat1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/79719260_1217439048466505_6413537038615982441_n.jpg?_nc_ht=instagram.fnat1-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=LolQu1DftjMAX9q88n9&oh=05f4685f93279ffbaa81ef0e797b54e9&oe=5F863C06',
  },
  {
    name: 'Daniel Pontes',
    user: 'danielotavs',
    image_url:
      'https://instagram.fnat1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/79719260_1217439048466505_6413537038615982441_n.jpg?_nc_ht=instagram.fnat1-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=LolQu1DftjMAX9q88n9&oh=05f4685f93279ffbaa81ef0e797b54e9&oe=5F863C06',
  },
  {
    name: 'Daniel Pontes',
    user: 'danielotavs',
    image_url:
      'https://instagram.fnat1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/79719260_1217439048466505_6413537038615982441_n.jpg?_nc_ht=instagram.fnat1-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=LolQu1DftjMAX9q88n9&oh=05f4685f93279ffbaa81ef0e797b54e9&oe=5F863C06',
  },
  {
    name: 'Bruna Marques1',
    user: 'brunamarques1',
    image_url:
      'https://instagram.fnat1-1.fna.fbcdn.net/v/t51.2885-15/e35/82144316_566852513862988_3795611742500042126_n.jpg?_nc_ht=instagram.fnat1-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=_wNRKiBJHNgAX8rKXfr&oh=29b8b4bff81babec3d31be84bbbc978a&oe=5F840CFC',
  },
  {
    name: 'Daniel Pontes',
    user: 'danielotavs',
    image_url:
      'https://instagram.fnat1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/79719260_1217439048466505_6413537038615982441_n.jpg?_nc_ht=instagram.fnat1-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=LolQu1DftjMAX9q88n9&oh=05f4685f93279ffbaa81ef0e797b54e9&oe=5F863C06',
  },
  {
    name: 'Daniel Pontes',
    user: 'danielotavs',
    image_url:
      'https://instagram.fnat1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/79719260_1217439048466505_6413537038615982441_n.jpg?_nc_ht=instagram.fnat1-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=LolQu1DftjMAX9q88n9&oh=05f4685f93279ffbaa81ef0e797b54e9&oe=5F863C06',
  },
  {
    name: 'Daniel Pontes',
    user: 'danielotavs',
    image_url:
      'https://instagram.fnat1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/79719260_1217439048466505_6413537038615982441_n.jpg?_nc_ht=instagram.fnat1-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=LolQu1DftjMAX9q88n9&oh=05f4685f93279ffbaa81ef0e797b54e9&oe=5F863C06',
  },
  {
    name: 'Daniel Pontes',
    user: 'danielotavs',
    image_url:
      'https://instagram.fnat1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/79719260_1217439048466505_6413537038615982441_n.jpg?_nc_ht=instagram.fnat1-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=LolQu1DftjMAX9q88n9&oh=05f4685f93279ffbaa81ef0e797b54e9&oe=5F863C06',
  },
  {
    name: 'Daniel Pontes',
    user: 'danielotavs',
    image_url:
      'https://instagram.fnat1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/79719260_1217439048466505_6413537038615982441_n.jpg?_nc_ht=instagram.fnat1-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=LolQu1DftjMAX9q88n9&oh=05f4685f93279ffbaa81ef0e797b54e9&oe=5F863C06',
  },
  {
    name: 'Daniel Pontes',
    user: 'FINAL',
    image_url:
      'https://instagram.fnat1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/79719260_1217439048466505_6413537038615982441_n.jpg?_nc_ht=instagram.fnat1-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=LolQu1DftjMAX9q88n9&oh=05f4685f93279ffbaa81ef0e797b54e9&oe=5F863C06',
  },
];

const Stories: React.FC = () => {
  const refContent = useRef<HTMLDivElement>(null);
  const [displayArrow, setDisplayArrow] = useState({
    left: false,
    right: true,
  });
  const [leftPosition, setLeftPosition] = useState(0);

  const handleScroll = useCallback(
    (value: number) => {
      if (refContent.current) {
        const maxScroll = refContent.current.scrollWidth - 600;
        let leftScrollPosition = leftPosition + value;

        if (leftScrollPosition > maxScroll) {
          leftScrollPosition = maxScroll;
        }

        if (leftScrollPosition < 0) {
          leftScrollPosition = 0;
        }

        refContent.current.scrollTo({
          left: leftScrollPosition,
          behavior: 'smooth',
        });

        if (leftScrollPosition <= 0) {
          setDisplayArrow({ left: false, right: true });
        }

        if (leftScrollPosition > 0 && leftScrollPosition < maxScroll) {
          setDisplayArrow({ right: true, left: true });
        }

        if (leftScrollPosition === maxScroll) {
          setDisplayArrow({ right: false, left: true });
        }
        setLeftPosition(leftScrollPosition);
      }
    },
    [leftPosition],
  );

  return (
    <Container>
      <ButtonPrev
        onClick={() => {
          handleScroll(-350);
        }}
        display={displayArrow}
      >
        <ArrowLeft />
      </ButtonPrev>

      <Content ref={refContent}>
        {users.map(({ name, user, image_url }) => (
          <a href="/" draggable="false">
            <UserStorie name={name} user={user} image_url={image_url} />
          </a>
        ))}
      </Content>

      <ButtonNext
        onClick={() => {
          handleScroll(350);
        }}
        display={displayArrow}
      >
        <ArrowRight />
      </ButtonNext>
    </Container>
  );
};

export default Stories;
