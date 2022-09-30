import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const OurProdContainer = styled.section`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;
  align-items: center;

  input {
    background-image: url('https://i.imgur.com/E1XH3uO.png');
    background-position: 15px 20px;
    background-repeat: no-repeat;
    width: 100%;
    font-size: 16px;
    padding: 12px 20px 12px 40px;
    border: 1px solid #ddd;
    margin-bottom: 12px;
    min-width: 600px;
    min-height: 60px;
    border-radius: 50px;
    box-shadow: 5px 10px 8px #dddddd;
    @media (max-width: 600px) {
      min-width: 300px;
    }
  }
`;

export const ProdList = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  max-width: 1056px;
  width: 100%;

  column-gap: 2rem;
  row-gap: 2.5rem;
`;

export const Stlinks = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  img {
    height: 200px;
  }
  p {
    color: #ff2a49;

    a {
      color: #ff2a49;
    }
  }
  .flex {
    display: flex;
    @media (max-width: 600px) {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
    }
    p {
    }
    .btcode {
      color: black;
      font-weight: bold;
    }
  }
`;
