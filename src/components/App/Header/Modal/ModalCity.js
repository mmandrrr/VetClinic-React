

const ModalCity = ({className,hideModal,changeLocation}) => {
    return(
        <>
            <div
                onClick={(e) => hideModal(e)} 
                className={`modal_bg ${className}`}>
                <div className="modal_wrapper">
                    <div className="modal_title">Ваш город</div>
                    <div className="modal_cityList">
                        <div onClick={(e) => changeLocation(e)} className="modal_city" id="Киев">Киев</div>
                        <div onClick={(e) => changeLocation(e)} className="modal_city" id="Полтава">Полтава</div>
                    </div>
                    <div 
                        onClick={(e) => hideModal(e)}
                        className="modal_closeBtn">
                            <span className="modal_close"></span>
                            <span className="modal_close"></span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalCity