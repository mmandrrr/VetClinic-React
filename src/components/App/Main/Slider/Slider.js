import { useEffect } from "react";
import { useState } from "react";

import Counter from "./Counter/Counter";
import Slides from "./Slides/Slides";

import { slidesBgData } from './Slides/slidesBgData';
import { counterData } from "./Counter/counterData";
import { slidesData } from "./Slides/slidesData";


const Slider = () => {
    const [slides, setSlides] = useState(slidesData);
    const [slideBg, setSlideBg] = useState(slidesBgData);
    const [counter, setCounter] = useState(counterData);

    const hideSlides = () => {
        slides.forEach(item => {
            const newClassName = 'slider_content-item hide';
            item.className = newClassName
        })
        setSlides([...slides])
    }


    const showSlide = (i = 0) => {
        const showedSlide = slides[i].className.replace(/ hide/g, '');
        slides[i].className = showedSlide
        setSlides([...slides,])
    }

    const changeActiveCounter = (i = 0) => {
        counter.forEach(item => {
            item.className = 'slider_counter-item';
        })
        counter[i].className = counter[i].className + ' slider_counter-item-active'
        setCounter([...counter])
    }

    const changeBg = (i) => {
        slideBg[6] = slideBg[i]
        setSlideBg([...slideBg])
    }

    useEffect(() => {
        hideSlides()
        showSlide()
        changeActiveCounter()
    },[])

    const changeSlide = (e) => {
        const target = e.target;
        if(target) {
            hideSlides();
            showSlide(target.id);
            changeBg(target.id)
            changeActiveCounter(target.id)
        }
    }

    const counters = counter.map(item => {
        return(
           <Counter
                key={item.id}
                id={item.id}
                count = {item.count}
                changeSlide = {changeSlide}
                className = {item.className}
            />
        )
    })

    const slide = slides.map(item => {
        return(
            <Slides
                key={item.id}
                id={item.id}
                title = {item.title}
                className = {item.className}
             />
        )
    })

    return(
        <section className={`slider ${slideBg[6]}`}>
            <div className="slider_container">
                <div className="slider_counter">
                    {counters}
                </div>
                <div className="slider_content">
                    {slide}
                </div>
                <div className="slider_phone-number">+38 (066) 0509979</div>
            </div>
        </section>
    )
}

export default Slider