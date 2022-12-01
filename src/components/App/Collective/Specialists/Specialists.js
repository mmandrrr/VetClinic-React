import { Link } from "react-router-dom"

import SpecialistInfo from "./SpecialistInfo/SpecialistInfo"

import { specialistsData } from "./specialistsData"

const Specialists = () => {

    const scrollToTop = (e,element) => {
        e.preventDefault()
        element.scrollIntoView(true)
    }

    const specialist = specialistsData.map(({photo,experience,id,name,specialization}) => {
        return(
            <Link
                onClick={(e) => scrollToTop(e,document.querySelector('.header'))}  
                to={`/collective/${id}`} 
                key = {id} 
                style={{textDecoration : 'none', display : 'flex'}}
            >
                <SpecialistInfo 
                    key = {id}
                    id = {id}
                    photo = {photo}
                    experience = {experience}
                    name = {name}
                    specialization = {specialization}
                />
            </Link>
        )
    })

    return(
        <div className="collective_specialists">
            <h2 className="collective_specialists-title">Специалисты</h2>
            <div className="collective_specialists-list">
                {specialist}
            </div>
        </div>
    )
}

export default Specialists