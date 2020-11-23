export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    json: any;
    timestamptz: any;
    Upload: any;
    uuid: any;
};

export type Auth0_Profile = {
    __typename?: 'auth0_profile';
    email?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['String']>;
    picture?: Maybe<Scalars['String']>;
};

export type Boolean_Comparison_Exp = {
    _eq?: Maybe<Scalars['Boolean']>;
    _gt?: Maybe<Scalars['Boolean']>;
    _gte?: Maybe<Scalars['Boolean']>;
    _in?: Maybe<Array<Scalars['Boolean']>>;
    _is_null?: Maybe<Scalars['Boolean']>;
    _lt?: Maybe<Scalars['Boolean']>;
    _lte?: Maybe<Scalars['Boolean']>;
    _neq?: Maybe<Scalars['Boolean']>;
    _nin?: Maybe<Array<Scalars['Boolean']>>;
};

export enum CacheControlScope {
    Private = 'PRIVATE',
    Public = 'PUBLIC',
}

export type Email = {
    __typename?: 'Email';
    folderId: Scalars['String'];
    fromAddress: Scalars['String'];
    messageId: Scalars['String'];
    receivedTime: Scalars['String'];
    sender: Scalars['String'];
    sentDateInGMT: Scalars['String'];
    subject: Scalars['String'];
    summary: Scalars['String'];
    toAddress: Scalars['String'];
};

export type Json_Comparison_Exp = {
    _eq?: Maybe<Scalars['json']>;
    _gt?: Maybe<Scalars['json']>;
    _gte?: Maybe<Scalars['json']>;
    _in?: Maybe<Array<Scalars['json']>>;
    _is_null?: Maybe<Scalars['Boolean']>;
    _lt?: Maybe<Scalars['json']>;
    _lte?: Maybe<Scalars['json']>;
    _neq?: Maybe<Scalars['json']>;
    _nin?: Maybe<Array<Scalars['json']>>;
};

export type Mutation = {
    __typename?: 'Mutation';
    deleteEmail?: Maybe<Array<Maybe<Email>>>;
    sendEmail?: Maybe<Array<Maybe<Email>>>;
};

export type MutationDeleteEmailArgs = {
    folderId: Scalars['String'];
    messageId: Scalars['String'];
};

export type MutationSendEmailArgs = {
    message: Scalars['String'];
    subject: Scalars['String'];
    toAddress: Scalars['String'];
};

export type Mutation_Root = {
    __typename?: 'mutation_root';
    deleteEmail?: Maybe<Array<Maybe<Email>>>;
    delete_online_users?: Maybe<Online_Users_Mutation_Response>;
    delete_users?: Maybe<Users_Mutation_Response>;
    delete_users_by_pk?: Maybe<Users>;
    insert_online_users?: Maybe<Online_Users_Mutation_Response>;
    insert_online_users_one?: Maybe<Online_Users>;
    insert_users?: Maybe<Users_Mutation_Response>;
    insert_users_one?: Maybe<Users>;
    sendEmail?: Maybe<Array<Maybe<Email>>>;
    update_online_users?: Maybe<Online_Users_Mutation_Response>;
    update_users?: Maybe<Users_Mutation_Response>;
    update_users_by_pk?: Maybe<Users>;
};

export type Mutation_RootDeleteEmailArgs = {
    folderId: Scalars['String'];
    messageId: Scalars['String'];
};

export type Mutation_RootDelete_Online_UsersArgs = {
    where: Online_Users_Bool_Exp;
};

export type Mutation_RootDelete_UsersArgs = {
    where: Users_Bool_Exp;
};

export type Mutation_RootDelete_Users_By_PkArgs = {
    auth0_id: Scalars['String'];
};

export type Mutation_RootInsert_Online_UsersArgs = {
    objects: Array<Online_Users_Insert_Input>;
};

export type Mutation_RootInsert_Online_Users_OneArgs = {
    object: Online_Users_Insert_Input;
};

export type Mutation_RootInsert_UsersArgs = {
    objects: Array<Users_Insert_Input>;
    on_conflict?: Maybe<Users_On_Conflict>;
};

export type Mutation_RootInsert_Users_OneArgs = {
    object: Users_Insert_Input;
    on_conflict?: Maybe<Users_On_Conflict>;
};

export type Mutation_RootSendEmailArgs = {
    message: Scalars['String'];
    subject: Scalars['String'];
    toAddress: Scalars['String'];
};

export type Mutation_RootUpdate_Online_UsersArgs = {
    _set?: Maybe<Online_Users_Set_Input>;
    where: Online_Users_Bool_Exp;
};

export type Mutation_RootUpdate_UsersArgs = {
    _set?: Maybe<Users_Set_Input>;
    where: Users_Bool_Exp;
};

export type Mutation_RootUpdate_Users_By_PkArgs = {
    _set?: Maybe<Users_Set_Input>;
    pk_columns: Users_Pk_Columns_Input;
};

export type Online_Users = {
    __typename?: 'online_users';
    last_seen?: Maybe<Scalars['timestamptz']>;
    name?: Maybe<Scalars['String']>;
};

export type Online_Users_Aggregate = {
    __typename?: 'online_users_aggregate';
    aggregate?: Maybe<Online_Users_Aggregate_Fields>;
    nodes: Array<Online_Users>;
};

export type Online_Users_Aggregate_Fields = {
    __typename?: 'online_users_aggregate_fields';
    count?: Maybe<Scalars['Int']>;
    max?: Maybe<Online_Users_Max_Fields>;
    min?: Maybe<Online_Users_Min_Fields>;
};

export type Online_Users_Aggregate_FieldsCountArgs = {
    columns?: Maybe<Array<Online_Users_Select_Column>>;
    distinct?: Maybe<Scalars['Boolean']>;
};

export type Online_Users_Aggregate_Order_By = {
    count?: Maybe<Order_By>;
    max?: Maybe<Online_Users_Max_Order_By>;
    min?: Maybe<Online_Users_Min_Order_By>;
};

export type Online_Users_Arr_Rel_Insert_Input = {
    data: Array<Online_Users_Insert_Input>;
};

export type Online_Users_Bool_Exp = {
    _and?: Maybe<Array<Maybe<Online_Users_Bool_Exp>>>;
    _not?: Maybe<Online_Users_Bool_Exp>;
    _or?: Maybe<Array<Maybe<Online_Users_Bool_Exp>>>;
    last_seen?: Maybe<Timestamptz_Comparison_Exp>;
    name?: Maybe<String_Comparison_Exp>;
};

export type Online_Users_Insert_Input = {
    last_seen?: Maybe<Scalars['timestamptz']>;
    name?: Maybe<Scalars['String']>;
};

export type Online_Users_Max_Fields = {
    __typename?: 'online_users_max_fields';
    last_seen?: Maybe<Scalars['timestamptz']>;
    name?: Maybe<Scalars['String']>;
};

export type Online_Users_Max_Order_By = {
    last_seen?: Maybe<Order_By>;
    name?: Maybe<Order_By>;
};

export type Online_Users_Min_Fields = {
    __typename?: 'online_users_min_fields';
    last_seen?: Maybe<Scalars['timestamptz']>;
    name?: Maybe<Scalars['String']>;
};

export type Online_Users_Min_Order_By = {
    last_seen?: Maybe<Order_By>;
    name?: Maybe<Order_By>;
};

export type Online_Users_Mutation_Response = {
    __typename?: 'online_users_mutation_response';
    affected_rows: Scalars['Int'];
    returning: Array<Online_Users>;
};

export type Online_Users_Obj_Rel_Insert_Input = {
    data: Online_Users_Insert_Input;
};

export type Online_Users_Order_By = {
    last_seen?: Maybe<Order_By>;
    name?: Maybe<Order_By>;
};

export enum Online_Users_Select_Column {
    LastSeen = 'last_seen',
    Name = 'name',
}

export type Online_Users_Set_Input = {
    last_seen?: Maybe<Scalars['timestamptz']>;
    name?: Maybe<Scalars['String']>;
};

export enum Order_By {
    Asc = 'asc',
    AscNullsFirst = 'asc_nulls_first',
    AscNullsLast = 'asc_nulls_last',
    Desc = 'desc',
    DescNullsFirst = 'desc_nulls_first',
    DescNullsLast = 'desc_nulls_last',
}

export type Post = {
    __typename?: 'Post';
    caption: Scalars['String'];
    id: Scalars['String'];
    mediaUrl: Scalars['String'];
    timestamp: Scalars['String'];
};

export type Query = {
    __typename?: 'Query';
    emails: Array<Maybe<Email>>;
    posts: Array<Maybe<Post>>;
};

export type Query_Root = {
    __typename?: 'query_root';
    auth0?: Maybe<Auth0_Profile>;
    emails: Array<Maybe<Email>>;
    online_users: Array<Online_Users>;
    online_users_aggregate: Online_Users_Aggregate;
    posts: Array<Maybe<Post>>;
    users: Array<Users>;
    users_aggregate: Users_Aggregate;
    users_by_pk?: Maybe<Users>;
};

export type Query_RootOnline_UsersArgs = {
    distinct_on?: Maybe<Array<Online_Users_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Online_Users_Order_By>>;
    where?: Maybe<Online_Users_Bool_Exp>;
};

export type Query_RootOnline_Users_AggregateArgs = {
    distinct_on?: Maybe<Array<Online_Users_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Online_Users_Order_By>>;
    where?: Maybe<Online_Users_Bool_Exp>;
};

export type Query_RootUsersArgs = {
    distinct_on?: Maybe<Array<Users_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Users_Order_By>>;
    where?: Maybe<Users_Bool_Exp>;
};

export type Query_RootUsers_AggregateArgs = {
    distinct_on?: Maybe<Array<Users_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Users_Order_By>>;
    where?: Maybe<Users_Bool_Exp>;
};

export type Query_RootUsers_By_PkArgs = {
    auth0_id: Scalars['String'];
};

export type String_Comparison_Exp = {
    _eq?: Maybe<Scalars['String']>;
    _gt?: Maybe<Scalars['String']>;
    _gte?: Maybe<Scalars['String']>;
    _ilike?: Maybe<Scalars['String']>;
    _in?: Maybe<Array<Scalars['String']>>;
    _is_null?: Maybe<Scalars['Boolean']>;
    _like?: Maybe<Scalars['String']>;
    _lt?: Maybe<Scalars['String']>;
    _lte?: Maybe<Scalars['String']>;
    _neq?: Maybe<Scalars['String']>;
    _nilike?: Maybe<Scalars['String']>;
    _nin?: Maybe<Array<Scalars['String']>>;
    _nlike?: Maybe<Scalars['String']>;
    _nsimilar?: Maybe<Scalars['String']>;
    _similar?: Maybe<Scalars['String']>;
};

export type Subscription_Root = {
    __typename?: 'subscription_root';
    auth0?: Maybe<Auth0_Profile>;
    online_users: Array<Online_Users>;
    online_users_aggregate: Online_Users_Aggregate;
    users: Array<Users>;
    users_aggregate: Users_Aggregate;
    users_by_pk?: Maybe<Users>;
};

export type Subscription_RootOnline_UsersArgs = {
    distinct_on?: Maybe<Array<Online_Users_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Online_Users_Order_By>>;
    where?: Maybe<Online_Users_Bool_Exp>;
};

export type Subscription_RootOnline_Users_AggregateArgs = {
    distinct_on?: Maybe<Array<Online_Users_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Online_Users_Order_By>>;
    where?: Maybe<Online_Users_Bool_Exp>;
};

export type Subscription_RootUsersArgs = {
    distinct_on?: Maybe<Array<Users_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Users_Order_By>>;
    where?: Maybe<Users_Bool_Exp>;
};

export type Subscription_RootUsers_AggregateArgs = {
    distinct_on?: Maybe<Array<Users_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Users_Order_By>>;
    where?: Maybe<Users_Bool_Exp>;
};

export type Subscription_RootUsers_By_PkArgs = {
    auth0_id: Scalars['String'];
};

export type Timestamptz_Comparison_Exp = {
    _eq?: Maybe<Scalars['timestamptz']>;
    _gt?: Maybe<Scalars['timestamptz']>;
    _gte?: Maybe<Scalars['timestamptz']>;
    _in?: Maybe<Array<Scalars['timestamptz']>>;
    _is_null?: Maybe<Scalars['Boolean']>;
    _lt?: Maybe<Scalars['timestamptz']>;
    _lte?: Maybe<Scalars['timestamptz']>;
    _neq?: Maybe<Scalars['timestamptz']>;
    _nin?: Maybe<Array<Scalars['timestamptz']>>;
};

export type Users = {
    __typename?: 'users';
    admin?: Maybe<Scalars['Boolean']>;
    auth0_id: Scalars['String'];
    created_at: Scalars['timestamptz'];
    email_id: Scalars['String'];
    id: Scalars['String'];
    last_seen?: Maybe<Scalars['timestamptz']>;
    name: Scalars['String'];
};

export type Users_Aggregate = {
    __typename?: 'users_aggregate';
    aggregate?: Maybe<Users_Aggregate_Fields>;
    nodes: Array<Users>;
};

export type Users_Aggregate_Fields = {
    __typename?: 'users_aggregate_fields';
    count?: Maybe<Scalars['Int']>;
    max?: Maybe<Users_Max_Fields>;
    min?: Maybe<Users_Min_Fields>;
};

export type Users_Aggregate_FieldsCountArgs = {
    columns?: Maybe<Array<Users_Select_Column>>;
    distinct?: Maybe<Scalars['Boolean']>;
};

export type Users_Aggregate_Order_By = {
    count?: Maybe<Order_By>;
    max?: Maybe<Users_Max_Order_By>;
    min?: Maybe<Users_Min_Order_By>;
};

export type Users_Arr_Rel_Insert_Input = {
    data: Array<Users_Insert_Input>;
    on_conflict?: Maybe<Users_On_Conflict>;
};

export type Users_Bool_Exp = {
    _and?: Maybe<Array<Maybe<Users_Bool_Exp>>>;
    _not?: Maybe<Users_Bool_Exp>;
    _or?: Maybe<Array<Maybe<Users_Bool_Exp>>>;
    admin?: Maybe<Boolean_Comparison_Exp>;
    auth0_id?: Maybe<String_Comparison_Exp>;
    created_at?: Maybe<Timestamptz_Comparison_Exp>;
    email_id?: Maybe<String_Comparison_Exp>;
    id?: Maybe<String_Comparison_Exp>;
    last_seen?: Maybe<Timestamptz_Comparison_Exp>;
    name?: Maybe<String_Comparison_Exp>;
};

export enum Users_Constraint {
    UsersEmailIdKey = 'users_email_id_key',
    UsersPkey = 'users_pkey',
}

export type Users_Insert_Input = {
    admin?: Maybe<Scalars['Boolean']>;
    auth0_id?: Maybe<Scalars['String']>;
    created_at?: Maybe<Scalars['timestamptz']>;
    email_id?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['String']>;
    last_seen?: Maybe<Scalars['timestamptz']>;
    name?: Maybe<Scalars['String']>;
};

export type Users_Max_Fields = {
    __typename?: 'users_max_fields';
    auth0_id?: Maybe<Scalars['String']>;
    created_at?: Maybe<Scalars['timestamptz']>;
    email_id?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['String']>;
    last_seen?: Maybe<Scalars['timestamptz']>;
    name?: Maybe<Scalars['String']>;
};

export type Users_Max_Order_By = {
    auth0_id?: Maybe<Order_By>;
    created_at?: Maybe<Order_By>;
    email_id?: Maybe<Order_By>;
    id?: Maybe<Order_By>;
    last_seen?: Maybe<Order_By>;
    name?: Maybe<Order_By>;
};

export type Users_Min_Fields = {
    __typename?: 'users_min_fields';
    auth0_id?: Maybe<Scalars['String']>;
    created_at?: Maybe<Scalars['timestamptz']>;
    email_id?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['String']>;
    last_seen?: Maybe<Scalars['timestamptz']>;
    name?: Maybe<Scalars['String']>;
};

export type Users_Min_Order_By = {
    auth0_id?: Maybe<Order_By>;
    created_at?: Maybe<Order_By>;
    email_id?: Maybe<Order_By>;
    id?: Maybe<Order_By>;
    last_seen?: Maybe<Order_By>;
    name?: Maybe<Order_By>;
};

export type Users_Mutation_Response = {
    __typename?: 'users_mutation_response';
    affected_rows: Scalars['Int'];
    returning: Array<Users>;
};

export type Users_Obj_Rel_Insert_Input = {
    data: Users_Insert_Input;
    on_conflict?: Maybe<Users_On_Conflict>;
};

export type Users_On_Conflict = {
    constraint: Users_Constraint;
    update_columns: Array<Users_Update_Column>;
    where?: Maybe<Users_Bool_Exp>;
};

export type Users_Order_By = {
    admin?: Maybe<Order_By>;
    auth0_id?: Maybe<Order_By>;
    created_at?: Maybe<Order_By>;
    email_id?: Maybe<Order_By>;
    id?: Maybe<Order_By>;
    last_seen?: Maybe<Order_By>;
    name?: Maybe<Order_By>;
};

export type Users_Pk_Columns_Input = {
    auth0_id: Scalars['String'];
};

export enum Users_Select_Column {
    Admin = 'admin',
    Auth0Id = 'auth0_id',
    CreatedAt = 'created_at',
    EmailId = 'email_id',
    Id = 'id',
    LastSeen = 'last_seen',
    Name = 'name',
}

export type Users_Set_Input = {
    admin?: Maybe<Scalars['Boolean']>;
    auth0_id?: Maybe<Scalars['String']>;
    created_at?: Maybe<Scalars['timestamptz']>;
    email_id?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['String']>;
    last_seen?: Maybe<Scalars['timestamptz']>;
    name?: Maybe<Scalars['String']>;
};

export enum Users_Update_Column {
    Admin = 'admin',
    Auth0Id = 'auth0_id',
    CreatedAt = 'created_at',
    EmailId = 'email_id',
    Id = 'id',
    LastSeen = 'last_seen',
    Name = 'name',
}