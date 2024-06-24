/* tslint:disable */
/* eslint-disable */
/**
 * OpenAlex
 * ![](https://raw.githubusercontent.com/ourresearch/openalex-docs/main/.gitbook/assets/OpenAlex-logo-5.png)  **OpenAlex** is a fully open catalog of the global research system.  It\'s named after the [ancient Library of Alexandria](https://en.wikipedia.org/wiki/Library_of_Alexandria) and made by the nonprofit [OurResearch](https://ourresearch.org/).  ## OpenAPI Specification  [Mearman/openalex-api-spec](https://github.com/Mearman/openalex-api-spec)  This OpenAPI specification is reverse-engineered and derived from spec generated by [openapi-devtools](https://github.com/AndrewWalsh/openapi-devtools).  The specification document itself is OpenAPI version 3.1 and is generated from TypeScript source code.  [![Open in](https://img.shields.io/badge/Open%20in-Swagger%20UI-85EA2D?style=for-the-badge&logo=Swagger&link=https://mearman.github.io/openalex-swagger-ui-react/)](https://mearman.github.io/openalex-swagger-ui-react/)  **[Releases](https://github.com/Mearman/openalex-api-spec/releases)**  ## Clients  [![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white&link=https://github.com/Mearman/openalex-typescript)](https://github.com/Mearman/openalex-typescript)  [![TypeScript Fetch](https://img.shields.io/badge/TypeScript%20Fetch-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white&link=https://github.com/Mearman/openalex-typescript-fetch)](https://github.com/Mearman/openalex-typescript-fetch)  [![TypeScript Node](https://img.shields.io/badge/TypeScript%20Node-339933?style=for-the-badge&logo=Node.js&logoColor=white&link=https://github.com/Mearman/openalex-typescript-node)](https://github.com/Mearman/openalex-typescript-node)  [![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=Python&logoColor=white&link=https://github.com/Mearman/openalex-python)](https://github.com/Mearman/openalex-python) [![Open in](https://img.shields.io/badge/Open%20in-CodeSpaces-181717?style=for-the-badge&logo=GitHub&link=https://codespaces.new/Mearman/openalex-python)](https://codespaces.new/Mearman/openalex-python) [![Open in](https://img.shields.io/badge/Open%20in-Colab-F9AB00?style=for-the-badge&logo=Google%20Colab&link=https://colab.research.google.com/github/Mearman/openalex-python/blob/main/README.ipynb)](https://colab.research.google.com/github/Mearman/openalex-python/blob/main/README.ipynb)  ---
 *
 * The version of the OpenAPI document: 0.2.3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  Domain,
  ErrorMessage,
  Field,
  Subfield,
  Topic,
  Topics,
} from '../models/index';
import {
    DomainFromJSON,
    DomainToJSON,
    ErrorMessageFromJSON,
    ErrorMessageToJSON,
    FieldFromJSON,
    FieldToJSON,
    SubfieldFromJSON,
    SubfieldToJSON,
    TopicFromJSON,
    TopicToJSON,
    TopicsFromJSON,
    TopicsToJSON,
} from '../models/index';

export interface GetDomainByIdRequest {
    id: any;
    perPage?: number;
    userAgent?: any;
    mailto?: any;
}

export interface GetFieldByIdRequest {
    id: any;
    perPage?: number;
    userAgent?: any;
    mailto?: any;
}

export interface GetSubfieldByIdRequest {
    id: any;
    perPage?: number;
    userAgent?: any;
    mailto?: any;
}

export interface GetTopicByIdRequest {
    id: any;
    perPage?: number;
    userAgent?: any;
    mailto?: any;
}

export interface GetTopicsRequest {
    sort?: string;
    perPage?: number;
    page?: any;
    sample?: any;
    select?: string;
    filter?: string;
    search?: string;
    groupBy?: string;
    userAgent?: any;
    mailto?: any;
}

/**
 * 
 */
export class TopicsApi extends runtime.BaseAPI {

    /**
     * 
     * /domains/{id}
     */
    async getDomainByIdRaw(requestParameters: GetDomainByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Domain>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getDomainById.');
        }

        const queryParameters: any = {};

        if (requestParameters.perPage !== undefined) {
            queryParameters['per_page'] = requestParameters.perPage;
        }

        if (requestParameters.mailto !== undefined) {
            queryParameters['mailto'] = requestParameters.mailto;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.userAgent !== undefined && requestParameters.userAgent !== null) {
            headerParameters['User-Agent'] = String(requestParameters.userAgent);
        }

        const response = await this.request({
            path: `/domains/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DomainFromJSON(jsonValue));
    }

    /**
     * 
     * /domains/{id}
     */
    async getDomainById(requestParameters: GetDomainByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Domain> {
        const response = await this.getDomainByIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 
     * /fields/{id}
     */
    async getFieldByIdRaw(requestParameters: GetFieldByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Field>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getFieldById.');
        }

        const queryParameters: any = {};

        if (requestParameters.perPage !== undefined) {
            queryParameters['per_page'] = requestParameters.perPage;
        }

        if (requestParameters.mailto !== undefined) {
            queryParameters['mailto'] = requestParameters.mailto;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.userAgent !== undefined && requestParameters.userAgent !== null) {
            headerParameters['User-Agent'] = String(requestParameters.userAgent);
        }

        const response = await this.request({
            path: `/field/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => FieldFromJSON(jsonValue));
    }

    /**
     * 
     * /fields/{id}
     */
    async getFieldById(requestParameters: GetFieldByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Field> {
        const response = await this.getFieldByIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 
     * /subfields/{id}
     */
    async getSubfieldByIdRaw(requestParameters: GetSubfieldByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Subfield>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getSubfieldById.');
        }

        const queryParameters: any = {};

        if (requestParameters.perPage !== undefined) {
            queryParameters['per_page'] = requestParameters.perPage;
        }

        if (requestParameters.mailto !== undefined) {
            queryParameters['mailto'] = requestParameters.mailto;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.userAgent !== undefined && requestParameters.userAgent !== null) {
            headerParameters['User-Agent'] = String(requestParameters.userAgent);
        }

        const response = await this.request({
            path: `/subfields/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SubfieldFromJSON(jsonValue));
    }

    /**
     * 
     * /subfields/{id}
     */
    async getSubfieldById(requestParameters: GetSubfieldByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Subfield> {
        const response = await this.getSubfieldByIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 
     * /topics/{id}
     */
    async getTopicByIdRaw(requestParameters: GetTopicByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Topic>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getTopicById.');
        }

        const queryParameters: any = {};

        if (requestParameters.perPage !== undefined) {
            queryParameters['per_page'] = requestParameters.perPage;
        }

        if (requestParameters.mailto !== undefined) {
            queryParameters['mailto'] = requestParameters.mailto;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.userAgent !== undefined && requestParameters.userAgent !== null) {
            headerParameters['User-Agent'] = String(requestParameters.userAgent);
        }

        const response = await this.request({
            path: `/topics/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TopicFromJSON(jsonValue));
    }

    /**
     * 
     * /topics/{id}
     */
    async getTopicById(requestParameters: GetTopicByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Topic> {
        const response = await this.getTopicByIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 
     * /topics
     */
    async getTopicsRaw(requestParameters: GetTopicsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Topics>> {
        const queryParameters: any = {};

        if (requestParameters.sort !== undefined) {
            queryParameters['sort'] = requestParameters.sort;
        }

        if (requestParameters.perPage !== undefined) {
            queryParameters['per_page'] = requestParameters.perPage;
        }

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        if (requestParameters.sample !== undefined) {
            queryParameters['sample'] = requestParameters.sample;
        }

        if (requestParameters.select !== undefined) {
            queryParameters['select'] = requestParameters.select;
        }

        if (requestParameters.filter !== undefined) {
            queryParameters['filter'] = requestParameters.filter;
        }

        if (requestParameters.search !== undefined) {
            queryParameters['search'] = requestParameters.search;
        }

        if (requestParameters.groupBy !== undefined) {
            queryParameters['group_by'] = requestParameters.groupBy;
        }

        if (requestParameters.mailto !== undefined) {
            queryParameters['mailto'] = requestParameters.mailto;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.userAgent !== undefined && requestParameters.userAgent !== null) {
            headerParameters['User-Agent'] = String(requestParameters.userAgent);
        }

        const response = await this.request({
            path: `/topics`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TopicsFromJSON(jsonValue));
    }

    /**
     * 
     * /topics
     */
    async getTopics(requestParameters: GetTopicsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Topics> {
        const response = await this.getTopicsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
