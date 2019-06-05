import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaShortLink } from './KalturaShortLink';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface ShortLinkDeleteActionArgs extends KalturaRequestArgs {
    id: string;
}
/**
 * Build request payload for service 'shortLink' action 'delete'.
 *
 * Usage: Mark the short link as deleted
 *
 * Server response type:         KalturaShortLink
 * Server failure response type: KalturaAPIException
 */
export declare class ShortLinkDeleteAction extends KalturaRequest<KalturaShortLink> {
    id: string;
    constructor(data: ShortLinkDeleteActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
