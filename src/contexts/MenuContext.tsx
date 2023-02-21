import React from "react";

interface Context {
  activeLink: string;
  isMenuOpen: boolean;
  closeMenu: (link: string) => void;
  toggleMenu: () => void;
}

interface Provider {
  children: React.ReactNode;
}

export const MenuContext = React.createContext({} as Context);

export const MenuProvider: React.FC<Provider> = ({ children }) => {
  const [activeLink, setActiveLink] = React.useState("");
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const closeMenu = (link: string) => {
    setIsMenuOpen(false);
    if (link !== "") setActiveLink(link);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <MenuContext.Provider
      value={{
        activeLink,
        isMenuOpen,
        closeMenu,
        toggleMenu,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};
