
import "../styles/projects.css";

type ProjectLink = {
    label: string;
    url: string;
};

type Project = {
    title: string;
    summary: string;
    tags: string[];
    date: string;
    context: string;
    links: ProjectLink[];
    media: {
        src: string; 
        alt: string
    }[];
};

type ProjectSection = {
    category: string;
    projects: Project[];
};

const PROJECT_SECTIONS: ProjectSection[] = [
    {
        category: "Robotic Systems",
        projects: [
            {
                title: "Autonomous Maze Exploration Robot",
                summary: "A Turtlebot running ROS2 that autonomously navigates a maze and localizes within it.",
                tags: [
                    "ROS 2",
                    "SLAM",
                    "Nav2/AMCL",
                    "Path Planning",
                    "Gazebo"
                ],
                date: "March 2026 - May 2026",
                context: "Unified Robotics IV: Navigation (RBE 3002)",
                links: [
                    {
                        label: "GitHub",
                        url: "https://github.com/Roguillo/RBE_3002"
                    }
                ],
                media:[
                    {src: "/test_image.png", alt: "photo"},
                    {src: "/test_image.png", alt: "photo"},
                    {src: "/test_image.png", alt: "photo"}
                ]
            }
        ]
    }
];

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
                                <div className="projects-gallery">
                                    {project.media.map((m, i) => (
                                        <img
                                            key={`${m.src}-${i}`}
                                            className="projects-media"
                                            src={m.src}
                                            alt={m.alt}
                                            loading="lazy"
                                        />
                                    ))}
                                </div>

                                <header>
                                    <h3>{project.title}</h3>
                                    <p className="projects-meta">
                                        <span className="projects-date">{project.date}</span>
                                        <span className="projects-context">{project.context}</span>
                                    </p>
                                </header>

                                <p className="projects-summary">{project.summary}</p>

                                <ul className="projects-tags">
                                    {project.tags.map((tag) => (
                                        <li key={tag}>{tag}</li>
                                    ))}
                                </ul>

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
