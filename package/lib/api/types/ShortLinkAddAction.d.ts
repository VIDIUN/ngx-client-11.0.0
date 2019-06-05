import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaShortLink } from './KalturaShortLink';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface ShortLinkAddActionArgs extends KalturaRequestArgs {
    shortLink: KalturaShortLink;
}
/**
 * Build request payload for service 'shortLink' action 'add'.
 *
 * Usage: Allows you to add a short link object
 *
 * Server response type:         KalturaShortLink
 * Server failure response type: KalturaAPIException
 */
export declare class ShortLinkAddAction extends KalturaRequest<KalturaShortLink> {
    shortLink: KalturaShortLink;
    constructor(data: ShortLinkAddActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
