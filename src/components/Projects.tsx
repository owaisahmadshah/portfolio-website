import { chatImages } from "@/lib/getImages"
import { DisplayProjectImages } from "./DisplayImages"
import { Button } from "./ui/button"
import { Separator } from "./ui/separator"

interface Project {
    title: string
    description: string
    link?: string
    images?: Array<string>
}

const Projects = () => {

    const projects: Project[] = [
        {
            title: "Real Time Chat App",
            description: "A real time chat app developed using React.js, Next.js, Express.js and MongoDB. In this app you can create groups, there are two types of groups, in which one is personel groups where only two people will talk with each other, it would like be private chat but it is still a group, and the other one is group where multiple user can join and exit from the group. Currently it is not hosted but I would host it soon.",
            link: "https://github.com/owaisahmadshah/messenger",
            images: chatImages
        }
    ]

    return (
        <section id="Projects" className="flex flex-col bg-gray-100 minh-[100vh] pt-[12vh]">
            <h1 className="mx-auto text-4xl font-bold uppercase mt-12">Projects</h1>
            <Separator className="max-w-8 h-2 mx-auto rounded-sm bg-gray-950 my-6" />
            <p className="w-[80vw] mx-auto text-center mb-6">Welcome to my project portfolio! Here you'll find a showcase of my work, highlighting various projects that demonstrate my skills and experience in web development. Each project is a reflection of my commitment to building efficient, user-friendly, and innovative web applications. Feel free to explore and learn more about the projects I've worked on and the technologies I've utilized.</p>

            {
                projects?.length && projects.map((project) => <div className="flex justify-around flex-col md:flex-row">
                    <div className="md:w-[60vw] flex justify-center items-center">
                        <DisplayProjectImages images={project.images} />
                    </div>
                    <div className="md:w-[40vw] mx-6 md:mx-0">
                        <h1 className="text-3xl font-bold mt-12">{project.title}</h1>
                        <p className="md:mr-10">{project.description}</p>
                        {/* TODO: Added link to the button for the github repo of the project or any other thing */}
                        <Button className="my-6 bg-blue-500 hover:bg-blue-600">
                            <a href={project.link} target="_blank">More About Project</a>
                        </Button>
                    </div>
                </div>)
            }
        </section>
    )
}

export default Projects
