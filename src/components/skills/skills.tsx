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
                    {/* <div className="divide-three"> */}

                        <div className="language">
                            <h1>Languages</h1>
                            <div className="skill-logos">
                                <div className="logo">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="python-logo" title="Python"/> 
                                    <p>Python</p>
                                </div>
                                <div className="logo">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="html-logo" title="HTML"/>
                                    <p>HTML</p>
                                </div>
                                <div className="logo">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="css-logo" title="CSS"/>
                                    <p>CSS</p>
                                </div>
                                <div className="logo">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="ts-logo" title="Typescript"/>
                                    <p>Typescript</p>
                                </div>
                            </div>
                        </div>
                        <div className="dbms">
                            <h1>RDBMS</h1>
                            <div className="skill-logos">
                                <div className="logo">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySql-logo" title="MySql"/>
                                    <p>MySql</p>
                                </div>
                            </div>

                        </div>
                        <div className="version-control">
                            <h1>Version Control</h1>
                            <div className="skill-logos">
                                <div className="logo">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="git-logo" title="Git"/>
                                    <p>Git</p>
                                </div>
                                <div className="logo">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="github-logo" title="Github"/>
                                    <p>Github</p>
                                </div>
                            </div>
                        </div>

                    {/* </div> */}
                    {/* <div className="divide-three"> */}


                        <div className="frameworks">
                            <h1>Frameworks</h1>
                            <div className="skill-logos">
                                <div className="logo">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" alt="django-logo" title="Django"/>
                                    <p>Django</p>
                                </div>
                                <div className="logo">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg" alt="vite-logo" title="Vite"/>
                                    <p>Vite</p>
                                </div>
                                <div className="logo">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="react-logo" title="React"/>
                                    <p>React</p>
                                </div>
                                <div className="logo">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/djangorest/djangorest-original.svg" alt="django-rest-logo" title="Django Rest FrameWork"/>
                                    <p>DRF</p>
                                </div>
                                <div className="logo">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg" alt="matplotlib-logo" title="Matplotlib" />
                                    <p>Matplotlib</p>
                                </div>
                            </div>
                        </div>
                        <div className="ide">
                            <h1>IDE</h1>
                            <div className="skill-logos">
                                <div className="logo">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pycharm/pycharm-original.svg" alt="pycharm-logo" title="Pycharm"/>
                                    <p>Pycharm</p>
                                </div>
                                <div className="logo">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="vs-code-logo" title="VS Code"/>
                                    <p>VS Code</p>
                                </div>
                            </div>
                        </div>
                        <div className="extra">
                            <h1>Extra</h1>
                            <div className="skill-logos">
                                <div className="logo">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" alt="linux-logo" title="Linux/Ubuntu"/>
                                    <p>Linux</p>
                                </div>
                                <div className="logo">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" alt="vercel-logo" title="Vercel"/>
                                    <p>Vercel</p>
                                </div>
                                <div className="logo">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg" alt="nginx-logo" title="Nginx"/>
                                    <p>Nginx</p>
                                </div>
                                <div className="logo">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg" alt="blender-logo" title="Blender"/>
                                    <p>Blender</p>
                                </div>
                                <div className="logo">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gimp/gimp-original.svg" alt="gimp-logo" title="Gimp"/>
                                    <p>Gimp</p>
                                </div>
                            </div>
                        </div>

                    {/* </div> */}
                </div>
            </div>
        </div>
    )
}

export default Skills;