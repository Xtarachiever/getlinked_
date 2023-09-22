import Image from "next/image"

const Privacy = () => {
  return (
    <div className='policy-wrapper relative'>
        <div className='absolute top-[20%] right-[30%] z-[-1]'>
            <Image src="/gray-star.svg" alt="star" width={30} height={30}/>
        </div>
        <div className='absolute bottom-[40px] right-[50%] z-[-1]'>
            <Image src="/star.svg" alt="star" width={20} height={20}/>
        </div>
        <div className='policies'>
            <div>
                <p className='text-4xl font-bold'>Privacy Policy and <br /><span className="text-purpish-pink">Terms</span></p>
                <p className='py-4 text-gray1'>Last updated on September 12, 2023</p>
                <p className='py-8'>Below are our privacy & policy, which outline a lot of goodies. <br />it&#39;s our aim to always take of our participant</p>
            </div>
            <div className='policy'>
                <p>At getlinked tech Hackathon 1.0, we value your privacy
                    and are committed to protecting your personal information.
                    This Privacy Policy outlines how we collect, use, disclose, 
                    and safeguard your data when you participate in our tech 
                    hackathon event. By participating in our event, you consent 
                    to the practices described in this policy.
                </p>
                <p className='text-purple pt-8'>Licensing Policy</p>
                <p>Here are terms of our Standard License:</p>
                <ol className='license'>
                    <li><span></span>The Standard License grants you a non-exclusive right to navigate and register for our event</li>
                    <li><span></span>You are licensed to use the item available at any free source sites, for your project developement</li>
                </ol>
                <div className='button'>
                    <button type='button'>Read More</button>
                </div>
            </div>
            <div className='absolute bottom-[80px] left-[50px] z-[-1]'>
                <Image src="/purple-star.svg" alt="star" width={20} height={20}/>
            </div>
            <div className='absolute top-[80px] right-[50px] z-[-1]'>
                <Image src="/star.svg" alt="star" width={20} height={20}/>
            </div>
        </div>
        <div className='images relative w-full min-w-[400px]'>
            <img src='/privacy.svg' className='absolute right-[100px] -top-[120px]'/>
            <img src='privacy-terms.svg' alt='privacy-terms' className='privacy-img'/>
        </div>
    </div>
  )
}

export default Privacy