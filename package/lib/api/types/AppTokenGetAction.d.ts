import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAppToken } from './KalturaAppToken';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface AppTokenGetActionArgs extends KalturaRequestArgs {
    id: string;
}
/**
 * Build request payload for service 'appToken' action 'get'.
 *
 * Usage: Get application authentication token by id
 *
 * Server response type:         KalturaAppToken
 * Server failure response type: KalturaAPIException
 */
export declare class AppTokenGetAction extends KalturaRequest<KalturaAppToken> {
    id: string;
    constructor(data: AppTokenGetActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
