import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLiveStreamBitrate } from './KalturaLiveStreamBitrate';
import { KalturaLiveEntry, KalturaLiveEntryArgs } from './KalturaLiveEntry';
export interface KalturaLiveStreamEntryArgs extends KalturaLiveEntryArgs {
    bitrates?: KalturaLiveStreamBitrate[];
    primaryBroadcastingUrl?: string;
    secondaryBroadcastingUrl?: string;
    primaryRtspBroadcastingUrl?: string;
    secondaryRtspBroadcastingUrl?: string;
    streamName?: string;
    streamUrl?: string;
    hlsStreamUrl?: string;
    urlManager?: string;
    encodingIP1?: string;
    encodingIP2?: string;
    streamPassword?: string;
}
export declare class KalturaLiveStreamEntry extends KalturaLiveEntry {
    readonly streamRemoteId: string;
    readonly streamRemoteBackupId: string;
    bitrates: KalturaLiveStreamBitrate[];
    primaryBroadcastingUrl: string;
    secondaryBroadcastingUrl: string;
    primaryRtspBroadcastingUrl: string;
    secondaryRtspBroadcastingUrl: string;
    streamName: string;
    streamUrl: string;
    hlsStreamUrl: string;
    urlManager: string;
    encodingIP1: string;
    encodingIP2: string;
    streamPassword: string;
    readonly streamUsername: string;
    readonly primaryServerNodeId: number;
    constructor(data?: KalturaLiveStreamEntryArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
