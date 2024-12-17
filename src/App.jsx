
import {Header} from "./components/containers/Header/Header.jsx";
import {Footer} from "./components/containers/Footer/Footer.jsx";
import ButtonSubmit from "./components/ui/Button/ButtonSubmit.jsx";
import {User} from "./components/containers/User/User.jsx";


function App() {

   return (
       <>
         <div>
            <Header />
             <ButtonSubmit />
             <User/>
            <Footer />
         </div>

       </>
   )
}

export default App
