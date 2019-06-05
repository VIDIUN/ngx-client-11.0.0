import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLiveStreamParams } from './KalturaLiveStreamParams';
import { KalturaLiveEntryServerNodeRecordingInfo } from './KalturaLiveEntryServerNodeRecordingInfo';
import { KalturaEntryServerNode, KalturaEntryServerNodeArgs } from './KalturaEntryServerNode';
export interface KalturaLiveEntryServerNodeArgs extends KalturaEntryServerNodeArgs {
    streams?: KalturaLiveStreamParams[];
    recordingInfo?: KalturaLiveEntryServerNodeRecordingInfo[];
    isPlayableUser?: boolean;
}
export declare class KalturaLiveEntryServerNode extends KalturaEntryServerNode {
    streams: KalturaLiveStreamParams[];
    recordingInfo: KalturaLiveEntryServerNodeRecordingInfo[];
    isPlayableUser: boolean;
    constructor(data?: KalturaLiveEntryServerNodeArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
