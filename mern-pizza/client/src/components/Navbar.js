import React from 'react'
import {useSelector ,useDispatch} from 'react-redux'
import { logoutUser } from '../actions/userAction'
export default function Navbar() {
    const cartstate =useSelector(state=>state.cartReducer)
   const userstate = useSelector(state=>state.loginUserReducer)
   const currentUser=userstate.currentUser
   const dispatch = useDispatch()
    return (
        <div style={{position:"sticky",top:0,xIndex:10}}>
            <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-body-tertiary rounded">
                <div className="container-fluid">
                     <a className="navbar-brand" href="/">SHEY PIZZA</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="w-100">
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            
                            {currentUser ?(
                                <div className="dropdown mt-2">
                                <a style={{color:'black'}} className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                  {currentUser.name}
                                </a>
                                <ul className="dropdown-menu">
                                  <li><a className="dropdown-item" href="/orders">Orders</a></li>
                                  <li><a className="dropdown-item" href="#" onClick={()=>{dispatch(logoutUser())}}>Logout</a></li>
                                   </ul>
                              </div>):(<li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/login">Login</a>
                            </li>)}
                            
                            
                            <li className="nav-item">
                                <a className="nav-link" href="/cart">Cart{cartstate.cartItems.length}</a>

                            </li>
                           
                        </ul>
                    </div>
                    </div>
                    
                </div>
            </nav>
        </div>
    )
}
