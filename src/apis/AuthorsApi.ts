/* tslint:disable */
/* eslint-disable */
/**
 * OpenAlex
 * ![](https://raw.githubusercontent.com/ourresearch/openalex-docs/main/.gitbook/assets/OpenAlex-logo-5.png)  **OpenAlex** is a fully open catalog of the global research system.  It\'s named after the [ancient Library of Alexandria](https://en.wikipedia.org/wiki/Library_of_Alexandria) and made by the nonprofit [OurResearch](https://ourresearch.org/).  ## OpenAPI Specification  [Mearman/openalex-api-spec](https://github.com/Mearman/openalex-api-spec)  This OpenAPI specification is reverse-engineered and derived from spec generated by [openapi-devtools](https://github.com/AndrewWalsh/openapi-devtools).  The specification document itself is OpenAPI version 3.1 and is generated from TypeScript source code.  [![Open in](https://img.shields.io/badge/Open%20in-Swagger%20UI-85EA2D?style=for-the-badge&logo=Swagger&link=https://mearman.github.io/openalex-swagger-ui-react/)](https://mearman.github.io/openalex-swagger-ui-react/)  **[Releases](https://github.com/Mearman/openalex-api-spec/releases)**  ## Clients  [![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white&link=https://github.com/Mearman/openalex-typescript)](https://github.com/Mearman/openalex-typescript)  [![TypeScript Fetch](https://img.shields.io/badge/TypeScript%20Fetch-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white&link=https://github.com/Mearman/openalex-typescript-fetch)](https://github.com/Mearman/openalex-typescript-fetch)  [![TypeScript Node](https://img.shields.io/badge/TypeScript%20Node-339933?style=for-the-badge&logo=Node.js&logoColor=white&link=https://github.com/Mearman/openalex-typescript-node)](https://github.com/Mearman/openalex-typescript-node)  [![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=Python&logoColor=white&link=https://github.com/Mearman/openalex-python)](https://github.com/Mearman/openalex-python) [![Open in](https://img.shields.io/badge/Open%20in-CodeSpaces-181717?style=for-the-badge&logo=GitHub&link=https://codespaces.new/Mearman/openalex-python)](https://codespaces.new/Mearman/openalex-python) [![Open in](https://img.shields.io/badge/Open%20in-Colab-F9AB00?style=for-the-badge&logo=Google%20Colab&link=https://colab.research.google.com/github/Mearman/openalex-python/blob/main/README.ipynb)](https://colab.research.google.com/github/Mearman/openalex-python/blob/main/README.ipynb)  ---
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  Author,
  AuthorsResponseSchema,
  AutoCompleteResultSchema,
  ErrorMessage,
} from '../models/index';
import {
    AuthorFromJSON,
    AuthorToJSON,
    AuthorsResponseSchemaFromJSON,
    AuthorsResponseSchemaToJSON,
    AutoCompleteResultSchemaFromJSON,
    AutoCompleteResultSchemaToJSON,
    ErrorMessageFromJSON,
    ErrorMessageToJSON,
} from '../models/index';

export interface GetAuthorRequest {
    id: string;
    select?: string;
    userAgent?: any;
    mailto?: any;
}

export interface GetAuthorsRequest {
    apiKey?: string;
    cursor?: string;
    filter?: string;
    groupBy?: string;
    page?: number;
    perPage?: number;
    sample?: number;
    search?: string;
    seed?: any;
    select?: string;
    sort?: string;
    userAgent?: any;
    mailto?: any;
}

export interface GetAutocompleteAuthorsRequest {
    q?: string;
    userAgent?: any;
    mailto?: any;
}

export interface GetRandomAuthorRequest {
    select?: string;
    userAgent?: any;
    mailto?: any;
}

/**
 * 
 */
export class AuthorsApi extends runtime.BaseAPI {

    /**
     * Get a single author by id
     * Get Author
     */
    async getAuthorRaw(requestParameters: GetAuthorRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Author>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getAuthor.');
        }

        const queryParameters: any = {};

        if (requestParameters.select !== undefined) {
            queryParameters['select'] = requestParameters.select;
        }

        if (requestParameters.mailto !== undefined) {
            queryParameters['mailto'] = requestParameters.mailto;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.userAgent !== undefined && requestParameters.userAgent !== null) {
            headerParameters['User-Agent'] = String(requestParameters.userAgent);
        }

        const response = await this.request({
            path: `/authors/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AuthorFromJSON(jsonValue));
    }

    /**
     * Get a single author by id
     * Get Author
     */
    async getAuthor(requestParameters: GetAuthorRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Author> {
        const response = await this.getAuthorRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get lists of authors
     * List Authors
     */
    async getAuthorsRaw(requestParameters: GetAuthorsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AuthorsResponseSchema>> {
        const queryParameters: any = {};

        if (requestParameters.apiKey !== undefined) {
            queryParameters['api_key'] = requestParameters.apiKey;
        }

        if (requestParameters.cursor !== undefined) {
            queryParameters['cursor'] = requestParameters.cursor;
        }

        if (requestParameters.filter !== undefined) {
            queryParameters['filter'] = requestParameters.filter;
        }

        if (requestParameters.groupBy !== undefined) {
            queryParameters['group_by'] = requestParameters.groupBy;
        }

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        if (requestParameters.perPage !== undefined) {
            queryParameters['per_page'] = requestParameters.perPage;
        }

        if (requestParameters.sample !== undefined) {
            queryParameters['sample'] = requestParameters.sample;
        }

        if (requestParameters.search !== undefined) {
            queryParameters['search'] = requestParameters.search;
        }

        if (requestParameters.seed !== undefined) {
            queryParameters['seed'] = requestParameters.seed;
        }

        if (requestParameters.select !== undefined) {
            queryParameters['select'] = requestParameters.select;
        }

        if (requestParameters.sort !== undefined) {
            queryParameters['sort'] = requestParameters.sort;
        }

        if (requestParameters.mailto !== undefined) {
            queryParameters['mailto'] = requestParameters.mailto;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.userAgent !== undefined && requestParameters.userAgent !== null) {
            headerParameters['User-Agent'] = String(requestParameters.userAgent);
        }

        const response = await this.request({
            path: `/authors`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AuthorsResponseSchemaFromJSON(jsonValue));
    }

    /**
     * Get lists of authors
     * List Authors
     */
    async getAuthors(requestParameters: GetAuthorsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AuthorsResponseSchema> {
        const response = await this.getAuthorsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 
     * /autocomplete/authors
     */
    async getAutocompleteAuthorsRaw(requestParameters: GetAutocompleteAuthorsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AutoCompleteResultSchema>> {
        const queryParameters: any = {};

        if (requestParameters.q !== undefined) {
            queryParameters['q'] = requestParameters.q;
        }

        if (requestParameters.mailto !== undefined) {
            queryParameters['mailto'] = requestParameters.mailto;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.userAgent !== undefined && requestParameters.userAgent !== null) {
            headerParameters['User-Agent'] = String(requestParameters.userAgent);
        }

        const response = await this.request({
            path: `/autocomplete/authors`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AutoCompleteResultSchemaFromJSON(jsonValue));
    }

    /**
     * 
     * /autocomplete/authors
     */
    async getAutocompleteAuthors(requestParameters: GetAutocompleteAuthorsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AutoCompleteResultSchema> {
        const response = await this.getAutocompleteAuthorsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get a random author
     * Get Random Author
     */
    async getRandomAuthorRaw(requestParameters: GetRandomAuthorRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Author>> {
        const queryParameters: any = {};

        if (requestParameters.select !== undefined) {
            queryParameters['select'] = requestParameters.select;
        }

        if (requestParameters.mailto !== undefined) {
            queryParameters['mailto'] = requestParameters.mailto;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.userAgent !== undefined && requestParameters.userAgent !== null) {
            headerParameters['User-Agent'] = String(requestParameters.userAgent);
        }

        const response = await this.request({
            path: `/authors/random`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AuthorFromJSON(jsonValue));
    }

    /**
     * Get a random author
     * Get Random Author
     */
    async getRandomAuthor(requestParameters: GetRandomAuthorRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Author> {
        const response = await this.getRandomAuthorRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
