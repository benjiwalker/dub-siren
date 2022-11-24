import * as S from "./Footer.styles";
import { Github } from "@styled-icons/simple-icons/Github";

const Footer = () => {
  return (
    <S.Footer>
      <S.Controls>Space = Trigger, 1-8 = Patch Select</S.Controls>
      <S.Text>
        Built using {"  "}
        <S.Link
          href={"https://tonejs.github.io/"}
          target="_blank"
          rel="noreferrer"
        >
          Tone.JS
        </S.Link>
        {"  "}
        by Ben Walker
      </S.Text>
      <S.Link href={"https://github.com/"} target="_blank" rel="noreferrer">
        <Github size={32} />
      </S.Link>
    </S.Footer>
  );
};

export default Footer;
