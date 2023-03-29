
import { Link } from "react-router-dom"
import Sidebar from "../Components/layout/sidebar/Sidebar"
import SiteHeader from "../Components/layout/SiteHeader"
import './../styles/pages/dashboard.scss'

export default function Dashboard() {

    return (
        <div className="dashboard">
      <SiteHeader />

            <Sidebar />
            <div className="content">
                <h1>dashboard</h1>

            </div>

        </div>
    )

}