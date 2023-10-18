import { Banner } from "../components/Banner"
import NavBar from "../components/NavBar"
import '../CSS/App.css';
import '../CSS/NavBar.css';
import '../CSS/Banner.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Home=()=>{
    return(
        <div>
            <NavBar/>
            <Banner/>
        </div>
    )
}
export default Home;