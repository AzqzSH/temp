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
import gql from 'graphql-tag';
export var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus["Captured"] = "CAPTURED";
    PaymentStatus["Failed"] = "FAILED";
    PaymentStatus["Pending"] = "PENDING";
})(PaymentStatus || (PaymentStatus = {}));
export var LoginDocument = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    mutation Login($input: LoginInput!) {\n  login(input: $input) {\n    access\n    refresh\n  }\n}\n    "], ["\n    mutation Login($input: LoginInput!) {\n  login(input: $input) {\n    access\n    refresh\n  }\n}\n    "])));
export var MeDocument = gql(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    query Me {\n  me {\n    id\n    active\n    email\n    firstName\n    lastName\n    phoneNumber\n    partner\n    staff\n  }\n}\n    "], ["\n    query Me {\n  me {\n    id\n    active\n    email\n    firstName\n    lastName\n    phoneNumber\n    partner\n    staff\n  }\n}\n    "])));
export var RegisterUserDocument = gql(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    mutation RegisterUser($registerInput: CreateUserInput!) {\n  register(input: $registerInput)\n}\n    "], ["\n    mutation RegisterUser($registerInput: CreateUserInput!) {\n  register(input: $registerInput)\n}\n    "])));
export var UpdateUserDocument = gql(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    mutation UpdateUser($input: UpdateUserInput!) {\n  updateUser(input: $input)\n}\n    "], ["\n    mutation UpdateUser($input: UpdateUserInput!) {\n  updateUser(input: $input)\n}\n    "])));
var defaultWrapper = function (action, _operationName, _operationType) { return action(); };
export function getSdk(client, withWrapper) {
    if (withWrapper === void 0) { withWrapper = defaultWrapper; }
    return {
        Login: function (variables, requestHeaders) {
            return withWrapper(function (wrappedRequestHeaders) { return client.request(LoginDocument, variables, __assign(__assign({}, requestHeaders), wrappedRequestHeaders)); }, 'Login', 'mutation');
        },
        Me: function (variables, requestHeaders) {
            return withWrapper(function (wrappedRequestHeaders) { return client.request(MeDocument, variables, __assign(__assign({}, requestHeaders), wrappedRequestHeaders)); }, 'Me', 'query');
        },
        RegisterUser: function (variables, requestHeaders) {
            return withWrapper(function (wrappedRequestHeaders) { return client.request(RegisterUserDocument, variables, __assign(__assign({}, requestHeaders), wrappedRequestHeaders)); }, 'RegisterUser', 'mutation');
        },
        UpdateUser: function (variables, requestHeaders) {
            return withWrapper(function (wrappedRequestHeaders) { return client.request(UpdateUserDocument, variables, __assign(__assign({}, requestHeaders), wrappedRequestHeaders)); }, 'UpdateUser', 'mutation');
        }
    };
}
var result = {
    "possibleTypes": {}
};
export default result;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=graphql2.js.map