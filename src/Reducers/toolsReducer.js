
function ToolsReducer(state, action) {

    switch (action.type) {
        case 'update-text':
            console.log('update text')
            return {
                target: {
                    ...state.target,
                    text: action.payload.newInput
                }
            }

        case 'update-goal':
            console.log('update goal')
            return {
                target: {
                    ...state.target,
                    goal: action.payload.newInput
                }
            }
        case 'update-current':
            console.log('update current')
            return {
                target: {
                    ...state.target,
                    current: action.payload.newInput
                }
            }
        case 'update-background':
            console.log('update background')
            return {
                target: {
                    ...state.target,
                    backgroundColor: action.payload.color
                }
            }
        case 'update-borderColor':
            console.log('update borderColor')
            return {
                target: {
                    ...state.target,
                    borderColor: action.payload.color
                }
            }
        case 'update-borderStyle':
            console.log('update borderStyle')
            return {
                target: {
                    ...state.target,
                    borderStyle: action.payload.style
                }
            }
        case 'update-borderWidth':
            console.log('update borderWidth')
            return {
                target: {
                    ...state.target,
                    borderWidth: action.payload.value
                }
            }
        case 'update-borderRadius':
            console.log('update borderRadius')
            return {
                target: {
                    ...state.target,
                    borderRadius: action.payload.value
                }
            }

        // TITLE TARGET 
        case 'update-showTitle':
            console.log('update showTitle')
            return {
                target: {
                    ...state.target,
                    showTitle: action.payload.check
                }
            }
        case 'update-showTitleShadow':
            console.log('update showTitleShadow')
            return {
                target: {
                    ...state.target,
                    showTitleShadow: action.payload.check
                }
            }
        case 'update-titleFamily':
            console.log('update titleFontFamily')
            console.log(state.target.titleFontFamily)
            return {
                target: {
                    ...state.target,
                    titleFontFamily: action.payload.style
                }
            }
        case 'update-titleStyle':
            console.log('update titleFontStyle')
            return {
                target: {
                    ...state.target,
                    titleFontStyle: action.payload.style
                }
            }
        case 'update-titleSize':
            console.log('update titleFontSize')
            return {
                target: {
                    ...state.target,
                    titleFontSize: action.payload.value
                }
            }
        case 'update-titleColor':
            console.log('update titleColor')
            return {
                target: {
                    ...state.target,
                    titleColor: action.payload.color
                }
            }

        // PROGRASSBAR
        case 'update-showPrograssBar':
            console.log('update showPrograssBar')
            return {
                target: {
                    ...state.target,
                    showPrograssbar: action.payload.check
                }
            }
        case 'update-prograssColor':
            console.log('update showPrograssBar')
            return {
                target: {
                    ...state.target,
                    prograssBackgroundColor: action.payload.color
                }
            }
        case 'update-barColor':
            console.log('update BarColor')
            return {
                target: {
                    ...state.target,
                    barColor: action.payload.color
                }
            }
        case 'update-prograssBorderStyle':
            console.log('update prograssBorderStyle')
            return {
                target: {
                    ...state.target,
                    prograssBorderStyle: action.payload.style
                }
            }
        case 'update-prograssBorderWidth':
            console.log('update prograssBorderWidth')
            return {
                target: {
                    ...state.target,
                    prograssBorderWidth: action.payload.value
                }
            }
        case 'update-prograssBorderColor':
            console.log('update prograssBorderColor')
            return {
                target: {
                    ...state.target,
                    prograssBorderColor: action.payload.color
                }
            }
        case 'update-prograssBorderRadius':
            console.log('update prograssBorderRadius')
            return {
                target: {
                    ...state.target,
                    prograssBorderRadius: action.payload.value
                }
            }

        // TITLE DETAILS
        case 'update-showTitleDetails':
            console.log('update showTitleDetails')
            return {
                target: {
                    ...state.target,
                    showTitleDetails: action.payload.check
                }
            }
        case 'update-showTitleDetailsShadow':
            console.log('update showTitleDetailsShadow')
            return {
                target: {
                    ...state.target,
                    showTitleDetailsShadow: action.payload.check
                }
            }
        case 'update-detailsColor':
            console.log('update detailsColor')
            return {
                target: {
                    ...state.target,
                    detailsColor: action.payload.color
                }
            }
        case 'update-detailsFamily':
            console.log('update detailsFamily')
            return {
                target: {
                    ...state.target,
                    detailsFontFamily: action.payload.style
                }
            }
        case 'update-detailsStyle':
            console.log('update detailsStyle')
            return {
                target: {
                    ...state.target,
                    detailsFontStyle: action.payload.style
                }
            }
        case 'update-detailsSize':
            console.log('update detailsSize')
            return {
                target: {
                    ...state.target,
                    detailsFontSize: action.payload.value
                }
            }
        case 'update-prograssBorderRadius':
            console.log('update prograssBorderRadius')
            return {
                target: {
                    ...state.target,
                    prograssBorderRadius: action.payload.value
                }
            }


        default:
            return state
    }

}

export default ToolsReducer