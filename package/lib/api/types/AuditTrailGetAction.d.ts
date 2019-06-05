import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAuditTrail } from './KalturaAuditTrail';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface AuditTrailGetActionArgs extends KalturaRequestArgs {
    id: number;
}
/**
 * Build request payload for service 'auditTrail' action 'get'.
 *
 * Usage: Retrieve an audit trail object by id
 *
 * Server response type:         KalturaAuditTrail
 * Server failure response type: KalturaAPIException
 */
export declare class AuditTrailGetAction extends KalturaRequest<KalturaAuditTrail> {
    id: number;
    constructor(data: AuditTrailGetActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}