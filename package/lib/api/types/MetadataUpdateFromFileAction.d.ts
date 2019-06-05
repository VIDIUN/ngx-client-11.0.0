import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMetadata } from './KalturaMetadata';
import { KalturaUploadRequest, KalturaUploadRequestArgs } from '../kaltura-upload-request';
export interface MetadataUpdateFromFileActionArgs extends KalturaUploadRequestArgs {
    id: number;
    xmlFile?: File;
}
/**
 * Build request payload for service 'metadata' action 'updateFromFile'.
 *
 * Usage: Update an existing metadata object with new XML file
 *
 * Server response type:         KalturaMetadata
 * Server failure response type: KalturaAPIException
 */
export declare class MetadataUpdateFromFileAction extends KalturaUploadRequest<KalturaMetadata> {
    id: number;
    xmlFile: File;
    constructor(data: MetadataUpdateFromFileActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
