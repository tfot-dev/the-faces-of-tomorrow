import React, { useEffect, useState } from 'react';
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache, NormalizedCacheObject } from '@apollo/client';
import { useAuth0 } from '@auth0/auth0-react';
import { setContext } from '@apollo/client/link/context';
import { GraphqlEndpoints } from '../../constants/GraphqlEndpoints';

interface IApiProps {
    children: React.ReactElement | React.ReactElement[];
}

export const AuthenticatedApi = ({ children }: IApiProps) => {
    const { getAccessTokenSilently } = useAuth0();
    const [client, setClient] = useState<ApolloClient<NormalizedCacheObject>>(
        new ApolloClient({
            uri: GraphqlEndpoints.Hasura,
            cache: new InMemoryCache(),
        }),
    );

    useEffect(() => {
        const getToken = async () => {
            try {
                const accessToken = await getAccessTokenSilently();

                const httpLink = createHttpLink({
                    uri: GraphqlEndpoints.Hasura,
                });

                const authLink = setContext((_, { headers }) => {
                    return {
                        headers: {
                            ...headers,
                            authorization: accessToken ? `Bearer ${accessToken}` : '',
                        },
                    };
                });

                setClient(
                    new ApolloClient({
                        link: authLink.concat(httpLink),
                        cache: new InMemoryCache({
                            addTypename: true,
                        }),
                    }),
                );
            } catch (e) {
                console.log(e.message);
            }
        };

        process.env.REACT_APP_BUILD_TYPE === 'admin' && getToken();
    }, [getAccessTokenSilently]);

    return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
