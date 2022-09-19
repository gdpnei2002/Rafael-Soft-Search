import { Description, Name, ProdCardContainer, Link } from "./styles";

export interface Coffee {
    name: string;
    description: string;
    photo: string;
    link: string;
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
            </Name>
            <Description>
                {coffee.description}
            </Description>
            <Link>
                <a href={coffee.link}>Acessar conteúdo</a>
            </Link>
        </ProdCardContainer>
    )
}