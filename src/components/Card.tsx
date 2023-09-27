import styled from "styled-components";

const Card = () => {
  return (
    <CardContainer>
      <Overlay />
      <CardInfo>
        <CardImage>
          <Image src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx146065-IjirxRK26O03.png" />
        </CardImage>
        <CardData>
          <Type>TV Show</Type>
          <Summary>
            The second season of Mushoku Tensei: Isekai Ittara Honki Dasu.
            Rudeus heads north with new friends and powers in search of
            adventure and those he once knew. Note: Includes episode 0. The
          </Summary>
        </CardData>
      </CardInfo>
      <CardFooter>
        <CardTitle>Mushoku Tensei II: Isekai Ittara Honki Dasu</CardTitle>
        <CardAuthor>Studio Blind</CardAuthor>
      </CardFooter>
    </CardContainer>
  );
};

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background: #000;
  opacity: 0.4;
  display: none;
`;

const CardContainer = styled.div`
  animation: in 0.3s linear;
  height: 300px;
  min-width: 450px;
  display: grid;
  grid-template-rows: 238px auto;
  border-radius: 4px;
  box-shadow: 0 14px 30px rgba(103, 132, 187, 0.15),
    0 4px 4px rgba(103, 132, 187, 0.05);
  cursor: pointer;
  position: relative;
  &:hover ${Overlay} {
    display: block;
  }
`;

const CardInfo = styled.div`
  background: #ffffff;
  display: grid;
  grid-template-columns: 165px auto;
`;

const CardFooter = styled.div`
  background: #edf1f5;
  padding: 12px;
`;

const CardImage = styled.div`
  display: inline-block;
`;

const CardData = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px;
  overflow: hidden;
  max-height: 100%;
  overflow: auto;
  overscroll-behavior: contain;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const CardTitle = styled.p`
  font-size: 0.9rem;
  font-weight: 600;
`;

const CardAuthor = styled.p`
  font-size: 0.7rem;
`;

const Type = styled.p`
  font-size: 0.7rem;
  margin-bottom: 4px;
`;

const Summary = styled.p`
  font-size: 0.9rem;
`;

export default Card;
