import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface SessionEndActionArgs extends KalturaRequestArgs {
}
/**
 * Build request payload for service 'session' action 'end'.
 *
 * Usage: End a session with the Kaltura server, making the current KS invalid
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
export declare class SessionEndAction extends KalturaRequest<void> {
    constructor(data?: SessionEndActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
