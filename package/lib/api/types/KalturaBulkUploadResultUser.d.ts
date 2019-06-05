import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBulkUploadResult, KalturaBulkUploadResultArgs } from './KalturaBulkUploadResult';
export interface KalturaBulkUploadResultUserArgs extends KalturaBulkUploadResultArgs {
    userId?: string;
    screenName?: string;
    email?: string;
    description?: string;
    tags?: string;
    dateOfBirth?: number;
    country?: string;
    state?: string;
    city?: string;
    zip?: string;
    gender?: number;
    firstName?: string;
    lastName?: string;
    group?: string;
}
export declare class KalturaBulkUploadResultUser extends KalturaBulkUploadResult {
    userId: string;
    screenName: string;
    email: string;
    description: string;
    tags: string;
    dateOfBirth: number;
    country: string;
    state: string;
    city: string;
    zip: string;
    gender: number;
    firstName: string;
    lastName: string;
    group: string;
    constructor(data?: KalturaBulkUploadResultUserArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
