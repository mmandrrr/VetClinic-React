const pharmacyTitle = () => {
    return(
        <div>Аптека и зоомагазин по доступным <br/> ценам</div> 
    )
}

const groomingTitle = () => {
    return(
        <div>Груминг салон <br /> и косметические товары</div> 
    )
}

export const slidesData = [
    {
        title : 'Айболит круглосуточная ветклиника',
        id : 0,
        className : 'slider_content-item',
    },
    {
        title : 'Комфортные оборудованные стационары',
        id : 1,
        className : 'slider_content-item',
    },
    {
        title : 'Новейшее европейское оборудование',
        id : 2,
        className : 'slider_content-item',
    },
    {
        title : 'Собственная современная лаборатория',
        id : 3,
        className : 'slider_content-item',
    },
    {
        title : pharmacyTitle(),
        id : 4,
        className : 'slider_content-item',
    },
    {
        title : groomingTitle(),
        id : 5,
        className : 'slider_content-item',
    },
]