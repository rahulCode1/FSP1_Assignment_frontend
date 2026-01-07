import { NavLink } from "react-router-dom";

const SettingHeader = () => {
  return (
    <header className="py-3 w-100">
      <ul className="nav">
        <li className="nav-item">
          <NavLink
            to={"tasks"}
            className={({ isActive }) =>
              ` ${
                isActive ? "bg-info text-light" : " border-info-subtle"
              } text-dark mx-2 px-4 btn `
            }
          >
            Tasks{" "}
          </NavLink>
        </li>
        
        <li className="nav-item">
          <NavLink
            to="/setting/projects"
            className={({ isActive }) =>
              ` ${
                isActive ? "bg-info text-light" : " border-info-subtle"
              } text-dark mx-2 px-4 btn `
            }
          >
            Projects
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="teams"
            className={({ isActive }) =>
              ` ${
                isActive ? "bg-info text-light" : " border-info-subtle"
              } text-dark mx-2 px-4 btn `
            }
          >
            Teams{" "}
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default SettingHeader;
