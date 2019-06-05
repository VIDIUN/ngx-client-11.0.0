import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBaseEntry } from './KalturaBaseEntry';
import { KalturaBaseEntryCloneOptionItem } from './KalturaBaseEntryCloneOptionItem';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface BaseEntryCloneActionArgs extends KalturaRequestArgs {
    entryId: string;
    cloneOptions?: KalturaBaseEntryCloneOptionItem[];
}
/**
 * Build request payload for service 'baseEntry' action 'clone'.
 *
 * Usage: Clone an entry with optional attributes to apply to the clone
 *
 * Server response type:         KalturaBaseEntry
 * Server failure response type: KalturaAPIException
 */
export declare class BaseEntryCloneAction extends KalturaRequest<KalturaBaseEntry> {
    entryId: string;
    cloneOptions: KalturaBaseEntryCloneOptionItem[];
    constructor(data: BaseEntryCloneActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}