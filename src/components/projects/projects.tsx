import "./projects.css"
import { useRef } from "react";
import weather_app from "../../static/project01.png"
import money_management_app from "../../static/project02.png"
// import teot from "../../static/project03.png"
import portfolio from "../../static/project04.png"
import bots from "../../static/project05.png"
import ab_fandom from "../../static/project06.png"
import crud_app from "../../static/project07.png"
import me_fandom from "../../static/project08.png"
import aoem from "../../static/project09.png"
import botpanel from "../../static/project10.png"


const Projects = () => {

    const ProjectSection: React.RefObject<HTMLDivElement> = useRef(null);

    return (
        <div id="Projects" ref={ProjectSection}>   
        <div className="project-header">
            <div className="section-heading">
                    <div><h1>Projects</h1></div>
                    <div className="fl"></div>
            </div>
        </div>   
            <div className="projects">
                <div className="project">
                    <a href="https://botpanel.rituraj-agrahari.com" target="_blank" className="project-thumbnail">
                        <img src={botpanel} alt="bot_panel" />
                    </a>
                    <div className="project-content">
                        <div className="project-title">
                            <h2>Bot Panel</h2>
                            <div className="project-hyperlinks">
                                <a href="https://botpanel.rituraj-agrahari.com" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M440-280H280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h160v80H280q-50 0-85 35t-35 85q0 50 35 85t85 35h160v80ZM320-440v-80h320v80H320Zm200 160v-80h160q50 0 85-35t35-85q0-50-35-85t-85-35H520v-80h160q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H520Z"/></svg></a>
                                <a href="https://github.com/RiturajAgrahari/AB-Bot-Panel" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/></svg></a>
                            </div>
                        </div>
                        <div className="project-description">
                            <p>I had created this botpanel edge to edge for analysing, controling and managing the custom bots i provide.</p>
                        </div>
                        <div className="project-skills">
                            <p className="project-skill">React.js</p>
                            <p className="project-skill">Typescript</p>
                            <p className="project-skill">Chart.js</p>
                            <p className="project-skill">MySql</p>
                            <p className="project-skill">Django Rest Framework</p>
                            <p className="project-skill">CSS</p>
                            <p className="project-skill">Linux</p>
                            <p className="project-skill">Nginx</p>
                            <p className="project-skill">Gunicorn</p>
                        </div>
                    </div>
                </div>
                <div className="project">
                    <a href="https://age-of-empires-mobile.fandom.com/wiki/Age_of_Empires_Mobile_Wiki" target="_blank" className="project-thumbnail">
                        <img src={aoem} alt="weather_app" />
                    </a>
                    <div className="project-content">
                        <div className="project-title">
                            <h2>Age Of Empire Mobile Fandom</h2>
                            <div className="project-hyperlinks">
                                <a href="https://age-of-empires-mobile.fandom.com/wiki/Age_of_Empires_Mobile_Wiki" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M440-280H280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h160v80H280q-50 0-85 35t-35 85q0 50 35 85t85 35h160v80ZM320-440v-80h320v80H320Zm200 160v-80h160q50 0 85-35t35-85q0-50-35-85t-85-35H520v-80h160q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H520Z"/></svg></a>
                            </div>
                        </div>
                        <div className="project-description">
                            <p>I had created the fandom wiki on mediawiki platform of the game age of empires mobile by timi studios which is a tencent studio</p>
                        </div>
                        <div className="project-skills">
                            <p className="project-skill">HTML</p>
                            <p className="project-skill">CSS</p>
                            <p className="project-skill">WIKIA</p>
                        </div>
                    </div>
                </div>
                <div className="project">
                    <a href="https://vercel-django-weather-app.vercel.app/" target="_blank" className="project-thumbnail">
                        <img src={weather_app} alt="weather_app" />
                    </a>
                    <div className="project-content">
                        <div className="project-title">
                            <h2>Weather App</h2>
                            <div className="project-hyperlinks">
                                <a href="https://vercel-django-weather-app.vercel.app/" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M440-280H280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h160v80H280q-50 0-85 35t-35 85q0 50 35 85t85 35h160v80ZM320-440v-80h320v80H320Zm200 160v-80h160q50 0 85-35t35-85q0-50-35-85t-85-35H520v-80h160q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H520Z"/></svg></a>
                                <a href="https://github.com/RiturajAgrahari/Django-WeatherApp" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/></svg></a>
                            </div>
                        </div>
                        <div className="project-description">
                            <p>You can use this to check 5 consecutive days weather report or compare it between 2 cities</p>
                        </div>
                        <div className="project-skills">
                            <p className="project-skill">HTML</p>
                            <p className="project-skill">CSS</p>
                            <p className="project-skill">DJANGO</p>
                            <p className="project-skill">API</p>
                        </div>
                    </div>
                </div>
                <div className="project">
                    <a href="https://vercel-django-money-management-web-app.vercel.app/authentication/login/" target="_blank" className="project-thumbnail">
                        <img src={money_management_app} alt="weather_app" />
                    </a>
                    <div className="project-content">
                        <div className="project-title">
                            <h2>Money Management</h2>
                            <div className="project-hyperlinks">
                                <a href="https://vercel-django-money-management-web-app.vercel.app/authentication/login/" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M440-280H280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h160v80H280q-50 0-85 35t-35 85q0 50 35 85t85 35h160v80ZM320-440v-80h320v80H320Zm200 160v-80h160q50 0 85-35t35-85q0-50-35-85t-85-35H520v-80h160q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H520Z"/></svg></a>
                                <a href="https://github.com/RiturajAgrahari/Django-Money-Management-App" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/></svg></a>
                            </div>
                        </div>
                        <div className="project-description">
                            <p>Manage you Income and Expense and find the caches and save money</p>
                        </div>
                        <div className="project-skills">
                            <p className="project-skill">HTML</p>
                            <p className="project-skill">CSS</p>
                            <p className="project-skill">DJANGO</p>
                            <p className="project-skill">BOOTSTRAP</p>
                            <p className="project-skill">MYSQL</p>
                        </div>
                    </div>
                </div>
            
                <div className="project">
                    <a href="https://portfolio.rituraj-agrahari.com/" target="_blank" className="project-thumbnail">
                        <img src={portfolio} alt="weather_app" />
                    </a>
                    <div className="project-content">
                        <div className="project-title">
                            <h2>My Portfolio</h2>
                            <div className="project-hyperlinks">
                                <a href="https://portfolio.rituraj-agrahari.com/" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M440-280H280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h160v80H280q-50 0-85 35t-35 85q0 50 35 85t85 35h160v80ZM320-440v-80h320v80H320Zm200 160v-80h160q50 0 85-35t35-85q0-50-35-85t-85-35H520v-80h160q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H520Z"/></svg></a>
                                <a href="https://github.com/RiturajAgrahari/Portfolio" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/></svg></a>
                            </div>
                        </div>
                        <div className="project-description">
                            <p>I designed my whole portfolio by myself..! </p>
                        </div>
                        <div className="project-skills">
                            <p className="project-skill">HTML</p>
                            <p className="project-skill">CSS</p>
                            <p className="project-skill">REACT</p>
                            <p className="project-skill">VITE</p>
                        </div>
                    </div>
                </div>
                <div className="project">
                    <a target="_blank" className="project-thumbnail">
                        <img src={bots} alt="weather_app" />
                    </a>
                    <div className="project-content">
                        <div className="project-title">
                            <h2>Discord Bots</h2>
                            <div className="project-hyperlinks">
                                <a href="https://github.com/RiturajAgrahari?tab=repositories&q=Discord.py&type=&language=&sort=" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/></svg></a>
                            </div>
                        </div>
                        <div className="project-description">
                            <p>I had created a lot of discord bots, some for personal uses and some for companies.</p>
                        </div>
                        <div className="project-skills">
                            <p className="project-skill">PYTHON</p>
                            <p className="project-skill">DISCORD.PY</p>
                            <p className="project-skill">MATPLOTLIB</p>
                            <p className="project-skill">FANDOM.PY</p>
                        </div>
                    </div>
                </div>
                <div className="project">
                    <a href="https://arena-breakout.fandom.com/wiki/Arena_Breakout_Wiki" target="_blank" className="project-thumbnail">
                        <img src={ab_fandom} alt="weather_app" />
                    </a>
                    <div className="project-content">
                        <div className="project-title">
                            <h2>Arena Breakout Fandom</h2>
                            <div className="project-hyperlinks">
                                <a href="https://arena-breakout.fandom.com/wiki/Arena_Breakout_Wiki" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M440-280H280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h160v80H280q-50 0-85 35t-35 85q0 50 35 85t85 35h160v80ZM320-440v-80h320v80H320Zm200 160v-80h160q50 0 85-35t35-85q0-50-35-85t-85-35H520v-80h160q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H520Z"/></svg></a>
                            </div>
                        </div>
                        <div className="project-description">
                            <p>I had created the fandom wiki on mediawiki platform of the game arena breakout by morefun studios which is a tencent studio</p>
                        </div>
                        <div className="project-skills">
                            <p className="project-skill">HTML</p>
                            <p className="project-skill">CSS</p>
                            <p className="project-skill">WIKIA</p>
                        </div>
                    </div>
                </div>
                <div className="project">
                    <a href="https://vercel-django-crud-web-app.vercel.app/" target="_blank" className="project-thumbnail">
                        <img src={crud_app} alt="weather_app" />
                    </a>
                    <div className="project-content">
                        <div className="project-title">
                            <h2>CRUD WebApp</h2>
                            <div className="project-hyperlinks">
                                <a href="https://vercel-django-crud-web-app.vercel.app/" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M440-280H280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h160v80H280q-50 0-85 35t-35 85q0 50 35 85t85 35h160v80ZM320-440v-80h320v80H320Zm200 160v-80h160q50 0 85-35t35-85q0-50-35-85t-85-35H520v-80h160q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H520Z"/></svg></a>
                                <a href="https://github.com/RiturajAgrahari/Django-CRUD-WebApp" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/></svg></a>
                            </div>
                        </div>
                        <div className="project-description">
                            <p>CRUD (create, read, update, delete), now use these feature to manage your community members information</p>
                        </div>
                        <div className="project-skills">
                            <p className="project-skill">DJANGO</p>
                            <p className="project-skill">HTML</p>
                            <p className="project-skill">CSS</p>
                            <p className="project-skill">BOOTSTRAP</p>
                        </div>
                    </div>
                </div>
                <div className="project">
                    <a href="https://missionevo.fandom.com/wiki/MISSION_EVO_Wiki" target="_blank" className="project-thumbnail">
                        <img src={me_fandom} alt="weather_app" />
                    </a>
                    <div className="project-content">
                        <div className="project-title">
                            <h2>Mission Evo Fandom</h2>
                            <div className="project-hyperlinks">
                                <a href="https://missionevo.fandom.com/wiki/MISSION_EVO_Wiki" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M440-280H280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h160v80H280q-50 0-85 35t-35 85q0 50 35 85t85 35h160v80ZM320-440v-80h320v80H320Zm200 160v-80h160q50 0 85-35t35-85q0-50-35-85t-85-35H520v-80h160q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H520Z"/></svg></a>
                            </div>
                        </div>
                        <div className="project-description">
                            <p>I had created the fandom wiki on mediawiki platform of the game Mission Evo by Nuverse</p>
                        </div>
                        <div className="project-skills">
                            <p className="project-skill">HTML</p>
                            <p className="project-skill">CSS</p>
                            <p className="project-skill">WIKIA</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Projects;