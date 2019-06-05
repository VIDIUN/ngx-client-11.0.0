import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBaseSyndicationFeed } from './KalturaBaseSyndicationFeed';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface SyndicationFeedUpdateActionArgs extends KalturaRequestArgs {
    id: string;
    syndicationFeed: KalturaBaseSyndicationFeed;
}
/**
 * Build request payload for service 'syndicationFeed' action 'update'.
 *
 * Usage: Update Syndication Feed by ID
 *
 * Server response type:         KalturaBaseSyndicationFeed
 * Server failure response type: KalturaAPIException
 */
export declare class SyndicationFeedUpdateAction extends KalturaRequest<KalturaBaseSyndicationFeed> {
    id: string;
    syndicationFeed: KalturaBaseSyndicationFeed;
    constructor(data: SyndicationFeedUpdateActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}