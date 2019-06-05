import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPushNotificationData } from './KalturaPushNotificationData';
import { KalturaPushNotificationParams } from './KalturaPushNotificationParams';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface EventNotificationTemplateRegisterActionArgs extends KalturaRequestArgs {
    notificationTemplateSystemName: string;
    pushNotificationParams: KalturaPushNotificationParams;
}
/**
 * Build request payload for service 'eventNotificationTemplate' action 'register'.
 *
 * Usage: Register to a queue from which event messages will be provided according to given template. Queue will be created if not already exists
 *
 * Server response type:         KalturaPushNotificationData
 * Server failure response type: KalturaAPIException
 */
export declare class EventNotificationTemplateRegisterAction extends KalturaRequest<KalturaPushNotificationData> {
    notificationTemplateSystemName: string;
    pushNotificationParams: KalturaPushNotificationParams;
    constructor(data: EventNotificationTemplateRegisterActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
