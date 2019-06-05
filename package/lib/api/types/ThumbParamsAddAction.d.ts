import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaThumbParams } from './KalturaThumbParams';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface ThumbParamsAddActionArgs extends KalturaRequestArgs {
    thumbParams: KalturaThumbParams;
}
/**
 * Build request payload for service 'thumbParams' action 'add'.
 *
 * Usage: Add new Thumb Params
 *
 * Server response type:         KalturaThumbParams
 * Server failure response type: KalturaAPIException
 */
export declare class ThumbParamsAddAction extends KalturaRequest<KalturaThumbParams> {
    thumbParams: KalturaThumbParams;
    constructor(data: ThumbParamsAddActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}