import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUiConf } from './KalturaUiConf';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface UiConfAddActionArgs extends KalturaRequestArgs {
    uiConf: KalturaUiConf;
}
/**
 * Build request payload for service 'uiConf' action 'add'.
 *
 * Usage: UIConf Add action allows you to add a UIConf to Kaltura DB
 *
 * Server response type:         KalturaUiConf
 * Server failure response type: KalturaAPIException
 */
export declare class UiConfAddAction extends KalturaRequest<KalturaUiConf> {
    uiConf: KalturaUiConf;
    constructor(data: UiConfAddActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}