
import { specialistsData } from "../Specialists/specialistsData"

const SpecialistPage = () => {

    const userId = document.location.pathname.split('/')[2]

    const Specialist = () => {
        return(
            specialistsData[userId].name
        )
    }

    console.log(userId);

    return(
        <Specialist />
    )
}

export default SpecialistPage