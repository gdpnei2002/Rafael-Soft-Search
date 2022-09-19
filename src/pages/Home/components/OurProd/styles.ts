import styled from "styled-components";

export const OurProdContainer = styled.section`
  width: 100%;
  margin-top: 2rem;
  
  img{
    height: 200px
  }
  
  input{
  background-image: url('https://i.imgur.com/E1XH3uO.png'); /* Add a search icon to input */
  background-position: 10px 12px; /* Position the search icon */
  background-repeat: no-repeat; /* Do not repeat the icon image */
  width: 100%; /* Full-width */
  font-size: 16px; /* Increase font-size */
  padding: 12px 20px 12px 40px; /* Add some padding */
  border: 1px solid #ddd; /* Add a grey border */
  margin-bottom: 12px; /* Add some space below the input */
  }

`;

export const ProdList = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 2rem;
  row-gap: 2.5rem;
  margin-top: 3.5rem;
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
        p{
        }
        .btcode{
            color: black;
            font-weight: bold;
        }
    }
    `