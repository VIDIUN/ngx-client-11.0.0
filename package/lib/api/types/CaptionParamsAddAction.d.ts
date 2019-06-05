import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCaptionParams } from './KalturaCaptionParams';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface CaptionParamsAddActionArgs extends KalturaRequestArgs {
    captionParams: KalturaCaptionParams;
}
/**
 * Build request payload for service 'captionParams' action 'add'.
 *
 * Usage: Add new Caption Params
 *
 * Server response type:         KalturaCaptionParams
 * Server failure response type: KalturaAPIException
 */
export declare class CaptionParamsAddAction extends KalturaRequest<KalturaCaptionParams> {
    captionParams: KalturaCaptionParams;
    constructor(data: CaptionParamsAddActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}