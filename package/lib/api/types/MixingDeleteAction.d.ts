import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface MixingDeleteActionArgs extends KalturaRequestArgs {
    entryId: string;
}
/**
 * Build request payload for service 'mixing' action 'delete'.
 *
 * Usage: Delete a mix entry
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
export declare class MixingDeleteAction extends KalturaRequest<void> {
    entryId: string;
    constructor(data: MixingDeleteActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
