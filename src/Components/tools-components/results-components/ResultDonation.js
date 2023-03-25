import './../../../styles/tools-components/result-components/resultDonation.scss'
import redoImg from './../../../assets/pic/redo.png'
import { useContext, useEffect, useState } from 'react'
import Alert from '../../basic-components/Alert'

// import Context
import ToolsContext from '../../../Context/Tools'

export default function ResultDonation({ url }) {
    const [save, setSave] = useState(false)

    const toolsContext = useContext(ToolsContext)

    let saveHandler = (e) => {
        setSave(true)
    }

    let inputHandler = (e) => {
        const resultContent = document.querySelector('.result-content')
        resultContent.style.backgroundColor = e.target.value
    }

    const target = toolsContext.state.target

    useEffect(() => {
        let finalResult = document.querySelector('#final-result')
        // DONATION GOAL
        finalResult.style.backgroundColor = target.backgroundColor
        finalResult.style.borderColor = target.borderColor
        finalResult.style.borderStyle = target.borderStyle
        finalResult.style.borderWidth = `${target.borderWidth}px`
        finalResult.style.borderRadius = `${target.borderRadius}px`

        // TITLE TARGET
        let finalResultTitle = document.querySelector('#final-result-title')
        target.showTitle
            ? finalResultTitle.style.display = 'block'
            : finalResultTitle.style.display = 'none'
        target.showTitleShadow
            ? finalResultTitle.style.textShadow = '.2rem .2rem .3rem gray'
            : finalResultTitle.style.textShadow = 'none'
        finalResultTitle.style.fontFamily = target.titleFontFamily
        console.log(target.titleFontStyle)
        if (target.titleFontStyle === 'Lighter') finalResultTitle.style.fontWeight = '100'
        else finalResultTitle.style.fontWeight = '600'
        finalResultTitle.style.fontWeight = target.titleFontStyle
        finalResultTitle.style.fontSize = `${target.titleFontSize}px`
        finalResultTitle.style.color = target.titleColor

        // PROGRASSBAR
        let finalResultProgressbar = document.querySelector('#final-result-progressbar')
        target.showPrograssbar
            ? finalResultProgressbar.style.display = 'block'
            : finalResultProgressbar.style.display = 'none'
        finalResultProgressbar.style.backgroundColor = target.prograssBackgroundColor
        finalResultProgressbar.children[0].style.backgroundColor = target.barColor
        finalResultProgressbar.style.borderStyle = target.prograssBorderStyle
        finalResultProgressbar.style.borderWidth = `${target.prograssBorderWidth}px`
        finalResultProgressbar.style.borderColor = target.prograssBorderColor
        finalResultProgressbar.style.borderRadius = `${target.prograssBorderRadius}px`

        // TITLE DETAILS
        let goalAmount = document.querySelector('#goal-amount')
        console.log(target.showTitleDetails)
        target.showTitleDetails
            ? goalAmount.style.display = 'flex'
            : goalAmount.style.display = 'none'
        target.showTitleDetailsShadow
            ? goalAmount.style.textShadow = '.2rem .2rem .3rem gray'
            : goalAmount.style.textShadow = 'none'
        goalAmount.style.color = target.detailsColor
        goalAmount.style.fontFamily = target.detailsFontFamily
        if (target.detailsFontStyle === 'Lighter') goalAmount.style.fontWeight = '100'
        else goalAmount.style.fontWeight = '600'
        goalAmount.style.fontSize = `${target.detailsFontSize}px`

    }, [target])

    return (
        <>
            <div className="resultDonation">
                <div className="result-container">
                    <div className="result-content">
                        <div id="result-background">
                            <div className="title">
                                background color
                            </div>
                            <input type="color" name="color" onChange={inputHandler} />
                        </div>
                        <div id="final-result">
                            <div id="final-result-title">{target.text}</div>
                            <div id="final-result-propgressbar-container">
                                <div id="final-result-progressbar">
                                    <span id='final-result-current-bar'></span>
                                </div>
                                <p id='goal-amount'> <span id='current-amount'>{target.current}</span>/{target.goal}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="buttons">
                        <button id='save' onClick={saveHandler}>
                            Save Changes
                            {save ? <Alert message={'saved'} setSave={setSave} /> : null}
                        </button>
                        <button id='redo'><img src={redoImg} alt="" /></button>
                    </div>
                </div>
            </div>
        </>
    )
}
