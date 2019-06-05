import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUserEntry, KalturaUserEntryArgs } from './KalturaUserEntry';
export interface KalturaQuizUserEntryArgs extends KalturaUserEntryArgs {
}
export declare class KalturaQuizUserEntry extends KalturaUserEntry {
    readonly score: number;
    constructor(data?: KalturaQuizUserEntryArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
