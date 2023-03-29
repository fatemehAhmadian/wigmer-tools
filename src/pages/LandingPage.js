
import { Outlet } from 'react-router-dom'
import MainPageSidebar from '../Components/layout/sidebar/MainPageSidebar'
import './../styles/pages/mainPage.scss'

export default function LandingPage() {


    return (
        <>
            <MainPageSidebar />
            <Outlet />
        </>
    )
}