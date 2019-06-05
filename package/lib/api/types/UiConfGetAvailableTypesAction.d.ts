import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUiConfTypeInfo } from './KalturaUiConfTypeInfo';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface UiConfGetAvailableTypesActionArgs extends KalturaRequestArgs {
}
/**
 * Build request payload for service 'uiConf' action 'getAvailableTypes'.
 *
 * Usage: Retrieve a list of all available versions by object type
 *
 * Server response type:         KalturaUiConfTypeInfo[]
 * Server failure response type: KalturaAPIException
 */
export declare class UiConfGetAvailableTypesAction extends KalturaRequest<KalturaUiConfTypeInfo[]> {
    constructor(data?: UiConfGetAvailableTypesActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
