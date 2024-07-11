import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import './Admin.css'
import pruduct from "../../././assets/Настройкиdvvcx.svg"
import rasimbos from "../../././assets/Mask group.svg"
import tavar from "../../././assets/Group 2.svg"
import '././../Admin/Mange-Products/Admini.scss'

const Admin = () => {
  return (
    <div>
       <div className="admin">
        <div className="saidber">
            <ul>
            <img className='pruduct' src={rasimbos} alt="" />
  
        <div className='econlek'>
        <NavLink className='pruductt econs' to={'mangeproducts'}><img src={pruduct} alt="rasim chiqmayabdi" />  </NavLink>
         
           
         <NavLink className='econs' to={'mangecategory'}><div >
         <img className='tavarr' src={tavar}  alt="" />
          </div>  </NavLink>
        </div>
           
            </ul>
        </div>
        <div className="saidber_row">
          <Outlet/>
        </div>
       </div>
    </div>
  )
}

export default Admin