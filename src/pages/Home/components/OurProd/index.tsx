import { ProdCard } from "../ProdCard";
import { OurProdContainer, ProdList } from "./styles";
import { coffees } from "../../../../data/coffees";
import { useState } from "react";

export function OurProd() {
  const [search, setSearch] = useState("");
  const coffeesFiltrados = coffees.filter((coffees) =>
    coffees.name.toLocaleLowerCase().includes(search.toLowerCase())
  );
  console.log(search);
  return (
    <OurProdContainer className="container">
      <input
        type="text"
        placeholder="buscar..."
        value={search}
        onChange={(ev) => setSearch(ev.target.value)}
      />

      <ProdList>
        {search.length === 0 ? (
          <></>
        ) : (
          coffeesFiltrados.map((coffee) => (
            <ProdCard key={coffee.id} coffee={coffee} />
          ))
        )}
      </ProdList>
    </OurProdContainer>
  );
}
