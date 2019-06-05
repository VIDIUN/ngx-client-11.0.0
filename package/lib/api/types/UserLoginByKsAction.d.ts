import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaSessionResponse } from './KalturaSessionResponse';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface UserLoginByKsActionArgs extends KalturaRequestArgs {
    requestedPartnerId: number;
}
/**
 * Build request payload for service 'user' action 'loginByKs'.
 *
 * Usage: Loges a user to the destination account as long the ks user id exists in the desc acount and the loginData id match for both accounts
 *
 * Server response type:         KalturaSessionResponse
 * Server failure response type: KalturaAPIException
 */
export declare class UserLoginByKsAction extends KalturaRequest<KalturaSessionResponse> {
    requestedPartnerId: number;
    constructor(data: UserLoginByKsActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
