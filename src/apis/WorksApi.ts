/* tslint:disable */
/* eslint-disable */
/**
 * OpenAlex
 * ![](https://raw.githubusercontent.com/ourresearch/openalex-docs/main/.gitbook/assets/OpenAlex-logo-5.png)  **OpenAlex** is a fully open catalog of the global research system.  It\'s named after the [ancient Library of Alexandria](https://en.wikipedia.org/wiki/Library_of_Alexandria) and made by the nonprofit [OurResearch](https://ourresearch.org/).  ## OpenAPI Specification  [Mearman/openalex-api-spec](https://github.com/Mearman/openalex-api-spec)  This OpenAPI specification is reverse-engineered and derived from spec generated by [openapi-devtools](https://github.com/AndrewWalsh/openapi-devtools).  The specification document itself is OpenAPI version 3.1 and is generated from TypeScript source code.  **[Releases](https://github.com/Mearman/openalex-api-spec/releases)**  ## Clients  [![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white&link=https://github.com/Mearman/openalex-typescript)](https://github.com/Mearman/openalex-typescript)  [![TypeScript Fetch](https://img.shields.io/badge/TypeScript%20Fetch-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white&link=https://github.com/Mearman/openalex-typescript-fetch)](https://github.com/Mearman/openalex-typescript-fetch)  [![TypeScript Node](https://img.shields.io/badge/TypeScript%20Node-339933?style=for-the-badge&logo=Node.js&logoColor=white&link=https://github.com/Mearman/openalex-typescript-node)](https://github.com/Mearman/openalex-typescript-node)  [![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=Python&logoColor=white&link=https://github.com/Mearman/openalex-python)](https://github.com/Mearman/openalex-python) [![Open in](https://img.shields.io/badge/Open%20in-CodeSpaces-181717?style=for-the-badge&logo=GitHub&link=https://codespaces.new/Mearman/openalex-python)](https://codespaces.new/Mearman/openalex-python) [![Open in](https://img.shields.io/badge/Open%20in-Colab-F9AB00?style=for-the-badge&logo=Google%20Colab&link=https://colab.research.google.com/github/Mearman/openalex-python/blob/main/README.ipynb)](https://colab.research.google.com/github/Mearman/openalex-python/blob/main/README.ipynb)  ---
 *
 * The version of the OpenAPI document: 0.0.8
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  AutoCompleteResultSchema,
  ErrorMessage,
  WorkNgramsSchema,
  WorkSchema,
  WorksResponseSchema,
} from '../models/index';
import {
    AutoCompleteResultSchemaFromJSON,
    AutoCompleteResultSchemaToJSON,
    ErrorMessageFromJSON,
    ErrorMessageToJSON,
    WorkNgramsSchemaFromJSON,
    WorkNgramsSchemaToJSON,
    WorkSchemaFromJSON,
    WorkSchemaToJSON,
    WorksResponseSchemaFromJSON,
    WorksResponseSchemaToJSON,
} from '../models/index';

export interface GetAutocompleteWorksRequest {
    filter?: string;
    search?: string;
    q?: string;
    userAgent?: any;
    mailto?: any;
}

export interface GetWorkRequest {
    id: any;
    select?: any;
    userAgent?: any;
    mailto?: any;
}

export interface GetWorkNgramsRequest {
    id: any;
    userAgent?: any;
    mailto?: any;
}

export interface GetWorksRequest {
    apiKey?: string;
    cursor?: string;
    filter?: any;
    groupBy?: string;
    page?: number;
    perPage?: number;
    sample?: number;
    search?: string;
    select?: string;
    sort?: string;
    userAgent?: any;
    mailto?: any;
}

/**
 * 
 */
export class WorksApi extends runtime.BaseAPI {

    /**
     * 
     * /autocomplete/works
     */
    async getAutocompleteWorksRaw(requestParameters: GetAutocompleteWorksRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AutoCompleteResultSchema>> {
        const queryParameters: any = {};

        if (requestParameters.filter !== undefined) {
            queryParameters['filter'] = requestParameters.filter;
        }

        if (requestParameters.search !== undefined) {
            queryParameters['search'] = requestParameters.search;
        }

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
            path: `/autocomplete/works`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AutoCompleteResultSchemaFromJSON(jsonValue));
    }

    /**
     * 
     * /autocomplete/works
     */
    async getAutocompleteWorks(requestParameters: GetAutocompleteWorksRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AutoCompleteResultSchema> {
        const response = await this.getAutocompleteWorksRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get a single work by its id
     * /works/{id}
     */
    async getWorkRaw(requestParameters: GetWorkRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<WorkSchema>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getWork.');
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
            path: `/works/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => WorkSchemaFromJSON(jsonValue));
    }

    /**
     * Get a single work by its id
     * /works/{id}
     */
    async getWork(requestParameters: GetWorkRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<WorkSchema> {
        const response = await this.getWorkRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 
     * /works/{id}/ngrams
     */
    async getWorkNgramsRaw(requestParameters: GetWorkNgramsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<WorkNgramsSchema>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getWorkNgrams.');
        }

        const queryParameters: any = {};

        if (requestParameters.mailto !== undefined) {
            queryParameters['mailto'] = requestParameters.mailto;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.userAgent !== undefined && requestParameters.userAgent !== null) {
            headerParameters['User-Agent'] = String(requestParameters.userAgent);
        }

        const response = await this.request({
            path: `/works/{id}/ngrams`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => WorkNgramsSchemaFromJSON(jsonValue));
    }

    /**
     * 
     * /works/{id}/ngrams
     */
    async getWorkNgrams(requestParameters: GetWorkNgramsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<WorkNgramsSchema> {
        const response = await this.getWorkNgramsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 
     * /works
     */
    async getWorksRaw(requestParameters: GetWorksRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<WorksResponseSchema>> {
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
            path: `/works`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => WorksResponseSchemaFromJSON(jsonValue));
    }

    /**
     * 
     * /works
     */
    async getWorks(requestParameters: GetWorksRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<WorksResponseSchema> {
        const response = await this.getWorksRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
