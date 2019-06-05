import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaScheduleEventStatus } from './KalturaScheduleEventStatus';
import { KalturaScheduleEventClassificationType } from './KalturaScheduleEventClassificationType';
import { KalturaScheduleEventRecurrenceType } from './KalturaScheduleEventRecurrenceType';
import { KalturaScheduleEventRecurrence } from './KalturaScheduleEventRecurrence';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaScheduleEventArgs extends KalturaObjectBaseArgs {
    summary?: string;
    description?: string;
    startDate?: Date;
    endDate?: Date;
    referenceId?: string;
    classificationType?: KalturaScheduleEventClassificationType;
    geoLatitude?: number;
    geoLongitude?: number;
    location?: string;
    organizer?: string;
    ownerId?: string;
    priority?: number;
    sequence?: number;
    recurrenceType?: KalturaScheduleEventRecurrenceType;
    duration?: number;
    contact?: string;
    comment?: string;
    tags?: string;
    recurrence?: KalturaScheduleEventRecurrence;
}
export declare class KalturaScheduleEvent extends KalturaObjectBase {
    readonly id: number;
    readonly partnerId: number;
    readonly parentId: number;
    summary: string;
    description: string;
    readonly status: KalturaScheduleEventStatus;
    startDate: Date;
    endDate: Date;
    referenceId: string;
    classificationType: KalturaScheduleEventClassificationType;
    geoLatitude: number;
    geoLongitude: number;
    location: string;
    organizer: string;
    ownerId: string;
    priority: number;
    sequence: number;
    recurrenceType: KalturaScheduleEventRecurrenceType;
    duration: number;
    contact: string;
    comment: string;
    tags: string;
    readonly createdAt: Date;
    readonly updatedAt: Date;
    recurrence: KalturaScheduleEventRecurrence;
    constructor(data?: KalturaScheduleEventArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
