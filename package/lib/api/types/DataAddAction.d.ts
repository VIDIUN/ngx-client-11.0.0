import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDataEntry } from './KalturaDataEntry';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface DataAddActionArgs extends KalturaRequestArgs {
    dataEntry: KalturaDataEntry;
}
/**
 * Build request payload for service 'data' action 'add'.
 *
 * Usage: Adds a new data entry
 *
 * Server response type:         KalturaDataEntry
 * Server failure response type: KalturaAPIException
 */
export declare class DataAddAction extends KalturaRequest<KalturaDataEntry> {
    dataEntry: KalturaDataEntry;
    constructor(data: DataAddActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
