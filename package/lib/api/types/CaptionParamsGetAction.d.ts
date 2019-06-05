import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCaptionParams } from './KalturaCaptionParams';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface CaptionParamsGetActionArgs extends KalturaRequestArgs {
    id: number;
}
/**
 * Build request payload for service 'captionParams' action 'get'.
 *
 * Usage: Get Caption Params by ID
 *
 * Server response type:         KalturaCaptionParams
 * Server failure response type: KalturaAPIException
 */
export declare class CaptionParamsGetAction extends KalturaRequest<KalturaCaptionParams> {
    id: number;
    constructor(data: CaptionParamsGetActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
