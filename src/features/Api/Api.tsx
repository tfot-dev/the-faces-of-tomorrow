import React, { useEffect, useState } from 'react';
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache, NormalizedCacheObject } from '@apollo/client';
import { useAuth0 } from '@auth0/auth0-react';
import { setContext } from '@apollo/client/link/context';

interface IApiProps {
    children: React.ReactElement | React.ReactElement[];
}

export const Api = ({ children }: IApiProps) => {
    const { getAccessTokenSilently } = useAuth0();
    const [client, setClient] = useState<ApolloClient<NormalizedCacheObject>>();

    useEffect(() => {
        const getToken = async () => {
            try {
                const accessToken = await getAccessTokenSilently();

                const httpLink = createHttpLink({
                    uri: 'https://holy-mammal-41.hasura.app/v1/graphql',
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
                            addTypename: false,
                        }),
                    }),
                );
            } catch (e) {
                console.log(e.message);
            }
        };

        getToken();
    }, [getAccessTokenSilently]);

    return client ? <ApolloProvider client={client}>{children}</ApolloProvider> : <div />;
};
