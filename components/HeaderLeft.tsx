import { useRouter } from "next/router";
import Image from "next/image";

const HeaderLeft: React.FC = () => {
  const router = useRouter();

  return (
    <>
      <div
        className='relative hidden lg:inline-grid w-24 cursor-pointer'
        onClick={() => router.push("/")}
      >
        <Image
          src='https://links.papareact.com/ocw'
          layout='fill'
          objectFit='contain'
        />
      </div>

      <div
        className='relative w-10 lg:hidden flex-shrink-0 cursor-pointer'
        onClick={() => router.push("/")}
      >
        <Image
          src='https://links.papareact.com/jjm'
          layout='fill'
          objectFit='contain'
        />
      </div>
    </>
  );
};

export default HeaderLeft;
