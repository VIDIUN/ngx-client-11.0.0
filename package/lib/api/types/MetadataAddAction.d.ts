import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMetadata } from './KalturaMetadata';
import { KalturaMetadataObjectType } from './KalturaMetadataObjectType';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface MetadataAddActionArgs extends KalturaRequestArgs {
    metadataProfileId: number;
    objectType: KalturaMetadataObjectType;
    objectId: string;
    xmlData: string;
}
/**
 * Build request payload for service 'metadata' action 'add'.
 *
 * Usage: Allows you to add a metadata object and metadata content associated with Kaltura object
 *
 * Server response type:         KalturaMetadata
 * Server failure response type: KalturaAPIException
 */
export declare class MetadataAddAction extends KalturaRequest<KalturaMetadata> {
    metadataProfileId: number;
    objectType: KalturaMetadataObjectType;
    objectId: string;
    xmlData: string;
    constructor(data: MetadataAddActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
