import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRoomDetails } from './KalturaRoomDetails';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface LiveStreamAllocateConferenceRoomActionArgs extends KalturaRequestArgs {
    entryId: string;
}
/**
 * Build request payload for service 'liveStream' action 'allocateConferenceRoom'.
 *
 * Usage: Allocates a conference room or returns ones that has already been allocated
 *
 * Server response type:         KalturaRoomDetails
 * Server failure response type: KalturaAPIException
 */
export declare class LiveStreamAllocateConferenceRoomAction extends KalturaRequest<KalturaRoomDetails> {
    entryId: string;
    constructor(data: LiveStreamAllocateConferenceRoomActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
