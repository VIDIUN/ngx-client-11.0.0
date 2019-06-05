import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUiConfListResponse } from './KalturaUiConfListResponse';
import { KalturaUiConfFilter } from './KalturaUiConfFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface UiConfListActionArgs extends KalturaRequestArgs {
    filter?: KalturaUiConfFilter;
    pager?: KalturaFilterPager;
}
/**
 * Build request payload for service 'uiConf' action 'list'.
 *
 * Usage: Retrieve a list of available UIConfs
 *
 * Server response type:         KalturaUiConfListResponse
 * Server failure response type: KalturaAPIException
 */
export declare class UiConfListAction extends KalturaRequest<KalturaUiConfListResponse> {
    filter: KalturaUiConfFilter;
    pager: KalturaFilterPager;
    constructor(data?: UiConfListActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
