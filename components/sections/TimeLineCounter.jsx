import './styles.css';

const TimeLineCounter = ({number}) => {
  return (
    <div className='timeline-counter'>
        <p className='number'>{number}</p>
    </div>
  )
}

export default TimeLineCounter