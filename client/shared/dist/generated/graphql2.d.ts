import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
export declare type Maybe<T> = T | null;
export declare type InputMaybe<T> = Maybe<T>;
export declare type Exact<T extends {
    [key: string]: unknown;
}> = {
    [K in keyof T]: T[K];
};
export declare type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>;
};
export declare type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export declare type Scalars = {
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
export declare type CreateProductInput = {
    descriptionAr?: InputMaybe<Scalars['String']>;
    descriptionEn?: InputMaybe<Scalars['String']>;
    images?: InputMaybe<Array<Scalars['Upload']>>;
    nameAr: Scalars['String'];
    nameEn: Scalars['String'];
};
export declare type CreateStoreInput = {
    name: Scalars['String'];
};
export declare type CreateUserInput = {
    email: Scalars['String'];
    firstName: Scalars['String'];
    lastName: Scalars['String'];
    password: Scalars['String'];
    phoneNumber: Scalars['String'];
};
export declare type LoginInput = {
    email?: InputMaybe<Scalars['String']>;
    password: Scalars['String'];
    phoneNumber?: InputMaybe<Scalars['String']>;
};
export declare type LoginResponse = {
    __typename?: 'LoginResponse';
    access: Scalars['String'];
    refresh: Scalars['String'];
};
export declare type Mutation = {
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
export declare type MutationCreateProductArgs = {
    input: CreateProductInput;
};
export declare type MutationCreateStoreArgs = {
    input: CreateStoreInput;
};
export declare type MutationLoginArgs = {
    input: LoginInput;
};
export declare type MutationRegisterArgs = {
    input: CreateUserInput;
};
export declare type MutationRemoveProductArgs = {
    id: Scalars['HashIds'];
};
export declare type MutationUpdateProductArgs = {
    input: UpdateProductInput;
};
export declare type MutationUpdateStoreArgs = {
    input: UpdateStoreInput;
};
export declare type MutationUpdateUserArgs = {
    input: UpdateUserInput;
};
export declare type PagePaginationInput = {
    page?: InputMaybe<Scalars['Float']>;
    size?: InputMaybe<Scalars['Float']>;
};
export declare type PaginatedProductsResponse = {
    __typename?: 'PaginatedProductsResponse';
    count: Scalars['Float'];
    pages: Scalars['Float'];
    results: Array<Product>;
};
export declare type Payment = {
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
export declare enum PaymentStatus {
    Captured = "CAPTURED",
    Failed = "FAILED",
    Pending = "PENDING"
}
export declare type Product = {
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
export declare type Query = {
    __typename?: 'Query';
    getProductsByStore: PaginatedProductsResponse;
    getStoreById: Store;
    me: SimpleUser;
};
export declare type QueryGetProductsByStoreArgs = {
    options?: InputMaybe<PagePaginationInput>;
    store: Scalars['HashIds'];
};
export declare type QueryGetStoreByIdArgs = {
    id: Scalars['HashIds'];
};
export declare type SimpleUser = {
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
export declare type Store = {
    __typename?: 'Store';
    createdAt: Scalars['DateTime'];
    id: Scalars['HashIds'];
    name: Scalars['String'];
    owner: User;
    ownerId: Scalars['String'];
    products: Array<Product>;
    updatedAt: Scalars['DateTime'];
};
export declare type UpdateProductInput = {
    descriptionAr?: InputMaybe<Scalars['String']>;
    descriptionEn?: InputMaybe<Scalars['String']>;
    id: Scalars['HashIds'];
    images?: InputMaybe<Scalars['Upload']>;
    nameAr?: InputMaybe<Scalars['String']>;
    nameEn?: InputMaybe<Scalars['String']>;
};
export declare type UpdateStoreInput = {
    name?: InputMaybe<Scalars['String']>;
};
export declare type UpdateUserInput = {
    firstName?: InputMaybe<Scalars['String']>;
    lastName?: InputMaybe<Scalars['String']>;
    superuser?: InputMaybe<Scalars['Boolean']>;
};
export declare type User = {
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
export declare type LoginMutationVariables = Exact<{
    input: LoginInput;
}>;
export declare type LoginMutation = {
    __typename?: 'Mutation';
    login: {
        __typename?: 'LoginResponse';
        access: string;
        refresh: string;
    };
};
export declare type MeQueryVariables = Exact<{
    [key: string]: never;
}>;
export declare type MeQuery = {
    __typename?: 'Query';
    me: {
        __typename?: 'SimpleUser';
        id: string;
        active: boolean;
        email: string;
        firstName: string;
        lastName: string;
        phoneNumber: string;
        partner: boolean;
        staff: boolean;
    };
};
export declare type RegisterUserMutationVariables = Exact<{
    registerInput: CreateUserInput;
}>;
export declare type RegisterUserMutation = {
    __typename?: 'Mutation';
    register: string;
};
export declare type UpdateUserMutationVariables = Exact<{
    input: UpdateUserInput;
}>;
export declare type UpdateUserMutation = {
    __typename?: 'Mutation';
    updateUser: boolean;
};
export declare const LoginDocument: import("graphql").DocumentNode;
export declare const MeDocument: import("graphql").DocumentNode;
export declare const RegisterUserDocument: import("graphql").DocumentNode;
export declare const UpdateUserDocument: import("graphql").DocumentNode;
export declare type SdkFunctionWrapper = <T>(action: (requestHeaders?: Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;
export declare function getSdk(client: GraphQLClient, withWrapper?: SdkFunctionWrapper): {
    Login(variables: LoginMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<LoginMutation>;
    Me(variables?: MeQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<MeQuery>;
    RegisterUser(variables: RegisterUserMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<RegisterUserMutation>;
    UpdateUser(variables: UpdateUserMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateUserMutation>;
};
export declare type Sdk = ReturnType<typeof getSdk>;
export interface PossibleTypesResultData {
    possibleTypes: {
        [key: string]: string[];
    };
}
declare const result: PossibleTypesResultData;
export default result;
