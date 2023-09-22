import React from 'react'
import ReuseablePrizeCard from './ReuseablePrizeCard';
import Image from 'next/image';

const PrizesAward = () => {
  return (
    <div className='relative'>
        <div className='prize-header'>
            <p className='text-xl md:text-3xl py-4'>Prizes and <br /><span className="text-purpish-pink">Rewards</span></p>
            <p className='pr-20 text-md md:text-lg'>Highlight of the prizes or rewards for winners and <br />for participants.</p>
        </div>
        <div className='prizes-wrapper clear-both'>
            <div className='awards'>
                <img src="/Award.svg" alt="awards"/>
            </div>
            <div className='flex w-[60%] items-start justify-center prizes'>
                <ReuseablePrizeCard src={'/silver_medal.svg'} position={'2nd'} prize={'N300,000'} width="w-[80px]"/>
                <ReuseablePrizeCard src={'/gold_medal.svg'} position={'1st'} prize={'N500,000'} bgColor={'bg-[rgba(144,58,255,0.12)]'} top={'-top-[120px]'} winner={true}/>
                <ReuseablePrizeCard src={'/bronze_medal.svg'} position={'3rd'} prize={'N150,000'} width="w-[70px]" top={'-top-[40px]'}/>
            </div>
            <div className='absolute top-[42px] left-[50px] z-[-1]'>
                <Image src="/star.svg" alt="star" width={20} height={20}/>
            </div>
            <div className='absolute bottom-[42px] left-[50%] z-[-1]'>
                <Image src="/gray-star.svg" alt="gray-star" width={20} height={20}/>
            </div>
            <div className='absolute top-[50%] right-[50px] z-[-1]'>
                <Image src="/purple-star.svg" alt="star" width={20} height={20}/>
            </div>
            <div className='absolute top-[0px] left-[50%] z-[-1]'>
                <Image src="/gray-star.svg" alt="gray-star" width={25} height={20}/>
            </div>
        </div>
    </div>
  )
}

export default PrizesAward