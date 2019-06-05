import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUiConf } from './KalturaUiConf';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface UiConfUpdateActionArgs extends KalturaRequestArgs {
    id: number;
    uiConf: KalturaUiConf;
}
/**
 * Build request payload for service 'uiConf' action 'update'.
 *
 * Usage: Update an existing UIConf
 *
 * Server response type:         KalturaUiConf
 * Server failure response type: KalturaAPIException
 */
export declare class UiConfUpdateAction extends KalturaRequest<KalturaUiConf> {
    id: number;
    uiConf: KalturaUiConf;
    constructor(data: UiConfUpdateActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}