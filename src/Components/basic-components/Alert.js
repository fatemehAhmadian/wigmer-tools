import './../../styles/basic-components/alert.scss'
import checkImg from './../../assets/pic/done.png'
import closeImg from './../../assets/pic/close.png'

import { useEffect, useState } from 'react'
export default function Alert({ message, setSave }) {

    const [time, setTime] = useState()
    
    useEffect(() => {
        // get time
        const date = new Date
        const [hour, minutes, seconds] = [
            date.getHours(),
            date.getMinutes(),
            date.getSeconds()
        ]
        const clock = `${hour}:${minutes}:${seconds}`
        setTime(clock)


        // -------

        setTimeout(() => {
            setSave(false)
            const alert = document.querySelector('.Alert')
            alert.style.display = 'none'
        }, 3000);

        // setTimeout(() => {
        //     const alert = document.querySelector('.Alert')
        //     alert.style.display = 'flex'
        // }, 7000);
    }, [])

    return (
        <div className="Alert">
            <div id="alert-content">
                <div id="message-container">
                    <div id="text">
                        <p id='message'>{message}</p>
                        <p id='time'>{time}</p>
                    </div>
                    <div className="done">
                        <img src={checkImg} alt="" />

                    </div>
                </div>
                <div id="close">
                    <img src={closeImg} alt="" />
                </div>
            </div>

        </div>
    )
}