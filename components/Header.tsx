import HeaderCenter from "./HeaderCenter";
import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";

const Header: React.FC = () => {
  return (
    <div>
      <div className='flex justify-between max-w-6xl'>
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
