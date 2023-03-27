

import './../../../../styles/tools-components/variables-components/sections/ManageSection.scss'

import TextInput from '../TextInput'
// import { useContext } from 'react'

import DonationContext from '../../../../Context/donation'
import { useContext } from 'react'

export default function ManageSection() {

    const donationContext = useContext(DonationContext)
    const target = donationContext.state.target

    console.log('manage target : ', target)

    return (
        <div className="manage">
            <div className="title">
                <h1>MANAGE</h1>
            </div>
            
            <div className="container">
                <TextInput
                    inputId='text'
                    title='text'
                    type='update-text'
                    value={target.text}
                />
                <TextInput
                    inputId='goal'
                    title='goal amount'
                    type='update-goal'
                    value={target.goal}
                />
                <TextInput
                    inputId='current'
                    title='current amount'
                    type='update-current'
                    value={target.current}
                />
            </div>

        </div>
    )
}