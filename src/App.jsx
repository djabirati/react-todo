import { Header } from "./components/containers/Header/Header.jsx";
import { Footer } from "./components/containers/Footer/Footer.jsx";
import ButtonSubmit from "./components/ui/Button/ButtonSubmit.jsx";
import "./index.css";
import { Player } from "./components/containers/Player/Player.jsx";
import { Hobbies } from "./components/containers/Hobbies/Hobbies.jsx";
import { Fullname } from "./components/containers/Fullname/Fullname.jsx";
import { BoutonRoutine } from "./components/ui/Button/Routine.jsx";

function App() {
    const user = {
        prenom: "Djabirati",
        nom: "Marthadi",
        hobbies: ["volleyball", "Lecture"],
    };

    function manger() {
        alert("Il faut manger");
    }

    function dormir() {
        alert("Il faut dormir");
    }

    function etudier() {
        alert("Il faut étudier");
    }

    return (
        <>
            <Header />
            <div className="routine-container">
                <BoutonRoutine couleur="red" gereClique={manger}>
                    <p>Manger</p>
                </BoutonRoutine>
                <BoutonRoutine couleur="blue" gereClique={dormir}>
                    <p>Dormir</p>
                </BoutonRoutine>
                <BoutonRoutine couleur="green" gereClique={etudier}>
                    <p>Étudier</p>
                </BoutonRoutine>
            </div>
            <ButtonSubmit />
            <Fullname prenom={user.prenom} nom={user.nom} />
            <Hobbies hobbies={user.hobbies} />
            <Player />
            <Footer />
        </>
    );
}

export default App;
