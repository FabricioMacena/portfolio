import { Container, Title } from "./styles";

import { Link } from "react-router-dom";

import arrowData from "../../assets/imgs/arrow-data.png";
import arrowDev from "../../assets/imgs/arrow-dev.png";

export default function Header({ title, colors }){
    return(
        <Container>
            <Link to="/">
                {
                    title === "Desenvolvimento de Software"
                        ? <img src={arrowDev} alt="Voltar" />
                        : <img src={arrowData} alt="Voltar" />
                }
            </Link>
            
            <Title colors={colors} >{ title }</Title>
        </Container>
    )
}