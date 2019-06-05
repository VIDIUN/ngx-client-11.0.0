import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAppToken } from './KalturaAppToken';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface AppTokenUpdateActionArgs extends KalturaRequestArgs {
    id: string;
    appToken: KalturaAppToken;
}
/**
 * Build request payload for service 'appToken' action 'update'.
 *
 * Usage: Update application authentication token by id
 *
 * Server response type:         KalturaAppToken
 * Server failure response type: KalturaAPIException
 */
export declare class AppTokenUpdateAction extends KalturaRequest<KalturaAppToken> {
    id: string;
    appToken: KalturaAppToken;
    constructor(data: AppTokenUpdateActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
