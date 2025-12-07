import { AbilitySection } from "../components/AbilitySection";
import { About } from "../components/About";
import { Background } from "../components/Background";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { MyBackground } from "../components/MyBackground";
import { NavBar } from "../components/NavBar";
import { ThemeToggle } from "../components/ThemeToggle";
import { WorksSection } from "../components/WorksSection";

export const Home = () =>{
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        
        {/* Theme Toggle -> To change light and dark mode */}
        <ThemeToggle/>

        {/* Background Effects -> Animation of Wall paper */}
        <Background/>

        {/* NavBar -> Top buttons to navigate each part of portfolio */}
        <NavBar/>

        {/* Main Content  */}
        <main>
            <MyBackground/>
            <About/>
            <AbilitySection/>
            <WorksSection/>
            <ContactSection/>
        </main>

        {/* Footer  */}
        <Footer/>

    </div>;
};