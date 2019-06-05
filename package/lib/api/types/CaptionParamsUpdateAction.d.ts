import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCaptionParams } from './KalturaCaptionParams';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface CaptionParamsUpdateActionArgs extends KalturaRequestArgs {
    id: number;
    captionParams: KalturaCaptionParams;
}
/**
 * Build request payload for service 'captionParams' action 'update'.
 *
 * Usage: Update Caption Params by ID
 *
 * Server response type:         KalturaCaptionParams
 * Server failure response type: KalturaAPIException
 */
export declare class CaptionParamsUpdateAction extends KalturaRequest<KalturaCaptionParams> {
    id: number;
    captionParams: KalturaCaptionParams;
    constructor(data: CaptionParamsUpdateActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}