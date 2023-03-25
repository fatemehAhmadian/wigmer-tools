import './../../../styles/tools-components/variables-components/directionBtn.scss'

export default function DirectionBtn() {

    let rtlHandler = () => {
        document.querySelector('#rtl').classList.add('active')
        document.querySelector('#ltr').classList.remove('active')
    }
    let ltrHandler = () => {
        document.querySelector('#ltr').classList.add('active')
        document.querySelector('#rtl').classList.remove('active')

    }

    return (
        <div className="direction">
            <div className="title">text direction</div>
            <div className="container">
                <div id="ltr" className='active' onClick={ltrHandler} >
                    <svg width="20" height="20" viewBox="0 0 106 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="106" height="15" rx="7.5"></rect>
                        <rect y="29" width="62" height="15" rx="7.5"></rect>
                        <rect y="58" width="79" height="15" rx="7.5"></rect>
                    </svg>
                </div>
                <div id="rtl" onClick={rtlHandler} >
                    <svg width="22" height="22" viewBox="0 0 106 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="106" height="15" rx="7.5"></rect>
                        <rect x="44" y="29" width="62" height="15" rx="7.5"></rect>
                        <rect x="27" y="58" width="79" height="15" rx="7.5"></rect>
                    </svg>
                </div>
            </div>
        </div>
    )
}