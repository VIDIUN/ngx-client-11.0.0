import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMetadata } from './KalturaMetadata';
import { KalturaMetadataObjectType } from './KalturaMetadataObjectType';
import { KalturaUploadRequest, KalturaUploadRequestArgs } from '../kaltura-upload-request';
export interface MetadataAddFromFileActionArgs extends KalturaUploadRequestArgs {
    metadataProfileId: number;
    objectType: KalturaMetadataObjectType;
    objectId: string;
    xmlFile: File;
}
/**
 * Build request payload for service 'metadata' action 'addFromFile'.
 *
 * Usage: Allows you to add a metadata object and metadata file associated with Kaltura object
 *
 * Server response type:         KalturaMetadata
 * Server failure response type: KalturaAPIException
 */
export declare class MetadataAddFromFileAction extends KalturaUploadRequest<KalturaMetadata> {
    metadataProfileId: number;
    objectType: KalturaMetadataObjectType;
    objectId: string;
    xmlFile: File;
    constructor(data: MetadataAddFromFileActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
