import React, { useRef, useCallback, useState } from 'react';

import { ReactComponent as ArrowLeft } from '../../assets/icons/arrowLeft.svg';
import { ReactComponent as ArrowRight } from '../../assets/icons/arrowRight.svg';
import { Content, Container, ButtonNext, ButtonPrev } from './styles';

import UserStorie from './UserStorie';

const Stories: React.FC = () => {
  const refContainer = useRef<HTMLDivElement>(null);
  const [leftPosition, setLeftPosition] = useState<number>(
    refContainer.current?.scrollLeft ? refContainer.current?.scrollLeft : 0,
  );
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
      name: 'Daniel Pontes',
      user: 'danielotavs',
      image_url:
        'https://instagram.fnat1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/79719260_1217439048466505_6413537038615982441_n.jpg?_nc_ht=instagram.fnat1-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=LolQu1DftjMAX9q88n9&oh=05f4685f93279ffbaa81ef0e797b54e9&oe=5F863C06',
    },
  ];

  const handleScrollNext = useCallback(() => {
    if (refContainer.current) {
      const leftValue = refContainer.current.scrollLeft + 500;
      refContainer.current.scrollTo({
        left: leftValue,
        behavior: 'smooth',
      });
      console.log(leftValue, refContainer.current.scrollWidth);
      if (leftValue + 500 >= refContainer.current.scrollWidth) {
        setLeftPosition(refContainer.current.scrollWidth);
        return;
      }
      setLeftPosition(leftValue);
    }
  }, []);
  const handleScrollPrev = useCallback(() => {
    if (refContainer.current) {
      const leftValue = refContainer.current.scrollLeft - 500;
      refContainer.current.scrollTo({
        left: leftValue,
        behavior: 'smooth',
      });

      setLeftPosition(leftValue);
    }
  }, []);

  return (
    <Container>
      {!!leftPosition && (
        <ButtonPrev
          onClick={handleScrollPrev}
          leftPosition={refContainer.current?.scrollLeft}
        >
          <ArrowLeft />
        </ButtonPrev>
      )}

      <Content ref={refContainer}>
        {users.map(({ name, user, image_url }) => (
          <a href="/" draggable="false">
            <UserStorie name={name} user={user} image_url={image_url} />
          </a>
        ))}
      </Content>

      {refContainer.current?.scrollWidth ? (
        !(leftPosition >= refContainer.current?.scrollWidth) && (
          <ButtonNext
            onClick={handleScrollNext}
            leftPosition={refContainer.current?.scrollLeft}
          >
            <ArrowRight />
          </ButtonNext>
        )
      ) : (
        <ButtonNext
          onClick={handleScrollNext}
          leftPosition={refContainer.current?.scrollLeft}
        >
          <ArrowRight />
        </ButtonNext>
      )}
    </Container>
  );
};

export default Stories;
