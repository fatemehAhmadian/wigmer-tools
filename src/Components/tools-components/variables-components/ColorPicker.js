import { useContext, useState } from "react"
import propTypes from 'prop-types'

import './../../../styles/tools-components/variables-components/colorPicker.scss'

import ToolsContext from "../../../Context/Tools"

function ColorPicker({ inputId, title, type, value}) {
    // const [color, setColor] = useState("#202020")
    const [color, setColor] = useState(value)
    const [id, setId] = useState(inputId)

    const toolsContext = useContext(ToolsContext)

    let inputHandler = (e) => {

        setId(e.target.id)
        setColor(e.target.value)

        e.target.innerHTML = e.target.value

        toolsContext.dispatch({type, payload : {color : e.target.value}})
    }
    return (
        <>
            <div className="colorPicker">
                <div className="title">{title}</div>
                <div className="colorPicker-box"  >
                    <label htmlFor={id} id="text-color">{color}</label>
                    <input type="color" id={id} name="color" value={color} onChange={inputHandler}/>
                </div>
            </div>

        </>

    )
}

ColorPicker.propTypes = {
    inputId: propTypes.string.isRequired
}
export default ColorPicker