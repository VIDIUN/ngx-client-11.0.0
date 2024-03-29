import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaShortLink } from './KalturaShortLink';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface ShortLinkGetActionArgs extends KalturaRequestArgs {
    id: string;
}
/**
 * Build request payload for service 'shortLink' action 'get'.
 *
 * Usage: Retrieve an short link object by id
 *
 * Server response type:         KalturaShortLink
 * Server failure response type: KalturaAPIException
 */
export declare class ShortLinkGetAction extends KalturaRequest<KalturaShortLink> {
    id: string;
    constructor(data: ShortLinkGetActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
