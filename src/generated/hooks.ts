import * as Types from './operations';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export const EmailFragmentDoc = gql`
    fragment Email on Email {
        summary
        sentDateInGMT
        subject
        messageId
        toAddress
        sender
        receivedTime
        fromAddress
        folderId
    }
`;
export const PostFragmentDoc = gql`
    fragment Post on Post {
        id
        caption
        mediaUrl
        timestamp
    }
`;
export const UserFragmentDoc = gql`
    fragment User on users {
        id
        name
        email_id
        admin
    }
`;
export const SendEmailDocument = gql`
    mutation sendEmail($toAddress: String!, $subject: String!, $message: String!) {
        sendEmail(toAddress: $toAddress, subject: $subject, message: $message) {
            ...Email
        }
    }
    ${EmailFragmentDoc}
`;
export type SendEmailMutationFn = Apollo.MutationFunction<Types.SendEmailMutation, Types.SendEmailMutationVariables>;

/**
 * __useSendEmailMutation__
 *
 * To run a mutation, you first call `useSendEmailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendEmailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendEmailMutation, { data, loading, error }] = useSendEmailMutation({
 *   variables: {
 *      toAddress: // value for 'toAddress'
 *      subject: // value for 'subject'
 *      message: // value for 'message'
 *   },
 * });
 */
export function useSendEmailMutation(
    baseOptions?: Apollo.MutationHookOptions<Types.SendEmailMutation, Types.SendEmailMutationVariables>,
) {
    return Apollo.useMutation<Types.SendEmailMutation, Types.SendEmailMutationVariables>(
        SendEmailDocument,
        baseOptions,
    );
}
export type SendEmailMutationHookResult = ReturnType<typeof useSendEmailMutation>;
export type SendEmailMutationResult = Apollo.MutationResult<Types.SendEmailMutation>;
export type SendEmailMutationOptions = Apollo.BaseMutationOptions<
    Types.SendEmailMutation,
    Types.SendEmailMutationVariables
>;
export const GetAllEmailsDocument = gql`
    query GetAllEmails {
        emails {
            ...Email
        }
    }
    ${EmailFragmentDoc}
`;

/**
 * __useGetAllEmailsQuery__
 *
 * To run a query within a React component, call `useGetAllEmailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllEmailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllEmailsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllEmailsQuery(
    baseOptions?: Apollo.QueryHookOptions<Types.GetAllEmailsQuery, Types.GetAllEmailsQueryVariables>,
) {
    return Apollo.useQuery<Types.GetAllEmailsQuery, Types.GetAllEmailsQueryVariables>(
        GetAllEmailsDocument,
        baseOptions,
    );
}
export function useGetAllEmailsLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<Types.GetAllEmailsQuery, Types.GetAllEmailsQueryVariables>,
) {
    return Apollo.useLazyQuery<Types.GetAllEmailsQuery, Types.GetAllEmailsQueryVariables>(
        GetAllEmailsDocument,
        baseOptions,
    );
}
export type GetAllEmailsQueryHookResult = ReturnType<typeof useGetAllEmailsQuery>;
export type GetAllEmailsLazyQueryHookResult = ReturnType<typeof useGetAllEmailsLazyQuery>;
export type GetAllEmailsQueryResult = Apollo.QueryResult<Types.GetAllEmailsQuery, Types.GetAllEmailsQueryVariables>;
export const GetAllPostsDocument = gql`
    query GetAllPosts {
        posts {
            ...Post
        }
    }
    ${PostFragmentDoc}
`;

/**
 * __useGetAllPostsQuery__
 *
 * To run a query within a React component, call `useGetAllPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllPostsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllPostsQuery(
    baseOptions?: Apollo.QueryHookOptions<Types.GetAllPostsQuery, Types.GetAllPostsQueryVariables>,
) {
    return Apollo.useQuery<Types.GetAllPostsQuery, Types.GetAllPostsQueryVariables>(GetAllPostsDocument, baseOptions);
}
export function useGetAllPostsLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<Types.GetAllPostsQuery, Types.GetAllPostsQueryVariables>,
) {
    return Apollo.useLazyQuery<Types.GetAllPostsQuery, Types.GetAllPostsQueryVariables>(
        GetAllPostsDocument,
        baseOptions,
    );
}
export type GetAllPostsQueryHookResult = ReturnType<typeof useGetAllPostsQuery>;
export type GetAllPostsLazyQueryHookResult = ReturnType<typeof useGetAllPostsLazyQuery>;
export type GetAllPostsQueryResult = Apollo.QueryResult<Types.GetAllPostsQuery, Types.GetAllPostsQueryVariables>;
export const GetAllUsersDocument = gql`
    query GetAllUsers {
        users {
            ...User
        }
    }
    ${UserFragmentDoc}
`;

/**
 * __useGetAllUsersQuery__
 *
 * To run a query within a React component, call `useGetAllUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllUsersQuery(
    baseOptions?: Apollo.QueryHookOptions<Types.GetAllUsersQuery, Types.GetAllUsersQueryVariables>,
) {
    return Apollo.useQuery<Types.GetAllUsersQuery, Types.GetAllUsersQueryVariables>(GetAllUsersDocument, baseOptions);
}
export function useGetAllUsersLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<Types.GetAllUsersQuery, Types.GetAllUsersQueryVariables>,
) {
    return Apollo.useLazyQuery<Types.GetAllUsersQuery, Types.GetAllUsersQueryVariables>(
        GetAllUsersDocument,
        baseOptions,
    );
}
export type GetAllUsersQueryHookResult = ReturnType<typeof useGetAllUsersQuery>;
export type GetAllUsersLazyQueryHookResult = ReturnType<typeof useGetAllUsersLazyQuery>;
export type GetAllUsersQueryResult = Apollo.QueryResult<Types.GetAllUsersQuery, Types.GetAllUsersQueryVariables>;
