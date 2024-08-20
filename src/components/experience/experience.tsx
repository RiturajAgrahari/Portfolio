import "./experience.css"
import teot from "../../static/teot.png"
import aoem from "../../static/aoem.png"

const Experience = () => {
    return (
        <div id="Experience">
            <div className="experience">
                <div className="section-heading">
                    <div><h1>Gained Experience</h1></div>
                    <div className="fl"></div>
                </div>
                <div className="work-experience">
                    <div className="work">
                        <span>
                            <div>
                                <img src={aoem} alt="age of empires mobile" />
                            </div>
                        </span>
                        <div className="work-details">
                            <div className="arrow"></div>
                            <div className="work-header"><h3>Fandom Wiki Editor</h3><p>Age of Empires Mobile - Timi Studios (by Tencent)</p></div>
                            <ul>
                                <li>I've been tasked with building and maintaining the game's fandom wiki.</li>
                                <li>Using HTML, CSS, and Wikia on the Fandom platform, I've created and curated pages while integrating Facebook, X, and Discord widgets to enhance user engagement and accessibility.</li>
                            </ul>
                            <span>June 2024 - Present</span>
                        </div>
                    </div>
                    <div className="work">
                        <span>
                            <div>
                                <img src={teot} alt="mission evo" />
                            </div>
                        </span>
                        <div className="work-details">
                            <div className="arrow"></div>
                            <div className="work-header"><h3>Full stack Web Developer / SysAdmin</h3><p>The End Of Time - Escape Studios</p></div>
                            <ul>
                                <li>I lead the development of a new game's fully functional website from scratch.</li>
                                <li>Leveraging Vite + React.ts for frontend, Django for backend and Django Rest Framework for API, and MySQL for RDBMS.</li>
                                <li>Developed a Linux server manager capable of automating game server deployment. The tool handles the entire process, including file upload, extraction, permission configuration, server initiation, and real-time console output monitoring.</li>
                            </ul>
                            <span>Februray 2024 - Present</span>
                        </div>
                    </div>
                    <div className="work">
                        <span>
                            <div>
                                <img src="https://arenabreakout.com/favicon.ico" alt="arena breakout" />
                            </div>
                        </span>
                        <div className="work-details">
                            <div className="arrow"></div>
                            <div className="work-header"><h3>Discord Bot Developer / Web Developer</h3><p>Arena Breakout - MoreFun Studios (by Tencent)</p></div>
                            <ul>
                                <li>I focus on automating and interlinking fandom wikis while implementing game-related content to drive strategic marketing initiatives aimed at expanding the player base.</li>
                                <li>Utilizing Python, MySQL for database management, Libraries such as  MatplotLib, Discord.py and Fandom.py, and Linux for VPS hosting.</li>
                                <li>I'm responsible for developing a comprehensive website that enables users to oversee, manage, control, and analyze the bot's functionality.</li>
                                <li>I oversee the development, end-to-end testing, and bug fixes for the bots.</li>
                            </ul>
                            <span>September 2023 - Present</span>
                        </div>
                    </div>
                    <div className="work">
                        <span>
                            <div>
                                <img src="https://arenabreakout.com/favicon.ico" alt="arena breakout" />
                            </div>
                        </span>
                        <div className="work-details">
                            <div className="arrow"></div>
                            <div className="work-header"><h3>Fandom Wiki Editor</h3><p>Arena Breakout - MoreFun Studios (by Tencent)</p></div>
                            <ul>
                                <li>I've been tasked with building and maintaining the game's fandom wiki.</li>
                                <li>Using HTML, CSS, and Wikia on the Fandom platform, I've created and curated pages while integrating Facebook, X, and Discord widgets to enhance user engagement and accessibility.</li>
                            </ul>
                            <span>May 2023 - Present</span>
                        </div>
                        
                    </div>
                        <div className="work">
                        <span>
                            <div>
                                <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3NzMuODc3Nzc3Nzc3Nzc3LTc3MjU3NzcsNzc1LTU3K//AABEIACAAIAMBEQACEQEDEQH/xAAaAAACAwEBAAAAAAAAAAAAAAAGBwQFCAMC/8QALRAAAQMCBAQFBAMAAAAAAAAAAQIDBAURAAYSIRMxQXEHIlFhkRQygaEVIyX/xAAZAQACAwEAAAAAAAAAAAAAAAACAwEEBQD/xAAoEQACAgEDAgUFAQAAAAAAAAABAgADEQQSIRMxIlGh4fAFYYGRsUH/2gAMAwEAAhEDEQA/AFXQqI7V5bLDY8znK/X1/WK1lu3gTTooDjc3aaBoPhRlmAlpx6MZbiNzxzqSrum1jhYV25zFPeBlVUAes9Zm8K8t1GK4YUBqFK4ZDS2U6UBXQqA54Jg685gV2jswB/sz9X6Uuky3oslotvtadSbg2uAeY74NH3d466kKNy9pf+H7k3/VkweAt2JAW/eQnV5UFJUAOdzt8emF2DmPqI6Yz54juyLnQ1xtqNMiONS90qcbQeGpQ5+6e2F06jx9MiRrPpxrQ2q3Hl/vvJObM1qpyXYlOiqkTftAKTa59EjzKPa3fA6jWAP01GTJ0X0w2p1bGwvz8CJTxZed+viJlQ/p5DkFpx4FGkqWrckj2IKd99uuG1DmdcR0zg5GTKjw/rRy9VTUI6UF1LC0p41ykKI9ux+cFaWHIkaWtLQUY8R3zKn/AC2QX6xT5KKeHG3XnCkkq0pvcAgX1WTYkepwK+JcdjOO3T6jDjeB8/UnRKmml5VYqEuaJpS004465/WtKFkJJsrfbfbY7Ec8c3h+5gBRqLjsG1TnHlxziIPP2Y1ZhncdxLIXcp1NpsVJCjpv+LYmkHOTD1O1BsUwYYe0r2t09sPZciVa32tDmi52jRaMKTLiJeil3WpsKIBTtqST1BF8VOm6ncJpvbRcuG4Pb1nWvZ3aqVFVTkNlKSlCElZuQlO4Hzc74gI5bJhLbRUgCn3+8AJKtbl7Wvyti2gwJl3PvbM//9k=" alt="mission evo" />
                            </div>
                        </span>
                        <div className="work-details">
                            <div className="arrow"></div>
                            <div className="work-header"><h3>Fandom Wiki Editor</h3><p>Mission Evo (By Nuverse)</p></div>
                            <ul>
                                <li>I've been tasked with building and maintaining the game's fandom wiki.</li>
                                <li>Using HTML, CSS, and Wikia on the Fandom platform, I've created and curated pages while integrating Facebook, X, and Discord widgets to enhance user engagement and accessibility.</li>
                            </ul>
                            <span>March 2023 - September 2023</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience;
