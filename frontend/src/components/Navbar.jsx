import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthContext";

const Navbar = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <nav className="p-4 bg-blue-700 text-white flex justify-between">
      <div>
        <Link className="mr-4" to="/">Home</Link>
        <Link className="mr-4" to="/about">About</Link>
        <Link className="mr-4" to="/financial-tips">Financial Tips</Link>
        <Link className="mr-4" to="/faqs">FAQs</Link>

        {isAuthenticated && (
          <>
            <Link className="mr-4" to="/inventory">Inventory</Link>
          </>
        )}
      </div>
      <div>
        {!isAuthenticated ? (
          <Link to="/signin">Sign Up</Link>
          
        ) : (
          <Link className="mr-4" to="/profile">Account</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;