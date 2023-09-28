import styled from "styled-components";

interface NameProps {
  align: "left" | "right";
}

const CharacterCard = () => {
  return (
    <CardContainer>
      <Character>
        <Image />
        <Name align="left">
          <strong>Luffy D. Monkey</strong>
          <Role>Main</Role>
        </Name>
      </Character>
      <Staff>
        <Name align="right">
          <strong>Mayumi Tanaka</strong>
          <Role>Japanese</Role>
        </Name>
        <Image />
      </Staff>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  background: #ffffff;
  height: 100px;
  border-radius: 3px;
  display: grid;
  grid-template-columns: 50% 50%;
`;

const Character = styled.div`
  display: grid;
  grid-template-columns: 65px auto;
`;

const Staff = styled.div`
  display: grid;
  grid-template-columns: auto 65px;
`;

const Image = styled.div`
  background-image: url(https://s4.anilist.co/file/anilistcdn/character/large/b40-q0YepZ4VUZUO.png);
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Name = styled.div<NameProps>`
  padding: 8px;
  font-size: 0.8rem;
  text-align: ${({ align }) => align};
`;

const Role = styled.p`
  font-size: 0.7rem;
`;

export default CharacterCard;
