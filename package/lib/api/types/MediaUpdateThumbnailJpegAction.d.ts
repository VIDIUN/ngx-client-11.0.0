import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMediaEntry } from './KalturaMediaEntry';
import { KalturaUploadRequest, KalturaUploadRequestArgs } from '../kaltura-upload-request';
export interface MediaUpdateThumbnailJpegActionArgs extends KalturaUploadRequestArgs {
    entryId: string;
    fileData: File;
}
/**
 * Build request payload for service 'media' action 'updateThumbnailJpeg'.
 *
 * Usage: Update media entry thumbnail using a raw jpeg file
 *
 * Server response type:         KalturaMediaEntry
 * Server failure response type: KalturaAPIException
 */
export declare class MediaUpdateThumbnailJpegAction extends KalturaUploadRequest<KalturaMediaEntry> {
    entryId: string;
    fileData: File;
    constructor(data: MediaUpdateThumbnailJpegActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
