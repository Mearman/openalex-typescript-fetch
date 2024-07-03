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
 * @interface Ids
 */
export interface Ids {
    /**
     * 
     * @type {string}
     * @memberof Ids
     */
    crossref?: string;
    /**
     * 
     * @type {string}
     * @memberof Ids
     */
    doi?: string;
    /**
     * 
     * @type {string}
     * @memberof Ids
     */
    fatcat?: string;
    /**
     * 
     * @type {string}
     * @memberof Ids
     */
    grid?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof Ids
     */
    issn?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof Ids
     */
    issnL?: string;
    /**
     * 
     * @type {string}
     * @memberof Ids
     */
    mag?: string;
    /**
     * 
     * @type {string}
     * @memberof Ids
     */
    openalex: string;
    /**
     * 
     * @type {string}
     * @memberof Ids
     */
    orcid?: string;
    /**
     * 
     * @type {string}
     * @memberof Ids
     */
    pmcid?: string;
    /**
     * 
     * @type {string}
     * @memberof Ids
     */
    pmid?: string;
    /**
     * 
     * @type {string}
     * @memberof Ids
     */
    ror?: string;
    /**
     * 
     * @type {string}
     * @memberof Ids
     */
    scopus?: string;
    /**
     * 
     * @type {string}
     * @memberof Ids
     */
    wikidata?: string;
    /**
     * 
     * @type {string}
     * @memberof Ids
     */
    wikipedia?: string;
}

/**
 * Check if a given object implements the Ids interface.
 */
export function instanceOfIds(value: object): value is Ids {
    if (!('openalex' in value) || value['openalex'] === undefined) return false;
    return true;
}

export function IdsFromJSON(json: any): Ids {
    return IdsFromJSONTyped(json, false);
}

export function IdsFromJSONTyped(json: any, ignoreDiscriminator: boolean): Ids {
    if (json == null) {
        return json;
    }
    return {
        
        'crossref': json['crossref'] == null ? undefined : json['crossref'],
        'doi': json['doi'] == null ? undefined : json['doi'],
        'fatcat': json['fatcat'] == null ? undefined : json['fatcat'],
        'grid': json['grid'] == null ? undefined : json['grid'],
        'issn': json['issn'] == null ? undefined : json['issn'],
        'issnL': json['issn_l'] == null ? undefined : json['issn_l'],
        'mag': json['mag'] == null ? undefined : json['mag'],
        'openalex': json['openalex'],
        'orcid': json['orcid'] == null ? undefined : json['orcid'],
        'pmcid': json['pmcid'] == null ? undefined : json['pmcid'],
        'pmid': json['pmid'] == null ? undefined : json['pmid'],
        'ror': json['ror'] == null ? undefined : json['ror'],
        'scopus': json['scopus'] == null ? undefined : json['scopus'],
        'wikidata': json['wikidata'] == null ? undefined : json['wikidata'],
        'wikipedia': json['wikipedia'] == null ? undefined : json['wikipedia'],
    };
}

export function IdsToJSON(value?: Ids | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'crossref': value['crossref'],
        'doi': value['doi'],
        'fatcat': value['fatcat'],
        'grid': value['grid'],
        'issn': value['issn'],
        'issn_l': value['issnL'],
        'mag': value['mag'],
        'openalex': value['openalex'],
        'orcid': value['orcid'],
        'pmcid': value['pmcid'],
        'pmid': value['pmid'],
        'ror': value['ror'],
        'scopus': value['scopus'],
        'wikidata': value['wikidata'],
        'wikipedia': value['wikipedia'],
    };
}

