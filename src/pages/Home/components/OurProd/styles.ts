import styled from "styled-components";

export const OurProdContainer = styled.section`
  margin-top: 2rem;  
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  
  input{
    background-image: url('https://i.imgur.com/E1XH3uO.png'); /* Add a search icon to input */
    background-position: 15px 20px ; /* Position the search icon */
    background-repeat: no-repeat; /* Do not repeat the icon image */
    width: 100%; /* Full-width */
    font-size: 16px; /* Increase font-size */
    padding: 12px 20px 12px 40px; /* Add some padding */
    border: 1px solid #ddd; /* Add a grey border */
    margin-bottom: 12px; /* Add some space below the input */
    min-width: 600px;
    min-height: 60px;
    border-radius: 50px;
    box-shadow: 5px 10px 8px #dddddd;
      @media (max-width: 600px){
        min-width: 300px;
    }
  }

`;

export const ProdList = styled.div`
  width: 100%;
  max-width: 600px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 2rem;
  row-gap: 2.5rem;
  margin-top: 3.5rem;

  @media (max-width: 600px){
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Stlinks = styled.section`

display: flex;
flex-direction: row;
justify-content: center;
align-items: center;

img{
  height: 200px;
}
    p{
        color: #ff2a49;

        a{
            color: #ff2a49;
    
        }

    }
    .flex{
        display: flex;
        @media (max-width: 600px){
              display: grid;
              grid-template-columns: repeat(1, 1fr);
            }
        p{
        }
        .btcode{
            color: black;
            font-weight: bold;
        }
    }
    `