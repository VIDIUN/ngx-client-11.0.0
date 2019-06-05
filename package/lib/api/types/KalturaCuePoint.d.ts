import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCuePointType } from './KalturaCuePointType';
import { KalturaCuePointStatus } from './KalturaCuePointStatus';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaCuePointArgs extends KalturaObjectBaseArgs {
    entryId?: string;
    triggeredAt?: Date;
    tags?: string;
    startTime?: number;
    partnerData?: string;
    partnerSortValue?: number;
    forceStop?: KalturaNullableBoolean;
    thumbOffset?: number;
    systemName?: string;
}
export declare class KalturaCuePoint extends KalturaObjectBase {
    readonly id: string;
    readonly cuePointType: KalturaCuePointType;
    readonly status: KalturaCuePointStatus;
    entryId: string;
    readonly partnerId: number;
    readonly createdAt: Date;
    readonly updatedAt: Date;
    triggeredAt: Date;
    tags: string;
    startTime: number;
    readonly userId: string;
    partnerData: string;
    partnerSortValue: number;
    forceStop: KalturaNullableBoolean;
    thumbOffset: number;
    systemName: string;
    constructor(data?: KalturaCuePointArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
