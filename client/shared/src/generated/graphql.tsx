import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
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

export type Auction = {
  __typename?: 'Auction';
  id: Scalars['HashIds'];
  items: Array<AuctionItems>;
  name: Scalars['String'];
  startDate: Scalars['DateTime'];
  visible: Scalars['Boolean'];
};

export type AuctionItems = {
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

export type AuctionItemsCreateInput = {
  order: Scalars['Int'];
  productId?: InputMaybe<Scalars['HashIds']>;
};

export type AuctionItemsUpdateInput = {
  buyer?: InputMaybe<Scalars['String']>;
  order: Scalars['Int'];
  productId?: InputMaybe<Scalars['HashIds']>;
  sellPrice?: InputMaybe<Scalars['Float']>;
};

export type AuctionListDto = {
  __typename?: 'AuctionListDTO';
  id: Scalars['HashIds'];
  itemCount: Scalars['Float'];
  name: Scalars['String'];
  startDate: Scalars['DateTime'];
  visible: Scalars['Boolean'];
};

export type AuctionRetreiveDto = {
  __typename?: 'AuctionRetreiveDTO';
  id: Scalars['HashIds'];
  items: Array<SimpleAuctionItem>;
  name: Scalars['String'];
  startDate: Scalars['DateTime'];
};

export type CreateAuctionInput = {
  items?: InputMaybe<Array<AuctionItemsCreateInput>>;
  name: Scalars['String'];
  startDate: Scalars['DateTime'];
};

export type CreateProductInput = {
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


export type Mutation_CreateAuctionArgs = {
  input: CreateAuctionInput;
};


export type Mutation_CreateProductArgs = {
  input: CreateProductInput;
  store: Scalars['HashIds'];
};


export type Mutation_CreateStoreArgs = {
  input: CreateStoreInput;
  owner: Scalars['String'];
};


export type Mutation_RemoveProductArgs = {
  id: Scalars['HashIds'];
};


export type Mutation_RemoveStoreArgs = {
  id: Scalars['HashIds'];
};


export type Mutation_UpdateAuctionArgs = {
  input: UpdateAuctionInput;
};


export type Mutation_UpdateAuctionItemArgs = {
  input: UpdateAuctionItemInput;
};


export type Mutation_UpdateProductArgs = {
  input: UpdateProductInput;
  store?: InputMaybe<Scalars['HashIds']>;
};


export type Mutation_UpdateStoreArgs = {
  input: UpdateStoreInput;
  store: Scalars['HashIds'];
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


export type MutationUpdateMeArgs = {
  input: UpdateUserInput;
};


export type MutationUpdateProductArgs = {
  input: UpdateProductInput;
};


export type MutationUpdateStoreArgs = {
  input: UpdateStoreInput;
};

export type PagePaginationInput = {
  page?: InputMaybe<Scalars['Float']>;
  size?: InputMaybe<Scalars['Float']>;
};

export type PaginatedAuctionItemList = {
  __typename?: 'PaginatedAuctionItemList';
  count: Scalars['Float'];
  pages: Scalars['Float'];
  results: Array<AuctionItems>;
};

export type PaginatedAuctionList = {
  __typename?: 'PaginatedAuctionList';
  count: Scalars['Float'];
  pages: Scalars['Float'];
  results: Array<AuctionListDto>;
};

export type PaginatedProductsResponse = {
  __typename?: 'PaginatedProductsResponse';
  count: Scalars['Float'];
  pages: Scalars['Float'];
  results: Array<Product>;
};

export type PaginatedStoresResponse = {
  __typename?: 'PaginatedStoresResponse';
  count: Scalars['Float'];
  pages: Scalars['Float'];
  results: Array<Store>;
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

export type ProductFilters = {
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Float']>;
  store?: InputMaybe<Scalars['String']>;
  storeId?: InputMaybe<Scalars['HashIds']>;
  weight?: InputMaybe<Scalars['Float']>;
  year?: InputMaybe<Scalars['Float']>;
};

export type Query = {
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


export type Query_GetAllProductsArgs = {
  filters?: InputMaybe<ProductFilters>;
  options?: InputMaybe<PagePaginationInput>;
};


export type Query_GetAllStoresArgs = {
  options?: InputMaybe<PagePaginationInput>;
};


export type Query_GetAuctionArgs = {
  id: Scalars['HashIds'];
};


export type Query_GetAuctionItemsArgs = {
  id: Scalars['HashIds'];
  options?: InputMaybe<PagePaginationInput>;
};


export type QueryGetAllAuctionsArgs = {
  options?: InputMaybe<PagePaginationInput>;
};


export type QueryGetAuctionArgs = {
  id: Scalars['HashIds'];
};


export type QueryGetAuctionItemsArgs = {
  id: Scalars['HashIds'];
  options?: InputMaybe<PagePaginationInput>;
};


export type QueryGetMyProductsArgs = {
  options?: InputMaybe<PagePaginationInput>;
};


export type QueryGetProductDetailsArgs = {
  product: Scalars['HashIds'];
};


export type QueryGetProductsByStoreArgs = {
  options?: InputMaybe<PagePaginationInput>;
  store: Scalars['HashIds'];
};


export type QueryGetStoreByIdArgs = {
  id: Scalars['HashIds'];
};

export type SimpleAuctionItem = {
  __typename?: 'SimpleAuctionItem';
  description?: Maybe<Scalars['String']>;
  id: Scalars['HashIds'];
  images: Array<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  weight: Scalars['Float'];
  weightUnit: Scalars['String'];
  year?: Maybe<Scalars['Int']>;
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
  store?: Maybe<Store>;
};

export type Store = {
  __typename?: 'Store';
  createdAt: Scalars['DateTime'];
  id: Scalars['HashIds'];
  name: Scalars['String'];
  owner?: Maybe<User>;
  ownerId: Scalars['String'];
  products: Array<Product>;
  updatedAt: Scalars['DateTime'];
};

export type UpdateAuctionInput = {
  id: Scalars['HashIds'];
  items?: InputMaybe<Array<AuctionItemsUpdateInput>>;
  name?: InputMaybe<Scalars['String']>;
  startDate?: InputMaybe<Scalars['DateTime']>;
  visible?: InputMaybe<Scalars['Boolean']>;
};

export type UpdateAuctionItemInput = {
  buyer?: InputMaybe<Scalars['String']>;
  id: Scalars['HashIds'];
  sellPrice?: InputMaybe<Scalars['Float']>;
};

export type UpdateProductInput = {
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

export type AllAuctionsQueryVariables = Exact<{
  options?: InputMaybe<PagePaginationInput>;
}>;


export type AllAuctionsQuery = { __typename?: 'Query', getAllAuctions: { __typename?: 'PaginatedAuctionList', count: number, pages: number, results: Array<{ __typename?: 'AuctionListDTO', itemCount: number, name: string, startDate: any, visible: boolean, id: any }> } };

export type AuctionByIdQueryVariables = Exact<{
  id: Scalars['HashIds'];
}>;


export type AuctionByIdQuery = { __typename?: 'Query', getAuction: { __typename?: 'AuctionRetreiveDTO', id: any, name: string, startDate: any, items: Array<{ __typename?: 'SimpleAuctionItem', id: any, name?: string | null, description?: string | null, weight: number, weightUnit: string, year?: number | null, images: Array<string> }> } };

export type AuctionProductsQueryVariables = Exact<{
  auctionId: Scalars['HashIds'];
  options?: InputMaybe<PagePaginationInput>;
}>;


export type AuctionProductsQuery = { __typename?: 'Query', getAuctionItems: { __typename?: 'PaginatedProductsResponse', count: number, pages: number, results: Array<{ __typename?: 'Product', id: any, name?: string | null, description?: string | null, images: Array<string>, weight: number, weightUnit: string, year?: number | null }> } };

export type UpcomingAuctionQueryVariables = Exact<{ [key: string]: never; }>;


export type UpcomingAuctionQuery = { __typename?: 'Query', getUpcomingAuction: { __typename?: 'AuctionRetreiveDTO', id: any, name: string, startDate: any, items: Array<{ __typename?: 'SimpleAuctionItem', description?: string | null, id: any, name?: string | null, weight: number, weightUnit: string, year?: number | null, images: Array<string> }> } };

export type CreateAuctionMutationVariables = Exact<{
  input: CreateAuctionInput;
}>;


export type CreateAuctionMutation = { __typename?: 'Mutation', _createAuction: any };

export type StaffAuctionByIdQueryVariables = Exact<{
  id: Scalars['HashIds'];
}>;


export type StaffAuctionByIdQuery = { __typename?: 'Query', _getAuction: { __typename?: 'Auction', id: any, name: string, startDate: any, visible: boolean, items: Array<{ __typename?: 'AuctionItems', id: any, buyer?: string | null, order: number, sellPrice?: number | null, product?: { __typename?: 'Product', nameEn: string, id: any, images: Array<string>, weight: number, weightUnit: string, price: number, year?: number | null, descriptionEn: string, store?: { __typename?: 'Store', id: any, name: string } | null } | null }> } };

export type StaffAuctionItemsQueryVariables = Exact<{
  auctionId: Scalars['HashIds'];
  options?: InputMaybe<PagePaginationInput>;
}>;


export type StaffAuctionItemsQuery = { __typename?: 'Query', _getAuctionItems: { __typename?: 'PaginatedAuctionItemList', pages: number, count: number, results: Array<{ __typename?: 'AuctionItems', buyer?: string | null, id: any, sellPrice?: number | null, order: number, productId?: any | null, product?: { __typename?: 'Product', id: any, name?: string | null, description?: string | null, price: number, year?: number | null, weight: number, weightUnit: string, images: Array<string>, store?: { __typename?: 'Store', name: string, id: any } | null } | null }> } };

export type UpdateAuctionMutationVariables = Exact<{
  input: UpdateAuctionInput;
}>;


export type UpdateAuctionMutation = { __typename?: 'Mutation', _updateAuction: boolean };

export type UpdateAuctionItemMutationVariables = Exact<{
  input: UpdateAuctionItemInput;
}>;


export type UpdateAuctionItemMutation = { __typename?: 'Mutation', _updateAuctionItem: boolean };

export type CreateProductMutationVariables = Exact<{
  input: CreateProductInput;
}>;


export type CreateProductMutation = { __typename?: 'Mutation', createProduct: any };

export type MyProductsQueryVariables = Exact<{
  options?: InputMaybe<PagePaginationInput>;
}>;


export type MyProductsQuery = { __typename?: 'Query', getMyProducts: { __typename?: 'PaginatedProductsResponse', count: number, pages: number, results: Array<{ __typename?: 'Product', id: any, nameEn: string, descriptionEn: string, images: Array<string>, price: number, weight: number, weightUnit: string, year?: number | null }> } };

export type ProductsByStoreQueryVariables = Exact<{
  store: Scalars['HashIds'];
  options?: InputMaybe<PagePaginationInput>;
}>;


export type ProductsByStoreQuery = { __typename?: 'Query', getProductsByStore: { __typename?: 'PaginatedProductsResponse', count: number, pages: number, results: Array<{ __typename?: 'Product', id: any, name?: string | null, description?: string | null, images: Array<string>, weightUnit: string, weight: number, year?: number | null }> } };

export type RemoveProductMutationVariables = Exact<{
  removeProductId: Scalars['HashIds'];
}>;


export type RemoveProductMutation = { __typename?: 'Mutation', removeProduct: boolean };

export type StaffCreateProductMutationVariables = Exact<{
  input: CreateProductInput;
  store: Scalars['HashIds'];
}>;


export type StaffCreateProductMutation = { __typename?: 'Mutation', _createProduct: any };

export type AllProductsQueryVariables = Exact<{
  options?: InputMaybe<PagePaginationInput>;
  filters?: InputMaybe<ProductFilters>;
}>;


export type AllProductsQuery = { __typename?: 'Query', _getAllProducts: { __typename?: 'PaginatedProductsResponse', count: number, pages: number, results: Array<{ __typename?: 'Product', name?: string | null, description?: string | null, images: Array<string>, id: any, price: number, year?: number | null, weightUnit: string, weight: number, store?: { __typename?: 'Store', id: any, name: string } | null }> } };

export type RawAllProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type RawAllProductsQuery = { __typename?: 'Query', _getRawProducts: Array<{ __typename?: 'Product', id: any, name?: string | null, price: number, images: Array<string>, store?: { __typename?: 'Store', name: string } | null }> };

export type StaffRemoveProductMutationVariables = Exact<{
  productId: Scalars['HashIds'];
}>;


export type StaffRemoveProductMutation = { __typename?: 'Mutation', _removeProduct: boolean };

export type StaffUpdateProductMutationVariables = Exact<{
  input: UpdateProductInput;
  store?: InputMaybe<Scalars['HashIds']>;
}>;


export type StaffUpdateProductMutation = { __typename?: 'Mutation', _updateProduct: boolean };

export type UpdateProductMutationVariables = Exact<{
  input: UpdateProductInput;
}>;


export type UpdateProductMutation = { __typename?: 'Mutation', updateProduct: boolean };

export type StaffCreateStoreMutationVariables = Exact<{
  owner: Scalars['String'];
  input: CreateStoreInput;
}>;


export type StaffCreateStoreMutation = { __typename?: 'Mutation', _createStore: any };

export type AllStoresQueryVariables = Exact<{
  options?: InputMaybe<PagePaginationInput>;
}>;


export type AllStoresQuery = { __typename?: 'Query', _getAllStores: { __typename?: 'PaginatedStoresResponse', count: number, pages: number, results: Array<{ __typename?: 'Store', id: any, name: string, owner?: { __typename?: 'User', firstName: string, lastName: string, id: string, email: string } | null }> } };

export type StaffRemoveStoreMutationVariables = Exact<{
  removeStoreId: Scalars['HashIds'];
}>;


export type StaffRemoveStoreMutation = { __typename?: 'Mutation', _removeStore: boolean };

export type StaffUpdateStoreMutationVariables = Exact<{
  store: Scalars['HashIds'];
  input: UpdateStoreInput;
}>;


export type StaffUpdateStoreMutation = { __typename?: 'Mutation', _updateStore: boolean };

export type LoginMutationVariables = Exact<{
  input: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginResponse', access: string, refresh: string } };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me: { __typename?: 'SimpleUser', id: string, active: boolean, email: string, firstName: string, lastName: string, phoneNumber: string, partner: boolean, staff: boolean, store?: { __typename?: 'Store', id: any, name: string } | null } };

export type RegisterUserMutationVariables = Exact<{
  registerInput: CreateUserInput;
}>;


export type RegisterUserMutation = { __typename?: 'Mutation', register: string };

export type UpdateMeMutationVariables = Exact<{
  input: UpdateUserInput;
}>;


export type UpdateMeMutation = { __typename?: 'Mutation', updateMe: boolean };


export const AllAuctionsDocument = gql`
    query AllAuctions($options: PagePaginationInput) {
  getAllAuctions(options: $options) {
    count
    pages
    results {
      itemCount
      name
      startDate
      visible
      id
    }
  }
}
    `;

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
export function useAllAuctionsQuery(baseOptions?: Apollo.QueryHookOptions<AllAuctionsQuery, AllAuctionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllAuctionsQuery, AllAuctionsQueryVariables>(AllAuctionsDocument, options);
      }
export function useAllAuctionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllAuctionsQuery, AllAuctionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllAuctionsQuery, AllAuctionsQueryVariables>(AllAuctionsDocument, options);
        }
export type AllAuctionsQueryHookResult = ReturnType<typeof useAllAuctionsQuery>;
export type AllAuctionsLazyQueryHookResult = ReturnType<typeof useAllAuctionsLazyQuery>;
export type AllAuctionsQueryResult = Apollo.QueryResult<AllAuctionsQuery, AllAuctionsQueryVariables>;
export const AuctionByIdDocument = gql`
    query AuctionById($id: HashIds!) {
  getAuction(id: $id) {
    id
    name
    startDate
    items {
      id
      name
      description
      weight
      weightUnit
      year
      images
    }
  }
}
    `;

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
export function useAuctionByIdQuery(baseOptions: Apollo.QueryHookOptions<AuctionByIdQuery, AuctionByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AuctionByIdQuery, AuctionByIdQueryVariables>(AuctionByIdDocument, options);
      }
export function useAuctionByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AuctionByIdQuery, AuctionByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AuctionByIdQuery, AuctionByIdQueryVariables>(AuctionByIdDocument, options);
        }
export type AuctionByIdQueryHookResult = ReturnType<typeof useAuctionByIdQuery>;
export type AuctionByIdLazyQueryHookResult = ReturnType<typeof useAuctionByIdLazyQuery>;
export type AuctionByIdQueryResult = Apollo.QueryResult<AuctionByIdQuery, AuctionByIdQueryVariables>;
export const AuctionProductsDocument = gql`
    query AuctionProducts($auctionId: HashIds!, $options: PagePaginationInput) {
  getAuctionItems(id: $auctionId, options: $options) {
    count
    pages
    results {
      id
      name
      description
      images
      weight
      weightUnit
      year
      images
    }
  }
}
    `;

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
export function useAuctionProductsQuery(baseOptions: Apollo.QueryHookOptions<AuctionProductsQuery, AuctionProductsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AuctionProductsQuery, AuctionProductsQueryVariables>(AuctionProductsDocument, options);
      }
export function useAuctionProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AuctionProductsQuery, AuctionProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AuctionProductsQuery, AuctionProductsQueryVariables>(AuctionProductsDocument, options);
        }
export type AuctionProductsQueryHookResult = ReturnType<typeof useAuctionProductsQuery>;
export type AuctionProductsLazyQueryHookResult = ReturnType<typeof useAuctionProductsLazyQuery>;
export type AuctionProductsQueryResult = Apollo.QueryResult<AuctionProductsQuery, AuctionProductsQueryVariables>;
export const UpcomingAuctionDocument = gql`
    query UpcomingAuction {
  getUpcomingAuction {
    id
    name
    startDate
    items {
      description
      id
      name
      weight
      weightUnit
      year
      images
    }
  }
}
    `;

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
export function useUpcomingAuctionQuery(baseOptions?: Apollo.QueryHookOptions<UpcomingAuctionQuery, UpcomingAuctionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UpcomingAuctionQuery, UpcomingAuctionQueryVariables>(UpcomingAuctionDocument, options);
      }
export function useUpcomingAuctionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UpcomingAuctionQuery, UpcomingAuctionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UpcomingAuctionQuery, UpcomingAuctionQueryVariables>(UpcomingAuctionDocument, options);
        }
export type UpcomingAuctionQueryHookResult = ReturnType<typeof useUpcomingAuctionQuery>;
export type UpcomingAuctionLazyQueryHookResult = ReturnType<typeof useUpcomingAuctionLazyQuery>;
export type UpcomingAuctionQueryResult = Apollo.QueryResult<UpcomingAuctionQuery, UpcomingAuctionQueryVariables>;
export const CreateAuctionDocument = gql`
    mutation CreateAuction($input: CreateAuctionInput!) {
  _createAuction(input: $input)
}
    `;
export type CreateAuctionMutationFn = Apollo.MutationFunction<CreateAuctionMutation, CreateAuctionMutationVariables>;

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
export function useCreateAuctionMutation(baseOptions?: Apollo.MutationHookOptions<CreateAuctionMutation, CreateAuctionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateAuctionMutation, CreateAuctionMutationVariables>(CreateAuctionDocument, options);
      }
export type CreateAuctionMutationHookResult = ReturnType<typeof useCreateAuctionMutation>;
export type CreateAuctionMutationResult = Apollo.MutationResult<CreateAuctionMutation>;
export type CreateAuctionMutationOptions = Apollo.BaseMutationOptions<CreateAuctionMutation, CreateAuctionMutationVariables>;
export const StaffAuctionByIdDocument = gql`
    query StaffAuctionById($id: HashIds!) {
  _getAuction(id: $id) {
    id
    name
    startDate
    visible
    items {
      id
      buyer
      order
      sellPrice
      product {
        nameEn
        id
        images
        weight
        weightUnit
        price
        year
        descriptionEn
        store {
          id
          name
        }
      }
    }
  }
}
    `;

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
export function useStaffAuctionByIdQuery(baseOptions: Apollo.QueryHookOptions<StaffAuctionByIdQuery, StaffAuctionByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<StaffAuctionByIdQuery, StaffAuctionByIdQueryVariables>(StaffAuctionByIdDocument, options);
      }
export function useStaffAuctionByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<StaffAuctionByIdQuery, StaffAuctionByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<StaffAuctionByIdQuery, StaffAuctionByIdQueryVariables>(StaffAuctionByIdDocument, options);
        }
export type StaffAuctionByIdQueryHookResult = ReturnType<typeof useStaffAuctionByIdQuery>;
export type StaffAuctionByIdLazyQueryHookResult = ReturnType<typeof useStaffAuctionByIdLazyQuery>;
export type StaffAuctionByIdQueryResult = Apollo.QueryResult<StaffAuctionByIdQuery, StaffAuctionByIdQueryVariables>;
export const StaffAuctionItemsDocument = gql`
    query StaffAuctionItems($auctionId: HashIds!, $options: PagePaginationInput) {
  _getAuctionItems(id: $auctionId, options: $options) {
    pages
    count
    results {
      buyer
      id
      sellPrice
      order
      productId
      product {
        id
        name
        description
        price
        year
        weight
        weightUnit
        images
        store {
          name
          id
        }
      }
    }
  }
}
    `;

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
export function useStaffAuctionItemsQuery(baseOptions: Apollo.QueryHookOptions<StaffAuctionItemsQuery, StaffAuctionItemsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<StaffAuctionItemsQuery, StaffAuctionItemsQueryVariables>(StaffAuctionItemsDocument, options);
      }
export function useStaffAuctionItemsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<StaffAuctionItemsQuery, StaffAuctionItemsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<StaffAuctionItemsQuery, StaffAuctionItemsQueryVariables>(StaffAuctionItemsDocument, options);
        }
export type StaffAuctionItemsQueryHookResult = ReturnType<typeof useStaffAuctionItemsQuery>;
export type StaffAuctionItemsLazyQueryHookResult = ReturnType<typeof useStaffAuctionItemsLazyQuery>;
export type StaffAuctionItemsQueryResult = Apollo.QueryResult<StaffAuctionItemsQuery, StaffAuctionItemsQueryVariables>;
export const UpdateAuctionDocument = gql`
    mutation UpdateAuction($input: UpdateAuctionInput!) {
  _updateAuction(input: $input)
}
    `;
export type UpdateAuctionMutationFn = Apollo.MutationFunction<UpdateAuctionMutation, UpdateAuctionMutationVariables>;

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
export function useUpdateAuctionMutation(baseOptions?: Apollo.MutationHookOptions<UpdateAuctionMutation, UpdateAuctionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateAuctionMutation, UpdateAuctionMutationVariables>(UpdateAuctionDocument, options);
      }
export type UpdateAuctionMutationHookResult = ReturnType<typeof useUpdateAuctionMutation>;
export type UpdateAuctionMutationResult = Apollo.MutationResult<UpdateAuctionMutation>;
export type UpdateAuctionMutationOptions = Apollo.BaseMutationOptions<UpdateAuctionMutation, UpdateAuctionMutationVariables>;
export const UpdateAuctionItemDocument = gql`
    mutation UpdateAuctionItem($input: UpdateAuctionItemInput!) {
  _updateAuctionItem(input: $input)
}
    `;
export type UpdateAuctionItemMutationFn = Apollo.MutationFunction<UpdateAuctionItemMutation, UpdateAuctionItemMutationVariables>;

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
export function useUpdateAuctionItemMutation(baseOptions?: Apollo.MutationHookOptions<UpdateAuctionItemMutation, UpdateAuctionItemMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateAuctionItemMutation, UpdateAuctionItemMutationVariables>(UpdateAuctionItemDocument, options);
      }
export type UpdateAuctionItemMutationHookResult = ReturnType<typeof useUpdateAuctionItemMutation>;
export type UpdateAuctionItemMutationResult = Apollo.MutationResult<UpdateAuctionItemMutation>;
export type UpdateAuctionItemMutationOptions = Apollo.BaseMutationOptions<UpdateAuctionItemMutation, UpdateAuctionItemMutationVariables>;
export const CreateProductDocument = gql`
    mutation CreateProduct($input: CreateProductInput!) {
  createProduct(input: $input)
}
    `;
export type CreateProductMutationFn = Apollo.MutationFunction<CreateProductMutation, CreateProductMutationVariables>;

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
export function useCreateProductMutation(baseOptions?: Apollo.MutationHookOptions<CreateProductMutation, CreateProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateProductMutation, CreateProductMutationVariables>(CreateProductDocument, options);
      }
export type CreateProductMutationHookResult = ReturnType<typeof useCreateProductMutation>;
export type CreateProductMutationResult = Apollo.MutationResult<CreateProductMutation>;
export type CreateProductMutationOptions = Apollo.BaseMutationOptions<CreateProductMutation, CreateProductMutationVariables>;
export const MyProductsDocument = gql`
    query MyProducts($options: PagePaginationInput) {
  getMyProducts(options: $options) {
    count
    pages
    results {
      id
      nameEn
      descriptionEn
      images
      price
      weight
      weightUnit
      year
    }
  }
}
    `;

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
export function useMyProductsQuery(baseOptions?: Apollo.QueryHookOptions<MyProductsQuery, MyProductsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MyProductsQuery, MyProductsQueryVariables>(MyProductsDocument, options);
      }
export function useMyProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MyProductsQuery, MyProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MyProductsQuery, MyProductsQueryVariables>(MyProductsDocument, options);
        }
export type MyProductsQueryHookResult = ReturnType<typeof useMyProductsQuery>;
export type MyProductsLazyQueryHookResult = ReturnType<typeof useMyProductsLazyQuery>;
export type MyProductsQueryResult = Apollo.QueryResult<MyProductsQuery, MyProductsQueryVariables>;
export const ProductsByStoreDocument = gql`
    query ProductsByStore($store: HashIds!, $options: PagePaginationInput) {
  getProductsByStore(store: $store, options: $options) {
    results {
      id
      name
      description
      images
      weightUnit
      weight
      year
    }
    count
    pages
  }
}
    `;

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
export function useProductsByStoreQuery(baseOptions: Apollo.QueryHookOptions<ProductsByStoreQuery, ProductsByStoreQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductsByStoreQuery, ProductsByStoreQueryVariables>(ProductsByStoreDocument, options);
      }
export function useProductsByStoreLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductsByStoreQuery, ProductsByStoreQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductsByStoreQuery, ProductsByStoreQueryVariables>(ProductsByStoreDocument, options);
        }
export type ProductsByStoreQueryHookResult = ReturnType<typeof useProductsByStoreQuery>;
export type ProductsByStoreLazyQueryHookResult = ReturnType<typeof useProductsByStoreLazyQuery>;
export type ProductsByStoreQueryResult = Apollo.QueryResult<ProductsByStoreQuery, ProductsByStoreQueryVariables>;
export const RemoveProductDocument = gql`
    mutation RemoveProduct($removeProductId: HashIds!) {
  removeProduct(id: $removeProductId)
}
    `;
export type RemoveProductMutationFn = Apollo.MutationFunction<RemoveProductMutation, RemoveProductMutationVariables>;

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
export function useRemoveProductMutation(baseOptions?: Apollo.MutationHookOptions<RemoveProductMutation, RemoveProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveProductMutation, RemoveProductMutationVariables>(RemoveProductDocument, options);
      }
export type RemoveProductMutationHookResult = ReturnType<typeof useRemoveProductMutation>;
export type RemoveProductMutationResult = Apollo.MutationResult<RemoveProductMutation>;
export type RemoveProductMutationOptions = Apollo.BaseMutationOptions<RemoveProductMutation, RemoveProductMutationVariables>;
export const StaffCreateProductDocument = gql`
    mutation StaffCreateProduct($input: CreateProductInput!, $store: HashIds!) {
  _createProduct(input: $input, store: $store)
}
    `;
export type StaffCreateProductMutationFn = Apollo.MutationFunction<StaffCreateProductMutation, StaffCreateProductMutationVariables>;

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
export function useStaffCreateProductMutation(baseOptions?: Apollo.MutationHookOptions<StaffCreateProductMutation, StaffCreateProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<StaffCreateProductMutation, StaffCreateProductMutationVariables>(StaffCreateProductDocument, options);
      }
export type StaffCreateProductMutationHookResult = ReturnType<typeof useStaffCreateProductMutation>;
export type StaffCreateProductMutationResult = Apollo.MutationResult<StaffCreateProductMutation>;
export type StaffCreateProductMutationOptions = Apollo.BaseMutationOptions<StaffCreateProductMutation, StaffCreateProductMutationVariables>;
export const AllProductsDocument = gql`
    query AllProducts($options: PagePaginationInput, $filters: ProductFilters) {
  _getAllProducts(options: $options, filters: $filters) {
    count
    pages
    results {
      name
      description
      images
      id
      store {
        id
        name
      }
      price
      year
      weightUnit
      weight
    }
  }
}
    `;

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
export function useAllProductsQuery(baseOptions?: Apollo.QueryHookOptions<AllProductsQuery, AllProductsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllProductsQuery, AllProductsQueryVariables>(AllProductsDocument, options);
      }
export function useAllProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllProductsQuery, AllProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllProductsQuery, AllProductsQueryVariables>(AllProductsDocument, options);
        }
export type AllProductsQueryHookResult = ReturnType<typeof useAllProductsQuery>;
export type AllProductsLazyQueryHookResult = ReturnType<typeof useAllProductsLazyQuery>;
export type AllProductsQueryResult = Apollo.QueryResult<AllProductsQuery, AllProductsQueryVariables>;
export const RawAllProductsDocument = gql`
    query RawAllProducts {
  _getRawProducts {
    id
    name
    price
    store {
      name
    }
    images
  }
}
    `;

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
export function useRawAllProductsQuery(baseOptions?: Apollo.QueryHookOptions<RawAllProductsQuery, RawAllProductsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RawAllProductsQuery, RawAllProductsQueryVariables>(RawAllProductsDocument, options);
      }
export function useRawAllProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RawAllProductsQuery, RawAllProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RawAllProductsQuery, RawAllProductsQueryVariables>(RawAllProductsDocument, options);
        }
export type RawAllProductsQueryHookResult = ReturnType<typeof useRawAllProductsQuery>;
export type RawAllProductsLazyQueryHookResult = ReturnType<typeof useRawAllProductsLazyQuery>;
export type RawAllProductsQueryResult = Apollo.QueryResult<RawAllProductsQuery, RawAllProductsQueryVariables>;
export const StaffRemoveProductDocument = gql`
    mutation StaffRemoveProduct($productId: HashIds!) {
  _removeProduct(id: $productId)
}
    `;
export type StaffRemoveProductMutationFn = Apollo.MutationFunction<StaffRemoveProductMutation, StaffRemoveProductMutationVariables>;

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
export function useStaffRemoveProductMutation(baseOptions?: Apollo.MutationHookOptions<StaffRemoveProductMutation, StaffRemoveProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<StaffRemoveProductMutation, StaffRemoveProductMutationVariables>(StaffRemoveProductDocument, options);
      }
export type StaffRemoveProductMutationHookResult = ReturnType<typeof useStaffRemoveProductMutation>;
export type StaffRemoveProductMutationResult = Apollo.MutationResult<StaffRemoveProductMutation>;
export type StaffRemoveProductMutationOptions = Apollo.BaseMutationOptions<StaffRemoveProductMutation, StaffRemoveProductMutationVariables>;
export const StaffUpdateProductDocument = gql`
    mutation StaffUpdateProduct($input: UpdateProductInput!, $store: HashIds) {
  _updateProduct(input: $input, store: $store)
}
    `;
export type StaffUpdateProductMutationFn = Apollo.MutationFunction<StaffUpdateProductMutation, StaffUpdateProductMutationVariables>;

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
export function useStaffUpdateProductMutation(baseOptions?: Apollo.MutationHookOptions<StaffUpdateProductMutation, StaffUpdateProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<StaffUpdateProductMutation, StaffUpdateProductMutationVariables>(StaffUpdateProductDocument, options);
      }
export type StaffUpdateProductMutationHookResult = ReturnType<typeof useStaffUpdateProductMutation>;
export type StaffUpdateProductMutationResult = Apollo.MutationResult<StaffUpdateProductMutation>;
export type StaffUpdateProductMutationOptions = Apollo.BaseMutationOptions<StaffUpdateProductMutation, StaffUpdateProductMutationVariables>;
export const UpdateProductDocument = gql`
    mutation UpdateProduct($input: UpdateProductInput!) {
  updateProduct(input: $input)
}
    `;
export type UpdateProductMutationFn = Apollo.MutationFunction<UpdateProductMutation, UpdateProductMutationVariables>;

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
export function useUpdateProductMutation(baseOptions?: Apollo.MutationHookOptions<UpdateProductMutation, UpdateProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateProductMutation, UpdateProductMutationVariables>(UpdateProductDocument, options);
      }
export type UpdateProductMutationHookResult = ReturnType<typeof useUpdateProductMutation>;
export type UpdateProductMutationResult = Apollo.MutationResult<UpdateProductMutation>;
export type UpdateProductMutationOptions = Apollo.BaseMutationOptions<UpdateProductMutation, UpdateProductMutationVariables>;
export const StaffCreateStoreDocument = gql`
    mutation StaffCreateStore($owner: String!, $input: CreateStoreInput!) {
  _createStore(owner: $owner, input: $input)
}
    `;
export type StaffCreateStoreMutationFn = Apollo.MutationFunction<StaffCreateStoreMutation, StaffCreateStoreMutationVariables>;

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
export function useStaffCreateStoreMutation(baseOptions?: Apollo.MutationHookOptions<StaffCreateStoreMutation, StaffCreateStoreMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<StaffCreateStoreMutation, StaffCreateStoreMutationVariables>(StaffCreateStoreDocument, options);
      }
export type StaffCreateStoreMutationHookResult = ReturnType<typeof useStaffCreateStoreMutation>;
export type StaffCreateStoreMutationResult = Apollo.MutationResult<StaffCreateStoreMutation>;
export type StaffCreateStoreMutationOptions = Apollo.BaseMutationOptions<StaffCreateStoreMutation, StaffCreateStoreMutationVariables>;
export const AllStoresDocument = gql`
    query AllStores($options: PagePaginationInput) {
  _getAllStores(options: $options) {
    count
    pages
    results {
      id
      name
      owner {
        firstName
        lastName
        id
        email
      }
    }
  }
}
    `;

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
export function useAllStoresQuery(baseOptions?: Apollo.QueryHookOptions<AllStoresQuery, AllStoresQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllStoresQuery, AllStoresQueryVariables>(AllStoresDocument, options);
      }
export function useAllStoresLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllStoresQuery, AllStoresQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllStoresQuery, AllStoresQueryVariables>(AllStoresDocument, options);
        }
export type AllStoresQueryHookResult = ReturnType<typeof useAllStoresQuery>;
export type AllStoresLazyQueryHookResult = ReturnType<typeof useAllStoresLazyQuery>;
export type AllStoresQueryResult = Apollo.QueryResult<AllStoresQuery, AllStoresQueryVariables>;
export const StaffRemoveStoreDocument = gql`
    mutation StaffRemoveStore($removeStoreId: HashIds!) {
  _removeStore(id: $removeStoreId)
}
    `;
export type StaffRemoveStoreMutationFn = Apollo.MutationFunction<StaffRemoveStoreMutation, StaffRemoveStoreMutationVariables>;

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
export function useStaffRemoveStoreMutation(baseOptions?: Apollo.MutationHookOptions<StaffRemoveStoreMutation, StaffRemoveStoreMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<StaffRemoveStoreMutation, StaffRemoveStoreMutationVariables>(StaffRemoveStoreDocument, options);
      }
export type StaffRemoveStoreMutationHookResult = ReturnType<typeof useStaffRemoveStoreMutation>;
export type StaffRemoveStoreMutationResult = Apollo.MutationResult<StaffRemoveStoreMutation>;
export type StaffRemoveStoreMutationOptions = Apollo.BaseMutationOptions<StaffRemoveStoreMutation, StaffRemoveStoreMutationVariables>;
export const StaffUpdateStoreDocument = gql`
    mutation StaffUpdateStore($store: HashIds!, $input: UpdateStoreInput!) {
  _updateStore(store: $store, input: $input)
}
    `;
export type StaffUpdateStoreMutationFn = Apollo.MutationFunction<StaffUpdateStoreMutation, StaffUpdateStoreMutationVariables>;

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
export function useStaffUpdateStoreMutation(baseOptions?: Apollo.MutationHookOptions<StaffUpdateStoreMutation, StaffUpdateStoreMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<StaffUpdateStoreMutation, StaffUpdateStoreMutationVariables>(StaffUpdateStoreDocument, options);
      }
export type StaffUpdateStoreMutationHookResult = ReturnType<typeof useStaffUpdateStoreMutation>;
export type StaffUpdateStoreMutationResult = Apollo.MutationResult<StaffUpdateStoreMutation>;
export type StaffUpdateStoreMutationOptions = Apollo.BaseMutationOptions<StaffUpdateStoreMutation, StaffUpdateStoreMutationVariables>;
export const LoginDocument = gql`
    mutation Login($input: LoginInput!) {
  login(input: $input) {
    access
    refresh
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

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
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
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
    store {
      id
      name
    }
  }
}
    `;

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
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const RegisterUserDocument = gql`
    mutation RegisterUser($registerInput: CreateUserInput!) {
  register(input: $registerInput)
}
    `;
export type RegisterUserMutationFn = Apollo.MutationFunction<RegisterUserMutation, RegisterUserMutationVariables>;

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
export function useRegisterUserMutation(baseOptions?: Apollo.MutationHookOptions<RegisterUserMutation, RegisterUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterUserMutation, RegisterUserMutationVariables>(RegisterUserDocument, options);
      }
export type RegisterUserMutationHookResult = ReturnType<typeof useRegisterUserMutation>;
export type RegisterUserMutationResult = Apollo.MutationResult<RegisterUserMutation>;
export type RegisterUserMutationOptions = Apollo.BaseMutationOptions<RegisterUserMutation, RegisterUserMutationVariables>;
export const UpdateMeDocument = gql`
    mutation UpdateMe($input: UpdateUserInput!) {
  updateMe(input: $input)
}
    `;
export type UpdateMeMutationFn = Apollo.MutationFunction<UpdateMeMutation, UpdateMeMutationVariables>;

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
export function useUpdateMeMutation(baseOptions?: Apollo.MutationHookOptions<UpdateMeMutation, UpdateMeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateMeMutation, UpdateMeMutationVariables>(UpdateMeDocument, options);
      }
export type UpdateMeMutationHookResult = ReturnType<typeof useUpdateMeMutation>;
export type UpdateMeMutationResult = Apollo.MutationResult<UpdateMeMutation>;
export type UpdateMeMutationOptions = Apollo.BaseMutationOptions<UpdateMeMutation, UpdateMeMutationVariables>;

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {}
};
      export default result;
    