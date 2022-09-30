import styled from 'styled-components';
import { TitleText, RegularText } from '../../../../components/Typography';

export const ProdCardContainer = styled.div`
  width: 240px;
  background: white;
  border: 2px solid #e7e7e7;
  border-radius: 6px;

  img {
    padding: 0;
    width: 100%;
  }
`;

export const Link = styled.div`
  background-color: #717cf5;
  border: none;
  padding: 12px;
  border-radius: 20px;
  text-align: center;
  margin: 10%;
  width: 80%;

  a {
    font-weight: bold;
    color: #fff;
  }
`;

export const Name = styled(TitleText).attrs({
  size: 's',
  color: 'subtitle'
})`
  padding-top: 5%;
  font-weight: 700;
  margin-bottom: 0.5rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-family: Roboto;
`;

export const Description = styled(RegularText).attrs({
  size: 's',
  color: 'label'
})`
  padding-left: 5%;
  margin-bottom: 2rem;
`;
