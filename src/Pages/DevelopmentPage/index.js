import TemplateProjs from "../../components/TemplateProjs"

import { dataDEV } from "../../data/development"

export default function DevelopmentPage(){
    return(
        <TemplateProjs 
            values={{
                title: "Desenvolvimento de Software",
                colors: {
                    primaryColor: "#F9BC21",
                    secondaryColor: "#F97515"
                },
                data: dataDEV
            }}
        />
    )
}