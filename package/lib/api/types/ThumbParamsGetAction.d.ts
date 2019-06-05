import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaThumbParams } from './KalturaThumbParams';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface ThumbParamsGetActionArgs extends KalturaRequestArgs {
    id: number;
}
/**
 * Build request payload for service 'thumbParams' action 'get'.
 *
 * Usage: Get Thumb Params by ID
 *
 * Server response type:         KalturaThumbParams
 * Server failure response type: KalturaAPIException
 */
export declare class ThumbParamsGetAction extends KalturaRequest<KalturaThumbParams> {
    id: number;
    constructor(data: ThumbParamsGetActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
