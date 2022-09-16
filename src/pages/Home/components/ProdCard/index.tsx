import { Description, Name, ProdCardContainer } from "./styles";

export interface Coffee {
    name: string;
    description: string;
    photo: string;
  }

  interface CoffeeProps {
    coffee: Coffee;
  }

export function ProdCard({coffee}: CoffeeProps){
    return(
        <ProdCardContainer>
            <img src={`/coffees/${coffee.photo}`} alt=""/>
            <Name>
                {coffee.name}
                {/* {coffee.name.map((name) => (
                    <span key={`${coffee.id}${name}`}>{name}</span>
                    ))} */}
            </Name>
            <Description>
                {coffee.description}
            </Description>
        </ProdCardContainer>
    )
}