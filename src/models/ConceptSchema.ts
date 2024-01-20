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

import { exists, mapValues } from '../runtime';
import type { ConceptIds } from './ConceptIds';
import {
    ConceptIdsFromJSON,
    ConceptIdsFromJSONTyped,
    ConceptIdsToJSON,
} from './ConceptIds';
import type { InternationalDisplayNameAndDescription } from './InternationalDisplayNameAndDescription';
import {
    InternationalDisplayNameAndDescriptionFromJSON,
    InternationalDisplayNameAndDescriptionFromJSONTyped,
    InternationalDisplayNameAndDescriptionToJSON,
} from './InternationalDisplayNameAndDescription';
import type { SummaryStats } from './SummaryStats';
import {
    SummaryStatsFromJSON,
    SummaryStatsFromJSONTyped,
    SummaryStatsToJSON,
} from './SummaryStats';

/**
 * 
 * @export
 * @interface ConceptSchema
 */
export interface ConceptSchema {
    /**
     * 
     * @type {any}
     * @memberof ConceptSchema
     */
    ancestors?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ConceptSchema
     */
    citedByCount?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ConceptSchema
     */
    countsByYear?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ConceptSchema
     */
    createdDate?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ConceptSchema
     */
    description?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ConceptSchema
     */
    displayName: any | null;
    /**
     * 
     * @type {any}
     * @memberof ConceptSchema
     */
    id: any | null;
    /**
     * 
     * @type {ConceptIds}
     * @memberof ConceptSchema
     */
    ids?: ConceptIds;
    /**
     * 
     * @type {any}
     * @memberof ConceptSchema
     */
    imageThumbnailUrl?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ConceptSchema
     */
    imageUrl?: any | null;
    /**
     * 
     * @type {InternationalDisplayNameAndDescription}
     * @memberof ConceptSchema
     */
    international?: InternationalDisplayNameAndDescription;
    /**
     * 
     * @type {any}
     * @memberof ConceptSchema
     */
    level?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ConceptSchema
     */
    relatedConcepts?: any | null;
    /**
     * 
     * @type {SummaryStats}
     * @memberof ConceptSchema
     */
    summaryStats?: SummaryStats;
    /**
     * 
     * @type {any}
     * @memberof ConceptSchema
     */
    updatedDate?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ConceptSchema
     */
    wikidata?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ConceptSchema
     */
    worksApiUrl?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ConceptSchema
     */
    worksCount?: any | null;
}

/**
 * Check if a given object implements the ConceptSchema interface.
 */
export function instanceOfConceptSchema(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "displayName" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function ConceptSchemaFromJSON(json: any): ConceptSchema {
    return ConceptSchemaFromJSONTyped(json, false);
}

export function ConceptSchemaFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConceptSchema {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'ancestors': !exists(json, 'ancestors') ? undefined : json['ancestors'],
        'citedByCount': !exists(json, 'cited_by_count') ? undefined : json['cited_by_count'],
        'countsByYear': !exists(json, 'counts_by_year') ? undefined : json['counts_by_year'],
        'createdDate': !exists(json, 'created_date') ? undefined : json['created_date'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'displayName': json['display_name'],
        'id': json['id'],
        'ids': !exists(json, 'ids') ? undefined : ConceptIdsFromJSON(json['ids']),
        'imageThumbnailUrl': !exists(json, 'image_thumbnail_url') ? undefined : json['image_thumbnail_url'],
        'imageUrl': !exists(json, 'image_url') ? undefined : json['image_url'],
        'international': !exists(json, 'international') ? undefined : InternationalDisplayNameAndDescriptionFromJSON(json['international']),
        'level': !exists(json, 'level') ? undefined : json['level'],
        'relatedConcepts': !exists(json, 'related_concepts') ? undefined : json['related_concepts'],
        'summaryStats': !exists(json, 'summary_stats') ? undefined : SummaryStatsFromJSON(json['summary_stats']),
        'updatedDate': !exists(json, 'updated_date') ? undefined : json['updated_date'],
        'wikidata': !exists(json, 'wikidata') ? undefined : json['wikidata'],
        'worksApiUrl': !exists(json, 'works_api_url') ? undefined : json['works_api_url'],
        'worksCount': !exists(json, 'works_count') ? undefined : json['works_count'],
    };
}

export function ConceptSchemaToJSON(value?: ConceptSchema | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'ancestors': value.ancestors,
        'cited_by_count': value.citedByCount,
        'counts_by_year': value.countsByYear,
        'created_date': value.createdDate,
        'description': value.description,
        'display_name': value.displayName,
        'id': value.id,
        'ids': ConceptIdsToJSON(value.ids),
        'image_thumbnail_url': value.imageThumbnailUrl,
        'image_url': value.imageUrl,
        'international': InternationalDisplayNameAndDescriptionToJSON(value.international),
        'level': value.level,
        'related_concepts': value.relatedConcepts,
        'summary_stats': SummaryStatsToJSON(value.summaryStats),
        'updated_date': value.updatedDate,
        'wikidata': value.wikidata,
        'works_api_url': value.worksApiUrl,
        'works_count': value.worksCount,
    };
}
