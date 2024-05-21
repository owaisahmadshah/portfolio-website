import { GitHubLogoIcon } from "@radix-ui/react-icons"
import { LinkedinIcon } from "lucide-react"
import { Separator } from "./ui/separator"

const Footer = () => {
    return (
        <footer className='bg-black text-white min-h-[50vh] flex flex-col'>
            <div className="flex justify-around my-auto">
                <div>
                    <h1 className="text-2xl font-bold my-3">Owais Ahmad Shah</h1>
                    <p className="w-[40vw] ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos eos eum quis porro consequatur commodi animi saepe, quos debitis iure.</p>
                </div>
                <div className="flex flex-col">
                    <h1 className="uppercase text-2xl font-bold my-3">Social</h1>
                    <div className="flex gap-6">
                        <LinkedinIcon className="h-10 w-10 cursor-pointer" />
                        <GitHubLogoIcon className="h-10 w-10 cursor-pointer" />
                    </div>
                </div>
            </div>
            <Separator className="w-[75vw] mx-auto" />
            <p className="mx-auto my-auto text-sm">© Copyright 2024. Made by <strong className="underline">Owais Ahmad Shah</strong></p>
        </footer>
    )
}

export default Footer
