import PartnerSponsor from './PartnerSponsor';
import Privacy from './Privacy';
import PrizesAward from './PrizesAward';
import ReuseableTab from './ReuseableTab';
import Timeline from './Timeline';
import './styles.css';
import Image from 'next/image';

const Section = () => {
  return (
    <div>
        <div className="segment1">
            <div className="relative section1 mr-20">
                <div className='absolute top-[30px] left-[20px] z-[-1]'>
                    <Image src="/purple-star.svg" alt="star" width={20} height={20}/>
                </div>
                <img src="/The_big_idea.svg" alt="ideas"/>
                <div className="absolute bottom-0 right-0">
                    <img src="/arrow.svg" alt="arrow"/>
                </div>
            </div>
            <div className="section2 w-[52%] relative">
                <p className="text-3xl">Introduction to getlinked <br /><span className="text-purpish-pink">techHackathon 1.0</span></p>
                <p className="lg:max-w-[380px] xl:max-w-none">Our tech hackathon is a melting pot of visionaries, and its purpose is as
                    clear as day: to shape the future. Whether you&#39;re a coding genius, a 
                    design maverick, or a concept wizard, you&#39;ll have the chance to transform 
                    your ideas into reality. Solving real-world problems, pushing the boundaries
                    of technology, and creating solutions that can change the world,
                    that&#39;s what we&#39;re all about!
                </p>
                <div className='absolute top-[50px] right-[20px] z-[-1]'>
                    <Image src="/purple-star.svg" alt="star" width={20} height={20}/>
                </div>
            </div>
        </div>
        <div className='line-pattern pt-10'>
          <img src='Line.svg' alt='line' />
        </div>
        <div className="segment2 relative">
            <div className="section2 w-[52%] pl-10 relative">
                <div className='absolute top-[30px] left-[34%] z-[-1]'>
                    <Image src="/purple-star.svg" alt="star" width={20} height={20}/>
                </div>
                <p className="text-3xl">Rules and<br /><span className="text-purpish-pink">Guidelines</span></p>
                <p className="lg:max-w-[380px] xl:max-w-none">Our tech hackathon is a melting pot of visionaries, and its purpose is as
                    clear as day: to shape the future. Whether you&#39;re a coding genius, a 
                    design maverick, or a concept wizard, you&#39;ll have the chance to transform 
                    your ideas into reality. Solving real-world problems, pushing the boundaries
                    of technology, and creating solutions that can change the world,
                    that&#39;s what we&#39;re all about!
                </p>
                <div className='absolute bottom-[30px] left-[50%] z-[-1]'>
                    <Image src="/gray-star.svg" alt="star" width={20} height={20}/>
                </div>
            </div>
            <div className="section1">
                <img src={'/lady-icon.svg'} alt="" />
            </div>
            <div className='absolute bottom-[50%] right-[50px] z-[-1]'>
                <Image src="/star.svg" alt="star" width={20} height={20}/>
            </div>
        </div>
        <div className='line-pattern pb-10'>
          <img src='Line.svg' alt='line' />
        </div>
        <div className="segment3 relative"> 
            <div className='absolute top-[50px] left-[50px] z-[-1]'>
                <Image src="/star.svg" alt="star" width={20} height={20}/>
            </div>
            <div className='absolute bottom-[50%] right-[50%] z-[-1]'>
                <Image src="/purple-star.svg" alt="star" width={20} height={20}/>
            </div>
            <div className='absolute bottom-[50px] right-[0px] z-[-1]'>
                <Image src="/gray-star.svg" alt="star" width={15} height={15}/>
            </div>
            <div className="relative section1 mr-10">
                <img src="/judging-criteria.svg" alt="judges"/>
            </div>
            <div className="section2 w-[52%]">
                <p className="text-3xl">Judging Criteria<br /><span className="text-purpish-pink">Key attributes</span></p>
                <div className="lg:max-w-[380px] xl:max-w-none criteria">
                    <ul>
                        <li>
                            <span className="text-pink">Innovation and Creativity:</span> Evaluate the uniqueness and creativity of the
                            solution. Consider whether it addresses a real-world problem in a novel 
                            way or introduces innovative features.
                        </li>
                        <li>
                            <span className="text-pink">Functionality:</span> Assess how well the solution works. Does it perform its 
                            intended functions effectively and without major issues? Judges would
                            consider the completeness and robustness of the solution.
                        </li>
                        <li>
                            <span className="text-pink">Impact and Relevance:</span> Determine the potential impact of the solution 
                            in the real world. Does it address a significant problem, and is it relevant 
                            to the target audience? Judges would assess the potential social, 
                            economic, or environmental benefits.
                        </li>
                        <li>
                            <span className="text-pink">Technical Complexity:</span> Evaluate the technical sophistication of the solution. 
                            Judges would consider the complexity of the code, the use of advanced 
                            technologies or algorithms, and the scalability of the solution.
                        </li>
                        <li>
                            <span className="text-pink">Adherence to Hackathon Rules:</span> Judges will Ensure that the team adhered 
                            to the rules and guidelines of the hackathon, including deadlines, use of 
                            specific technologies or APIs, and any other competition-specific requirements.
                        </li>
                    </ul>
                    <button type='button'>Read More</button>
                </div>
            </div>
        </div>
        <div className='line-pattern pb-10 pt-10'>
          <img src='Line.svg' alt='line' />
        </div>
        <div className='relative'>
            <div className='question-icons'>
                <img src='/question.svg' alt='question-icon'  className='absolute -top-[24px] right-[32%]'/>
                <img src='/question-mark.svg' alt='question-icon'  className='absolute top-[10px] right-[24%]'/>
                <img src='/question-mark.svg' alt='question-icon'  className='absolute top-0 right-[43%]'/>
            </div>
            <div className='segment4'>
                <div className='section2 flex flex-col'>
                    <div className='py-10'>
                        <p className="text-3xl">Frequently Asked<br /><span className="text-purpish-pink">Questions</span></p>
                        <p>We got answers to the questions that you might want to ask about getlinked Hackathon 1.0</p>
                    </div>
                    <div className='questions-wrapper pt-10'>
                        <div>
                            <ReuseableTab content={'Can I work on a project I started before the hackathon?'} />
                        </div>
                        <div>
                            <ReuseableTab content={'What happens if I need help during the hackathon?'} />
                        </div>
                        <div>
                            <ReuseableTab content={"What happens if I don't have an idea for a project?"} />
                        </div>
                        <div>
                            <ReuseableTab content={'Can I join a team or do I have to come with one?'} />
                        </div>
                        <div>
                            <ReuseableTab content={'What happens after the hackathon ends'} />
                        </div>
                        <div>
                            <ReuseableTab content={'Can I work on a project I started before the hackathon?'} />
                        </div>
                    </div>
                </div>
                <div className='section1'>
                    <img src='/FAQ.svg' alt='faq' />
                </div>
            </div>
        </div>
        <div className='line-pattern pb-10 pt-10'>
          <img src='Line.svg' alt='line' />
        </div>
        <Timeline />
        <div className='line-pattern pb-10 pt-10'>
          <img src='Line.svg' alt='line' />
        </div>
        <PrizesAward />
        <div className='line-pattern pb-10 pt-10'>
          <img src='Line.svg' alt='line' />
        </div>
        <PartnerSponsor />
        <div className='line-pattern pb-10 pt-10'>
          <img src='Line.svg' alt='line' />
        </div>
        <Privacy />
    </div>
  )
}

export default Section;