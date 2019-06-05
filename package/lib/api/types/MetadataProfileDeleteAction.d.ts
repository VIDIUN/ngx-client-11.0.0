import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface MetadataProfileDeleteActionArgs extends KalturaRequestArgs {
    id: number;
}
/**
 * Build request payload for service 'metadataProfile' action 'delete'.
 *
 * Usage: Delete an existing metadata profile
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
export declare class MetadataProfileDeleteAction extends KalturaRequest<void> {
    id: number;
    constructor(data: MetadataProfileDeleteActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
