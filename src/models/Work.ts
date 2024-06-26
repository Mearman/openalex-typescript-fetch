/* tslint:disable */
/* eslint-disable */
/**
 * OpenAlex
 * ![](https://raw.githubusercontent.com/ourresearch/openalex-docs/main/.gitbook/assets/OpenAlex-logo-5.png)  **OpenAlex** is a fully open catalog of the global research system.  It\'s named after the [ancient Library of Alexandria](https://en.wikipedia.org/wiki/Library_of_Alexandria) and made by the nonprofit [OurResearch](https://ourresearch.org/).  ## OpenAPI Specification  [Mearman/openalex-api-spec](https://github.com/Mearman/openalex-api-spec)  This OpenAPI specification is reverse-engineered and derived from spec generated by [openapi-devtools](https://github.com/AndrewWalsh/openapi-devtools).  The specification document itself is OpenAPI version 3.1 and is generated from TypeScript source code.  [![Open in](https://img.shields.io/badge/Open%20in-Swagger%20UI-85EA2D?style=for-the-badge&logo=Swagger&link=https://mearman.github.io/openalex-swagger-ui-react/)](https://mearman.github.io/openalex-swagger-ui-react/)  **[Releases](https://github.com/Mearman/openalex-api-spec/releases)**  ## Clients  [![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white&link=https://github.com/Mearman/openalex-typescript)](https://github.com/Mearman/openalex-typescript)  [![TypeScript Fetch](https://img.shields.io/badge/TypeScript%20Fetch-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white&link=https://github.com/Mearman/openalex-typescript-fetch)](https://github.com/Mearman/openalex-typescript-fetch)  [![TypeScript Node](https://img.shields.io/badge/TypeScript%20Node-339933?style=for-the-badge&logo=Node.js&logoColor=white&link=https://github.com/Mearman/openalex-typescript-node)](https://github.com/Mearman/openalex-typescript-node)  [![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=Python&logoColor=white&link=https://github.com/Mearman/openalex-python)](https://github.com/Mearman/openalex-python) [![Open in](https://img.shields.io/badge/Open%20in-CodeSpaces-181717?style=for-the-badge&logo=GitHub&link=https://codespaces.new/Mearman/openalex-python)](https://codespaces.new/Mearman/openalex-python) [![Open in](https://img.shields.io/badge/Open%20in-Colab-F9AB00?style=for-the-badge&logo=Google%20Colab&link=https://colab.research.google.com/github/Mearman/openalex-python/blob/main/README.ipynb)](https://colab.research.google.com/github/Mearman/openalex-python/blob/main/README.ipynb)  ---
 *
 * The version of the OpenAPI document: 0.2.4
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { Apc } from './Apc';
import {
    ApcFromJSON,
    ApcFromJSONTyped,
    ApcToJSON,
} from './Apc';
import type { Ids } from './Ids';
import {
    IdsFromJSON,
    IdsFromJSONTyped,
    IdsToJSON,
} from './Ids';
import type { Location } from './Location';
import {
    LocationFromJSON,
    LocationFromJSONTyped,
    LocationToJSON,
} from './Location';
import type { WorkBiblio } from './WorkBiblio';
import {
    WorkBiblioFromJSON,
    WorkBiblioFromJSONTyped,
    WorkBiblioToJSON,
} from './WorkBiblio';
import type { WorkCitedByPercentileYear } from './WorkCitedByPercentileYear';
import {
    WorkCitedByPercentileYearFromJSON,
    WorkCitedByPercentileYearFromJSONTyped,
    WorkCitedByPercentileYearToJSON,
} from './WorkCitedByPercentileYear';
import type { WorkOpenAccess } from './WorkOpenAccess';
import {
    WorkOpenAccessFromJSON,
    WorkOpenAccessFromJSONTyped,
    WorkOpenAccessToJSON,
} from './WorkOpenAccess';

/**
 * 
 * @export
 * @interface Work
 */
export interface Work {
    /**
     * 
     * @type {any}
     * @memberof Work
     */
    abstractInvertedIndex?: any | null;
    /**
     * 
     * @type {Apc}
     * @memberof Work
     */
    apcList?: Apc;
    /**
     * 
     * @type {Apc}
     * @memberof Work
     */
    apcPaid?: Apc;
    /**
     * 
     * @type {any}
     * @memberof Work
     */
    authorships?: any | null;
    /**
     * 
     * @type {Location}
     * @memberof Work
     */
    bestOaLocation?: Location;
    /**
     * 
     * @type {WorkBiblio}
     * @memberof Work
     */
    biblio?: WorkBiblio;
    /**
     * 
     * @type {any}
     * @memberof Work
     */
    citedByApiUrl?: any | null;
    /**
     * 
     * @type {any}
     * @memberof Work
     */
    citedByCount?: any | null;
    /**
     * 
     * @type {WorkCitedByPercentileYear}
     * @memberof Work
     */
    citedByPercentileYear?: WorkCitedByPercentileYear;
    /**
     * 
     * @type {any}
     * @memberof Work
     */
    concepts?: any | null;
    /**
     * 
     * @type {any}
     * @memberof Work
     */
    correspondingAuthorIds?: any | null;
    /**
     * 
     * @type {any}
     * @memberof Work
     */
    correspondingInstitutionIds?: any | null;
    /**
     * 
     * @type {any}
     * @memberof Work
     */
    countriesDistinctCount?: any | null;
    /**
     * 
     * @type {any}
     * @memberof Work
     */
    countsByYear?: any | null;
    /**
     * 
     * @type {any}
     * @memberof Work
     */
    createdDate?: any | null;
    /**
     * 
     * @type {any}
     * @memberof Work
     */
    displayName: any | null;
    /**
     * 
     * @type {any}
     * @memberof Work
     */
    doi?: any | null;
    /**
     * 
     * @type {any}
     * @memberof Work
     */
    grants?: any | null;
    /**
     * 
     * @type {any}
     * @memberof Work
     */
    hasFulltext?: any | null;
    /**
     * 
     * @type {any}
     * @memberof Work
     */
    id: any | null;
    /**
     * 
     * @type {Ids}
     * @memberof Work
     */
    ids?: Ids;
    /**
     * 
     * @type {any}
     * @memberof Work
     */
    institutionsDistinctCount?: any | null;
    /**
     * 
     * @type {any}
     * @memberof Work
     */
    isParatext?: any | null;
    /**
     * 
     * @type {any}
     * @memberof Work
     */
    isRetracted?: any | null;
    /**
     * 
     * @type {any}
     * @memberof Work
     */
    keywords?: any | null;
    /**
     * 
     * @type {any}
     * @memberof Work
     */
    language?: any | null;
    /**
     * 
     * @type {any}
     * @memberof Work
     */
    locations?: any | null;
    /**
     * 
     * @type {any}
     * @memberof Work
     */
    locationsCount?: any | null;
    /**
     * 
     * @type {any}
     * @memberof Work
     */
    mesh?: any | null;
    /**
     * 
     * @type {any}
     * @memberof Work
     */
    ngramsUrl?: any | null;
    /**
     * 
     * @type {WorkOpenAccess}
     * @memberof Work
     */
    openAccess?: WorkOpenAccess;
    /**
     * 
     * @type {Location}
     * @memberof Work
     */
    primaryLocation?: Location;
    /**
     * 
     * @type {any}
     * @memberof Work
     */
    publicationDate?: any | null;
    /**
     * 
     * @type {any}
     * @memberof Work
     */
    publicationYear?: any | null;
    /**
     * 
     * @type {any}
     * @memberof Work
     */
    referencedWorks?: any | null;
    /**
     * 
     * @type {any}
     * @memberof Work
     */
    referencedWorksCount?: any | null;
    /**
     * 
     * @type {any}
     * @memberof Work
     */
    relatedWorks?: any | null;
    /**
     * 
     * @type {any}
     * @memberof Work
     */
    sustainableDevelopmentGoals?: any | null;
    /**
     * 
     * @type {any}
     * @memberof Work
     */
    title?: any | null;
    /**
     * 
     * @type {any}
     * @memberof Work
     */
    type?: any | null;
    /**
     * 
     * @type {any}
     * @memberof Work
     */
    typeCrossref?: any | null;
    /**
     * 
     * @type {any}
     * @memberof Work
     */
    updatedDate?: any | null;
}

/**
 * Check if a given object implements the Work interface.
 */
export function instanceOfWork(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "displayName" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function WorkFromJSON(json: any): Work {
    return WorkFromJSONTyped(json, false);
}

export function WorkFromJSONTyped(json: any, ignoreDiscriminator: boolean): Work {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'abstractInvertedIndex': !exists(json, 'abstract_inverted_index') ? undefined : json['abstract_inverted_index'],
        'apcList': !exists(json, 'apc_list') ? undefined : ApcFromJSON(json['apc_list']),
        'apcPaid': !exists(json, 'apc_paid') ? undefined : ApcFromJSON(json['apc_paid']),
        'authorships': !exists(json, 'authorships') ? undefined : json['authorships'],
        'bestOaLocation': !exists(json, 'best_oa_location') ? undefined : LocationFromJSON(json['best_oa_location']),
        'biblio': !exists(json, 'biblio') ? undefined : WorkBiblioFromJSON(json['biblio']),
        'citedByApiUrl': !exists(json, 'cited_by_api_url') ? undefined : json['cited_by_api_url'],
        'citedByCount': !exists(json, 'cited_by_count') ? undefined : json['cited_by_count'],
        'citedByPercentileYear': !exists(json, 'cited_by_percentile_year') ? undefined : WorkCitedByPercentileYearFromJSON(json['cited_by_percentile_year']),
        'concepts': !exists(json, 'concepts') ? undefined : json['concepts'],
        'correspondingAuthorIds': !exists(json, 'corresponding_author_ids') ? undefined : json['corresponding_author_ids'],
        'correspondingInstitutionIds': !exists(json, 'corresponding_institution_ids') ? undefined : json['corresponding_institution_ids'],
        'countriesDistinctCount': !exists(json, 'countries_distinct_count') ? undefined : json['countries_distinct_count'],
        'countsByYear': !exists(json, 'counts_by_year') ? undefined : json['counts_by_year'],
        'createdDate': !exists(json, 'created_date') ? undefined : json['created_date'],
        'displayName': json['display_name'],
        'doi': !exists(json, 'doi') ? undefined : json['doi'],
        'grants': !exists(json, 'grants') ? undefined : json['grants'],
        'hasFulltext': !exists(json, 'has_fulltext') ? undefined : json['has_fulltext'],
        'id': json['id'],
        'ids': !exists(json, 'ids') ? undefined : IdsFromJSON(json['ids']),
        'institutionsDistinctCount': !exists(json, 'institutions_distinct_count') ? undefined : json['institutions_distinct_count'],
        'isParatext': !exists(json, 'is_paratext') ? undefined : json['is_paratext'],
        'isRetracted': !exists(json, 'is_retracted') ? undefined : json['is_retracted'],
        'keywords': !exists(json, 'keywords') ? undefined : json['keywords'],
        'language': !exists(json, 'language') ? undefined : json['language'],
        'locations': !exists(json, 'locations') ? undefined : json['locations'],
        'locationsCount': !exists(json, 'locations_count') ? undefined : json['locations_count'],
        'mesh': !exists(json, 'mesh') ? undefined : json['mesh'],
        'ngramsUrl': !exists(json, 'ngrams_url') ? undefined : json['ngrams_url'],
        'openAccess': !exists(json, 'open_access') ? undefined : WorkOpenAccessFromJSON(json['open_access']),
        'primaryLocation': !exists(json, 'primary_location') ? undefined : LocationFromJSON(json['primary_location']),
        'publicationDate': !exists(json, 'publication_date') ? undefined : json['publication_date'],
        'publicationYear': !exists(json, 'publication_year') ? undefined : json['publication_year'],
        'referencedWorks': !exists(json, 'referenced_works') ? undefined : json['referenced_works'],
        'referencedWorksCount': !exists(json, 'referenced_works_count') ? undefined : json['referenced_works_count'],
        'relatedWorks': !exists(json, 'related_works') ? undefined : json['related_works'],
        'sustainableDevelopmentGoals': !exists(json, 'sustainable_development_goals') ? undefined : json['sustainable_development_goals'],
        'title': !exists(json, 'title') ? undefined : json['title'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'typeCrossref': !exists(json, 'type_crossref') ? undefined : json['type_crossref'],
        'updatedDate': !exists(json, 'updated_date') ? undefined : json['updated_date'],
    };
}

export function WorkToJSON(value?: Work | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'abstract_inverted_index': value.abstractInvertedIndex,
        'apc_list': ApcToJSON(value.apcList),
        'apc_paid': ApcToJSON(value.apcPaid),
        'authorships': value.authorships,
        'best_oa_location': LocationToJSON(value.bestOaLocation),
        'biblio': WorkBiblioToJSON(value.biblio),
        'cited_by_api_url': value.citedByApiUrl,
        'cited_by_count': value.citedByCount,
        'cited_by_percentile_year': WorkCitedByPercentileYearToJSON(value.citedByPercentileYear),
        'concepts': value.concepts,
        'corresponding_author_ids': value.correspondingAuthorIds,
        'corresponding_institution_ids': value.correspondingInstitutionIds,
        'countries_distinct_count': value.countriesDistinctCount,
        'counts_by_year': value.countsByYear,
        'created_date': value.createdDate,
        'display_name': value.displayName,
        'doi': value.doi,
        'grants': value.grants,
        'has_fulltext': value.hasFulltext,
        'id': value.id,
        'ids': IdsToJSON(value.ids),
        'institutions_distinct_count': value.institutionsDistinctCount,
        'is_paratext': value.isParatext,
        'is_retracted': value.isRetracted,
        'keywords': value.keywords,
        'language': value.language,
        'locations': value.locations,
        'locations_count': value.locationsCount,
        'mesh': value.mesh,
        'ngrams_url': value.ngramsUrl,
        'open_access': WorkOpenAccessToJSON(value.openAccess),
        'primary_location': LocationToJSON(value.primaryLocation),
        'publication_date': value.publicationDate,
        'publication_year': value.publicationYear,
        'referenced_works': value.referencedWorks,
        'referenced_works_count': value.referencedWorksCount,
        'related_works': value.relatedWorks,
        'sustainable_development_goals': value.sustainableDevelopmentGoals,
        'title': value.title,
        'type': value.type,
        'type_crossref': value.typeCrossref,
        'updated_date': value.updatedDate,
    };
}

