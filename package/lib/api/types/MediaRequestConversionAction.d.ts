import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface MediaRequestConversionActionArgs extends KalturaRequestArgs {
    entryId: string;
    fileFormat: string;
}
/**
 * Build request payload for service 'media' action 'requestConversion'.
 *
 * Usage: Request a new conversion job, this can be used to convert the media entry to a different format
 *
 * Server response type:         number
 * Server failure response type: KalturaAPIException
 */
export declare class MediaRequestConversionAction extends KalturaRequest<number> {
    entryId: string;
    fileFormat: string;
    constructor(data: MediaRequestConversionActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}