import HeaderCenter from "./HeaderCenter";
import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";

const Header: React.FC = () => {
  return (
    <div>
      <h1>Header</h1>

      {/* Left */}
      <HeaderLeft />
      {/* Center */}
      <HeaderCenter />
      {/* Right */}
      <HeaderRight />
    </div>
  );
};

export default Header;
