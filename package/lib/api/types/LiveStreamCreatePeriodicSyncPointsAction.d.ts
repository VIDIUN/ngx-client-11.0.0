import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface LiveStreamCreatePeriodicSyncPointsActionArgs extends KalturaRequestArgs {
    entryId: string;
    interval: number;
    duration: number;
}
/**
 * Build request payload for service 'liveStream' action 'createPeriodicSyncPoints'.
 *
 * Usage: Creates perioding metadata sync-point events on a live stream
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
export declare class LiveStreamCreatePeriodicSyncPointsAction extends KalturaRequest<void> {
    entryId: string;
    interval: number;
    duration: number;
    constructor(data: LiveStreamCreatePeriodicSyncPointsActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
