import { GitHubLogoIcon } from "@radix-ui/react-icons"
import { LinkedinIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

const Home = () => {
    return (
        <section id="Home" className="flex flex-col-reverse justify-center gap-14 md:gap-0 items-center md:flex-row bg-blue-500 min-h-[100vh] text-white">
            <div className="w-[15vw] flex md:flex-col justify-center items-center gap-6">
                <div className="social-media-icon">
                    <LinkedinIcon className="h-10 w-10 cursor-pointer" />
                </div>
                <div className="social-media-icon">
                    <GitHubLogoIcon className="h-10 w-10 cursor-pointer" />
                </div>
            </div>
            <div className="w-[80vw] flex flex-col justify-center items-center gap-6">
                <h1 className="text-4xl font-bold uppercase">Hello! My name is Owais Ahmad Shah</h1>
                <p className="text-2xl font-bold">I am a Full Stack Web Developer</p>
                <Button asChild variant={"secondary"} >
                    <a href="#projects" className="uppercase text-xl">Projects</a>
                </Button>
            </div>
        </section>
    )
}

export default Home
