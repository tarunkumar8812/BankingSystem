import React, { useState } from 'react'
import './flash.css'
const Flash = () => {

    const [menuOptions, setMenuOptions] = useState(false)
    return (
        <div className='flash-container'>
            <div className='menu' onClick={() => { setMenuOptions(!menuOptions) }}>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png' alt='menu'></img>



            </div>
            <div className='l'>what's new</div>
            <div className='r'>
                <span className='slider'>sdfasdfadfgfgfgfgfhfgh</span>
            </div>


            {menuOptions && <div className='menuOptions' >

                <div className='options'>Personal Banking</div>
                <div className='options'>Personal Loan</div>
                <div className='options'>Debit/Credit Cards</div>
                <div className='options'>Car Loan</div>
                <div className='options'>Home Loan</div>
            </div>}
        </div>
    )
}

export default Flash