import { NavLink } from 'react-router-dom';
import './homePage.css'


const HomeBrowser = () => {

    return (
        <div>
            <div className="pictureContainer">
                <div className="home_background"></div>
            </div>
            <div className="pic_title">
                <h1 id="pic_header">Set Sail</h1>
                <div>Set sail on a new adventure,</div>
                <div>Discover new places, and Find yourself</div>
                <NavLink exact to='/api/docks'>
                    <button className="pic_btn">Raise Anchor</button>
                </NavLink>
            </div>
            <div className="social_links">
                <div className="gitHub">
                    <a href="https://github.com/tswieser/RetroCollector">
                        <div className="gitHub_icon" >
                            <i class="fab fa-github fa-2x"></i>
                        </div>
                    </a>
                </div>
                <div className="linkedIn">
                    <a href="https://www.linkedin.com/in/timothy-wieser-722b86215/">
                        <div className="linkedIn_icon" >
                            <i class="fab fa-linkedin fa-2x"></i>
                        </div>
                    </a>
                </div>
            </div>


        </div>
    )

}


export default HomeBrowser
