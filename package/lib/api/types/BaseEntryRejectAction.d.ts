import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface BaseEntryRejectActionArgs extends KalturaRequestArgs {
    entryId: string;
}
/**
 * Build request payload for service 'baseEntry' action 'reject'.
 *
 * Usage: Reject the entry and mark the pending flags (if any) as moderated (this will make the entry non-playable)
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
export declare class BaseEntryRejectAction extends KalturaRequest<void> {
    entryId: string;
    constructor(data: BaseEntryRejectActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
