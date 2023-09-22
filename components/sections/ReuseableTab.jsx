import { AiOutlinePlus } from 'react-icons/ai';

const ReuseableTab = ({content}) => {
  return (
    <div className='reuseable-tab relative'>
        <p className='pr-10'>{content} <span>
            <AiOutlinePlus color='rgba(144, 58, 255, 1)' fontSize={'1.2rem'} fontWeight={800} /></span>
        </p>
        <div className='line'></div>
    </div>
  )
}

export default ReuseableTab;