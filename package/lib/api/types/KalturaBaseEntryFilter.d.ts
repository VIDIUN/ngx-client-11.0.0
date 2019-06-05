import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaBaseEntryBaseFilter, KalturaBaseEntryBaseFilterArgs } from './KalturaBaseEntryBaseFilter';
export interface KalturaBaseEntryFilterArgs extends KalturaBaseEntryBaseFilterArgs {
    freeText?: string;
    isRoot?: KalturaNullableBoolean;
    categoriesFullNameIn?: string;
    categoryAncestorIdIn?: string;
    redirectFromEntryId?: string;
}
export declare class KalturaBaseEntryFilter extends KalturaBaseEntryBaseFilter {
    freeText: string;
    isRoot: KalturaNullableBoolean;
    categoriesFullNameIn: string;
    categoryAncestorIdIn: string;
    redirectFromEntryId: string;
    constructor(data?: KalturaBaseEntryFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
