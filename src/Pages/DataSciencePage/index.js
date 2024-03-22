import TemplateProjs from "../../components/TemplateProjs"

export default function DataSciencePage(){
    return(
        <TemplateProjs 
            values={{
                title: "Ciência e Análise de Dados",
                colors: {
                    primaryColor: "#00C2FF",
                    secondaryColor: "#4950EF"
                } 
            }}
        />
    )
}