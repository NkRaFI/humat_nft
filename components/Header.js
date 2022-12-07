import Image from 'next/image'
import Link from 'next/link'
import React, {useState} from 'react'
import openseaLogo from '../assets/opensea.png'
import {AiOutlineSearch} from 'react-icons/ai'
import {CgProfile} from 'react-icons/cg'
import {MdOutlineAccountBalanceWallet} from 'react-icons/md'
import {Dropdown} from "@nextui-org/react";
import {AiOutlineHeart, AiOutlineUser, AiOutlineEye, AiFillSignal} from "react-icons/ai"
import {BsGrid3X3, BsGear, BsFillMoonStarsFill, BsSun, BsFillMoonFill} from "react-icons/bs"
import {MdNotificationsActive} from "react-icons/md"
import useDarkMode from "../hooks/useDarkMood";

const style = {
    wrapper: `dark:bg-[#04111d] bg-white w-screen px-[1.2rem] py-[0.8rem] flex 2xl:max-w-[1440px] 2xl:mx-auto`,
    logoContainer: `flex items-center cursor-pointer`,
    logoText: ` ml-[0.8rem] dark:text-white font-semibold text-2xl`,
    searchBar: `flex flex-1 mx-[0.8rem] w-max-[520px] items-center bg-gray-100 dark:bg-[#363840] rounded-[0.8rem] dark:hover:bg-[#4c505c]`,
    searchIcon: `text-[#8a939b] mx-3 font-bold text-lg`,
    searchInput: `h-[2.6rem] w-full border-0 bg-transparent outline-0 ring-0 px-2 pl-0 text-gray-600 dark:text-[#e6e8eb] dark:placeholder:text-[#8a939b]`,
    headerItems: ` flex items-center justify-end`,
    headerItem: `text-black px-4 font-bold text-gray-600 dark:text-[#c8cacd] dark:hover:text-white cursor-pointer`,
    headerIcon: `text-gray-600 dark:text-[#8a939b] text-3xl font-black px-4 dark:hover:text-white cursor-pointer`,
}

const Header = () => {
    const [colorTheme, setTheme] = useDarkMode();
    return (
        <div className={style.wrapper}>
            <Link href="/">
                <div className={style.logoContainer}>
                    {/* <Image src={openseaLogo} height={40} width={40} /> */}
                    <div
                        className="grid h-12 w-12 place-content-center rounded-full bg-blue-500 text-lg font-extrabold text-white">
                        <span>H</span>
                    </div>
                    <div className={style.logoText}>Humat NFT</div>
                </div>
            </Link>
            <div className={style.searchBar}>
                <div className={style.searchIcon}>
                    <AiOutlineSearch/>
                </div>
                <input
                    className={style.searchInput}
                    placeholder="Search items, collections, and accounts"
                />
            </div>
            <div className={style.headerItems}>
                <Link href="/collections/">
                    <div className={style.headerItem}> Collections</div>
                </Link>
                <Dropdown>
                    <Dropdown.Trigger>
                        <div className={style.headerItem}> Stats</div>
                    </Dropdown.Trigger>
                    <Dropdown.Menu color="">
                        <Dropdown.Item className={`mb-4`} color="default"
                                       icon={<AiFillSignal size={`18px`} color={`#000`}/>} key="learn"><span
                            className={`font-semibold`}>Rank</span></Dropdown.Item>
                        <Dropdown.Item className={``} color="default"
                                       icon={<MdNotificationsActive size={`18px`} color={`#000`}/>}
                                       key="favorites"><span className={`font-semibold`}>Activity</span></Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                    <Dropdown.Trigger>
                        <div className={style.headerItem}> Resources</div>
                    </Dropdown.Trigger>
                    <Dropdown.Menu color="">
                        <Dropdown.Item className={`mb-4`} color="default"
                                       icon={<AiOutlineUser size={`18px`} color={`#000`}/>} key="learn"><span
                            className={`font-semibold`}>Learn</span></Dropdown.Item>
                        <Dropdown.Item className={`mb-4`} color="default"
                                       icon={<AiOutlineHeart size={`18px`} color={`#000`}/>} key="favorites"><span
                            className={`font-semibold`}>Favorites</span></Dropdown.Item>
                        <Dropdown.Item className={`mb-4`} color="default"
                                       icon={<AiOutlineEye size={`18px`} color={`#000`}/>} key="watchlist"><span
                            className={`font-semibold`}>Watchlist</span></Dropdown.Item>
                        <Dropdown.Item className={`mb-4`} color="default"
                                       icon={<BsGrid3X3 size={`18px`} color={`#000`}/>} key="collection"><span
                            className={`font-semibold`}>My Collection</span></Dropdown.Item>
                        <Dropdown.Item className={``} color="default" icon={<BsGear size={`18px`} color={`#000`}/>}
                                       key="settings"><span className={`font-semibold`}>Settings</span></Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <div className={style.headerItem}> Create</div>
                <Dropdown>
                    <Dropdown.Trigger>
                        <div className={style.headerIcon}>
                            <CgProfile/>
                        </div>
                    </Dropdown.Trigger>
                    <Dropdown.Menu color="">
                        <Dropdown.Item className={`mb-4`} color="default"
                                       icon={<AiOutlineUser size={`18px`} color={`#000`}/>} key="learn"><span
                            className={`font-semibold`}>Profile</span></Dropdown.Item>
                        <Dropdown.Item className={`mb-4`} color="default"
                                       icon={<AiOutlineHeart size={`18px`} color={`#000`}/>} key="favorites"><span
                            className={`font-semibold`}>Favorites</span></Dropdown.Item>
                        <Dropdown.Item className={`mb-4`} color="default"
                                       icon={<AiOutlineEye size={`18px`} color={`#000`}/>} key="watchlist"><span
                            className={`font-semibold`}>Watchlist</span></Dropdown.Item>
                        <Dropdown.Item className={`mb-4`} color="default"
                                       icon={<BsGrid3X3 size={`18px`} color={`#000`}/>} key="collection"><span
                            className={`font-semibold`}>My Collection</span></Dropdown.Item>
                        <Dropdown.Item className={`mb-4`} color="default" icon={<BsGear size={`18px`} color={`#000`}/>}
                                       key="settings"><span className={`font-semibold`}>Settings</span></Dropdown.Item>

                        {colorTheme === "light" ? <Dropdown.Item icon={<BsFillMoonFill size={`18px`} color={`#000`}/>}>
                            <div onClick={()=>setTheme("light")} className={style.headerItem}><span className={`font-semibold text-black`}>Light</span>
                            </div>
                        </Dropdown.Item> : <Dropdown.Item icon={<BsSun size={`18px`} color={`#000`}/>}>
                            <div onClick={()=>setTheme("dark")} className={style.headerItem}><span className={`font-semibold text-black`}>Dark</span>
                            </div>
                        </Dropdown.Item>}
                    </Dropdown.Menu>
                </Dropdown>
                <div className={style.headerIcon}>
                    <MdOutlineAccountBalanceWallet/>
                </div>
            </div>
        </div>
    )
}

export default Header
