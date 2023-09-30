import { useMemo } from "react";
import styled from "styled-components";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { size, media } from "../utils/styles";
import Layout from "./layout";
import Data from "../components/Data";
import CharacterCard from "../components/CharacterCard";

// GraphQL - media service
import {
  getMediaDetails,
  Media,
  CharacterRole,
  parseMediaFragment,
} from "../service/media";

interface BannerProps {
  image?: string;
}

const Single = () => {
  const { id = "" } = useParams();
  const { loading, error, data } = useQuery(getMediaDetails, {
    variables: {
      mediaId: Number(id),
      role: CharacterRole.Main,
    },
  });

  const mediaDetails = useMemo(
    () => data?.Media && parseMediaFragment(data?.Media),
    [data]
  );
  console.log("mediaDetails", data?.Media?.characters);
  return (
    <Layout isSingle={true}>
      <BannerImage image={mediaDetails?.bannerImage!} />
      <Wrapper>
        <Details>
          <StyledImage
            src={mediaDetails?.coverImage?.large!}
            alt="cover-image"
          />
          <Content>
            <h5>{mediaDetails?.title?.userPreferred}</h5>
            {mediaDetails?.description && (
              <Summary
                dangerouslySetInnerHTML={{ __html: mediaDetails?.description }}
              />
            )}
          </Content>
        </Details>
      </Wrapper>
      <Details>
        <SideInfo>
          <Information>
            <Data type="Format" value={mediaDetails?.format?.toString()} />
            <Data
              type="Episode Duration"
              value={`${mediaDetails?.duration} mins`}
            />
            <Data type="Status" value={mediaDetails?.status?.toString()} />
            <Data
              type="Popularity"
              value={mediaDetails?.popularity?.toString()}
            />
            <Data
              type="Favourits"
              value={mediaDetails?.favourites?.toString()}
            />
          </Information>
        </SideInfo>
        <Content>
          <h6>Characters</h6>
          <CharactersContainer>
            {data?.Media?.characters?.nodes?.map((character) => (
              <CharacterCard
                name={character?.name?.userPreferred}
                image={character?.image?.large}
                gender={character?.gender}
              />
            ))}
          </CharactersContainer>
        </Content>
      </Details>
    </Layout>
  );
};

const BannerImage = styled.div<BannerProps>`
  height: 350px;
  background-image: ${({ image }) => (image ? `url(${image})` : null)};
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
