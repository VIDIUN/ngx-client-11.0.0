import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMetadata } from './KalturaMetadata';
import { KalturaMetadataObjectType } from './KalturaMetadataObjectType';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface MetadataAddFromBulkActionArgs extends KalturaRequestArgs {
    metadataProfileId: number;
    objectType: KalturaMetadataObjectType;
    objectId: string;
    url: string;
}
/**
 * Build request payload for service 'metadata' action 'addFromBulk'.
 *
 * Usage: Allows you to add a metadata xml data from remote URL.
 * Enables different permissions than addFromUrl action
 *
 * Server response type:         KalturaMetadata
 * Server failure response type: KalturaAPIException
 */
export declare class MetadataAddFromBulkAction extends KalturaRequest<KalturaMetadata> {
    metadataProfileId: number;
    objectType: KalturaMetadataObjectType;
    objectId: string;
    url: string;
    constructor(data: MetadataAddFromBulkActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
