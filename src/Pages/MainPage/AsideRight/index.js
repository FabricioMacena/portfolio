import { Aside } from "./style";

import { Link } from "react-router-dom";

export default function AsideRight(){
    return(
        <Aside>
            <p id="about">Sou estudante de tecnologia em diferentes verdentes, tanto no Desenvolvimento de Software, quanto em Ciência e Análise de Dados. Navegue pelos tópicos abaixo para ver meus projetos!</p>
            <nav>
                <Link to="/development" className="link dev">Desenvolvimento de Software</Link>
                <Link to="/datascience" className="link data">Ciência e Análise de Dados</Link>
            </nav>
        </Aside>
    )
}