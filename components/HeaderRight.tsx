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

      <PaperAirplaneIcon className='navBtn' />
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
