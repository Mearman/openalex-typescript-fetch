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

import { exists, mapValues } from '../runtime';
import type { Ids } from './Ids';
import {
    IdsFromJSON,
    IdsFromJSONTyped,
    IdsToJSON,
} from './Ids';
import type { TopicLevelArraySchema } from './TopicLevelArraySchema';
import {
    TopicLevelArraySchemaFromJSON,
    TopicLevelArraySchemaFromJSONTyped,
    TopicLevelArraySchemaToJSON,
} from './TopicLevelArraySchema';
import type { TopicLevelSchema } from './TopicLevelSchema';
import {
    TopicLevelSchemaFromJSON,
    TopicLevelSchemaFromJSONTyped,
    TopicLevelSchemaToJSON,
} from './TopicLevelSchema';

/**
 * 
 * @export
 * @interface GetSubfieldById200Response
 */
export interface GetSubfieldById200Response {
    /**
     * 
     * @type {any}
     * @memberof GetSubfieldById200Response
     */
    citedByCount: any | null;
    /**
     * 
     * @type {any}
     * @memberof GetSubfieldById200Response
     */
    createdDate: any | null;
    /**
     * 
     * @type {any}
     * @memberof GetSubfieldById200Response
     */
    description: any | null;
    /**
     * 
     * @type {any}
     * @memberof GetSubfieldById200Response
     */
    displayName: any | null;
    /**
     * 
     * @type {any}
     * @memberof GetSubfieldById200Response
     */
    displayNameAlternatives: any | null;
    /**
     * 
     * @type {TopicLevelSchema}
     * @memberof GetSubfieldById200Response
     */
    domain: TopicLevelSchema;
    /**
     * 
     * @type {TopicLevelSchema}
     * @memberof GetSubfieldById200Response
     */
    field: TopicLevelSchema;
    /**
     * 
     * @type {any}
     * @memberof GetSubfieldById200Response
     */
    id: any | null;
    /**
     * 
     * @type {Ids}
     * @memberof GetSubfieldById200Response
     */
    ids: Ids;
    /**
     * 
     * @type {TopicLevelArraySchema}
     * @memberof GetSubfieldById200Response
     */
    siblings: TopicLevelArraySchema;
    /**
     * 
     * @type {any}
     * @memberof GetSubfieldById200Response
     */
    topics: any | null;
    /**
     * 
     * @type {any}
     * @memberof GetSubfieldById200Response
     */
    updatedDate: any | null;
    /**
     * 
     * @type {any}
     * @memberof GetSubfieldById200Response
     */
    worksApiUrl: any | null;
    /**
     * 
     * @type {any}
     * @memberof GetSubfieldById200Response
     */
    worksCount: any | null;
}

/**
 * Check if a given object implements the GetSubfieldById200Response interface.
 */
export function instanceOfGetSubfieldById200Response(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "citedByCount" in value;
    isInstance = isInstance && "createdDate" in value;
    isInstance = isInstance && "description" in value;
    isInstance = isInstance && "displayName" in value;
    isInstance = isInstance && "displayNameAlternatives" in value;
    isInstance = isInstance && "domain" in value;
    isInstance = isInstance && "field" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "ids" in value;
    isInstance = isInstance && "siblings" in value;
    isInstance = isInstance && "topics" in value;
    isInstance = isInstance && "updatedDate" in value;
    isInstance = isInstance && "worksApiUrl" in value;
    isInstance = isInstance && "worksCount" in value;

    return isInstance;
}

export function GetSubfieldById200ResponseFromJSON(json: any): GetSubfieldById200Response {
    return GetSubfieldById200ResponseFromJSONTyped(json, false);
}

export function GetSubfieldById200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetSubfieldById200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'citedByCount': json['cited_by_count'],
        'createdDate': json['created_date'],
        'description': json['description'],
        'displayName': json['display_name'],
        'displayNameAlternatives': json['display_name_alternatives'],
        'domain': TopicLevelSchemaFromJSON(json['domain']),
        'field': TopicLevelSchemaFromJSON(json['field']),
        'id': json['id'],
        'ids': IdsFromJSON(json['ids']),
        'siblings': TopicLevelArraySchemaFromJSON(json['siblings']),
        'topics': json['topics'],
        'updatedDate': json['updated_date'],
        'worksApiUrl': json['works_api_url'],
        'worksCount': json['works_count'],
    };
}

export function GetSubfieldById200ResponseToJSON(value?: GetSubfieldById200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'cited_by_count': value.citedByCount,
        'created_date': value.createdDate,
        'description': value.description,
        'display_name': value.displayName,
        'display_name_alternatives': value.displayNameAlternatives,
        'domain': TopicLevelSchemaToJSON(value.domain),
        'field': TopicLevelSchemaToJSON(value.field),
        'id': value.id,
        'ids': IdsToJSON(value.ids),
        'siblings': TopicLevelArraySchemaToJSON(value.siblings),
        'topics': value.topics,
        'updated_date': value.updatedDate,
        'works_api_url': value.worksApiUrl,
        'works_count': value.worksCount,
    };
}

