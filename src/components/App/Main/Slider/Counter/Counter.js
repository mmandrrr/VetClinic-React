
const Counter = ({count,changeSlide,id,className}) => {

    return(
            <div id={id} onClick={(e) => changeSlide(e)} className={className}>{count}</div>
    )
}

export default Counter