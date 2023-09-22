import TimeLineCounter from "./TimeLineCounter";
import Image from "next/image";


const Timeline = () => {
  return (
    <div className="timeline-container">
        <div className="text-center">
            <p className='text-3xl pb-5'>Timeline</p>
            <p className='text-md leading-8'>Here is the breakdown of the time we anticipate <br />using for the upcoming event.</p>
        </div>
        <div className="mt-20 timeline-wrapper relative">
            <div className='absolute -top-[20px] left-[180px] z-[-1]'>
                <Image src="/purple-star.svg" alt="star" width={20} height={20}/>
            </div>
            <div className="normal">
                <div className="content">
                    <p className="topic">Hackathon Announcement</p>
                    <p>The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register</p>
                </div>
                <TimeLineCounter number={1}/>
                <p className="date">November 18, 2023</p>
            </div>
            <div className="reverse">
                <div className="content">
                    <p className="topic">Teams Registration begins</p>
                    <p>Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register</p>
                </div>
                <TimeLineCounter number={2}/>
                <p className="date">November 18, 2023</p>
            </div>
            <div className="normal">
                <div className="content">
                    <p className="topic">Teams Registration ends</p>
                    <p>Interested Participants are no longer Allowed to register</p>
                </div>
                <TimeLineCounter number={3}/>
                <p className="date">November 18, 2023</p>
            </div>
            <div className="reverse">
                <div className="content">
                    <p className="topic">Announcement of the accepted teams and ideas</p>
                    <p>All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced</p>
                </div>
                <TimeLineCounter number={4}/>
                <p className="date">November 18, 2023</p>
            </div>
            <div className="normal">
                <div className="content">
                    <p className="topic">Getlinked Hackathon 1.0 Offically Begins</p>
                    <p>Accepted teams can now proceed to build their ground breaking skill driven solutions</p>
                </div>
                <TimeLineCounter number={5}/>
                <p className="date">November 18, 2023</p>
            </div>
            <div className="reverse">
                <div className="content">
                    <p className="topic">Demo Day</p>
                    <p>Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day</p>
                </div>
                <TimeLineCounter number={6}/>
                <p className="date">November 18, 2023</p>
            </div>
            <div className='absolute top-[42%] right-[50px] z-[-1]'>
                <Image src="/star.svg" alt="star" width={20} height={20}/>
            </div>
            <div className='absolute bottom-[60px] left-[20%] z-[-1]'>
                <Image src="/gray-star.svg" alt="star" width={20} height={20}/>
            </div>
        </div>
    </div>
  )
}

export default Timeline;