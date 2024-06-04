import "./testimonial.css"
import risma from "../../static/risma.jpg"

const Testimonial = () => {
    return (
        <div id="Testimonial">
            <div className="testimonial">
                <div className="section-heading">
                    <div><h1>Testimonials</h1></div>
                    <div className="fl"></div>
                </div>
                <div className="testimonials">
                    {/* <div className="review">
                        <p>"</p>
                        <div className="review-content">
                            <p className="review-text-content">Review 1..!</p>
                            <div className="review-user">
                                <div className="review-user-info">
                                    <div className="review-user-name">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480v58q0 59-40.5 100.5T740-280q-35 0-66-15t-52-43q-29 29-65.5 43.5T480-280q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480v58q0 26 17 44t43 18q26 0 43-18t17-44v-58q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93h200v80H480Zm0-280q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Z"/></svg>
                                        <p className="reviewer-name">Abbie Hoffman</p>
                                    </div>
                                    <p className="review-user-post">CEO of The End Of Time</p>
                                </div>
                                <span><div><img src="https://cdn.discordapp.com/avatars/307679452383412235/be15d671a2748ff93f6aadda5a90747b?size=1024" alt="Abbie Hoffman" /></div></span>
                            </div>
                        </div>
                    </div> */}
                    <div className="review">
                        <p>"</p>
                        <div className="review-content">
                            <p className="review-text-content">I really admire how Rituraj works, as our Discord Bot Developer in Arena Breakout. Not only did he do every task perfectly & on time, but he was also dedicated to helping his co-worker when they needed help. A person who is easy to work with!
I would recommend Rituraj to become your best work partner.</p>
                            <div className="review-user">
                                <div className="review-user-info">
                                    <div className="review-user-name">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480v58q0 59-40.5 100.5T740-280q-35 0-66-15t-52-43q-29 29-65.5 43.5T480-280q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480v58q0 26 17 44t43 18q26 0 43-18t17-44v-58q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93h200v80H480Zm0-280q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Z"/></svg>
                                        <p className="reviewer-name">Risma</p>
                                    </div>
                                    <p className="review-user-post">Senior Manager of Arena Breakout</p>
                                </div>
                                <span><div><img src={risma} alt="Risma" /></div></span>
                            </div>
                        </div>
                    </div>
                    <div className="review">
                        <p>"</p>
                        <div className="review-content">
                            <p className="review-text-content">He stood out from numerous interviewees, and it turned out our choice was correct. He independently completed the construction of the entire MISSION EVO Fandom wiki page and made significant contributions to the subsequent multilingual region work. He always finds better presentation methods to help players use the wiki better and optimizes feedback and suggestions from players. In this field, he is undoubtedly a worthy community quality worker.</p>
                            <div className="review-user">
                                <div className="review-user-info">
                                    <div className="review-user-name">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480v58q0 59-40.5 100.5T740-280q-35 0-66-15t-52-43q-29 29-65.5 43.5T480-280q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480v58q0 26 17 44t43 18q26 0 43-18t17-44v-58q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93h200v80H480Zm0-280q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Z"/></svg>
                                        <p className="reviewer-name">Elson</p>
                                    </div>
                                    <p className="review-user-post">Community Manager of Mission Evo</p>
                                </div>
                                <span><div><img src="https://cdn.discordapp.com/avatars/1049909674465574973/be16c54346eb76138437730ff0da9802?size=1024" alt="Elson" /></div></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial;