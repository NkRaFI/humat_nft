// import Header from '../../components/Header'
import React, { useEffect, useMemo, useState } from 'react'
// import { useWeb3 } from '@3rdweb/hooks'
// import { ThirdwebSDK } from '@3rdweb/sdk'
// import { useRouter } from 'next/router'
import NFTImage from '../../components/nft/NFTImage'
// import GeneralDetails from '../../components/nft/GeneralDetails'
import ItemActivity from '../../components/nft/ItemActivity'
// import Purchase from '../../components/nft/Purchase'
import {BsEyeFill, BsFillHeartFill} from "react-icons/bs";
import {Button, Card, Checkbox, Dropdown, Input} from "@nextui-org/react";
import SelectedDropdown from "../../components/Dropdown";
import {BsThreeDots} from "react-icons/bs"
import {AiFillFlag, AiFillSignal} from "react-icons/ai";
import {MdNotificationsActive} from "react-icons/md";
const style = {
  wrapper: `flex flex-col items-center container-lg `,
  container: `container p-6`,
  topContent: `flex`,
  nftImgContainer: `flex-1 mr-4`,
  detailsContainer: `flex-[2] ml-4`,
}

const Nft = () => {
  return (
    <div>
      {/* <Header /> */}
      <div className={style.wrapper}>
        <div className={style.container}>
          <div className={style.topContent}>
            <div className={style.nftImgContainer}>
              <NFTImage selectedNft={`https://images.unsplash.com/photo-1667222448667-f786c1e91c88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80`} />
            </div>
            <div className={style.detailsContainer}>
              <div className={`w-1/2`}>
                <SelectedDropdown />
              </div>
              <div className={`my-5 flex gap-3 items-center`}>
                <div className={`dark:text-white`}>Total</div>
                <Input  bordered  initialValue="" />
              </div>
              <div className="flex items-center mb-4">
                <input id="default-checkbox" type="checkbox" value=""
                       className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                  <label htmlFor="default-checkbox"
                         className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Confirm</label>
              </div>
              {/*<Purchase*/}
              {/*  isListed={router.query.isListed}*/}
              {/*  selectedNft={selectedNft}*/}
              {/*  listings={listings}*/}
              {/*  marketPlaceModule={marketPlaceModule}*/}
              {/*/>*/}
            </div>
          </div>
          <div className={`row mt-4 dark:text-white`}>
            <div className={`lg:col-8`}>
              <h2 className={`text-[28px] font-bold`}>You #190</h2>
              <p className={"mt-4"}><span className={`font-bold`}>Rank:</span>8,851 / 10,000</p>
              <div className={`mt-4 flex gap-20`}>
                <div>Owned by <a href="#" className={`text-[18px] font-bold text-blue-600`}>Humat NFT</a></div>
                <div className={`flex items-center gap-3`}>
                  <div><BsEyeFill fontSize={20}/></div>
                  <div className={`text-[18px] font-bold`}>117 Watch</div>
                </div>
                <div className={`flex items-center gap-3`}>
                  <div><BsFillHeartFill fontSize={20} /></div>
                  <div className={`text-[18px] font-bold`}>7 favorites</div>
                </div>
                <Dropdown>
                  <Dropdown.Trigger>
                    <div className={style.headerItem}> <BsThreeDots size={30} /> </div>
                  </Dropdown.Trigger>
                  <Dropdown.Menu color="">
                    <Dropdown.Item className={``} color="default" icon={<AiFillFlag size={`18px`} color={`#000`} />} key="report"><span className={`font-semibold`}>Report</span></Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <div className="row mt-10 ">
                <div className="lg:col-10">
                  <div className={`text-[18px] mb-10`}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque eaque et ipsam molestias mollitia odit ratione recusandae vero voluptates voluptatum!
                  </div>
                  <div className={``}>
                    <Card
                        isPressable
                        isHoverable
                        variant="bordered"
                        css={{ mw: "400px" }}
                    >
                      <Card.Header>
                        Best Offer
                      </Card.Header>
                      <Card.Body>
                        <h2 className={`font-bold text-[25px]`}>087144 USD</h2>
                        <Button className={`bg-blue-600 mt-2`} color={"primary"} size="xl">Make offer</Button>
                      </Card.Body>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ItemActivity />
        </div>
      </div>
    </div>
  )
}

export default Nft
