import "./skills.css"

const Skills = () => {
    return (
        <div id="Skills">
            <div className="skills">
                <div className="section-heading">
                    <div><h1>Gained Skills</h1></div>
                    <div className="fl"></div>
                </div>
                <div className="skills-data">
                    <div className="divide-three">

                        <div className="language">
                            <h1>Languages</h1>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="html-logo" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="css-logo" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="js-logo" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="ts-logo" />
                        </div>
                        <div className="dbms">
                            <h1>RDBMS</h1>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="" />

                        </div>
                        <div className="version-control">
                            <h1>Version Control</h1>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="git-logo" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="github-logo" />
                        </div>

                    </div>
                    <div className="divide-three">

                        <div className="ide">
                            <h1>IDE</h1>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pycharm/pycharm-original.svg" alt="" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="" />
                        </div>
                        <div className="frameworks">
                            <h1>Frameworks</h1>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" alt="djnago-logo" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg" alt="" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="react-logo" />
                        </div>
                        <div className="extra">
                            <h1>Extra</h1>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" alt="" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" alt="" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg" alt="" />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;