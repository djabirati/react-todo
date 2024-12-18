import {Firstname} from "../../ui/Firstname/Firstname.jsx";
import {Lastname} from "../../ui/Lastname/Lastname.jsx";

export  function Fullname(props) {
    return (
        <div>
            <h2>Mon nom en entier</h2>
            <Firstname prenom={props.prenom} />
            <Lastname nom={props.nom} />
        </div>
    )
}