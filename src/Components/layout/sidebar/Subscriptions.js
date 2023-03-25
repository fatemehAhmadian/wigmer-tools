
import '../../../styles/subscriptions.scss'

export default function subscriptions() {

    return (
        <>
            <div className="subscriptions">
                <h2 className='btn'>Subscriptions</h2>
                <h1>Your have an active subscription</h1>
                <h1 className='left-day'>Days Left</h1>
                <div className="warning-box">
                    <p>
                        <span id='day-left-num'>3</span>
                        days left until the end of the subscription
                    </p>
                </div>
            </div>
        </>
    )
}