import { Separator } from "@/components/ui/separator"
import { Button } from "./ui/button"

const About = () => {

    const skills: Array<string> = ["HTML", "CSS", "Tailwind CSS", "JavaScript", "React.js", "Node.js", "Express.js", "Next.js", "MongoDB", "Git"]

    return (
        <section id="About" className="flex flex-col bg-gray-100 min-h-[100vh] pt-[12vh]">
            <h1 className="mx-auto text-4xl font-bold uppercase mt-12">About Me</h1>
            <Separator className="max-w-8 h-2 mx-auto rounded-sm bg-gray-950 my-6" />

            <p className="mx-auto max-w-[80vw]">I am a technology enthusiast with a strong passion for Information Technology. I am seeking opportunities to grow and refine my skills in this dynamic field. My expertise lies in web development, where I have developed various software applications using React.js, Express.js, and Next.js.</p>

            <p className="mx-auto max-w-[80vw] text-center my-3">I have a solid foundation in creating interactive and efficient web applications, and I am eager to expand my knowledge and tackle new challenges with the guidance of a skilled mentor.
            </p>

            <div className="flex flex-col items-center w-full md:flex-row md:justify-around mt-10">
                <div className="flex flex-col md:w-[35vw] mx-6 md:mx-0">
                    <h1 className="text-3xl font-bold mt-12">Get to Know Me!</h1>
                    <p className="mt-8">Hello! I am a passionate and dedicated individual with a deep interest in technology and innovation. From a young age, I have been fascinated by how technology can solve real-world problems and improve our daily lives. This curiosity led me to pursue a career in Information Technology, where I continually strive to learn and grow.</p>
                    <p className="mt-4">In my free time, I enjoy exploring new technologies, working on personal projects, and contributing to open-source communities. I believe in the power of collaboration and am always excited to connect with like-minded individuals who share my enthusiasm for tech. When I'm not coding, you can find me reading tech blogs, playing video games, or enjoying the outdoors.</p>
                    <Button className="w-40 my-10 bg-blue-500 hover:bg-blue-600">Contact</Button>
                </div>
                <div className="md:w-[35vw] mx-6 md:mx-0">
                    <h1 className="mx-auto text-3xl font-bold">My Skills</h1>
                    <div className="flex gap-4 flex-wrap mt-8">
                        {
                            skills.length && skills.map((skill, index) =>
                                <div key={index} className="bg-gray-300 px-6 py-3 rounded-md font-medium text-gray-600">{skill}</div>
                            )
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
