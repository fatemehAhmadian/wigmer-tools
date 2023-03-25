import './../../styles/donationGoal.scss'

function DonationGoal() {



    return (
        <>
            <button className="donationGoal">

                <svg className="icon" dir="" width="25" height="15" viewBox="0 0 71 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="30" cy="37" r="25" stroke="white" strokeWidth="10"></circle>
                    <circle cx="30.5" cy="36.5" r="11.5" stroke="white" strokeWidth="8"></circle>
                    <circle cx="30.5" cy="36.5" r="4.5" fill="white"></circle>
                    <line x1="1.5" y1="-1.5" x2="37.4315" y2="-1.5" transform="matrix(0.747234 -0.664561 0.747234 0.664561 31 38)" stroke="white" strokeWidth="3" strokeLinecap="round"></line>
                    <path d="M56.1304 7.99419L57.3247 12.8242C57.4291 13.2466 57.7947 13.553 58.2289 13.5819L64.0457 13.9697C64.3343 13.989 64.6171 13.8823 64.8211 13.6772L69.3034 9.17196C69.9309 8.54126 69.4842 7.46667 68.5945 7.46667H64.875C64.374 7.46667 63.9504 7.09596 63.8838 6.59941L63.2797 2.08827C63.1678 1.25268 62.1356 0.922033 61.559 1.53707L56.3717 7.07023C56.1399 7.31745 56.0491 7.66523 56.1304 7.99419Z" fill="white"></path>
                </svg>

                <p>Donation Goal</p>
            </button>
        </>
    )
}


export default DonationGoal