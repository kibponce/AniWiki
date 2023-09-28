import styled from "styled-components";
import { size, media } from "../utils/styles";
import Layout from "./layout";
import Input from "../components/Input";
import Card from "../components/Card";

const Home = () => {
  return (
    <Layout>
      <SearchContainer>
        <SearchWrapper>
          <Input placeholder="Search Anime" />
        </SearchWrapper>
      </SearchContainer>
      <ListsContainer>
        <CardsContainer>
          <Card />
          <Card />
          <Card />
          <Card />
        </CardsContainer>
      </ListsContainer>
    </Layout>
  );
};

const SearchContainer = styled.div`
  background: #ffffff;
  padding: 40px 0;

  ${media.xl`
    padding: 30px 20px;
  `}
`;

const SearchWrapper = styled.div`
  width: ${size.xl};
  margin: 0 auto;

  ${media.xl`
    width: 100%;
  `}
`;

const ListsContainer = styled.div`
  width: ${size.xl};
  margin: 0 auto;
  padding: 40px 0;

  ${media.xl`
    width: 100%;
  `}
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(390px, 460px));
  grid-template-rows: repeat(auto-fill, 300px);
  grid-gap: 35px 30px;

  ${media.xl`
    grid-template-columns: repeat(2, minmax(390px, 50%));
    grid-gap: 35px 30px;
    padding: 0 15px;
  `}

  ${media.md`
    grid-template-columns: 100%;
    padding: 0 15px;
  `}
`;

export default Home;
