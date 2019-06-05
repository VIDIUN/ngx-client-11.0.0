import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAuditTrailListResponse } from './KalturaAuditTrailListResponse';
import { KalturaAuditTrailFilter } from './KalturaAuditTrailFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface AuditTrailListActionArgs extends KalturaRequestArgs {
    filter?: KalturaAuditTrailFilter;
    pager?: KalturaFilterPager;
}
/**
 * Build request payload for service 'auditTrail' action 'list'.
 *
 * Usage: List audit trail objects by filter and pager
 *
 * Server response type:         KalturaAuditTrailListResponse
 * Server failure response type: KalturaAPIException
 */
export declare class AuditTrailListAction extends KalturaRequest<KalturaAuditTrailListResponse> {
    filter: KalturaAuditTrailFilter;
    pager: KalturaFilterPager;
    constructor(data?: AuditTrailListActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
