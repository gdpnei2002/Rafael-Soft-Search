import { ProdCard } from "../ProdCard";
import { OurProdContainer, ProdList } from "./styles";
import { coffees } from "../../../../data/coffees";
import { useState } from "react";

export function OurProd(){
    const [busca, setBusca] = useState('')
    const coffeesFiltrados = coffees.filter((coffees) => coffees.name.toLocaleLowerCase().includes(busca.toLowerCase()))

    return(
        <OurProdContainer className="container">
            <input type="text" value={busca} onChange={(ev) => setBusca(ev.target.value)} />
            <ProdList>
                            {coffeesFiltrados.map((coffee) => (
                            <ProdCard key={coffee.id} coffee={coffee} />
                        ))} 
            </ProdList>
        </OurProdContainer>
    )
}