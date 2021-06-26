import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getDocks } from '../../store/dock';
import './DocksPage.css'

export function avgRating(numArr) {
    if (numArr.length > 0) {
        let avg = 0;
        for (let i = 0; i < numArr.length; i++) {
            let review = numArr[i];
            avg += review.rating;
        }
        let rounded = avg / numArr.length
        return Math.round(rounded * 100) / 100
    } else {
        return ('No Reviews')
    }
}

const DockPage = () => {
    const dispatch = useDispatch();

    const docks = useSelector((state) => Object.values(state.dock));

    useEffect(() => {
        dispatch(getDocks());
    }, [dispatch])

    return (
        <div className="docks_container">
            {docks.map((dock) => (
                <div className='dock_listings'>

                    <Link className="dock_title" key={dock.id} to={`/api/docks/${dock.id}`}>
                        <h2 className="dock_title">{dock.dock_name}</h2>
                    </Link>

                    <img
                        className="dock_image"
                        src={dock.Images[0].url}
                    ></img>
                    <div className="dock_info">
                        <div className="dock_location">Private Dock Located </div>
                        <div className="dock_address">{dock.address}</div>
                        <div className="dock_city">{dock.city}</div>
                        <div className="dock_state">{dock.state}</div>
                        <div className="dock_rating"><i className="fas fa-star">{avgRating(dock.Reviews)}</i></div>


                    </div>
                    <div className="dock_price">${dock.price} /Night
                        <Link to={`/api/docks/${dock.id}`}>
                            <button className="reserve_btn">Reserve Now</button>
                        </Link>
                    </div>
                </div>

            ))}


        </div>


    )





}

export default DockPage;
