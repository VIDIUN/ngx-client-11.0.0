import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaSyndicationDistributionProviderBaseFilter, KalturaSyndicationDistributionProviderBaseFilterArgs } from './KalturaSyndicationDistributionProviderBaseFilter';
export interface KalturaSyndicationDistributionProviderFilterArgs extends KalturaSyndicationDistributionProviderBaseFilterArgs {
}
export declare class KalturaSyndicationDistributionProviderFilter extends KalturaSyndicationDistributionProviderBaseFilter {
    constructor(data?: KalturaSyndicationDistributionProviderFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
