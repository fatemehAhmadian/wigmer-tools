

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
                <h1>prograssbar</h1>

            </div>
            <div className="container">
                <ToggleBtn
                    title='prograssbar'
                    text='Show PrograssBar on alert'
                    id='prograssbar-alert'
                    type={'update-showPrograssBar'}
                    value={target.showPrograssbar}
                />
                <ColorPicker
                    inputId='prograss-background-color'
                    title='background color'
                    type={'update-prograssColor'}
                    value={target.prograssBackgroundColor}
                />
                <ColorPicker
                    inputId='prograss-bar-color'
                    title='bar color'
                    type={'update-barColor'}
                    value={target.barColor}
                />
                <DropDown
                    title='border style'
                    items={['Solid', 'Dashed']}
                    type={'update-prograssBorderStyle'}
                    value={target.prograssBorderStyle}
                />
                <RangeBar
                    title='border width'
                    max={8}
                    rangeId={'prograss-border-width'}
                    type={'update-prograssBorderWidth'}
                    value={target.prograssBorderWidth}
                />
                <ColorPicker
                    inputId='prograss-border-color'
                    title='border color'
                    type={'update-prograssBorderColor'}
                    value={target.prograssBorderColor}
                />
                <RangeBar
                    title='border radius'
                    max={15}
                    rangeId={'prograss-border-radius'}
                    type={'update-prograssBorderRadius'}
                    value={target.prograssBorderRadius}
                />
            </div>

        </div>
    )
}