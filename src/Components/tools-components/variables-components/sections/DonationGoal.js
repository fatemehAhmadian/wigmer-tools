



import './../../../../styles/tools-components/variables-components/sections/ManageSection.scss'
import ColorPicker from '../ColorPicker'
import DropDown from '../DropDown'
import RangeBar from '../RangeBar'
import DirectionBtn from '../DirectionBtn'

import DonationContext from '../../../../Context/donation'
import { useContext } from 'react'

export default function DonationGoal() {

    const donationContext = useContext(DonationContext)
    const target = donationContext.state.target

    return (
        <div className="manage">
            <div className="title">
                <h1>DONATION GOAL</h1>
            </div>
            <div className="container">
                <ColorPicker
                    inputId="color1"
                    title='background color'
                    type={'update-background'}
                    value={target.backgroundColor}
                />

                <DirectionBtn />

                <div className="gap"></div>
                <DropDown
                    title='border style'
                    items={['solid', 'dashed']}
                    type={'update-borderStyle'}
                    value={target.borderStyle}
                />
                <RangeBar
                    rangeId={'border-width'}
                    title={'border width'}
                    max={20}
                    type={'update-borderWidth'}
                    value={target.borderWidth}
                />
                <ColorPicker
                    inputId='border-color'
                    title={'border color'}
                    type={'update-borderColor'}
                    value={target.borderColor}
                />
                <RangeBar
                    rangeId={'border-radius'}
                    title={'border radius'}
                    max={50}
                    type={'update-borderRadius'}
                    value={target.borderRadius}
                />

            </div>

        </div>
    )
}