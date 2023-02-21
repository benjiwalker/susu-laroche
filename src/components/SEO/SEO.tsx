import React from "react";

type Props = {
  children?: React.ReactNode;
  title?: string;
};

const SEO = ({ children, title }: Props) => {
  return (
    <>
      {title ? (
        <title>SUSU LAROCHE - {title}</title>
      ) : (
        <title>SUSU LAROCHE</title>
      )}

      <meta
        name="description"
        content="Susu Laroche is an anagram of Chaos Lure Us and a multidisciplinary artist working with film, photography and sound"
      />
      <meta
        name="keywords"
        content="arts, music, photography, video, film, sound, susu laroche, chaos lure us, print, tarot, print, painting"
      />
      <meta name="author" content="Susu Laroche" />
      {children}
    </>
  );
};

export default SEO;
