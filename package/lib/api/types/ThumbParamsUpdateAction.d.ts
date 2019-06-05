import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaThumbParams } from './KalturaThumbParams';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface ThumbParamsUpdateActionArgs extends KalturaRequestArgs {
    id: number;
    thumbParams: KalturaThumbParams;
}
/**
 * Build request payload for service 'thumbParams' action 'update'.
 *
 * Usage: Update Thumb Params by ID
 *
 * Server response type:         KalturaThumbParams
 * Server failure response type: KalturaAPIException
 */
export declare class ThumbParamsUpdateAction extends KalturaRequest<KalturaThumbParams> {
    id: number;
    thumbParams: KalturaThumbParams;
    constructor(data: ThumbParamsUpdateActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}