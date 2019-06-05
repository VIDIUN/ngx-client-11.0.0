import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLiveStreamScheduleEventBaseFilter, KalturaLiveStreamScheduleEventBaseFilterArgs } from './KalturaLiveStreamScheduleEventBaseFilter';
export interface KalturaLiveStreamScheduleEventFilterArgs extends KalturaLiveStreamScheduleEventBaseFilterArgs {
}
export declare class KalturaLiveStreamScheduleEventFilter extends KalturaLiveStreamScheduleEventBaseFilter {
    constructor(data?: KalturaLiveStreamScheduleEventFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
