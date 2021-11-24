import {
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useModal } from "../context/ModalContext";

const HeaderRight: React.FC = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const { modalOpen, openModal } = useModal();

  return (
    <div className='flex items-center justify-end space-x-4'>
      <HomeIcon className='navBtn' onClick={() => router.push("/")} />
      <MenuIcon className='h-6 md:hidden cursor-pointer' />

      {session ? (
        <>
          <div className='relative mb-2'>
            <PaperAirplaneIcon className='navBtn rotate-45' />
            <div className='absolute -top-1 -right-2 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white'>
              3
            </div>
          </div>
          <PlusCircleIcon
            className='navBtn'
            onClick={openModal}
          />
          <UserGroupIcon className='navBtn' />
          <HeartIcon className='navBtn' />

          <img
            onClick={() => signOut()}
            src={session.user.image}
            alt='profile pic'
            className='h-10 w-10 rounded-full cursor-pointer'
          />
        </>
      ) : (
        <button onClick={() => signIn()}>Sign In</button>
      )}
    </div>
  );
};

export default HeaderRight;
