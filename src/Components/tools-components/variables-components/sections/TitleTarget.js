

import './../../../../styles/tools-components/variables-components/sections/ManageSection.scss'

import TextInput from '../TextInput'
import ToggleBtn from '../ToggleBtn'
import DropDown from '../DropDown'
import RangeBar from '../RangeBar'
import ColorPicker from '../ColorPicker'

import ToolsContext from '../../../../Context/Tools'
import { useContext } from 'react'

export default function TitleTargets() {

    const toolsContext = useContext(ToolsContext)
    const target = toolsContext.state.target

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
                    items={['sans-serif', 'Aviano', 'Anjoman', 'chiselBold', 'CoCo', 'CommerCial', 'Cushy', 'Dana', 'Freytag', 'IranSancs', 'NormalWH', 'PulbicSans', 'Tanha', 'Vazir']}
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