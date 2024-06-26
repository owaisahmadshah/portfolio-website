import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import logo from "@/assets/portfolio.jpeg"

interface NavbarProps { }

const Navbar: React.FC<NavbarProps> = () => {
    return (
        <nav className='fixed w-[100vw] h-[12vh] top-0 z-10 px-10 py-5 flex md:flex-row items-center justify-center gap-2 md:justify-between bg-white'>
            <div className='flex items-center gap-5'>
                <Avatar>
                    <AvatarImage src={logo ?? "https://github.com/shadcn.png"} />
                    <AvatarFallback>Owais</AvatarFallback>
                </Avatar>
                <a href="#Home" className='text-xl font-bold hidden md:block'>Owais Ahmad Shah</a>
            </div>
            <ul className='flex justify-center items-center gap-4 md:gap-14 text-sm md:text-base font-semibold'>
                <li>
                    <a href="#Home" className='hover-nav-items'>
                        HOME
                    </a>
                </li>
                <li>
                    <a href="#About" className='hover-nav-items'>
                        ABOUT
                    </a>
                </li>
                <li>
                    <a href="#Projects" className='hover-nav-items'>
                        PROJECTS
                    </a>
                </li>
                <li>
                    <a href="#Contact" className='hover-nav-items'>
                        CONTACT
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;