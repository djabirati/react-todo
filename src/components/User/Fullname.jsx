import {Firstname} from "./Firstname.jsx";
import {Lastname} from "./Lastname.jsx";

export  function Fullname() {
    return (
        <div>
            <h2>Mon nom en entier</h2>
            <Firstname />
            <Lastname />
        </div>
    )
}