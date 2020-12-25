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


/** columns and relationships of "YourStory" */
export type YourStory = {
  __typename?: 'YourStory';
  advise: Scalars['String'];
  age: Scalars['Int'];
  city: Scalars['String'];
  email: Scalars['String'];
  id: Scalars['uuid'];
  inspiration: Scalars['String'];
  name: Scalars['String'];
  need: Scalars['String'];
  observedEffects: Scalars['String'];
  occupation: Scalars['String'];
  pictures: Scalars['String'];
  projectIdea: Scalars['String'];
};

/** aggregated selection of "YourStory" */
export type YourStory_Aggregate = {
  __typename?: 'YourStory_aggregate';
  aggregate?: Maybe<YourStory_Aggregate_Fields>;
  nodes: Array<YourStory>;
};

/** aggregate fields of "YourStory" */
export type YourStory_Aggregate_Fields = {
  __typename?: 'YourStory_aggregate_fields';
  avg?: Maybe<YourStory_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<YourStory_Max_Fields>;
  min?: Maybe<YourStory_Min_Fields>;
  stddev?: Maybe<YourStory_Stddev_Fields>;
  stddev_pop?: Maybe<YourStory_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<YourStory_Stddev_Samp_Fields>;
  sum?: Maybe<YourStory_Sum_Fields>;
  var_pop?: Maybe<YourStory_Var_Pop_Fields>;
  var_samp?: Maybe<YourStory_Var_Samp_Fields>;
  variance?: Maybe<YourStory_Variance_Fields>;
};


/** aggregate fields of "YourStory" */
export type YourStory_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<YourStory_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "YourStory" */
export type YourStory_Aggregate_Order_By = {
  avg?: Maybe<YourStory_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<YourStory_Max_Order_By>;
  min?: Maybe<YourStory_Min_Order_By>;
  stddev?: Maybe<YourStory_Stddev_Order_By>;
  stddev_pop?: Maybe<YourStory_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<YourStory_Stddev_Samp_Order_By>;
  sum?: Maybe<YourStory_Sum_Order_By>;
  var_pop?: Maybe<YourStory_Var_Pop_Order_By>;
  var_samp?: Maybe<YourStory_Var_Samp_Order_By>;
  variance?: Maybe<YourStory_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "YourStory" */
export type YourStory_Arr_Rel_Insert_Input = {
  data: Array<YourStory_Insert_Input>;
  on_conflict?: Maybe<YourStory_On_Conflict>;
};

/** aggregate avg on columns */
export type YourStory_Avg_Fields = {
  __typename?: 'YourStory_avg_fields';
  age?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "YourStory" */
export type YourStory_Avg_Order_By = {
  age?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "YourStory". All fields are combined with a logical 'AND'. */
export type YourStory_Bool_Exp = {
  _and?: Maybe<Array<Maybe<YourStory_Bool_Exp>>>;
  _not?: Maybe<YourStory_Bool_Exp>;
  _or?: Maybe<Array<Maybe<YourStory_Bool_Exp>>>;
  advise?: Maybe<String_Comparison_Exp>;
  age?: Maybe<Int_Comparison_Exp>;
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
};

/** unique or primary key constraints on table "YourStory" */
export enum YourStory_Constraint {
  /** unique or primary key constraint */
  YourStoryPkey = 'YourStory_pkey'
}

/** input type for incrementing integer column in table "YourStory" */
export type YourStory_Inc_Input = {
  age?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "YourStory" */
export type YourStory_Insert_Input = {
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

/** aggregate max on columns */
export type YourStory_Max_Fields = {
  __typename?: 'YourStory_max_fields';
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

/** order by max() on columns of table "YourStory" */
export type YourStory_Max_Order_By = {
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
export type YourStory_Min_Fields = {
  __typename?: 'YourStory_min_fields';
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

/** order by min() on columns of table "YourStory" */
export type YourStory_Min_Order_By = {
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

/** response of any mutation on the table "YourStory" */
export type YourStory_Mutation_Response = {
  __typename?: 'YourStory_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<YourStory>;
};

/** input type for inserting object relation for remote table "YourStory" */
export type YourStory_Obj_Rel_Insert_Input = {
  data: YourStory_Insert_Input;
  on_conflict?: Maybe<YourStory_On_Conflict>;
};

/** on conflict condition type for table "YourStory" */
export type YourStory_On_Conflict = {
  constraint: YourStory_Constraint;
  update_columns: Array<YourStory_Update_Column>;
  where?: Maybe<YourStory_Bool_Exp>;
};

/** ordering options when selecting data from "YourStory" */
export type YourStory_Order_By = {
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

/** primary key columns input for table: "YourStory" */
export type YourStory_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "YourStory" */
export enum YourStory_Select_Column {
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

/** input type for updating data in table "YourStory" */
export type YourStory_Set_Input = {
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
export type YourStory_Stddev_Fields = {
  __typename?: 'YourStory_stddev_fields';
  age?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "YourStory" */
export type YourStory_Stddev_Order_By = {
  age?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type YourStory_Stddev_Pop_Fields = {
  __typename?: 'YourStory_stddev_pop_fields';
  age?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "YourStory" */
export type YourStory_Stddev_Pop_Order_By = {
  age?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type YourStory_Stddev_Samp_Fields = {
  __typename?: 'YourStory_stddev_samp_fields';
  age?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "YourStory" */
export type YourStory_Stddev_Samp_Order_By = {
  age?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type YourStory_Sum_Fields = {
  __typename?: 'YourStory_sum_fields';
  age?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "YourStory" */
export type YourStory_Sum_Order_By = {
  age?: Maybe<Order_By>;
};

/** update columns of table "YourStory" */
export enum YourStory_Update_Column {
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
export type YourStory_Var_Pop_Fields = {
  __typename?: 'YourStory_var_pop_fields';
  age?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "YourStory" */
export type YourStory_Var_Pop_Order_By = {
  age?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type YourStory_Var_Samp_Fields = {
  __typename?: 'YourStory_var_samp_fields';
  age?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "YourStory" */
export type YourStory_Var_Samp_Order_By = {
  age?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type YourStory_Variance_Fields = {
  __typename?: 'YourStory_variance_fields';
  age?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "YourStory" */
export type YourStory_Variance_Order_By = {
  age?: Maybe<Order_By>;
};

export type Auth0_Profile = {
  __typename?: 'auth0_profile';
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
};

/** columns and relationships of "inquiries" */
export type Inquiries = {
  __typename?: 'inquiries';
  email: Scalars['String'];
  id: Scalars['uuid'];
  name: Scalars['String'];
  query: Scalars['String'];
  /** A computed field, executes function "read_inquiries_messages" */
  read_status?: Maybe<Scalars['Boolean']>;
  /** An object relationship */
  read_status_lookup?: Maybe<Read_Status_Lookup>;
};


/** columns and relationships of "inquiries" */
export type InquiriesRead_StatusArgs = {
  args: Read_Inquiries_Messages_Args;
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
  read_status_lookup?: Maybe<Read_Status_Lookup_Bool_Exp>;
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
  read_status_lookup?: Maybe<Read_Status_Lookup_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Inquiries_Max_Fields = {
  __typename?: 'inquiries_max_fields';
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  query?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "inquiries" */
export type Inquiries_Max_Order_By = {
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  query?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Inquiries_Min_Fields = {
  __typename?: 'inquiries_min_fields';
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  query?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "inquiries" */
export type Inquiries_Min_Order_By = {
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  query?: Maybe<Order_By>;
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
  read_status_lookup?: Maybe<Read_Status_Lookup_Order_By>;
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
  Query = 'query'
}

/** input type for updating data in table "inquiries" */
export type Inquiries_Set_Input = {
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  query?: Maybe<Scalars['String']>;
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
  Query = 'query'
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
  deleteEmail?: Maybe<Array<Maybe<Email>>>;
  /** delete data from the table: "YourStory" */
  delete_YourStory?: Maybe<YourStory_Mutation_Response>;
  /** delete single row from the table: "YourStory" */
  delete_YourStory_by_pk?: Maybe<YourStory>;
  /** delete data from the table: "inquiries" */
  delete_inquiries?: Maybe<Inquiries_Mutation_Response>;
  /** delete single row from the table: "inquiries" */
  delete_inquiries_by_pk?: Maybe<Inquiries>;
  /** delete data from the table: "read_status_lookup" */
  delete_read_status_lookup?: Maybe<Read_Status_Lookup_Mutation_Response>;
  /** delete single row from the table: "read_status_lookup" */
  delete_read_status_lookup_by_pk?: Maybe<Read_Status_Lookup>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "YourStory" */
  insert_YourStory?: Maybe<YourStory_Mutation_Response>;
  /** insert a single row into the table: "YourStory" */
  insert_YourStory_one?: Maybe<YourStory>;
  /** insert a single row into the table: "inquiries" */
  insert_inquiries_one?: Maybe<Inquiries>;
  /** insert data into the table: "read_status_lookup" */
  insert_read_status_lookup?: Maybe<Read_Status_Lookup_Mutation_Response>;
  /** insert a single row into the table: "read_status_lookup" */
  insert_read_status_lookup_one?: Maybe<Read_Status_Lookup>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  sendEmail?: Maybe<Array<Maybe<Email>>>;
  /** insert data into the table: "inquiries" */
  sendInquiries?: Maybe<Inquiries_Mutation_Response>;
  /** update data of the table: "YourStory" */
  update_YourStory?: Maybe<YourStory_Mutation_Response>;
  /** update single row of the table: "YourStory" */
  update_YourStory_by_pk?: Maybe<YourStory>;
  /** update data of the table: "inquiries" */
  update_inquiries?: Maybe<Inquiries_Mutation_Response>;
  /** update single row of the table: "inquiries" */
  update_inquiries_by_pk?: Maybe<Inquiries>;
  /** update data of the table: "read_status_lookup" */
  update_read_status_lookup?: Maybe<Read_Status_Lookup_Mutation_Response>;
  /** update single row of the table: "read_status_lookup" */
  update_read_status_lookup_by_pk?: Maybe<Read_Status_Lookup>;
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
export type Mutation_RootDelete_YourStoryArgs = {
  where: YourStory_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_YourStory_By_PkArgs = {
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
export type Mutation_RootDelete_Read_Status_Lookup_By_PkArgs = {
  user_id: Scalars['String'];
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
export type Mutation_RootInsert_YourStoryArgs = {
  objects: Array<YourStory_Insert_Input>;
  on_conflict?: Maybe<YourStory_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_YourStory_OneArgs = {
  object: YourStory_Insert_Input;
  on_conflict?: Maybe<YourStory_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Inquiries_OneArgs = {
  object: Inquiries_Insert_Input;
  on_conflict?: Maybe<Inquiries_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Read_Status_LookupArgs = {
  objects: Array<Read_Status_Lookup_Insert_Input>;
  on_conflict?: Maybe<Read_Status_Lookup_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Read_Status_Lookup_OneArgs = {
  object: Read_Status_Lookup_Insert_Input;
  on_conflict?: Maybe<Read_Status_Lookup_On_Conflict>;
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
  objects: Array<Inquiries_Insert_Input>;
  on_conflict?: Maybe<Inquiries_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_YourStoryArgs = {
  _inc?: Maybe<YourStory_Inc_Input>;
  _set?: Maybe<YourStory_Set_Input>;
  where: YourStory_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_YourStory_By_PkArgs = {
  _inc?: Maybe<YourStory_Inc_Input>;
  _set?: Maybe<YourStory_Set_Input>;
  pk_columns: YourStory_Pk_Columns_Input;
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
export type Mutation_RootUpdate_Read_Status_Lookup_By_PkArgs = {
  _set?: Maybe<Read_Status_Lookup_Set_Input>;
  pk_columns: Read_Status_Lookup_Pk_Columns_Input;
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
  /** fetch data from the table: "YourStory" */
  YourStory: Array<YourStory>;
  /** fetch aggregated fields from the table: "YourStory" */
  YourStory_aggregate: YourStory_Aggregate;
  /** fetch data from the table: "YourStory" using primary key columns */
  YourStory_by_pk?: Maybe<YourStory>;
  /** perform the action: "auth0" */
  auth0?: Maybe<Auth0_Profile>;
  emails: Array<Maybe<Email>>;
  getEmail?: Maybe<Email>;
  /** fetch data from the table: "inquiries" */
  getInquiries: Array<Inquiries>;
  /** fetch aggregated fields from the table: "inquiries" */
  inquiries_aggregate: Inquiries_Aggregate;
  /** fetch data from the table: "inquiries" using primary key columns */
  inquiries_by_pk?: Maybe<Inquiries>;
  posts: Array<Maybe<Post>>;
  /** fetch data from the table: "read_status_lookup" */
  read_status_lookup: Array<Read_Status_Lookup>;
  /** fetch aggregated fields from the table: "read_status_lookup" */
  read_status_lookup_aggregate: Read_Status_Lookup_Aggregate;
  /** fetch data from the table: "read_status_lookup" using primary key columns */
  read_status_lookup_by_pk?: Maybe<Read_Status_Lookup>;
  sentEmails: Array<Maybe<SentEmail>>;
  /** fetch data from the table: "users" using primary key columns */
  user?: Maybe<Users>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
};


/** query root */
export type Query_RootYourStoryArgs = {
  distinct_on?: Maybe<Array<YourStory_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<YourStory_Order_By>>;
  where?: Maybe<YourStory_Bool_Exp>;
};


/** query root */
export type Query_RootYourStory_AggregateArgs = {
  distinct_on?: Maybe<Array<YourStory_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<YourStory_Order_By>>;
  where?: Maybe<YourStory_Bool_Exp>;
};


/** query root */
export type Query_RootYourStory_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootGetEmailArgs = {
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
export type Query_RootRead_Status_Lookup_By_PkArgs = {
  user_id: Scalars['String'];
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

export type Read_Inquiries_Messages_Args = {
  hasura_session?: Maybe<Scalars['json']>;
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
  on_conflict?: Maybe<Read_Status_Lookup_On_Conflict>;
};

/** Boolean expression to filter rows from the table "read_status_lookup". All fields are combined with a logical 'AND'. */
export type Read_Status_Lookup_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Read_Status_Lookup_Bool_Exp>>>;
  _not?: Maybe<Read_Status_Lookup_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Read_Status_Lookup_Bool_Exp>>>;
  id?: Maybe<Uuid_Comparison_Exp>;
  user_id?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "read_status_lookup" */
export enum Read_Status_Lookup_Constraint {
  /** unique or primary key constraint */
  ReadMessagesPkey = 'ReadMessages_pkey',
  /** unique or primary key constraint */
  ReadStatusLookupIdKey = 'read_status_lookup_id_key'
}

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
  on_conflict?: Maybe<Read_Status_Lookup_On_Conflict>;
};

/** on conflict condition type for table "read_status_lookup" */
export type Read_Status_Lookup_On_Conflict = {
  constraint: Read_Status_Lookup_Constraint;
  update_columns: Array<Read_Status_Lookup_Update_Column>;
  where?: Maybe<Read_Status_Lookup_Bool_Exp>;
};

/** ordering options when selecting data from "read_status_lookup" */
export type Read_Status_Lookup_Order_By = {
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "read_status_lookup" */
export type Read_Status_Lookup_Pk_Columns_Input = {
  user_id: Scalars['String'];
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

/** update columns of table "read_status_lookup" */
export enum Read_Status_Lookup_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  UserId = 'user_id'
}

/** subscription root */
export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "YourStory" */
  YourStory: Array<YourStory>;
  /** fetch aggregated fields from the table: "YourStory" */
  YourStory_aggregate: YourStory_Aggregate;
  /** fetch data from the table: "YourStory" using primary key columns */
  YourStory_by_pk?: Maybe<YourStory>;
  /** perform the action: "auth0" */
  auth0?: Maybe<Auth0_Profile>;
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
  /** fetch data from the table: "read_status_lookup" using primary key columns */
  read_status_lookup_by_pk?: Maybe<Read_Status_Lookup>;
  /** fetch data from the table: "users" using primary key columns */
  user?: Maybe<Users>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
};


/** subscription root */
export type Subscription_RootYourStoryArgs = {
  distinct_on?: Maybe<Array<YourStory_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<YourStory_Order_By>>;
  where?: Maybe<YourStory_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootYourStory_AggregateArgs = {
  distinct_on?: Maybe<Array<YourStory_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<YourStory_Order_By>>;
  where?: Maybe<YourStory_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootYourStory_By_PkArgs = {
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
export type Subscription_RootRead_Status_Lookup_By_PkArgs = {
  user_id: Scalars['String'];
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
  /** An array relationship */
  read_status_lookups: Array<Read_Status_Lookup>;
  /** An aggregated array relationship */
  read_status_lookups_aggregate: Read_Status_Lookup_Aggregate;
};


/** columns and relationships of "users" */
export type UsersRead_Status_LookupsArgs = {
  distinct_on?: Maybe<Array<Read_Status_Lookup_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Read_Status_Lookup_Order_By>>;
  where?: Maybe<Read_Status_Lookup_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersRead_Status_Lookups_AggregateArgs = {
  distinct_on?: Maybe<Array<Read_Status_Lookup_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Read_Status_Lookup_Order_By>>;
  where?: Maybe<Read_Status_Lookup_Bool_Exp>;
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
  read_status_lookups?: Maybe<Read_Status_Lookup_Bool_Exp>;
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
  read_status_lookups?: Maybe<Read_Status_Lookup_Arr_Rel_Insert_Input>;
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
  read_status_lookups_aggregate?: Maybe<Read_Status_Lookup_Aggregate_Order_By>;
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
  { __typename?: 'inquiries' }
  & Pick<Inquiries, 'name' | 'email' | 'query' | 'id'>
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
    { __typename?: 'inquiries_mutation_response' }
    & Pick<Inquiries_Mutation_Response, 'affected_rows'>
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

export type GetAllInquiriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllInquiriesQuery = (
  { __typename?: 'query_root' }
  & { getInquiries: Array<(
    { __typename?: 'inquiries' }
    & InquiryFragment
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