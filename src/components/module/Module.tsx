import * as S from "./Module.styles";

type Props = {
  name: string;
  children: React.ReactNode;
};

const Module = ({ name, children }: Props) => (
  <S.Module>
    <S.Heading>{name}</S.Heading>
    <S.Controls>{children}</S.Controls>
  </S.Module>
);

export default Module;
