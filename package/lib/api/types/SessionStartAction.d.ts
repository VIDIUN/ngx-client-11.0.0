import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaSessionType } from './KalturaSessionType';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface SessionStartActionArgs extends KalturaRequestArgs {
    secret: string;
    userId?: string;
    type?: KalturaSessionType;
    partnerId?: number;
    expiry?: number;
    privileges?: string;
}
/**
 * Build request payload for service 'session' action 'start'.
 *
 * Usage: Start a session with Kaltura's server.
 * The result KS is the session key that you should pass to all services that requires a ticket
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 */
export declare class SessionStartAction extends KalturaRequest<string> {
    secret: string;
    userId: string;
    type: KalturaSessionType;
    partnerId: number;
    expiry: number;
    privileges: string;
    constructor(data: SessionStartActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
