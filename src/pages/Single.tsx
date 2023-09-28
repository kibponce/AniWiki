import styled from "styled-components";
import { size, media } from "../utils/styles";
import Layout from "./layout";
import Data from "../components/Data";
import CharacterCard from "../components/CharacterCard";

const Single = () => {
  return (
    <Layout isSingle={true}>
      <BannerImage />
      <Wrapper>
        <Details>
          <StyledImage
            src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx146065-IjirxRK26O03.png"
            alt="cover-image"
          />
          <Content>
            <h5>Mushoku Tensei II: Isekai Ittara Honki Dasu</h5>
            <Summary>
              Gold Roger was known as the Pirate King, the strongest and most
              infamous being to have sailed the Grand Line. The capture and
              death of Roger by the World Government brought a change throughout
              the world. His last words before his death revealed the location
              of the greatest treasure in the world, One Piece. It was this
              revelation that brought about the Grand Age of Pirates, men who
              dreamed of finding One Piece (which promises an unlimited amount
              of riches and fame), and quite possibly the most coveted of titles
              for the person who found it, the title of the Pirate King.
            </Summary>
          </Content>
        </Details>
      </Wrapper>
      <Details>
        <SideInfo>
          <Information>
            <Data type="Format" value="TV" />
            <Data type="Episode Duration" value="24 mins" />
            <Data type="Status" value="Releasing" />
            <Data type="Start Date" value="Oct 20, 1999" />
            <Data type="Season" value="Fall 1999" />
          </Information>
        </SideInfo>
        <Content>
          <h6>Characters</h6>
          <CharactersContainer>
            <CharacterCard></CharacterCard>
            <CharacterCard></CharacterCard>
            <CharacterCard></CharacterCard>
            <CharacterCard></CharacterCard>
            <CharacterCard></CharacterCard>
            <CharacterCard></CharacterCard>
            <CharacterCard></CharacterCard>
            <CharacterCard></CharacterCard>
            <CharacterCard></CharacterCard>
            <CharacterCard></CharacterCard>
          </CharactersContainer>
        </Content>
      </Details>
    </Layout>
  );
};

const BannerImage = styled.div`
  height: 350px;
  background-image: url(https://s4.anilist.co/file/anilistcdn/media/anime/banner/146065-33RDijfuxLLk.jpg);
  background-position: 50% 35%;
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: -75px;
`;

const Wrapper = styled.div`
  min-height: 300px;
  background: #ffffff;
`;

const Details = styled.div`
  height: 100%;
  width: ${size.xl};
  margin: 0 auto;
  padding: 25px 0;
  display: grid;
  grid-column-gap: 30px;
  grid-template-columns: 215px auto;

  ${media.xl`
    width: 100%;
  `}

  ${media.md`
    grid-template-columns: 145px auto;
  `}
`;

const StyledImage = styled.img`
  border-radius: 2px;
  width: 100%;
  box-shadow: 0 0 29px rgba(49, 54, 68, 0.25);

  ${media.xl`
    margin-left: 15px;
  `}
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const Summary = styled.div`
  font-size: 0.9rem;
  margin-top: 10px;
`;

const SideInfo = styled.div`
  border-radius: 2px;
  width: 100%;
  background: #ffffff;

  ${media.xl`
    margin-left: 15px;
  `}
`;

const Information = styled.div`
  padding: 18px;
  color: #6e6e6e;

  ${media.xl`
    margin-left: 15px;
  `}
`;

const CharactersContainer = styled.div`
  display: grid;
  margin-top: 10px;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 15px;

  ${media.lg`
    grid-template-columns: repeat(2, 1fr);
    padding-right: 15px;
  `}

  ${media.md`
    grid-template-columns: 100%;
  `}
`;

export default Single;
