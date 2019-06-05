import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaConversionAttribute } from './KalturaConversionAttribute';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface MediaConvertActionArgs extends KalturaRequestArgs {
    entryId: string;
    conversionProfileId?: number;
    dynamicConversionAttributes?: KalturaConversionAttribute[];
}
/**
 * Build request payload for service 'media' action 'convert'.
 *
 * Usage: Convert entry
 *
 * Server response type:         number
 * Server failure response type: KalturaAPIException
 */
export declare class MediaConvertAction extends KalturaRequest<number> {
    entryId: string;
    conversionProfileId: number;
    dynamicConversionAttributes: KalturaConversionAttribute[];
    constructor(data: MediaConvertActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
