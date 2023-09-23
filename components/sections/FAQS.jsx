"use client";
import ReuseableTab from './ReuseableTab';

const FAQS = () => {
  return (
    <div>
        <div className='relative'>
            <div className='question-icons'>
                <img src='/question.svg' alt='question-icon'  className='absolute -top-[24px] right-[40%] sm:right-[32%]'/>
                <img src='/question-mark.svg' alt='question-icon'  className='absolute top-[10px] right-[20px] sm:right-[24%]'/>
                <img src='/question-mark.svg' alt='question-icon'  className='absolute top-0 right-[82%] sm:right-[43%]'/>
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
    </div>
  )
}

export default FAQS