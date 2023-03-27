import './../styles/pages/tools.scss'
import { Link } from 'react-router-dom';

// import components

import Sidebar from '../Components/layout/sidebar/Sidebar';


export default function Tools() {

    return (
        <div className="tools">
            <Sidebar />

            <div className="content">
                <Link to={'/tools/donation'}>donation</Link>
                <Link>else</Link>
                <Link>else</Link>
                <Link>else</Link>
            </div>
        </div>
    )
}