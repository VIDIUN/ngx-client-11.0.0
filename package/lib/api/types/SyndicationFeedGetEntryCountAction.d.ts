import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaSyndicationFeedEntryCount } from './KalturaSyndicationFeedEntryCount';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface SyndicationFeedGetEntryCountActionArgs extends KalturaRequestArgs {
    feedId: string;
}
/**
 * Build request payload for service 'syndicationFeed' action 'getEntryCount'.
 *
 * Usage: get entry count for a syndication feed
 *
 * Server response type:         KalturaSyndicationFeedEntryCount
 * Server failure response type: KalturaAPIException
 */
export declare class SyndicationFeedGetEntryCountAction extends KalturaRequest<KalturaSyndicationFeedEntryCount> {
    feedId: string;
    constructor(data: SyndicationFeedGetEntryCountActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
