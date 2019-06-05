import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaObject } from './KalturaObject';
import { KalturaJobData, KalturaJobDataArgs } from './KalturaJobData';
export interface KalturaClipConcatJobDataArgs extends KalturaJobDataArgs {
    partnerId?: number;
    priority?: number;
    operationAttributes?: KalturaObject[];
}
export declare class KalturaClipConcatJobData extends KalturaJobData {
    partnerId: number;
    priority: number;
    operationAttributes: KalturaObject[];
    constructor(data?: KalturaClipConcatJobDataArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
