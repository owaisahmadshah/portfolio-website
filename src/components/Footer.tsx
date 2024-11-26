import { GitHubLogoIcon } from "@radix-ui/react-icons"
import { LinkedinIcon } from "lucide-react"
import { Separator } from "./ui/separator"

const Footer = () => {
    return (
        <footer className='bg-black text-white min-h-[50vh] flex flex-col'>
            <div className="flex justify-around items-center flex-col md:flex-row my-auto">
                <div className="w-full md:w-auto">
                    <h1 className="text-2xl font-bold ml-10 my-3 md:ml-0">Owais Ahmad Shah</h1>
                    <p className="md:w-[40vw] w-[80vw] mx-auto">I am a passionate web developer dedicated to creating innovative and efficient web solutions. Connect with me on LinkedIn or check out my projects on GitHub.</p>
                </div>
                <div className="flex flex-col">
                    <h1 className="uppercase text-2xl font-bold my-3">Social Media</h1>
                    <div className="flex gap-6">
                        <a href="https://github.com/owaisahmadshah" target="_blank" rel="noopener noreferrer"><GitHubLogoIcon className="h-10 w-10 cursor-pointer" /></a>
                        <a href="https://www.linkedin.com/in/owais-ahmad-shah-272302254" target="_blank" rel="noopener noreferrer"><LinkedinIcon className="h-10 w-10 cursor-pointer" /></a>
                    </div>
                </div>
            </div>
            <Separator className="w-[75vw] mx-auto" />
            <p className="mx-auto my-auto text-sm">© Copyright 2024. Made by <strong className="underline">Owais Ahmad Shah</strong></p>
        </footer>
    )
}

export default Footer
