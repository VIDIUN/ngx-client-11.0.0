import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBaseSyndicationFeed } from './KalturaBaseSyndicationFeed';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface SyndicationFeedAddActionArgs extends KalturaRequestArgs {
    syndicationFeed: KalturaBaseSyndicationFeed;
}
/**
 * Build request payload for service 'syndicationFeed' action 'add'.
 *
 * Usage: Add new Syndication Feed
 *
 * Server response type:         KalturaBaseSyndicationFeed
 * Server failure response type: KalturaAPIException
 */
export declare class SyndicationFeedAddAction extends KalturaRequest<KalturaBaseSyndicationFeed> {
    syndicationFeed: KalturaBaseSyndicationFeed;
    constructor(data: SyndicationFeedAddActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}