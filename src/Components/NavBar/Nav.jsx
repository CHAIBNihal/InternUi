import React, { useState } from 'react'
import { menuList } from '../../Constants/Menu'
import { Bell, LogOut, UserRound, Menu } from 'lucide-react'
import SRM from "../../assets/Dashboard/SRM.png"

const Nav = () => {
    const [activeTab, setActiveTab] = useState("Accueil")
    const [mobileMenuOpen, setMobileMenuOpen] = useState(true)
    
    return (
        <div className='flex flex-wrap justify-between items-center  py-2'>
            {/* Logo ou Titre */}

            <div className='border border-black rounded-full p-3 mb-2 lg:mb-0'>
                <div className='text-lg font-medium'>
                    <img src={SRM} alt="" className='object-cover h-12 w-19' />
                </div>
            </div>

            {/* Bouton menu mobile */}
            <button
                className='lg:hidden backdrop-blur-xl rounded-full p-2 shadow'
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
                <Menu className='w-5 h-5' />
            </button>

            {/* Menu + Icônes */}
            <div className={`${mobileMenuOpen ? 'block' : 'hidden'} lg:flex flex-col lg:flex-row w-full lg:w-auto lg:flex-wrap gap-3 items-center mt-4 lg:mt-0`}>

                {/* Menu Principal */}
                <div className='backdrop-blur-xl bg-neutral-200 z-50 lg:rounded-full flex flex-col lg:flex-row gap-1 items-center shadow px-2 py-1 w-full lg:w-auto'>
                    {menuList.map((item, key) => (
                        <a
                            key={key}
                            href={item.link}
                            onClick={() => {
                                setActiveTab(item.text)
                                setMobileMenuOpen(false)

                            }}
                            className={`px-4 py-2 text-sm font-mono rounded-full transition-all duration-300 cursor-pointer w-full lg:w-auto text-center ${activeTab === item.text
                                    ? "bg-neutral-900 text-white"
                                    : "text-gray-800 hover:text-black"
                                }`}
                        >
                            {item.text}
                        </a>
                    ))}
                </div>

                {/* Groupe d'icônes */}
                <div className='flex flex-row gap-3 mt-3 lg:mt-0 w-full justify-center lg:w-auto'>
                    {/* Icône Notification */}
                    <div className='relative backdrop-blur-xl bg-neutral-200 z-50 rounded-full shadow py-3 px-3'>
                        <div className='relative'>
                            <Bell className='w-6 h-6' />
                            <div className='absolute -top-1 -right-0.5 p-1 w-fit h-4 bg-cyan-600  text-[10px] font-bold flex items-center justify-center rounded-full'>
                                5
                            </div>
                        </div>
                    </div>

                    {/* Profil */}
                    <div className='backdrop-blur-xl bg-neutral-200 z-50 rounded-full flex items-center gap-x-1 shadow py-2 px-3'>
                        <UserRound className='w-5 h-5' />
                        <p className='hidden sm:block text-sm'>Profile</p>
                    </div>

                    {/* Logout */}
                    <div className='backdrop-blur-xl bg-neutral-200 z-50 rounded-full flex items-center shadow py-2 px-3'>
                        <LogOut className='w-5 h-5' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav