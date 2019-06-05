import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDataEntry } from './KalturaDataEntry';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface DataUpdateActionArgs extends KalturaRequestArgs {
    entryId: string;
    documentEntry: KalturaDataEntry;
}
/**
 * Build request payload for service 'data' action 'update'.
 *
 * Usage: Update data entry. Only the properties that were set will be updated
 *
 * Server response type:         KalturaDataEntry
 * Server failure response type: KalturaAPIException
 */
export declare class DataUpdateAction extends KalturaRequest<KalturaDataEntry> {
    entryId: string;
    documentEntry: KalturaDataEntry;
    constructor(data: DataUpdateActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
