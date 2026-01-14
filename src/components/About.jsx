import { Briefcase, Code, User } from "lucide-react";

export const About = () => {
    return (
    <section id="about" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary"> Me</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">Enthusiastic Web Developer</h3>
                    <p className="text-muted-foreground">
                        I am an IT student who has learned programming languages for over 2 years by myself. 
                        I'm passionate about building full-stack software.
                    </p>
                    <p className="text-muted-foreground">
                        I worked not only my individual projects by myself but also team projects through internships experience. 
                        With extensive experience working in the early stages of product development, I solves problems with sustainability in mind.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button">
                            Reach Out
                        </a>

                        <a 
                        href="https://drive.google.com/file/d/15Gyt2VotqYiAhFLXeuf49jEPX6rM2X6W/view?usp=sharing"
                        target="_blank" 
                        className="cosmic-button"
                        >
                            Download CV
                        </a>

                    </div>

                </div>
                <div className="grid grid-cols-1 gap-6 ">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p=3 rounded-full bg-primary/10">
                             <Code className="h-6, w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> Web Development</h4>
                                <p className="text-muted-foreground"> Creating responsive websites and web applications with modern stacks.</p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p=3 rounded-full bg-primary/10">
                             <User className="h-6, w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> Teamwork Experience</h4>
                                <p className="text-muted-foreground"> Collaborating with other members and working on one project as one of team. </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p=3 rounded-full bg-primary/10">
                             <Briefcase className="h-6, w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> Requirement Management</h4>
                                <p className="text-muted-foreground"> Communicating with stakeholders and satisfying their requirements properly.</p>
                            </div>
                        </div>
                    </div>
                    
                    

                </div>

            </div>

        </div>
    </section>);
}