import { Button } from "./ui/button"
import { Separator } from "./ui/separator"

const Projects = () => {
    return (
        <section id="Projects" className="flex flex-col bg-gray-100 minh-[100vh]">
            <h1 className="mx-auto text-4xl font-bold uppercase mt-12">Projects</h1>
            <Separator className="max-w-8 h-2 mx-auto rounded-sm bg-gray-950 my-6" />
            <p className="w-[80vw] mx-auto text-center mb-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur iste veritatis maxime officiis enim sapiente beatae exercitationem ipsum delectus fugiat ullam, adipisci accusamus labore impedit totam perferendis at quidem voluptatum?</p>

            <div className="flex justify-around">
                <div className="w-[60vw] flex justify-center items-center">
                    {/* <img src="../../public/projectImage.jpeg" alt="Projec1" /> */}
                    <img src="" alt="Projec1" />
                </div>
                <div className="w-[40vw]">
                    <h1 className="text-3xl font-bold mt-12">Project 1</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis iure, aperiam earum, facilis numquam nesciunt excepturi velit laborum omnis libero impedit neque consequatur sed odio ex minima ut quibusdam? Quis, neque! Cumque inventore eos velit vero quo praesentium suscipit.</p>
                    <Button className="my-6 bg-blue-500">More about Project</Button>
                </div>
            </div>
            <div className="flex justify-around">
                <div className="w-[60vw] flex justify-center items-center">
                    {/* <img src="../../public/projectImage.jpeg" alt="Project2" /> */}
                    <img src="" alt="Project2" />
                </div>
                <div className="w-[40vw]">
                    <h1 className="text-3xl font-bold mt-12">Project 2</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis iure, aperiam earum, facilis numquam nesciunt excepturi velit laborum omnis libero impedit neque consequatur sed odio ex minima ut quibusdam? Quis, neque! Cumque inventore eos velit vero quo praesentium suscipit.</p>
                    <Button className="my-6 bg-blue-500">More about Project</Button>
                </div>
            </div>
            <div className="flex justify-around">
                <div className="w-[60vw] flex justify-center items-center">
                    {/* <img src="../../public/projectImage.jpeg" alt="Project3" /> */}
                    <img src="" alt="Project3" />
                </div>
                <div className="w-[40vw]" >
                    <h1 className="text-3xl font-bold mt-12">Project 3</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis iure, aperiam earum, facilis numquam nesciunt excepturi velit laborum omnis libero impedit neque consequatur sed odio ex minima ut quibusdam? Quis, neque! Cumque inventore eos velit vero quo praesentium suscipit.</p>
                    <Button className="my-6 bg-blue-500">More about Project</Button>
                </div>
            </div>
        </section>
    )
}

export default Projects
