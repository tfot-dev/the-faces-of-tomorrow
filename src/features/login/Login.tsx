import React from 'react';
import {gql, useQuery} from "@apollo/client";

const Users = gql`
    query GetAllUsers {
        users {
            id
            name
        }
    }
`;

export const Login = () => {
    const { loading, error, data } = useQuery(Users);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    console.log(data);

    return (
        <div>

        </div>
    );
};
