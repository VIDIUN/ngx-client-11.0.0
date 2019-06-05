import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBusinessProcessCase } from './KalturaBusinessProcessCase';
import { KalturaEventNotificationEventObjectType } from './KalturaEventNotificationEventObjectType';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface BusinessProcessCaseListActionArgs extends KalturaRequestArgs {
    objectType: KalturaEventNotificationEventObjectType;
    objectId: string;
}
/**
 * Build request payload for service 'businessProcessCase' action 'list'.
 *
 * Usage: list business-process cases
 *
 * Server response type:         KalturaBusinessProcessCase[]
 * Server failure response type: KalturaAPIException
 */
export declare class BusinessProcessCaseListAction extends KalturaRequest<KalturaBusinessProcessCase[]> {
    objectType: KalturaEventNotificationEventObjectType;
    objectId: string;
    constructor(data: BusinessProcessCaseListActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
