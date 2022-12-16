import React from 'react';
import styles from "../../styles/collection.module.scss"
import Image from "next/image"
import {BsGlobe, BsGrid, BsGrid1X2, BsGrid3X3, BsThreeDots} from "react-icons/bs"
import {FaDiscord} from "react-icons/fa"
import {AiFillFlag, AiOutlineBars, AiOutlineSearch, AiOutlineStar} from "react-icons/ai"
import {FiInstagram} from "react-icons/fi"
import {BiShareAlt} from "react-icons/bi"
import {Button, Dropdown, Text} from "@nextui-org/react";
import Link from "next/link";
import SelectedDropdown from "../../components/Dropdown";
import NftImage from "../../components/nft-image/nft-image";
import NFTCard from "../../components/NFTCard";
const Collection = () => {

    let collection = [
        {
            id: 1,
            image: "https://picsum.photos/id/237/200/300",
            name: "Sister#89",
            price: "1.200 ETH",
            last_sale: "0.789 ETH"
        },
        {
            id: 2,
            image: "https://picsum.photos/seed/picsum/200/300",
            name: "Sister#90",
            price: "1.200 ETH",
            last_sale: "0.789 ETH"
        },
        {
            id: 3,
            image: "https://picsum.photos/200/300?grayscale",
            name: "Sister#901",
            price: "1.200 ETH",
            last_sale: "0.789 ETH"
        },
        {
            id: 3,
            image: "https://picsum.photos/id/1/200/300",
            name: "Sister#901",
            price: "1.200 ETH",
            last_sale: "0.789 ETH"
        }

    ]
    let renderCollection = null;
    if (collection.length) {
        renderCollection = collection.map((item, index) => {
            return (
                <NFTCard key={index} nftItem={item} title={item.name} price={item.price}/>
            )
        })
    }
    const style = {
        searchBar: `flex items-center w-5/12  w-max-[520px] items-center bg-gray-100 dark:bg-[#363840] rounded-[0.8rem] dark:hover:bg-[#4c505c]`,
        searchIcon: `text-[#8a939b] mx-3 font-bold text-lg`,
        searchInput: `h-[2.6rem] w-full border-0 bg-transparent outline-0 ring-0 px-2 pl-0 text-gray-600 dark:text-[#e6e8eb] dark:placeholder:text-[#8a939b]`,
    }
    return (<>
        <div className={[styles.collection_hero_wrapper,"dark:bg-bg-black"].join(" ")}
             style={{width: "100%", height: "300px", position: "relative"}}>
            <Image alt={`cover`} layout={"fill"} objectFit={`cover`} src="/bg.png" sizes="100vw"/>
            <div className={styles.profile_image}>
                <Image src="/bg.png" height={168} width={168} objectFit={`cover`}/>
            </div>
        </div>
        <div className="container-fluid dark:text-white text-black">
            <div className={`flex justify-between items-center `}>
                <div>
                    <h2 className={`font-[600] text-[30px]`}>Summerbluess: Tarot Decks</h2>
                </div>
                <div className={`flex items-center gap-[45px]`}>
                    <div>
                        <BsGlobe size={20}/>
                    </div>
                    <div>
                        <FaDiscord size={20}/>
                    </div>
                    <div>
                        <FiInstagram size={20}/>
                    </div>
                    <div>
                        <AiOutlineStar size={20}/>
                    </div>
                    <div>
                        <BiShareAlt size={20}/>
                    </div>
                    <div>
                        <Dropdown>
                            <Dropdown.Trigger>
                                <div><BsThreeDots size={20}/></div>
                            </Dropdown.Trigger>
                            <Dropdown.Menu color="">
                                <Dropdown.Item className={``} color="default"
                                               icon={<AiFillFlag size={`18px`} color={`#000`}/>} key="report"><span
                                    className={`font-semibold`}>Report</span></Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
            </div>
            {/*    description start*/}
            <p><span>By</span> <Link href={`#`}><a className={`font-[600]`}>SummerbluessArt</a></Link></p>
            <div className={`text-[16px] w-10/12 mt-3`}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A assumenda at eaque esse exercitationem
                facere fugit natus, rem rerum similique?
            </div>
            {/*    filter start */}
            <div className={`flex  gap-5 items-center mt-4`}>
                <div className={style.searchBar}>
                    <div className={style.searchIcon}>
                        <AiOutlineSearch/>
                    </div>
                    <input
                        className={style.searchInput}
                        placeholder="Search by name attributes"
                    />

                </div>
                <div className={``}>
                    <SelectedDropdown hide={true}/>
                </div>
                <div className={`sort `}>
                    <Button.Group color={`red`} size="md" bordered>
                        <Button>
                            <AiOutlineBars className={`dark:text-white text:black`}/>
                        </Button>
                        <Button>
                            <BsGrid3X3 className={`dark:text-white text:black`}/>
                        </Button>
                        <Button><BsGrid className={`dark:text-white text:black`}/></Button>
                        <Button><BsGrid1X2 className={`dark:text-white text:black`}/></Button>

                    </Button.Group>
                </div>
                <div className={``}>
                    <Button auto bordered color="" css={{px: "$15", borderColor: 'gray'}}>
                        <Text color={`primary`}>Make It Offer</Text>
                    </Button>
                </div>
            </div>
            {/*    collection start*/}
            <div className={`flex flex-wrap mt-5`}>
                {renderCollection}
            </div>
            {/*    collection end*/}
        </div>
    </>);
};

export default Collection;