import {Link} from 'react-router-dom';

import Navigation from './Navigation/Navigation';

import arrow from '../../../assets/History/right-arrow-forward-svgrepo-com.svg';
import dog from '../../../assets/SingleService/dog-img.png';

const SingleService = () => {
    return(
        <section className="service">
            <div className="service_container">
                <Navigation />
                <div className="service_content">
                    <Link to='/' className="appointment_back"><img src={arrow} alt="Back" /> НАЗАД</Link>
                    <div className="service_specialists">
                        <h2 className="service_specialists-subtitle">Записаться на прием к терапевту</h2>
                        <div className="service_specialists-list">
                            <div className="service_specialists-item">
                                <img src={dog} alt=""/>
                                <div className="service_specialists-info">
                                    <div className="service_specialists-name">Ивантелеев <br/> Иван Константинович</div>
                                    <div className="service_specialists-date">ближайшая дата приема: <br/> 29.08.19</div>
                                </div>
                            </div>
                            <div className="service_specialists-item">
                                <img src={dog} alt=""/>
                                <div className="service_specialists-info">
                                    <div className="service_specialists-name">Ивантелеев <br/> Иван Константинович</div>
                                    <div className="service_specialists-date">ближайшая дата приема: <br/> 29.08.19</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="service_description">
                        <h2 className="service_description-subtitle">Терапия в нашей клинике</h2>
                        <div className="service_description-content">
                            <p>Терапия - область гуманной и ветеринарной медицины, занимающаяся непосредственно лечением
                                патологий, облегчением состояния больного и устранением симптомов заболеваний.</p>
                            <ul className="service_description-list">
                                Терапевтическое отделение клиники Айболит занимается диагностикой и лечением следующих
                                болезней:
                                <li className="service_description-item">- органов пищеварения;</li>
                                <li className="service_description-item">- органов сердечно-сосудистой системы;</li>
                                <li className="service_description-item">- органов дыхательной системы;</li>
                                <li className="service_description-item">- нервной системы;</li>
                                <li className="service_description-item">- органов мочевыделительной системы;</li>
                                <li className="service_description-item">- эндокринной системы;</li>
                                <li className="service_description-item">- нарушения обмена веществ;</li>
                                <li className="service_description-item">- кожи и ее производных;</li>
                                <li className="service_description-item">- органов чувств;</li>
                                <li className="service_description-item">- репродуктивной области;</li>
                                <li className="service_description-item">- инфекционной и инвазионной природы;</li>
                                <li className="service_description-item">- токсикологической природы.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="service_first-sub">
                        <h2 className="service_first-subtitle">Подзаголовок 1</h2>
                        <div className="service_first-content">
                            <p>В нашей клинике имеются как врачи-терапевты общей практики, так и узкие специалисты по ряду
                                перечисленных областей, что дает возможность излечивать тяжелые и редкие случаи патологий.
                            </p>
                            <img src={dog} alt=""/>
                            <p>Врач-терапевт подходит к лечению животного комплексно, предварительно изучив его анамнез,
                                учитывая возраст, пол, породу, наличие хронических болезней, условия содержания, типа
                                кормления, оценив общее состояние питомца, полностью осмотрев его и назначив необходимую
                                диагностику и соответствующее лечение.</p>
                            <p>Врачи клиники имеют широкий спектр диагностических возможностей, что является идеальным
                                условием для постановки точного диагноза, а значит и назначения того лечения, которое
                                наиболее эффективно справится с данным конкретным клиническим случаем.</p>
                            <ul className="service_first-list">
                                Некоторую диагностику можно провести тут же на месте в течение буквально нескольких минут,
                                что немаловажно для экстренных случаев и значительно экономят время владельцам:
                                <li className="service_first-item">- гематологический и биохимический анализы крови;</li>
                                <li className="service_first-item">- исследование Т4 и кортизол;</li>
                                <li className="service_first-item">- анализ газов крови;</li>
                                <li className="service_first-item">рентген</li>
                                <li className="service_first-item">- ультразвуковое исследование брюшной полости и сердца;</li>
                                <li className="service_first-item">- микроскопия мазков и соскобов;</li>
                                <li className="service_first-item">- люминесцентный тест на лишай;</li>
                                <li className="service_first-item">- экспресс-анализы на основные вирусные заболевания.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="service_second-sub">
                        <h2 className="service_second-subtitle">Подзаголовок 2</h2>
                        <div className="service_second-content">
                            <p>Большинство исследований, требующих седации (эндоскопия, МРТ, лапароскопия), так же доступны
                                в течение суток. Более сложные анализы, такие как бактериологический посев, гормоны,
                                гистологическое исследование мы направляем в дистанционную лабораторию.</p>
                            <p>Получив результаты исследований врач приступает к анализу причин и механизмов развития
                                болезни и назначает лечение. Оно может быть медикаментозным (домашним или стационарным) или
                                оперативным (экстренным или плановым).</p>
                            <p>Эффективность терапии в большой степени зависит и от владельца животного, ведь именно ему
                                необходимо будет соблюдать предписания врача, вовремя давать препараты или ставить уколы,
                                следить за развитием динамики и симптомов, чтобы вовремя оповестить врача о происходящих
                                изменениях, для своевременной коррекции лечения.</p>
                            <p>Кроме лечения терапевты занимаются и профилактикой заболеваний. Доктора с удовольствием
                                расскажут вам основы выращивания, содержания и кормления питомца, графики дегельминтизаций и
                                прививок. Оформят ветеринарный паспорт и чипируют ваше животное.</p>
                        </div>
                    </div>
                    <div className="service_prices">
                        <h2 className="service_proces-subtitle">Цены</h2>
                        <div className="service_prices-navigation">
                            <p>Цены указаны без учета расходоных материалов</p>
                            <ul className="service_prices-counter">
                                <li className="service_prices-count">1</li>
                            </ul>
                        </div>
                        <div className="service_prices-list">
                            <div className="service_prices-item">
                                <div className="service_prices-name">Прием</div>
                                <div className="service_prices-value">320 ₴</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SingleService