import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaSessionType } from './KalturaSessionType';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface SessionImpersonateActionArgs extends KalturaRequestArgs {
    secret: string;
    impersonatedPartnerId: number;
    userId?: string;
    type?: KalturaSessionType;
    partnerId?: number;
    expiry?: number;
    privileges?: string;
}
/**
 * Build request payload for service 'session' action 'impersonate'.
 *
 * Usage: Start an impersonated session with Kaltura's server.
 * The result KS is the session key that you should pass to all services that requires a ticket
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 */
export declare class SessionImpersonateAction extends KalturaRequest<string> {
    secret: string;
    impersonatedPartnerId: number;
    userId: string;
    type: KalturaSessionType;
    partnerId: number;
    expiry: number;
    privileges: string;
    constructor(data: SessionImpersonateActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
