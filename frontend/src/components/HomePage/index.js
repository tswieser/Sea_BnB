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



        </div>
    )

}


export default HomeBrowser
