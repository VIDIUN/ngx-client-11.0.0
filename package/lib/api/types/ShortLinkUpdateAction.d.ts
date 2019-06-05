import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaShortLink } from './KalturaShortLink';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface ShortLinkUpdateActionArgs extends KalturaRequestArgs {
    id: string;
    shortLink: KalturaShortLink;
}
/**
 * Build request payload for service 'shortLink' action 'update'.
 *
 * Usage: Update exisitng short link
 *
 * Server response type:         KalturaShortLink
 * Server failure response type: KalturaAPIException
 */
export declare class ShortLinkUpdateAction extends KalturaRequest<KalturaShortLink> {
    id: string;
    shortLink: KalturaShortLink;
    constructor(data: ShortLinkUpdateActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}