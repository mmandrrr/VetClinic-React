import appStore from '../../../../assets/Social/appStore.png';
import googlePLay from '../../../../assets/Social/google-play.png';
import inst from '../../../../assets/Social/inst-footer.svg';
import fb from '../../../../assets/Social/fb-footer.svg';
import vk from '../../../../assets/Social/vk-footer.svg';
import youtube from '../../../../assets/Social/youtube-footer.svg';

const Social = () => {
    return(
        <div className="footer_social">
            <div className="footer_social-download">
                <a href=""><img src={appStore} alt="AppStore"/></a>
                <a href=""><img src={googlePLay} alt="GooglePLay"/></a>
            </div>
            <div className="footer_social-media">
                <img src={inst} alt="Instagramm" />
                <img src={fb} alt="Facebook" />
                <img src={vk} alt="VKontakte" />
                <img src={youtube} alt="Youtube" />
            </div>
            <div className="footer_social-contacts">
                <span>mmmm@gmail.com</span>
                <span>mmmmmmm@gmail.com</span>
            </div>
        </div>
    )
}

export default Social