import React from "react"
import Header from "../../components/Header/Header"
import legendImg from '../../assets/legend/legend-01.png'
import video from '../../assets/legend/scn_main.mp4'
import game from '../../assets/legend/game.png'
import lock from '../../assets/legend/lock.png'
import profileImg from '../../assets/header/Profile.svg'
import StarIcon from '@material-ui/icons/Star'
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined'
import './LegendPage.css'


export const LegendPage = () => {
    return (
        <div className="legend__wrapper">
            <Header/>

            <div className="legend__place place">
                <img src={legendImg} alt='sofia-sobor'/>
                <div className="place__info">
                    <h1 className="place__title">Собор Святой Софии</h1>
                    <div className="place__description description">
                        Созданный 1000 лет назад собор Святой Софии считается одним из
                        древнейших храмов, возведенных на Руси. Он и в наши дни остается духовным центром Великого
                        Новгорода, местом паломничества православных христиан России и всего мира.
                        Венчают собор золотые купола, отлитые в виде шлемов древнерусских воинов. Интересно, что главный
                        крест с купола Софийского собора во времена Второй мировой войны был доставлен в качестве трофея
                        в Испанию. И лишь в 2004 году, после продолжительных переговоров с испанским монархом, удалось
                        вернуть святыню на место.
                        Одним из самых популярных мест у туристов считается колокольня собора Святой Софии. Она
                        оборудована вместительной смотровой площадкой, откуда открывается вид на Новгородский Кремль –
                        один из древних русских кремлей, сохранивших свой первозданный вид до наших дней.
                    </div>
                </div>
            </div>

            <div className="legend__teaser teaser">
                <h3 className="teaser__title">ТИЗЕР Достопримечательности</h3>
                <div className="teaser__container">
                    <video controls src={video} />
                    {/*<button className="teaser__btn">*/}
                    {/*    <PlayArrowIcon/>*/}
                    {/*</button>*/}
                </div>
            </div>

            <div className="legend__teaser teaser">
                <h3 className="teaser__title">СЫГРАЕМ В ИГРУ?</h3>
                <div className="teaser__container">
                    <img src={game} alt='teaser'/>
                    <div className="teaser__center">
                        <span>
                            <img src={lock} alt='lock' />
                        </span>
                        <div className="teaser__lock">ЗАКРЫТО</div>
                        <div className="teaser__description description">Для того, чтобы начать игру, вам нужно быть на
                            территории достопримечательности
                        </div>
                        <button className="teaser__game__btn">Проложить маршрут</button>
                    </div>
                </div>
            </div>

            <div className="legend__teaser teaser">
                <h3 className="teaser__title">Отзывы</h3>
                <div className="teaser__container">
                    <div className='review__form'>
                        <div className='review__form-stars'>
                            <StarBorderOutlinedIcon fontSize='large' />
                            <StarBorderOutlinedIcon fontSize='large' />
                            <StarBorderOutlinedIcon fontSize='large' />
                            <StarBorderOutlinedIcon fontSize='large' />
                            <StarBorderOutlinedIcon fontSize='large' />
                        </div>
                        <textarea placeholder='Ваш отзыв' className='review__form-textarea' />
                        <button className='review__form-btn'>Отправить</button>
                    </div>
                    <div className="review__items">
                        <div className="review__item">
                            <img className='review__avatar' src={profileImg} alt="profile" />
                            <div className="review__info">
                                <div className="review__header">
                                    <div className="review__rating">
                                        <StarIcon />
                                        <StarIcon />
                                        <StarIcon />
                                        <StarBorderOutlinedIcon />
                                        <StarBorderOutlinedIcon />
                                    </div>
                                    <div className="review__name">username-01</div>
                                </div>
                                <div className="review__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores consectetur consequatur culpa dicta dolor doloremque eaque eos esse et ex explicabo fuga harum in iusto labore magnam magni necessitatibus nisi numquam obcaecati praesentium quas, quasi quo repellat sapiente sequi tempora ullam ut velit veniam, voluptatem voluptates voluptatibus voluptatum. Laborum, veritatis?</div>
                            </div>
                        </div>
                        <div className='footer__line' />
                        <div className="review__item">
                            <img className='review__avatar' src={profileImg} alt="profile" />
                            <div className="review__info">
                                <div className="review__header">
                                    <div className="review__rating">
                                        <StarIcon />
                                        <StarIcon />
                                        <StarIcon />
                                        <StarIcon />
                                        <StarIcon />
                                    </div>
                                    <div className="review__name">username-02</div>
                                </div>
                                <div className="review__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores consectetur consequatur culpa dicta dolor doloremque eaque eos esse et ex explicabo fuga harum in iusto labore magnam magni necessitatibus nisi numquam obcaecati praesentium quas, quasi quo repellat sapiente sequi tempora ullam ut velit veniam, voluptatem voluptates voluptatibus voluptatum. Laborum, veritatis?</div>
                            </div>
                        </div>
                        <div className='footer__line' />
                        <div className="review__item">
                            <img className='review__avatar' src={profileImg} alt="profile" />
                            <div className="review__info">
                                <div className="review__header">
                                    <div className="review__rating">
                                        <StarIcon />
                                        <StarBorderOutlinedIcon />
                                        <StarBorderOutlinedIcon />
                                        <StarBorderOutlinedIcon />
                                        <StarBorderOutlinedIcon />
                                    </div>
                                    <div className="review__name">username-03</div>
                                </div>
                                <div className="review__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores consectetur consequatur culpa dicta dolor doloremque eaque eos esse et ex explicabo fuga harum in iusto labore magnam magni necessitatibus nisi numquam obcaecati praesentium quas, quasi quo repellat sapiente sequi tempora ullam ut velit veniam, voluptatem voluptates voluptatibus voluptatum. Laborum, veritatis?</div>
                            </div>
                        </div>
                        <div className='footer__line' />
                    </div>
                </div>
            </div>
        </div>
    )
}