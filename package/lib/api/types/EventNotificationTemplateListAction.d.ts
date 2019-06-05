import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaEventNotificationTemplateListResponse } from './KalturaEventNotificationTemplateListResponse';
import { KalturaEventNotificationTemplateFilter } from './KalturaEventNotificationTemplateFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface EventNotificationTemplateListActionArgs extends KalturaRequestArgs {
    filter?: KalturaEventNotificationTemplateFilter;
    pager?: KalturaFilterPager;
}
/**
 * Build request payload for service 'eventNotificationTemplate' action 'list'.
 *
 * Usage: list event notification template objects
 *
 * Server response type:         KalturaEventNotificationTemplateListResponse
 * Server failure response type: KalturaAPIException
 */
export declare class EventNotificationTemplateListAction extends KalturaRequest<KalturaEventNotificationTemplateListResponse> {
    filter: KalturaEventNotificationTemplateFilter;
    pager: KalturaFilterPager;
    constructor(data?: EventNotificationTemplateListActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}