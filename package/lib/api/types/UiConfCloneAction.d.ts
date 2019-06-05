import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUiConf } from './KalturaUiConf';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface UiConfCloneActionArgs extends KalturaRequestArgs {
    id: number;
}
/**
 * Build request payload for service 'uiConf' action 'clone'.
 *
 * Usage: Clone an existing UIConf
 *
 * Server response type:         KalturaUiConf
 * Server failure response type: KalturaAPIException
 */
export declare class UiConfCloneAction extends KalturaRequest<KalturaUiConf> {
    id: number;
    constructor(data: UiConfCloneActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}