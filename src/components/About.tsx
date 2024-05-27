import { Separator } from "@/components/ui/separator"
import { Button } from "./ui/button"

const About = () => {

    const skills: Array<string> = ["HTML", "CSS", "Javascript", "React js", "Node js", "Express js", "Next js", "MongoDB", "Git"]

    return (
        <section id="About" className="flex flex-col bg-gray-300 min-h-[100vh]">
            <h1 className="mx-auto text-4xl font-bold uppercase mt-12">About Me</h1>
            <Separator className="max-w-8 h-2 mx-auto rounded-sm bg-gray-950 my-6" />

            <p className="mx-auto max-w-[80vw] text-xl text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto esse, magni dolore expedita quos doloribus quisquam culpa. Ducimus, assumenda. Possimus cum explicabo ut blanditiis ipsam? Veniam fugiat optio tenetur.</p>

            <div className="flex justify-around mt-10">
                <div className="flex flex-col w-[35vw]">
                    <h1 className="text-3xl font-bold mt-12">Get to know me!</h1>
                    <p className="text-xl mt-8">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem ipsum ea reprehenderit ab mollitia, dolorem repellat accusamus voluptates, cupiditate possimus excepturi magni expedita illo. Inventore numquam suscipit libero tempora error deserunt, eaque molestias nam autem tenetur voluptatibus veritatis quas sapiente?</p>
                    <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus perspiciatis reiciendis itaque quam dolorem nam culpa accusantium, aut corporis, nobis expedita, odit veritatis. Fuga eius nostrum provident?</p>
                    <Button className="w-40 my-10">Contact</Button>
                </div>
                <div className="w-[35vw]">
                    <h1 className="mx-auto text-3xl font-bold mt-12">My Skills</h1>
                    <div className="flex gap-4 flex-wrap mt-8">
                        {
                            skills.length && skills.map((skill, index) =>
                                <div key={index} className="bg-gray-400 px-6 py-3 rounded-md font-medium text-gray-600">{skill}</div>
                            )
                        }
                    </div>
                </div>
            </div>

        </section>
    )
}

export default About
