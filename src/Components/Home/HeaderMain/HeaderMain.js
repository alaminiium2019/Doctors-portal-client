import React from 'react'
import { Link } from 'react-router-dom';
import chair from '../../../images/chair.png';

function HeaderMain() {
    return (
        <main style={{height:'600px'}} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 style={{color:'#3A4256'}}>Your new smile<br></br> starts here</h1>
                <p className="text-secondary">Something will be here about doctor portal.Something will be here about doctor portal. Something will be here about doctor portal. Something will be here about doctor portal. </p>
                <Link to="/appointment"><button className="btn btn-primary">GET APPOINTMENT</button></Link>
            </div>
            <div className="col-md-6">
                <img src={chair} className="img-fluid"/>                
                </div>            
        </main>
    )
}

export default HeaderMain;
