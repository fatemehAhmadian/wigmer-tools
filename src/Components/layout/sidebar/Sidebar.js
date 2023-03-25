import './../../../styles/layout/sidebar.scss'
import { Link } from 'react-router-dom'
import Subscriptions from './Subscriptions'

function Sidebar() {

    let openMenu = () => {
        let sidebar = document.querySelector('#sidebar-box')
        let menuBtn = document.querySelector('#menu-btn')
        let logoTitle = document.querySelector('#logo-title')

        sidebar.classList.add('open')
        menuBtn.classList.add('hidden-btn')
        logoTitle.classList.add('show')
    }

    window.addEventListener("resize", (event) => {
        let sidebar = document.querySelector('#sidebar-box')
        let menuBtn = document.querySelector('#menu-btn')

        if (window.innerWidth > 990) {
            sidebar.classList.remove('open')
            menuBtn.classList.remove('hidden-btn')

        }
    });

    return (
        <>

                <div className="sidebar-container">
                <div id="menu-btn" onClick={openMenu}>
                    <svg width="36" height="20" viewBox="0 0 36 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M32.5949 0H3.30357C1.482 0 0 1.3415 0 2.99255C0 4.64151 1.482 5.98307 3.30357 5.98307H32.5949C34.4164 5.98307 35.8984 4.64151 35.8984 2.99255C35.8984 1.3415 34.4164 0 32.5949 0Z" fill="white"></path>
                        <path d="M32.5949 10.7695H3.30357C1.482 10.7695 0 12.111 0 13.7621C0 15.411 1.482 16.7526 3.30357 16.7526H32.5949C34.4164 16.7526 35.8984 15.411 35.8984 13.7621C35.8984 12.111 34.4164 10.7695 32.5949 10.7695V10.7695Z" fill="white"></path>
                        <path d="M32.5949 21.5392H3.30357C1.482 21.5392 0 22.8808 0 24.5317C0 26.1807 1.482 27.5223 3.30357 27.5223H32.5949C34.4164 27.5223 35.8984 26.1807 35.8984 24.5317C35.8984 22.8808 34.4164 21.5392 32.5949 21.5392Z" fill="white"></path>
                    </svg>
                </div>
                    <div id="sidebar-box">
                        <div className="sidebar">
                            <div className="sidebar-content">
                                <div className="logo">
                                    <svg width="122" height="60" viewBox="0 0 66 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M53.5457 3.74194C59.014 5.55991 63.2664 10.612 64.1289 16.3159C64.1299 16.3221 64.1321 16.3282 64.1355 16.3336C64.1389 16.339 64.1433 16.3436 64.1485 16.3473C65.5398 25.3573 65.5019 34.7468 64.0399 43.5055C64.0343 43.5088 64.0294 43.5133 64.0258 43.5188C64.0222 43.5242 64.0199 43.5304 64.019 43.5369C63.2101 48.7879 59.4852 53.5141 54.53 55.5781C54.5183 55.5833 54.5089 55.5926 54.5038 55.6043C40.7912 61.4626 24.4099 61.4652 10.6645 55.6122C10.6634 55.6045 10.6603 55.5974 10.6554 55.5914C10.6506 55.5854 10.6443 55.5808 10.6371 55.5781C5.68183 53.5141 1.9569 48.7879 1.14805 43.5369C1.14702 43.5301 1.14449 43.5237 1.14064 43.518C1.13679 43.5123 1.13171 43.5076 1.12579 43.5042C-0.337478 34.7599 -0.375431 25.3717 1.01847 16.3473C1.0237 16.3436 1.02813 16.339 1.0315 16.3336C1.03488 16.3282 1.03712 16.3221 1.0381 16.3159C1.90062 10.612 6.15301 5.55991 11.6213 3.74194C26.1493 -1.24731 39.0059 -1.24731 53.5405 3.74194H53.5457ZM32.5796 5.50624C26.0227 5.49348 19.5088 6.56549 13.3018 8.67884C9.63711 9.89082 6.78386 13.2807 6.18965 17.1169C6.18862 17.1189 6.18808 17.1211 6.18808 17.1234C6.18808 17.1257 6.18862 17.1279 6.18965 17.13C4.86675 25.5964 4.89856 34.2193 6.28389 42.6757V42.6822C6.85061 46.203 9.35179 49.3808 12.6579 50.7747C18.8212 53.4081 25.7108 54.8007 32.5835 54.8007C39.4562 54.8007 46.3458 53.4081 52.5091 50.7747C55.8152 49.3808 58.3164 46.203 58.8831 42.6822C60.2657 34.2229 60.2975 25.5979 58.9774 17.1286C58.9784 17.1266 58.9789 17.1244 58.9789 17.1221C58.9789 17.1198 58.9784 17.1176 58.9774 17.1156C58.3831 13.2794 55.526 9.88951 51.8652 8.67753C45.6582 6.56417 39.1443 5.49217 32.5874 5.50493" fill="white"></path>
                                        <path d="M18.1547 34.4026C18.0513 37.6747 15.5815 39.1248 13.3304 39.0699C11.0792 39.0149 8.65915 37.4705 8.69972 34.1866C8.92877 31.1069 11.286 29.7288 13.4259 29.7288H13.5463C15.7085 29.7811 18.0736 31.2653 18.1547 34.4013" fill="white"></path>
                                        <path d="M42.1695 39.9011C42.1727 39.9105 42.1789 39.9186 42.1872 39.9241C42.1955 39.9295 42.2054 39.932 42.2153 39.9312H42.2886C44.5136 39.9312 45.6981 41.545 46.0358 42.9415C46.3734 44.3381 46.0528 46.3576 44.0123 47.3654C44.0046 47.3696 43.9979 47.3754 43.9927 47.3824C36.9551 50.966 28.2161 50.9607 21.1759 47.3667C19.1472 46.3969 18.82 44.393 19.159 42.9729C19.5202 41.4495 20.8068 39.9325 22.8734 39.9325H22.9598C22.9697 39.9335 22.9797 39.9308 22.9879 39.9251C22.996 39.9193 23.0018 39.9108 23.0043 39.9011H23.0946C24.5331 39.8649 25.9013 39.2714 26.9107 38.2459C27.9201 37.2204 28.4919 35.8429 28.5053 34.404C28.5433 33.0245 29.0825 32.0194 29.8508 31.3597C30.6142 30.7227 31.5789 30.3772 32.5732 30.3846C34.4801 30.3846 36.5664 31.6424 36.641 34.4067C36.6418 34.4192 36.6474 34.4309 36.6567 34.4394C36.6579 35.1569 36.8027 35.8668 37.0826 36.5274C37.3624 37.1881 37.7717 37.786 38.2862 38.286C39.2898 39.3031 40.6531 39.8846 42.0818 39.9051H42.1734" fill="white"></path>
                                        <path d="M46.2358 18.3695V24.8024C46.2266 24.8114 46.221 24.8235 46.2201 24.8364C46.1835 26.2172 45.6442 27.2237 44.8747 27.8834C44.1112 28.5204 43.1466 28.8659 42.1523 28.8584C40.2453 28.8584 38.159 27.6007 38.0844 24.8364C38.0842 24.8299 38.0826 24.8234 38.0796 24.8175C38.0767 24.8117 38.0725 24.8065 38.0674 24.8024C37.9457 21.0932 35.1383 19.4048 32.5703 19.4048C29.9959 19.4048 27.178 21.1062 27.0733 24.8364C27.0353 26.2159 26.4961 27.2211 25.7278 27.8808C24.9644 28.5178 23.9997 28.8633 23.0054 28.8558C21.0985 28.8558 19.0122 27.598 18.9376 24.8338C18.9367 24.8209 18.9311 24.8088 18.9219 24.7998V18.3695C18.9268 18.365 18.9308 18.3596 18.9335 18.3535C18.9362 18.3474 18.9376 18.3408 18.9376 18.3341C18.8839 15.0974 21.3314 11.9994 24.508 11.2822C24.5142 11.2811 24.5201 11.2785 24.5251 11.2746C24.5301 11.2707 24.5341 11.2657 24.5368 11.2599C29.8261 10.0165 35.3316 10.0165 40.621 11.2599C40.6274 11.2693 40.6373 11.2759 40.6484 11.2782C43.825 11.9955 46.2764 15.0935 46.2188 18.3302C46.2188 18.3369 46.2202 18.3435 46.2229 18.3496C46.2256 18.3557 46.2296 18.3611 46.2345 18.3656" fill="white"></path>
                                        <path d="M56.4594 34.4026C56.356 37.6747 53.8862 39.1248 51.635 39.0699C49.3839 39.0149 46.9638 37.4705 47.0044 34.1866C47.2335 31.1069 49.5907 29.7288 51.7306 29.7288H51.851C54.0132 29.7811 56.3782 31.2653 56.4594 34.4013" fill="white"></path>
                                    </svg>
                                    <svg id='logo-title' width="130" height="50" viewBox="0 0 766 184" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M23.4375 147.156C13.0729 147.156 7.89062 141.974 7.89062 131.609V37.8594C7.83854 27.3385 13.0469 22.1302 23.5156 22.2344C33.8802 22.3385 39.0885 27.5469 39.1406 37.8594V92.7812C49.5573 82.3646 56.0938 75.8021 58.75 73.0938C61.4583 70.3854 65.3125 69.0312 70.3125 69.0312C75.4688 69.0312 79.3229 70.3594 81.875 73.0156C84.4792 75.6198 91.0156 82.3125 101.484 93.0938V37.8594C101.641 27.3906 106.875 22.1302 117.188 22.0781C127.708 22.2344 132.969 27.4948 132.969 37.8594L132.891 131.609C132.839 141.922 127.63 147.104 117.266 147.156C112.109 147.156 108.229 145.828 105.625 143.172C103.021 140.464 91.3021 128.693 70.4688 107.859C49.375 128.849 37.5781 140.62 35.0781 143.172C32.5781 145.724 28.6979 147.052 23.4375 147.156ZM170.541 22.0781C180.957 22.1823 186.244 27.3385 186.4 37.5469V131.453C186.296 141.87 181.061 147.156 170.697 147.312C160.28 147.104 155.072 141.844 155.072 131.531V37.625C155.02 27.3125 160.176 22.1302 170.541 22.0781ZM270.534 22.0781L301.941 22C312.149 22.0521 317.305 27.3125 317.409 37.7812C317.305 48.0938 312.175 53.1719 302.019 53.0156L270.691 53.1719C265.378 53.1719 260.222 54.526 255.222 57.2344C250.274 59.8906 246.394 63.7448 243.581 68.7969C240.769 73.7969 239.363 79.0312 239.363 84.5C239.363 89.9167 240.743 95.099 243.503 100.047C246.264 104.995 250.118 108.849 255.066 111.609C260.066 114.37 265.274 115.75 270.691 115.75C276.107 115.75 281.576 114.474 287.097 111.922C292.67 109.318 296.706 105.307 299.206 99.8906H286.159C275.639 99.9427 270.352 94.8385 270.3 84.5781C270.3 74.1615 275.508 68.875 285.925 68.7188L317.331 68.875C327.852 69.0833 333.139 74.3438 333.191 84.6562C333.191 95.4896 330.43 105.88 324.909 115.828C319.441 125.724 311.732 133.432 301.784 138.953C291.836 144.422 281.42 147.156 270.534 147.156C259.753 147.156 249.389 144.422 239.441 138.953C229.493 133.432 221.758 125.724 216.238 115.828C210.769 105.88 208.034 95.4896 208.034 84.6562C208.034 73.7708 210.821 63.3281 216.394 53.3281C221.967 43.276 229.727 35.5677 239.675 30.2031C249.675 24.7865 259.961 22.0781 270.534 22.0781ZM370.919 22.0781C376.179 22.1823 380.059 23.5104 382.559 26.0625C385.059 28.6146 396.856 40.3854 417.95 61.375C438.783 40.5417 450.502 28.7969 453.106 26.1406C455.71 23.4323 459.591 22.0781 464.747 22.0781C475.111 22.1302 480.32 27.3125 480.372 37.625L480.45 131.375C480.45 141.74 475.19 147 464.669 147.156C454.356 147.104 449.122 141.844 448.966 131.375V76.1406C438.497 86.9219 431.96 93.6406 429.356 96.2969C426.804 98.901 422.95 100.203 417.794 100.203C412.794 100.203 408.94 98.849 406.231 96.1406C403.575 93.4323 397.039 86.8698 386.622 76.4531V131.375C386.57 141.688 381.361 146.896 370.997 147C360.528 147.052 355.32 141.844 355.372 131.375V37.625C355.372 27.2604 360.554 22.0781 370.919 22.0781Z" fill="white"></path>
                                        <path d="M663.516 22.0781H718.359C728.568 22.0781 737.604 26.0365 745.469 33.9531C753.333 41.8177 757.24 50.8281 757.188 60.9844C757.188 71.7656 755.208 80.8802 751.25 88.3281C747.344 95.724 741.432 99.5521 733.516 99.8125L752.812 119.344C755.885 122.417 757.422 126.453 757.422 131.453C757.266 141.87 752.057 147.052 741.797 147C736.484 147.156 731.25 144.604 726.094 139.344L694.844 100.594C689.583 95.0208 686.927 89.6562 686.875 84.5C686.875 73.9792 692.135 68.7448 702.656 68.7969L713.75 68.7188C721.979 68.8229 726.042 66.2969 725.938 61.1406C725.938 55.9844 721.849 53.4062 713.672 53.4062H702.344H679.219V131.375C679.271 141.792 674.036 147 663.516 147C653.047 147.052 647.839 141.896 647.891 131.531V37.5469C647.943 27.3385 653.151 22.1823 663.516 22.0781Z" fill="white"></path>
                                        <path d="M564.234 146.922L595.641 147C605.849 146.948 611.005 141.688 611.109 131.219C611.005 120.906 605.875 115.828 595.719 115.984L564.391 115.828C559.078 115.828 553.922 114.474 548.922 111.766C543.974 109.109 540.094 105.255 537.281 100.203C534.469 95.2031 533.062 89.9688 533.062 84.5C533.062 79.0833 534.443 73.9011 537.203 68.9531C539.964 64.0052 543.818 60.1511 548.766 57.3906C553.766 54.6302 558.974 53.25 564.391 53.25C569.807 53.25 575.276 54.5261 580.797 57.0781C586.37 59.6823 590.406 63.6927 592.906 69.1094H579.859C569.339 69.0573 564.052 74.1615 564 84.4219C564 94.8386 569.208 100.125 579.625 100.281L611.031 100.125C621.552 99.9167 626.839 94.6563 626.891 84.3438C626.891 73.5104 624.13 63.1198 618.609 53.1719C613.141 43.2761 605.432 35.5677 595.484 30.0469C585.536 24.5781 575.12 21.8438 564.234 21.8438C553.453 21.8438 543.089 24.5781 533.141 30.0469C523.193 35.5677 515.458 43.2761 509.937 53.1719C504.469 63.1198 501.734 73.5104 501.734 84.3438C501.734 95.2292 504.521 105.672 510.094 115.672C515.667 125.724 523.427 133.432 533.375 138.797C543.375 144.214 553.661 146.922 564.234 146.922Z" fill="white"></path>
                                    </svg>
                                </div>
                                <ul className='sidebar-menu'>
                                    <li className='sidebar-item'>
                                        <i className="fa fa-th-large" aria-hidden="true"></i>
                                        <Link>Dashboard</Link>
                                    </li>
                                    <li className='sidebar-item'>
                                        <i className="fas fa-file-invoice-dollar" dir=""></i>
                                        <Link>revenue history</Link>
                                    </li>
                                    <li className='sidebar-item'>
                                        <i className="fas fa-tools" dir=""></i>
                                        <Link to='/tools' >tools</Link>
                                    </li>
                                    <li className='sidebar-item'>
                                        <i className="fa fa-comment-dots" dir=""></i>
                                        <Link to='/chatbot'>chat bot</Link>
                                    </li>
                                    <li className='sidebar-item'>
                                        <i className="fa fa-award" dir=""></i>
                                        <Link>challenge</Link>
                                    </li>
                                    <li className='sidebar-item active'>
                                        <i className="fas fa-donate" dir=""></i>
                                        <Link>donation settings</Link>
                                    </li>
                                    <li className='sidebar-item'>
                                        <i className="fa fa-credit-card" aria-hidden="true" dir=""></i>
                                        <Link>withdraw</Link>
                                    </li>
                                    <li className='sidebar-item'>
                                        <i className="fas fa-user-plus" dir=""></i>
                                        <Link>invitaion</Link>
                                    </li>
                                    <li className='sidebar-item'>
                                        <i className="fa fa-comments" dir=""></i>
                                        <Link>supports</Link>
                                    </li>
                                    <li className='sidebar-item'>
                                        <i className="fa fa-cog" dir=""></i>
                                        <Link>account settings</Link>
                                    </li>
                                    <li className='sidebar-item'>
                                        <i className="fa fa-diamond"></i>
                                        <Link>subscriptions</Link>
                                    </li>
                                </ul>
                            </div>
                            <Subscriptions />
                        </div>
                    </div>
                </div>

        </>
    )
}

export default Sidebar