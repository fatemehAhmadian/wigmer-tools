
import Url from "./results-components/Url";

import './../../styles/tools-components/results.scss'
import ResultDonation from "./results-components/ResultDonation";


export default function Result() {
    return (
        <>

            <div className="result">
                <Url url='https://google.com' />
                <ResultDonation />
            </div>


        </>
    )
}