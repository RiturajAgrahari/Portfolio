import "./projects.css"
import { useRef, useState } from "react";
import weather_app from "../../static/project1.jpg"
import money_management_app from "../../static/project3.jpg"


const Projects = () => {

    const nextProject = useRef<string>("next")
    const previousProject = useRef<string>("previous")

    const projectImages = [weather_app, money_management_app]
    const projectTitles = ["Weather App", "Money Management App"]
    const projectDescriptions = [
        "Introducing Django Weather app, where you can check or compare weather of 2 cities. It shows 7 consequent days weather report. You can also toggle between light and dark mode as per your convenience.",
        "Introducing One of my learning project where i made an money management app where you can write your journal of you income and expenses in your own currenncy and manage your data easily"
    ]
    const projectSkills = ["HTML, CSS, Js, Django", "Django, HTML, CSS, Bootstrap, Js, Mysql"]
    const projectContributions = [
        [
            "I created the whole backend by myself using Django web framework.",
            "I used HTML, CSS, and bit of Js to design the frontend with theme toggle option.",
            "I used My Weather.org API to extract the data"
        ],
        [
            "I created the whole backend by myself using Django web framework.",
            "I used Bootstrap to design the frontend.",
            "I managed the data in Mysql rdbms"
        ]
    ]


    const HandleProjectNavigation = (index: number, ref: React.RefObject<string>) => {
        if (index <= projectImages.length - 2 && ref.current == "next") {
            setProjectIndex(index + 1)
        } else if (index > 0 && ref.current == "previous") {
            setProjectIndex(index - 1)
        }
    }


    const ProjectSection: React.RefObject<HTMLDivElement> = useRef(null);
    const [projectIndex, setProjectIndex] = useState(0)

    return (
        <div id="Projects" ref={ProjectSection}>      
            <h1>PROJECTS</h1>
            <div className="projects">
                <div className="previous-project" onClick={() => {HandleProjectNavigation(projectIndex, previousProject)}}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M453-241 213-481l240-240 42 42-198 198 198 198-42 42Zm253 0L466-481l240-240 42 42-198 198 198 198-42 42Z"/></svg>                    
                </div>
                <div className="project">
                    <div className="project-intro">
                        <img src={projectImages[projectIndex]} alt="weather_app" />
                    </div>
                    <div className="project-description">
                        <h1>{projectTitles[projectIndex]}</h1>
                        <p>
                            {projectDescriptions[projectIndex]}
                        </p>
                        <div className="project-data">
                            <div className="tech-used">
                                <h3>Tech Used :</h3>
                                <p>{projectSkills[projectIndex]}</p>
                            </div>
                            <div className="key-features">
                                <h3>What i did ?</h3>
                                <li>{projectContributions[projectIndex][0]}</li>
                                <li>{projectContributions[projectIndex][1]}</li>
                                <li>{projectContributions[projectIndex][2]}</li>
                            </div>
                            <div className="project-links">
                                <a href="">Github</a>
                                <a href="">URL</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="next-project" onClick={() => {HandleProjectNavigation(projectIndex, nextProject)}}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M411-481 213-679l42-42 240 240-240 240-42-42 198-198Zm253 0L466-679l42-42 240 240-240 240-42-42 198-198Z"/></svg>
                </div>
            </div>
        </div>
    )
}

export default Projects;