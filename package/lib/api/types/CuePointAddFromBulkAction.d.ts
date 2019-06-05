import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCuePointListResponse } from './KalturaCuePointListResponse';
import { KalturaUploadRequest, KalturaUploadRequestArgs } from '../kaltura-upload-request';
export interface CuePointAddFromBulkActionArgs extends KalturaUploadRequestArgs {
    fileData: File;
}
/**
 * Build request payload for service 'cuePoint' action 'addFromBulk'.
 *
 * Usage: Allows you to add multiple cue points objects by uploading XML that contains multiple cue point definitions
 *
 * Server response type:         KalturaCuePointListResponse
 * Server failure response type: KalturaAPIException
 */
export declare class CuePointAddFromBulkAction extends KalturaUploadRequest<KalturaCuePointListResponse> {
    fileData: File;
    constructor(data: CuePointAddFromBulkActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}