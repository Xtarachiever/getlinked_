"use client";
import ReuseablePrizeCard from "./ReuseablePrizeCard";
import Image from "next/image";
import { motion } from "framer-motion";

const PrizesAward = () => {
  return (
    <div className="relative prize-wrapper">
      <div className="prize-header">
        <p className="text-xl md:text-3xl py-4">
          Prizes and <br />
          <span className="text-purpish-pink">Rewards</span>
        </p>
        <p className="pr-20 text-md md:text-lg">
          Highlight of the prizes or rewards for winners and <br />
          for participants.
        </p>
      </div>
      <div className="prizes-wrapper clear-both">
        <motion.div
          className="awards"
          initial={{y:100}}
          animate={{ y: 0 }}
          transition={{ duration: 2, yoyo: Infinity }}
        >
          <img src="/Award.svg" alt="awards" />
        </motion.div>
        <div className="flex w-[60%] items-start justify-center prizes">
          <ReuseablePrizeCard
            src={"/silver_medal.svg"}
            position={"2nd"}
            prize={"N300,000"}
            width="w-[80px]"
          />
          <ReuseablePrizeCard
            src={"/gold_medal.svg"}
            position={"1st"}
            prize={"N500,000"}
            bgColor={"bg-[rgba(144,58,255,0.12)]"}
            top={"-top-[120px]"}
            winner={true}
          />
          <ReuseablePrizeCard
            src={"/bronze_medal.svg"}
            position={"3rd"}
            prize={"N150,000"}
            width="w-[70px]"
            top={"-top-[40px]"}
          />
        </div>
        <motion.div
          className="absolute top-[42px] left-[50px] z-[-1]"
          animate={{ opacity: 1 }}
          initial={{ opacity: 0.6 }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <Image src="/star.svg" alt="star" width={20} height={20} />
        </motion.div>
        <motion.div
          className="absolute bottom-[42px] left-[50%] z-[-1]"
          animate={{ scale: 1.1 }}
          initial={{ scale: 0.3 }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <Image src="/gray-star.svg" alt="gray-star" width={20} height={20} />
        </motion.div>
        <motion.div
          className="absolute top-[50%] right-[50px] z-[-1]"
          animate={{ scale: 1.1 }}
          initial={{ scale: 0.8 }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <Image src="/purple-star.svg" alt="star" width={20} height={20} />
        </motion.div>
        <div className="absolute top-[0px] left-[50%] z-[-1]">
          <Image src="/gray-star.svg" alt="gray-star" width={25} height={20} />
        </div>
      </div>
    </div>
  );
};

export default PrizesAward;
