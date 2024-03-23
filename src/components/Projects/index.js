import { useState, useEffect } from "react";
import { Container, Aside } from "./styles";

export default function Projects({ colors, data }){
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentProject, setCurrentProject] = useState(data[0]);

    useEffect(() => {
        setCurrentProject(data[currentIndex]);
    }, [currentIndex, data]);
    
    const nextProject = () => {
        setCurrentIndex(currentIndex + 1);
    }

    const previousProject = () => {
        setCurrentIndex(currentIndex - 1);
    }

    return(
        <Container colors={colors}>
            <Aside>
                <div>
                    {currentProject.typeSrc === 'mp4' ? (
                        <video controls width="640" height="360" key={currentProject.id} className="srcAsset">
                            <source src={currentProject.src} type="video/mp4" />
                            Seu Navegador não suporta o vídeo
                        </video>
                    ) : (
                        <img src={currentProject.src} alt={currentProject.title} key={currentProject.id} className="srcAsset"/>
                    )}
                </div>
                <div>
                    <h1>{ currentProject.title }</h1>
                    <p>{ currentProject.description }</p>
                    <a href={currentProject.link} target="blank">Clique aqui para acessar o projeto</a>
                </div>
            </Aside>

            <div className="btns">
                {currentIndex > 0 && <button onClick={previousProject}>Anterior</button>}
                {currentIndex < data.length - 1 && <button onClick={nextProject}>Próximo</button>}
            </div>

            <div className="badges">
                
            </div>
        </Container>
    )
}