import Navigation from "./Navigation/Navigation";
import Social from "./Social/Social";


const Footer = () => {
    return(
        <footer className="footer">
            <div className="footer_container">
                <Navigation />
                <Social />
            </div>
        </footer>
    )
}

export default Footer