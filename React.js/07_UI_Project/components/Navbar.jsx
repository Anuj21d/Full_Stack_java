import { CornerDownRight } from 'lucide-react';

const Navbar = () => {
  return (
    <div className='flex justify-between items-center py-7 px-22'>
      <h4 className='uppercase text-lg text-white px-6 py-2 bg-black rounded-full font-bold'>Target audience</h4>
      <button className='flex gap-[10px] items-center px-6 py-2 bg-gray-200 rounded-full tracking-widest text-sm'><CornerDownRight strokeWidth={1.5} />digital banking platform</button>
    </div>
  )
}

export default Navbar
