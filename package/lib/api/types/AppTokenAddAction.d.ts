import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAppToken } from './KalturaAppToken';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface AppTokenAddActionArgs extends KalturaRequestArgs {
    appToken: KalturaAppToken;
}
/**
 * Build request payload for service 'appToken' action 'add'.
 *
 * Usage: Add new application authentication token
 *
 * Server response type:         KalturaAppToken
 * Server failure response type: KalturaAPIException
 */
export declare class AppTokenAddAction extends KalturaRequest<KalturaAppToken> {
    appToken: KalturaAppToken;
    constructor(data: AppTokenAddActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
