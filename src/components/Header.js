import { FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../redux/auth/authSlice";
import { RiLoginCircleFill } from "react-icons/ri";
import { IoHomeSharp } from "react-icons/io5";
import { RiLogoutCircleLine } from "react-icons/ri";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(authActions.logout());
    localStorage.removeItem("user");
    navigate("/");
  };

  const linkStyle = {
    color:'#17494d'
  };

  return (
    <header className="header">
      <div className="logo">
        
        <Link to='/' style={linkStyle}><IoHomeSharp /> Home</Link>
      </div>
      <ul>
        {user ? (
          <li>
            <button className="btn"  onClick={onLogout}>
              <RiLogoutCircleLine /> Logout
            </button>
          </li>
        ) : (
          <>
            <li>
              <Link to="/login" style={linkStyle}>
                <RiLoginCircleFill /> Login
              </Link>
            </li>
            <li>
              <Link to="/register" style={linkStyle}>
                <FaUser /> Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </header>
  );
}

export default Header;
