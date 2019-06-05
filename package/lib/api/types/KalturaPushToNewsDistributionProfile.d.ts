import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDistributionProtocol } from './KalturaDistributionProtocol';
import { KalturaConfigurableDistributionProfile, KalturaConfigurableDistributionProfileArgs } from './KalturaConfigurableDistributionProfile';
export interface KalturaPushToNewsDistributionProfileArgs extends KalturaConfigurableDistributionProfileArgs {
    protocol?: KalturaDistributionProtocol;
    host?: string;
    ips?: string;
    port?: number;
    basePath?: string;
    username?: string;
    password?: string;
    certificateKey?: string;
    bodyXslt?: string;
    recentNewsTimeInterval?: number;
}
export declare class KalturaPushToNewsDistributionProfile extends KalturaConfigurableDistributionProfile {
    protocol: KalturaDistributionProtocol;
    host: string;
    ips: string;
    port: number;
    basePath: string;
    username: string;
    password: string;
    certificateKey: string;
    bodyXslt: string;
    recentNewsTimeInterval: number;
    constructor(data?: KalturaPushToNewsDistributionProfileArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
