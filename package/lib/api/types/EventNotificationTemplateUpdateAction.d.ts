import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaEventNotificationTemplate } from './KalturaEventNotificationTemplate';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface EventNotificationTemplateUpdateActionArgs extends KalturaRequestArgs {
    id: number;
    eventNotificationTemplate: KalturaEventNotificationTemplate;
}
/**
 * Build request payload for service 'eventNotificationTemplate' action 'update'.
 *
 * Usage: Update an existing event notification template object
 *
 * Server response type:         KalturaEventNotificationTemplate
 * Server failure response type: KalturaAPIException
 */
export declare class EventNotificationTemplateUpdateAction extends KalturaRequest<KalturaEventNotificationTemplate> {
    id: number;
    eventNotificationTemplate: KalturaEventNotificationTemplate;
    constructor(data: EventNotificationTemplateUpdateActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
