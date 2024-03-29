import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaSessionInfo } from './KalturaSessionInfo';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface SessionGetActionArgs extends KalturaRequestArgs {
    session?: string;
}
/**
 * Build request payload for service 'session' action 'get'.
 *
 * Usage: Parse session key and return its info
 *
 * Server response type:         KalturaSessionInfo
 * Server failure response type: KalturaAPIException
 */
export declare class SessionGetAction extends KalturaRequest<KalturaSessionInfo> {
    session: string;
    constructor(data?: SessionGetActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
