import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface MetadataInvalidateActionArgs extends KalturaRequestArgs {
    id: number;
    version?: number;
}
/**
 * Build request payload for service 'metadata' action 'invalidate'.
 *
 * Usage: Mark existing metadata as invalid
 * Used by batch metadata transform
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
export declare class MetadataInvalidateAction extends KalturaRequest<void> {
    id: number;
    version: number;
    constructor(data: MetadataInvalidateActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}