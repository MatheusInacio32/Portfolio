import Navbar from '../../components/Navbar';
import Home from '../../components/Home';
import Sobre from '../../components/Sobre';
import Exp from '../../components/Exp';
import Projetos from '../../components/Projetos';
import Contato from '../../components/Contato';
import Skills from '../../components/Skills';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fas, fab);
const LandingPage = () =>{
    return (
        <div className="bg-claro w-full min-h-screen overflow-hidden">    
            <div> < Navbar  /> </div>
            <div> < Home    /> </div>
            <div> < Sobre   /> </div>
            <div> < Skills  /> </div>
            <div> < Exp     /> </div>
            <div> < Projetos/> </div>
            <div> < Contato /> </div>
                
        </div>
        );
}
export default LandingPage;