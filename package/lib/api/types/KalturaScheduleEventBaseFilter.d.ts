import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaScheduleEventStatus } from './KalturaScheduleEventStatus';
import { KalturaScheduleEventRecurrenceType } from './KalturaScheduleEventRecurrenceType';
import { KalturaRelatedFilter, KalturaRelatedFilterArgs } from './KalturaRelatedFilter';
export interface KalturaScheduleEventBaseFilterArgs extends KalturaRelatedFilterArgs {
    idEqual?: number;
    idIn?: string;
    idNotIn?: string;
    parentIdEqual?: number;
    parentIdIn?: string;
    parentIdNotIn?: string;
    statusEqual?: KalturaScheduleEventStatus;
    statusIn?: string;
    startDateGreaterThanOrEqual?: Date;
    startDateLessThanOrEqual?: Date;
    endDateGreaterThanOrEqual?: Date;
    endDateLessThanOrEqual?: Date;
    referenceIdEqual?: string;
    referenceIdIn?: string;
    ownerIdEqual?: string;
    ownerIdIn?: string;
    priorityEqual?: number;
    priorityIn?: string;
    priorityGreaterThanOrEqual?: number;
    priorityLessThanOrEqual?: number;
    recurrenceTypeEqual?: KalturaScheduleEventRecurrenceType;
    recurrenceTypeIn?: string;
    tagsLike?: string;
    tagsMultiLikeOr?: string;
    tagsMultiLikeAnd?: string;
    createdAtGreaterThanOrEqual?: Date;
    createdAtLessThanOrEqual?: Date;
    updatedAtGreaterThanOrEqual?: Date;
    updatedAtLessThanOrEqual?: Date;
}
export declare class KalturaScheduleEventBaseFilter extends KalturaRelatedFilter {
    idEqual: number;
    idIn: string;
    idNotIn: string;
    parentIdEqual: number;
    parentIdIn: string;
    parentIdNotIn: string;
    statusEqual: KalturaScheduleEventStatus;
    statusIn: string;
    startDateGreaterThanOrEqual: Date;
    startDateLessThanOrEqual: Date;
    endDateGreaterThanOrEqual: Date;
    endDateLessThanOrEqual: Date;
    referenceIdEqual: string;
    referenceIdIn: string;
    ownerIdEqual: string;
    ownerIdIn: string;
    priorityEqual: number;
    priorityIn: string;
    priorityGreaterThanOrEqual: number;
    priorityLessThanOrEqual: number;
    recurrenceTypeEqual: KalturaScheduleEventRecurrenceType;
    recurrenceTypeIn: string;
    tagsLike: string;
    tagsMultiLikeOr: string;
    tagsMultiLikeAnd: string;
    createdAtGreaterThanOrEqual: Date;
    createdAtLessThanOrEqual: Date;
    updatedAtGreaterThanOrEqual: Date;
    updatedAtLessThanOrEqual: Date;
    constructor(data?: KalturaScheduleEventBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}