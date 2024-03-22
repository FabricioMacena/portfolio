import Header from "../Header";
import Projects from "../Projects";
import { Template } from "./styles";

export default function TemplateProjs({ values }){
    return(
        <Template>
            <Header 
                title={values.title}
                colors={values.colors}
            />
            <Projects
                colors={values.colors}
                data={values.data}
            />
        </Template>
    )
}