import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getSingularDock, getDocks } from '../../store/dock';
import { avgRating } from '../DocksPage'
import './ReservationPage.css'




const ReservationPage = () => {
    const { dockId } = useParams();
    const dock = useSelector(state => state.dock[dockId])

    // console.log('=================>', dock);

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getSingularDock(dockId),);
    }, [dispatch])


    return (
        <div className="main-container">
            <h2 className="Title">{dock.dock_name}</h2>

            <div className="basic_info_container">
                <div className="dock_rating"><i className="fas fa-star"></i> {avgRating(dock.Reviews)}   ({dock.Reviews.length} reviews)</div>
                <div className="location">{dock.city}, {dock.state}, United States</div>
            </div>

            <div className="img_container">
                {dock.Images.map((dock) => (
                    <img
                        className="dock_image"
                        src={dock.url}
                    ></img>
                ))}
            </div>
            <div className="user_title">
                <p>Private Dock Hosted by {dock.User.username}</p>
            </div>

            <div className="reservation_form">


            </div>





        </div>
    )

}


export default ReservationPage;
