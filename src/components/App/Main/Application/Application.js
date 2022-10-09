import googlePlay from '../../../../assets/Social/google-play.png';
import appStore from '../../../../assets/Social/appStore.png';

const Application = () => {
    return(
        <section className="app">
            <div className="app_container">
                <div className="app_subtitle">скоро</div>
                <div className="app_title">Удобное приложение для питомцев и <br/> их хозяев</div>
                <div className="app_download">
                    <a href=""><img src={appStore} alt="Download" className="app_download-icon"/></a> 
                    <a href=""><img src={googlePlay} alt="Download" className="app_download-icon"/></a> 
                </div>
            </div>
        </section>
    )
}

export default Application