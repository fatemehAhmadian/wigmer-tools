

import './../../../../styles/tools-components/variables-components/sections/ManageSection.scss'
import './../../../../styles/fonts/En-font-face.scss'
import './../../../../styles/fonts/Fa-font-face.scss'

import ToggleBtn from '../ToggleBtn'
import DropDown from '../DropDown'
import RangeBar from '../RangeBar'
import ColorPicker from '../ColorPicker'

import DonationContext from '../../../../Context/donation'
import { useContext } from 'react'

export default function TitleTargets() {

    const donationContext = useContext(DonationContext)
    const target = donationContext.state.target

    return (
        <div className="manage">
            <div className="title">
                <h1>title target</h1>
            </div>
            <div className="container">
                <ToggleBtn
                    title='text alert'
                    id='title-alert'
                    text='Show title target on alert'
                    type={'update-showTitle'}
                    value={target.showTitle}
                />
                <ToggleBtn
                    title='text shadow'
                    id='text-alert'
                    text='Show text shadow on alert'
                    type={'update-showTitleShadow'}
                    value={target.showTitleShadow}
                />
                <DropDown
                    title='font family'
                    items={['sans-serif', 'MuseoModerno', 'Faustina', 'Grenze', 'GrenzeGotisch', 'Manuale', 'A-Duel', 'A-Massir', 'Vazir']}
                    type={'update-titleFamily'}
                    value={target.titleFontFamily}
                />
                <DropDown
                    title='font style'
                    items={['Bolder', 'Lighter',]}
                    type={'update-titleStyle'}
                    value={target.titleFontStyle}
                />
                <RangeBar
                    rangeId={'font-size'}
                    title='font size'
                    max={100}
                    type={'update-titleSize'}
                    value={target.titleFontSize}
                />
                <ColorPicker
                    inputId="color"
                    title='color'
                    type={'update-titleColor'}
                    value={target.titleColor}
                />
            </div>

        </div>
    )
}