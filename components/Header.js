import Image from 'next/image'
import Link from 'next/link'
import React, {useState} from 'react'
import openseaLogo from '../assets/opensea.png'
import { AiOutlineSearch } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { MdOutlineAccountBalanceWallet } from 'react-icons/md'

const style = {
  wrapper: `dark:bg-[#04111d] w-screen px-[1.2rem] py-[0.8rem] flex 2xl:max-w-[1440px] 2xl:mx-auto`,
  logoContainer: `flex items-center cursor-pointer`,
  logoText: ` ml-[0.8rem] dark:text-white font-semibold text-2xl`,
  searchBar: `flex flex-1 mx-[0.8rem] w-max-[520px] items-center bg-gray-100 dark:bg-[#363840] rounded-[0.8rem] dark:hover:bg-[#4c505c]`,
  searchIcon: `text-[#8a939b] mx-3 font-bold text-lg`,
  searchInput: `h-[2.6rem] w-full border-0 bg-transparent outline-0 ring-0 px-2 pl-0 text-gray-600 dark:text-[#e6e8eb] dark:placeholder:text-[#8a939b]`,
  headerItems: ` flex items-center justify-end`,
  headerItem: `text-white px-4 font-bold text-gray-600 dark:text-[#c8cacd] dark:hover:text-white cursor-pointer`,
  headerIcon: `text-gray-600 dark:text-[#8a939b] text-3xl font-black px-4 dark:hover:text-white cursor-pointer`,
}

const Header = () => {
  const [isLight, setIsLight] = useState(false)
  const handleDarkModeToggle =()=>{
    setIsLight(!isLight)
    const html = document.getElementsByTagName('html')
    if(isLight){
      html[0].classList.remove('dark')
      html[0].classList.remove('bg-black')
    }
    if(!isLight){
      html[0].classList.add('dark')
      html[0].classList.add('bg-black')
    }
  }
  return (
    <div className={style.wrapper}>
      <Link href="/">
        <div className={style.logoContainer}>
          {/* <Image src={openseaLogo} height={40} width={40} /> */}
          <div className="h-12 w-12 rounded-full bg-blue-500 text-lg text-white font-extrabold grid place-content-center"><span>H</span></div>
          <div className={style.logoText}>Humat NFT</div>
        </div>
      </Link>
      <div className={style.searchBar}>
        <div className={style.searchIcon}>
          <AiOutlineSearch />
        </div>
        <input
          className={style.searchInput}
          placeholder="Search items, collections, and accounts"
        />
      </div>
      <div className={style.headerItems}>
        <Link href="/collections/0x66a576A977b7Bccf510630E0aA5e450EC11361Fa">
          <div className={style.headerItem}> Collections </div>
        </Link>
        <div className={style.headerItem}> Stats </div>
        <div className={style.headerItem}> Resources </div>
        <div className={style.headerItem}> Create </div>
        <div className={style.headerItem} onClick={handleDarkModeToggle}> Dark/Light</div>
        <div className={style.headerIcon}>
          <CgProfile />
        </div>
        <div className={style.headerIcon}>
          <MdOutlineAccountBalanceWallet />
        </div>
      </div>
    </div>
  )
}

export default Header
