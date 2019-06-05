import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface MetadataDeleteActionArgs extends KalturaRequestArgs {
    id: number;
}
/**
 * Build request payload for service 'metadata' action 'delete'.
 *
 * Usage: Delete an existing metadata
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
export declare class MetadataDeleteAction extends KalturaRequest<void> {
    id: number;
    constructor(data: MetadataDeleteActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
