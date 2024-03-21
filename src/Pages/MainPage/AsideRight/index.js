import { Aside } from "./style";

import { Link } from "react-router-dom";

export default function AsideRight(){
    return(
        <Aside>
            <p id="about">Sou um estudante de tecnologia em diferentes verdentes, tanto no Desenvolvimento de Software, quanto em Ciência e Análise de Dados</p>
            <nav>
                <Link to="/develoopment">Desenvolviemnto de Software</Link>
                <Link to="/datascience">Ciência e Análise de Dados</Link>
            </nav>
        </Aside>
    )
}