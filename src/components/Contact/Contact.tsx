import React from "react";
import * as S from "../Contact/Contact.styles";

const Contact = () => {
  return (
    <S.Contact>
      <S.Text>
        Complaints/Commisions {">"}{" "}
        <S.Link href="mailto:susularoche@gmail.com">
          susularoche@gmail.com
        </S.Link>
      </S.Text>
      <S.Text>
        <S.Link
          href="https://vimeo.com/slaroche"
          target="_blank"
          rel="noopener noreferrer"
        >
          V*meo
        </S.Link>{" "}
        /{" "}
        <S.Link
          href="https://soundcloud.com/tsvsvnami"
          target="_blank"
          rel="noopener noreferrer"
        >
          S*undcloud
        </S.Link>{" "}
        /{" "}
        <S.Link
          href="https://susularoche.bandcamp.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          B*ndcamp
        </S.Link>
      </S.Text>
    </S.Contact>
  );
};

export default Contact;
