import TemplateProjs from "../../components/TemplateProjs"

export default function DevelopmentPage(){
    return(
        <TemplateProjs 
            values={{
                title: "Desenvolvimento de Software",
                colors: {
                    primaryColor: "#F9BC21",
                    secondaryColor: "#F97515"
                } 
            }}
        />
    )
}