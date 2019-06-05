import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMetadataProfile } from './KalturaMetadataProfile';
import { KalturaUploadRequest, KalturaUploadRequestArgs } from '../kaltura-upload-request';
export interface MetadataProfileUpdateTransformationFromFileActionArgs extends KalturaUploadRequestArgs {
    id: number;
    xsltFile: File;
}
/**
 * Build request payload for service 'metadataProfile' action 'updateTransformationFromFile'.
 *
 * Usage: Update an existing metadata object xslt file
 *
 * Server response type:         KalturaMetadataProfile
 * Server failure response type: KalturaAPIException
 */
export declare class MetadataProfileUpdateTransformationFromFileAction extends KalturaUploadRequest<KalturaMetadataProfile> {
    id: number;
    xsltFile: File;
    constructor(data: MetadataProfileUpdateTransformationFromFileActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}