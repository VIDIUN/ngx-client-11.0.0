import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMetadataProfile } from './KalturaMetadataProfile';
import { KalturaUploadRequest, KalturaUploadRequestArgs } from '../kaltura-upload-request';
export interface MetadataProfileUpdateDefinitionFromFileActionArgs extends KalturaUploadRequestArgs {
    id: number;
    xsdFile: File;
}
/**
 * Build request payload for service 'metadataProfile' action 'updateDefinitionFromFile'.
 *
 * Usage: Update an existing metadata object definition file
 *
 * Server response type:         KalturaMetadataProfile
 * Server failure response type: KalturaAPIException
 */
export declare class MetadataProfileUpdateDefinitionFromFileAction extends KalturaUploadRequest<KalturaMetadataProfile> {
    id: number;
    xsdFile: File;
    constructor(data: MetadataProfileUpdateDefinitionFromFileActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
