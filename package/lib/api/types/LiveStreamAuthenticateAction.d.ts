import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLiveStreamEntry } from './KalturaLiveStreamEntry';
import { KalturaEntryServerNodeType } from './KalturaEntryServerNodeType';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface LiveStreamAuthenticateActionArgs extends KalturaRequestArgs {
    entryId: string;
    token: string;
    hostname?: string;
    mediaServerIndex?: KalturaEntryServerNodeType;
    applicationName?: string;
}
/**
 * Build request payload for service 'liveStream' action 'authenticate'.
 *
 * Usage: Authenticate live-stream entry against stream token and partner limitations
 *
 * Server response type:         KalturaLiveStreamEntry
 * Server failure response type: KalturaAPIException
 */
export declare class LiveStreamAuthenticateAction extends KalturaRequest<KalturaLiveStreamEntry> {
    entryId: string;
    token: string;
    hostname: string;
    mediaServerIndex: KalturaEntryServerNodeType;
    applicationName: string;
    constructor(data: LiveStreamAuthenticateActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
