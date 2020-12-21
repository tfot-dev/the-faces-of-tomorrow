import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { GraphqlEndpoints } from '../../constants/GraphqlEndpoints';

interface IPublicApiProps {
    children: React.ReactElement | React.ReactElement[];
}

export const PublicApi = ({ children }: IPublicApiProps) => {
    const client = new ApolloClient({
        uri: GraphqlEndpoints.Hasura,
        cache: new InMemoryCache(),
    });

    return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
