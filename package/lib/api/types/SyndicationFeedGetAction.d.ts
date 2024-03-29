import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBaseSyndicationFeed } from './KalturaBaseSyndicationFeed';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface SyndicationFeedGetActionArgs extends KalturaRequestArgs {
    id: string;
}
/**
 * Build request payload for service 'syndicationFeed' action 'get'.
 *
 * Usage: Get Syndication Feed by ID
 *
 * Server response type:         KalturaBaseSyndicationFeed
 * Server failure response type: KalturaAPIException
 */
export declare class SyndicationFeedGetAction extends KalturaRequest<KalturaBaseSyndicationFeed> {
    id: string;
    constructor(data: SyndicationFeedGetActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
