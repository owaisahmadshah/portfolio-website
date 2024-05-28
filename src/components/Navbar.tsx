import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface NavbarProps { }

const Navbar: React.FC<NavbarProps> = () => {
    return (
        <nav className='fixed w-[100vw] h-[12vh] top-0 z-10 px-10 py-5 flex md:flex-row items-center justify-center gap-2 md:justify-between bg-white'>
            <div className='flex items-center gap-5'>
                <a href="#home">
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>Owais</AvatarFallback>
                    </Avatar>
                </a>
                <a href="#home" className='text-xl font-bold hidden md:block'>Owais Ahmad Shah</a>
            </div>
            <ul className='flex justify-center items-center gap-4 md:gap-14 text-base font-semibold'>
                <li>
                    <a href="#home" className='hover-nav-items'>
                        HOME
                    </a>
                </li>
                <li>
                    <a href="#about" className='hover-nav-items'>
                        ABOUT
                    </a>
                </li>
                <li>
                    <a href="#projects" className='hover-nav-items'>
                        PROJECTS
                    </a>
                </li>
                <li>
                    <a href="#contact" className='hover-nav-items'>
                        CONTACT
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;