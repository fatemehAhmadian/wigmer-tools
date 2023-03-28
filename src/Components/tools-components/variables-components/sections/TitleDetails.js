
// import styles
import './../../../../styles/tools-components/variables-components/sections/ManageSection.scss'

import ToggleBtn from '../ToggleBtn'
import DropDown from '../DropDown'
import RangeBar from '../RangeBar'
import ColorPicker from '../ColorPicker'

import DonationContext from '../../../../Context/donation'
import { useContext } from 'react'

export default function TitleDetails() {

    const donationContext = useContext(DonationContext)

    const target = donationContext.state.target

    return (
        <div className="manage">
            <div className="title">
                <h1>title details</h1>

            </div>
            <div className="container">
                <ToggleBtn
                    id='title-detail'
                    title={'details'}
                    text='Title Details'
                    type={'update-showTitleDetails'}
                    value={target.showTitleDetails}
                />
                <ToggleBtn
                    id='text-shadow'
                    title={'text shadow'}
                    text='Show title details on stream'
                    type={'update-showTitleDetailsShadow'}
                    value={target.showTitleDetailsShadow}
                />
                <ColorPicker
                    inputId='title-color'
                    title='text color'
                    type={'update-detailsColor'}
                    value={target.detailsColor}
                />
                <DropDown
                    title='font family'
                    items={['sans-serif', 'MuseoModerno', 'Faustina', 'Grenze', 'GrenzeGotisch', 'Manuale', 'A-Duel', 'A-Massir', 'Vazir']}
                    type={'update-detailsFamily'}
                    value={target.detailsFontFamily}
                />
                <DropDown
                    title='font style'
                    items={['Bolder', 'Lighter']}
                    type={'update-detailsStyle'}
                    value={target.detailsFontStyle}
                />
                <RangeBar
                    title='font size'
                    max={50}
                    rangeId={'title-font-size'}
                    type={'update-detailsSize'}
                    value={target.detailsFontSize}
                />
            </div>

        </div>
    )
}