import React from 'react';
import Slider from 'react-slick'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import collectible from '../assets/images/Collectible-items.png';
import artwork from '../assets/images/Artwork.png';
import eventTickets from '../assets/images/Event-Tickets.png';
import musicAndMedia from '../assets/images/NFT-Music.png';
import gaming from '../assets/images/Gaming.png';
import sport from '../assets/images/Big-Sport-Moments.png';
// import { Swiper, SwiperSlide } from 'swiper/react';

const NotableDrop = () => {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1
  // };
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  const carouselData = [
    { id: 1, cat: 'Collectible', img: 'https://justcreative.com/wp-content/uploads/2022/02/Collectible-items.png' },
    { id: 2, cat: 'Artwork', img: 'https://justcreative.com/wp-content/uploads/2022/02/Artwork.png' },
    { id: 3, cat: 'Event Tickets', img: 'https://justcreative.com/wp-content/uploads/2022/02/Event-Tickets.png' },
    { id: 4, cat: 'Music and media', img: 'https://justcreative.com/wp-content/uploads/2022/02/NFT-Music.png' },
    { id: 5, cat: 'Gaming ', img: 'https://justcreative.com/wp-content/uploads/2022/02/Gaming.png' },
    { id: 6, cat: 'Sport ', img: 'https://justcreative.com/wp-content/uploads/2022/02/Big-Sport-Moments.png' },
  ]
  let slideCount = 1;
  return (
    <div>
      <section className="custom-container bg-blue-500 py-12">
        <Splide options={{
          type: 'loop',
          padding: '20%',
          perPage: 3,
          perMove: 1,
          padding: { left: '10%', right: '10%' },
          gap: '1rem',
          focus: 'center',
        }} aria-label="My Favorite Images">

          {/* <SplideSlide className='bg-white grid place-content-center h-52'>
            <span className='text-3xl font-bold'>{slideCount++}</span>
          </SplideSlide>
          <SplideSlide className='bg-white grid place-content-center h-52'>
            <span className='text-3xl font-bold'>{slideCount++}</span>
          </SplideSlide>
          <SplideSlide className='bg-white grid place-content-center h-52'>
            <span className='text-3xl font-bold'>{slideCount++}</span>
          </SplideSlide>
          <SplideSlide className='bg-white grid place-content-center h-52'>
            <span className='text-3xl font-bold'>{slideCount++}</span>
          </SplideSlide>
          <SplideSlide className='bg-white grid place-content-center h-52'>
            <span className='text-3xl font-bold'>{slideCount++}</span>
          </SplideSlide>
          <SplideSlide className='bg-white grid place-content-center h-52'>
            <span className='text-3xl font-bold'>{slideCount++}</span>
          </SplideSlide> */}

          {
            carouselData?.map(item => (
              <SplideSlide key={item.id} className='block relative h-52 cursor-pointer'>
                <img className='w-full h-full' src={item.img} alt="" />
                <p className='absolute w-full bottom-0 left-0 p-2 bg-gradient-to-t from-gray-800'><span className='text-xl font-bold text-white'>{item?.cat}</span></p>
              </SplideSlide>
            ))
          }

        </Splide>
      </section>
      <section className='custom-container mt-28 px-8'>
        <h3 className='text-center text-3xl font-semibold mb-8 dark:text-white'>Notable Drops</h3>
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-5">
          <div className='col-span-4 cursor-pointer relative rounded-xl overflow-hidden'>
            <img src='https://openseauserdata.com/static/promocards/CloudWalker.png' alt="" />
            {/* <div className='absolute bottom-0 left-0 w-full text-white bg-gradient-to-b bg-black/[0.5] py-2 px-3'>
              <p className='text-2xl font-semibold mb-2'>AI Labs Cloud Walkers</p>
              <p className='text-xl'>333 Cloud Walkers</p>
            </div> */}
          </div>
          <div className='col-span-4 cursor-pointer relative rounded-xl overflow-hidden'>
            <img src='https://openseauserdata.com/static/promocards/LAConfidential.png' alt="" />
            {/* <div className='absolute bottom-0 left-0 w-full text-white bg-gradient-to-b bg-black/[0.5] py-2 px-3'>
              <p className='text-2xl font-semibold mb-2'>AI Labs Cloud Walkers</p>
              <p className='text-xl'>333 Cloud Walkers</p>
            </div> */}
          </div>
          <div className='col-span-4 cursor-pointer relative rounded-xl overflow-hidden'>
            <img src='https://openseauserdata.com/static/promocards/clonex_promocard3_squooshed.jpg' alt="" />
            {/* <div className='absolute bottom-0 left-0 w-full text-white bg-gradient-to-b bg-black/[0.5] py-2 px-3'>
              <p className='text-2xl font-semibold mb-2'>AI Labs Cloud Walkers</p>
              <p className='text-xl'>333 Cloud Walkers</p>
            </div> */}
          </div>
        </div>
      </section>

      <section className='custom-container mt-36 px-8'>
        <h3 className='text-center text-3xl font-semibold mb-12'><span className='dark:text-white'>Top collections over</span> <span className='text-blue-600'>last 24 hours</span></h3>
        <div className="grid grid-cols-1 xl:grid-cols-12 grid-rows-4 gap-x-3 divide-y">

          {/* <div className="col-span-4 bg-gray-700 text-white rounded-md p-2">
            <div className="grid grid-cols-12 items-center">
              <div className='col-span-3 flex gap-2 items-center'>
                <span className='col-span-1 text-[20px] text-white'>1</span>
                <img className='rounded-full object-cover w-[50%]' src="https://i.seadn.io/gcs/files/998b7cb32192509c7db87f74f8043d5f.jpg?auto=format&dpr=1&w=50" alt="" />
              </div>
              <div className='col-span-6 flex flex-col gap-1'>
                <p className='text-lg font-semibold'>y00ts mint t00b</p>
                <p>Floor price: <span className="font-semibold">133.33</span></p>
              </div>
              <div className='col-span-3 justify-self-end text-right flex flex-col gap-1'>
                <p className='text-green-500'>+3.7%</p>
                <p className='font-semibold'>22,354.21</p>
              </div>
            </div>
          </div> */}
          {
            arr.map((item, index) => (
              <div key={index} className="col-span-4 row-span-1 rounded-md p-2 hover:shadow-md hover:bg-gray-50 dark:bg-[#363840]">
                <div className="grid grid-cols-12 items-center">
                  <div className='col-span-3 flex gap-2 items-center'>
                    <span className='col-span-1 text-[20px]'>{++index}</span>
                    <img className='rounded-full object-cover w-[50%]' src="https://i.seadn.io/gcs/files/998b7cb32192509c7db87f74f8043d5f.jpg?auto=format&dpr=1&w=50" alt="" />
                  </div>
                  <div className='col-span-6 flex flex-col gap-1'>
                    <p className='text-lg font-semibold'>y00ts mint t00b</p>
                    <p>Floor price: <span className="font-semibold">133.33</span></p>
                  </div>
                  <div className='col-span-3 justify-self-end text-right flex flex-col gap-1'>
                    <p className='text-green-500'>+3.7%</p>
                    <p className='font-semibold'>22,354.21</p>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
        <div className="grid justify-center mt-10">
          <button className="bg-blue-500 text-white py-4 px-12 rounded-md text-xl">Go to Rankings</button>
        </div>
      </section>

      <section className="custom-container mt-48">
        <h3 className='text-center text-3xl font-semibold mb-12'><span>Create and sell your NFTs</span></h3>
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-y-10">
          <div className="col-span-3 text-center grid gap-3">
            <div className='flex justify-center'>
              <img src="https://opensea.io/static/images/icons/wallet.svg" alt="" />
            </div>
            <p className='text-xl font-semibold'>Set up your wallet</p>
            <div>
              <p className='text-lg'>Once you’ve set up your wallet of choice, connect it to OpenSea by clicking the wallet icon in the top right corner. Learn about the</p>
              <a className='text-lg font-semibold text-blue-500' href="#">wallets we support.</a>
            </div>
          </div>
          <div className="col-span-3 text-center grid gap-3">
            <div className='flex justify-center'>
              <img src="https://opensea.io/static/images/icons/collection.svg" alt="" />
            </div>
            <p className='text-xl font-semibold'>Create your collection</p>
            <p className='text-lg'>Click My Collections and set up your collection. Add social links, a description, profile & banner images, and set a secondary sales fee.</p>

          </div>
          <div className="col-span-3 text-center grid gap-3">
            <div className='flex justify-center'>
              <img src="https://opensea.io/static/images/icons/nft.svg" alt="" />
            </div>
            <p className='text-xl font-semibold'>Add your NFTs</p>
            <p className='text-lg'>Upload your work (image, video, audio, or 3D art), add a title and description, and customize your NFTs with properties, stats, and unlockable content.</p>

          </div>
          <div className="col-span-3 text-center grid gap-3">
            <div className='flex justify-center'>
              <img src="https://opensea.io/static/images/icons/sale.svg" alt="" />
            </div>
            <p className='text-xl font-semibold'>List them for sale</p>
            <p className='text-lg'>Choose between auctions, fixed-price listings, and declining-price listings. You choose how you want to sell your NFTs, and we help you sell them!</p>
          </div>
        </div>
      </section>

      <section className='custom-container mt-36 mb-10'>
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
          <div className="col-span-4 rounded-md shadow-lg overflow-hidden">
            <img className='w-full border-b' src="https://blogmigration.kinsta.cloud/wp-content/uploads/2022/02/image-13-300x200.png" alt="" />
            <div className="bg-white px-3 py-5 ">
              <p className="text-lg font-semibold">How to Easily Setup a MetaMask Wallet</p>
            </div>
          </div>
          <div className="col-span-4 rounded-md shadow-lg overflow-hidden">
            <img className='w-full border-b' src="https://blogmigration.kinsta.cloud/wp-content/uploads/2022/02/76edde93ea6402d5818fbc03767aeda0-300x200.jpg" alt="" />
            <div className="bg-white px-3 py-5 ">
              <p className="text-lg font-semibold">How to Fund MetaMask with ETH</p>
            </div>
          </div>
          <div className="col-span-4 rounded-md shadow-lg overflow-hidden">
            <img className='w-full border-b' src="https://blogmigration.kinsta.cloud/wp-content/uploads/2022/01/image-10-300x200.png" alt="" />
            <div className="bg-white px-3 py-5 ">
              <p className="text-lg font-semibold">How to Find an NFT You Love</p>
            </div>
          </div>

        </div>
      </section>

      {/* <footer className='custom-container bg-blue-500 h-72 mt-28 py-5'>
        <h3 className='text-3xl font-extrabold text-white tracking-wider'>HUMAT NFT</h3>
      </footer> */}

    </div>
  );
};

export default NotableDrop;