import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUiConf } from './KalturaUiConf';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface UiConfGetActionArgs extends KalturaRequestArgs {
    id: number;
}
/**
 * Build request payload for service 'uiConf' action 'get'.
 *
 * Usage: Retrieve a UIConf by id
 *
 * Server response type:         KalturaUiConf
 * Server failure response type: KalturaAPIException
 */
export declare class UiConfGetAction extends KalturaRequest<KalturaUiConf> {
    id: number;
    constructor(data: UiConfGetActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}