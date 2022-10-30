import * as Apollo from '@apollo/client';
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
export declare type Auction = {
    __typename?: 'Auction';
    id: Scalars['HashIds'];
    items: Array<AuctionItems>;
    name: Scalars['String'];
    startDate: Scalars['DateTime'];
    visible: Scalars['Boolean'];
};
export declare type AuctionItems = {
    __typename?: 'AuctionItems';
    auction?: Maybe<Auction>;
    auctionId?: Maybe<Scalars['HashIds']>;
    buyer?: Maybe<Scalars['String']>;
    id: Scalars['HashIds'];
    order: Scalars['Int'];
    product?: Maybe<Product>;
    productId?: Maybe<Scalars['HashIds']>;
    sellPrice?: Maybe<Scalars['Float']>;
};
export declare type AuctionItemsCreateInput = {
    order: Scalars['Int'];
    productId?: InputMaybe<Scalars['HashIds']>;
};
export declare type AuctionItemsUpdateInput = {
    buyer?: InputMaybe<Scalars['String']>;
    order: Scalars['Int'];
    productId?: InputMaybe<Scalars['HashIds']>;
    sellPrice?: InputMaybe<Scalars['Float']>;
};
export declare type AuctionListDto = {
    __typename?: 'AuctionListDTO';
    id: Scalars['HashIds'];
    itemCount: Scalars['Float'];
    name: Scalars['String'];
    startDate: Scalars['DateTime'];
    visible: Scalars['Boolean'];
};
export declare type AuctionRetreiveDto = {
    __typename?: 'AuctionRetreiveDTO';
    id: Scalars['HashIds'];
    items: Array<SimpleAuctionItem>;
    name: Scalars['String'];
    startDate: Scalars['DateTime'];
};
export declare type CreateAuctionInput = {
    items?: InputMaybe<Array<AuctionItemsCreateInput>>;
    name: Scalars['String'];
    startDate: Scalars['DateTime'];
};
export declare type CreateProductInput = {
    descriptionAr?: InputMaybe<Scalars['String']>;
    descriptionEn?: InputMaybe<Scalars['String']>;
    images?: InputMaybe<Array<Scalars['Upload']>>;
    nameAr: Scalars['String'];
    nameEn: Scalars['String'];
    price: Scalars['Float'];
    weight: Scalars['Float'];
    weightUnit: Scalars['String'];
    year: Scalars['Float'];
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
    _createAuction: Scalars['HashIds'];
    _createProduct: Scalars['HashIds'];
    _createStore: Scalars['HashIds'];
    _removeProduct: Scalars['Boolean'];
    _removeStore: Scalars['Boolean'];
    _updateAuction: Scalars['Boolean'];
    _updateAuctionItem: Scalars['Boolean'];
    _updateProduct: Scalars['Boolean'];
    _updateStore: Scalars['Boolean'];
    createProduct: Scalars['HashIds'];
    createStore: Scalars['HashIds'];
    deactivateMe: Scalars['Boolean'];
    login: LoginResponse;
    register: Scalars['String'];
    removeProduct: Scalars['Boolean'];
    removeStore: Scalars['Boolean'];
    updateMe: Scalars['Boolean'];
    updateProduct: Scalars['Boolean'];
    updateStore: Scalars['Boolean'];
};
export declare type Mutation_CreateAuctionArgs = {
    input: CreateAuctionInput;
};
export declare type Mutation_CreateProductArgs = {
    input: CreateProductInput;
    store: Scalars['HashIds'];
};
export declare type Mutation_CreateStoreArgs = {
    input: CreateStoreInput;
    owner: Scalars['String'];
};
export declare type Mutation_RemoveProductArgs = {
    id: Scalars['HashIds'];
};
export declare type Mutation_RemoveStoreArgs = {
    id: Scalars['HashIds'];
};
export declare type Mutation_UpdateAuctionArgs = {
    input: UpdateAuctionInput;
};
export declare type Mutation_UpdateAuctionItemArgs = {
    input: UpdateAuctionItemInput;
};
export declare type Mutation_UpdateProductArgs = {
    input: UpdateProductInput;
    store?: InputMaybe<Scalars['HashIds']>;
};
export declare type Mutation_UpdateStoreArgs = {
    input: UpdateStoreInput;
    store: Scalars['HashIds'];
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
export declare type MutationUpdateMeArgs = {
    input: UpdateUserInput;
};
export declare type MutationUpdateProductArgs = {
    input: UpdateProductInput;
};
export declare type MutationUpdateStoreArgs = {
    input: UpdateStoreInput;
};
export declare type PagePaginationInput = {
    page?: InputMaybe<Scalars['Float']>;
    size?: InputMaybe<Scalars['Float']>;
};
export declare type PaginatedAuctionItemList = {
    __typename?: 'PaginatedAuctionItemList';
    count: Scalars['Float'];
    pages: Scalars['Float'];
    results: Array<AuctionItems>;
};
export declare type PaginatedAuctionList = {
    __typename?: 'PaginatedAuctionList';
    count: Scalars['Float'];
    pages: Scalars['Float'];
    results: Array<AuctionListDto>;
};
export declare type PaginatedProductsResponse = {
    __typename?: 'PaginatedProductsResponse';
    count: Scalars['Float'];
    pages: Scalars['Float'];
    results: Array<Product>;
};
export declare type PaginatedStoresResponse = {
    __typename?: 'PaginatedStoresResponse';
    count: Scalars['Float'];
    pages: Scalars['Float'];
    results: Array<Store>;
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
    auctionItems: Array<AuctionItems>;
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
    store?: Maybe<Store>;
    storeId: Scalars['HashIds'];
    updatedAt: Scalars['DateTime'];
    weight: Scalars['Float'];
    weightUnit: Scalars['String'];
    year?: Maybe<Scalars['Int']>;
};
export declare type ProductFilters = {
    name?: InputMaybe<Scalars['String']>;
    price?: InputMaybe<Scalars['Float']>;
    store?: InputMaybe<Scalars['String']>;
    storeId?: InputMaybe<Scalars['HashIds']>;
    weight?: InputMaybe<Scalars['Float']>;
    year?: InputMaybe<Scalars['Float']>;
};
export declare type Query = {
    __typename?: 'Query';
    _getAllProducts: PaginatedProductsResponse;
    _getAllStores: PaginatedStoresResponse;
    _getAuction: Auction;
    _getAuctionItems: PaginatedAuctionItemList;
    _getRawProducts: Array<Product>;
    getAllAuctions: PaginatedAuctionList;
    getAuction: AuctionRetreiveDto;
    getAuctionItems: PaginatedProductsResponse;
    getMyProducts: PaginatedProductsResponse;
    getProductDetails: Product;
    getProductsByStore: PaginatedProductsResponse;
    getStoreById: Store;
    getUpcomingAuction: AuctionRetreiveDto;
    me: SimpleUser;
};
export declare type Query_GetAllProductsArgs = {
    filters?: InputMaybe<ProductFilters>;
    options?: InputMaybe<PagePaginationInput>;
};
export declare type Query_GetAllStoresArgs = {
    options?: InputMaybe<PagePaginationInput>;
};
export declare type Query_GetAuctionArgs = {
    id: Scalars['HashIds'];
};
export declare type Query_GetAuctionItemsArgs = {
    id: Scalars['HashIds'];
    options?: InputMaybe<PagePaginationInput>;
};
export declare type QueryGetAllAuctionsArgs = {
    options?: InputMaybe<PagePaginationInput>;
};
export declare type QueryGetAuctionArgs = {
    id: Scalars['HashIds'];
};
export declare type QueryGetAuctionItemsArgs = {
    id: Scalars['HashIds'];
    options?: InputMaybe<PagePaginationInput>;
};
export declare type QueryGetMyProductsArgs = {
    options?: InputMaybe<PagePaginationInput>;
};
export declare type QueryGetProductDetailsArgs = {
    product: Scalars['HashIds'];
};
export declare type QueryGetProductsByStoreArgs = {
    options?: InputMaybe<PagePaginationInput>;
    store: Scalars['HashIds'];
};
export declare type QueryGetStoreByIdArgs = {
    id: Scalars['HashIds'];
};
export declare type SimpleAuctionItem = {
    __typename?: 'SimpleAuctionItem';
    description?: Maybe<Scalars['String']>;
    id: Scalars['HashIds'];
    images: Array<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    weight: Scalars['Float'];
    weightUnit: Scalars['String'];
    year?: Maybe<Scalars['Int']>;
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
    store?: Maybe<Store>;
};
export declare type Store = {
    __typename?: 'Store';
    createdAt: Scalars['DateTime'];
    id: Scalars['HashIds'];
    name: Scalars['String'];
    owner?: Maybe<User>;
    ownerId: Scalars['String'];
    products: Array<Product>;
    updatedAt: Scalars['DateTime'];
};
export declare type UpdateAuctionInput = {
    id: Scalars['HashIds'];
    items?: InputMaybe<Array<AuctionItemsUpdateInput>>;
    name?: InputMaybe<Scalars['String']>;
    startDate?: InputMaybe<Scalars['DateTime']>;
    visible?: InputMaybe<Scalars['Boolean']>;
};
export declare type UpdateAuctionItemInput = {
    buyer?: InputMaybe<Scalars['String']>;
    id: Scalars['HashIds'];
    sellPrice?: InputMaybe<Scalars['Float']>;
};
export declare type UpdateProductInput = {
    deletedImages?: InputMaybe<Array<Scalars['String']>>;
    descriptionAr?: InputMaybe<Scalars['String']>;
    descriptionEn?: InputMaybe<Scalars['String']>;
    id: Scalars['HashIds'];
    images?: InputMaybe<Scalars['Upload']>;
    nameAr?: InputMaybe<Scalars['String']>;
    nameEn?: InputMaybe<Scalars['String']>;
    price?: InputMaybe<Scalars['Float']>;
    weight?: InputMaybe<Scalars['Float']>;
    weightUnit?: InputMaybe<Scalars['String']>;
    year?: InputMaybe<Scalars['Float']>;
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
export declare type AllAuctionsQueryVariables = Exact<{
    options?: InputMaybe<PagePaginationInput>;
}>;
export declare type AllAuctionsQuery = {
    __typename?: 'Query';
    getAllAuctions: {
        __typename?: 'PaginatedAuctionList';
        count: number;
        pages: number;
        results: Array<{
            __typename?: 'AuctionListDTO';
            itemCount: number;
            name: string;
            startDate: any;
            visible: boolean;
            id: any;
        }>;
    };
};
export declare type AuctionByIdQueryVariables = Exact<{
    id: Scalars['HashIds'];
}>;
export declare type AuctionByIdQuery = {
    __typename?: 'Query';
    getAuction: {
        __typename?: 'AuctionRetreiveDTO';
        id: any;
        name: string;
        startDate: any;
        items: Array<{
            __typename?: 'SimpleAuctionItem';
            id: any;
            name?: string | null;
            description?: string | null;
            weight: number;
            weightUnit: string;
            year?: number | null;
            images: Array<string>;
        }>;
    };
};
export declare type AuctionProductsQueryVariables = Exact<{
    auctionId: Scalars['HashIds'];
    options?: InputMaybe<PagePaginationInput>;
}>;
export declare type AuctionProductsQuery = {
    __typename?: 'Query';
    getAuctionItems: {
        __typename?: 'PaginatedProductsResponse';
        count: number;
        pages: number;
        results: Array<{
            __typename?: 'Product';
            id: any;
            name?: string | null;
            description?: string | null;
            images: Array<string>;
            weight: number;
            weightUnit: string;
            year?: number | null;
        }>;
    };
};
export declare type UpcomingAuctionQueryVariables = Exact<{
    [key: string]: never;
}>;
export declare type UpcomingAuctionQuery = {
    __typename?: 'Query';
    getUpcomingAuction: {
        __typename?: 'AuctionRetreiveDTO';
        id: any;
        name: string;
        startDate: any;
        items: Array<{
            __typename?: 'SimpleAuctionItem';
            description?: string | null;
            id: any;
            name?: string | null;
            weight: number;
            weightUnit: string;
            year?: number | null;
            images: Array<string>;
        }>;
    };
};
export declare type CreateAuctionMutationVariables = Exact<{
    input: CreateAuctionInput;
}>;
export declare type CreateAuctionMutation = {
    __typename?: 'Mutation';
    _createAuction: any;
};
export declare type StaffAuctionByIdQueryVariables = Exact<{
    id: Scalars['HashIds'];
}>;
export declare type StaffAuctionByIdQuery = {
    __typename?: 'Query';
    _getAuction: {
        __typename?: 'Auction';
        id: any;
        name: string;
        startDate: any;
        visible: boolean;
        items: Array<{
            __typename?: 'AuctionItems';
            id: any;
            buyer?: string | null;
            order: number;
            sellPrice?: number | null;
            product?: {
                __typename?: 'Product';
                nameEn: string;
                id: any;
                images: Array<string>;
                weight: number;
                weightUnit: string;
                price: number;
                year?: number | null;
                descriptionEn: string;
                store?: {
                    __typename?: 'Store';
                    id: any;
                    name: string;
                } | null;
            } | null;
        }>;
    };
};
export declare type StaffAuctionItemsQueryVariables = Exact<{
    auctionId: Scalars['HashIds'];
    options?: InputMaybe<PagePaginationInput>;
}>;
export declare type StaffAuctionItemsQuery = {
    __typename?: 'Query';
    _getAuctionItems: {
        __typename?: 'PaginatedAuctionItemList';
        pages: number;
        count: number;
        results: Array<{
            __typename?: 'AuctionItems';
            buyer?: string | null;
            id: any;
            sellPrice?: number | null;
            order: number;
            productId?: any | null;
            product?: {
                __typename?: 'Product';
                id: any;
                name?: string | null;
                description?: string | null;
                price: number;
                year?: number | null;
                weight: number;
                weightUnit: string;
                images: Array<string>;
                store?: {
                    __typename?: 'Store';
                    name: string;
                    id: any;
                } | null;
            } | null;
        }>;
    };
};
export declare type UpdateAuctionMutationVariables = Exact<{
    input: UpdateAuctionInput;
}>;
export declare type UpdateAuctionMutation = {
    __typename?: 'Mutation';
    _updateAuction: boolean;
};
export declare type UpdateAuctionItemMutationVariables = Exact<{
    input: UpdateAuctionItemInput;
}>;
export declare type UpdateAuctionItemMutation = {
    __typename?: 'Mutation';
    _updateAuctionItem: boolean;
};
export declare type CreateProductMutationVariables = Exact<{
    input: CreateProductInput;
}>;
export declare type CreateProductMutation = {
    __typename?: 'Mutation';
    createProduct: any;
};
export declare type MyProductsQueryVariables = Exact<{
    options?: InputMaybe<PagePaginationInput>;
}>;
export declare type MyProductsQuery = {
    __typename?: 'Query';
    getMyProducts: {
        __typename?: 'PaginatedProductsResponse';
        count: number;
        pages: number;
        results: Array<{
            __typename?: 'Product';
            id: any;
            nameEn: string;
            descriptionEn: string;
            images: Array<string>;
            price: number;
            weight: number;
            weightUnit: string;
            year?: number | null;
        }>;
    };
};
export declare type ProductsByStoreQueryVariables = Exact<{
    store: Scalars['HashIds'];
    options?: InputMaybe<PagePaginationInput>;
}>;
export declare type ProductsByStoreQuery = {
    __typename?: 'Query';
    getProductsByStore: {
        __typename?: 'PaginatedProductsResponse';
        count: number;
        pages: number;
        results: Array<{
            __typename?: 'Product';
            id: any;
            name?: string | null;
            description?: string | null;
            images: Array<string>;
            weightUnit: string;
            weight: number;
            year?: number | null;
        }>;
    };
};
export declare type RemoveProductMutationVariables = Exact<{
    removeProductId: Scalars['HashIds'];
}>;
export declare type RemoveProductMutation = {
    __typename?: 'Mutation';
    removeProduct: boolean;
};
export declare type StaffCreateProductMutationVariables = Exact<{
    input: CreateProductInput;
    store: Scalars['HashIds'];
}>;
export declare type StaffCreateProductMutation = {
    __typename?: 'Mutation';
    _createProduct: any;
};
export declare type AllProductsQueryVariables = Exact<{
    options?: InputMaybe<PagePaginationInput>;
    filters?: InputMaybe<ProductFilters>;
}>;
export declare type AllProductsQuery = {
    __typename?: 'Query';
    _getAllProducts: {
        __typename?: 'PaginatedProductsResponse';
        count: number;
        pages: number;
        results: Array<{
            __typename?: 'Product';
            name?: string | null;
            description?: string | null;
            images: Array<string>;
            id: any;
            price: number;
            year?: number | null;
            weightUnit: string;
            weight: number;
            store?: {
                __typename?: 'Store';
                id: any;
                name: string;
            } | null;
        }>;
    };
};
export declare type RawAllProductsQueryVariables = Exact<{
    [key: string]: never;
}>;
export declare type RawAllProductsQuery = {
    __typename?: 'Query';
    _getRawProducts: Array<{
        __typename?: 'Product';
        id: any;
        name?: string | null;
        price: number;
        images: Array<string>;
        store?: {
            __typename?: 'Store';
            name: string;
        } | null;
    }>;
};
export declare type StaffRemoveProductMutationVariables = Exact<{
    productId: Scalars['HashIds'];
}>;
export declare type StaffRemoveProductMutation = {
    __typename?: 'Mutation';
    _removeProduct: boolean;
};
export declare type StaffUpdateProductMutationVariables = Exact<{
    input: UpdateProductInput;
    store?: InputMaybe<Scalars['HashIds']>;
}>;
export declare type StaffUpdateProductMutation = {
    __typename?: 'Mutation';
    _updateProduct: boolean;
};
export declare type UpdateProductMutationVariables = Exact<{
    input: UpdateProductInput;
}>;
export declare type UpdateProductMutation = {
    __typename?: 'Mutation';
    updateProduct: boolean;
};
export declare type StaffCreateStoreMutationVariables = Exact<{
    owner: Scalars['String'];
    input: CreateStoreInput;
}>;
export declare type StaffCreateStoreMutation = {
    __typename?: 'Mutation';
    _createStore: any;
};
export declare type AllStoresQueryVariables = Exact<{
    options?: InputMaybe<PagePaginationInput>;
}>;
export declare type AllStoresQuery = {
    __typename?: 'Query';
    _getAllStores: {
        __typename?: 'PaginatedStoresResponse';
        count: number;
        pages: number;
        results: Array<{
            __typename?: 'Store';
            id: any;
            name: string;
            owner?: {
                __typename?: 'User';
                firstName: string;
                lastName: string;
                id: string;
                email: string;
            } | null;
        }>;
    };
};
export declare type StaffRemoveStoreMutationVariables = Exact<{
    removeStoreId: Scalars['HashIds'];
}>;
export declare type StaffRemoveStoreMutation = {
    __typename?: 'Mutation';
    _removeStore: boolean;
};
export declare type StaffUpdateStoreMutationVariables = Exact<{
    store: Scalars['HashIds'];
    input: UpdateStoreInput;
}>;
export declare type StaffUpdateStoreMutation = {
    __typename?: 'Mutation';
    _updateStore: boolean;
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
        store?: {
            __typename?: 'Store';
            id: any;
            name: string;
        } | null;
    };
};
export declare type RegisterUserMutationVariables = Exact<{
    registerInput: CreateUserInput;
}>;
export declare type RegisterUserMutation = {
    __typename?: 'Mutation';
    register: string;
};
export declare type UpdateMeMutationVariables = Exact<{
    input: UpdateUserInput;
}>;
export declare type UpdateMeMutation = {
    __typename?: 'Mutation';
    updateMe: boolean;
};
export declare const AllAuctionsDocument: Apollo.DocumentNode;
/**
 * __useAllAuctionsQuery__
 *
 * To run a query within a React component, call `useAllAuctionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllAuctionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllAuctionsQuery({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export declare function useAllAuctionsQuery(baseOptions?: Apollo.QueryHookOptions<AllAuctionsQuery, AllAuctionsQueryVariables>): Apollo.QueryResult<AllAuctionsQuery, Exact<{
    options?: InputMaybe<PagePaginationInput> | undefined;
}>>;
export declare function useAllAuctionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllAuctionsQuery, AllAuctionsQueryVariables>): Apollo.LazyQueryResultTuple<AllAuctionsQuery, Exact<{
    options?: InputMaybe<PagePaginationInput> | undefined;
}>>;
export declare type AllAuctionsQueryHookResult = ReturnType<typeof useAllAuctionsQuery>;
export declare type AllAuctionsLazyQueryHookResult = ReturnType<typeof useAllAuctionsLazyQuery>;
export declare type AllAuctionsQueryResult = Apollo.QueryResult<AllAuctionsQuery, AllAuctionsQueryVariables>;
export declare const AuctionByIdDocument: Apollo.DocumentNode;
/**
 * __useAuctionByIdQuery__
 *
 * To run a query within a React component, call `useAuctionByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useAuctionByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAuctionByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export declare function useAuctionByIdQuery(baseOptions: Apollo.QueryHookOptions<AuctionByIdQuery, AuctionByIdQueryVariables>): Apollo.QueryResult<AuctionByIdQuery, Exact<{
    id: any;
}>>;
export declare function useAuctionByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AuctionByIdQuery, AuctionByIdQueryVariables>): Apollo.LazyQueryResultTuple<AuctionByIdQuery, Exact<{
    id: any;
}>>;
export declare type AuctionByIdQueryHookResult = ReturnType<typeof useAuctionByIdQuery>;
export declare type AuctionByIdLazyQueryHookResult = ReturnType<typeof useAuctionByIdLazyQuery>;
export declare type AuctionByIdQueryResult = Apollo.QueryResult<AuctionByIdQuery, AuctionByIdQueryVariables>;
export declare const AuctionProductsDocument: Apollo.DocumentNode;
/**
 * __useAuctionProductsQuery__
 *
 * To run a query within a React component, call `useAuctionProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAuctionProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAuctionProductsQuery({
 *   variables: {
 *      auctionId: // value for 'auctionId'
 *      options: // value for 'options'
 *   },
 * });
 */
export declare function useAuctionProductsQuery(baseOptions: Apollo.QueryHookOptions<AuctionProductsQuery, AuctionProductsQueryVariables>): Apollo.QueryResult<AuctionProductsQuery, Exact<{
    auctionId: any;
    options?: InputMaybe<PagePaginationInput> | undefined;
}>>;
export declare function useAuctionProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AuctionProductsQuery, AuctionProductsQueryVariables>): Apollo.LazyQueryResultTuple<AuctionProductsQuery, Exact<{
    auctionId: any;
    options?: InputMaybe<PagePaginationInput> | undefined;
}>>;
export declare type AuctionProductsQueryHookResult = ReturnType<typeof useAuctionProductsQuery>;
export declare type AuctionProductsLazyQueryHookResult = ReturnType<typeof useAuctionProductsLazyQuery>;
export declare type AuctionProductsQueryResult = Apollo.QueryResult<AuctionProductsQuery, AuctionProductsQueryVariables>;
export declare const UpcomingAuctionDocument: Apollo.DocumentNode;
/**
 * __useUpcomingAuctionQuery__
 *
 * To run a query within a React component, call `useUpcomingAuctionQuery` and pass it any options that fit your needs.
 * When your component renders, `useUpcomingAuctionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUpcomingAuctionQuery({
 *   variables: {
 *   },
 * });
 */
export declare function useUpcomingAuctionQuery(baseOptions?: Apollo.QueryHookOptions<UpcomingAuctionQuery, UpcomingAuctionQueryVariables>): Apollo.QueryResult<UpcomingAuctionQuery, Exact<{
    [key: string]: never;
}>>;
export declare function useUpcomingAuctionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UpcomingAuctionQuery, UpcomingAuctionQueryVariables>): Apollo.LazyQueryResultTuple<UpcomingAuctionQuery, Exact<{
    [key: string]: never;
}>>;
export declare type UpcomingAuctionQueryHookResult = ReturnType<typeof useUpcomingAuctionQuery>;
export declare type UpcomingAuctionLazyQueryHookResult = ReturnType<typeof useUpcomingAuctionLazyQuery>;
export declare type UpcomingAuctionQueryResult = Apollo.QueryResult<UpcomingAuctionQuery, UpcomingAuctionQueryVariables>;
export declare const CreateAuctionDocument: Apollo.DocumentNode;
export declare type CreateAuctionMutationFn = Apollo.MutationFunction<CreateAuctionMutation, CreateAuctionMutationVariables>;
/**
 * __useCreateAuctionMutation__
 *
 * To run a mutation, you first call `useCreateAuctionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAuctionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAuctionMutation, { data, loading, error }] = useCreateAuctionMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export declare function useCreateAuctionMutation(baseOptions?: Apollo.MutationHookOptions<CreateAuctionMutation, CreateAuctionMutationVariables>): Apollo.MutationTuple<CreateAuctionMutation, Exact<{
    input: CreateAuctionInput;
}>, Apollo.DefaultContext, Apollo.ApolloCache<any>>;
export declare type CreateAuctionMutationHookResult = ReturnType<typeof useCreateAuctionMutation>;
export declare type CreateAuctionMutationResult = Apollo.MutationResult<CreateAuctionMutation>;
export declare type CreateAuctionMutationOptions = Apollo.BaseMutationOptions<CreateAuctionMutation, CreateAuctionMutationVariables>;
export declare const StaffAuctionByIdDocument: Apollo.DocumentNode;
/**
 * __useStaffAuctionByIdQuery__
 *
 * To run a query within a React component, call `useStaffAuctionByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useStaffAuctionByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStaffAuctionByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export declare function useStaffAuctionByIdQuery(baseOptions: Apollo.QueryHookOptions<StaffAuctionByIdQuery, StaffAuctionByIdQueryVariables>): Apollo.QueryResult<StaffAuctionByIdQuery, Exact<{
    id: any;
}>>;
export declare function useStaffAuctionByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<StaffAuctionByIdQuery, StaffAuctionByIdQueryVariables>): Apollo.LazyQueryResultTuple<StaffAuctionByIdQuery, Exact<{
    id: any;
}>>;
export declare type StaffAuctionByIdQueryHookResult = ReturnType<typeof useStaffAuctionByIdQuery>;
export declare type StaffAuctionByIdLazyQueryHookResult = ReturnType<typeof useStaffAuctionByIdLazyQuery>;
export declare type StaffAuctionByIdQueryResult = Apollo.QueryResult<StaffAuctionByIdQuery, StaffAuctionByIdQueryVariables>;
export declare const StaffAuctionItemsDocument: Apollo.DocumentNode;
/**
 * __useStaffAuctionItemsQuery__
 *
 * To run a query within a React component, call `useStaffAuctionItemsQuery` and pass it any options that fit your needs.
 * When your component renders, `useStaffAuctionItemsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStaffAuctionItemsQuery({
 *   variables: {
 *      auctionId: // value for 'auctionId'
 *      options: // value for 'options'
 *   },
 * });
 */
export declare function useStaffAuctionItemsQuery(baseOptions: Apollo.QueryHookOptions<StaffAuctionItemsQuery, StaffAuctionItemsQueryVariables>): Apollo.QueryResult<StaffAuctionItemsQuery, Exact<{
    auctionId: any;
    options?: InputMaybe<PagePaginationInput> | undefined;
}>>;
export declare function useStaffAuctionItemsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<StaffAuctionItemsQuery, StaffAuctionItemsQueryVariables>): Apollo.LazyQueryResultTuple<StaffAuctionItemsQuery, Exact<{
    auctionId: any;
    options?: InputMaybe<PagePaginationInput> | undefined;
}>>;
export declare type StaffAuctionItemsQueryHookResult = ReturnType<typeof useStaffAuctionItemsQuery>;
export declare type StaffAuctionItemsLazyQueryHookResult = ReturnType<typeof useStaffAuctionItemsLazyQuery>;
export declare type StaffAuctionItemsQueryResult = Apollo.QueryResult<StaffAuctionItemsQuery, StaffAuctionItemsQueryVariables>;
export declare const UpdateAuctionDocument: Apollo.DocumentNode;
export declare type UpdateAuctionMutationFn = Apollo.MutationFunction<UpdateAuctionMutation, UpdateAuctionMutationVariables>;
/**
 * __useUpdateAuctionMutation__
 *
 * To run a mutation, you first call `useUpdateAuctionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAuctionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAuctionMutation, { data, loading, error }] = useUpdateAuctionMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export declare function useUpdateAuctionMutation(baseOptions?: Apollo.MutationHookOptions<UpdateAuctionMutation, UpdateAuctionMutationVariables>): Apollo.MutationTuple<UpdateAuctionMutation, Exact<{
    input: UpdateAuctionInput;
}>, Apollo.DefaultContext, Apollo.ApolloCache<any>>;
export declare type UpdateAuctionMutationHookResult = ReturnType<typeof useUpdateAuctionMutation>;
export declare type UpdateAuctionMutationResult = Apollo.MutationResult<UpdateAuctionMutation>;
export declare type UpdateAuctionMutationOptions = Apollo.BaseMutationOptions<UpdateAuctionMutation, UpdateAuctionMutationVariables>;
export declare const UpdateAuctionItemDocument: Apollo.DocumentNode;
export declare type UpdateAuctionItemMutationFn = Apollo.MutationFunction<UpdateAuctionItemMutation, UpdateAuctionItemMutationVariables>;
/**
 * __useUpdateAuctionItemMutation__
 *
 * To run a mutation, you first call `useUpdateAuctionItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAuctionItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAuctionItemMutation, { data, loading, error }] = useUpdateAuctionItemMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export declare function useUpdateAuctionItemMutation(baseOptions?: Apollo.MutationHookOptions<UpdateAuctionItemMutation, UpdateAuctionItemMutationVariables>): Apollo.MutationTuple<UpdateAuctionItemMutation, Exact<{
    input: UpdateAuctionItemInput;
}>, Apollo.DefaultContext, Apollo.ApolloCache<any>>;
export declare type UpdateAuctionItemMutationHookResult = ReturnType<typeof useUpdateAuctionItemMutation>;
export declare type UpdateAuctionItemMutationResult = Apollo.MutationResult<UpdateAuctionItemMutation>;
export declare type UpdateAuctionItemMutationOptions = Apollo.BaseMutationOptions<UpdateAuctionItemMutation, UpdateAuctionItemMutationVariables>;
export declare const CreateProductDocument: Apollo.DocumentNode;
export declare type CreateProductMutationFn = Apollo.MutationFunction<CreateProductMutation, CreateProductMutationVariables>;
/**
 * __useCreateProductMutation__
 *
 * To run a mutation, you first call `useCreateProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProductMutation, { data, loading, error }] = useCreateProductMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export declare function useCreateProductMutation(baseOptions?: Apollo.MutationHookOptions<CreateProductMutation, CreateProductMutationVariables>): Apollo.MutationTuple<CreateProductMutation, Exact<{
    input: CreateProductInput;
}>, Apollo.DefaultContext, Apollo.ApolloCache<any>>;
export declare type CreateProductMutationHookResult = ReturnType<typeof useCreateProductMutation>;
export declare type CreateProductMutationResult = Apollo.MutationResult<CreateProductMutation>;
export declare type CreateProductMutationOptions = Apollo.BaseMutationOptions<CreateProductMutation, CreateProductMutationVariables>;
export declare const MyProductsDocument: Apollo.DocumentNode;
/**
 * __useMyProductsQuery__
 *
 * To run a query within a React component, call `useMyProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyProductsQuery({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export declare function useMyProductsQuery(baseOptions?: Apollo.QueryHookOptions<MyProductsQuery, MyProductsQueryVariables>): Apollo.QueryResult<MyProductsQuery, Exact<{
    options?: InputMaybe<PagePaginationInput> | undefined;
}>>;
export declare function useMyProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MyProductsQuery, MyProductsQueryVariables>): Apollo.LazyQueryResultTuple<MyProductsQuery, Exact<{
    options?: InputMaybe<PagePaginationInput> | undefined;
}>>;
export declare type MyProductsQueryHookResult = ReturnType<typeof useMyProductsQuery>;
export declare type MyProductsLazyQueryHookResult = ReturnType<typeof useMyProductsLazyQuery>;
export declare type MyProductsQueryResult = Apollo.QueryResult<MyProductsQuery, MyProductsQueryVariables>;
export declare const ProductsByStoreDocument: Apollo.DocumentNode;
/**
 * __useProductsByStoreQuery__
 *
 * To run a query within a React component, call `useProductsByStoreQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductsByStoreQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductsByStoreQuery({
 *   variables: {
 *      store: // value for 'store'
 *      options: // value for 'options'
 *   },
 * });
 */
export declare function useProductsByStoreQuery(baseOptions: Apollo.QueryHookOptions<ProductsByStoreQuery, ProductsByStoreQueryVariables>): Apollo.QueryResult<ProductsByStoreQuery, Exact<{
    store: any;
    options?: InputMaybe<PagePaginationInput> | undefined;
}>>;
export declare function useProductsByStoreLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductsByStoreQuery, ProductsByStoreQueryVariables>): Apollo.LazyQueryResultTuple<ProductsByStoreQuery, Exact<{
    store: any;
    options?: InputMaybe<PagePaginationInput> | undefined;
}>>;
export declare type ProductsByStoreQueryHookResult = ReturnType<typeof useProductsByStoreQuery>;
export declare type ProductsByStoreLazyQueryHookResult = ReturnType<typeof useProductsByStoreLazyQuery>;
export declare type ProductsByStoreQueryResult = Apollo.QueryResult<ProductsByStoreQuery, ProductsByStoreQueryVariables>;
export declare const RemoveProductDocument: Apollo.DocumentNode;
export declare type RemoveProductMutationFn = Apollo.MutationFunction<RemoveProductMutation, RemoveProductMutationVariables>;
/**
 * __useRemoveProductMutation__
 *
 * To run a mutation, you first call `useRemoveProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeProductMutation, { data, loading, error }] = useRemoveProductMutation({
 *   variables: {
 *      removeProductId: // value for 'removeProductId'
 *   },
 * });
 */
export declare function useRemoveProductMutation(baseOptions?: Apollo.MutationHookOptions<RemoveProductMutation, RemoveProductMutationVariables>): Apollo.MutationTuple<RemoveProductMutation, Exact<{
    removeProductId: any;
}>, Apollo.DefaultContext, Apollo.ApolloCache<any>>;
export declare type RemoveProductMutationHookResult = ReturnType<typeof useRemoveProductMutation>;
export declare type RemoveProductMutationResult = Apollo.MutationResult<RemoveProductMutation>;
export declare type RemoveProductMutationOptions = Apollo.BaseMutationOptions<RemoveProductMutation, RemoveProductMutationVariables>;
export declare const StaffCreateProductDocument: Apollo.DocumentNode;
export declare type StaffCreateProductMutationFn = Apollo.MutationFunction<StaffCreateProductMutation, StaffCreateProductMutationVariables>;
/**
 * __useStaffCreateProductMutation__
 *
 * To run a mutation, you first call `useStaffCreateProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useStaffCreateProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [staffCreateProductMutation, { data, loading, error }] = useStaffCreateProductMutation({
 *   variables: {
 *      input: // value for 'input'
 *      store: // value for 'store'
 *   },
 * });
 */
export declare function useStaffCreateProductMutation(baseOptions?: Apollo.MutationHookOptions<StaffCreateProductMutation, StaffCreateProductMutationVariables>): Apollo.MutationTuple<StaffCreateProductMutation, Exact<{
    input: CreateProductInput;
    store: any;
}>, Apollo.DefaultContext, Apollo.ApolloCache<any>>;
export declare type StaffCreateProductMutationHookResult = ReturnType<typeof useStaffCreateProductMutation>;
export declare type StaffCreateProductMutationResult = Apollo.MutationResult<StaffCreateProductMutation>;
export declare type StaffCreateProductMutationOptions = Apollo.BaseMutationOptions<StaffCreateProductMutation, StaffCreateProductMutationVariables>;
export declare const AllProductsDocument: Apollo.DocumentNode;
/**
 * __useAllProductsQuery__
 *
 * To run a query within a React component, call `useAllProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllProductsQuery({
 *   variables: {
 *      options: // value for 'options'
 *      filters: // value for 'filters'
 *   },
 * });
 */
export declare function useAllProductsQuery(baseOptions?: Apollo.QueryHookOptions<AllProductsQuery, AllProductsQueryVariables>): Apollo.QueryResult<AllProductsQuery, Exact<{
    options?: InputMaybe<PagePaginationInput> | undefined;
    filters?: InputMaybe<ProductFilters> | undefined;
}>>;
export declare function useAllProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllProductsQuery, AllProductsQueryVariables>): Apollo.LazyQueryResultTuple<AllProductsQuery, Exact<{
    options?: InputMaybe<PagePaginationInput> | undefined;
    filters?: InputMaybe<ProductFilters> | undefined;
}>>;
export declare type AllProductsQueryHookResult = ReturnType<typeof useAllProductsQuery>;
export declare type AllProductsLazyQueryHookResult = ReturnType<typeof useAllProductsLazyQuery>;
export declare type AllProductsQueryResult = Apollo.QueryResult<AllProductsQuery, AllProductsQueryVariables>;
export declare const RawAllProductsDocument: Apollo.DocumentNode;
/**
 * __useRawAllProductsQuery__
 *
 * To run a query within a React component, call `useRawAllProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useRawAllProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRawAllProductsQuery({
 *   variables: {
 *   },
 * });
 */
export declare function useRawAllProductsQuery(baseOptions?: Apollo.QueryHookOptions<RawAllProductsQuery, RawAllProductsQueryVariables>): Apollo.QueryResult<RawAllProductsQuery, Exact<{
    [key: string]: never;
}>>;
export declare function useRawAllProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RawAllProductsQuery, RawAllProductsQueryVariables>): Apollo.LazyQueryResultTuple<RawAllProductsQuery, Exact<{
    [key: string]: never;
}>>;
export declare type RawAllProductsQueryHookResult = ReturnType<typeof useRawAllProductsQuery>;
export declare type RawAllProductsLazyQueryHookResult = ReturnType<typeof useRawAllProductsLazyQuery>;
export declare type RawAllProductsQueryResult = Apollo.QueryResult<RawAllProductsQuery, RawAllProductsQueryVariables>;
export declare const StaffRemoveProductDocument: Apollo.DocumentNode;
export declare type StaffRemoveProductMutationFn = Apollo.MutationFunction<StaffRemoveProductMutation, StaffRemoveProductMutationVariables>;
/**
 * __useStaffRemoveProductMutation__
 *
 * To run a mutation, you first call `useStaffRemoveProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useStaffRemoveProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [staffRemoveProductMutation, { data, loading, error }] = useStaffRemoveProductMutation({
 *   variables: {
 *      productId: // value for 'productId'
 *   },
 * });
 */
export declare function useStaffRemoveProductMutation(baseOptions?: Apollo.MutationHookOptions<StaffRemoveProductMutation, StaffRemoveProductMutationVariables>): Apollo.MutationTuple<StaffRemoveProductMutation, Exact<{
    productId: any;
}>, Apollo.DefaultContext, Apollo.ApolloCache<any>>;
export declare type StaffRemoveProductMutationHookResult = ReturnType<typeof useStaffRemoveProductMutation>;
export declare type StaffRemoveProductMutationResult = Apollo.MutationResult<StaffRemoveProductMutation>;
export declare type StaffRemoveProductMutationOptions = Apollo.BaseMutationOptions<StaffRemoveProductMutation, StaffRemoveProductMutationVariables>;
export declare const StaffUpdateProductDocument: Apollo.DocumentNode;
export declare type StaffUpdateProductMutationFn = Apollo.MutationFunction<StaffUpdateProductMutation, StaffUpdateProductMutationVariables>;
/**
 * __useStaffUpdateProductMutation__
 *
 * To run a mutation, you first call `useStaffUpdateProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useStaffUpdateProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [staffUpdateProductMutation, { data, loading, error }] = useStaffUpdateProductMutation({
 *   variables: {
 *      input: // value for 'input'
 *      store: // value for 'store'
 *   },
 * });
 */
export declare function useStaffUpdateProductMutation(baseOptions?: Apollo.MutationHookOptions<StaffUpdateProductMutation, StaffUpdateProductMutationVariables>): Apollo.MutationTuple<StaffUpdateProductMutation, Exact<{
    input: UpdateProductInput;
    store?: any;
}>, Apollo.DefaultContext, Apollo.ApolloCache<any>>;
export declare type StaffUpdateProductMutationHookResult = ReturnType<typeof useStaffUpdateProductMutation>;
export declare type StaffUpdateProductMutationResult = Apollo.MutationResult<StaffUpdateProductMutation>;
export declare type StaffUpdateProductMutationOptions = Apollo.BaseMutationOptions<StaffUpdateProductMutation, StaffUpdateProductMutationVariables>;
export declare const UpdateProductDocument: Apollo.DocumentNode;
export declare type UpdateProductMutationFn = Apollo.MutationFunction<UpdateProductMutation, UpdateProductMutationVariables>;
/**
 * __useUpdateProductMutation__
 *
 * To run a mutation, you first call `useUpdateProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProductMutation, { data, loading, error }] = useUpdateProductMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export declare function useUpdateProductMutation(baseOptions?: Apollo.MutationHookOptions<UpdateProductMutation, UpdateProductMutationVariables>): Apollo.MutationTuple<UpdateProductMutation, Exact<{
    input: UpdateProductInput;
}>, Apollo.DefaultContext, Apollo.ApolloCache<any>>;
export declare type UpdateProductMutationHookResult = ReturnType<typeof useUpdateProductMutation>;
export declare type UpdateProductMutationResult = Apollo.MutationResult<UpdateProductMutation>;
export declare type UpdateProductMutationOptions = Apollo.BaseMutationOptions<UpdateProductMutation, UpdateProductMutationVariables>;
export declare const StaffCreateStoreDocument: Apollo.DocumentNode;
export declare type StaffCreateStoreMutationFn = Apollo.MutationFunction<StaffCreateStoreMutation, StaffCreateStoreMutationVariables>;
/**
 * __useStaffCreateStoreMutation__
 *
 * To run a mutation, you first call `useStaffCreateStoreMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useStaffCreateStoreMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [staffCreateStoreMutation, { data, loading, error }] = useStaffCreateStoreMutation({
 *   variables: {
 *      owner: // value for 'owner'
 *      input: // value for 'input'
 *   },
 * });
 */
export declare function useStaffCreateStoreMutation(baseOptions?: Apollo.MutationHookOptions<StaffCreateStoreMutation, StaffCreateStoreMutationVariables>): Apollo.MutationTuple<StaffCreateStoreMutation, Exact<{
    owner: string;
    input: CreateStoreInput;
}>, Apollo.DefaultContext, Apollo.ApolloCache<any>>;
export declare type StaffCreateStoreMutationHookResult = ReturnType<typeof useStaffCreateStoreMutation>;
export declare type StaffCreateStoreMutationResult = Apollo.MutationResult<StaffCreateStoreMutation>;
export declare type StaffCreateStoreMutationOptions = Apollo.BaseMutationOptions<StaffCreateStoreMutation, StaffCreateStoreMutationVariables>;
export declare const AllStoresDocument: Apollo.DocumentNode;
/**
 * __useAllStoresQuery__
 *
 * To run a query within a React component, call `useAllStoresQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllStoresQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllStoresQuery({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export declare function useAllStoresQuery(baseOptions?: Apollo.QueryHookOptions<AllStoresQuery, AllStoresQueryVariables>): Apollo.QueryResult<AllStoresQuery, Exact<{
    options?: InputMaybe<PagePaginationInput> | undefined;
}>>;
export declare function useAllStoresLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllStoresQuery, AllStoresQueryVariables>): Apollo.LazyQueryResultTuple<AllStoresQuery, Exact<{
    options?: InputMaybe<PagePaginationInput> | undefined;
}>>;
export declare type AllStoresQueryHookResult = ReturnType<typeof useAllStoresQuery>;
export declare type AllStoresLazyQueryHookResult = ReturnType<typeof useAllStoresLazyQuery>;
export declare type AllStoresQueryResult = Apollo.QueryResult<AllStoresQuery, AllStoresQueryVariables>;
export declare const StaffRemoveStoreDocument: Apollo.DocumentNode;
export declare type StaffRemoveStoreMutationFn = Apollo.MutationFunction<StaffRemoveStoreMutation, StaffRemoveStoreMutationVariables>;
/**
 * __useStaffRemoveStoreMutation__
 *
 * To run a mutation, you first call `useStaffRemoveStoreMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useStaffRemoveStoreMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [staffRemoveStoreMutation, { data, loading, error }] = useStaffRemoveStoreMutation({
 *   variables: {
 *      removeStoreId: // value for 'removeStoreId'
 *   },
 * });
 */
export declare function useStaffRemoveStoreMutation(baseOptions?: Apollo.MutationHookOptions<StaffRemoveStoreMutation, StaffRemoveStoreMutationVariables>): Apollo.MutationTuple<StaffRemoveStoreMutation, Exact<{
    removeStoreId: any;
}>, Apollo.DefaultContext, Apollo.ApolloCache<any>>;
export declare type StaffRemoveStoreMutationHookResult = ReturnType<typeof useStaffRemoveStoreMutation>;
export declare type StaffRemoveStoreMutationResult = Apollo.MutationResult<StaffRemoveStoreMutation>;
export declare type StaffRemoveStoreMutationOptions = Apollo.BaseMutationOptions<StaffRemoveStoreMutation, StaffRemoveStoreMutationVariables>;
export declare const StaffUpdateStoreDocument: Apollo.DocumentNode;
export declare type StaffUpdateStoreMutationFn = Apollo.MutationFunction<StaffUpdateStoreMutation, StaffUpdateStoreMutationVariables>;
/**
 * __useStaffUpdateStoreMutation__
 *
 * To run a mutation, you first call `useStaffUpdateStoreMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useStaffUpdateStoreMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [staffUpdateStoreMutation, { data, loading, error }] = useStaffUpdateStoreMutation({
 *   variables: {
 *      store: // value for 'store'
 *      input: // value for 'input'
 *   },
 * });
 */
export declare function useStaffUpdateStoreMutation(baseOptions?: Apollo.MutationHookOptions<StaffUpdateStoreMutation, StaffUpdateStoreMutationVariables>): Apollo.MutationTuple<StaffUpdateStoreMutation, Exact<{
    store: any;
    input: UpdateStoreInput;
}>, Apollo.DefaultContext, Apollo.ApolloCache<any>>;
export declare type StaffUpdateStoreMutationHookResult = ReturnType<typeof useStaffUpdateStoreMutation>;
export declare type StaffUpdateStoreMutationResult = Apollo.MutationResult<StaffUpdateStoreMutation>;
export declare type StaffUpdateStoreMutationOptions = Apollo.BaseMutationOptions<StaffUpdateStoreMutation, StaffUpdateStoreMutationVariables>;
export declare const LoginDocument: Apollo.DocumentNode;
export declare type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;
/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export declare function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>): Apollo.MutationTuple<LoginMutation, Exact<{
    input: LoginInput;
}>, Apollo.DefaultContext, Apollo.ApolloCache<any>>;
export declare type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export declare type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export declare type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export declare const MeDocument: Apollo.DocumentNode;
/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export declare function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>): Apollo.QueryResult<MeQuery, Exact<{
    [key: string]: never;
}>>;
export declare function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>): Apollo.LazyQueryResultTuple<MeQuery, Exact<{
    [key: string]: never;
}>>;
export declare type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export declare type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export declare type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export declare const RegisterUserDocument: Apollo.DocumentNode;
export declare type RegisterUserMutationFn = Apollo.MutationFunction<RegisterUserMutation, RegisterUserMutationVariables>;
/**
 * __useRegisterUserMutation__
 *
 * To run a mutation, you first call `useRegisterUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerUserMutation, { data, loading, error }] = useRegisterUserMutation({
 *   variables: {
 *      registerInput: // value for 'registerInput'
 *   },
 * });
 */
export declare function useRegisterUserMutation(baseOptions?: Apollo.MutationHookOptions<RegisterUserMutation, RegisterUserMutationVariables>): Apollo.MutationTuple<RegisterUserMutation, Exact<{
    registerInput: CreateUserInput;
}>, Apollo.DefaultContext, Apollo.ApolloCache<any>>;
export declare type RegisterUserMutationHookResult = ReturnType<typeof useRegisterUserMutation>;
export declare type RegisterUserMutationResult = Apollo.MutationResult<RegisterUserMutation>;
export declare type RegisterUserMutationOptions = Apollo.BaseMutationOptions<RegisterUserMutation, RegisterUserMutationVariables>;
export declare const UpdateMeDocument: Apollo.DocumentNode;
export declare type UpdateMeMutationFn = Apollo.MutationFunction<UpdateMeMutation, UpdateMeMutationVariables>;
/**
 * __useUpdateMeMutation__
 *
 * To run a mutation, you first call `useUpdateMeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateMeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateMeMutation, { data, loading, error }] = useUpdateMeMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export declare function useUpdateMeMutation(baseOptions?: Apollo.MutationHookOptions<UpdateMeMutation, UpdateMeMutationVariables>): Apollo.MutationTuple<UpdateMeMutation, Exact<{
    input: UpdateUserInput;
}>, Apollo.DefaultContext, Apollo.ApolloCache<any>>;
export declare type UpdateMeMutationHookResult = ReturnType<typeof useUpdateMeMutation>;
export declare type UpdateMeMutationResult = Apollo.MutationResult<UpdateMeMutation>;
export declare type UpdateMeMutationOptions = Apollo.BaseMutationOptions<UpdateMeMutation, UpdateMeMutationVariables>;
export interface PossibleTypesResultData {
    possibleTypes: {
        [key: string]: string[];
    };
}
declare const result: PossibleTypesResultData;
export default result;
