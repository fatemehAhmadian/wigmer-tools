import './../styles/pages/tools.scss'

import { useEffect, useReducer, useState } from 'react';

// import components
import DonationGoal from "../Components/tools-components/DonationGoal";
import Variables from "../Components/tools-components/Variables";
import Result from "../Components/tools-components/Results";
import Sidebar from '../Components/layout/sidebar/Sidebar';

// import Context
import ToolsContext from '../Context/Tools';

// import Reducers
import ToolsReducer from '../Reducers/toolsReducer';

export default function Tools() {
    // const [text, setText] = useState('prograss target')
    // const [goul, setGoul] = useState(500)
    // const [current, setCurrent] = useState(20)


    const [state, dispatch] = useReducer(ToolsReducer, {
        // مقدار های اولیه را باید بگیریم و در این قسمت قرار دهیم = استایل اولیه
        target: {
            text: 'target',
            goal: 500,
            current: 50,

            backgroundColor: '#101012',
            borderStyle: 'solid',
            borderWidth: 5,
            borderColor: '#3e3e3e',
            borderRadius: 10,

            showTitle: true,
            showTitleShadow: false,
            titleFontFamily: 'CoCo',
            titleFontStyle: 'Lighter',
            titleFontSize: 30,
            titleColor: '#ffffff',

            showPrograssbar: true,
            prograssBackgroundColor: '#510bc1',
            barColor: '#ffffff',
            prograssBorderStyle: 'solid',
            prograssBorderWidth : 2,
            prograssBorderColor : '#ffffff',
            prograssBorderRadius : 15, 

            showTitleDetails : true,
            showTitleDetailsShadow : false,
            detailsColor : '#ffffff',
            detailsFontFamily : 'IranSans',
            detailsFontStyle : 'Bolder',
            detailsFontSize : 20
        }
    })

    console.log(state)


    // useEffect(()=>{
    //     setTarget({
    //         text,
    //         goul,
    //         current
    //         // backgroundColor : '#111114',
    //         // textDirection : 'ltr',
    //         // borderStyle : 'dashed',
    //     })

    // },[])

    return (
        <div className="tools">
            <Sidebar />

            <ToolsContext.Provider value={{
                // text,
                // setText,
                // goul,
                // setGoul,
                // current,
                // setCurrent,
                dispatch,
                state
            }}>

                <div className="content">
                    <div className="donationBtn">
                        <DonationGoal />
                    </div>
                    <div className="workspace">
                        <Variables />
                        <Result />
                    </div>
                </div>

            </ToolsContext.Provider>


        </div>
    )
}