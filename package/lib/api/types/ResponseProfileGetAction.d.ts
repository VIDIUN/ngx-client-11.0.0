import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaResponseProfile } from './KalturaResponseProfile';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface ResponseProfileGetActionArgs extends KalturaRequestArgs {
    id: number;
}
/**
 * Build request payload for service 'responseProfile' action 'get'.
 *
 * Usage: Get response profile by id
 *
 * Server response type:         KalturaResponseProfile
 * Server failure response type: KalturaAPIException
 */
export declare class ResponseProfileGetAction extends KalturaRequest<KalturaResponseProfile> {
    id: number;
    constructor(data: ResponseProfileGetActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}