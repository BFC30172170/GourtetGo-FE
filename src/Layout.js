import logodark from './logo-dark.svg';
import logolight from './logo-light.svg';
import { UserIcon, MoonIcon, ShoppingCartIcon, SunIcon } from '@heroicons/react/24/solid';
import useTheme from './hook/Theme';
import { useRef, useState } from 'react';

function HomePage({ children }) {
    const [theme, setTheme] = useTheme();
    const [userDropdown, setUserDropdown] = useState(false);
    const [cartDropdown, setCartDropdown] = useState();
    const cartRef = useRef();
    const userRef = useRef();
    const toggleTheme = (e) => {
        if (theme == 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    };

    const handleOffClick = (e) =>{
        if(cartRef && cartRef.current.contains(e.target)){
        }else{
            setCartDropdown(false);
        }
        if(userRef && userRef.current.contains(e.target)){

        }else{
            setUserDropdown(false);
        }


    }
    return (
        <div className="relative" onClick={(e) => {handleOffClick(e)}}>
            <header className="absolute inset-x-0 top-0 z-50 bg-gray-50 dark:bg-gray-900 transition duration-300">
                <nav className=" max-w-7xl mx-auto flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                    <div className="flex lg:flex-1">
                        <a href="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">GourmetGo</span>
                            {theme == 'light' ? <img className="h-8 w-auto" src={logolight} alt="" /> : <img className="h-8 w-auto" src={logodark} alt="" />}
                        </a>
                    </div>
                    {/* User */}
                    <div className="flex gap-6 text-gray-900 dark:text-gray-50 transition duration-300">
                        <div ref={userRef} className="text-sm font-semibold leading-6 relative" onClick={(e) => setUserDropdown(true)}><UserIcon className="w-6 h-6" />
                            <div class={`absolute ${userDropdown ? "block" : "hidden"}  p-2 bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300 right-0 z-10 mt-2 w-56 origin-top-right rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                                <div class="py-1" role="none">
                                    <a href="/login" class="block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Login</a>
                                    <a href="#" class="block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Signup</a>
                                </div>
                                <div class="py-1" role="none">
                                    <a href="#" class="block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Profile</a>
                                </div>
                            </div>
                        </div>

                        <div href="#" ref={cartRef} className="text-sm font-semibold leading-6" onClick={(e) => setCartDropdown(true)}><ShoppingCartIcon className="w-6 h-6" />
                            <div class={`absolute ${cartDropdown ? "block" : "hidden"} p-2 bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300 right-0 z-10 mt-2 w-56 origin-top-right rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                                <div class="py-1" role="none">
                                    <a href="#" class="block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Soup - £1.00</a>
                                    <a href="#" class="block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Bread - £0.79</a>
                                </div>
                                <div class="py-1" role="none">
                                    <button href="#" className="block px-4 py-2 text-sm bg-red-500 flex rounded-2xl mx-auto w-full text-center" role="menuitem" tabindex="-1" id="menu-item-2">Checkout</button>
                                </div>
                            </div>
                        </div>
                        <a href="#" className="text-sm font-semibold leading-6">{theme == 'light' ? <SunIcon className="w-6 h-6" onClick={(e) => { toggleTheme() }} /> : <MoonIcon className="w-6 h-6" onClick={(e) => { toggleTheme() }} />}</a>
                    </div>
                </nav>
            </header>

            {children}

            <footer className='bg-gray-50 dark:bg-gray-900 transition duration-300 h-32 w-full'>
                footer
            </footer>

        </div>

    )
}

export default HomePage;
