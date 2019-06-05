import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMediaEntry } from './KalturaMediaEntry';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface MediaAddFromRecordedWebcamActionArgs extends KalturaRequestArgs {
    mediaEntry: KalturaMediaEntry;
    webcamTokenId: string;
}
/**
 * Build request payload for service 'media' action 'addFromRecordedWebcam'.
 *
 * Usage: Add new entry after the file was recored on the server and the token id exists
 *
 * Server response type:         KalturaMediaEntry
 * Server failure response type: KalturaAPIException
 */
export declare class MediaAddFromRecordedWebcamAction extends KalturaRequest<KalturaMediaEntry> {
    mediaEntry: KalturaMediaEntry;
    webcamTokenId: string;
    constructor(data: MediaAddFromRecordedWebcamActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
