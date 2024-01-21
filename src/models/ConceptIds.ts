/* tslint:disable */
/* eslint-disable */
/**
 * OpenAlex
 * ![](https://raw.githubusercontent.com/ourresearch/openalex-docs/main/.gitbook/assets/OpenAlex-logo-5.png)  **OpenAlex** is a fully open catalog of the global research system.  It\'s named after the [ancient Library of Alexandria](https://en.wikipedia.org/wiki/Library_of_Alexandria) and made by the nonprofit [OurResearch](https://ourresearch.org/).  ## OpenAPI Specification  [Mearman/openalex-api-spec](https://github.com/Mearman/openalex-api-spec)  This OpenAPI specification is reverse-engineered and derived from spec generated by [openapi-devtools](https://github.com/AndrewWalsh/openapi-devtools).  The specification document itself is OpenAPI version 3.1 and is generated from TypeScript source code.  **[Releases](https://github.com/Mearman/openalex-api-spec/releases)**  ## Clients  [![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white&link=https://github.com/Mearman/openalex-typescript)](https://github.com/Mearman/openalex-typescript)  [![TypeScript Fetch](https://img.shields.io/badge/TypeScript%20Fetch-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white&link=https://github.com/Mearman/openalex-typescript-fetch)](https://github.com/Mearman/openalex-typescript-fetch)  [![TypeScript Node](https://img.shields.io/badge/TypeScript%20Node-339933?style=for-the-badge&logo=Node.js&logoColor=white&link=https://github.com/Mearman/openalex-typescript-node)](https://github.com/Mearman/openalex-typescript-node)  [![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=Python&logoColor=white&link=https://github.com/Mearman/openalex-python)](https://github.com/Mearman/openalex-python) [![Open in](https://img.shields.io/badge/Open%20in-CodeSpaces-181717?style=for-the-badge&logo=GitHub&link=https://codespaces.new/Mearman/openalex-python)](https://codespaces.new/Mearman/openalex-python) [![Open in](https://img.shields.io/badge/Open%20in-Colab-F9AB00?style=for-the-badge&logo=Google%20Colab&link=https://colab.research.google.com/github/Mearman/openalex-python/blob/main/README.ipynb)](https://colab.research.google.com/github/Mearman/openalex-python/blob/main/README.ipynb)  ---
 *
 * The version of the OpenAPI document: 0.0.9
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface ConceptIds
 */
export interface ConceptIds {
    /**
     * 
     * @type {any}
     * @memberof ConceptIds
     */
    mag?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ConceptIds
     */
    openalex: any | null;
    /**
     * 
     * @type {any}
     * @memberof ConceptIds
     */
    umlsCui?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ConceptIds
     */
    wikidata?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ConceptIds
     */
    wikipedia?: any | null;
}

/**
 * Check if a given object implements the ConceptIds interface.
 */
export function instanceOfConceptIds(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "openalex" in value;

    return isInstance;
}

export function ConceptIdsFromJSON(json: any): ConceptIds {
    return ConceptIdsFromJSONTyped(json, false);
}

export function ConceptIdsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConceptIds {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'mag': !exists(json, 'mag') ? undefined : json['mag'],
        'openalex': json['openalex'],
        'umlsCui': !exists(json, 'umls_cui') ? undefined : json['umls_cui'],
        'wikidata': !exists(json, 'wikidata') ? undefined : json['wikidata'],
        'wikipedia': !exists(json, 'wikipedia') ? undefined : json['wikipedia'],
    };
}

export function ConceptIdsToJSON(value?: ConceptIds | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'mag': value.mag,
        'openalex': value.openalex,
        'umls_cui': value.umlsCui,
        'wikidata': value.wikidata,
        'wikipedia': value.wikipedia,
    };
}

