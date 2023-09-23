import './styles.css';
import { BsInstagram } from 'react-icons/bs';
import { FaXTwitter } from 'react-icons/fa6';
import { FaLinkedinIn, FaFacebookF, FaMapMarkerAlt } from 'react-icons/fa';
import { BiSolidPhoneCall } from 'react-icons/bi';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';


const Footer = () => {
    const pathName = usePathname();
  return (
    <div className='footer bg-footer-bg text-white relative'>
        <div className='absolute bottom-[50%] right-[50px] z-[2]'>
            <Image src="/purple-star.svg" alt="star" width={20} height={20}/>
        </div>
        <div className='absolute bottom-[24px] left-[34%] z-[2]'>
            <Image src="/star.svg" alt="star" width={15} height={15}/>
        </div>
        <div className='absolute top-[24px] left-[20px] z-[2]'>
            <Image src="/gray-star.svg" alt="star" width={20} height={20}/>
        </div>
        <div className='footer-content'>
            <div className='sections section1'>
                <img src='/getlinked.svg' alt='logo' />
                <p className='py-4 leading-8'>
                Getlinked Tech Hackathon is a technology innovation program 
                established by a group of organizations with the aim of showcasing 
                young and talented individuals in the field of technology
                </p>
                <p className='terms'>
                <span className='mr-2'>Terms of Use</span>  <span className='vertical-line'></span>  <span className='ml-3'>Privacy Policy</span>
                </p>
            </div>
            <div className='sections section2'>
                <ul>
                    <li className='text-purpish-pink'>Useful Links</li>
                    <li><Link href={'/'} className={`${pathName === '/' ? 'active' : ''}`}>Overview</Link></li>
                    <li><Link href={'/faqs'} className={`${pathName === '/faqs' ? 'active' : ''}`}>FAQs</Link></li>
                    <li><Link href={'/register'} className={`${pathName === '/register' ? 'active' : ''}`}>Register</Link></li>
                    <li className='text-purpish-pink social-media'> Follow us
                        <span>
                            <Link href={'/'}><BsInstagram className='insta'/></Link>
                            <Link href={'/'}><FaXTwitter /></Link>
                            <Link href={'/'}><FaFacebookF /></Link>
                            <Link href={'/'}><FaLinkedinIn /></Link>
                        </span>
                    </li>
                </ul>
            </div>
            <div className='sections section3'>
                <p className='text-purpish-pink'>Contact Us</p>
                <p><span><BiSolidPhoneCall /></span>+234 6707653444</p>
                <div className='flex items-start'>
                    <FaMapMarkerAlt className='inline mr-[20px] mt-2'/>
                    <span className='leading-6'>27,Alara Street<br />Yaba 100012 <br />Lagos State</span>
                </div>
            </div>
        </div>
        <p className='pt-14 text-center'>All rights reserved. © getlinked Ltd.</p>
    </div>
  )
}

export default Footer