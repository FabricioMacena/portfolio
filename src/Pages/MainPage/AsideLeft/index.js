import { Aside } from "./styles";

import GithubIcon from '../../../assets/icons/github-icon.svg';
import EmailIcon from '../../../assets/icons/email-icon.svg';
import TwitterxIcon from '../../../assets/icons/twitterx-icon.svg';
import LinkedinIcon from '../../../assets/icons/linkedin-icon.svg';
import KaggleIcon from '../../../assets/icons/kaggle-icon.svg';
import Me from '../../../assets/imgs/me.jpg';

export default function AsideLeft(){
    return(
        <Aside>
            <h1 id="titleName">FABRÍCIO <br /> MACENA</h1>
            <div id="icons">
                <a href="mailto:fabriciomacena03@gmail.com" target="blank"><img src={EmailIcon} alt="Email" className="icon email"/></a>
                <a href="https://github.com/FabricioMacena" target="blank"><img src={GithubIcon} alt="Github" className="icon github"/></a>
                <a href="https://www.kaggle.com/fabrciomacena" target="blank"><img src={KaggleIcon} alt="Kaggle" className="icon kaggle"/></a>
                <a href="https://twitter.com/fabriciomacena_" target="blank"><img src={TwitterxIcon} alt="Twitter" className="icon twitterx"/></a>
                <a href="https://www.linkedin.com/in/fabriciomacena/" target="blank"><img src={LinkedinIcon} alt="Linkedin" className="icon linkedin"/></a>
            </div>
            <figure>
                <img src={Me} alt="Minha Foto" className="photo" />
            </figure>
        </Aside>
    )
}