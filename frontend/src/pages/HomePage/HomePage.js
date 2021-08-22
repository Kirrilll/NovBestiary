import React, {useState} from "react"
import Header from "../../components/Header/Header"
import cityLogo from '../../assets/cityBlock/logo.png'
import palace from '../../assets/cityBlock/palace.png'
import firstListItem from '../../assets/interactiveBlock/game.png'
import secondListItem from '../../assets/interactiveBlock/phone.png'
import thirdListItem from '../../assets/interactiveBlock/play.png'
import map from '../../assets/interactiveBlock/map.png'
import firstLegend from '../../assets/legends/l1.png'
import './HomePage.css'
import {Link} from "react-router-dom"


export const HomePage = () => {
    const [inputValue, setInputValue] = useState('')

    return (
        <div className='home__wrapper'>
            <Header/>

            <div className='home__city'>
                <div className='city__container'>
                    <div className='city-background'>
                        <div className='city__inner'>
                            <div className='city__info-container'>
                                <div className="city__icon">
                                    <img src={cityLogo} alt="cityLogo"/>
                                </div>
                                <div className="city__name">Новгородская<br/>область</div>

                                <div className='city__info-wrapper'>
                                    <div className="city__info-block city__area">
                                        <span className="city__info">54 501 км2</span>
                                    </div>
                                    <span className='city__desc'>Площадь области</span>
                                </div>

                                <div className='city__info-wrapper'>
                                    <div className="city__info-block city__people">
                                        <span className="city__info">592 415 человек</span>
                                    </div>
                                    <span className='city__desc'>Численность населения</span>
                                </div>

                                <div className='city__info-wrapper'>
                                    <div className="city__info-block city__objects">
                                        <span className="city__info">5204</span>
                                    </div>
                                    <span className='city__desc'>Культурных объектов</span>
                                </div>
                            </div>
                            <img src={palace} alt="palace" className='city__image'/>
                        </div>
                    </div>
                </div>
            </div>

            <section className='home__interactive'>
                <div className='title interactive__title'><span>Интерактивные возможности</span></div>
                <div className="interactive__inner">
                    <div className="interactive__items">
                        <div className="interactive__item">
                            <img src={firstListItem} alt=""/>
                            <div className='item__block item__block-games'>Игры</div>
                        </div>
                        <div className="interactive__item">
                            <img src={secondListItem} alt=""/>
                            <div className='item__block item__block-ar'>AR</div>
                        </div>
                        <div className="interactive__item">
                            <img src={thirdListItem} alt=""/>
                            <div className='item__block item__block-tiser'>Тизеры</div>
                        </div>
                        <Link to='/map' className='header__button item__block-map'>Интерактивная карта</Link>
                    </div>
                    <div className='interactive__map'>
                        <img src={map} alt="map"/>
                        <div className='interactive__info'>501 200 туристов</div>
                        <div className='interactive__desc'>Ежегодно посещают Новгородскую область</div>
                    </div>
                </div>
            </section>

            <section className="home__legends">
                <div className='title legends__title'><span>Легенды новгородской области</span></div>
                <div className="legends__wrapper">
                    <div className='legends__filters'>
                        <select name="popular">
                            <option value='Популярные'>Популярные</option>
                            <option value='Новые' selected>Новые</option>
                        </select>
                        <select name="genres">
                            <option value='Все' selected>Все</option>
                            <option value='Приключение'>Приключение</option>
                            <option value='Хоррор'>Хоррор</option>
                            <option value='Развлекательные'>Развлекательные</option>
                        </select>
                        <input placeholder='Поиск' type="text" value={inputValue}
                               onChange={e => setInputValue(e.target.value)}/>
                    </div>
                    <div className="legends__items">
                        <div className="legends__item">
                            <img src={firstLegend} alt="" className="item__img"/>
                            <div className="item__name">Былина о Садко</div>
                            <Link to={'/home/legend'} className="item__button-outlined btn">Прочитать</Link>
                            <button className="item__button btn">Открыть на карте</button>
                        </div>
                        <div className="legends__item">
                            <img src={firstLegend} alt="" className="item__img"/>
                            <div className="item__name">Былина о Садко</div>
                            <Link to={'/home/legend'} className="item__button-outlined btn">Прочитать</Link>
                            <button className="item__button btn">Открыть на карте</button>
                        </div>
                        <div className="legends__item">
                            <img src={firstLegend} alt="" className="item__img"/>
                            <div className="item__name">Былина о Садко</div>
                            <Link to={'/home/legend'} className="item__button-outlined btn">Прочитать</Link>
                            <button className="item__button btn">Открыть на карте</button>
                        </div>
                        <div className="legends__item">
                            <img src={firstLegend} alt="" className="item__img"/>
                            <div className="item__name">Былина о Садко</div>
                            <Link to={'/home/legend'} className="item__button-outlined btn">Прочитать</Link>
                            <button className="item__button btn">Открыть на карте</button>
                        </div>
                    </div>
                </div>
            </section>

            <div className='legends__wrapper'>
                <div className='footer'>
                    <div className='footer__line' />
                    <span>Это были все легенды</span>
                </div>
            </div>
        </div>
    )
}