import React from 'react'
import { useSelector } from 'react-redux'
import { Logo, Container, Logout } from '../index'
import { useNavigate, Link } from 'react-router-dom'

function Header() {
  const authStatus = useSelector((state) => state.status)
  const navigate = useNavigate()
  
  const navItems = [
    {
      name: "Home",
      path: "/",
      active: true,
    },
    {
      name: "Login",
      path: "/login",
      active: !authStatus,
    },
    {
      name: "SignUp",
      path: "/signup",
      active: !authStatus,
    },
    {
      name: "All-posts",
      path: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add-post",
      path: "/add-post",
      active: authStatus,
    },
  ];
  return (
    <header className="py-3 bg-[#BEAB95] shadow">
      <Container>
        <nav className="flex">
          <div className="mr-4 pl-12">
            <Link to="/">
              <Logo width="200px" />
            </Link>
          </div>
          <ul className="flex ml-auto pt-8 text-xl font-semibold">
            {navItems.map((item, key) =>
              item.active ? (
                <li key={key}>
                  <button
                    onClick={() => navigate(item.path)}
                    className="inline-block py-3 px-10 duration-200 hover:bg-[#97774e] rounded-full"
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li>
                <Logout />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header