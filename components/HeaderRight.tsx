import {
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";

const HeaderRight: React.FC = () => {
  return (
    <div className='flex items-center justify-end space-x-4'>
      <HomeIcon className='navBtn' />
      <MenuIcon className='h-6 md:hidden cursor-pointer' />

      <div className='relative mb-2'>
        <PaperAirplaneIcon className='navBtn rotate-45' />
        <div className='absolute -top-1 -right-2 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white'>
          3
        </div>
      </div>
      <PlusCircleIcon className='navBtn' />
      <UserGroupIcon className='navBtn' />
      <HeartIcon className='navBtn' />

      <img
        src='https://links.papareact.com/3ke'
        alt='profile pic'
        className='h-10 rounded-full cursor-pointer'
      />
    </div>
  );
};

export default HeaderRight;
