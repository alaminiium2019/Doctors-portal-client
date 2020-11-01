import React from 'react'

function ServiceDetail({ service }) {
    return (
        <div className="col-md-4 text-center">
            <img style={{height:'50px'}} src={service.img} alt="photo"/>
            <h5 className="mt-4 mt-4">{service.name}</h5>
            <p className="text-secondary">This is failure person. This is failure person. This is failure person. This is failure person </p>
        </div>
    )
}

export default ServiceDetail;
