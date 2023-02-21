import React from "react";
import * as S from "./Menu.styles";
import { Link as GatsbyLink } from "gatsby";
import { MenuContext } from "../../contexts/MenuContext";
import Logo from "../Logo/Logo";

const Menu = ({ links }: { links: string[] }) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const { isMenuOpen, activeLink, closeMenu, toggleMenu } =
    React.useContext(MenuContext);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!ref?.current?.contains(event.target as Node)) {
        closeMenu("");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
  }, [ref]);

  return (
    <S.Menu open={isMenuOpen}>
      <S.Dropdown ref={ref}>
        <S.Button onClick={toggleMenu}>
          <Logo />
        </S.Button>
        <S.Content open={isMenuOpen}>
          {links.map((link) => (
            <GatsbyLink to={`/${link}`}>
              <S.Link
                onClick={() => closeMenu(link)}
                current={activeLink === link}
              >
                {link.toUpperCase()}
              </S.Link>
            </GatsbyLink>
          ))}
        </S.Content>
      </S.Dropdown>
    </S.Menu>
  );
};

export default Menu;
