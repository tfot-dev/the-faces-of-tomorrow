import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { GraphqlEndpoints } from '../../constants/GraphqlEndpoints';

interface IInstagramApiProps {
    children: React.ReactElement | React.ReactElement[];
}

export const InstagramApi = ({ children }: IInstagramApiProps) => {
    const client = new ApolloClient({
        uri: GraphqlEndpoints.Instagram,
        cache: new InMemoryCache(),
    });

    return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
