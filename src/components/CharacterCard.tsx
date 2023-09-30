import { FC } from "react";
import styled from "styled-components";

interface NameProps {
  align: "left" | "right";
}

interface CharacterProps {
  name?: string | null;
  image?: string | null;
  gender?: string | null;
}

const CharacterCard: FC<CharacterProps> = ({ name, image, gender }) => {
  return (
    <CardContainer>
      <Character>
        <Image image={image} />
        <Name align="left">
          <strong>{name}</strong>
          <Info>{gender}</Info>
        </Name>
      </Character>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  background: #ffffff;
  height: 100px;
  border-radius: 3px;
  display: grid;
`;

const Character = styled.div`
  display: grid;
  grid-template-columns: 65px auto;
`;

const Image = styled.div<CharacterProps>`
  background-image: ${({ image }) => (image ? `url(${image})` : null)};
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Name = styled.div<NameProps>`
  padding: 8px;
  font-size: 0.8rem;
  text-align: ${({ align }) => align};
`;

const Info = styled.p`
  font-size: 0.7rem;
`;

export default CharacterCard;
