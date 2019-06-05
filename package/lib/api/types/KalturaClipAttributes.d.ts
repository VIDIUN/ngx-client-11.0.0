import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaOperationAttributes, KalturaOperationAttributesArgs } from './KalturaOperationAttributes';
export interface KalturaClipAttributesArgs extends KalturaOperationAttributesArgs {
    offset?: number;
    duration?: number;
    globalOffsetInDestination?: number;
}
export declare class KalturaClipAttributes extends KalturaOperationAttributes {
    offset: number;
    duration: number;
    globalOffsetInDestination: number;
    constructor(data?: KalturaClipAttributesArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
