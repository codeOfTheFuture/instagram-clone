import HeaderCenter from "./HeaderCenter";
import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";

const Header: React.FC = () => {
  return (
    <div className='shadow-sm border-b bg-white sticky top-0 z-50'>
      <div className='flex justify-between max-w-6xl mx-5 lg:mx-auto'>
        {/* Left */}
        <HeaderLeft />
        {/* Center */}
        <HeaderCenter />
        {/* Right */}
        <HeaderRight />
      </div>
    </div>
  );
};

export default Header;
