import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaBatchHistoryDataArgs extends KalturaObjectBaseArgs {
    schedulerId?: number;
    workerId?: number;
    batchIndex?: number;
    timeStamp?: number;
    message?: string;
    errType?: number;
    errNumber?: number;
    hostName?: string;
    sessionId?: string;
}
export declare class KalturaBatchHistoryData extends KalturaObjectBase {
    schedulerId: number;
    workerId: number;
    batchIndex: number;
    timeStamp: number;
    message: string;
    errType: number;
    errNumber: number;
    hostName: string;
    sessionId: string;
    constructor(data?: KalturaBatchHistoryDataArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
