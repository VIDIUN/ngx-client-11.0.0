import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAuditTrailStatus } from './KalturaAuditTrailStatus';
import { KalturaAuditTrailObjectType } from './KalturaAuditTrailObjectType';
import { KalturaAuditTrailAction } from './KalturaAuditTrailAction';
import { KalturaAuditTrailContext } from './KalturaAuditTrailContext';
import { KalturaRelatedFilter, KalturaRelatedFilterArgs } from './KalturaRelatedFilter';
export interface KalturaAuditTrailBaseFilterArgs extends KalturaRelatedFilterArgs {
    idEqual?: number;
    createdAtGreaterThanOrEqual?: Date;
    createdAtLessThanOrEqual?: Date;
    parsedAtGreaterThanOrEqual?: number;
    parsedAtLessThanOrEqual?: number;
    statusEqual?: KalturaAuditTrailStatus;
    statusIn?: string;
    auditObjectTypeEqual?: KalturaAuditTrailObjectType;
    auditObjectTypeIn?: string;
    objectIdEqual?: string;
    objectIdIn?: string;
    relatedObjectIdEqual?: string;
    relatedObjectIdIn?: string;
    relatedObjectTypeEqual?: KalturaAuditTrailObjectType;
    relatedObjectTypeIn?: string;
    entryIdEqual?: string;
    entryIdIn?: string;
    masterPartnerIdEqual?: number;
    masterPartnerIdIn?: string;
    partnerIdEqual?: number;
    partnerIdIn?: string;
    requestIdEqual?: string;
    requestIdIn?: string;
    userIdEqual?: string;
    userIdIn?: string;
    actionEqual?: KalturaAuditTrailAction;
    actionIn?: string;
    ksEqual?: string;
    contextEqual?: KalturaAuditTrailContext;
    contextIn?: string;
    entryPointEqual?: string;
    entryPointIn?: string;
    serverNameEqual?: string;
    serverNameIn?: string;
    ipAddressEqual?: string;
    ipAddressIn?: string;
    clientTagEqual?: string;
}
export declare class KalturaAuditTrailBaseFilter extends KalturaRelatedFilter {
    idEqual: number;
    createdAtGreaterThanOrEqual: Date;
    createdAtLessThanOrEqual: Date;
    parsedAtGreaterThanOrEqual: number;
    parsedAtLessThanOrEqual: number;
    statusEqual: KalturaAuditTrailStatus;
    statusIn: string;
    auditObjectTypeEqual: KalturaAuditTrailObjectType;
    auditObjectTypeIn: string;
    objectIdEqual: string;
    objectIdIn: string;
    relatedObjectIdEqual: string;
    relatedObjectIdIn: string;
    relatedObjectTypeEqual: KalturaAuditTrailObjectType;
    relatedObjectTypeIn: string;
    entryIdEqual: string;
    entryIdIn: string;
    masterPartnerIdEqual: number;
    masterPartnerIdIn: string;
    partnerIdEqual: number;
    partnerIdIn: string;
    requestIdEqual: string;
    requestIdIn: string;
    userIdEqual: string;
    userIdIn: string;
    actionEqual: KalturaAuditTrailAction;
    actionIn: string;
    ksEqual: string;
    contextEqual: KalturaAuditTrailContext;
    contextIn: string;
    entryPointEqual: string;
    entryPointIn: string;
    serverNameEqual: string;
    serverNameIn: string;
    ipAddressEqual: string;
    ipAddressIn: string;
    clientTagEqual: string;
    constructor(data?: KalturaAuditTrailBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}