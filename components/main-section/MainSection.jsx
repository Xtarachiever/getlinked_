import './styles.css';
import Image from 'next/image';

const MainSection = () => {
  return (
    <div className="mb-16">
      <div className='relative main-section'>
        <div className='idea absolute top-[60px] left-[450px]'>
          <img src='/Bulb.svg' alt='idea'/>
        </div>
        <div className='relative pb-5 ignite-text'>
              <div className='absolute top-[40px] left-[10px] z-[-1]'>
                <Image src="/star.svg" alt="star" width={30} height={30}/>
              </div>
            <p className='italic text-2xl font-bold z-[2]'>
              Igniting a Revolution in HR Innovation
            </p>
            <img src='/curved-line.svg' alt='line' className='curved-line'/>
        </div>
           <section className='mt-8'>
              <div className='absolute top-[80px] left-[70%] z-[-1]'>
                <Image src="/gray-star.svg" alt="star" width={20} height={20}/>
              </div>
              <div className='absolute bottom-[80px] left-[50%] z-[-1]'>
                <Image src="/gray-star.svg" alt="star" width={20} height={20}/>
              </div>
              <div className='text-section py-6 w-[52%] lg:w-[75%]'>
                <div className='relative w-full'>
                  <div className='main-details'>
                      <div className='main-header text-4xl sm:text-5xl md:text-7xl font-extrabold sm:leading-snug tracking-wide relative lg:w-[680px]'>
                        getlinkedTech <br />Hackathon <span className='text-pink'>1.0</span>
                        <img src='/link.svg' alt='connect' className='inline'/>
                        <img src='/flash.svg' alt='flash' className='inline'/>
                      </div>
                      <p className='text-2xl lg:max-w-[550px] py-6'>Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize</p>
                      <button type='button'>Register</button>
                      <div className='py-14'>
                        <p className='text-4xl sm:text-6xl'>00<sub className='subscript'>H</sub>00<sub className='subscript'>M</sub>00<sub className='subscript'>s</sub></p>
                      </div>
                  </div>
                </div>
              </div>
                <img src='/virtual_image.svg' alt='virtual' className='section2 virtual-image absolute -bottom-2 -right-[25px] max-w-[750px] z-[-1]'/>
                {/* <img src='/globe.svg' alt='globe' className='absolute top-[50px] right-[60px] w-[600px]'/> */}
           </section>
           <div className='line-pattern absolute -bottom-2'>
              <img src='Line.svg' alt='line' />
            </div>
        </div>
    </div>
  )
}

export default MainSection;