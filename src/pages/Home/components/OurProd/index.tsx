import { ProdCard } from "../ProdCard";
import { OurProdContainer, ProdList } from "./styles";
import { coffees } from "../../../../data/coffees";
import { useState } from "react";

export function OurProd(){
    const [busca, setBusca] = useState('')
    const coffeesFiltrados = coffees.filter((coffees) => coffees.name.includes(busca))
    console.log(busca)

    return(
        <OurProdContainer className="container">
            <input type="text" value={busca} onChange={(ev) => setBusca(ev.target.value)} />
            {/* <select onChange={(ev) => setBusca(ev.target.value)}>
                    <option value="Tradicional ">Tradicional</option>
                    <option value="com leite">com leite</option>
                    <option value="Especial ">Especial</option> 
                </select>*/}
            <ProdList>
                            {coffeesFiltrados.map((coffee) => (
                            <ProdCard key={coffee.id} coffee={coffee} />
                        ))} 
            </ProdList>
        </OurProdContainer>
    )
}