import { ProdCard } from "../ProdCard";
import { OurProdContainer, ProdList, Stlinks } from "./styles";
import { coffees } from "../../../../data/coffees";

import { useState } from "react";

export function OurProd() {
  const [search, setSearch] = useState("");
  const coffeesFiltrados = coffees.filter((coffees) =>
    coffees.name.toLocaleLowerCase().includes(search.toLowerCase())
  );
  console.log(search);
  return (
    <>
    <Stlinks>
      <img src="https://i.imgur.com/J2Ts1y5.jpeg" />
     </Stlinks>
    <OurProdContainer className="container">
      <div>
        <input
          type="text"
          placeholder="Procurar arquivo..."
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
      </div>
    </OurProdContainer>
      <br />
    <Stlinks>
                <p>
                    <a href="#">Como baixar arquivos </a>|
                    <a href="#"> Telegram </a>|
                    <a href="#"> Fórum </a>|
                    <a href="#"> Blog </a>|
                    <a href="#"> Doodles </a>
                </p>
    </Stlinks> <br />
    <Stlinks>
                <div className="flex">
                    <p>BTC DOAÇÃO: </p>
                    <p className="btcode">18rfbQ7qZzxDLB9aR7AMH72Ytot6bMpbBN</p>
                </div>
      </Stlinks>
    </>
  );
}
