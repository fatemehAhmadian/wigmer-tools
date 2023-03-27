import { useContext, useState } from "react"
import propTypes from 'prop-types'

import './../../../styles/tools-components/variables-components/dropDown.scss'

import ToolsContext from "../../../Context/donation"

function DropDown({ title, items, type, value }) {
    const [dropDownValue, setDropDownValue] = useState(value)

    const toolsContext = useContext(ToolsContext)

    let openDropDown = (e) => {
        // write like this (with children and parent not by id and className)
        // because i want every drop down work seperatly

        // show = from show and hide menu of dorpdown
        // rotate = for rotate the icon of dropdown

        e.target.parentNode.children[1].classList.toggle('show')
        console.log('in dopdown : ', e.target.children[1])
        e.target.children[1].classList.toggle('rotate')

    }

    let openParent = (e) => {
        e.target.parentNode.parentNode.children[1].classList.toggle('show')
        e.target.parentNode.children[1].classList.toggle('rotate')
    }
    let menuHandler = (e) => {
        setDropDownValue(e.target.innerHTML)

        // access to wrapp from this position
        e.target.parentNode.parentNode.classList.remove('show')
        e.target.parentNode.parentNode.parentNode.children[0].children[1].classList.toggle('rotate')

        toolsContext.dispatch({ type, payload: { style: e.target.innerHTML } })
    }
    return (
        <>
            <div className="dropDown">
                <div className="title">{title}</div>
                <div className="dropDown-box" >
                    <div className="dropDown-btn" onClick={openDropDown}>
                        <p onClick={openParent}>{dropDownValue}</p>
                        <span className="fa fa-caret-down" onClick={openParent}></span>
                    </div>
                    <div className="wrapper">
                        <ul className="menu" onClick={menuHandler}>
                            {
                                items.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))
                            }
                        </ul>
                    </div>

                </div>
            </div>

        </>

    )
}
DropDown.propTypes = {
    title: propTypes.string.isRequired,
    items: propTypes.array.isRequired
}
export default DropDown