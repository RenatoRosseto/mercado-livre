import styled from 'styled-components';

export const HomeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 183px;
  padding: 16px;
`;

export const Title = styled.h2`
  color: rgba(0, 0, 0, 0.9);
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  margin: 0;
  overflow: hidden;
  text-decoration: none;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
  margin-bottom: 10px;
`;

export const ContainerImg = styled.div`
  align-items: center;
  display: flex;
  height: 105px;
  justify-content: center;
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

export const ContainerText = styled.div`
  color: rgba(0, 0, 0, 0.9);
  font-size: 14px;
  font-weight: 400;
  height: 52px;
  line-height: 18px;
  text-align: center;
  margin: 12px 0px;
`;

export const Text = styled.p`
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ContainerButton = styled.div`
  max-height: 24px;
`;
