import React from 'react';
import Calendar from 'react-calendar';
import chair from '../../../images/chair.png';
import 'react-calendar/dist/Calendar.css';

const AppointmentHeader = ({handleDateChange}) => {

    return (
        <div>
            <main style={{ height: '600px' }} className="row d-flex align-items-center">
                <div className="col-md-4 offset-md-1">
                    <h1 style={{ color: '#3A4256' }}>Appointment</h1>
                    <Calendar onChange={handleDateChange} value={new Date()}>
                    </Calendar>
                </div>
                <div className="col-md-6">
                    <img src={chair} className="img-fluid" />
                </div>
            </main>
        </div>
    );
};

export default AppointmentHeader;