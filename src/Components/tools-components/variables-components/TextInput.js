import propTypes from 'prop-types'

import './../../../styles/tools-components/variables-components/textInput.scss'


import { useContext, useState } from 'react'

import ToolsContext from '../../../Context/Tools'

export default function TextInput({ inputId, title, value, type }) {

    const [text, setText] = useState(value)
    const toolsContext = useContext(ToolsContext)

    let inputHandler = (e) => {
        setText(e.target.value)
        toolsContext.dispatch({ type, payload: { newInput: e.target.value } })
    }

    return (
        <div className="textInput">
            <div className="title">{title}</div>
            <div className="textInput-box"  >
                <input type="text" id={inputId} onChange={inputHandler} value={text} />
            </div>
        </div >
    )
}


TextInput.propTypes = {
    inputId: propTypes.string.isRequired,
    title: propTypes.string.isRequired
}