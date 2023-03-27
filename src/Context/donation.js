import React from "react";

const DonationContext = React.createContext({
    text: String,
    setText: () => { },
    goul: Number,
    setGoul: () => { },
    current: Number,
    setCurrent: () => { },
    dispatch : () => {},
    state : {}
})

export default DonationContext