import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaResponseProfileCacheRecalculateResults } from './KalturaResponseProfileCacheRecalculateResults';
import { KalturaResponseProfileCacheRecalculateOptions } from './KalturaResponseProfileCacheRecalculateOptions';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface ResponseProfileRecalculateActionArgs extends KalturaRequestArgs {
    options: KalturaResponseProfileCacheRecalculateOptions;
}
/**
 * Build request payload for service 'responseProfile' action 'recalculate'.
 *
 * Usage: Recalculate response profile cached objects
 *
 * Server response type:         KalturaResponseProfileCacheRecalculateResults
 * Server failure response type: KalturaAPIException
 */
export declare class ResponseProfileRecalculateAction extends KalturaRequest<KalturaResponseProfileCacheRecalculateResults> {
    options: KalturaResponseProfileCacheRecalculateOptions;
    constructor(data: ResponseProfileRecalculateActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}