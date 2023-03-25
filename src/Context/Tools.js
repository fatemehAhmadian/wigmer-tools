import React from "react";

const ToolsContext = React.createContext({
    text: String,
    setText: () => { },
    goul: Number,
    setGoul: () => { },
    current: Number,
    setCurrent: () => { },
    dispatch : () => {},
    state : {}
})

export default ToolsContext