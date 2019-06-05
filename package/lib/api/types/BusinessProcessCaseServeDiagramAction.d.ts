import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaEventNotificationEventObjectType } from './KalturaEventNotificationEventObjectType';
import { KalturaFileRequest, KalturaFileRequestArgs } from '../kaltura-file-request';
export interface BusinessProcessCaseServeDiagramActionArgs extends KalturaFileRequestArgs {
    objectType: KalturaEventNotificationEventObjectType;
    objectId: string;
    businessProcessStartNotificationTemplateId: number;
}
/**
 * Build request payload for service 'businessProcessCase' action 'serveDiagram'.
 *
 * Usage: Server business-process case diagram
 *
 * Server response type:         { url: string }
 * Server failure response type: KalturaAPIException
 */
export declare class BusinessProcessCaseServeDiagramAction extends KalturaFileRequest {
    objectType: KalturaEventNotificationEventObjectType;
    objectId: string;
    businessProcessStartNotificationTemplateId: number;
    constructor(data: BusinessProcessCaseServeDiagramActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
