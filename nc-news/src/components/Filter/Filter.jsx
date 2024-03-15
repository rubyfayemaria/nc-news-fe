import { Link } from "react-router-dom"
import './Filter.css'

const Filter = ({topic}) => {

    let url = '/articles?';
    if (topic) {
        url += `topic=${topic}&`
    }
    return (
        <div className="dropdown">
            <button className="dropbtn">Filter</button>
            <div className="dropdown-content">
                <Link to={`${url}sort_by=created_at`}>Date</Link>
            </div>
        </div>
    )
}

export default Filter