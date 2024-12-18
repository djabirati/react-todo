
import {Header} from "./components/containers/Header/Header.jsx";
import {Footer} from "./components/containers/Footer/Footer.jsx";
import ButtonSubmit from "./components/ui/Button/ButtonSubmit.jsx";
import {User} from "./components/containers/User/User.jsx";
import './index.css';
import {Player} from "./components/containers/Player/Player.jsx";
import {Hobbies} from "./components/containers/Hobbies/Hobbies.jsx";
import {Fullname} from "./components/containers/Fullname/Fullname.jsx";

function App() {
    const user = {
        prenom: "Djabirati",
        nom: "Marthadi",
        hobbies: ["volleyball", "Lecture"]
    }
   return (
       <>
         <div>
            <Header />
             <ButtonSubmit />
             <Fullname prenom={user.prenom} nom={user.nom} />
             <Hobbies hobbies={user.hobbies} />
             <Player />
            <Footer />
         </div>

       </>
   )
}

export default App
