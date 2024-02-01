import styled from 'styled-components';

import HomeCard from 'components/molecule/HomeCard';

export default function Home() {
  const ContainerCards = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    margin-top: 16px;
  `;

  return (
    <div className="container">
      <ContainerCards>
        <HomeCard
          key={1}
          title="Entre na sua conta"
          image="images/icon-card-1.png"
          text="Aproveite ofertas para comprar tudo que quiser"
          buttonText="Entrar na sua conta"
          buttonLink="https://www.mercadolivre.com.br"
        />

        <HomeCard
          key={2}
          title="Insira sua localização"
          image="images/icon-card-2.png"
          text="Confira os custos e prazos de entrega"
          buttonText="Inserir localização"
          buttonLink="https://www.mercadolivre.com.br"
        />

        <HomeCard
          key={3}
          title="Meios de pagamento"
          image="images/icon-card-3.png"
          text="Pague suas compras com rapidez e segurança"
          buttonText="Mostrar meios"
          buttonLink="https://www.mercadolivre.com.br"
        />
      </ContainerCards>
    </div>
  );
}
