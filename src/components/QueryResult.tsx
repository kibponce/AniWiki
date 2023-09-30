import React, { PropsWithChildren } from "react";
import { ApolloError } from "@apollo/client";
import styled from "styled-components";
import { size } from "../utils/styles";

interface QueryResultProps {
  loading: boolean;
  error?: ApolloError | undefined;
  data?: unknown;
}

// TODO: Improve UI
const QueryResult: React.FC<PropsWithChildren<QueryResultProps>> = ({
  loading,
  error,
  data,
  children,
}): React.ReactElement<any, any> | null => {
  if (error) {
    return <ResultContainer>ERROR: {error.message}</ResultContainer>;
  }
  if (loading) {
    return <ResultContainer>Loading...</ResultContainer>;
  }
  if (data) {
    return <>{children}</>;
  }

  return <ResultContainer>Nothing to show...</ResultContainer>;
};

const ResultContainer = styled.div`
  width: ${size.xl};
  margin: 0 auto;
`;

export default QueryResult;
