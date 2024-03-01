import {HeartIcon, MagnifyingGlassIcon, ShoppingBagIcon} from "@heroicons/react/24/outline"
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <div>
      <header>
        <nav>
          <div>
            <img src={logo} alt="logo/img" className="" />
          </div>
          <ul>
            <li>
                <MagnifyingGlassIcon className="icon-style" />
            </li>
            <li>
                <HeartIcon className="icon-style" />
            </li>
            <li>
                <button type="button" className="">
                    <ShoppingBagIcon className="icon-style" />
                    <div>0</div>
                </button>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
