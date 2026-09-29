import "../styles/projects.css";

const PROJECT_SECTIONS = [
    {
        category: "Robotics Software",
        projects: [
            {
                title: "4 DOF Robotic Arm for Ball Sorting",
                intro: "...",
                date: "August 2025 - October 2025",
                description: "...",
                links: [
                    {
                        label: "...",
                        url: "..."
                    }
                ],
                media: "..."
            },
            {
                title: "Mock Garbage Collection Robot",
                intro: "...",
                date: "March 2025 - May 2025",
                description: "...",
                links: [
                    {
                        label: "...",
                        url: "..."
                    }
                ],
                media: "..." 
            },
            {
                title: "Mock Pick-and-Place Warehouse Robot",
                intro: "...",
                date: "January 2025 - March 2025",
                description: "...",
                links: [
                    {
                        label: "...",
                        url: "..."
                    }
                ],
                media: "..."
            }
        ]
    },
    {
        category: "Firmware",
        projects: [
            {
                title: "Snake Game on Tiva C Board using FreeRTOS",
                intro: "...",
                date: "October 2025 - December 2025",
                description: "...",
                links: [
                    {
                        label: "...",
                        url: "..."
                    }
                ],
                media: "..."
            }
        ]
    },
    {
        category: "Printed Circuit Boards",
        projects: [
            {
                title: "Power Distribution and Sensor Hub PCB",
                intro: "...",
                date: "October 2025 - November 2025",
                description: "...",
                links: [
                    {
                        label: "...",
                        url: "..."
                    }
                ],
                media: "..."
            },
            {
                title: "LED Dice & Temperature Sensor PCB",
                intro: "...",
                date: "October 2024 - December 2024",
                description: "...",
                links: [
                    {
                        label: "...",
                        url: "..."
                    }
                ],
                media: "..."
            }
        ]
    },
    {
        category: "General Software",
        projects: [
            {
                title: "ShopComp.online Web Application",
                intro: "...",
                date: "October 2025 - December 2025",
                description: "...",
                links: [
                    {
                        label: "...",
                        url: "..."
                    }
                ],
                media: "..."
            }
        ]
    }
]

export default function Projects() {
    return (
        <main className="projects">
            <header className="projects-header">
                <h1>Projects</h1>
            </header>

            {PROJECT_SECTIONS.map((cat) => (
                <section key={cat.category} className="projects-category">
                    <h2>{cat.category}</h2>

                    <div className="projects-list">
                        {cat.projects.map((project) => (
                            <article key={project.title} className="projects-item">
                                <header>
                                    <div className="projects-titleRow">
                                        <h3>{project.title}</h3>
                                        <p className="projects-date">{project.date}</p>
                                    </div>
                                    <p className="projects-intro">{project.intro}</p>
                                </header>

                                <p className="projects-description">{project.description}</p>

                                {project.links.length > 0 && (
                                    <ul className="projects-links">
                                        {project.links.map((link) => (
                                            <li key={link.url}>
                                                <a
                                                    href={link.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    {link.label}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </article>
                        ))}
                    </div>
                </section>
            ))}
        </main>
    );
}