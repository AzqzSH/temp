import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
  /** A hashed version of the autoincrement id */
  HashIds: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type CreateProductInput = {
  descriptionAr?: InputMaybe<Scalars['String']>;
  descriptionEn?: InputMaybe<Scalars['String']>;
  images?: InputMaybe<Array<Scalars['Upload']>>;
  nameAr: Scalars['String'];
  nameEn: Scalars['String'];
};

export type CreateStoreInput = {
  name: Scalars['String'];
};

export type CreateUserInput = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
  phoneNumber: Scalars['String'];
};

export type LoginInput = {
  email?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  phoneNumber?: InputMaybe<Scalars['String']>;
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  access: Scalars['String'];
  refresh: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createProduct: Scalars['HashIds'];
  createStore: Scalars['HashIds'];
  login: LoginResponse;
  register: Scalars['String'];
  removeProduct: Scalars['Boolean'];
  removeStore: Store;
  removeUser: Scalars['Boolean'];
  updateProduct: Scalars['Boolean'];
  updateStore: Scalars['Boolean'];
  updateUser: Scalars['Boolean'];
};


export type MutationCreateProductArgs = {
  input: CreateProductInput;
};


export type MutationCreateStoreArgs = {
  input: CreateStoreInput;
};


export type MutationLoginArgs = {
  input: LoginInput;
};


export type MutationRegisterArgs = {
  input: CreateUserInput;
};


export type MutationRemoveProductArgs = {
  id: Scalars['HashIds'];
};


export type MutationUpdateProductArgs = {
  input: UpdateProductInput;
};


export type MutationUpdateStoreArgs = {
  input: UpdateStoreInput;
};


export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};

export type PagePaginationInput = {
  page?: InputMaybe<Scalars['Float']>;
  size?: InputMaybe<Scalars['Float']>;
};

export type PaginatedProductsResponse = {
  __typename?: 'PaginatedProductsResponse';
  count: Scalars['Float'];
  pages: Scalars['Float'];
  results: Array<Product>;
};

export type Payment = {
  __typename?: 'Payment';
  amount: Scalars['Float'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  status: PaymentStatus;
  touched: Scalars['Boolean'];
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['String'];
};

export enum PaymentStatus {
  Captured = 'CAPTURED',
  Failed = 'FAILED',
  Pending = 'PENDING'
}

export type Product = {
  __typename?: 'Product';
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  descriptionAr: Scalars['String'];
  descriptionEn: Scalars['String'];
  id: Scalars['HashIds'];
  images: Array<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  nameAr: Scalars['String'];
  nameEn: Scalars['String'];
  price: Scalars['Float'];
  store: Store;
  storeId: Scalars['HashIds'];
  updatedAt: Scalars['DateTime'];
};

export type Query = {
  __typename?: 'Query';
  getProductsByStore: PaginatedProductsResponse;
  getStoreById: Store;
  me: SimpleUser;
};


export type QueryGetProductsByStoreArgs = {
  options?: InputMaybe<PagePaginationInput>;
  store: Scalars['HashIds'];
};


export type QueryGetStoreByIdArgs = {
  id: Scalars['HashIds'];
};

export type SimpleUser = {
  __typename?: 'SimpleUser';
  active: Scalars['Boolean'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['ID'];
  lastName: Scalars['String'];
  partner: Scalars['Boolean'];
  phoneNumber: Scalars['String'];
  staff: Scalars['Boolean'];
};

export type Store = {
  __typename?: 'Store';
  createdAt: Scalars['DateTime'];
  id: Scalars['HashIds'];
  name: Scalars['String'];
  owner: User;
  ownerId: Scalars['String'];
  products: Array<Product>;
  updatedAt: Scalars['DateTime'];
};

export type UpdateProductInput = {
  descriptionAr?: InputMaybe<Scalars['String']>;
  descriptionEn?: InputMaybe<Scalars['String']>;
  id: Scalars['HashIds'];
  images?: InputMaybe<Scalars['Upload']>;
  nameAr?: InputMaybe<Scalars['String']>;
  nameEn?: InputMaybe<Scalars['String']>;
};

export type UpdateStoreInput = {
  name?: InputMaybe<Scalars['String']>;
};

export type UpdateUserInput = {
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  superuser?: InputMaybe<Scalars['Boolean']>;
};

export type User = {
  __typename?: 'User';
  active: Scalars['Boolean'];
  confirmed: Scalars['Boolean'];
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['ID'];
  lastName: Scalars['String'];
  partner: Scalars['Boolean'];
  password: Scalars['String'];
  payments: Array<Payment>;
  phoneNumber: Scalars['String'];
  staff: Scalars['Boolean'];
  store?: Maybe<Store>;
  tokenVersion: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};

export type LoginMutationVariables = Exact<{
  input: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginResponse', access: string, refresh: string } };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me: { __typename?: 'SimpleUser', id: string, active: boolean, email: string, firstName: string, lastName: string, phoneNumber: string, partner: boolean, staff: boolean } };

export type RegisterUserMutationVariables = Exact<{
  registerInput: CreateUserInput;
}>;


export type RegisterUserMutation = { __typename?: 'Mutation', register: string };

export type UpdateUserMutationVariables = Exact<{
  input: UpdateUserInput;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser: boolean };


export const LoginDocument = gql`
    mutation Login($input: LoginInput!) {
  login(input: $input) {
    access
    refresh
  }
}
    `;
export const MeDocument = gql`
    query Me {
  me {
    id
    active
    email
    firstName
    lastName
    phoneNumber
    partner
    staff
  }
}
    `;
export const RegisterUserDocument = gql`
    mutation RegisterUser($registerInput: CreateUserInput!) {
  register(input: $registerInput)
}
    `;
export const UpdateUserDocument = gql`
    mutation UpdateUser($input: UpdateUserInput!) {
  updateUser(input: $input)
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    Login(variables: LoginMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<LoginMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<LoginMutation>(LoginDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Login', 'mutation');
    },
    Me(variables?: MeQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<MeQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<MeQuery>(MeDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Me', 'query');
    },
    RegisterUser(variables: RegisterUserMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<RegisterUserMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<RegisterUserMutation>(RegisterUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'RegisterUser', 'mutation');
    },
    UpdateUser(variables: UpdateUserMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateUserMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateUserMutation>(UpdateUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'UpdateUser', 'mutation');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {}
};
      export default result;
    