import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaEventNotificationEventObjectType } from './KalturaEventNotificationEventObjectType';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface BusinessProcessCaseAbortActionArgs extends KalturaRequestArgs {
    objectType: KalturaEventNotificationEventObjectType;
    objectId: string;
    businessProcessStartNotificationTemplateId: number;
}
/**
 * Build request payload for service 'businessProcessCase' action 'abort'.
 *
 * Usage: Abort business-process case
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
export declare class BusinessProcessCaseAbortAction extends KalturaRequest<void> {
    objectType: KalturaEventNotificationEventObjectType;
    objectId: string;
    businessProcessStartNotificationTemplateId: number;
    constructor(data: BusinessProcessCaseAbortActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
