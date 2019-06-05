import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface SyndicationFeedRequestConversionActionArgs extends KalturaRequestArgs {
    feedId: string;
}
/**
 * Build request payload for service 'syndicationFeed' action 'requestConversion'.
 *
 * Usage: request conversion for all entries that doesnt have the required flavor param
 * returns a comma-separated ids of conversion jobs
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 */
export declare class SyndicationFeedRequestConversionAction extends KalturaRequest<string> {
    feedId: string;
    constructor(data: SyndicationFeedRequestConversionActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
