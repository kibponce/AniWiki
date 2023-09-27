import styled from "styled-components";
import { widths } from "../utils/styles";
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
`;

const SearchWrapper = styled.div`
  width: ${widths.regularPageWidth}px;
  margin: 0 auto;
`;

const ListsContainer = styled.div`
  display: flex;
  width: ${widths.regularPageWidth}px;
  margin: 0 auto;
  padding: 40px 0;
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(390px, 450px));
  grid-template-rows: repeat(auto-fill, 300px);
  grid-gap: 35px 30px;
`;

export default Home;
