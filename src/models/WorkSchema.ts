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
import type { WorkGrantsInner } from './WorkGrantsInner';
import {
    WorkGrantsInnerFromJSON,
    WorkGrantsInnerFromJSONTyped,
    WorkGrantsInnerToJSON,
} from './WorkGrantsInner';
import type { DehydratedConceptArray } from './DehydratedConceptArray';
import {
    DehydratedConceptArrayFromJSON,
    DehydratedConceptArrayFromJSONTyped,
    DehydratedConceptArrayToJSON,
} from './DehydratedConceptArray';
import type { WorkSustainableDevelopmentGoalsInner } from './WorkSustainableDevelopmentGoalsInner';
import {
    WorkSustainableDevelopmentGoalsInnerFromJSON,
    WorkSustainableDevelopmentGoalsInnerFromJSONTyped,
    WorkSustainableDevelopmentGoalsInnerToJSON,
} from './WorkSustainableDevelopmentGoalsInner';
import type { Authorships } from './Authorships';
import {
    AuthorshipsFromJSON,
    AuthorshipsFromJSONTyped,
    AuthorshipsToJSON,
} from './Authorships';
import type { CountsByYear } from './CountsByYear';
import {
    CountsByYearFromJSON,
    CountsByYearFromJSONTyped,
    CountsByYearToJSON,
} from './CountsByYear';
import type { WorkOpenAccess } from './WorkOpenAccess';
import {
    WorkOpenAccessFromJSON,
    WorkOpenAccessFromJSONTyped,
    WorkOpenAccessToJSON,
} from './WorkOpenAccess';
import type { Apc } from './Apc';
import {
    ApcFromJSON,
    ApcFromJSONTyped,
    ApcToJSON,
} from './Apc';
import type { WorkKeywordsInner } from './WorkKeywordsInner';
import {
    WorkKeywordsInnerFromJSON,
    WorkKeywordsInnerFromJSONTyped,
    WorkKeywordsInnerToJSON,
} from './WorkKeywordsInner';
import type { WorkMeshInner } from './WorkMeshInner';
import {
    WorkMeshInnerFromJSON,
    WorkMeshInnerFromJSONTyped,
    WorkMeshInnerToJSON,
} from './WorkMeshInner';
import type { Ids } from './Ids';
import {
    IdsFromJSON,
    IdsFromJSONTyped,
    IdsToJSON,
} from './Ids';
import type { WorkCitedByPercentileYear } from './WorkCitedByPercentileYear';
import {
    WorkCitedByPercentileYearFromJSON,
    WorkCitedByPercentileYearFromJSONTyped,
    WorkCitedByPercentileYearToJSON,
} from './WorkCitedByPercentileYear';
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

/**
 * 
 * @export
 * @interface WorkSchema
 */
export interface WorkSchema {
    /**
     * 
     * @type {object}
     * @memberof WorkSchema
     */
    abstractInvertedIndex?: object;
    /**
     * 
     * @type {Apc}
     * @memberof WorkSchema
     */
    apcList?: Apc;
    /**
     * 
     * @type {Apc}
     * @memberof WorkSchema
     */
    apcPaid?: Apc;
    /**
     * 
     * @type {Authorships}
     * @memberof WorkSchema
     */
    authorships?: Authorships;
    /**
     * 
     * @type {Location}
     * @memberof WorkSchema
     */
    bestOaLocation?: Location;
    /**
     * 
     * @type {WorkBiblio}
     * @memberof WorkSchema
     */
    biblio?: WorkBiblio;
    /**
     * 
     * @type {string}
     * @memberof WorkSchema
     */
    citedByApiUrl?: string;
    /**
     * 
     * @type {number}
     * @memberof WorkSchema
     */
    citedByCount?: number;
    /**
     * 
     * @type {WorkCitedByPercentileYear}
     * @memberof WorkSchema
     */
    citedByPercentileYear?: WorkCitedByPercentileYear;
    /**
     * 
     * @type {DehydratedConceptArray}
     * @memberof WorkSchema
     */
    concepts?: DehydratedConceptArray;
    /**
     * 
     * @type {Array<string>}
     * @memberof WorkSchema
     */
    correspondingAuthorIds?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof WorkSchema
     */
    correspondingInstitutionIds?: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof WorkSchema
     */
    countriesDistinctCount?: number;
    /**
     * 
     * @type {CountsByYear}
     * @memberof WorkSchema
     */
    countsByYear?: CountsByYear;
    /**
     * 
     * @type {string}
     * @memberof WorkSchema
     */
    createdDate?: string;
    /**
     * 
     * @type {string}
     * @memberof WorkSchema
     */
    displayName: string;
    /**
     * 
     * @type {string}
     * @memberof WorkSchema
     */
    doi?: string;
    /**
     * 
     * @type {Array<WorkGrantsInner>}
     * @memberof WorkSchema
     */
    grants?: Array<WorkGrantsInner>;
    /**
     * 
     * @type {boolean}
     * @memberof WorkSchema
     */
    hasFulltext?: boolean;
    /**
     * 
     * @type {string}
     * @memberof WorkSchema
     */
    id: string;
    /**
     * 
     * @type {Ids}
     * @memberof WorkSchema
     */
    ids?: Ids;
    /**
     * 
     * @type {number}
     * @memberof WorkSchema
     */
    institutionsDistinctCount?: number;
    /**
     * 
     * @type {boolean}
     * @memberof WorkSchema
     */
    isParatext?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof WorkSchema
     */
    isRetracted?: boolean;
    /**
     * 
     * @type {Array<WorkKeywordsInner>}
     * @memberof WorkSchema
     */
    keywords?: Array<WorkKeywordsInner>;
    /**
     * 
     * @type {string}
     * @memberof WorkSchema
     */
    language?: string;
    /**
     * 
     * @type {Array<Location>}
     * @memberof WorkSchema
     */
    locations?: Array<Location>;
    /**
     * 
     * @type {number}
     * @memberof WorkSchema
     */
    locationsCount?: number;
    /**
     * 
     * @type {Array<WorkMeshInner>}
     * @memberof WorkSchema
     */
    mesh?: Array<WorkMeshInner>;
    /**
     * 
     * @type {string}
     * @memberof WorkSchema
     */
    ngramsUrl?: string;
    /**
     * 
     * @type {WorkOpenAccess}
     * @memberof WorkSchema
     */
    openAccess?: WorkOpenAccess;
    /**
     * 
     * @type {Location}
     * @memberof WorkSchema
     */
    primaryLocation?: Location;
    /**
     * 
     * @type {string}
     * @memberof WorkSchema
     */
    publicationDate?: string;
    /**
     * 
     * @type {number}
     * @memberof WorkSchema
     */
    publicationYear?: number;
    /**
     * 
     * @type {Array<string>}
     * @memberof WorkSchema
     */
    referencedWorks?: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof WorkSchema
     */
    referencedWorksCount?: number;
    /**
     * 
     * @type {Array<string>}
     * @memberof WorkSchema
     */
    relatedWorks?: Array<string>;
    /**
     * 
     * @type {Array<WorkSustainableDevelopmentGoalsInner>}
     * @memberof WorkSchema
     */
    sustainableDevelopmentGoals?: Array<WorkSustainableDevelopmentGoalsInner>;
    /**
     * 
     * @type {string}
     * @memberof WorkSchema
     */
    title?: string;
    /**
     * 
     * @type {string}
     * @memberof WorkSchema
     */
    type?: string;
    /**
     * 
     * @type {string}
     * @memberof WorkSchema
     */
    typeCrossref?: string;
    /**
     * 
     * @type {string}
     * @memberof WorkSchema
     */
    updatedDate?: string;
}

/**
 * Check if a given object implements the WorkSchema interface.
 */
export function instanceOfWorkSchema(value: object): value is WorkSchema {
    if (!('displayName' in value) || value['displayName'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function WorkSchemaFromJSON(json: any): WorkSchema {
    return WorkSchemaFromJSONTyped(json, false);
}

export function WorkSchemaFromJSONTyped(json: any, ignoreDiscriminator: boolean): WorkSchema {
    if (json == null) {
        return json;
    }
    return {
        
        'abstractInvertedIndex': json['abstract_inverted_index'] == null ? undefined : json['abstract_inverted_index'],
        'apcList': json['apc_list'] == null ? undefined : ApcFromJSON(json['apc_list']),
        'apcPaid': json['apc_paid'] == null ? undefined : ApcFromJSON(json['apc_paid']),
        'authorships': json['authorships'] == null ? undefined : AuthorshipsFromJSON(json['authorships']),
        'bestOaLocation': json['best_oa_location'] == null ? undefined : LocationFromJSON(json['best_oa_location']),
        'biblio': json['biblio'] == null ? undefined : WorkBiblioFromJSON(json['biblio']),
        'citedByApiUrl': json['cited_by_api_url'] == null ? undefined : json['cited_by_api_url'],
        'citedByCount': json['cited_by_count'] == null ? undefined : json['cited_by_count'],
        'citedByPercentileYear': json['cited_by_percentile_year'] == null ? undefined : WorkCitedByPercentileYearFromJSON(json['cited_by_percentile_year']),
        'concepts': json['concepts'] == null ? undefined : DehydratedConceptArrayFromJSON(json['concepts']),
        'correspondingAuthorIds': json['corresponding_author_ids'] == null ? undefined : json['corresponding_author_ids'],
        'correspondingInstitutionIds': json['corresponding_institution_ids'] == null ? undefined : json['corresponding_institution_ids'],
        'countriesDistinctCount': json['countries_distinct_count'] == null ? undefined : json['countries_distinct_count'],
        'countsByYear': json['counts_by_year'] == null ? undefined : CountsByYearFromJSON(json['counts_by_year']),
        'createdDate': json['created_date'] == null ? undefined : json['created_date'],
        'displayName': json['display_name'],
        'doi': json['doi'] == null ? undefined : json['doi'],
        'grants': json['grants'] == null ? undefined : ((json['grants'] as Array<any>).map(WorkGrantsInnerFromJSON)),
        'hasFulltext': json['has_fulltext'] == null ? undefined : json['has_fulltext'],
        'id': json['id'],
        'ids': json['ids'] == null ? undefined : IdsFromJSON(json['ids']),
        'institutionsDistinctCount': json['institutions_distinct_count'] == null ? undefined : json['institutions_distinct_count'],
        'isParatext': json['is_paratext'] == null ? undefined : json['is_paratext'],
        'isRetracted': json['is_retracted'] == null ? undefined : json['is_retracted'],
        'keywords': json['keywords'] == null ? undefined : ((json['keywords'] as Array<any>).map(WorkKeywordsInnerFromJSON)),
        'language': json['language'] == null ? undefined : json['language'],
        'locations': json['locations'] == null ? undefined : ((json['locations'] as Array<any>).map(LocationFromJSON)),
        'locationsCount': json['locations_count'] == null ? undefined : json['locations_count'],
        'mesh': json['mesh'] == null ? undefined : ((json['mesh'] as Array<any>).map(WorkMeshInnerFromJSON)),
        'ngramsUrl': json['ngrams_url'] == null ? undefined : json['ngrams_url'],
        'openAccess': json['open_access'] == null ? undefined : WorkOpenAccessFromJSON(json['open_access']),
        'primaryLocation': json['primary_location'] == null ? undefined : LocationFromJSON(json['primary_location']),
        'publicationDate': json['publication_date'] == null ? undefined : json['publication_date'],
        'publicationYear': json['publication_year'] == null ? undefined : json['publication_year'],
        'referencedWorks': json['referenced_works'] == null ? undefined : json['referenced_works'],
        'referencedWorksCount': json['referenced_works_count'] == null ? undefined : json['referenced_works_count'],
        'relatedWorks': json['related_works'] == null ? undefined : json['related_works'],
        'sustainableDevelopmentGoals': json['sustainable_development_goals'] == null ? undefined : ((json['sustainable_development_goals'] as Array<any>).map(WorkSustainableDevelopmentGoalsInnerFromJSON)),
        'title': json['title'] == null ? undefined : json['title'],
        'type': json['type'] == null ? undefined : json['type'],
        'typeCrossref': json['type_crossref'] == null ? undefined : json['type_crossref'],
        'updatedDate': json['updated_date'] == null ? undefined : json['updated_date'],
    };
}

export function WorkSchemaToJSON(value?: WorkSchema | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'abstract_inverted_index': value['abstractInvertedIndex'],
        'apc_list': ApcToJSON(value['apcList']),
        'apc_paid': ApcToJSON(value['apcPaid']),
        'authorships': AuthorshipsToJSON(value['authorships']),
        'best_oa_location': LocationToJSON(value['bestOaLocation']),
        'biblio': WorkBiblioToJSON(value['biblio']),
        'cited_by_api_url': value['citedByApiUrl'],
        'cited_by_count': value['citedByCount'],
        'cited_by_percentile_year': WorkCitedByPercentileYearToJSON(value['citedByPercentileYear']),
        'concepts': DehydratedConceptArrayToJSON(value['concepts']),
        'corresponding_author_ids': value['correspondingAuthorIds'],
        'corresponding_institution_ids': value['correspondingInstitutionIds'],
        'countries_distinct_count': value['countriesDistinctCount'],
        'counts_by_year': CountsByYearToJSON(value['countsByYear']),
        'created_date': value['createdDate'],
        'display_name': value['displayName'],
        'doi': value['doi'],
        'grants': value['grants'] == null ? undefined : ((value['grants'] as Array<any>).map(WorkGrantsInnerToJSON)),
        'has_fulltext': value['hasFulltext'],
        'id': value['id'],
        'ids': IdsToJSON(value['ids']),
        'institutions_distinct_count': value['institutionsDistinctCount'],
        'is_paratext': value['isParatext'],
        'is_retracted': value['isRetracted'],
        'keywords': value['keywords'] == null ? undefined : ((value['keywords'] as Array<any>).map(WorkKeywordsInnerToJSON)),
        'language': value['language'],
        'locations': value['locations'] == null ? undefined : ((value['locations'] as Array<any>).map(LocationToJSON)),
        'locations_count': value['locationsCount'],
        'mesh': value['mesh'] == null ? undefined : ((value['mesh'] as Array<any>).map(WorkMeshInnerToJSON)),
        'ngrams_url': value['ngramsUrl'],
        'open_access': WorkOpenAccessToJSON(value['openAccess']),
        'primary_location': LocationToJSON(value['primaryLocation']),
        'publication_date': value['publicationDate'],
        'publication_year': value['publicationYear'],
        'referenced_works': value['referencedWorks'],
        'referenced_works_count': value['referencedWorksCount'],
        'related_works': value['relatedWorks'],
        'sustainable_development_goals': value['sustainableDevelopmentGoals'] == null ? undefined : ((value['sustainableDevelopmentGoals'] as Array<any>).map(WorkSustainableDevelopmentGoalsInnerToJSON)),
        'title': value['title'],
        'type': value['type'],
        'type_crossref': value['typeCrossref'],
        'updated_date': value['updatedDate'],
    };
}

