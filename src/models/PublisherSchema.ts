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
import type { PublisherParentPublisher } from './PublisherParentPublisher';
import {
    PublisherParentPublisherFromJSON,
    PublisherParentPublisherFromJSONTyped,
    PublisherParentPublisherToJSON,
} from './PublisherParentPublisher';
import type { SummaryStats } from './SummaryStats';
import {
    SummaryStatsFromJSON,
    SummaryStatsFromJSONTyped,
    SummaryStatsToJSON,
} from './SummaryStats';

/**
 * 
 * @export
 * @interface PublisherSchema
 */
export interface PublisherSchema {
    /**
     * 
     * @type {any}
     * @memberof PublisherSchema
     */
    alternateTitles?: any | null;
    /**
     * 
     * @type {any}
     * @memberof PublisherSchema
     */
    citedByCount?: any | null;
    /**
     * 
     * @type {any}
     * @memberof PublisherSchema
     */
    countryCodes?: any | null;
    /**
     * 
     * @type {any}
     * @memberof PublisherSchema
     */
    countsByYear?: any | null;
    /**
     * 
     * @type {any}
     * @memberof PublisherSchema
     */
    createdDate?: any | null;
    /**
     * 
     * @type {any}
     * @memberof PublisherSchema
     */
    displayName: any | null;
    /**
     * 
     * @type {any}
     * @memberof PublisherSchema
     */
    hierarchyLevel?: any | null;
    /**
     * 
     * @type {any}
     * @memberof PublisherSchema
     */
    homepageUrl?: any | null;
    /**
     * 
     * @type {any}
     * @memberof PublisherSchema
     */
    id: any | null;
    /**
     * 
     * @type {Ids}
     * @memberof PublisherSchema
     */
    ids?: Ids;
    /**
     * 
     * @type {any}
     * @memberof PublisherSchema
     */
    imageThumbnailUrl?: any | null;
    /**
     * 
     * @type {any}
     * @memberof PublisherSchema
     */
    imageUrl?: any | null;
    /**
     * 
     * @type {any}
     * @memberof PublisherSchema
     */
    lineage?: any | null;
    /**
     * 
     * @type {PublisherParentPublisher}
     * @memberof PublisherSchema
     */
    parentPublisher?: PublisherParentPublisher;
    /**
     * 
     * @type {any}
     * @memberof PublisherSchema
     */
    roles?: any | null;
    /**
     * 
     * @type {any}
     * @memberof PublisherSchema
     */
    sourcesApiUrl?: any | null;
    /**
     * 
     * @type {SummaryStats}
     * @memberof PublisherSchema
     */
    summaryStats?: SummaryStats;
    /**
     * 
     * @type {any}
     * @memberof PublisherSchema
     */
    updatedDate?: any | null;
    /**
     * 
     * @type {any}
     * @memberof PublisherSchema
     */
    worksCount?: any | null;
}

/**
 * Check if a given object implements the PublisherSchema interface.
 */
export function instanceOfPublisherSchema(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "displayName" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function PublisherSchemaFromJSON(json: any): PublisherSchema {
    return PublisherSchemaFromJSONTyped(json, false);
}

export function PublisherSchemaFromJSONTyped(json: any, ignoreDiscriminator: boolean): PublisherSchema {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'alternateTitles': !exists(json, 'alternate_titles') ? undefined : json['alternate_titles'],
        'citedByCount': !exists(json, 'cited_by_count') ? undefined : json['cited_by_count'],
        'countryCodes': !exists(json, 'country_codes') ? undefined : json['country_codes'],
        'countsByYear': !exists(json, 'counts_by_year') ? undefined : json['counts_by_year'],
        'createdDate': !exists(json, 'created_date') ? undefined : json['created_date'],
        'displayName': json['display_name'],
        'hierarchyLevel': !exists(json, 'hierarchy_level') ? undefined : json['hierarchy_level'],
        'homepageUrl': !exists(json, 'homepage_url') ? undefined : json['homepage_url'],
        'id': json['id'],
        'ids': !exists(json, 'ids') ? undefined : IdsFromJSON(json['ids']),
        'imageThumbnailUrl': !exists(json, 'image_thumbnail_url') ? undefined : json['image_thumbnail_url'],
        'imageUrl': !exists(json, 'image_url') ? undefined : json['image_url'],
        'lineage': !exists(json, 'lineage') ? undefined : json['lineage'],
        'parentPublisher': !exists(json, 'parent_publisher') ? undefined : PublisherParentPublisherFromJSON(json['parent_publisher']),
        'roles': !exists(json, 'roles') ? undefined : json['roles'],
        'sourcesApiUrl': !exists(json, 'sources_api_url') ? undefined : json['sources_api_url'],
        'summaryStats': !exists(json, 'summary_stats') ? undefined : SummaryStatsFromJSON(json['summary_stats']),
        'updatedDate': !exists(json, 'updated_date') ? undefined : json['updated_date'],
        'worksCount': !exists(json, 'works_count') ? undefined : json['works_count'],
    };
}

export function PublisherSchemaToJSON(value?: PublisherSchema | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'alternate_titles': value.alternateTitles,
        'cited_by_count': value.citedByCount,
        'country_codes': value.countryCodes,
        'counts_by_year': value.countsByYear,
        'created_date': value.createdDate,
        'display_name': value.displayName,
        'hierarchy_level': value.hierarchyLevel,
        'homepage_url': value.homepageUrl,
        'id': value.id,
        'ids': IdsToJSON(value.ids),
        'image_thumbnail_url': value.imageThumbnailUrl,
        'image_url': value.imageUrl,
        'lineage': value.lineage,
        'parent_publisher': PublisherParentPublisherToJSON(value.parentPublisher),
        'roles': value.roles,
        'sources_api_url': value.sourcesApiUrl,
        'summary_stats': SummaryStatsToJSON(value.summaryStats),
        'updated_date': value.updatedDate,
        'works_count': value.worksCount,
    };
}

