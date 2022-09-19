import { Stlinks } from "./styles"

export function Links() {
    return(
        <>
            <Stlinks>
                <p>
                    <a href="#">Como baixar arquivos </a>|
                    <a href="#"> Telegram </a>|
                    <a href="#"> Fórum </a>|
                    <a href="#"> Blog </a>|
                    <a href="#"> Doodles </a>
                </p>
                <div className="flex">
                    <p>BTC DOAÇÃO: </p>
                    <p className="btcode">18rfbQ7qZzxDLB9aR7AMH72Ytot6bMpbBN</p>
                </div>
            </Stlinks>
        </>
    )
}