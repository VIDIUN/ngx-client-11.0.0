/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaGenericXsltSyndicationFeed } from './KalturaGenericXsltSyndicationFeed';
/**
 * @record
 */
export function KalturaConstantXsltSyndicationFeedArgs() { }
export class KalturaConstantXsltSyndicationFeed extends KalturaGenericXsltSyndicationFeed {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data);
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaConstantXsltSyndicationFeed' }
        });
        return result;
    }
}
typesMappingStorage['KalturaConstantXsltSyndicationFeed'] = KalturaConstantXsltSyndicationFeed;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUNvbnN0YW50WHNsdFN5bmRpY2F0aW9uRmVlZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUNvbnN0YW50WHNsdFN5bmRpY2F0aW9uRmVlZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxpQ0FBaUMsRUFBeUMsTUFBTSxxQ0FBcUMsQ0FBQzs7Ozs7QUFPL0gsTUFBTSx5Q0FBMEMsU0FBUSxpQ0FBaUM7Ozs7SUFJckYsWUFBWSxJQUE4QztRQUV0RCxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDZjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsb0NBQW9DLEVBQUU7U0FDOUUsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKO0FBRUQsbUJBQW1CLENBQUMsb0NBQW9DLENBQUMsR0FBRyxrQ0FBa0MsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhR2VuZXJpY1hzbHRTeW5kaWNhdGlvbkZlZWQsIEthbHR1cmFHZW5lcmljWHNsdFN5bmRpY2F0aW9uRmVlZEFyZ3MgfSBmcm9tICcuL0thbHR1cmFHZW5lcmljWHNsdFN5bmRpY2F0aW9uRmVlZCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUNvbnN0YW50WHNsdFN5bmRpY2F0aW9uRmVlZEFyZ3MgIGV4dGVuZHMgS2FsdHVyYUdlbmVyaWNYc2x0U3luZGljYXRpb25GZWVkQXJncyB7XG4gICAgXG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFDb25zdGFudFhzbHRTeW5kaWNhdGlvbkZlZWQgZXh0ZW5kcyBLYWx0dXJhR2VuZXJpY1hzbHRTeW5kaWNhdGlvbkZlZWQge1xuXG4gICAgXG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFDb25zdGFudFhzbHRTeW5kaWNhdGlvbkZlZWRBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUNvbnN0YW50WHNsdFN5bmRpY2F0aW9uRmVlZCcgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUNvbnN0YW50WHNsdFN5bmRpY2F0aW9uRmVlZCddID0gS2FsdHVyYUNvbnN0YW50WHNsdFN5bmRpY2F0aW9uRmVlZDsiXX0=