import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBaseEntry } from './KalturaBaseEntry';
import { KalturaEntryType } from './KalturaEntryType';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface BaseEntryAddActionArgs extends KalturaRequestArgs {
    entry: KalturaBaseEntry;
    type?: KalturaEntryType;
}
/**
 * Build request payload for service 'baseEntry' action 'add'.
 *
 * Usage: Generic add entry, should be used when the uploaded entry type is not known
 *
 * Server response type:         KalturaBaseEntry
 * Server failure response type: KalturaAPIException
 */
export declare class BaseEntryAddAction extends KalturaRequest<KalturaBaseEntry> {
    entry: KalturaBaseEntry;
    type: KalturaEntryType;
    constructor(data: BaseEntryAddActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
