import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMailType } from './KalturaMailType';
import { KalturaMailJobStatus } from './KalturaMailJobStatus';
import { KalturaLanguageCode } from './KalturaLanguageCode';
import { KalturaJobData, KalturaJobDataArgs } from './KalturaJobData';
export interface KalturaMailJobDataArgs extends KalturaJobDataArgs {
    mailType?: KalturaMailType;
    mailPriority?: number;
    status?: KalturaMailJobStatus;
    recipientName?: string;
    recipientEmail?: string;
    recipientId?: number;
    fromName?: string;
    fromEmail?: string;
    bodyParams?: string;
    subjectParams?: string;
    templatePath?: string;
    language?: KalturaLanguageCode;
    campaignId?: number;
    minSendDate?: number;
    isHtml?: boolean;
    separator?: string;
}
export declare class KalturaMailJobData extends KalturaJobData {
    mailType: KalturaMailType;
    mailPriority: number;
    status: KalturaMailJobStatus;
    recipientName: string;
    recipientEmail: string;
    recipientId: number;
    fromName: string;
    fromEmail: string;
    bodyParams: string;
    subjectParams: string;
    templatePath: string;
    language: KalturaLanguageCode;
    campaignId: number;
    minSendDate: number;
    isHtml: boolean;
    separator: string;
    constructor(data?: KalturaMailJobDataArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}