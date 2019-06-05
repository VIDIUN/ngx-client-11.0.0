import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUserFilter } from './KalturaUserFilter';
import { KalturaCsvAdditionalFieldInfo } from './KalturaCsvAdditionalFieldInfo';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface UserExportToCsvActionArgs extends KalturaRequestArgs {
    filter?: KalturaUserFilter;
    metadataProfileId?: number;
    additionalFields?: KalturaCsvAdditionalFieldInfo[];
}
/**
 * Build request payload for service 'user' action 'exportToCsv'.
 *
 * Usage: add batch job that sends an email with a link to download an updated CSV that contains list of users
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 */
export declare class UserExportToCsvAction extends KalturaRequest<string> {
    filter: KalturaUserFilter;
    metadataProfileId: number;
    additionalFields: KalturaCsvAdditionalFieldInfo[];
    constructor(data?: UserExportToCsvActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
