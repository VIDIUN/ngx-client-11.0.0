import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface LiveStreamValidateRegisteredMediaServersActionArgs extends KalturaRequestArgs {
    entryId: string;
}
/**
 * Build request payload for service 'liveStream' action 'validateRegisteredMediaServers'.
 *
 * Usage: Validates all registered media servers
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
export declare class LiveStreamValidateRegisteredMediaServersAction extends KalturaRequest<void> {
    entryId: string;
    constructor(data: LiveStreamValidateRegisteredMediaServersActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
