/* tslint:disable */
/* eslint-disable */
/**
 * OpenAlex
 * ![](https://raw.githubusercontent.com/ourresearch/openalex-docs/main/.gitbook/assets/OpenAlex-logo-5.png)  **OpenAlex** is a fully open catalog of the global research system.  It\'s named after the [ancient Library of Alexandria](https://en.wikipedia.org/wiki/Library_of_Alexandria) and made by the nonprofit [OurResearch](https://ourresearch.org/).  ## OpenAPI Specification  [Mearman/openalex-api-spec](https://github.com/Mearman/openalex-api-spec)  This OpenAPI specification is reverse-engineered and derived from spec generated by [openapi-devtools](https://github.com/AndrewWalsh/openapi-devtools).  The specification document itself is OpenAPI version 3.1 and is generated from TypeScript source code.  [![Open in](https://img.shields.io/badge/Open%20in-Swagger%20UI-85EA2D?style=for-the-badge&logo=Swagger&link=https://mearman.github.io/openalex-swagger-ui-react/)](https://mearman.github.io/openalex-swagger-ui-react/)  **[Releases](https://github.com/Mearman/openalex-api-spec/releases)**  ## Clients  [![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white&link=https://github.com/Mearman/openalex-typescript)](https://github.com/Mearman/openalex-typescript)  [![TypeScript Fetch](https://img.shields.io/badge/TypeScript%20Fetch-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white&link=https://github.com/Mearman/openalex-typescript-fetch)](https://github.com/Mearman/openalex-typescript-fetch)  [![TypeScript Node](https://img.shields.io/badge/TypeScript%20Node-339933?style=for-the-badge&logo=Node.js&logoColor=white&link=https://github.com/Mearman/openalex-typescript-node)](https://github.com/Mearman/openalex-typescript-node)  [![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=Python&logoColor=white&link=https://github.com/Mearman/openalex-python)](https://github.com/Mearman/openalex-python) [![Open in](https://img.shields.io/badge/Open%20in-CodeSpaces-181717?style=for-the-badge&logo=GitHub&link=https://codespaces.new/Mearman/openalex-python)](https://codespaces.new/Mearman/openalex-python) [![Open in](https://img.shields.io/badge/Open%20in-Colab-F9AB00?style=for-the-badge&logo=Google%20Colab&link=https://colab.research.google.com/github/Mearman/openalex-python/blob/main/README.ipynb)](https://colab.research.google.com/github/Mearman/openalex-python/blob/main/README.ipynb)  ---
 *
 * The version of the OpenAPI document: 0.3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface Person
 */
export interface Person {
    /**
     * 
     * @type {string}
     * @memberof Person
     */
    displayName: string;
    /**
     * 
     * @type {string}
     * @memberof Person
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof Person
     */
    orcid: string;
}

/**
 * Check if a given object implements the Person interface.
 */
export function instanceOfPerson(value: object): value is Person {
    if (!('displayName' in value) || value['displayName'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('orcid' in value) || value['orcid'] === undefined) return false;
    return true;
}

export function PersonFromJSON(json: any): Person {
    return PersonFromJSONTyped(json, false);
}

export function PersonFromJSONTyped(json: any, ignoreDiscriminator: boolean): Person {
    if (json == null) {
        return json;
    }
    return {
        
        'displayName': json['display_name'],
        'id': json['id'],
        'orcid': json['orcid'],
    };
}

export function PersonToJSON(value?: Person | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'display_name': value['displayName'],
        'id': value['id'],
        'orcid': value['orcid'],
    };
}

