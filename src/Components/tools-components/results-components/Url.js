import './../../../styles/tools-components/result-components/url.scss'
import imgAddress from './../../../assets/pic/copy.png'
function Url({ url }) {



    return (
        <>
            <div className="url-container">
                <h1>Donation Goal URL:</h1>
                <div className="input-container">
                    {/* <input type="text" value={url} /> */}
                    <p>{url}</p>
                    <span>
                        <img src={imgAddress} alt="" />
                    </span>
                </div>
            </div>
        </>
    )
}

export default Url