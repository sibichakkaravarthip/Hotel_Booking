import { Link } from "react-router-dom";
export function Main(){
    return(
        <>
        <div className="img">
            <div className="book">
                <h1>Luxurious Rooms</h1>
                <h2>Book Your Comfortable Stay Now!</h2>
                <Link to="/click" className="booknow">Book Now</Link>
            </div>
        </div>
        </>
    )
}