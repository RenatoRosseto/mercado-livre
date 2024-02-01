import Card from 'components/atom/Card';
import Button from 'components/atom/Button';

import {
  HomeCardContainer,
  Title,
  ContainerImg,
  Image,
  ContainerText,
  Text,
  ContainerButton,
} from './HomeCard.styles';
import { HomeCardProps } from './HomeCard.types';

const HomeCard = (props: HomeCardProps) => {
  const { title, image, imgAlt, text, buttonText, id } = props;

  return (
    <Card id={id}>
      <HomeCardContainer>
        <Title title={title}>{title}</Title>
        <ContainerImg>
          <Image src={image} alt={imgAlt} />
        </ContainerImg>
        <ContainerText>
          <Text title={text}>{text}</Text>
        </ContainerText>
        <ContainerButton>
          <Button fullWidth size="small" variant="secondary">
            {buttonText}
          </Button>
        </ContainerButton>
      </HomeCardContainer>
    </Card>
  );
};

export default HomeCard;
