import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDataEntry } from './KalturaDataEntry';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface DataGetActionArgs extends KalturaRequestArgs {
    entryId: string;
    version?: number;
}
/**
 * Build request payload for service 'data' action 'get'.
 *
 * Usage: Get data entry by ID
 *
 * Server response type:         KalturaDataEntry
 * Server failure response type: KalturaAPIException
 */
export declare class DataGetAction extends KalturaRequest<KalturaDataEntry> {
    entryId: string;
    version: number;
    constructor(data: DataGetActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
