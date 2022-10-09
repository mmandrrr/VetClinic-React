import Advantages from "./Advantages/Advantages";
import Application from "./Application/Application";
import Contacts from "./Contacts/Contacts";
import History from "./History/History";
import Services from "./Services/Services";
import Slider from "./Slider/Slider";

const Main = () => {
    return(
        <main className="main">
            <Slider />
            <Services />
            <History />
            <Advantages />
            <Application />
            <Contacts />
        </main>
    )
}

export default Main