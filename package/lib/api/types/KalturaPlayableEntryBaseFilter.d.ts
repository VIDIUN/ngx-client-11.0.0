import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBaseEntryFilter, KalturaBaseEntryFilterArgs } from './KalturaBaseEntryFilter';
export interface KalturaPlayableEntryBaseFilterArgs extends KalturaBaseEntryFilterArgs {
    lastPlayedAtGreaterThanOrEqual?: Date;
    lastPlayedAtLessThanOrEqual?: Date;
    durationLessThan?: number;
    durationGreaterThan?: number;
    durationLessThanOrEqual?: number;
    durationGreaterThanOrEqual?: number;
    durationTypeMatchOr?: string;
}
export declare class KalturaPlayableEntryBaseFilter extends KalturaBaseEntryFilter {
    lastPlayedAtGreaterThanOrEqual: Date;
    lastPlayedAtLessThanOrEqual: Date;
    durationLessThan: number;
    durationGreaterThan: number;
    durationLessThanOrEqual: number;
    durationGreaterThanOrEqual: number;
    durationTypeMatchOr: string;
    constructor(data?: KalturaPlayableEntryBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}