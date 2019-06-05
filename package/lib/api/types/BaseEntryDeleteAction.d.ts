import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface BaseEntryDeleteActionArgs extends KalturaRequestArgs {
    entryId: string;
}
/**
 * Build request payload for service 'baseEntry' action 'delete'.
 *
 * Usage: Delete an entry
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
export declare class BaseEntryDeleteAction extends KalturaRequest<void> {
    entryId: string;
    constructor(data: BaseEntryDeleteActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
