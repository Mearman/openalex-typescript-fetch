/* tslint:disable */
/* eslint-disable */
/**
 * OpenAlex
 * ![](https://raw.githubusercontent.com/ourresearch/openalex-docs/main/.gitbook/assets/OpenAlex-logo-5.png)  **OpenAlex** is a fully open catalog of the global research system.  It\'s named after the [ancient Library of Alexandria](https://en.wikipedia.org/wiki/Library_of_Alexandria) and made by the nonprofit [OurResearch](https://ourresearch.org/).  ## OpenAPI Specification  [Mearman/openalex-api-spec](https://github.com/Mearman/openalex-api-spec)  This OpenAPI specification is reverse-engineered and derived from spec generated by [openapi-devtools](https://github.com/AndrewWalsh/openapi-devtools).  The specification document itself is OpenAPI version 3.1 and is generated from TypeScript source code.  **[Releases](https://github.com/Mearman/openalex-api-spec/releases)**  ## Clients  [![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white&link=https://github.com/Mearman/openalex-typescript)](https://github.com/Mearman/openalex-typescript)  [![TypeScript Fetch](https://img.shields.io/badge/TypeScript%20Fetch-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white&link=https://github.com/Mearman/openalex-typescript-fetch)](https://github.com/Mearman/openalex-typescript-fetch)  [![TypeScript Node](https://img.shields.io/badge/TypeScript%20Node-339933?style=for-the-badge&logo=Node.js&logoColor=white&link=https://github.com/Mearman/openalex-typescript-node)](https://github.com/Mearman/openalex-typescript-node)  [![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=Python&logoColor=white&link=https://github.com/Mearman/openalex-python)](https://github.com/Mearman/openalex-python) [![Open in](https://img.shields.io/badge/Open%20in-CodeSpaces-181717?style=for-the-badge&logo=GitHub&link=https://codespaces.new/Mearman/openalex-python)](https://codespaces.new/Mearman/openalex-python) [![Open in](https://img.shields.io/badge/Open%20in-Colab-F9AB00?style=for-the-badge&logo=Google%20Colab&link=https://colab.research.google.com/github/Mearman/openalex-python/blob/main/README.ipynb)](https://colab.research.google.com/github/Mearman/openalex-python/blob/main/README.ipynb)  ---
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { DehydratedInstitution } from './DehydratedInstitution';
import {
    DehydratedInstitutionFromJSON,
    DehydratedInstitutionFromJSONTyped,
    DehydratedInstitutionToJSON,
} from './DehydratedInstitution';
import type { Ids } from './Ids';
import {
    IdsFromJSON,
    IdsFromJSONTyped,
    IdsToJSON,
} from './Ids';
import type { SummaryStats } from './SummaryStats';
import {
    SummaryStatsFromJSON,
    SummaryStatsFromJSONTyped,
    SummaryStatsToJSON,
} from './SummaryStats';

/**
 * 
 * @export
 * @interface Author
 */
export interface Author {
    /**
     * 
     * @type {any}
     * @memberof Author
     */
    affiliations?: any | null;
    /**
     * 
     * @type {any}
     * @memberof Author
     */
    citedByCount?: any | null;
    /**
     * 
     * @type {any}
     * @memberof Author
     */
    countsByYear?: any | null;
    /**
     * 
     * @type {any}
     * @memberof Author
     */
    createdDate?: any | null;
    /**
     * 
     * @type {any}
     * @memberof Author
     */
    displayName: any | null;
    /**
     * 
     * @type {any}
     * @memberof Author
     */
    displayNameAlternatives?: any | null;
    /**
     * 
     * @type {any}
     * @memberof Author
     */
    id: any | null;
    /**
     * 
     * @type {Ids}
     * @memberof Author
     */
    ids?: Ids;
    /**
     * 
     * @type {DehydratedInstitution}
     * @memberof Author
     */
    lastKnownInstitution?: DehydratedInstitution;
    /**
     * 
     * @type {any}
     * @memberof Author
     */
    lastKnownInstitutions?: any | null;
    /**
     * 
     * @type {any}
     * @memberof Author
     */
    orcid?: any | null;
    /**
     * 
     * @type {SummaryStats}
     * @memberof Author
     */
    summaryStats?: SummaryStats;
    /**
     * 
     * @type {any}
     * @memberof Author
     */
    updatedDate?: any | null;
    /**
     * 
     * @type {any}
     * @memberof Author
     */
    worksApiUrl?: any | null;
    /**
     * 
     * @type {any}
     * @memberof Author
     */
    worksCount?: any | null;
    /**
     * 
     * @type {any}
     * @memberof Author
     */
    xConcepts?: any | null;
}

/**
 * Check if a given object implements the Author interface.
 */
export function instanceOfAuthor(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "displayName" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function AuthorFromJSON(json: any): Author {
    return AuthorFromJSONTyped(json, false);
}

export function AuthorFromJSONTyped(json: any, ignoreDiscriminator: boolean): Author {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'affiliations': !exists(json, 'affiliations') ? undefined : json['affiliations'],
        'citedByCount': !exists(json, 'cited_by_count') ? undefined : json['cited_by_count'],
        'countsByYear': !exists(json, 'counts_by_year') ? undefined : json['counts_by_year'],
        'createdDate': !exists(json, 'created_date') ? undefined : json['created_date'],
        'displayName': json['display_name'],
        'displayNameAlternatives': !exists(json, 'display_name_alternatives') ? undefined : json['display_name_alternatives'],
        'id': json['id'],
        'ids': !exists(json, 'ids') ? undefined : IdsFromJSON(json['ids']),
        'lastKnownInstitution': !exists(json, 'last_known_institution') ? undefined : DehydratedInstitutionFromJSON(json['last_known_institution']),
        'lastKnownInstitutions': !exists(json, 'last_known_institutions') ? undefined : json['last_known_institutions'],
        'orcid': !exists(json, 'orcid') ? undefined : json['orcid'],
        'summaryStats': !exists(json, 'summary_stats') ? undefined : SummaryStatsFromJSON(json['summary_stats']),
        'updatedDate': !exists(json, 'updated_date') ? undefined : json['updated_date'],
        'worksApiUrl': !exists(json, 'works_api_url') ? undefined : json['works_api_url'],
        'worksCount': !exists(json, 'works_count') ? undefined : json['works_count'],
        'xConcepts': !exists(json, 'x_concepts') ? undefined : json['x_concepts'],
    };
}

export function AuthorToJSON(value?: Author | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'affiliations': value.affiliations,
        'cited_by_count': value.citedByCount,
        'counts_by_year': value.countsByYear,
        'created_date': value.createdDate,
        'display_name': value.displayName,
        'display_name_alternatives': value.displayNameAlternatives,
        'id': value.id,
        'ids': IdsToJSON(value.ids),
        'last_known_institution': DehydratedInstitutionToJSON(value.lastKnownInstitution),
        'last_known_institutions': value.lastKnownInstitutions,
        'orcid': value.orcid,
        'summary_stats': SummaryStatsToJSON(value.summaryStats),
        'updated_date': value.updatedDate,
        'works_api_url': value.worksApiUrl,
        'works_count': value.worksCount,
        'x_concepts': value.xConcepts,
    };
}

