import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLiveStreamEntry } from './KalturaLiveStreamEntry';
import { KalturaUploadRequest, KalturaUploadRequestArgs } from '../kaltura-upload-request';
export interface LiveStreamUpdateOfflineThumbnailJpegActionArgs extends KalturaUploadRequestArgs {
    entryId: string;
    fileData: File;
}
/**
 * Build request payload for service 'liveStream' action 'updateOfflineThumbnailJpeg'.
 *
 * Usage: Update live stream entry thumbnail using a raw jpeg file
 *
 * Server response type:         KalturaLiveStreamEntry
 * Server failure response type: KalturaAPIException
 */
export declare class LiveStreamUpdateOfflineThumbnailJpegAction extends KalturaUploadRequest<KalturaLiveStreamEntry> {
    entryId: string;
    fileData: File;
    constructor(data: LiveStreamUpdateOfflineThumbnailJpegActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
