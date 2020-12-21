/* eslint-disable */
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
  json: any;
  timestamptz: any;
  uuid: any;
};

/** expression to compare columns of type Boolean. All fields are combined with logical 'AND'. */
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
  Public = 'PUBLIC'
}

/** columns and relationships of "ContactUs" */
export type ContactUs = {
  __typename?: 'ContactUs';
  email: Scalars['String'];
  id: Scalars['uuid'];
  name: Scalars['String'];
  query: Scalars['String'];
};

/** aggregated selection of "ContactUs" */
export type ContactUs_Aggregate = {
  __typename?: 'ContactUs_aggregate';
  aggregate?: Maybe<ContactUs_Aggregate_Fields>;
  nodes: Array<ContactUs>;
};

/** aggregate fields of "ContactUs" */
export type ContactUs_Aggregate_Fields = {
  __typename?: 'ContactUs_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<ContactUs_Max_Fields>;
  min?: Maybe<ContactUs_Min_Fields>;
};


/** aggregate fields of "ContactUs" */
export type ContactUs_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<ContactUs_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "ContactUs" */
export type ContactUs_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<ContactUs_Max_Order_By>;
  min?: Maybe<ContactUs_Min_Order_By>;
};

/** input type for inserting array relation for remote table "ContactUs" */
export type ContactUs_Arr_Rel_Insert_Input = {
  data: Array<ContactUs_Insert_Input>;
  on_conflict?: Maybe<ContactUs_On_Conflict>;
};

/** Boolean expression to filter rows from the table "ContactUs". All fields are combined with a logical 'AND'. */
export type ContactUs_Bool_Exp = {
  _and?: Maybe<Array<Maybe<ContactUs_Bool_Exp>>>;
  _not?: Maybe<ContactUs_Bool_Exp>;
  _or?: Maybe<Array<Maybe<ContactUs_Bool_Exp>>>;
  email?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  query?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "ContactUs" */
export enum ContactUs_Constraint {
  /** unique or primary key constraint */
  ContactUsPkey = 'ContactUs_pkey'
}

/** input type for inserting data into table "ContactUs" */
export type ContactUs_Insert_Input = {
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  query?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type ContactUs_Max_Fields = {
  __typename?: 'ContactUs_max_fields';
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  query?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "ContactUs" */
export type ContactUs_Max_Order_By = {
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  query?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type ContactUs_Min_Fields = {
  __typename?: 'ContactUs_min_fields';
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  query?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "ContactUs" */
export type ContactUs_Min_Order_By = {
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  query?: Maybe<Order_By>;
};

/** response of any mutation on the table "ContactUs" */
export type ContactUs_Mutation_Response = {
  __typename?: 'ContactUs_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<ContactUs>;
};

/** input type for inserting object relation for remote table "ContactUs" */
export type ContactUs_Obj_Rel_Insert_Input = {
  data: ContactUs_Insert_Input;
  on_conflict?: Maybe<ContactUs_On_Conflict>;
};

/** on conflict condition type for table "ContactUs" */
export type ContactUs_On_Conflict = {
  constraint: ContactUs_Constraint;
  update_columns: Array<ContactUs_Update_Column>;
  where?: Maybe<ContactUs_Bool_Exp>;
};

/** ordering options when selecting data from "ContactUs" */
export type ContactUs_Order_By = {
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  query?: Maybe<Order_By>;
};

/** primary key columns input for table: "ContactUs" */
export type ContactUs_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "ContactUs" */
export enum ContactUs_Select_Column {
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Query = 'query'
}

/** input type for updating data in table "ContactUs" */
export type ContactUs_Set_Input = {
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  query?: Maybe<Scalars['String']>;
};

/** update columns of table "ContactUs" */
export enum ContactUs_Update_Column {
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Query = 'query'
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

export type GetPostsOutput = {
  __typename?: 'GetPostsOutput';
  caption: Scalars['String'];
  id: Scalars['String'];
  mediaUrl: Scalars['String'];
  timestamp: Scalars['String'];
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
  getEmail?: Maybe<Email>;
  posts: Array<Maybe<Post>>;
  sentEmails: Array<Maybe<SentEmail>>;
};


export type QueryGetEmailArgs = {
  messageId: Scalars['String'];
};

export type SentEmail = {
  __typename?: 'SentEmail';
  calendarType: Scalars['Int'];
  flagid: Scalars['String'];
  folderId: Scalars['String'];
  fromAddress: Scalars['String'];
  hasAttachment: Scalars['String'];
  hasInline: Scalars['String'];
  messageId: Scalars['String'];
  priority: Scalars['String'];
  receivedTime: Scalars['String'];
  sender: Scalars['String'];
  sentDateInGMT: Scalars['String'];
  size: Scalars['String'];
  status: Scalars['String'];
  status2: Scalars['String'];
  subject: Scalars['String'];
  summary: Scalars['String'];
  toAddress: Scalars['String'];
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
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


export type Auth0_Profile = {
  __typename?: 'auth0_profile';
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
};


/** expression to compare columns of type json. All fields are combined with logical 'AND'. */
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

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  deleteEmail?: Maybe<Array<Maybe<Email>>>;
  /** delete data from the table: "ContactUs" */
  delete_ContactUs?: Maybe<ContactUs_Mutation_Response>;
  /** delete single row from the table: "ContactUs" */
  delete_ContactUs_by_pk?: Maybe<ContactUs>;
  /** delete data from the table: "online_users" */
  delete_online_users?: Maybe<Online_Users_Mutation_Response>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert a single row into the table: "ContactUs" */
  insert_ContactUs_one?: Maybe<ContactUs>;
  /** insert data into the table: "online_users" */
  insert_online_users?: Maybe<Online_Users_Mutation_Response>;
  /** insert a single row into the table: "online_users" */
  insert_online_users_one?: Maybe<Online_Users>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  sendEmail?: Maybe<Array<Maybe<Email>>>;
  /** insert data into the table: "ContactUs" */
  sendInquiries?: Maybe<ContactUs_Mutation_Response>;
  /** update data of the table: "ContactUs" */
  update_ContactUs?: Maybe<ContactUs_Mutation_Response>;
  /** update single row of the table: "ContactUs" */
  update_ContactUs_by_pk?: Maybe<ContactUs>;
  /** update data of the table: "online_users" */
  update_online_users?: Maybe<Online_Users_Mutation_Response>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
};


/** mutation root */
export type Mutation_RootDeleteEmailArgs = {
  folderId: Scalars['String'];
  messageId: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_ContactUsArgs = {
  where: ContactUs_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_ContactUs_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Online_UsersArgs = {
  where: Online_Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  auth0_id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootInsert_ContactUs_OneArgs = {
  object: ContactUs_Insert_Input;
  on_conflict?: Maybe<ContactUs_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Online_UsersArgs = {
  objects: Array<Online_Users_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Online_Users_OneArgs = {
  object: Online_Users_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: Maybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootSendEmailArgs = {
  message: Scalars['String'];
  subject: Scalars['String'];
  toAddress: Scalars['String'];
};


/** mutation root */
export type Mutation_RootSendInquiriesArgs = {
  objects: Array<ContactUs_Insert_Input>;
  on_conflict?: Maybe<ContactUs_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_ContactUsArgs = {
  _set?: Maybe<ContactUs_Set_Input>;
  where: ContactUs_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_ContactUs_By_PkArgs = {
  _set?: Maybe<ContactUs_Set_Input>;
  pk_columns: ContactUs_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Online_UsersArgs = {
  _set?: Maybe<Online_Users_Set_Input>;
  where: Online_Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: Maybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: Maybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};

/** columns and relationships of "online_users" */
export type Online_Users = {
  __typename?: 'online_users';
  last_seen?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregated selection of "online_users" */
export type Online_Users_Aggregate = {
  __typename?: 'online_users_aggregate';
  aggregate?: Maybe<Online_Users_Aggregate_Fields>;
  nodes: Array<Online_Users>;
};

/** aggregate fields of "online_users" */
export type Online_Users_Aggregate_Fields = {
  __typename?: 'online_users_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Online_Users_Max_Fields>;
  min?: Maybe<Online_Users_Min_Fields>;
};


/** aggregate fields of "online_users" */
export type Online_Users_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Online_Users_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "online_users" */
export type Online_Users_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Online_Users_Max_Order_By>;
  min?: Maybe<Online_Users_Min_Order_By>;
};

/** input type for inserting array relation for remote table "online_users" */
export type Online_Users_Arr_Rel_Insert_Input = {
  data: Array<Online_Users_Insert_Input>;
};

/** Boolean expression to filter rows from the table "online_users". All fields are combined with a logical 'AND'. */
export type Online_Users_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Online_Users_Bool_Exp>>>;
  _not?: Maybe<Online_Users_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Online_Users_Bool_Exp>>>;
  last_seen?: Maybe<Timestamptz_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
};

/** input type for inserting data into table "online_users" */
export type Online_Users_Insert_Input = {
  last_seen?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Online_Users_Max_Fields = {
  __typename?: 'online_users_max_fields';
  last_seen?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "online_users" */
export type Online_Users_Max_Order_By = {
  last_seen?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Online_Users_Min_Fields = {
  __typename?: 'online_users_min_fields';
  last_seen?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "online_users" */
export type Online_Users_Min_Order_By = {
  last_seen?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** response of any mutation on the table "online_users" */
export type Online_Users_Mutation_Response = {
  __typename?: 'online_users_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Online_Users>;
};

/** input type for inserting object relation for remote table "online_users" */
export type Online_Users_Obj_Rel_Insert_Input = {
  data: Online_Users_Insert_Input;
};

/** ordering options when selecting data from "online_users" */
export type Online_Users_Order_By = {
  last_seen?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** select columns of table "online_users" */
export enum Online_Users_Select_Column {
  /** column name */
  LastSeen = 'last_seen',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "online_users" */
export type Online_Users_Set_Input = {
  last_seen?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
};

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** query root */
export type Query_Root = {
  __typename?: 'query_root';
  /** fetch aggregated fields from the table: "ContactUs" */
  ContactUs_aggregate: ContactUs_Aggregate;
  /** fetch data from the table: "ContactUs" using primary key columns */
  ContactUs_by_pk?: Maybe<ContactUs>;
  /** perform the action: "auth0" */
  auth0?: Maybe<Auth0_Profile>;
  emails: Array<Maybe<Email>>;
  getEmail?: Maybe<Email>;
  /** fetch data from the table: "ContactUs" */
  getInquiries: Array<ContactUs>;
  /** fetch data from the table: "online_users" */
  online_users: Array<Online_Users>;
  /** fetch aggregated fields from the table: "online_users" */
  online_users_aggregate: Online_Users_Aggregate;
  posts: Array<Maybe<Post>>;
  sentEmails: Array<Maybe<SentEmail>>;
  /** fetch data from the table: "users" using primary key columns */
  user?: Maybe<Users>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
};


/** query root */
export type Query_RootContactUs_AggregateArgs = {
  distinct_on?: Maybe<Array<ContactUs_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ContactUs_Order_By>>;
  where?: Maybe<ContactUs_Bool_Exp>;
};


/** query root */
export type Query_RootContactUs_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootGetEmailArgs = {
  messageId: Scalars['String'];
};


/** query root */
export type Query_RootGetInquiriesArgs = {
  distinct_on?: Maybe<Array<ContactUs_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ContactUs_Order_By>>;
  where?: Maybe<ContactUs_Bool_Exp>;
};


/** query root */
export type Query_RootOnline_UsersArgs = {
  distinct_on?: Maybe<Array<Online_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Online_Users_Order_By>>;
  where?: Maybe<Online_Users_Bool_Exp>;
};


/** query root */
export type Query_RootOnline_Users_AggregateArgs = {
  distinct_on?: Maybe<Array<Online_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Online_Users_Order_By>>;
  where?: Maybe<Online_Users_Bool_Exp>;
};


/** query root */
export type Query_RootUserArgs = {
  auth0_id: Scalars['String'];
};


/** query root */
export type Query_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** query root */
export type Query_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};

/** subscription root */
export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch aggregated fields from the table: "ContactUs" */
  ContactUs_aggregate: ContactUs_Aggregate;
  /** fetch data from the table: "ContactUs" using primary key columns */
  ContactUs_by_pk?: Maybe<ContactUs>;
  /** perform the action: "auth0" */
  auth0?: Maybe<Auth0_Profile>;
  /** fetch data from the table: "ContactUs" */
  getInquiries: Array<ContactUs>;
  /** fetch data from the table: "online_users" */
  online_users: Array<Online_Users>;
  /** fetch aggregated fields from the table: "online_users" */
  online_users_aggregate: Online_Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  user?: Maybe<Users>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
};


/** subscription root */
export type Subscription_RootContactUs_AggregateArgs = {
  distinct_on?: Maybe<Array<ContactUs_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ContactUs_Order_By>>;
  where?: Maybe<ContactUs_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootContactUs_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootGetInquiriesArgs = {
  distinct_on?: Maybe<Array<ContactUs_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ContactUs_Order_By>>;
  where?: Maybe<ContactUs_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootOnline_UsersArgs = {
  distinct_on?: Maybe<Array<Online_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Online_Users_Order_By>>;
  where?: Maybe<Online_Users_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootOnline_Users_AggregateArgs = {
  distinct_on?: Maybe<Array<Online_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Online_Users_Order_By>>;
  where?: Maybe<Online_Users_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUserArgs = {
  auth0_id: Scalars['String'];
};


/** subscription root */
export type Subscription_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
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

/** columns and relationships of "users" */
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

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Users_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "users" */
export type Users_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Users_Max_Order_By>;
  min?: Maybe<Users_Min_Order_By>;
};

/** input type for inserting array relation for remote table "users" */
export type Users_Arr_Rel_Insert_Input = {
  data: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
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

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint */
  UsersEmailIdKey = 'users_email_id_key',
  /** unique or primary key constraint */
  UsersPkey = 'users_pkey'
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  admin?: Maybe<Scalars['Boolean']>;
  auth0_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email_id?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  auth0_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email_id?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "users" */
export type Users_Max_Order_By = {
  auth0_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  email_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  last_seen?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  auth0_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email_id?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "users" */
export type Users_Min_Order_By = {
  auth0_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  email_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  last_seen?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** on conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns: Array<Users_Update_Column>;
  where?: Maybe<Users_Bool_Exp>;
};

/** ordering options when selecting data from "users" */
export type Users_Order_By = {
  admin?: Maybe<Order_By>;
  auth0_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  email_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  last_seen?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** primary key columns input for table: "users" */
export type Users_Pk_Columns_Input = {
  auth0_id: Scalars['String'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  Admin = 'admin',
  /** column name */
  Auth0Id = 'auth0_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EmailId = 'email_id',
  /** column name */
  Id = 'id',
  /** column name */
  LastSeen = 'last_seen',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  admin?: Maybe<Scalars['Boolean']>;
  auth0_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email_id?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  Admin = 'admin',
  /** column name */
  Auth0Id = 'auth0_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EmailId = 'email_id',
  /** column name */
  Id = 'id',
  /** column name */
  LastSeen = 'last_seen',
  /** column name */
  Name = 'name'
}


/** expression to compare columns of type uuid. All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: Maybe<Scalars['uuid']>;
  _gt?: Maybe<Scalars['uuid']>;
  _gte?: Maybe<Scalars['uuid']>;
  _in?: Maybe<Array<Scalars['uuid']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['uuid']>;
  _lte?: Maybe<Scalars['uuid']>;
  _neq?: Maybe<Scalars['uuid']>;
  _nin?: Maybe<Array<Scalars['uuid']>>;
};

export type EmailFragment = (
  { __typename?: 'Email' }
  & Pick<Email, 'folderId' | 'fromAddress' | 'messageId' | 'receivedTime' | 'sender' | 'sentDateInGMT' | 'subject' | 'summary' | 'toAddress'>
);

export type InquiryFragment = (
  { __typename?: 'ContactUs' }
  & Pick<ContactUs, 'name' | 'email' | 'query' | 'id'>
);

export type PostFragment = (
  { __typename?: 'Post' }
  & Pick<Post, 'id' | 'caption' | 'mediaUrl' | 'timestamp'>
);

export type SentEmailFragment = (
  { __typename?: 'SentEmail' }
  & Pick<SentEmail, 'calendarType' | 'flagid' | 'folderId' | 'fromAddress' | 'hasAttachment' | 'hasInline' | 'messageId' | 'priority' | 'receivedTime' | 'sender' | 'sentDateInGMT' | 'size' | 'status' | 'status2' | 'subject' | 'summary' | 'toAddress'>
);

export type UserFragment = (
  { __typename?: 'users' }
  & Pick<Users, 'id' | 'name' | 'email_id' | 'admin'>
);

export type SendEmailMutationVariables = Exact<{
  toAddress: Scalars['String'];
  subject: Scalars['String'];
  message: Scalars['String'];
}>;


export type SendEmailMutation = (
  { __typename?: 'mutation_root' }
  & { sendEmail?: Maybe<Array<Maybe<(
    { __typename?: 'Email' }
    & EmailFragment
  )>>> }
);

export type SendInquiriesMutationVariables = Exact<{
  name: Scalars['String'];
  email: Scalars['String'];
  query: Scalars['String'];
}>;


export type SendInquiriesMutation = (
  { __typename?: 'mutation_root' }
  & { sendInquiries?: Maybe<(
    { __typename?: 'ContactUs_mutation_response' }
    & Pick<ContactUs_Mutation_Response, 'affected_rows'>
  )> }
);

export type GetAllEmailsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllEmailsQuery = (
  { __typename?: 'query_root' }
  & { emails: Array<Maybe<(
    { __typename?: 'Email' }
    & EmailFragment
  )>> }
);

export type GetEmailQueryVariables = Exact<{
  messageId: Scalars['String'];
}>;


export type GetEmailQuery = (
  { __typename?: 'query_root' }
  & { getEmail?: Maybe<(
    { __typename?: 'Email' }
    & EmailFragment
  )> }
);

export type GetAllPostsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllPostsQuery = (
  { __typename?: 'query_root' }
  & { posts: Array<Maybe<(
    { __typename?: 'Post' }
    & PostFragment
  )>> }
);

export type GetSentEmailsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSentEmailsQuery = (
  { __typename?: 'query_root' }
  & { sentEmails: Array<Maybe<(
    { __typename?: 'SentEmail' }
    & SentEmailFragment
  )>> }
);

export type GetAllUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllUsersQuery = (
  { __typename?: 'query_root' }
  & { users: Array<(
    { __typename?: 'users' }
    & UserFragment
  )> }
);

export const EmailFragmentDoc = gql`
    fragment Email on Email {
  folderId
  fromAddress
  messageId
  receivedTime
  sender
  sentDateInGMT
  subject
  summary
  toAddress
}
    `;
export const InquiryFragmentDoc = gql`
    fragment Inquiry on ContactUs {
  name
  email
  query
  id
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
export const SentEmailFragmentDoc = gql`
    fragment SentEmail on SentEmail {
  calendarType
  flagid
  folderId
  fromAddress
  hasAttachment
  hasInline
  messageId
  priority
  receivedTime
  sender
  sentDateInGMT
  size
  status
  status2
  subject
  summary
  toAddress
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
    ${EmailFragmentDoc}`;
export type SendEmailMutationFn = Apollo.MutationFunction<SendEmailMutation, SendEmailMutationVariables>;

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
export function useSendEmailMutation(baseOptions?: Apollo.MutationHookOptions<SendEmailMutation, SendEmailMutationVariables>) {
        return Apollo.useMutation<SendEmailMutation, SendEmailMutationVariables>(SendEmailDocument, baseOptions);
      }
export type SendEmailMutationHookResult = ReturnType<typeof useSendEmailMutation>;
export type SendEmailMutationResult = Apollo.MutationResult<SendEmailMutation>;
export type SendEmailMutationOptions = Apollo.BaseMutationOptions<SendEmailMutation, SendEmailMutationVariables>;
export const SendInquiriesDocument = gql`
    mutation sendInquiries($name: String!, $email: String!, $query: String!) {
  sendInquiries(objects: [{name: $name, email: $email, query: $query}]) {
    affected_rows
  }
}
    `;
export type SendInquiriesMutationFn = Apollo.MutationFunction<SendInquiriesMutation, SendInquiriesMutationVariables>;

/**
 * __useSendInquiriesMutation__
 *
 * To run a mutation, you first call `useSendInquiriesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendInquiriesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendInquiriesMutation, { data, loading, error }] = useSendInquiriesMutation({
 *   variables: {
 *      name: // value for 'name'
 *      email: // value for 'email'
 *      query: // value for 'query'
 *   },
 * });
 */
export function useSendInquiriesMutation(baseOptions?: Apollo.MutationHookOptions<SendInquiriesMutation, SendInquiriesMutationVariables>) {
        return Apollo.useMutation<SendInquiriesMutation, SendInquiriesMutationVariables>(SendInquiriesDocument, baseOptions);
      }
export type SendInquiriesMutationHookResult = ReturnType<typeof useSendInquiriesMutation>;
export type SendInquiriesMutationResult = Apollo.MutationResult<SendInquiriesMutation>;
export type SendInquiriesMutationOptions = Apollo.BaseMutationOptions<SendInquiriesMutation, SendInquiriesMutationVariables>;
export const GetAllEmailsDocument = gql`
    query GetAllEmails {
  emails {
    ...Email
  }
}
    ${EmailFragmentDoc}`;

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
export function useGetAllEmailsQuery(baseOptions?: Apollo.QueryHookOptions<GetAllEmailsQuery, GetAllEmailsQueryVariables>) {
        return Apollo.useQuery<GetAllEmailsQuery, GetAllEmailsQueryVariables>(GetAllEmailsDocument, baseOptions);
      }
export function useGetAllEmailsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllEmailsQuery, GetAllEmailsQueryVariables>) {
          return Apollo.useLazyQuery<GetAllEmailsQuery, GetAllEmailsQueryVariables>(GetAllEmailsDocument, baseOptions);
        }
export type GetAllEmailsQueryHookResult = ReturnType<typeof useGetAllEmailsQuery>;
export type GetAllEmailsLazyQueryHookResult = ReturnType<typeof useGetAllEmailsLazyQuery>;
export type GetAllEmailsQueryResult = Apollo.QueryResult<GetAllEmailsQuery, GetAllEmailsQueryVariables>;
export const GetEmailDocument = gql`
    query GetEmail($messageId: String!) {
  getEmail(messageId: $messageId) {
    ...Email
  }
}
    ${EmailFragmentDoc}`;

/**
 * __useGetEmailQuery__
 *
 * To run a query within a React component, call `useGetEmailQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEmailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEmailQuery({
 *   variables: {
 *      messageId: // value for 'messageId'
 *   },
 * });
 */
export function useGetEmailQuery(baseOptions: Apollo.QueryHookOptions<GetEmailQuery, GetEmailQueryVariables>) {
        return Apollo.useQuery<GetEmailQuery, GetEmailQueryVariables>(GetEmailDocument, baseOptions);
      }
export function useGetEmailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetEmailQuery, GetEmailQueryVariables>) {
          return Apollo.useLazyQuery<GetEmailQuery, GetEmailQueryVariables>(GetEmailDocument, baseOptions);
        }
export type GetEmailQueryHookResult = ReturnType<typeof useGetEmailQuery>;
export type GetEmailLazyQueryHookResult = ReturnType<typeof useGetEmailLazyQuery>;
export type GetEmailQueryResult = Apollo.QueryResult<GetEmailQuery, GetEmailQueryVariables>;
export const GetAllPostsDocument = gql`
    query GetAllPosts {
  posts {
    ...Post
  }
}
    ${PostFragmentDoc}`;

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
export function useGetAllPostsQuery(baseOptions?: Apollo.QueryHookOptions<GetAllPostsQuery, GetAllPostsQueryVariables>) {
        return Apollo.useQuery<GetAllPostsQuery, GetAllPostsQueryVariables>(GetAllPostsDocument, baseOptions);
      }
export function useGetAllPostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllPostsQuery, GetAllPostsQueryVariables>) {
          return Apollo.useLazyQuery<GetAllPostsQuery, GetAllPostsQueryVariables>(GetAllPostsDocument, baseOptions);
        }
export type GetAllPostsQueryHookResult = ReturnType<typeof useGetAllPostsQuery>;
export type GetAllPostsLazyQueryHookResult = ReturnType<typeof useGetAllPostsLazyQuery>;
export type GetAllPostsQueryResult = Apollo.QueryResult<GetAllPostsQuery, GetAllPostsQueryVariables>;
export const GetSentEmailsDocument = gql`
    query GetSentEmails {
  sentEmails {
    ...SentEmail
  }
}
    ${SentEmailFragmentDoc}`;

/**
 * __useGetSentEmailsQuery__
 *
 * To run a query within a React component, call `useGetSentEmailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSentEmailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSentEmailsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetSentEmailsQuery(baseOptions?: Apollo.QueryHookOptions<GetSentEmailsQuery, GetSentEmailsQueryVariables>) {
        return Apollo.useQuery<GetSentEmailsQuery, GetSentEmailsQueryVariables>(GetSentEmailsDocument, baseOptions);
      }
export function useGetSentEmailsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSentEmailsQuery, GetSentEmailsQueryVariables>) {
          return Apollo.useLazyQuery<GetSentEmailsQuery, GetSentEmailsQueryVariables>(GetSentEmailsDocument, baseOptions);
        }
export type GetSentEmailsQueryHookResult = ReturnType<typeof useGetSentEmailsQuery>;
export type GetSentEmailsLazyQueryHookResult = ReturnType<typeof useGetSentEmailsLazyQuery>;
export type GetSentEmailsQueryResult = Apollo.QueryResult<GetSentEmailsQuery, GetSentEmailsQueryVariables>;
export const GetAllUsersDocument = gql`
    query GetAllUsers {
  users {
    ...User
  }
}
    ${UserFragmentDoc}`;

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
export function useGetAllUsersQuery(baseOptions?: Apollo.QueryHookOptions<GetAllUsersQuery, GetAllUsersQueryVariables>) {
        return Apollo.useQuery<GetAllUsersQuery, GetAllUsersQueryVariables>(GetAllUsersDocument, baseOptions);
      }
export function useGetAllUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllUsersQuery, GetAllUsersQueryVariables>) {
          return Apollo.useLazyQuery<GetAllUsersQuery, GetAllUsersQueryVariables>(GetAllUsersDocument, baseOptions);
        }
export type GetAllUsersQueryHookResult = ReturnType<typeof useGetAllUsersQuery>;
export type GetAllUsersLazyQueryHookResult = ReturnType<typeof useGetAllUsersLazyQuery>;
export type GetAllUsersQueryResult = Apollo.QueryResult<GetAllUsersQuery, GetAllUsersQueryVariables>;