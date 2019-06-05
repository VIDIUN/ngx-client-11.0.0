import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAuditTrail } from './KalturaAuditTrail';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface AuditTrailAddActionArgs extends KalturaRequestArgs {
    auditTrail: KalturaAuditTrail;
}
/**
 * Build request payload for service 'auditTrail' action 'add'.
 *
 * Usage: Allows you to add an audit trail object and audit trail content associated with Kaltura object
 *
 * Server response type:         KalturaAuditTrail
 * Server failure response type: KalturaAPIException
 */
export declare class AuditTrailAddAction extends KalturaRequest<KalturaAuditTrail> {
    auditTrail: KalturaAuditTrail;
    constructor(data: AuditTrailAddActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
