import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBaseEntry } from './KalturaBaseEntry';
import { KalturaUploadRequest, KalturaUploadRequestArgs } from '../kaltura-upload-request';
export interface BaseEntryUpdateThumbnailJpegActionArgs extends KalturaUploadRequestArgs {
    entryId: string;
    fileData: File;
}
/**
 * Build request payload for service 'baseEntry' action 'updateThumbnailJpeg'.
 *
 * Usage: Update entry thumbnail using a raw jpeg file
 *
 * Server response type:         KalturaBaseEntry
 * Server failure response type: KalturaAPIException
 */
export declare class BaseEntryUpdateThumbnailJpegAction extends KalturaUploadRequest<KalturaBaseEntry> {
    entryId: string;
    fileData: File;
    constructor(data: BaseEntryUpdateThumbnailJpegActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
