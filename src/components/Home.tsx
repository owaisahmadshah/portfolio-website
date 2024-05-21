import { GitHubLogoIcon } from "@radix-ui/react-icons"
import { LinkedinIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

const Home = () => {
    return (
        <section id="Home" className="flex h-[60vh] bg-gray-200 min-h-[100vh]">
            <div className="w-[15vw] flex flex-col justify-center items-center gap-6">
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
                <Button asChild>
                    <a href="#projects" className="uppercase text-xl">Projects</a>
                </Button>
            </div>
        </section>
    )
}

export default Home
