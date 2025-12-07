import { ArrowDown } from "lucide-react"

export const MyBackground = () => {
    return <section 
    id="hero" 
    className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
        <div className="container max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center"></div>
        {/* Top My picture */}
            <div className="flex items-center opacity-0 animate-fade-in-delay-3 mb-8">
                <img 
                src="/mypic.jpeg" 
                alt="Masahiro Togasaki"
                className="w-40 h-40 md:w-80 md:h-80 rounded-2xl shadow-lg object-cover" />
            </div>


        {/* Bottom side - About my background */}
            <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl front-bold tracking-tight">
                    <span className="opacity-0 animate-fade-in">Hi, My name is </span>
                    <span className="text-primary opacity-0 animate-fade-in-delay-1 ">Masahiro </span>
                    <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">Togasaki</span>
                </h1>

                <p className=" text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                    I created web applications with modern stacks. <br/>
                    My passion for creating full-stack software makes me contribute <br/>
                    to continuously improving developer experiences.
                </p>

                <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                    <a href="#works" className="cosmic-button">
                        View My Work
                    </a>
                </div>
            </div>



            {/* Scroll Section */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
                <ArrowDown className="h-5 w-5 text-primary"/>
            </div>
    </section>

}