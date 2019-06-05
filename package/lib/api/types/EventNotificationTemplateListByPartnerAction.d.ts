import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaEventNotificationTemplateListResponse } from './KalturaEventNotificationTemplateListResponse';
import { KalturaPartnerFilter } from './KalturaPartnerFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface EventNotificationTemplateListByPartnerActionArgs extends KalturaRequestArgs {
    filter?: KalturaPartnerFilter;
    pager?: KalturaFilterPager;
}
/**
 * Build request payload for service 'eventNotificationTemplate' action 'listByPartner'.
 *
 *
 *
 * Server response type:         KalturaEventNotificationTemplateListResponse
 * Server failure response type: KalturaAPIException
 */
export declare class EventNotificationTemplateListByPartnerAction extends KalturaRequest<KalturaEventNotificationTemplateListResponse> {
    filter: KalturaPartnerFilter;
    pager: KalturaFilterPager;
    constructor(data?: EventNotificationTemplateListByPartnerActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
