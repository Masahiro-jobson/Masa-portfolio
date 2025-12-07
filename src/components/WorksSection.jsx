import { ArrowRight, ExternalLink, Github } from "lucide-react"

const works =[
    {
        id: 1,
        title: "AI Email Reply Generator",
        description: "Integrated e-mail replying services with Gemini API",
        image: "/works/work1.png",
        tags: ["React", "Spring Boot", "Gemini API"],
        demoUrl: "https://verdant-sunburst-f21397.netlify.app/",
        githubUrl: "https://github.com/Masahiro-jobson/AI-email-writer-frontend"

    },
    {
        id: 2,
        title: "Simple Portfolio",
        description: "Modern and Simple design Portfolio",
        image: "/works/work2.png",
        tags: ["React", "Vite", "HTML/CSS"],
        demoUrl: "https://masahirotogasaki.netlify.app/",
        githubUrl: "https://github.com/Masahiro-jobson/simple-portfolio"

    },
    {
        id: 3,
        title: "Trello Clone Application",
        description: "Implementing CRUD methods with to-do list app",
        image: "/works/work3.png",
        tags: ["React", "HTML/CSS"],
        demoUrl: "https://trello-clone-to-do-list.vercel.app/",
        githubUrl: "https://github.com/Masahiro-jobson/Trello-clone-To-do-list-"

    }
]

export const WorksSection = () => {
    return <section id="works" className="py-24, px-4, relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Featured <span className="text-primary"> Works</span>
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Here are some of my recent works. Each work was built with a focus on
                user-friendly design and better performance.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {works.map((works, key) => (
                    <div
                    key={key}
                    className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                    >
                        <div className="h-48 overflow-hidden">
                            <img src={works.image} 
                            alt={works.title} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                            />
                        </div>
                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-1">
                                {works.tags.map((tag)=>(
                                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground">{tag}</span>
                                ))}
                            </div>

                            <h3 className="text-xl font-semibold mb-1">{works.title}</h3>
                            <p className="text-muted-foreground text-sm mb-4">{works.description}</p>
                            <div className="flex justify-between items-center">
                                <div className="flex space-x-3">
                                    <a 
                                    href={works.demoUrl} 
                                    target="_blank"
                                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                    >
                                        <ExternalLink size={20}/>
                                    </a>
                                    <a 
                                    href={works.githubUrl} 
                                    target="_blank"
                                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                    >
                                        <Github size={20}/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-12">
                <a 
                href="https://github.com/Masahiro-jobson"
                target="_blank" 
                className="cosmic-button w-fit flex items-center mx-auto gap-2">
                    Check more works <ArrowRight size={16}/>
                </a>


            </div>

        </div>
    </section>
}