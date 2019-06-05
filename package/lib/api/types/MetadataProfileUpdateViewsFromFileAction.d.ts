import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMetadataProfile } from './KalturaMetadataProfile';
import { KalturaUploadRequest, KalturaUploadRequestArgs } from '../kaltura-upload-request';
export interface MetadataProfileUpdateViewsFromFileActionArgs extends KalturaUploadRequestArgs {
    id: number;
    viewsFile: File;
}
/**
 * Build request payload for service 'metadataProfile' action 'updateViewsFromFile'.
 *
 * Usage: Update an existing metadata object views file
 *
 * Server response type:         KalturaMetadataProfile
 * Server failure response type: KalturaAPIException
 */
export declare class MetadataProfileUpdateViewsFromFileAction extends KalturaUploadRequest<KalturaMetadataProfile> {
    id: number;
    viewsFile: File;
    constructor(data: MetadataProfileUpdateViewsFromFileActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
