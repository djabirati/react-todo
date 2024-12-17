import {Firstname} from "../../ui/Firstname/Firstname.jsx";
import {Lastname} from "../../ui/Lastname/Lastname.jsx";

export  function Fullname() {
    return (
        <div>
            <h2>Mon nom en entier</h2>
            <Firstname />
            <Lastname />
        </div>
    )
}