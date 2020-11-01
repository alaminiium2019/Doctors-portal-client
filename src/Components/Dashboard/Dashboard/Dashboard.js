import React, { useState } from 'react';
import Calendar from 'react-calendar';
import AppointmentsByDate from '../AppointmentByDate/AppointmentByDate';
import AppointmentDataTable from '../AppointmentDataTable/AppointmentDataTable';
import Sidebar from '../Sidebar/Sidebar';


const containerStyle = {
    backgroundColor:"#F4FDFB",
    height:"100%"
}

const Dashboard = () => {

    const [selectedDate,setSelectedDate] = useState(new Date());
    const [appointments,setAppointments] = useState([]);

    function getFormattedDate(d) {
        let today = new Date(d);
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0');
        const yyyy = today.getFullYear();
        today = `${dd}-${mm}-${yyyy}`;
        return today;
    }

    const handleDateChange = date => {
        setSelectedDate(date);
        const da = getFormattedDate(date);

        fetch('http://localhost:5000/appointmentByDate', {
            method: 'POST',
            headers: { 'content-type': 'application/json'},
            body: JSON.stringify({date:da})
        })
        .then(res => res.json())
        .then(data => setAppointments(data));

    }
    return (
        <section>
            <div style={containerStyle} className="container-fluid row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-5">
                    <Calendar onChange={handleDateChange}></Calendar>
                </div>
                <div className="col-md-5">
                    <AppointmentsByDate appointments={appointments}></AppointmentsByDate>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;
