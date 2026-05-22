import LeftContentText from './LeftContentText';
import LeftArrowIcon from './LeftArrowIcon';

const LeftContent = () => {
  return (
    <div className=' h-full w-2/5 px-8 py-10 flex flex-col justify-between '>
      <LeftContentText />
      <LeftArrowIcon />
    </div>
  )
}

export default LeftContent
