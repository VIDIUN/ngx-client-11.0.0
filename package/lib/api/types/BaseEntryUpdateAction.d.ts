import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBaseEntry } from './KalturaBaseEntry';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface BaseEntryUpdateActionArgs extends KalturaRequestArgs {
    entryId: string;
    baseEntry: KalturaBaseEntry;
}
/**
 * Build request payload for service 'baseEntry' action 'update'.
 *
 * Usage: Update base entry. Only the properties that were set will be updated
 *
 * Server response type:         KalturaBaseEntry
 * Server failure response type: KalturaAPIException
 */
export declare class BaseEntryUpdateAction extends KalturaRequest<KalturaBaseEntry> {
    entryId: string;
    baseEntry: KalturaBaseEntry;
    constructor(data: BaseEntryUpdateActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
