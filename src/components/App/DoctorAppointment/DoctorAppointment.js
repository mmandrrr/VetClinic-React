import { Link, Routes, Route } from "react-router-dom";

import AppoinmentServices from "./AppoinmentServices/AppoinmentServices";
import AppoinmentForm from "./AppoinmentForm/AppoinmentForm";

const DoctorAppointment = () => {
    return(
        <section className="appointment">
            <div className="appointment_container">
                <div className="appointment_title">Запись <br/> на прием</div>
                <Routes>
                    <Route path="/" element={<AppoinmentServices />}/>
                    <Route path="appoinment-form" element={<AppoinmentForm/>}/>
                </Routes>
            </div>
        </section>
    )
}

export default DoctorAppointment