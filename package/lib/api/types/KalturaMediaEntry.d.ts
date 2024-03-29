import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMediaType } from './KalturaMediaType';
import { KalturaSourceType } from './KalturaSourceType';
import { KalturaSearchProviderType } from './KalturaSearchProviderType';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaStreamContainer } from './KalturaStreamContainer';
import { KalturaPlayableEntry, KalturaPlayableEntryArgs } from './KalturaPlayableEntry';
export interface KalturaMediaEntryArgs extends KalturaPlayableEntryArgs {
    mediaType?: KalturaMediaType;
    conversionQuality?: string;
    sourceType?: KalturaSourceType;
    searchProviderType?: KalturaSearchProviderType;
    searchProviderId?: string;
    creditUserName?: string;
    creditUrl?: string;
    streams?: KalturaStreamContainer[];
}
export declare class KalturaMediaEntry extends KalturaPlayableEntry {
    mediaType: KalturaMediaType;
    conversionQuality: string;
    sourceType: KalturaSourceType;
    searchProviderType: KalturaSearchProviderType;
    searchProviderId: string;
    creditUserName: string;
    creditUrl: string;
    readonly mediaDate: Date;
    readonly dataUrl: string;
    readonly flavorParamsIds: string;
    readonly isTrimDisabled: KalturaNullableBoolean;
    streams: KalturaStreamContainer[];
    constructor(data?: KalturaMediaEntryArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
