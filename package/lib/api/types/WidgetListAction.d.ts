import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaWidgetListResponse } from './KalturaWidgetListResponse';
import { KalturaWidgetFilter } from './KalturaWidgetFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface WidgetListActionArgs extends KalturaRequestArgs {
    filter?: KalturaWidgetFilter;
    pager?: KalturaFilterPager;
}
/**
 * Build request payload for service 'widget' action 'list'.
 *
 * Usage: Retrieve a list of available widget depends on the filter given
 *
 * Server response type:         KalturaWidgetListResponse
 * Server failure response type: KalturaAPIException
 */
export declare class WidgetListAction extends KalturaRequest<KalturaWidgetListResponse> {
    filter: KalturaWidgetFilter;
    pager: KalturaFilterPager;
    constructor(data?: WidgetListActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}