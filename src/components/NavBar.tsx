import ProfileImage from "../assets/profile.jpg";
import { useState } from "react";
import { MdOutlineMenuOpen } from "react-icons/md";

const navList = [
  {
    id: 0,
    text: "About",
    link: "#about",
  },
  {
    id: 1,
    text: "education",
    link: "#education",
  },
  {
    id: 2,
    text: "experience",
    link: "#experience",
  },
  {
    id: 3,
    text: "projects",
    link: "#project",
  },
  {
    id: 4,
    text: "skills",
    link: "#skills",
  },
  {
    id: 5,
    text: "interests",
    link: "#interests",
  },
  {
    id: 6,
    text: "The end",
    link: "#end",
  },
];

const NavBar = () => {
  const menuHeight = navList.length * 40;
  const [activeIndex, setActiveIndex] = useState(0);
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div
      className="fixed top-0 left-0 h-fit w-full md:w-[300px] p-4 md:p-0 
    md:pt-30 md:h-full bg-primary-1 z-50"
    >
      <div className="w-full flex items-center justify-between">
        <a className="w-full" href="#page-top">
          <span className="md:hidden text-white uppercase font-bold">
            Harry Nguyen
          </span>
          <span
            className="hidden md:block w-[170px] aspect-square overflow-hidden
          mx-auto mb-4 rounded-full border-[10px] border-white/20"
          >
            <a href="#page-content" onClick={() => setActiveIndex(0)}>
              <img
                className="w-full h-full object-cover object-bottom"
                src={ProfileImage}
                alt="Nguyen Viet Hoa, Harry Nguyen"
                loading="eager"
              />
            </a>
          </span>
        </a>
        <div
          className="block md:hidden menu-button"
          onClick={() => setOpenMenu((prev) => !prev)}
        >
          <MdOutlineMenuOpen
            style={{
              width: 28,
              height: 28,
              color: "white",
              borderRadius: 20,
            }}
          />
        </div>
      </div>
      <div
        className={`text-white/70 font-bold uppercase w-full md:!h-full 
              overflow-hidden transition-all duration-300 ease-out`}
        style={{
          height: !openMenu ? 0 : menuHeight,
        }}
      >
        <ul className="w-full h-full flex flex-col md:items-center nav-list">
          {navList.map((item, index) => (
            <li
              key={index}
              className={activeIndex === item.id ? "active" : ""}
              onClick={() => {
                setActiveIndex(item.id);
                setOpenMenu(false);
              }}
            >
              <a href={item.link}>{item.text}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
