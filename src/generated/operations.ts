import * as Types from './types';

export type EmailFragment = { __typename?: 'Email' } & Pick<
    Types.Email,
    | 'summary'
    | 'sentDateInGMT'
    | 'subject'
    | 'messageId'
    | 'toAddress'
    | 'sender'
    | 'receivedTime'
    | 'fromAddress'
    | 'folderId'
>;

export type PostFragment = { __typename?: 'Post' } & Pick<Types.Post, 'id' | 'caption' | 'mediaUrl' | 'timestamp'>;

export type UserFragment = { __typename?: 'users' } & Pick<Types.Users, 'id' | 'name' | 'email_id' | 'admin'>;

export type SendEmailMutationVariables = Types.Exact<{
    toAddress: Types.Scalars['String'];
    subject: Types.Scalars['String'];
    message: Types.Scalars['String'];
}>;

export type SendEmailMutation = { __typename?: 'mutation_root' } & {
    sendEmail?: Types.Maybe<Array<Types.Maybe<{ __typename?: 'Email' } & EmailFragment>>>;
};

export type GetAllEmailsQueryVariables = Types.Exact<{ [key: string]: never }>;

export type GetAllEmailsQuery = { __typename?: 'query_root' } & {
    emails: Array<Types.Maybe<{ __typename?: 'Email' } & EmailFragment>>;
};

export type GetAllPostsQueryVariables = Types.Exact<{ [key: string]: never }>;

export type GetAllPostsQuery = { __typename?: 'query_root' } & {
    posts: Array<Types.Maybe<{ __typename?: 'Post' } & PostFragment>>;
};

export type GetAllUsersQueryVariables = Types.Exact<{ [key: string]: never }>;

export type GetAllUsersQuery = { __typename?: 'query_root' } & {
    users: Array<{ __typename?: 'users' } & UserFragment>;
};
