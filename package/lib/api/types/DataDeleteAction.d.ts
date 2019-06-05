import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface DataDeleteActionArgs extends KalturaRequestArgs {
    entryId: string;
}
/**
 * Build request payload for service 'data' action 'delete'.
 *
 * Usage: Delete a data entry
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
export declare class DataDeleteAction extends KalturaRequest<void> {
    entryId: string;
    constructor(data: DataDeleteActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}