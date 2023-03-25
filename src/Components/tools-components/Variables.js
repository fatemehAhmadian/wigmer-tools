

import './../../styles/tools-components/variables.scss'
import DonationGoal from './variables-components/sections/DonationGoal'

// import components
import ManageSection from './variables-components/sections/ManageSection'
import TitleDetails from './variables-components/sections/TitleDetails'
import TitleTargets from './variables-components/sections/TitleTarget'
import PrograssBar from './variables-components/sections/PrograssBar'


export default function Variables() {
    return (
        <>

            <div className="variables">
                <ManageSection />
                <DonationGoal />
                <TitleTargets />
                <PrograssBar />
                <TitleDetails />
            </div>


        </>
    )
}