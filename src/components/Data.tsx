import { FC } from "react";
import styled from "styled-components";

interface DataSetProps {
  type?: string;
  value?: string;
}

const Data: FC<DataSetProps> = ({ type, value }) => {
  return (
    <DataSet>
      <DataType>{type}</DataType>
      <DataValue>{value}</DataValue>
    </DataSet>
  );
};

const DataSet = styled.div`
  padding-bottom: 14px;
`;

const DataType = styled.div`
  font-size: 0.9rem;
  font-weight: 500;
`;

const DataValue = styled.div`
  font-size: 0.8rem;
  font-weight: 400;
`;

export default Data;
