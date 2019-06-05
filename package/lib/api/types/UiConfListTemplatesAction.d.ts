import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUiConfListResponse } from './KalturaUiConfListResponse';
import { KalturaUiConfFilter } from './KalturaUiConfFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface UiConfListTemplatesActionArgs extends KalturaRequestArgs {
    filter?: KalturaUiConfFilter;
    pager?: KalturaFilterPager;
}
/**
 * Build request payload for service 'uiConf' action 'listTemplates'.
 *
 * Usage: retrieve a list of available template UIConfs
 *
 * Server response type:         KalturaUiConfListResponse
 * Server failure response type: KalturaAPIException
 */
export declare class UiConfListTemplatesAction extends KalturaRequest<KalturaUiConfListResponse> {
    filter: KalturaUiConfFilter;
    pager: KalturaFilterPager;
    constructor(data?: UiConfListTemplatesActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
