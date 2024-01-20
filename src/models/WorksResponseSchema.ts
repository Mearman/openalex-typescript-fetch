/* tslint:disable */
/* eslint-disable */
/**
 * OpenAlex
 * ![](https://raw.githubusercontent.com/ourresearch/openalex-docs/main/.gitbook/assets/OpenAlex-logo-5.png)  **OpenAlex** is a fully open catalog of the global research system.  It\'s named after the [ancient Library of Alexandria](https://en.wikipedia.org/wiki/Library_of_Alexandria) and made by the nonprofit [OurResearch](https://ourresearch.org/).  ## OpenAPI Specification  [Mearman/openalex-api-spec](https://github.com/Mearman/openalex-api-spec)  This OpenAPI specification is reverse-engineered and derived from spec generated by [openapi-devtools](https://github.com/AndrewWalsh/openapi-devtools).  The specification document itself is OpenAPI version 3.1 and is generated from TypeScript source code.  **[Releases](https://github.com/Mearman/openalex-api-spec/releases)**  ## Clients  [![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white&link=https://github.com/Mearman/openalex-typescript)](https://github.com/Mearman/openalex-typescript)  [![TypeScript Fetch](https://img.shields.io/badge/TypeScript%20Fetch-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white&link=https://github.com/Mearman/openalex-typescript-fetch)](https://github.com/Mearman/openalex-typescript-fetch)  [![TypeScript Node](https://img.shields.io/badge/TypeScript%20Node-339933?style=for-the-badge&logo=Node.js&logoColor=white&link=https://github.com/Mearman/openalex-typescript-node)](https://github.com/Mearman/openalex-typescript-node)  [![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=Python&logoColor=white&link=https://github.com/Mearman/openalex-python)](https://github.com/Mearman/openalex-python) [![Open in](https://img.shields.io/badge/Open%20in-CodeSpaces-181717?style=for-the-badge&logo=GitHub&link=https://codespaces.new/Mearman/openalex-python)](https://codespaces.new/Mearman/openalex-python) [![Open in](https://img.shields.io/badge/Open%20in-Colab-F9AB00?style=for-the-badge&logo=Google%20Colab&link=https://colab.research.google.com/github/Mearman/openalex-python/blob/main/README.ipynb)](https://colab.research.google.com/github/Mearman/openalex-python/blob/main/README.ipynb)  ---
 *
 * The version of the OpenAPI document: 0.0.7
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { Meta } from './Meta';
import {
    MetaFromJSON,
    MetaFromJSONTyped,
    MetaToJSON,
} from './Meta';

/**
 * 
 * @export
 * @interface WorksResponseSchema
 */
export interface WorksResponseSchema {
    /**
     * 
     * @type {any}
     * @memberof WorksResponseSchema
     */
    groupBy?: any | null;
    /**
     * 
     * @type {Meta}
     * @memberof WorksResponseSchema
     */
    meta: Meta;
    /**
     * 
     * @type {any}
     * @memberof WorksResponseSchema
     */
    results: any | null;
}

/**
 * Check if a given object implements the WorksResponseSchema interface.
 */
export function instanceOfWorksResponseSchema(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "meta" in value;
    isInstance = isInstance && "results" in value;

    return isInstance;
}

export function WorksResponseSchemaFromJSON(json: any): WorksResponseSchema {
    return WorksResponseSchemaFromJSONTyped(json, false);
}

export function WorksResponseSchemaFromJSONTyped(json: any, ignoreDiscriminator: boolean): WorksResponseSchema {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'groupBy': !exists(json, 'group_by') ? undefined : json['group_by'],
        'meta': MetaFromJSON(json['meta']),
        'results': json['results'],
    };
}

export function WorksResponseSchemaToJSON(value?: WorksResponseSchema | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'group_by': value.groupBy,
        'meta': MetaToJSON(value.meta),
        'results': value.results,
    };
}

