import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaLiveEntryRecordingOptionsArgs extends KalturaObjectBaseArgs {
    shouldCopyEntitlement?: KalturaNullableBoolean;
    shouldCopyScheduling?: KalturaNullableBoolean;
    shouldCopyThumbnail?: KalturaNullableBoolean;
    shouldMakeHidden?: KalturaNullableBoolean;
}
export declare class KalturaLiveEntryRecordingOptions extends KalturaObjectBase {
    shouldCopyEntitlement: KalturaNullableBoolean;
    shouldCopyScheduling: KalturaNullableBoolean;
    shouldCopyThumbnail: KalturaNullableBoolean;
    shouldMakeHidden: KalturaNullableBoolean;
    constructor(data?: KalturaLiveEntryRecordingOptionsArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
