
import { useContext, useState } from 'react'
import propTypes from 'prop-types'
import './../../../styles/tools-components/variables-components/toggleBtn.scss'

import ToolsContext from '../../../Context/Tools'

function ToggleBtn({ id, title, text, type, value }) {

    const toolsContext = useContext(ToolsContext)

    const [toggle, setToggle] = useState(value)
    let inputHandler = (e) => {
        setToggle(e.target.checked)
        toolsContext.dispatch({ type, payload: { check: e.target.checked } })
    }

    return (
        <>
            <div className="toggle">
                <div className="title">{title}</div>
                <div className="container">
                    <h4>{text}</h4>
                    <input className="tgl tgl-ios" id={id} type="checkbox" onChange={inputHandler} checked={toggle}/>
                    <label className="tgl-btn" htmlFor={id}></label>
                </div>
            </div>

        </>

    )

}

ToggleBtn.propTypes = {
    text: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    id: propTypes.string.isRequired
}
export default ToggleBtn