import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMetadataProfile } from './KalturaMetadataProfile';
import { KalturaUploadRequest, KalturaUploadRequestArgs } from '../kaltura-upload-request';
export interface MetadataProfileAddFromFileActionArgs extends KalturaUploadRequestArgs {
    metadataProfile: KalturaMetadataProfile;
    xsdFile: File;
    viewsFile?: File;
}
/**
 * Build request payload for service 'metadataProfile' action 'addFromFile'.
 *
 * Usage: Allows you to add a metadata profile object and metadata profile file associated with Kaltura object type
 *
 * Server response type:         KalturaMetadataProfile
 * Server failure response type: KalturaAPIException
 */
export declare class MetadataProfileAddFromFileAction extends KalturaUploadRequest<KalturaMetadataProfile> {
    metadataProfile: KalturaMetadataProfile;
    xsdFile: File;
    viewsFile: File;
    constructor(data: MetadataProfileAddFromFileActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
