import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaThumbParams } from './KalturaThumbParams';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface ThumbParamsGetByConversionProfileIdActionArgs extends KalturaRequestArgs {
    conversionProfileId: number;
}
/**
 * Build request payload for service 'thumbParams' action 'getByConversionProfileId'.
 *
 * Usage: Get Thumb Params by Conversion Profile ID
 *
 * Server response type:         KalturaThumbParams[]
 * Server failure response type: KalturaAPIException
 */
export declare class ThumbParamsGetByConversionProfileIdAction extends KalturaRequest<KalturaThumbParams[]> {
    conversionProfileId: number;
    constructor(data: ThumbParamsGetByConversionProfileIdActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}