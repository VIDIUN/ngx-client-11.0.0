import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMetadata } from './KalturaMetadata';
import { KalturaUploadRequest, KalturaUploadRequestArgs } from '../kaltura-upload-request';
export interface MetadataUpdateFromXSLActionArgs extends KalturaUploadRequestArgs {
    id: number;
    xslFile: File;
}
/**
 * Build request payload for service 'metadata' action 'updateFromXSL'.
 *
 * Usage: Action transforms current metadata object XML using a provided XSL
 *
 * Server response type:         KalturaMetadata
 * Server failure response type: KalturaAPIException
 */
export declare class MetadataUpdateFromXSLAction extends KalturaUploadRequest<KalturaMetadata> {
    id: number;
    xslFile: File;
    constructor(data: MetadataUpdateFromXSLActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
