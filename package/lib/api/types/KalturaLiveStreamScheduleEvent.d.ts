import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaEntryScheduleEvent, KalturaEntryScheduleEventArgs } from './KalturaEntryScheduleEvent';
export interface KalturaLiveStreamScheduleEventArgs extends KalturaEntryScheduleEventArgs {
    projectedAudience?: number;
}
export declare class KalturaLiveStreamScheduleEvent extends KalturaEntryScheduleEvent {
    projectedAudience: number;
    constructor(data?: KalturaLiveStreamScheduleEventArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
