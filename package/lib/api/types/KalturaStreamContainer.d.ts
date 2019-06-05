import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaStreamContainerArgs extends KalturaObjectBaseArgs {
    type?: string;
    trackIndex?: number;
    language?: string;
    channelIndex?: number;
    label?: string;
    channelLayout?: string;
}
export declare class KalturaStreamContainer extends KalturaObjectBase {
    type: string;
    trackIndex: number;
    language: string;
    channelIndex: number;
    label: string;
    channelLayout: string;
    constructor(data?: KalturaStreamContainerArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
