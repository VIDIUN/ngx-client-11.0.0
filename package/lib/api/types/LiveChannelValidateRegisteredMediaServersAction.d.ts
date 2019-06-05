import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface LiveChannelValidateRegisteredMediaServersActionArgs extends KalturaRequestArgs {
    entryId: string;
}
/**
 * Build request payload for service 'liveChannel' action 'validateRegisteredMediaServers'.
 *
 * Usage: Validates all registered media servers
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
export declare class LiveChannelValidateRegisteredMediaServersAction extends KalturaRequest<void> {
    entryId: string;
    constructor(data: LiveChannelValidateRegisteredMediaServersActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
