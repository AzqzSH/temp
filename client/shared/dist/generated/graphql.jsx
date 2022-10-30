var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
var defaultOptions = {};
export var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus["Captured"] = "CAPTURED";
    PaymentStatus["Failed"] = "FAILED";
    PaymentStatus["Pending"] = "PENDING";
})(PaymentStatus || (PaymentStatus = {}));
export var AllAuctionsDocument = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    query AllAuctions($options: PagePaginationInput) {\n  getAllAuctions(options: $options) {\n    count\n    pages\n    results {\n      itemCount\n      name\n      startDate\n      visible\n      id\n    }\n  }\n}\n    "], ["\n    query AllAuctions($options: PagePaginationInput) {\n  getAllAuctions(options: $options) {\n    count\n    pages\n    results {\n      itemCount\n      name\n      startDate\n      visible\n      id\n    }\n  }\n}\n    "])));
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
export function useAllAuctionsQuery(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(AllAuctionsDocument, options);
}
export function useAllAuctionsLazyQuery(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(AllAuctionsDocument, options);
}
export var AuctionByIdDocument = gql(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    query AuctionById($id: HashIds!) {\n  getAuction(id: $id) {\n    id\n    name\n    startDate\n    items {\n      id\n      name\n      description\n      weight\n      weightUnit\n      year\n      images\n    }\n  }\n}\n    "], ["\n    query AuctionById($id: HashIds!) {\n  getAuction(id: $id) {\n    id\n    name\n    startDate\n    items {\n      id\n      name\n      description\n      weight\n      weightUnit\n      year\n      images\n    }\n  }\n}\n    "])));
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
export function useAuctionByIdQuery(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(AuctionByIdDocument, options);
}
export function useAuctionByIdLazyQuery(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(AuctionByIdDocument, options);
}
export var AuctionProductsDocument = gql(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    query AuctionProducts($auctionId: HashIds!, $options: PagePaginationInput) {\n  getAuctionItems(id: $auctionId, options: $options) {\n    count\n    pages\n    results {\n      id\n      name\n      description\n      images\n      weight\n      weightUnit\n      year\n      images\n    }\n  }\n}\n    "], ["\n    query AuctionProducts($auctionId: HashIds!, $options: PagePaginationInput) {\n  getAuctionItems(id: $auctionId, options: $options) {\n    count\n    pages\n    results {\n      id\n      name\n      description\n      images\n      weight\n      weightUnit\n      year\n      images\n    }\n  }\n}\n    "])));
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
export function useAuctionProductsQuery(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(AuctionProductsDocument, options);
}
export function useAuctionProductsLazyQuery(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(AuctionProductsDocument, options);
}
export var UpcomingAuctionDocument = gql(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    query UpcomingAuction {\n  getUpcomingAuction {\n    id\n    name\n    startDate\n    items {\n      description\n      id\n      name\n      weight\n      weightUnit\n      year\n      images\n    }\n  }\n}\n    "], ["\n    query UpcomingAuction {\n  getUpcomingAuction {\n    id\n    name\n    startDate\n    items {\n      description\n      id\n      name\n      weight\n      weightUnit\n      year\n      images\n    }\n  }\n}\n    "])));
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
export function useUpcomingAuctionQuery(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(UpcomingAuctionDocument, options);
}
export function useUpcomingAuctionLazyQuery(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(UpcomingAuctionDocument, options);
}
export var CreateAuctionDocument = gql(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    mutation CreateAuction($input: CreateAuctionInput!) {\n  _createAuction(input: $input)\n}\n    "], ["\n    mutation CreateAuction($input: CreateAuctionInput!) {\n  _createAuction(input: $input)\n}\n    "])));
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
export function useCreateAuctionMutation(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useMutation(CreateAuctionDocument, options);
}
export var StaffAuctionByIdDocument = gql(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    query StaffAuctionById($id: HashIds!) {\n  _getAuction(id: $id) {\n    id\n    name\n    startDate\n    visible\n    items {\n      id\n      buyer\n      order\n      sellPrice\n      product {\n        nameEn\n        id\n        images\n        weight\n        weightUnit\n        price\n        year\n        descriptionEn\n        store {\n          id\n          name\n        }\n      }\n    }\n  }\n}\n    "], ["\n    query StaffAuctionById($id: HashIds!) {\n  _getAuction(id: $id) {\n    id\n    name\n    startDate\n    visible\n    items {\n      id\n      buyer\n      order\n      sellPrice\n      product {\n        nameEn\n        id\n        images\n        weight\n        weightUnit\n        price\n        year\n        descriptionEn\n        store {\n          id\n          name\n        }\n      }\n    }\n  }\n}\n    "])));
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
export function useStaffAuctionByIdQuery(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(StaffAuctionByIdDocument, options);
}
export function useStaffAuctionByIdLazyQuery(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(StaffAuctionByIdDocument, options);
}
export var StaffAuctionItemsDocument = gql(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n    query StaffAuctionItems($auctionId: HashIds!, $options: PagePaginationInput) {\n  _getAuctionItems(id: $auctionId, options: $options) {\n    pages\n    count\n    results {\n      buyer\n      id\n      sellPrice\n      order\n      productId\n      product {\n        id\n        name\n        description\n        price\n        year\n        weight\n        weightUnit\n        images\n        store {\n          name\n          id\n        }\n      }\n    }\n  }\n}\n    "], ["\n    query StaffAuctionItems($auctionId: HashIds!, $options: PagePaginationInput) {\n  _getAuctionItems(id: $auctionId, options: $options) {\n    pages\n    count\n    results {\n      buyer\n      id\n      sellPrice\n      order\n      productId\n      product {\n        id\n        name\n        description\n        price\n        year\n        weight\n        weightUnit\n        images\n        store {\n          name\n          id\n        }\n      }\n    }\n  }\n}\n    "])));
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
export function useStaffAuctionItemsQuery(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(StaffAuctionItemsDocument, options);
}
export function useStaffAuctionItemsLazyQuery(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(StaffAuctionItemsDocument, options);
}
export var UpdateAuctionDocument = gql(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n    mutation UpdateAuction($input: UpdateAuctionInput!) {\n  _updateAuction(input: $input)\n}\n    "], ["\n    mutation UpdateAuction($input: UpdateAuctionInput!) {\n  _updateAuction(input: $input)\n}\n    "])));
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
export function useUpdateAuctionMutation(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useMutation(UpdateAuctionDocument, options);
}
export var UpdateAuctionItemDocument = gql(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n    mutation UpdateAuctionItem($input: UpdateAuctionItemInput!) {\n  _updateAuctionItem(input: $input)\n}\n    "], ["\n    mutation UpdateAuctionItem($input: UpdateAuctionItemInput!) {\n  _updateAuctionItem(input: $input)\n}\n    "])));
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
export function useUpdateAuctionItemMutation(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useMutation(UpdateAuctionItemDocument, options);
}
export var CreateProductDocument = gql(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n    mutation CreateProduct($input: CreateProductInput!) {\n  createProduct(input: $input)\n}\n    "], ["\n    mutation CreateProduct($input: CreateProductInput!) {\n  createProduct(input: $input)\n}\n    "])));
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
export function useCreateProductMutation(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useMutation(CreateProductDocument, options);
}
export var MyProductsDocument = gql(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n    query MyProducts($options: PagePaginationInput) {\n  getMyProducts(options: $options) {\n    count\n    pages\n    results {\n      id\n      nameEn\n      descriptionEn\n      images\n      price\n      weight\n      weightUnit\n      year\n    }\n  }\n}\n    "], ["\n    query MyProducts($options: PagePaginationInput) {\n  getMyProducts(options: $options) {\n    count\n    pages\n    results {\n      id\n      nameEn\n      descriptionEn\n      images\n      price\n      weight\n      weightUnit\n      year\n    }\n  }\n}\n    "])));
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
export function useMyProductsQuery(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(MyProductsDocument, options);
}
export function useMyProductsLazyQuery(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(MyProductsDocument, options);
}
export var ProductsByStoreDocument = gql(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n    query ProductsByStore($store: HashIds!, $options: PagePaginationInput) {\n  getProductsByStore(store: $store, options: $options) {\n    results {\n      id\n      name\n      description\n      images\n      weightUnit\n      weight\n      year\n    }\n    count\n    pages\n  }\n}\n    "], ["\n    query ProductsByStore($store: HashIds!, $options: PagePaginationInput) {\n  getProductsByStore(store: $store, options: $options) {\n    results {\n      id\n      name\n      description\n      images\n      weightUnit\n      weight\n      year\n    }\n    count\n    pages\n  }\n}\n    "])));
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
export function useProductsByStoreQuery(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(ProductsByStoreDocument, options);
}
export function useProductsByStoreLazyQuery(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(ProductsByStoreDocument, options);
}
export var RemoveProductDocument = gql(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n    mutation RemoveProduct($removeProductId: HashIds!) {\n  removeProduct(id: $removeProductId)\n}\n    "], ["\n    mutation RemoveProduct($removeProductId: HashIds!) {\n  removeProduct(id: $removeProductId)\n}\n    "])));
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
export function useRemoveProductMutation(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useMutation(RemoveProductDocument, options);
}
export var StaffCreateProductDocument = gql(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n    mutation StaffCreateProduct($input: CreateProductInput!, $store: HashIds!) {\n  _createProduct(input: $input, store: $store)\n}\n    "], ["\n    mutation StaffCreateProduct($input: CreateProductInput!, $store: HashIds!) {\n  _createProduct(input: $input, store: $store)\n}\n    "])));
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
export function useStaffCreateProductMutation(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useMutation(StaffCreateProductDocument, options);
}
export var AllProductsDocument = gql(templateObject_15 || (templateObject_15 = __makeTemplateObject(["\n    query AllProducts($options: PagePaginationInput, $filters: ProductFilters) {\n  _getAllProducts(options: $options, filters: $filters) {\n    count\n    pages\n    results {\n      name\n      description\n      images\n      id\n      store {\n        id\n        name\n      }\n      price\n      year\n      weightUnit\n      weight\n    }\n  }\n}\n    "], ["\n    query AllProducts($options: PagePaginationInput, $filters: ProductFilters) {\n  _getAllProducts(options: $options, filters: $filters) {\n    count\n    pages\n    results {\n      name\n      description\n      images\n      id\n      store {\n        id\n        name\n      }\n      price\n      year\n      weightUnit\n      weight\n    }\n  }\n}\n    "])));
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
export function useAllProductsQuery(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(AllProductsDocument, options);
}
export function useAllProductsLazyQuery(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(AllProductsDocument, options);
}
export var RawAllProductsDocument = gql(templateObject_16 || (templateObject_16 = __makeTemplateObject(["\n    query RawAllProducts {\n  _getRawProducts {\n    id\n    name\n    price\n    store {\n      name\n    }\n    images\n  }\n}\n    "], ["\n    query RawAllProducts {\n  _getRawProducts {\n    id\n    name\n    price\n    store {\n      name\n    }\n    images\n  }\n}\n    "])));
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
export function useRawAllProductsQuery(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(RawAllProductsDocument, options);
}
export function useRawAllProductsLazyQuery(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(RawAllProductsDocument, options);
}
export var StaffRemoveProductDocument = gql(templateObject_17 || (templateObject_17 = __makeTemplateObject(["\n    mutation StaffRemoveProduct($productId: HashIds!) {\n  _removeProduct(id: $productId)\n}\n    "], ["\n    mutation StaffRemoveProduct($productId: HashIds!) {\n  _removeProduct(id: $productId)\n}\n    "])));
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
export function useStaffRemoveProductMutation(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useMutation(StaffRemoveProductDocument, options);
}
export var StaffUpdateProductDocument = gql(templateObject_18 || (templateObject_18 = __makeTemplateObject(["\n    mutation StaffUpdateProduct($input: UpdateProductInput!, $store: HashIds) {\n  _updateProduct(input: $input, store: $store)\n}\n    "], ["\n    mutation StaffUpdateProduct($input: UpdateProductInput!, $store: HashIds) {\n  _updateProduct(input: $input, store: $store)\n}\n    "])));
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
export function useStaffUpdateProductMutation(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useMutation(StaffUpdateProductDocument, options);
}
export var UpdateProductDocument = gql(templateObject_19 || (templateObject_19 = __makeTemplateObject(["\n    mutation UpdateProduct($input: UpdateProductInput!) {\n  updateProduct(input: $input)\n}\n    "], ["\n    mutation UpdateProduct($input: UpdateProductInput!) {\n  updateProduct(input: $input)\n}\n    "])));
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
export function useUpdateProductMutation(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useMutation(UpdateProductDocument, options);
}
export var StaffCreateStoreDocument = gql(templateObject_20 || (templateObject_20 = __makeTemplateObject(["\n    mutation StaffCreateStore($owner: String!, $input: CreateStoreInput!) {\n  _createStore(owner: $owner, input: $input)\n}\n    "], ["\n    mutation StaffCreateStore($owner: String!, $input: CreateStoreInput!) {\n  _createStore(owner: $owner, input: $input)\n}\n    "])));
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
export function useStaffCreateStoreMutation(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useMutation(StaffCreateStoreDocument, options);
}
export var AllStoresDocument = gql(templateObject_21 || (templateObject_21 = __makeTemplateObject(["\n    query AllStores($options: PagePaginationInput) {\n  _getAllStores(options: $options) {\n    count\n    pages\n    results {\n      id\n      name\n      owner {\n        firstName\n        lastName\n        id\n        email\n      }\n    }\n  }\n}\n    "], ["\n    query AllStores($options: PagePaginationInput) {\n  _getAllStores(options: $options) {\n    count\n    pages\n    results {\n      id\n      name\n      owner {\n        firstName\n        lastName\n        id\n        email\n      }\n    }\n  }\n}\n    "])));
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
export function useAllStoresQuery(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(AllStoresDocument, options);
}
export function useAllStoresLazyQuery(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(AllStoresDocument, options);
}
export var StaffRemoveStoreDocument = gql(templateObject_22 || (templateObject_22 = __makeTemplateObject(["\n    mutation StaffRemoveStore($removeStoreId: HashIds!) {\n  _removeStore(id: $removeStoreId)\n}\n    "], ["\n    mutation StaffRemoveStore($removeStoreId: HashIds!) {\n  _removeStore(id: $removeStoreId)\n}\n    "])));
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
export function useStaffRemoveStoreMutation(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useMutation(StaffRemoveStoreDocument, options);
}
export var StaffUpdateStoreDocument = gql(templateObject_23 || (templateObject_23 = __makeTemplateObject(["\n    mutation StaffUpdateStore($store: HashIds!, $input: UpdateStoreInput!) {\n  _updateStore(store: $store, input: $input)\n}\n    "], ["\n    mutation StaffUpdateStore($store: HashIds!, $input: UpdateStoreInput!) {\n  _updateStore(store: $store, input: $input)\n}\n    "])));
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
export function useStaffUpdateStoreMutation(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useMutation(StaffUpdateStoreDocument, options);
}
export var LoginDocument = gql(templateObject_24 || (templateObject_24 = __makeTemplateObject(["\n    mutation Login($input: LoginInput!) {\n  login(input: $input) {\n    access\n    refresh\n  }\n}\n    "], ["\n    mutation Login($input: LoginInput!) {\n  login(input: $input) {\n    access\n    refresh\n  }\n}\n    "])));
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
export function useLoginMutation(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useMutation(LoginDocument, options);
}
export var MeDocument = gql(templateObject_25 || (templateObject_25 = __makeTemplateObject(["\n    query Me {\n  me {\n    id\n    active\n    email\n    firstName\n    lastName\n    phoneNumber\n    partner\n    staff\n    store {\n      id\n      name\n    }\n  }\n}\n    "], ["\n    query Me {\n  me {\n    id\n    active\n    email\n    firstName\n    lastName\n    phoneNumber\n    partner\n    staff\n    store {\n      id\n      name\n    }\n  }\n}\n    "])));
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
export function useMeQuery(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(MeDocument, options);
}
export function useMeLazyQuery(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(MeDocument, options);
}
export var RegisterUserDocument = gql(templateObject_26 || (templateObject_26 = __makeTemplateObject(["\n    mutation RegisterUser($registerInput: CreateUserInput!) {\n  register(input: $registerInput)\n}\n    "], ["\n    mutation RegisterUser($registerInput: CreateUserInput!) {\n  register(input: $registerInput)\n}\n    "])));
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
export function useRegisterUserMutation(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useMutation(RegisterUserDocument, options);
}
export var UpdateMeDocument = gql(templateObject_27 || (templateObject_27 = __makeTemplateObject(["\n    mutation UpdateMe($input: UpdateUserInput!) {\n  updateMe(input: $input)\n}\n    "], ["\n    mutation UpdateMe($input: UpdateUserInput!) {\n  updateMe(input: $input)\n}\n    "])));
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
export function useUpdateMeMutation(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useMutation(UpdateMeDocument, options);
}
var result = {
    "possibleTypes": {}
};
export default result;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18, templateObject_19, templateObject_20, templateObject_21, templateObject_22, templateObject_23, templateObject_24, templateObject_25, templateObject_26, templateObject_27;
//# sourceMappingURL=graphql.jsx.map