import { Aside } from "./styles";

import GithubIcon from '../../../assets/icons/github-icon.svg';
import EmailIcon from '../../../assets/icons/email-icon.svg';
import TwitterxIcon from '../../../assets/icons/twitterx-icon.svg';
import Me from '../../../assets/imgs/me.jpg';

export default function AsideLeft(){
    return(
        <Aside>
            <p>FABRÍCIO MACENA</p>
            <div id="icons">
                <img src={EmailIcon} alt="Github" className="icon email"/>
                <img src={GithubIcon} alt="Github" className="icon github"/>
                <img src={TwitterxIcon} alt="Github" className="icon twitterx"/>
            </div>
            <figure><img src={Me} alt="Minha Foto" className="photo" /></figure>
        </Aside>
    )
}