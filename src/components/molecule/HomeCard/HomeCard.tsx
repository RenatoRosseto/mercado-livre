import Card from 'components/atom/Card';
import Button from 'components/atom/Button';

import { HomeCardContainer, Title, Image, Text } from './HomeCard.styles';
import { HomeCardProps } from './HomeCard.types';

const HomeCard = (props: HomeCardProps) => {
  const { title, image, imgAlt, text, buttonText, id } = props;

  return (
    <Card id={id}>
      <HomeCardContainer>
        <Title>{title}</Title>
        <Image src={image} alt={imgAlt} />
        <Text>{text}</Text>
        <Button>{buttonText}</Button>
      </HomeCardContainer>
    </Card>
  );
};

export default HomeCard;
