import React, { useState } from 'react'
import "./menu.css"

function Menu() {
    const [click, setClick] = useState(true);
    const handleClick = () => setClick(!click);


    function activeMenu() {
        handleClick();
        if (click) {

            document.querySelector('.menu-portafolio').classList.remove('active');
            document.querySelector('.dashboard').classList.add('active');
            document.querySelector('.list').classList.add('active');
        } else {
            document.querySelector('.menu-portafolio').classList.add('active');
            document.querySelector('.dashboard').classList.remove('active');
            document.querySelector('.list').classList.remove('active');
        }
    }


    return (
        <div className='menu-portafolio active'>

            <div className="full"><button onClick={activeMenu}><i className="bi bi-arrows-angle-expand"></i></button></div>

            <div>
                <ul className='list'>
                    <li className='menu-item '> <button className='btn1'>  <span> Usuarios  </span>   <i className="bi bi-key-fill">             </i>    </button></li>
                    <li className='menu-item '> <button className='btn1'>  <span> menus     </span>   <i className="bi bi-list">                 </i>    </button></li>
                    <li className='menu-item '> <button className='btn1'>  <span> paginas   </span>   <i className="bi bi-browser-edge">         </i>    </button></li>
                    <li className='menu-item '> <button className='btn1'>  <span> tablas    </span>   <i className="bi bi-file-spreadsheet">     </i>    </button></li>
                    <li className='menu-item '> <button className='btn1'>  <span> ultimos   </span>   <i className="bi bi-chat-left-heart-fill"> </i>    </button></li>
                </ul>
            </div>

        </div>
    )
}
export default Menu