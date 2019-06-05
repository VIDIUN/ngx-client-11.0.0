import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUserEntry, KalturaUserEntryArgs } from './KalturaUserEntry';
export interface KalturaViewHistoryUserEntryArgs extends KalturaUserEntryArgs {
    playbackContext?: string;
    lastTimeReached?: number;
    lastUpdateTime?: Date;
}
export declare class KalturaViewHistoryUserEntry extends KalturaUserEntry {
    playbackContext: string;
    lastTimeReached: number;
    lastUpdateTime: Date;
    constructor(data?: KalturaViewHistoryUserEntryArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
