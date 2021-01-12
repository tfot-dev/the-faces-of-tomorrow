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

export type Email = {
  __typename?: 'Email';
  calendarType: Scalars['Int'];
  ccAddress: Scalars['String'];
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
  status2: Scalars['String'];
  subject: Scalars['String'];
  summary: Scalars['String'];
  toAddress: Scalars['String'];
};

export type EmailContent = {
  __typename?: 'EmailContent';
  blockContent?: Maybe<Scalars['String']>;
  content: Scalars['String'];
  messageId: Scalars['Float'];
};

export type GetPostsOutput = {
  __typename?: 'GetPostsOutput';
  caption: Scalars['String'];
  id: Scalars['String'];
  mediaUrl: Scalars['String'];
  timestamp: Scalars['String'];
};

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

export type Media = {
  __typename?: 'Media';
  id: Scalars['String'];
  media_url: Scalars['String'];
  thumbnail_url?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  deleteEmail?: Maybe<ResponseStatus>;
  sendEmail?: Maybe<SendEmailResponse>;
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
  media: Array<Maybe<Media>>;
  media_type: Scalars['String'];
  media_url: Scalars['String'];
  permalink: Scalars['String'];
  thumbnail_url?: Maybe<Scalars['String']>;
  timestamp: Scalars['String'];
  username: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  emails: Array<Maybe<Email>>;
  getEmail?: Maybe<EmailContent>;
  post?: Maybe<Post>;
  posts: Array<Maybe<Post>>;
  sentEmails: Array<Maybe<Email>>;
};


export type QueryGetEmailArgs = {
  folderId: Scalars['String'];
  messageId: Scalars['String'];
};


export type QueryPostArgs = {
  id: Scalars['String'];
};

export type ResponseStatus = {
  __typename?: 'ResponseStatus';
  code?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
};

export type SendEmailData = {
  __typename?: 'SendEmailData';
  content?: Maybe<Scalars['String']>;
  fromAddress?: Maybe<Scalars['String']>;
  messageId?: Maybe<Scalars['String']>;
  subject?: Maybe<Scalars['String']>;
  toAddress?: Maybe<Scalars['String']>;
};

export type SendEmailResponse = {
  __typename?: 'SendEmailResponse';
  data?: Maybe<SendEmailData>;
  status?: Maybe<ResponseStatus>;
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


/** columns and relationships of "assigned_status_lookup" */
export type Assigned_Status_Lookup = {
  __typename?: 'assigned_status_lookup';
  id: Scalars['uuid'];
  user_id: Scalars['String'];
};

/** aggregated selection of "assigned_status_lookup" */
export type Assigned_Status_Lookup_Aggregate = {
  __typename?: 'assigned_status_lookup_aggregate';
  aggregate?: Maybe<Assigned_Status_Lookup_Aggregate_Fields>;
  nodes: Array<Assigned_Status_Lookup>;
};

/** aggregate fields of "assigned_status_lookup" */
export type Assigned_Status_Lookup_Aggregate_Fields = {
  __typename?: 'assigned_status_lookup_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Assigned_Status_Lookup_Max_Fields>;
  min?: Maybe<Assigned_Status_Lookup_Min_Fields>;
};


/** aggregate fields of "assigned_status_lookup" */
export type Assigned_Status_Lookup_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Assigned_Status_Lookup_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "assigned_status_lookup" */
export type Assigned_Status_Lookup_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Assigned_Status_Lookup_Max_Order_By>;
  min?: Maybe<Assigned_Status_Lookup_Min_Order_By>;
};

/** input type for inserting array relation for remote table "assigned_status_lookup" */
export type Assigned_Status_Lookup_Arr_Rel_Insert_Input = {
  data: Array<Assigned_Status_Lookup_Insert_Input>;
  on_conflict?: Maybe<Assigned_Status_Lookup_On_Conflict>;
};

/** Boolean expression to filter rows from the table "assigned_status_lookup". All fields are combined with a logical 'AND'. */
export type Assigned_Status_Lookup_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Assigned_Status_Lookup_Bool_Exp>>>;
  _not?: Maybe<Assigned_Status_Lookup_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Assigned_Status_Lookup_Bool_Exp>>>;
  id?: Maybe<Uuid_Comparison_Exp>;
  user_id?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "assigned_status_lookup" */
export enum Assigned_Status_Lookup_Constraint {
  /** unique or primary key constraint */
  AssignedStatusLookupIdKey = 'assigned_status_lookup_id_key'
}

/** input type for inserting data into table "assigned_status_lookup" */
export type Assigned_Status_Lookup_Insert_Input = {
  id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Assigned_Status_Lookup_Max_Fields = {
  __typename?: 'assigned_status_lookup_max_fields';
  id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "assigned_status_lookup" */
export type Assigned_Status_Lookup_Max_Order_By = {
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Assigned_Status_Lookup_Min_Fields = {
  __typename?: 'assigned_status_lookup_min_fields';
  id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "assigned_status_lookup" */
export type Assigned_Status_Lookup_Min_Order_By = {
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "assigned_status_lookup" */
export type Assigned_Status_Lookup_Mutation_Response = {
  __typename?: 'assigned_status_lookup_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Assigned_Status_Lookup>;
};

/** input type for inserting object relation for remote table "assigned_status_lookup" */
export type Assigned_Status_Lookup_Obj_Rel_Insert_Input = {
  data: Assigned_Status_Lookup_Insert_Input;
  on_conflict?: Maybe<Assigned_Status_Lookup_On_Conflict>;
};

/** on conflict condition type for table "assigned_status_lookup" */
export type Assigned_Status_Lookup_On_Conflict = {
  constraint: Assigned_Status_Lookup_Constraint;
  update_columns: Array<Assigned_Status_Lookup_Update_Column>;
  where?: Maybe<Assigned_Status_Lookup_Bool_Exp>;
};

/** ordering options when selecting data from "assigned_status_lookup" */
export type Assigned_Status_Lookup_Order_By = {
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** select columns of table "assigned_status_lookup" */
export enum Assigned_Status_Lookup_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "assigned_status_lookup" */
export type Assigned_Status_Lookup_Set_Input = {
  id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['String']>;
};

/** update columns of table "assigned_status_lookup" */
export enum Assigned_Status_Lookup_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  UserId = 'user_id'
}

export type Auth0_Profile = {
  __typename?: 'auth0_profile';
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
};

/** columns and relationships of "featured_story_lookup" */
export type Featured_Story_Lookup = {
  __typename?: 'featured_story_lookup';
  id: Scalars['uuid'];
};

/** aggregated selection of "featured_story_lookup" */
export type Featured_Story_Lookup_Aggregate = {
  __typename?: 'featured_story_lookup_aggregate';
  aggregate?: Maybe<Featured_Story_Lookup_Aggregate_Fields>;
  nodes: Array<Featured_Story_Lookup>;
};

/** aggregate fields of "featured_story_lookup" */
export type Featured_Story_Lookup_Aggregate_Fields = {
  __typename?: 'featured_story_lookup_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Featured_Story_Lookup_Max_Fields>;
  min?: Maybe<Featured_Story_Lookup_Min_Fields>;
};


/** aggregate fields of "featured_story_lookup" */
export type Featured_Story_Lookup_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Featured_Story_Lookup_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "featured_story_lookup" */
export type Featured_Story_Lookup_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Featured_Story_Lookup_Max_Order_By>;
  min?: Maybe<Featured_Story_Lookup_Min_Order_By>;
};

/** input type for inserting array relation for remote table "featured_story_lookup" */
export type Featured_Story_Lookup_Arr_Rel_Insert_Input = {
  data: Array<Featured_Story_Lookup_Insert_Input>;
  on_conflict?: Maybe<Featured_Story_Lookup_On_Conflict>;
};

/** Boolean expression to filter rows from the table "featured_story_lookup". All fields are combined with a logical 'AND'. */
export type Featured_Story_Lookup_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Featured_Story_Lookup_Bool_Exp>>>;
  _not?: Maybe<Featured_Story_Lookup_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Featured_Story_Lookup_Bool_Exp>>>;
  id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "featured_story_lookup" */
export enum Featured_Story_Lookup_Constraint {
  /** unique or primary key constraint */
  FeaturedStoryPkey = 'featured_story_pkey'
}

/** input type for inserting data into table "featured_story_lookup" */
export type Featured_Story_Lookup_Insert_Input = {
  id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Featured_Story_Lookup_Max_Fields = {
  __typename?: 'featured_story_lookup_max_fields';
  id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "featured_story_lookup" */
export type Featured_Story_Lookup_Max_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Featured_Story_Lookup_Min_Fields = {
  __typename?: 'featured_story_lookup_min_fields';
  id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "featured_story_lookup" */
export type Featured_Story_Lookup_Min_Order_By = {
  id?: Maybe<Order_By>;
};

/** response of any mutation on the table "featured_story_lookup" */
export type Featured_Story_Lookup_Mutation_Response = {
  __typename?: 'featured_story_lookup_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Featured_Story_Lookup>;
};

/** input type for inserting object relation for remote table "featured_story_lookup" */
export type Featured_Story_Lookup_Obj_Rel_Insert_Input = {
  data: Featured_Story_Lookup_Insert_Input;
  on_conflict?: Maybe<Featured_Story_Lookup_On_Conflict>;
};

/** on conflict condition type for table "featured_story_lookup" */
export type Featured_Story_Lookup_On_Conflict = {
  constraint: Featured_Story_Lookup_Constraint;
  update_columns: Array<Featured_Story_Lookup_Update_Column>;
  where?: Maybe<Featured_Story_Lookup_Bool_Exp>;
};

/** ordering options when selecting data from "featured_story_lookup" */
export type Featured_Story_Lookup_Order_By = {
  id?: Maybe<Order_By>;
};

/** primary key columns input for table: "featured_story_lookup" */
export type Featured_Story_Lookup_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "featured_story_lookup" */
export enum Featured_Story_Lookup_Select_Column {
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "featured_story_lookup" */
export type Featured_Story_Lookup_Set_Input = {
  id?: Maybe<Scalars['uuid']>;
};

/** update columns of table "featured_story_lookup" */
export enum Featured_Story_Lookup_Update_Column {
  /** column name */
  Id = 'id'
}

/** columns and relationships of "inquiries" */
export type Inquiries = {
  __typename?: 'inquiries';
  email: Scalars['String'];
  id: Scalars['uuid'];
  name: Scalars['String'];
  query: Scalars['String'];
  /** A computed field, executes function "read_inquiries_messages" */
  read_status?: Maybe<Scalars['Boolean']>;
  timestamp?: Maybe<Scalars['timestamptz']>;
};

/** aggregated selection of "inquiries" */
export type Inquiries_Aggregate = {
  __typename?: 'inquiries_aggregate';
  aggregate?: Maybe<Inquiries_Aggregate_Fields>;
  nodes: Array<Inquiries>;
};

/** aggregate fields of "inquiries" */
export type Inquiries_Aggregate_Fields = {
  __typename?: 'inquiries_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Inquiries_Max_Fields>;
  min?: Maybe<Inquiries_Min_Fields>;
};


/** aggregate fields of "inquiries" */
export type Inquiries_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Inquiries_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "inquiries" */
export type Inquiries_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Inquiries_Max_Order_By>;
  min?: Maybe<Inquiries_Min_Order_By>;
};

/** input type for inserting array relation for remote table "inquiries" */
export type Inquiries_Arr_Rel_Insert_Input = {
  data: Array<Inquiries_Insert_Input>;
  on_conflict?: Maybe<Inquiries_On_Conflict>;
};

/** Boolean expression to filter rows from the table "inquiries". All fields are combined with a logical 'AND'. */
export type Inquiries_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Inquiries_Bool_Exp>>>;
  _not?: Maybe<Inquiries_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Inquiries_Bool_Exp>>>;
  email?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  query?: Maybe<String_Comparison_Exp>;
  timestamp?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "inquiries" */
export enum Inquiries_Constraint {
  /** unique or primary key constraint */
  ContactUsPkey = 'ContactUs_pkey'
}

/** input type for inserting data into table "inquiries" */
export type Inquiries_Insert_Input = {
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  query?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Inquiries_Max_Fields = {
  __typename?: 'inquiries_max_fields';
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  query?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "inquiries" */
export type Inquiries_Max_Order_By = {
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  query?: Maybe<Order_By>;
  timestamp?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Inquiries_Min_Fields = {
  __typename?: 'inquiries_min_fields';
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  query?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "inquiries" */
export type Inquiries_Min_Order_By = {
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  query?: Maybe<Order_By>;
  timestamp?: Maybe<Order_By>;
};

/** response of any mutation on the table "inquiries" */
export type Inquiries_Mutation_Response = {
  __typename?: 'inquiries_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Inquiries>;
};

/** input type for inserting object relation for remote table "inquiries" */
export type Inquiries_Obj_Rel_Insert_Input = {
  data: Inquiries_Insert_Input;
  on_conflict?: Maybe<Inquiries_On_Conflict>;
};

/** on conflict condition type for table "inquiries" */
export type Inquiries_On_Conflict = {
  constraint: Inquiries_Constraint;
  update_columns: Array<Inquiries_Update_Column>;
  where?: Maybe<Inquiries_Bool_Exp>;
};

/** ordering options when selecting data from "inquiries" */
export type Inquiries_Order_By = {
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  query?: Maybe<Order_By>;
  timestamp?: Maybe<Order_By>;
};

/** primary key columns input for table: "inquiries" */
export type Inquiries_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "inquiries" */
export enum Inquiries_Select_Column {
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Query = 'query',
  /** column name */
  Timestamp = 'timestamp'
}

/** input type for updating data in table "inquiries" */
export type Inquiries_Set_Input = {
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  query?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "inquiries" */
export enum Inquiries_Update_Column {
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Query = 'query',
  /** column name */
  Timestamp = 'timestamp'
}


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
  deleteEmail?: Maybe<ResponseStatus>;
  /** delete data from the table: "assigned_status_lookup" */
  delete_assigned_status_lookup?: Maybe<Assigned_Status_Lookup_Mutation_Response>;
  /** delete data from the table: "featured_story_lookup" */
  delete_featured_story_lookup?: Maybe<Featured_Story_Lookup_Mutation_Response>;
  /** delete single row from the table: "featured_story_lookup" */
  delete_featured_story_lookup_by_pk?: Maybe<Featured_Story_Lookup>;
  /** delete data from the table: "inquiries" */
  delete_inquiries?: Maybe<Inquiries_Mutation_Response>;
  /** delete single row from the table: "inquiries" */
  delete_inquiries_by_pk?: Maybe<Inquiries>;
  /** delete data from the table: "read_status_lookup" */
  delete_read_status_lookup?: Maybe<Read_Status_Lookup_Mutation_Response>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** delete data from the table: "written_story" */
  delete_written_story?: Maybe<Written_Story_Mutation_Response>;
  /** delete data from the table: "your_story" */
  delete_your_story?: Maybe<Your_Story_Mutation_Response>;
  /** delete single row from the table: "your_story" */
  delete_your_story_by_pk?: Maybe<Your_Story>;
  /** insert data into the table: "assigned_status_lookup" */
  insert_assigned_status_lookup?: Maybe<Assigned_Status_Lookup_Mutation_Response>;
  /** insert a single row into the table: "assigned_status_lookup" */
  insert_assigned_status_lookup_one?: Maybe<Assigned_Status_Lookup>;
  /** insert data into the table: "featured_story_lookup" */
  insert_featured_story_lookup?: Maybe<Featured_Story_Lookup_Mutation_Response>;
  /** insert a single row into the table: "featured_story_lookup" */
  insert_featured_story_lookup_one?: Maybe<Featured_Story_Lookup>;
  /** insert a single row into the table: "inquiries" */
  insert_inquiries_one?: Maybe<Inquiries>;
  /** insert a single row into the table: "read_status_lookup" */
  insert_read_status_lookup_one?: Maybe<Read_Status_Lookup>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** insert data into the table: "written_story" */
  insert_written_story?: Maybe<Written_Story_Mutation_Response>;
  /** insert a single row into the table: "written_story" */
  insert_written_story_one?: Maybe<Written_Story>;
  /** insert data into the table: "your_story" */
  insert_your_story?: Maybe<Your_Story_Mutation_Response>;
  /** insert a single row into the table: "your_story" */
  insert_your_story_one?: Maybe<Your_Story>;
  sendEmail?: Maybe<SendEmailResponse>;
  /** insert data into the table: "inquiries" */
  sendInquiries?: Maybe<Inquiries_Mutation_Response>;
  /** insert data into the table: "read_status_lookup" */
  setReadStatus?: Maybe<Read_Status_Lookup_Mutation_Response>;
  /** update data of the table: "assigned_status_lookup" */
  update_assigned_status_lookup?: Maybe<Assigned_Status_Lookup_Mutation_Response>;
  /** update data of the table: "featured_story_lookup" */
  update_featured_story_lookup?: Maybe<Featured_Story_Lookup_Mutation_Response>;
  /** update single row of the table: "featured_story_lookup" */
  update_featured_story_lookup_by_pk?: Maybe<Featured_Story_Lookup>;
  /** update data of the table: "inquiries" */
  update_inquiries?: Maybe<Inquiries_Mutation_Response>;
  /** update single row of the table: "inquiries" */
  update_inquiries_by_pk?: Maybe<Inquiries>;
  /** update data of the table: "read_status_lookup" */
  update_read_status_lookup?: Maybe<Read_Status_Lookup_Mutation_Response>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
  /** update data of the table: "written_story" */
  update_written_story?: Maybe<Written_Story_Mutation_Response>;
  /** update data of the table: "your_story" */
  update_your_story?: Maybe<Your_Story_Mutation_Response>;
  /** update single row of the table: "your_story" */
  update_your_story_by_pk?: Maybe<Your_Story>;
};


/** mutation root */
export type Mutation_RootDeleteEmailArgs = {
  folderId: Scalars['String'];
  messageId: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Assigned_Status_LookupArgs = {
  where: Assigned_Status_Lookup_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Featured_Story_LookupArgs = {
  where: Featured_Story_Lookup_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Featured_Story_Lookup_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_InquiriesArgs = {
  where: Inquiries_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Inquiries_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Read_Status_LookupArgs = {
  where: Read_Status_Lookup_Bool_Exp;
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
export type Mutation_RootDelete_Written_StoryArgs = {
  where: Written_Story_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Your_StoryArgs = {
  where: Your_Story_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Your_Story_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_Assigned_Status_LookupArgs = {
  objects: Array<Assigned_Status_Lookup_Insert_Input>;
  on_conflict?: Maybe<Assigned_Status_Lookup_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Assigned_Status_Lookup_OneArgs = {
  object: Assigned_Status_Lookup_Insert_Input;
  on_conflict?: Maybe<Assigned_Status_Lookup_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Featured_Story_LookupArgs = {
  objects: Array<Featured_Story_Lookup_Insert_Input>;
  on_conflict?: Maybe<Featured_Story_Lookup_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Featured_Story_Lookup_OneArgs = {
  object: Featured_Story_Lookup_Insert_Input;
  on_conflict?: Maybe<Featured_Story_Lookup_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Inquiries_OneArgs = {
  object: Inquiries_Insert_Input;
  on_conflict?: Maybe<Inquiries_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Read_Status_Lookup_OneArgs = {
  object: Read_Status_Lookup_Insert_Input;
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
export type Mutation_RootInsert_Written_StoryArgs = {
  objects: Array<Written_Story_Insert_Input>;
  on_conflict?: Maybe<Written_Story_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Written_Story_OneArgs = {
  object: Written_Story_Insert_Input;
  on_conflict?: Maybe<Written_Story_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Your_StoryArgs = {
  objects: Array<Your_Story_Insert_Input>;
  on_conflict?: Maybe<Your_Story_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Your_Story_OneArgs = {
  object: Your_Story_Insert_Input;
  on_conflict?: Maybe<Your_Story_On_Conflict>;
};


/** mutation root */
export type Mutation_RootSendEmailArgs = {
  message: Scalars['String'];
  subject: Scalars['String'];
  toAddress: Scalars['String'];
};


/** mutation root */
export type Mutation_RootSendInquiriesArgs = {
  objects: Array<Inquiries_Insert_Input>;
  on_conflict?: Maybe<Inquiries_On_Conflict>;
};


/** mutation root */
export type Mutation_RootSetReadStatusArgs = {
  objects: Array<Read_Status_Lookup_Insert_Input>;
};


/** mutation root */
export type Mutation_RootUpdate_Assigned_Status_LookupArgs = {
  _set?: Maybe<Assigned_Status_Lookup_Set_Input>;
  where: Assigned_Status_Lookup_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Featured_Story_LookupArgs = {
  _set?: Maybe<Featured_Story_Lookup_Set_Input>;
  where: Featured_Story_Lookup_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Featured_Story_Lookup_By_PkArgs = {
  _set?: Maybe<Featured_Story_Lookup_Set_Input>;
  pk_columns: Featured_Story_Lookup_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_InquiriesArgs = {
  _set?: Maybe<Inquiries_Set_Input>;
  where: Inquiries_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Inquiries_By_PkArgs = {
  _set?: Maybe<Inquiries_Set_Input>;
  pk_columns: Inquiries_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Read_Status_LookupArgs = {
  _set?: Maybe<Read_Status_Lookup_Set_Input>;
  where: Read_Status_Lookup_Bool_Exp;
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


/** mutation root */
export type Mutation_RootUpdate_Written_StoryArgs = {
  _set?: Maybe<Written_Story_Set_Input>;
  where: Written_Story_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Your_StoryArgs = {
  _inc?: Maybe<Your_Story_Inc_Input>;
  _set?: Maybe<Your_Story_Set_Input>;
  where: Your_Story_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Your_Story_By_PkArgs = {
  _inc?: Maybe<Your_Story_Inc_Input>;
  _set?: Maybe<Your_Story_Set_Input>;
  pk_columns: Your_Story_Pk_Columns_Input;
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
  /** fetch data from the table: "assigned_status_lookup" */
  assigned_status_lookup: Array<Assigned_Status_Lookup>;
  /** fetch aggregated fields from the table: "assigned_status_lookup" */
  assigned_status_lookup_aggregate: Assigned_Status_Lookup_Aggregate;
  /** perform the action: "auth0" */
  auth0?: Maybe<Auth0_Profile>;
  emails: Array<Maybe<Email>>;
  /** fetch data from the table: "featured_story_lookup" */
  featured_story_lookup: Array<Featured_Story_Lookup>;
  /** fetch aggregated fields from the table: "featured_story_lookup" */
  featured_story_lookup_aggregate: Featured_Story_Lookup_Aggregate;
  /** fetch data from the table: "featured_story_lookup" using primary key columns */
  featured_story_lookup_by_pk?: Maybe<Featured_Story_Lookup>;
  getEmail?: Maybe<EmailContent>;
  /** fetch data from the table: "inquiries" */
  getInquiries: Array<Inquiries>;
  /** fetch aggregated fields from the table: "inquiries" */
  inquiries_aggregate: Inquiries_Aggregate;
  /** fetch data from the table: "inquiries" using primary key columns */
  inquiries_by_pk?: Maybe<Inquiries>;
  post?: Maybe<Post>;
  posts: Array<Maybe<Post>>;
  /** fetch data from the table: "read_status_lookup" */
  read_status_lookup: Array<Read_Status_Lookup>;
  /** fetch aggregated fields from the table: "read_status_lookup" */
  read_status_lookup_aggregate: Read_Status_Lookup_Aggregate;
  sentEmails: Array<Maybe<Email>>;
  /** fetch data from the table: "users" using primary key columns */
  user?: Maybe<Users>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "written_story" */
  written_story: Array<Written_Story>;
  /** fetch aggregated fields from the table: "written_story" */
  written_story_aggregate: Written_Story_Aggregate;
  /** fetch data from the table: "your_story" */
  your_story: Array<Your_Story>;
  /** fetch aggregated fields from the table: "your_story" */
  your_story_aggregate: Your_Story_Aggregate;
  /** fetch data from the table: "your_story" using primary key columns */
  your_story_by_pk?: Maybe<Your_Story>;
};


/** query root */
export type Query_RootAssigned_Status_LookupArgs = {
  distinct_on?: Maybe<Array<Assigned_Status_Lookup_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Assigned_Status_Lookup_Order_By>>;
  where?: Maybe<Assigned_Status_Lookup_Bool_Exp>;
};


/** query root */
export type Query_RootAssigned_Status_Lookup_AggregateArgs = {
  distinct_on?: Maybe<Array<Assigned_Status_Lookup_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Assigned_Status_Lookup_Order_By>>;
  where?: Maybe<Assigned_Status_Lookup_Bool_Exp>;
};


/** query root */
export type Query_RootFeatured_Story_LookupArgs = {
  distinct_on?: Maybe<Array<Featured_Story_Lookup_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Featured_Story_Lookup_Order_By>>;
  where?: Maybe<Featured_Story_Lookup_Bool_Exp>;
};


/** query root */
export type Query_RootFeatured_Story_Lookup_AggregateArgs = {
  distinct_on?: Maybe<Array<Featured_Story_Lookup_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Featured_Story_Lookup_Order_By>>;
  where?: Maybe<Featured_Story_Lookup_Bool_Exp>;
};


/** query root */
export type Query_RootFeatured_Story_Lookup_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootGetEmailArgs = {
  folderId: Scalars['String'];
  messageId: Scalars['String'];
};


/** query root */
export type Query_RootGetInquiriesArgs = {
  distinct_on?: Maybe<Array<Inquiries_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Inquiries_Order_By>>;
  where?: Maybe<Inquiries_Bool_Exp>;
};


/** query root */
export type Query_RootInquiries_AggregateArgs = {
  distinct_on?: Maybe<Array<Inquiries_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Inquiries_Order_By>>;
  where?: Maybe<Inquiries_Bool_Exp>;
};


/** query root */
export type Query_RootInquiries_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootPostArgs = {
  id: Scalars['String'];
};


/** query root */
export type Query_RootRead_Status_LookupArgs = {
  distinct_on?: Maybe<Array<Read_Status_Lookup_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Read_Status_Lookup_Order_By>>;
  where?: Maybe<Read_Status_Lookup_Bool_Exp>;
};


/** query root */
export type Query_RootRead_Status_Lookup_AggregateArgs = {
  distinct_on?: Maybe<Array<Read_Status_Lookup_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Read_Status_Lookup_Order_By>>;
  where?: Maybe<Read_Status_Lookup_Bool_Exp>;
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


/** query root */
export type Query_RootWritten_StoryArgs = {
  distinct_on?: Maybe<Array<Written_Story_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Written_Story_Order_By>>;
  where?: Maybe<Written_Story_Bool_Exp>;
};


/** query root */
export type Query_RootWritten_Story_AggregateArgs = {
  distinct_on?: Maybe<Array<Written_Story_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Written_Story_Order_By>>;
  where?: Maybe<Written_Story_Bool_Exp>;
};


/** query root */
export type Query_RootYour_StoryArgs = {
  distinct_on?: Maybe<Array<Your_Story_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Your_Story_Order_By>>;
  where?: Maybe<Your_Story_Bool_Exp>;
};


/** query root */
export type Query_RootYour_Story_AggregateArgs = {
  distinct_on?: Maybe<Array<Your_Story_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Your_Story_Order_By>>;
  where?: Maybe<Your_Story_Bool_Exp>;
};


/** query root */
export type Query_RootYour_Story_By_PkArgs = {
  id: Scalars['uuid'];
};

/** columns and relationships of "read_status_lookup" */
export type Read_Status_Lookup = {
  __typename?: 'read_status_lookup';
  id: Scalars['uuid'];
  user_id: Scalars['String'];
};

/** aggregated selection of "read_status_lookup" */
export type Read_Status_Lookup_Aggregate = {
  __typename?: 'read_status_lookup_aggregate';
  aggregate?: Maybe<Read_Status_Lookup_Aggregate_Fields>;
  nodes: Array<Read_Status_Lookup>;
};

/** aggregate fields of "read_status_lookup" */
export type Read_Status_Lookup_Aggregate_Fields = {
  __typename?: 'read_status_lookup_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Read_Status_Lookup_Max_Fields>;
  min?: Maybe<Read_Status_Lookup_Min_Fields>;
};


/** aggregate fields of "read_status_lookup" */
export type Read_Status_Lookup_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Read_Status_Lookup_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "read_status_lookup" */
export type Read_Status_Lookup_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Read_Status_Lookup_Max_Order_By>;
  min?: Maybe<Read_Status_Lookup_Min_Order_By>;
};

/** input type for inserting array relation for remote table "read_status_lookup" */
export type Read_Status_Lookup_Arr_Rel_Insert_Input = {
  data: Array<Read_Status_Lookup_Insert_Input>;
};

/** Boolean expression to filter rows from the table "read_status_lookup". All fields are combined with a logical 'AND'. */
export type Read_Status_Lookup_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Read_Status_Lookup_Bool_Exp>>>;
  _not?: Maybe<Read_Status_Lookup_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Read_Status_Lookup_Bool_Exp>>>;
  id?: Maybe<Uuid_Comparison_Exp>;
  user_id?: Maybe<String_Comparison_Exp>;
};

/** input type for inserting data into table "read_status_lookup" */
export type Read_Status_Lookup_Insert_Input = {
  id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Read_Status_Lookup_Max_Fields = {
  __typename?: 'read_status_lookup_max_fields';
  id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "read_status_lookup" */
export type Read_Status_Lookup_Max_Order_By = {
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Read_Status_Lookup_Min_Fields = {
  __typename?: 'read_status_lookup_min_fields';
  id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "read_status_lookup" */
export type Read_Status_Lookup_Min_Order_By = {
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "read_status_lookup" */
export type Read_Status_Lookup_Mutation_Response = {
  __typename?: 'read_status_lookup_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Read_Status_Lookup>;
};

/** input type for inserting object relation for remote table "read_status_lookup" */
export type Read_Status_Lookup_Obj_Rel_Insert_Input = {
  data: Read_Status_Lookup_Insert_Input;
};

/** ordering options when selecting data from "read_status_lookup" */
export type Read_Status_Lookup_Order_By = {
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** select columns of table "read_status_lookup" */
export enum Read_Status_Lookup_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "read_status_lookup" */
export type Read_Status_Lookup_Set_Input = {
  id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['String']>;
};

/** subscription root */
export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "assigned_status_lookup" */
  assigned_status_lookup: Array<Assigned_Status_Lookup>;
  /** fetch aggregated fields from the table: "assigned_status_lookup" */
  assigned_status_lookup_aggregate: Assigned_Status_Lookup_Aggregate;
  /** perform the action: "auth0" */
  auth0?: Maybe<Auth0_Profile>;
  /** fetch data from the table: "featured_story_lookup" */
  featured_story_lookup: Array<Featured_Story_Lookup>;
  /** fetch aggregated fields from the table: "featured_story_lookup" */
  featured_story_lookup_aggregate: Featured_Story_Lookup_Aggregate;
  /** fetch data from the table: "featured_story_lookup" using primary key columns */
  featured_story_lookup_by_pk?: Maybe<Featured_Story_Lookup>;
  /** fetch data from the table: "inquiries" */
  getInquiries: Array<Inquiries>;
  /** fetch aggregated fields from the table: "inquiries" */
  inquiries_aggregate: Inquiries_Aggregate;
  /** fetch data from the table: "inquiries" using primary key columns */
  inquiries_by_pk?: Maybe<Inquiries>;
  /** fetch data from the table: "read_status_lookup" */
  read_status_lookup: Array<Read_Status_Lookup>;
  /** fetch aggregated fields from the table: "read_status_lookup" */
  read_status_lookup_aggregate: Read_Status_Lookup_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  user?: Maybe<Users>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "written_story" */
  written_story: Array<Written_Story>;
  /** fetch aggregated fields from the table: "written_story" */
  written_story_aggregate: Written_Story_Aggregate;
  /** fetch data from the table: "your_story" */
  your_story: Array<Your_Story>;
  /** fetch aggregated fields from the table: "your_story" */
  your_story_aggregate: Your_Story_Aggregate;
  /** fetch data from the table: "your_story" using primary key columns */
  your_story_by_pk?: Maybe<Your_Story>;
};


/** subscription root */
export type Subscription_RootAssigned_Status_LookupArgs = {
  distinct_on?: Maybe<Array<Assigned_Status_Lookup_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Assigned_Status_Lookup_Order_By>>;
  where?: Maybe<Assigned_Status_Lookup_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootAssigned_Status_Lookup_AggregateArgs = {
  distinct_on?: Maybe<Array<Assigned_Status_Lookup_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Assigned_Status_Lookup_Order_By>>;
  where?: Maybe<Assigned_Status_Lookup_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootFeatured_Story_LookupArgs = {
  distinct_on?: Maybe<Array<Featured_Story_Lookup_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Featured_Story_Lookup_Order_By>>;
  where?: Maybe<Featured_Story_Lookup_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootFeatured_Story_Lookup_AggregateArgs = {
  distinct_on?: Maybe<Array<Featured_Story_Lookup_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Featured_Story_Lookup_Order_By>>;
  where?: Maybe<Featured_Story_Lookup_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootFeatured_Story_Lookup_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootGetInquiriesArgs = {
  distinct_on?: Maybe<Array<Inquiries_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Inquiries_Order_By>>;
  where?: Maybe<Inquiries_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootInquiries_AggregateArgs = {
  distinct_on?: Maybe<Array<Inquiries_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Inquiries_Order_By>>;
  where?: Maybe<Inquiries_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootInquiries_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootRead_Status_LookupArgs = {
  distinct_on?: Maybe<Array<Read_Status_Lookup_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Read_Status_Lookup_Order_By>>;
  where?: Maybe<Read_Status_Lookup_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootRead_Status_Lookup_AggregateArgs = {
  distinct_on?: Maybe<Array<Read_Status_Lookup_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Read_Status_Lookup_Order_By>>;
  where?: Maybe<Read_Status_Lookup_Bool_Exp>;
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


/** subscription root */
export type Subscription_RootWritten_StoryArgs = {
  distinct_on?: Maybe<Array<Written_Story_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Written_Story_Order_By>>;
  where?: Maybe<Written_Story_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootWritten_Story_AggregateArgs = {
  distinct_on?: Maybe<Array<Written_Story_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Written_Story_Order_By>>;
  where?: Maybe<Written_Story_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootYour_StoryArgs = {
  distinct_on?: Maybe<Array<Your_Story_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Your_Story_Order_By>>;
  where?: Maybe<Your_Story_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootYour_Story_AggregateArgs = {
  distinct_on?: Maybe<Array<Your_Story_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Your_Story_Order_By>>;
  where?: Maybe<Your_Story_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootYour_Story_By_PkArgs = {
  id: Scalars['uuid'];
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
  last_seen?: Maybe<Scalars['timestamptz']>;
  name: Scalars['String'];
  picture?: Maybe<Scalars['String']>;
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
  last_seen?: Maybe<Timestamptz_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  picture?: Maybe<String_Comparison_Exp>;
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
  last_seen?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  auth0_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email_id?: Maybe<Scalars['String']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "users" */
export type Users_Max_Order_By = {
  auth0_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  email_id?: Maybe<Order_By>;
  last_seen?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  picture?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  auth0_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email_id?: Maybe<Scalars['String']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "users" */
export type Users_Min_Order_By = {
  auth0_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  email_id?: Maybe<Order_By>;
  last_seen?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  picture?: Maybe<Order_By>;
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
  last_seen?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  picture?: Maybe<Order_By>;
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
  LastSeen = 'last_seen',
  /** column name */
  Name = 'name',
  /** column name */
  Picture = 'picture'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  admin?: Maybe<Scalars['Boolean']>;
  auth0_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email_id?: Maybe<Scalars['String']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
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
  LastSeen = 'last_seen',
  /** column name */
  Name = 'name',
  /** column name */
  Picture = 'picture'
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

/** columns and relationships of "written_story" */
export type Written_Story = {
  __typename?: 'written_story';
  id: Scalars['uuid'];
  ready: Scalars['Boolean'];
  story?: Maybe<Scalars['String']>;
};

/** aggregated selection of "written_story" */
export type Written_Story_Aggregate = {
  __typename?: 'written_story_aggregate';
  aggregate?: Maybe<Written_Story_Aggregate_Fields>;
  nodes: Array<Written_Story>;
};

/** aggregate fields of "written_story" */
export type Written_Story_Aggregate_Fields = {
  __typename?: 'written_story_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Written_Story_Max_Fields>;
  min?: Maybe<Written_Story_Min_Fields>;
};


/** aggregate fields of "written_story" */
export type Written_Story_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Written_Story_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "written_story" */
export type Written_Story_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Written_Story_Max_Order_By>;
  min?: Maybe<Written_Story_Min_Order_By>;
};

/** input type for inserting array relation for remote table "written_story" */
export type Written_Story_Arr_Rel_Insert_Input = {
  data: Array<Written_Story_Insert_Input>;
  on_conflict?: Maybe<Written_Story_On_Conflict>;
};

/** Boolean expression to filter rows from the table "written_story". All fields are combined with a logical 'AND'. */
export type Written_Story_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Written_Story_Bool_Exp>>>;
  _not?: Maybe<Written_Story_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Written_Story_Bool_Exp>>>;
  id?: Maybe<Uuid_Comparison_Exp>;
  ready?: Maybe<Boolean_Comparison_Exp>;
  story?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "written_story" */
export enum Written_Story_Constraint {
  /** unique or primary key constraint */
  WrittenStoryIdKey = 'written_story_id_key'
}

/** input type for inserting data into table "written_story" */
export type Written_Story_Insert_Input = {
  id?: Maybe<Scalars['uuid']>;
  ready?: Maybe<Scalars['Boolean']>;
  story?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Written_Story_Max_Fields = {
  __typename?: 'written_story_max_fields';
  id?: Maybe<Scalars['uuid']>;
  story?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "written_story" */
export type Written_Story_Max_Order_By = {
  id?: Maybe<Order_By>;
  story?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Written_Story_Min_Fields = {
  __typename?: 'written_story_min_fields';
  id?: Maybe<Scalars['uuid']>;
  story?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "written_story" */
export type Written_Story_Min_Order_By = {
  id?: Maybe<Order_By>;
  story?: Maybe<Order_By>;
};

/** response of any mutation on the table "written_story" */
export type Written_Story_Mutation_Response = {
  __typename?: 'written_story_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Written_Story>;
};

/** input type for inserting object relation for remote table "written_story" */
export type Written_Story_Obj_Rel_Insert_Input = {
  data: Written_Story_Insert_Input;
  on_conflict?: Maybe<Written_Story_On_Conflict>;
};

/** on conflict condition type for table "written_story" */
export type Written_Story_On_Conflict = {
  constraint: Written_Story_Constraint;
  update_columns: Array<Written_Story_Update_Column>;
  where?: Maybe<Written_Story_Bool_Exp>;
};

/** ordering options when selecting data from "written_story" */
export type Written_Story_Order_By = {
  id?: Maybe<Order_By>;
  ready?: Maybe<Order_By>;
  story?: Maybe<Order_By>;
};

/** select columns of table "written_story" */
export enum Written_Story_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Ready = 'ready',
  /** column name */
  Story = 'story'
}

/** input type for updating data in table "written_story" */
export type Written_Story_Set_Input = {
  id?: Maybe<Scalars['uuid']>;
  ready?: Maybe<Scalars['Boolean']>;
  story?: Maybe<Scalars['String']>;
};

/** update columns of table "written_story" */
export enum Written_Story_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Ready = 'ready',
  /** column name */
  Story = 'story'
}

/** columns and relationships of "your_story" */
export type Your_Story = {
  __typename?: 'your_story';
  advise: Scalars['String'];
  age: Scalars['Int'];
  /** An object relationship */
  assigned_to?: Maybe<Assigned_Status_Lookup>;
  city: Scalars['String'];
  email: Scalars['String'];
  /** A computed field, executes function "featured_story" */
  featured?: Maybe<Scalars['Boolean']>;
  id: Scalars['uuid'];
  inspiration: Scalars['String'];
  name: Scalars['String'];
  need: Scalars['String'];
  observedEffects: Scalars['String'];
  occupation: Scalars['String'];
  pictures: Scalars['String'];
  projectIdea: Scalars['String'];
  /** A computed field, executes function "read_your_story" */
  read_status?: Maybe<Scalars['Boolean']>;
  /** An object relationship */
  written_story?: Maybe<Written_Story>;
};

/** aggregated selection of "your_story" */
export type Your_Story_Aggregate = {
  __typename?: 'your_story_aggregate';
  aggregate?: Maybe<Your_Story_Aggregate_Fields>;
  nodes: Array<Your_Story>;
};

/** aggregate fields of "your_story" */
export type Your_Story_Aggregate_Fields = {
  __typename?: 'your_story_aggregate_fields';
  avg?: Maybe<Your_Story_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Your_Story_Max_Fields>;
  min?: Maybe<Your_Story_Min_Fields>;
  stddev?: Maybe<Your_Story_Stddev_Fields>;
  stddev_pop?: Maybe<Your_Story_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Your_Story_Stddev_Samp_Fields>;
  sum?: Maybe<Your_Story_Sum_Fields>;
  var_pop?: Maybe<Your_Story_Var_Pop_Fields>;
  var_samp?: Maybe<Your_Story_Var_Samp_Fields>;
  variance?: Maybe<Your_Story_Variance_Fields>;
};


/** aggregate fields of "your_story" */
export type Your_Story_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Your_Story_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "your_story" */
export type Your_Story_Aggregate_Order_By = {
  avg?: Maybe<Your_Story_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Your_Story_Max_Order_By>;
  min?: Maybe<Your_Story_Min_Order_By>;
  stddev?: Maybe<Your_Story_Stddev_Order_By>;
  stddev_pop?: Maybe<Your_Story_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Your_Story_Stddev_Samp_Order_By>;
  sum?: Maybe<Your_Story_Sum_Order_By>;
  var_pop?: Maybe<Your_Story_Var_Pop_Order_By>;
  var_samp?: Maybe<Your_Story_Var_Samp_Order_By>;
  variance?: Maybe<Your_Story_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "your_story" */
export type Your_Story_Arr_Rel_Insert_Input = {
  data: Array<Your_Story_Insert_Input>;
  on_conflict?: Maybe<Your_Story_On_Conflict>;
};

/** aggregate avg on columns */
export type Your_Story_Avg_Fields = {
  __typename?: 'your_story_avg_fields';
  age?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "your_story" */
export type Your_Story_Avg_Order_By = {
  age?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "your_story". All fields are combined with a logical 'AND'. */
export type Your_Story_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Your_Story_Bool_Exp>>>;
  _not?: Maybe<Your_Story_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Your_Story_Bool_Exp>>>;
  advise?: Maybe<String_Comparison_Exp>;
  age?: Maybe<Int_Comparison_Exp>;
  assigned_to?: Maybe<Assigned_Status_Lookup_Bool_Exp>;
  city?: Maybe<String_Comparison_Exp>;
  email?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  inspiration?: Maybe<String_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  need?: Maybe<String_Comparison_Exp>;
  observedEffects?: Maybe<String_Comparison_Exp>;
  occupation?: Maybe<String_Comparison_Exp>;
  pictures?: Maybe<String_Comparison_Exp>;
  projectIdea?: Maybe<String_Comparison_Exp>;
  written_story?: Maybe<Written_Story_Bool_Exp>;
};

/** unique or primary key constraints on table "your_story" */
export enum Your_Story_Constraint {
  /** unique or primary key constraint */
  YourStoryPkey = 'YourStory_pkey'
}

/** input type for incrementing integer column in table "your_story" */
export type Your_Story_Inc_Input = {
  age?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "your_story" */
export type Your_Story_Insert_Input = {
  advise?: Maybe<Scalars['String']>;
  age?: Maybe<Scalars['Int']>;
  assigned_to?: Maybe<Assigned_Status_Lookup_Obj_Rel_Insert_Input>;
  city?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  inspiration?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  need?: Maybe<Scalars['String']>;
  observedEffects?: Maybe<Scalars['String']>;
  occupation?: Maybe<Scalars['String']>;
  pictures?: Maybe<Scalars['String']>;
  projectIdea?: Maybe<Scalars['String']>;
  written_story?: Maybe<Written_Story_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Your_Story_Max_Fields = {
  __typename?: 'your_story_max_fields';
  advise?: Maybe<Scalars['String']>;
  age?: Maybe<Scalars['Int']>;
  city?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  inspiration?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  need?: Maybe<Scalars['String']>;
  observedEffects?: Maybe<Scalars['String']>;
  occupation?: Maybe<Scalars['String']>;
  pictures?: Maybe<Scalars['String']>;
  projectIdea?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "your_story" */
export type Your_Story_Max_Order_By = {
  advise?: Maybe<Order_By>;
  age?: Maybe<Order_By>;
  city?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  inspiration?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  need?: Maybe<Order_By>;
  observedEffects?: Maybe<Order_By>;
  occupation?: Maybe<Order_By>;
  pictures?: Maybe<Order_By>;
  projectIdea?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Your_Story_Min_Fields = {
  __typename?: 'your_story_min_fields';
  advise?: Maybe<Scalars['String']>;
  age?: Maybe<Scalars['Int']>;
  city?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  inspiration?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  need?: Maybe<Scalars['String']>;
  observedEffects?: Maybe<Scalars['String']>;
  occupation?: Maybe<Scalars['String']>;
  pictures?: Maybe<Scalars['String']>;
  projectIdea?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "your_story" */
export type Your_Story_Min_Order_By = {
  advise?: Maybe<Order_By>;
  age?: Maybe<Order_By>;
  city?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  inspiration?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  need?: Maybe<Order_By>;
  observedEffects?: Maybe<Order_By>;
  occupation?: Maybe<Order_By>;
  pictures?: Maybe<Order_By>;
  projectIdea?: Maybe<Order_By>;
};

/** response of any mutation on the table "your_story" */
export type Your_Story_Mutation_Response = {
  __typename?: 'your_story_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Your_Story>;
};

/** input type for inserting object relation for remote table "your_story" */
export type Your_Story_Obj_Rel_Insert_Input = {
  data: Your_Story_Insert_Input;
  on_conflict?: Maybe<Your_Story_On_Conflict>;
};

/** on conflict condition type for table "your_story" */
export type Your_Story_On_Conflict = {
  constraint: Your_Story_Constraint;
  update_columns: Array<Your_Story_Update_Column>;
  where?: Maybe<Your_Story_Bool_Exp>;
};

/** ordering options when selecting data from "your_story" */
export type Your_Story_Order_By = {
  advise?: Maybe<Order_By>;
  age?: Maybe<Order_By>;
  assigned_to?: Maybe<Assigned_Status_Lookup_Order_By>;
  city?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  inspiration?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  need?: Maybe<Order_By>;
  observedEffects?: Maybe<Order_By>;
  occupation?: Maybe<Order_By>;
  pictures?: Maybe<Order_By>;
  projectIdea?: Maybe<Order_By>;
  written_story?: Maybe<Written_Story_Order_By>;
};

/** primary key columns input for table: "your_story" */
export type Your_Story_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "your_story" */
export enum Your_Story_Select_Column {
  /** column name */
  Advise = 'advise',
  /** column name */
  Age = 'age',
  /** column name */
  City = 'city',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Inspiration = 'inspiration',
  /** column name */
  Name = 'name',
  /** column name */
  Need = 'need',
  /** column name */
  ObservedEffects = 'observedEffects',
  /** column name */
  Occupation = 'occupation',
  /** column name */
  Pictures = 'pictures',
  /** column name */
  ProjectIdea = 'projectIdea'
}

/** input type for updating data in table "your_story" */
export type Your_Story_Set_Input = {
  advise?: Maybe<Scalars['String']>;
  age?: Maybe<Scalars['Int']>;
  city?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  inspiration?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  need?: Maybe<Scalars['String']>;
  observedEffects?: Maybe<Scalars['String']>;
  occupation?: Maybe<Scalars['String']>;
  pictures?: Maybe<Scalars['String']>;
  projectIdea?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Your_Story_Stddev_Fields = {
  __typename?: 'your_story_stddev_fields';
  age?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "your_story" */
export type Your_Story_Stddev_Order_By = {
  age?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Your_Story_Stddev_Pop_Fields = {
  __typename?: 'your_story_stddev_pop_fields';
  age?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "your_story" */
export type Your_Story_Stddev_Pop_Order_By = {
  age?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Your_Story_Stddev_Samp_Fields = {
  __typename?: 'your_story_stddev_samp_fields';
  age?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "your_story" */
export type Your_Story_Stddev_Samp_Order_By = {
  age?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Your_Story_Sum_Fields = {
  __typename?: 'your_story_sum_fields';
  age?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "your_story" */
export type Your_Story_Sum_Order_By = {
  age?: Maybe<Order_By>;
};

/** update columns of table "your_story" */
export enum Your_Story_Update_Column {
  /** column name */
  Advise = 'advise',
  /** column name */
  Age = 'age',
  /** column name */
  City = 'city',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Inspiration = 'inspiration',
  /** column name */
  Name = 'name',
  /** column name */
  Need = 'need',
  /** column name */
  ObservedEffects = 'observedEffects',
  /** column name */
  Occupation = 'occupation',
  /** column name */
  Pictures = 'pictures',
  /** column name */
  ProjectIdea = 'projectIdea'
}

/** aggregate var_pop on columns */
export type Your_Story_Var_Pop_Fields = {
  __typename?: 'your_story_var_pop_fields';
  age?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "your_story" */
export type Your_Story_Var_Pop_Order_By = {
  age?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Your_Story_Var_Samp_Fields = {
  __typename?: 'your_story_var_samp_fields';
  age?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "your_story" */
export type Your_Story_Var_Samp_Order_By = {
  age?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Your_Story_Variance_Fields = {
  __typename?: 'your_story_variance_fields';
  age?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "your_story" */
export type Your_Story_Variance_Order_By = {
  age?: Maybe<Order_By>;
};

export type EmailFragment = (
  { __typename?: 'Email' }
  & Pick<Email, 'calendarType' | 'ccAddress' | 'flagid' | 'folderId' | 'fromAddress' | 'hasAttachment' | 'hasInline' | 'messageId' | 'priority' | 'receivedTime' | 'sender' | 'sentDateInGMT' | 'size' | 'status2' | 'subject' | 'summary' | 'toAddress'>
);

export type EmailContentFragment = (
  { __typename?: 'EmailContent' }
  & Pick<EmailContent, 'messageId' | 'content' | 'blockContent'>
);

export type InquiryFragment = (
  { __typename?: 'inquiries' }
  & Pick<Inquiries, 'name' | 'email' | 'query' | 'id'>
);

export type PostFragment = (
  { __typename?: 'Post' }
  & Pick<Post, 'id' | 'caption' | 'media_url' | 'media_type' | 'timestamp' | 'permalink'>
  & { media: Array<Maybe<(
    { __typename?: 'Media' }
    & Pick<Media, 'media_url' | 'thumbnail_url'>
  )>> }
);

export type SendEmailFragment = (
  { __typename?: 'SendEmailResponse' }
  & { data?: Maybe<(
    { __typename?: 'SendEmailData' }
    & Pick<SendEmailData, 'content' | 'fromAddress' | 'subject' | 'messageId' | 'toAddress'>
  )>, status?: Maybe<(
    { __typename?: 'ResponseStatus' }
    & Pick<ResponseStatus, 'description' | 'code'>
  )> }
);

export type UserFragment = (
  { __typename?: 'users' }
  & Pick<Users, 'name' | 'email_id' | 'admin' | 'auth0_id' | 'picture'>
);

export type YourStoryFragment = (
  { __typename?: 'your_story' }
  & Pick<Your_Story, 'advise' | 'age' | 'city' | 'email' | 'id' | 'inspiration' | 'name' | 'need' | 'observedEffects' | 'occupation' | 'pictures' | 'projectIdea' | 'read_status' | 'featured'>
  & { assigned_to?: Maybe<(
    { __typename?: 'assigned_status_lookup' }
    & Pick<Assigned_Status_Lookup, 'id' | 'user_id'>
  )>, written_story?: Maybe<(
    { __typename?: 'written_story' }
    & Pick<Written_Story, 'id' | 'story' | 'ready'>
  )> }
);

export type SetAssignedStatusMutationVariables = Exact<{
  id: Scalars['uuid'];
  user_id: Scalars['String'];
}>;


export type SetAssignedStatusMutation = (
  { __typename?: 'mutation_root' }
  & { insert_assigned_status_lookup?: Maybe<(
    { __typename?: 'assigned_status_lookup_mutation_response' }
    & Pick<Assigned_Status_Lookup_Mutation_Response, 'affected_rows'>
  )> }
);

export type DeleteAssignedStatusMutationVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type DeleteAssignedStatusMutation = (
  { __typename?: 'mutation_root' }
  & { delete_assigned_status_lookup?: Maybe<(
    { __typename?: 'assigned_status_lookup_mutation_response' }
    & Pick<Assigned_Status_Lookup_Mutation_Response, 'affected_rows'>
  )> }
);

export type FeatureStoryMutationVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type FeatureStoryMutation = (
  { __typename?: 'mutation_root' }
  & { insert_featured_story_lookup?: Maybe<(
    { __typename?: 'featured_story_lookup_mutation_response' }
    & Pick<Featured_Story_Lookup_Mutation_Response, 'affected_rows'>
  )> }
);

export type UnfeatureStoryMutationVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type UnfeatureStoryMutation = (
  { __typename?: 'mutation_root' }
  & { delete_featured_story_lookup?: Maybe<(
    { __typename?: 'featured_story_lookup_mutation_response' }
    & Pick<Featured_Story_Lookup_Mutation_Response, 'affected_rows'>
  )> }
);

export type ReadStatusMutationVariables = Exact<{
  id: Scalars['uuid'];
  user_id: Scalars['String'];
}>;


export type ReadStatusMutation = (
  { __typename?: 'mutation_root' }
  & { setReadStatus?: Maybe<(
    { __typename?: 'read_status_lookup_mutation_response' }
    & Pick<Read_Status_Lookup_Mutation_Response, 'affected_rows'>
  )> }
);

export type SendEmailMutationVariables = Exact<{
  toAddress: Scalars['String'];
  subject: Scalars['String'];
  message: Scalars['String'];
}>;


export type SendEmailMutation = (
  { __typename?: 'mutation_root' }
  & { sendEmail?: Maybe<(
    { __typename?: 'SendEmailResponse' }
    & SendEmailFragment
  )> }
);

export type SendInquiriesMutationVariables = Exact<{
  name: Scalars['String'];
  email: Scalars['String'];
  query: Scalars['String'];
}>;


export type SendInquiriesMutation = (
  { __typename?: 'mutation_root' }
  & { sendInquiries?: Maybe<(
    { __typename?: 'inquiries_mutation_response' }
    & Pick<Inquiries_Mutation_Response, 'affected_rows'>
  )> }
);

export type SendYourStoryMutationVariables = Exact<{
  advise?: Maybe<Scalars['String']>;
  age?: Maybe<Scalars['Int']>;
  city?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  inspiration?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  need?: Maybe<Scalars['String']>;
  observedEffects?: Maybe<Scalars['String']>;
  occupation?: Maybe<Scalars['String']>;
  pictures?: Maybe<Scalars['String']>;
  projectIdea?: Maybe<Scalars['String']>;
}>;


export type SendYourStoryMutation = (
  { __typename?: 'mutation_root' }
  & { insert_your_story?: Maybe<(
    { __typename?: 'your_story_mutation_response' }
    & Pick<Your_Story_Mutation_Response, 'affected_rows'>
  )> }
);

export type UpdateWrittenStoryMutationVariables = Exact<{
  id: Scalars['uuid'];
  writtenStory: Scalars['String'];
}>;


export type UpdateWrittenStoryMutation = (
  { __typename?: 'mutation_root' }
  & { insert_written_story?: Maybe<(
    { __typename?: 'written_story_mutation_response' }
    & Pick<Written_Story_Mutation_Response, 'affected_rows'>
  )> }
);

export type UpdateStoryStatusMutationVariables = Exact<{
  id: Scalars['uuid'];
  ready: Scalars['Boolean'];
}>;


export type UpdateStoryStatusMutation = (
  { __typename?: 'mutation_root' }
  & { insert_written_story?: Maybe<(
    { __typename?: 'written_story_mutation_response' }
    & Pick<Written_Story_Mutation_Response, 'affected_rows'>
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
  folderId: Scalars['String'];
}>;


export type GetEmailQuery = (
  { __typename?: 'query_root' }
  & { getEmail?: Maybe<(
    { __typename?: 'EmailContent' }
    & EmailContentFragment
  )> }
);

export type GetAllInquiriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllInquiriesQuery = (
  { __typename?: 'query_root' }
  & { getInquiries: Array<(
    { __typename?: 'inquiries' }
    & InquiryFragment
  )> }
);

export type GetInquiryQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type GetInquiryQuery = (
  { __typename?: 'query_root' }
  & { inquiries_by_pk?: Maybe<(
    { __typename?: 'inquiries' }
    & InquiryFragment
  )> }
);

export type GetPostQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetPostQuery = (
  { __typename?: 'query_root' }
  & { post?: Maybe<(
    { __typename?: 'Post' }
    & PostFragment
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
    { __typename?: 'Email' }
    & EmailFragment
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

export type GetAllYourStoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllYourStoriesQuery = (
  { __typename?: 'query_root' }
  & { your_story: Array<(
    { __typename?: 'your_story' }
    & YourStoryFragment
  )> }
);

export type GetYourStoryQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type GetYourStoryQuery = (
  { __typename?: 'query_root' }
  & { your_story_by_pk?: Maybe<(
    { __typename?: 'your_story' }
    & YourStoryFragment
  )> }
);

export const EmailFragmentDoc = gql`
    fragment Email on Email {
  calendarType
  ccAddress
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
  status2
  subject
  summary
  toAddress
}
    `;
export const EmailContentFragmentDoc = gql`
    fragment EmailContent on EmailContent {
  messageId
  content
  blockContent
}
    `;
export const InquiryFragmentDoc = gql`
    fragment Inquiry on inquiries {
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
  media {
    media_url
    thumbnail_url
  }
  media_url
  media_type
  timestamp
  permalink
}
    `;
export const SendEmailFragmentDoc = gql`
    fragment SendEmail on SendEmailResponse {
  data {
    content
    fromAddress
    subject
    messageId
    toAddress
  }
  status {
    description
    code
  }
}
    `;
export const UserFragmentDoc = gql`
    fragment User on users {
  name
  email_id
  admin
  auth0_id
  picture
}
    `;
export const YourStoryFragmentDoc = gql`
    fragment YourStory on your_story {
  advise
  age
  city
  email
  id
  inspiration
  name
  need
  observedEffects
  occupation
  pictures
  projectIdea
  read_status
  assigned_to {
    id
    user_id
  }
  written_story {
    id
    story
    ready
  }
  featured
}
    `;
export const SetAssignedStatusDocument = gql`
    mutation setAssignedStatus($id: uuid!, $user_id: String!) {
  insert_assigned_status_lookup(objects: {id: $id, user_id: $user_id}) {
    affected_rows
  }
}
    `;
export type SetAssignedStatusMutationFn = Apollo.MutationFunction<SetAssignedStatusMutation, SetAssignedStatusMutationVariables>;

/**
 * __useSetAssignedStatusMutation__
 *
 * To run a mutation, you first call `useSetAssignedStatusMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetAssignedStatusMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setAssignedStatusMutation, { data, loading, error }] = useSetAssignedStatusMutation({
 *   variables: {
 *      id: // value for 'id'
 *      user_id: // value for 'user_id'
 *   },
 * });
 */
export function useSetAssignedStatusMutation(baseOptions?: Apollo.MutationHookOptions<SetAssignedStatusMutation, SetAssignedStatusMutationVariables>) {
        return Apollo.useMutation<SetAssignedStatusMutation, SetAssignedStatusMutationVariables>(SetAssignedStatusDocument, baseOptions);
      }
export type SetAssignedStatusMutationHookResult = ReturnType<typeof useSetAssignedStatusMutation>;
export type SetAssignedStatusMutationResult = Apollo.MutationResult<SetAssignedStatusMutation>;
export type SetAssignedStatusMutationOptions = Apollo.BaseMutationOptions<SetAssignedStatusMutation, SetAssignedStatusMutationVariables>;
export const DeleteAssignedStatusDocument = gql`
    mutation deleteAssignedStatus($id: uuid!) {
  delete_assigned_status_lookup(where: {id: {_eq: $id}}) {
    affected_rows
  }
}
    `;
export type DeleteAssignedStatusMutationFn = Apollo.MutationFunction<DeleteAssignedStatusMutation, DeleteAssignedStatusMutationVariables>;

/**
 * __useDeleteAssignedStatusMutation__
 *
 * To run a mutation, you first call `useDeleteAssignedStatusMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteAssignedStatusMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteAssignedStatusMutation, { data, loading, error }] = useDeleteAssignedStatusMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteAssignedStatusMutation(baseOptions?: Apollo.MutationHookOptions<DeleteAssignedStatusMutation, DeleteAssignedStatusMutationVariables>) {
        return Apollo.useMutation<DeleteAssignedStatusMutation, DeleteAssignedStatusMutationVariables>(DeleteAssignedStatusDocument, baseOptions);
      }
export type DeleteAssignedStatusMutationHookResult = ReturnType<typeof useDeleteAssignedStatusMutation>;
export type DeleteAssignedStatusMutationResult = Apollo.MutationResult<DeleteAssignedStatusMutation>;
export type DeleteAssignedStatusMutationOptions = Apollo.BaseMutationOptions<DeleteAssignedStatusMutation, DeleteAssignedStatusMutationVariables>;
export const FeatureStoryDocument = gql`
    mutation featureStory($id: uuid!) {
  insert_featured_story_lookup(objects: {id: $id}) {
    affected_rows
  }
}
    `;
export type FeatureStoryMutationFn = Apollo.MutationFunction<FeatureStoryMutation, FeatureStoryMutationVariables>;

/**
 * __useFeatureStoryMutation__
 *
 * To run a mutation, you first call `useFeatureStoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useFeatureStoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [featureStoryMutation, { data, loading, error }] = useFeatureStoryMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFeatureStoryMutation(baseOptions?: Apollo.MutationHookOptions<FeatureStoryMutation, FeatureStoryMutationVariables>) {
        return Apollo.useMutation<FeatureStoryMutation, FeatureStoryMutationVariables>(FeatureStoryDocument, baseOptions);
      }
export type FeatureStoryMutationHookResult = ReturnType<typeof useFeatureStoryMutation>;
export type FeatureStoryMutationResult = Apollo.MutationResult<FeatureStoryMutation>;
export type FeatureStoryMutationOptions = Apollo.BaseMutationOptions<FeatureStoryMutation, FeatureStoryMutationVariables>;
export const UnfeatureStoryDocument = gql`
    mutation unfeatureStory($id: uuid!) {
  delete_featured_story_lookup(where: {id: {_eq: $id}}) {
    affected_rows
  }
}
    `;
export type UnfeatureStoryMutationFn = Apollo.MutationFunction<UnfeatureStoryMutation, UnfeatureStoryMutationVariables>;

/**
 * __useUnfeatureStoryMutation__
 *
 * To run a mutation, you first call `useUnfeatureStoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUnfeatureStoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [unfeatureStoryMutation, { data, loading, error }] = useUnfeatureStoryMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUnfeatureStoryMutation(baseOptions?: Apollo.MutationHookOptions<UnfeatureStoryMutation, UnfeatureStoryMutationVariables>) {
        return Apollo.useMutation<UnfeatureStoryMutation, UnfeatureStoryMutationVariables>(UnfeatureStoryDocument, baseOptions);
      }
export type UnfeatureStoryMutationHookResult = ReturnType<typeof useUnfeatureStoryMutation>;
export type UnfeatureStoryMutationResult = Apollo.MutationResult<UnfeatureStoryMutation>;
export type UnfeatureStoryMutationOptions = Apollo.BaseMutationOptions<UnfeatureStoryMutation, UnfeatureStoryMutationVariables>;
export const ReadStatusDocument = gql`
    mutation readStatus($id: uuid!, $user_id: String!) {
  setReadStatus(objects: {id: $id, user_id: $user_id}) {
    affected_rows
  }
}
    `;
export type ReadStatusMutationFn = Apollo.MutationFunction<ReadStatusMutation, ReadStatusMutationVariables>;

/**
 * __useReadStatusMutation__
 *
 * To run a mutation, you first call `useReadStatusMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useReadStatusMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [readStatusMutation, { data, loading, error }] = useReadStatusMutation({
 *   variables: {
 *      id: // value for 'id'
 *      user_id: // value for 'user_id'
 *   },
 * });
 */
export function useReadStatusMutation(baseOptions?: Apollo.MutationHookOptions<ReadStatusMutation, ReadStatusMutationVariables>) {
        return Apollo.useMutation<ReadStatusMutation, ReadStatusMutationVariables>(ReadStatusDocument, baseOptions);
      }
export type ReadStatusMutationHookResult = ReturnType<typeof useReadStatusMutation>;
export type ReadStatusMutationResult = Apollo.MutationResult<ReadStatusMutation>;
export type ReadStatusMutationOptions = Apollo.BaseMutationOptions<ReadStatusMutation, ReadStatusMutationVariables>;
export const SendEmailDocument = gql`
    mutation sendEmail($toAddress: String!, $subject: String!, $message: String!) {
  sendEmail(toAddress: $toAddress, subject: $subject, message: $message) {
    ...SendEmail
  }
}
    ${SendEmailFragmentDoc}`;
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
export const SendYourStoryDocument = gql`
    mutation sendYourStory($advise: String, $age: Int, $city: String, $email: String, $inspiration: String, $name: String, $need: String, $observedEffects: String, $occupation: String, $pictures: String, $projectIdea: String) {
  insert_your_story(
    objects: [{advise: $advise, age: $age, city: $city, email: $email, inspiration: $inspiration, name: $name, need: $need, observedEffects: $observedEffects, occupation: $occupation, pictures: $pictures, projectIdea: $projectIdea}]
  ) {
    affected_rows
  }
}
    `;
export type SendYourStoryMutationFn = Apollo.MutationFunction<SendYourStoryMutation, SendYourStoryMutationVariables>;

/**
 * __useSendYourStoryMutation__
 *
 * To run a mutation, you first call `useSendYourStoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendYourStoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendYourStoryMutation, { data, loading, error }] = useSendYourStoryMutation({
 *   variables: {
 *      advise: // value for 'advise'
 *      age: // value for 'age'
 *      city: // value for 'city'
 *      email: // value for 'email'
 *      inspiration: // value for 'inspiration'
 *      name: // value for 'name'
 *      need: // value for 'need'
 *      observedEffects: // value for 'observedEffects'
 *      occupation: // value for 'occupation'
 *      pictures: // value for 'pictures'
 *      projectIdea: // value for 'projectIdea'
 *   },
 * });
 */
export function useSendYourStoryMutation(baseOptions?: Apollo.MutationHookOptions<SendYourStoryMutation, SendYourStoryMutationVariables>) {
        return Apollo.useMutation<SendYourStoryMutation, SendYourStoryMutationVariables>(SendYourStoryDocument, baseOptions);
      }
export type SendYourStoryMutationHookResult = ReturnType<typeof useSendYourStoryMutation>;
export type SendYourStoryMutationResult = Apollo.MutationResult<SendYourStoryMutation>;
export type SendYourStoryMutationOptions = Apollo.BaseMutationOptions<SendYourStoryMutation, SendYourStoryMutationVariables>;
export const UpdateWrittenStoryDocument = gql`
    mutation updateWrittenStory($id: uuid!, $writtenStory: String!) {
  insert_written_story(
    on_conflict: {constraint: written_story_id_key, update_columns: story}
    objects: {id: $id, story: $writtenStory}
  ) {
    affected_rows
  }
}
    `;
export type UpdateWrittenStoryMutationFn = Apollo.MutationFunction<UpdateWrittenStoryMutation, UpdateWrittenStoryMutationVariables>;

/**
 * __useUpdateWrittenStoryMutation__
 *
 * To run a mutation, you first call `useUpdateWrittenStoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateWrittenStoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateWrittenStoryMutation, { data, loading, error }] = useUpdateWrittenStoryMutation({
 *   variables: {
 *      id: // value for 'id'
 *      writtenStory: // value for 'writtenStory'
 *   },
 * });
 */
export function useUpdateWrittenStoryMutation(baseOptions?: Apollo.MutationHookOptions<UpdateWrittenStoryMutation, UpdateWrittenStoryMutationVariables>) {
        return Apollo.useMutation<UpdateWrittenStoryMutation, UpdateWrittenStoryMutationVariables>(UpdateWrittenStoryDocument, baseOptions);
      }
export type UpdateWrittenStoryMutationHookResult = ReturnType<typeof useUpdateWrittenStoryMutation>;
export type UpdateWrittenStoryMutationResult = Apollo.MutationResult<UpdateWrittenStoryMutation>;
export type UpdateWrittenStoryMutationOptions = Apollo.BaseMutationOptions<UpdateWrittenStoryMutation, UpdateWrittenStoryMutationVariables>;
export const UpdateStoryStatusDocument = gql`
    mutation updateStoryStatus($id: uuid!, $ready: Boolean!) {
  insert_written_story(
    on_conflict: {constraint: written_story_id_key, update_columns: ready}
    objects: {id: $id, ready: $ready}
  ) {
    affected_rows
  }
}
    `;
export type UpdateStoryStatusMutationFn = Apollo.MutationFunction<UpdateStoryStatusMutation, UpdateStoryStatusMutationVariables>;

/**
 * __useUpdateStoryStatusMutation__
 *
 * To run a mutation, you first call `useUpdateStoryStatusMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateStoryStatusMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateStoryStatusMutation, { data, loading, error }] = useUpdateStoryStatusMutation({
 *   variables: {
 *      id: // value for 'id'
 *      ready: // value for 'ready'
 *   },
 * });
 */
export function useUpdateStoryStatusMutation(baseOptions?: Apollo.MutationHookOptions<UpdateStoryStatusMutation, UpdateStoryStatusMutationVariables>) {
        return Apollo.useMutation<UpdateStoryStatusMutation, UpdateStoryStatusMutationVariables>(UpdateStoryStatusDocument, baseOptions);
      }
export type UpdateStoryStatusMutationHookResult = ReturnType<typeof useUpdateStoryStatusMutation>;
export type UpdateStoryStatusMutationResult = Apollo.MutationResult<UpdateStoryStatusMutation>;
export type UpdateStoryStatusMutationOptions = Apollo.BaseMutationOptions<UpdateStoryStatusMutation, UpdateStoryStatusMutationVariables>;
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
    query GetEmail($messageId: String!, $folderId: String!) {
  getEmail(messageId: $messageId, folderId: $folderId) {
    ...EmailContent
  }
}
    ${EmailContentFragmentDoc}`;

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
 *      folderId: // value for 'folderId'
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
export const GetAllInquiriesDocument = gql`
    query GetAllInquiries {
  getInquiries {
    ...Inquiry
  }
}
    ${InquiryFragmentDoc}`;

/**
 * __useGetAllInquiriesQuery__
 *
 * To run a query within a React component, call `useGetAllInquiriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllInquiriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllInquiriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllInquiriesQuery(baseOptions?: Apollo.QueryHookOptions<GetAllInquiriesQuery, GetAllInquiriesQueryVariables>) {
        return Apollo.useQuery<GetAllInquiriesQuery, GetAllInquiriesQueryVariables>(GetAllInquiriesDocument, baseOptions);
      }
export function useGetAllInquiriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllInquiriesQuery, GetAllInquiriesQueryVariables>) {
          return Apollo.useLazyQuery<GetAllInquiriesQuery, GetAllInquiriesQueryVariables>(GetAllInquiriesDocument, baseOptions);
        }
export type GetAllInquiriesQueryHookResult = ReturnType<typeof useGetAllInquiriesQuery>;
export type GetAllInquiriesLazyQueryHookResult = ReturnType<typeof useGetAllInquiriesLazyQuery>;
export type GetAllInquiriesQueryResult = Apollo.QueryResult<GetAllInquiriesQuery, GetAllInquiriesQueryVariables>;
export const GetInquiryDocument = gql`
    query GetInquiry($id: uuid!) {
  inquiries_by_pk(id: $id) {
    ...Inquiry
  }
}
    ${InquiryFragmentDoc}`;

/**
 * __useGetInquiryQuery__
 *
 * To run a query within a React component, call `useGetInquiryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetInquiryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetInquiryQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetInquiryQuery(baseOptions: Apollo.QueryHookOptions<GetInquiryQuery, GetInquiryQueryVariables>) {
        return Apollo.useQuery<GetInquiryQuery, GetInquiryQueryVariables>(GetInquiryDocument, baseOptions);
      }
export function useGetInquiryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetInquiryQuery, GetInquiryQueryVariables>) {
          return Apollo.useLazyQuery<GetInquiryQuery, GetInquiryQueryVariables>(GetInquiryDocument, baseOptions);
        }
export type GetInquiryQueryHookResult = ReturnType<typeof useGetInquiryQuery>;
export type GetInquiryLazyQueryHookResult = ReturnType<typeof useGetInquiryLazyQuery>;
export type GetInquiryQueryResult = Apollo.QueryResult<GetInquiryQuery, GetInquiryQueryVariables>;
export const GetPostDocument = gql`
    query GetPost($id: String!) {
  post(id: $id) {
    ...Post
  }
}
    ${PostFragmentDoc}`;

/**
 * __useGetPostQuery__
 *
 * To run a query within a React component, call `useGetPostQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPostQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPostQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetPostQuery(baseOptions: Apollo.QueryHookOptions<GetPostQuery, GetPostQueryVariables>) {
        return Apollo.useQuery<GetPostQuery, GetPostQueryVariables>(GetPostDocument, baseOptions);
      }
export function useGetPostLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPostQuery, GetPostQueryVariables>) {
          return Apollo.useLazyQuery<GetPostQuery, GetPostQueryVariables>(GetPostDocument, baseOptions);
        }
export type GetPostQueryHookResult = ReturnType<typeof useGetPostQuery>;
export type GetPostLazyQueryHookResult = ReturnType<typeof useGetPostLazyQuery>;
export type GetPostQueryResult = Apollo.QueryResult<GetPostQuery, GetPostQueryVariables>;
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
    ...Email
  }
}
    ${EmailFragmentDoc}`;

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
export const GetAllYourStoriesDocument = gql`
    query GetAllYourStories {
  your_story {
    ...YourStory
  }
}
    ${YourStoryFragmentDoc}`;

/**
 * __useGetAllYourStoriesQuery__
 *
 * To run a query within a React component, call `useGetAllYourStoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllYourStoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllYourStoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllYourStoriesQuery(baseOptions?: Apollo.QueryHookOptions<GetAllYourStoriesQuery, GetAllYourStoriesQueryVariables>) {
        return Apollo.useQuery<GetAllYourStoriesQuery, GetAllYourStoriesQueryVariables>(GetAllYourStoriesDocument, baseOptions);
      }
export function useGetAllYourStoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllYourStoriesQuery, GetAllYourStoriesQueryVariables>) {
          return Apollo.useLazyQuery<GetAllYourStoriesQuery, GetAllYourStoriesQueryVariables>(GetAllYourStoriesDocument, baseOptions);
        }
export type GetAllYourStoriesQueryHookResult = ReturnType<typeof useGetAllYourStoriesQuery>;
export type GetAllYourStoriesLazyQueryHookResult = ReturnType<typeof useGetAllYourStoriesLazyQuery>;
export type GetAllYourStoriesQueryResult = Apollo.QueryResult<GetAllYourStoriesQuery, GetAllYourStoriesQueryVariables>;
export const GetYourStoryDocument = gql`
    query GetYourStory($id: uuid!) {
  your_story_by_pk(id: $id) {
    ...YourStory
  }
}
    ${YourStoryFragmentDoc}`;

/**
 * __useGetYourStoryQuery__
 *
 * To run a query within a React component, call `useGetYourStoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetYourStoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetYourStoryQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetYourStoryQuery(baseOptions: Apollo.QueryHookOptions<GetYourStoryQuery, GetYourStoryQueryVariables>) {
        return Apollo.useQuery<GetYourStoryQuery, GetYourStoryQueryVariables>(GetYourStoryDocument, baseOptions);
      }
export function useGetYourStoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetYourStoryQuery, GetYourStoryQueryVariables>) {
          return Apollo.useLazyQuery<GetYourStoryQuery, GetYourStoryQueryVariables>(GetYourStoryDocument, baseOptions);
        }
export type GetYourStoryQueryHookResult = ReturnType<typeof useGetYourStoryQuery>;
export type GetYourStoryLazyQueryHookResult = ReturnType<typeof useGetYourStoryLazyQuery>;
export type GetYourStoryQueryResult = Apollo.QueryResult<GetYourStoryQuery, GetYourStoryQueryVariables>;
export const namedOperations = {
  Query: {
    GetAllEmails: 'GetAllEmails',
    GetEmail: 'GetEmail',
    GetAllInquiries: 'GetAllInquiries',
    GetInquiry: 'GetInquiry',
    GetPost: 'GetPost',
    GetAllPosts: 'GetAllPosts',
    GetSentEmails: 'GetSentEmails',
    GetAllUsers: 'GetAllUsers',
    GetAllYourStories: 'GetAllYourStories',
    GetYourStory: 'GetYourStory'
  },
  Mutation: {
    setAssignedStatus: 'setAssignedStatus',
    deleteAssignedStatus: 'deleteAssignedStatus',
    featureStory: 'featureStory',
    unfeatureStory: 'unfeatureStory',
    readStatus: 'readStatus',
    sendEmail: 'sendEmail',
    sendInquiries: 'sendInquiries',
    sendYourStory: 'sendYourStory',
    updateWrittenStory: 'updateWrittenStory',
    updateStoryStatus: 'updateStoryStatus'
  },
  Fragment: {
    Email: 'Email',
    EmailContent: 'EmailContent',
    Inquiry: 'Inquiry',
    Post: 'Post',
    SendEmail: 'SendEmail',
    User: 'User',
    YourStory: 'YourStory'
  }
}