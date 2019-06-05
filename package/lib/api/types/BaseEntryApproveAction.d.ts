import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface BaseEntryApproveActionArgs extends KalturaRequestArgs {
    entryId: string;
}
/**
 * Build request payload for service 'baseEntry' action 'approve'.
 *
 * Usage: Approve the entry and mark the pending flags (if any) as moderated (this will make the entry playable)
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
export declare class BaseEntryApproveAction extends KalturaRequest<void> {
    entryId: string;
    constructor(data: BaseEntryApproveActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}