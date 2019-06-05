import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaEventNotificationTemplate } from './KalturaEventNotificationTemplate';
import { KalturaEventNotificationTemplateStatus } from './KalturaEventNotificationTemplateStatus';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface EventNotificationTemplateUpdateStatusActionArgs extends KalturaRequestArgs {
    id: number;
    status: KalturaEventNotificationTemplateStatus;
}
/**
 * Build request payload for service 'eventNotificationTemplate' action 'updateStatus'.
 *
 * Usage: Update event notification template status by id
 *
 * Server response type:         KalturaEventNotificationTemplate
 * Server failure response type: KalturaAPIException
 */
export declare class EventNotificationTemplateUpdateStatusAction extends KalturaRequest<KalturaEventNotificationTemplate> {
    id: number;
    status: KalturaEventNotificationTemplateStatus;
    constructor(data: EventNotificationTemplateUpdateStatusActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
