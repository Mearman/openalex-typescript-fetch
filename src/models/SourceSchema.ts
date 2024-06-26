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
import type { ApcPrices } from './ApcPrices';
import {
    ApcPricesFromJSON,
    ApcPricesFromJSONTyped,
    ApcPricesToJSON,
} from './ApcPrices';
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
 * @interface SourceSchema
 */
export interface SourceSchema {
    /**
     * 
     * @type {any}
     * @memberof SourceSchema
     */
    abbreviatedTitle?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SourceSchema
     */
    alternateTitles?: any | null;
    /**
     * 
     * @type {ApcPrices}
     * @memberof SourceSchema
     */
    apcPrices?: ApcPrices;
    /**
     * 
     * @type {any}
     * @memberof SourceSchema
     */
    apcUsd?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SourceSchema
     */
    citedByCount?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SourceSchema
     */
    countryCode?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SourceSchema
     */
    countsByYear?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SourceSchema
     */
    createdDate?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SourceSchema
     */
    displayName: any | null;
    /**
     * 
     * @type {any}
     * @memberof SourceSchema
     */
    homepageUrl?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SourceSchema
     */
    hostOrganization?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SourceSchema
     */
    hostOrganizationLineage?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SourceSchema
     */
    hostOrganizationName?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SourceSchema
     */
    id: any | null;
    /**
     * 
     * @type {Ids}
     * @memberof SourceSchema
     */
    ids?: Ids;
    /**
     * 
     * @type {any}
     * @memberof SourceSchema
     */
    isInDoaj?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SourceSchema
     */
    isOa?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SourceSchema
     */
    issn?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SourceSchema
     */
    issnL?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SourceSchema
     */
    societies?: any | null;
    /**
     * 
     * @type {SummaryStats}
     * @memberof SourceSchema
     */
    summaryStats?: SummaryStats;
    /**
     * 
     * @type {any}
     * @memberof SourceSchema
     */
    type?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SourceSchema
     */
    updatedDate?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SourceSchema
     */
    worksApiUrl?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SourceSchema
     */
    worksCount?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SourceSchema
     */
    xConcepts?: any | null;
}

/**
 * Check if a given object implements the SourceSchema interface.
 */
export function instanceOfSourceSchema(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "displayName" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function SourceSchemaFromJSON(json: any): SourceSchema {
    return SourceSchemaFromJSONTyped(json, false);
}

export function SourceSchemaFromJSONTyped(json: any, ignoreDiscriminator: boolean): SourceSchema {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'abbreviatedTitle': !exists(json, 'abbreviated_title') ? undefined : json['abbreviated_title'],
        'alternateTitles': !exists(json, 'alternate_titles') ? undefined : json['alternate_titles'],
        'apcPrices': !exists(json, 'apc_prices') ? undefined : ApcPricesFromJSON(json['apc_prices']),
        'apcUsd': !exists(json, 'apc_usd') ? undefined : json['apc_usd'],
        'citedByCount': !exists(json, 'cited_by_count') ? undefined : json['cited_by_count'],
        'countryCode': !exists(json, 'country_code') ? undefined : json['country_code'],
        'countsByYear': !exists(json, 'counts_by_year') ? undefined : json['counts_by_year'],
        'createdDate': !exists(json, 'created_date') ? undefined : json['created_date'],
        'displayName': json['display_name'],
        'homepageUrl': !exists(json, 'homepage_url') ? undefined : json['homepage_url'],
        'hostOrganization': !exists(json, 'host_organization') ? undefined : json['host_organization'],
        'hostOrganizationLineage': !exists(json, 'host_organization_lineage') ? undefined : json['host_organization_lineage'],
        'hostOrganizationName': !exists(json, 'host_organization_name') ? undefined : json['host_organization_name'],
        'id': json['id'],
        'ids': !exists(json, 'ids') ? undefined : IdsFromJSON(json['ids']),
        'isInDoaj': !exists(json, 'is_in_doaj') ? undefined : json['is_in_doaj'],
        'isOa': !exists(json, 'is_oa') ? undefined : json['is_oa'],
        'issn': !exists(json, 'issn') ? undefined : json['issn'],
        'issnL': !exists(json, 'issn_l') ? undefined : json['issn_l'],
        'societies': !exists(json, 'societies') ? undefined : json['societies'],
        'summaryStats': !exists(json, 'summary_stats') ? undefined : SummaryStatsFromJSON(json['summary_stats']),
        'type': !exists(json, 'type') ? undefined : json['type'],
        'updatedDate': !exists(json, 'updated_date') ? undefined : json['updated_date'],
        'worksApiUrl': !exists(json, 'works_api_url') ? undefined : json['works_api_url'],
        'worksCount': !exists(json, 'works_count') ? undefined : json['works_count'],
        'xConcepts': !exists(json, 'x_concepts') ? undefined : json['x_concepts'],
    };
}

export function SourceSchemaToJSON(value?: SourceSchema | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'abbreviated_title': value.abbreviatedTitle,
        'alternate_titles': value.alternateTitles,
        'apc_prices': ApcPricesToJSON(value.apcPrices),
        'apc_usd': value.apcUsd,
        'cited_by_count': value.citedByCount,
        'country_code': value.countryCode,
        'counts_by_year': value.countsByYear,
        'created_date': value.createdDate,
        'display_name': value.displayName,
        'homepage_url': value.homepageUrl,
        'host_organization': value.hostOrganization,
        'host_organization_lineage': value.hostOrganizationLineage,
        'host_organization_name': value.hostOrganizationName,
        'id': value.id,
        'ids': IdsToJSON(value.ids),
        'is_in_doaj': value.isInDoaj,
        'is_oa': value.isOa,
        'issn': value.issn,
        'issn_l': value.issnL,
        'societies': value.societies,
        'summary_stats': SummaryStatsToJSON(value.summaryStats),
        'type': value.type,
        'updated_date': value.updatedDate,
        'works_api_url': value.worksApiUrl,
        'works_count': value.worksCount,
        'x_concepts': value.xConcepts,
    };
}

