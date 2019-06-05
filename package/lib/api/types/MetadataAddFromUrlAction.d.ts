import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMetadata } from './KalturaMetadata';
import { KalturaMetadataObjectType } from './KalturaMetadataObjectType';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface MetadataAddFromUrlActionArgs extends KalturaRequestArgs {
    metadataProfileId: number;
    objectType: KalturaMetadataObjectType;
    objectId: string;
    url: string;
}
/**
 * Build request payload for service 'metadata' action 'addFromUrl'.
 *
 * Usage: Allows you to add a metadata xml data from remote URL
 *
 * Server response type:         KalturaMetadata
 * Server failure response type: KalturaAPIException
 */
export declare class MetadataAddFromUrlAction extends KalturaRequest<KalturaMetadata> {
    metadataProfileId: number;
    objectType: KalturaMetadataObjectType;
    objectId: string;
    url: string;
    constructor(data: MetadataAddFromUrlActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
