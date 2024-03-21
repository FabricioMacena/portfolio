import { Link } from "react-router-dom";

export default function MainPage(){
    return(
        <>
            <h2>Página Inicial</h2>
            <Link to="/datascience">To DataScience Page</Link>
            <br />
            <Link to="/development">To Development Page</Link>
        </>
    )
}