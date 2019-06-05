import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLiveChannelSegmentType } from './KalturaLiveChannelSegmentType';
import { KalturaLiveChannelSegmentStatus } from './KalturaLiveChannelSegmentStatus';
import { KalturaLiveChannelSegmentTriggerType } from './KalturaLiveChannelSegmentTriggerType';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaLiveChannelSegmentArgs extends KalturaObjectBaseArgs {
    name?: string;
    description?: string;
    tags?: string;
    type?: KalturaLiveChannelSegmentType;
    channelId?: string;
    entryId?: string;
    triggerType?: KalturaLiveChannelSegmentTriggerType;
    triggerSegmentId?: number;
    startTime?: number;
    duration?: number;
}
export declare class KalturaLiveChannelSegment extends KalturaObjectBase {
    readonly id: number;
    readonly partnerId: number;
    readonly createdAt: number;
    readonly updatedAt: number;
    name: string;
    description: string;
    tags: string;
    type: KalturaLiveChannelSegmentType;
    readonly status: KalturaLiveChannelSegmentStatus;
    channelId: string;
    entryId: string;
    triggerType: KalturaLiveChannelSegmentTriggerType;
    triggerSegmentId: number;
    startTime: number;
    duration: number;
    constructor(data?: KalturaLiveChannelSegmentArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}