import { Link } from "react-router-dom";

import { blogData } from "../../components/App/Blog/BlogItem/blogData";

class ShowBlog {

    getBlogList = (i,Element) => {
        const section = [];
        for(let n = i; n < i + 4; n++) {
            if(blogData[n]) {
                section.push(blogData[n])
            }
        }
        const list = section.map(item => {
            return(
                <Link to={`/blog/${item.id}`} style={{textDecoration : 'none'}} key={item.id}>
                    <Element 
                        img = {item.img}
                        date = {item.date}
                        title = {item.title}
                        text = {item.text}
                    />
                </Link>
            )
        })
        return list
    }

    createCounter = () => {
        const count = Math.ceil(blogData.length / 4);
        const listArr = [];
        for(let i = 1; i <= count; i++) {
            listArr.push(i)
        }
        return listArr;
    }

}

export default ShowBlog