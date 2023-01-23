import { specialistsData } from "../../components/App/Collective/Specialists/specialistsData";

class getSpecialistReview {
    showSection = (i,Element,num) => {
        const reviews = specialistsData[num].reviews;
        const section = [];
        for(let n = i; n < i + 4; n++) {
            if(reviews[n]) {
                section.push(reviews[n]);
            }
        }
        const list = section.map(item => {
            if(item) {
                return(
                    <Element
                        key = {item.id}
                        profilePhoto = {item.profilePhoto}
                        userName = {item.userName}
                        review = {item.review}
                        specPhoto = {specialistsData[num].photo}
                    />
                )
            }
            return null
        })
        return list
    }

    createList = (id) => {
        const ul =  document.querySelector('.specialist-page_overview-counter > ul')
        if(ul) {
            const listCount = Math.ceil(specialistsData[id].reviews.length / 4);
            const arr = []
            for(let i = 0; i < listCount; i++) {
                arr.push(i)
            }
            return arr
        }
        return null
    }
}

export default getSpecialistReview