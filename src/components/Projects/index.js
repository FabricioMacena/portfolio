import { useState, useEffect } from "react";
import { Container } from "./styles";

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

    console.log("../../assets" + currentProject.pathAsset);
    console.log("../../assets/videos/analisecolaboradores-mp4.mp4");

    return(
        <Container colors={colors}>
            <div>
                {currentProject.pathAsset.endsWith('mp4') ? (
                    <video controls width="640" height="360">
                        <source src={`../../assets${currentProject.pathAsset}`} type="video/mp4" />
                        Seu Navegador não suporta o vídeo
                    </video>
                ) : (
                    <img src={`../../assets${currentProject.pathAsset}`} alt={currentProject.title} />
                )}
            </div>
            <div>
                <h1>{ currentProject.title }</h1>
                <p>{ currentProject.description }</p>
                <a href={currentProject.link} target="blank">Clique aqui para acessar o projeto</a>
            </div>
            {currentIndex > 0 && <button onClick={previousProject}>Anterior</button>}
            {currentIndex < data.length - 1 && <button onClick={nextProject}>Próximo</button>}
        </Container>
    )
}