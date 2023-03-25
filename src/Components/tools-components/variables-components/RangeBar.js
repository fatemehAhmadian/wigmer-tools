import { useContext, useEffect, useState } from "react"
import propTypes from 'prop-types'

import './../../../styles/tools-components/variables-components/rangeBar.scss'

import ToolsContext from "../../../Context/Tools"


export default function RangeBar({ rangeId, title, max, type, value }) {
    // const [range, setRange] = useState(Math.round(max / 2))
    const [range, setRange] = useState(value)

    const toolsContext = useContext(ToolsContext)


    // ***** عمیلیات کنترلی 
    // بعدا باید ولیو رو هم از پراپس ها بگیرم و در این حالت باید چک بشه که مقدار ولیو از ماکسیموم کمتر باشه و از 0 بیشتر باشه
    // *****


    // it run one time when the component create 
    // i wrote this because i want the prograss showed in the beggining too before change the input
    useEffect(() => {
        const rangeSlider = document.getElementById(rangeId);
        let val = rangeSlider.value
        let zeroToOne = val / rangeSlider.max
        let valPercent = zeroToOne * 100
        setRange(val)

        rangeSlider.style.background = `linear-gradient(to right, #6710f1 ${valPercent}%, #d5d5d5 ${valPercent}%)`;

        // set value in the right position 
        rangeSlider.nextSibling.children[0].children[0].style.left = `${valPercent}%`

    }, [])

    let progress = (e) => {
        const rangeSlider = e.target

        // مقدار را از ولیو برمیداریم و آن را تقسیم بر بیشترین مقدار ورودی میکنیم
        // تا مقدار ورودی بین 0 و 1 بدست بیاید و با ضرب آن در صد درصد ورودی بدست می آید
        let val = rangeSlider.value
        let zeroToOne = (val / rangeSlider.max)
        let valPercent = zeroToOne * 100

        setRange(val)

        // در این قسمت با قرار دادن آن درصد برای بک گراند مقدار پروگرس بار را مشخص میکنیم چه کجا قرار دارد
        //  این عملیات برای این است که کاستوم کردم اینپوت رنج در کروم قسمت پروگرس بار آن کار نمیکند
        rangeSlider.style.background = `linear-gradient(to right, #6710f1 ${valPercent}%, #d5d5d5 ${valPercent}%)`;

        if (valPercent < 20 || valPercent > 80) {
            // console.log('hide')
        }

        // move value
        e.target.nextSibling.children[0].children[0].style.left = `${valPercent}%`
    
        console.log(val)
        toolsContext.dispatch({type, payload : {value : val}})
    
    }

    return (
        <>
            <div className="rangeBar">
                <div className="title">{title}</div>
                <div className="container">
                    {/* <span className="min">0</span> */}
                    <input type="range" id={rangeId} min="0" max={max} value={range} onInput={progress} />
                    <div id="h4-container"><div id="h4-subcontainer"><h4>{range}<span></span></h4></div></div>
                    {/* <span className="max">{max}</span> */}
                </div>
            </div>
        </>
    )
}

RangeBar.propTypes = {
    rangeId: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    max: propTypes.number.isRequired,
    // value: propTypes.number.isRequired
}
