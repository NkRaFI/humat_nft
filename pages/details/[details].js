import React from 'react'
import {BsEyeFill,BsFillHeartFill} from "react-icons/bs"
import { Card,Button } from '@nextui-org/react';

const NFT = () => {
  return <div className="container-fluid">
    {/*details header*/}
    <div className={`row mt-4`}>
      <div className="lg:col-4">
        <img src="https://i.seadn.io/gae/Ta8Dfysb1t59YbIeRLZ-WH5h3yjMK2XgSTgEVBKzx9OOb5LdiAjMs7ihr5hcxtyU3am8unJD4qwXkTK4pHVP6fm2pww52uoKprDuzfQ?auto=format&w=1000" alt="image"/>
      </div>
      <div className={`lg:col-8`}>
       <h2 className={`text-[28px] font-bold`}>You #190</h2>
        <p className={"mt-4"}><span className={`font-bold`}>Rank:</span>8,851 / 10,000</p>
        <div className={`mt-4 flex gap-20`}>
          <div>Owned by <a href="#" className={`text-[18px] font-bold text-blue-600`}>Humat NFT</a></div>
          <div className={`flex items-center gap-3`}>
              <div><BsEyeFill fontSize={20}/></div>
              <div className={`text-[18px] font-bold`}>7 Watch</div>
          </div>
          <div className={`flex items-center gap-3`}>
              <div><BsFillHeartFill fontSize={20} /></div>
              <div className={`text-[18px] font-bold`}>7 favorites</div>
          </div>
        </div>
          <div className="row mt-10 ">
              <div className="lg:col-8">
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
  {/*  details header end*/}
      <div className="row mt-10">
          <div className="lg:col-3">
              <div
                  className="text-center mb-[70px] pr-[10px] cursor-pointer"
              >
                  <img className="hover:scale-105 ease-in duration-300"
                       width="350px"
                       height="270px"
                       src="https://i.seadn.io/gae/-ywuSmUHaA_R-yYihh5aJ6VXQY_F9M8_M0K3sQ-nw9eb3WoNzGJkDElzkLGlwOUhLMzA-y8sVuaj5s79Qsd9Ps7gkCzNm8KLw1AsJQ?auto=format&w=1000" alt=""/>
                  <p className="uppercase  text-[14px] mt-4 font-bold tracking-wider">
                      You #6703
                  </p>
              </div>
          </div>
          <div className="lg:col-3">
              <div
                  className="text-center mb-[70px] pr-[10px] cursor-pointer"
              >
                  <img className="hover:scale-105 ease-in duration-300"
                       width="350px"
                       height="270px"
                       src="https://i.seadn.io/gae/-ywuSmUHaA_R-yYihh5aJ6VXQY_F9M8_M0K3sQ-nw9eb3WoNzGJkDElzkLGlwOUhLMzA-y8sVuaj5s79Qsd9Ps7gkCzNm8KLw1AsJQ?auto=format&w=1000" alt=""/>
                  <p className="uppercase  text-[14px] mt-4 font-bold tracking-wider">
                      You #6703
                  </p>
              </div>
          </div>
          <div className="lg:col-3">
              <div
                  className="text-center mb-[70px] pr-[10px] cursor-pointer"
              >
                  <img className="hover:scale-105 ease-in duration-300"
                       width="350px"
                       height="270px"
                       src="https://i.seadn.io/gae/-ywuSmUHaA_R-yYihh5aJ6VXQY_F9M8_M0K3sQ-nw9eb3WoNzGJkDElzkLGlwOUhLMzA-y8sVuaj5s79Qsd9Ps7gkCzNm8KLw1AsJQ?auto=format&w=1000" alt=""/>
                  <p className="uppercase  text-[14px] mt-4 font-bold tracking-wider">
                      You #6703
                  </p>
              </div>
          </div>
          <div className="lg:col-3">
              <div
                  className="text-center mb-[70px] pr-[10px] cursor-pointer"
              >
                  <img className="hover:scale-105 ease-in duration-300"
                       width="350px"
                       height="270px"
                       src="https://i.seadn.io/gae/-ywuSmUHaA_R-yYihh5aJ6VXQY_F9M8_M0K3sQ-nw9eb3WoNzGJkDElzkLGlwOUhLMzA-y8sVuaj5s79Qsd9Ps7gkCzNm8KLw1AsJQ?auto=format&w=1000" alt=""/>
                  <p className="uppercase  text-[14px] mt-4 font-bold tracking-wider">
                      You #6703
                  </p>
              </div>
          </div>
          <div className="lg:col-3">
              <div
                  className="text-center mb-[70px] pr-[10px] cursor-pointer"
              >
                  <img className="hover:scale-105 ease-in duration-300"
                       width="350px"
                       height="270px"
                       src="https://i.seadn.io/gae/-ywuSmUHaA_R-yYihh5aJ6VXQY_F9M8_M0K3sQ-nw9eb3WoNzGJkDElzkLGlwOUhLMzA-y8sVuaj5s79Qsd9Ps7gkCzNm8KLw1AsJQ?auto=format&w=1000" alt=""/>
                  <p className="uppercase  text-[14px] mt-4 font-bold tracking-wider">
                      You #6703
                  </p>
              </div>
          </div>
          <div className="lg:col-3">
              <div
                  className="text-center mb-[70px] pr-[10px] cursor-pointer"
              >
                  <img className="hover:scale-105 ease-in duration-300"
                       width="350px"
                       height="270px"
                       src="https://i.seadn.io/gae/-ywuSmUHaA_R-yYihh5aJ6VXQY_F9M8_M0K3sQ-nw9eb3WoNzGJkDElzkLGlwOUhLMzA-y8sVuaj5s79Qsd9Ps7gkCzNm8KLw1AsJQ?auto=format&w=1000" alt=""/>
                  <p className="uppercase  text-[14px] mt-4 font-bold tracking-wider">
                      You #6703
                  </p>
              </div>
          </div>
          <div className="lg:col-3">
              <div
                  className="text-center mb-[70px] pr-[10px] cursor-pointer"
              >
                  <img className="hover:scale-105 ease-in duration-300"
                       width="350px"
                       height="270px"
                       src="https://i.seadn.io/gae/-ywuSmUHaA_R-yYihh5aJ6VXQY_F9M8_M0K3sQ-nw9eb3WoNzGJkDElzkLGlwOUhLMzA-y8sVuaj5s79Qsd9Ps7gkCzNm8KLw1AsJQ?auto=format&w=1000" alt=""/>
                  <p className="uppercase  text-[14px] mt-4 font-bold tracking-wider">
                      You #6703
                  </p>
              </div>
          </div>
          <div className="lg:col-3">
              <div
                  className="text-center mb-[70px] pr-[10px] cursor-pointer"
              >
                  <img className="hover:scale-105 ease-in duration-300"
                       width="350px"
                       height="270px"
                       src="https://i.seadn.io/gae/-ywuSmUHaA_R-yYihh5aJ6VXQY_F9M8_M0K3sQ-nw9eb3WoNzGJkDElzkLGlwOUhLMzA-y8sVuaj5s79Qsd9Ps7gkCzNm8KLw1AsJQ?auto=format&w=1000" alt=""/>
                  <p className="uppercase  text-[14px] mt-4 font-bold tracking-wider">
                      You #6703
                  </p>
              </div>
          </div>
      </div>
  </div>
}

export default NFT
