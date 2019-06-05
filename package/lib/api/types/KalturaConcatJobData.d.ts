import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaString } from './KalturaString';
import { KalturaJobData, KalturaJobDataArgs } from './KalturaJobData';
export interface KalturaConcatJobDataArgs extends KalturaJobDataArgs {
    srcFiles?: KalturaString[];
    destFilePath?: string;
    flavorAssetId?: string;
    offset?: number;
    duration?: number;
    concatenatedDuration?: number;
    shouldSort?: boolean;
}
export declare class KalturaConcatJobData extends KalturaJobData {
    srcFiles: KalturaString[];
    destFilePath: string;
    flavorAssetId: string;
    offset: number;
    duration: number;
    concatenatedDuration: number;
    shouldSort: boolean;
    constructor(data?: KalturaConcatJobDataArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
