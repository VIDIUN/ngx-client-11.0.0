import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaUserEntryBaseFilter, KalturaUserEntryBaseFilterArgs } from './KalturaUserEntryBaseFilter';
export interface KalturaUserEntryFilterArgs extends KalturaUserEntryBaseFilterArgs {
    userIdEqualCurrent?: KalturaNullableBoolean;
    isAnonymous?: KalturaNullableBoolean;
    privacyContextEqual?: string;
    privacyContextIn?: string;
}
export declare class KalturaUserEntryFilter extends KalturaUserEntryBaseFilter {
    userIdEqualCurrent: KalturaNullableBoolean;
    isAnonymous: KalturaNullableBoolean;
    privacyContextEqual: string;
    privacyContextIn: string;
    constructor(data?: KalturaUserEntryFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
