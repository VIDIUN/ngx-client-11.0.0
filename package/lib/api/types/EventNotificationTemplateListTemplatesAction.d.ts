import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaEventNotificationTemplateListResponse } from './KalturaEventNotificationTemplateListResponse';
import { KalturaEventNotificationTemplateFilter } from './KalturaEventNotificationTemplateFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface EventNotificationTemplateListTemplatesActionArgs extends KalturaRequestArgs {
    filter?: KalturaEventNotificationTemplateFilter;
    pager?: KalturaFilterPager;
}
/**
 * Build request payload for service 'eventNotificationTemplate' action 'listTemplates'.
 *
 * Usage: Action lists the template partner event notification templates
 *
 * Server response type:         KalturaEventNotificationTemplateListResponse
 * Server failure response type: KalturaAPIException
 */
export declare class EventNotificationTemplateListTemplatesAction extends KalturaRequest<KalturaEventNotificationTemplateListResponse> {
    filter: KalturaEventNotificationTemplateFilter;
    pager: KalturaFilterPager;
    constructor(data?: EventNotificationTemplateListTemplatesActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}