import styled from "styled-components";
import { Link } from "react-router-dom";
import { Media, parseMediaFragment, MediaFormat } from "../service/media";

interface CardProps {
  item: Media;
}

const Card = ({ item }: CardProps) => {
  const cardItem = parseMediaFragment(item);

  return (
    <CardContainer to={`/anime/${cardItem.id}`}>
      <CardInfo>
        <CardImage>
          {cardItem?.coverImage?.large && (
            <Image src={cardItem?.coverImage?.large} />
          )}
        </CardImage>
        <CardData>
          <Type>{cardItem?.format?.toString()}</Type>
          {cardItem?.description && (
            <Summary
              dangerouslySetInnerHTML={{ __html: cardItem?.description }}
            />
          )}
        </CardData>
      </CardInfo>
      <CardFooter>
        <CardTitle>{cardItem?.title?.userPreferred}</CardTitle>
        {/* Get the first element of array only */}
        <CardAuthor>
          {cardItem?.studios?.nodes && cardItem?.studios?.nodes[0]?.name}
        </CardAuthor>
      </CardFooter>
    </CardContainer>
  );
};

const CardInfo = styled.div`
  background: #ffffff;
  display: grid;
  grid-template-columns: 145px auto;
`;

const CardFooter = styled.div`
  background: #2b2d42;
  padding: 12px;
  color: #ffffff;
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

const CardContainer = styled(Link)`
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
  text-decoration: none;
  color: #000000;
  &:hover ${CardTitle} {
    color: #bdc1ff;
  }
`;

export default Card;
