import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaEventNotificationTemplate } from './KalturaEventNotificationTemplate';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface EventNotificationTemplateGetActionArgs extends KalturaRequestArgs {
    id: number;
}
/**
 * Build request payload for service 'eventNotificationTemplate' action 'get'.
 *
 * Usage: Retrieve an event notification template object by id
 *
 * Server response type:         KalturaEventNotificationTemplate
 * Server failure response type: KalturaAPIException
 */
export declare class EventNotificationTemplateGetAction extends KalturaRequest<KalturaEventNotificationTemplate> {
    id: number;
    constructor(data: EventNotificationTemplateGetActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}