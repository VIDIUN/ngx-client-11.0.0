import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTvinciDistributionTag } from './KalturaTvinciDistributionTag';
import { KalturaConfigurableDistributionProfile, KalturaConfigurableDistributionProfileArgs } from './KalturaConfigurableDistributionProfile';
export interface KalturaTvinciDistributionProfileArgs extends KalturaConfigurableDistributionProfileArgs {
    ingestUrl?: string;
    username?: string;
    password?: string;
    tags?: KalturaTvinciDistributionTag[];
    xsltFile?: string;
}
export declare class KalturaTvinciDistributionProfile extends KalturaConfigurableDistributionProfile {
    ingestUrl: string;
    username: string;
    password: string;
    tags: KalturaTvinciDistributionTag[];
    xsltFile: string;
    constructor(data?: KalturaTvinciDistributionProfileArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
