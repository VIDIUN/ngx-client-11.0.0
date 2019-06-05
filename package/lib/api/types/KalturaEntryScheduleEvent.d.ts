import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaScheduleEvent, KalturaScheduleEventArgs } from './KalturaScheduleEvent';
export interface KalturaEntryScheduleEventArgs extends KalturaScheduleEventArgs {
    templateEntryId?: string;
    entryIds?: string;
    categoryIds?: string;
}
export declare class KalturaEntryScheduleEvent extends KalturaScheduleEvent {
    templateEntryId: string;
    entryIds: string;
    categoryIds: string;
    constructor(data?: KalturaEntryScheduleEventArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
