/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { KalturaBaseSyndicationFeed } from './KalturaBaseSyndicationFeed';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function SyndicationFeedAddActionArgs() { }
/** @type {?} */
SyndicationFeedAddActionArgs.prototype.syndicationFeed;
/**
 * Build request payload for service 'syndicationFeed' action 'add'.
 *
 * Usage: Add new Syndication Feed
 *
 * Server response type:         KalturaBaseSyndicationFeed
 * Server failure response type: KalturaAPIException
 */
export class SyndicationFeedAddAction extends KalturaRequest {
    /**
     * @param {?} data
     */
    constructor(data) {
        super(data, { responseType: 'o', responseSubType: 'KalturaBaseSyndicationFeed', responseConstructor: KalturaBaseSyndicationFeed });
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            service: { type: 'c', default: 'syndicationfeed' },
            action: { type: 'c', default: 'add' },
            syndicationFeed: { type: 'o', subTypeConstructor: KalturaBaseSyndicationFeed, subType: 'KalturaBaseSyndicationFeed' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    SyndicationFeedAddAction.prototype.syndicationFeed;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3luZGljYXRpb25GZWVkQWRkQWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9TeW5kaWNhdGlvbkZlZWRBZGRBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRTFFLE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQWN4RSxNQUFNLCtCQUFnQyxTQUFRLGNBQTBDOzs7O0lBSXBGLFlBQVksSUFBbUM7UUFFM0MsS0FBSyxDQUFDLElBQUksRUFBRSxFQUFDLFlBQVksRUFBRyxHQUFHLEVBQUUsZUFBZSxFQUFHLDRCQUE0QixFQUFFLG1CQUFtQixFQUFHLDBCQUEwQixFQUFHLENBQUMsQ0FBQztLQUN6STs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsaUJBQWlCLEVBQUU7WUFDakUsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsS0FBSyxFQUFFO1lBQ3hDLGVBQWUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsMEJBQTBCLEVBQUUsT0FBTyxFQUFHLDRCQUE0QixFQUFFO1NBQ2hILENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSiIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhQmFzZVN5bmRpY2F0aW9uRmVlZCB9IGZyb20gJy4vS2FsdHVyYUJhc2VTeW5kaWNhdGlvbkZlZWQnO1xuXG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBTeW5kaWNhdGlvbkZlZWRBZGRBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAgc3luZGljYXRpb25GZWVkIDogS2FsdHVyYUJhc2VTeW5kaWNhdGlvbkZlZWQ7XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICdzeW5kaWNhdGlvbkZlZWQnIGFjdGlvbiAnYWRkJy5cbiAqXG4gKiBVc2FnZTogQWRkIG5ldyBTeW5kaWNhdGlvbiBGZWVkXG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgS2FsdHVyYUJhc2VTeW5kaWNhdGlvbkZlZWRcbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIFN5bmRpY2F0aW9uRmVlZEFkZEFjdGlvbiBleHRlbmRzIEthbHR1cmFSZXF1ZXN0PEthbHR1cmFCYXNlU3luZGljYXRpb25GZWVkPiB7XG5cbiAgICBzeW5kaWNhdGlvbkZlZWQgOiBLYWx0dXJhQmFzZVN5bmRpY2F0aW9uRmVlZDtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBTeW5kaWNhdGlvbkZlZWRBZGRBY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSwge3Jlc3BvbnNlVHlwZSA6ICdvJywgcmVzcG9uc2VTdWJUeXBlIDogJ0thbHR1cmFCYXNlU3luZGljYXRpb25GZWVkJywgcmVzcG9uc2VDb25zdHJ1Y3RvciA6IEthbHR1cmFCYXNlU3luZGljYXRpb25GZWVkICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VydmljZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdzeW5kaWNhdGlvbmZlZWQnIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdhZGQnIH0sXG5cdFx0XHRcdHN5bmRpY2F0aW9uRmVlZCA6IHsgdHlwZSA6ICdvJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUJhc2VTeW5kaWNhdGlvbkZlZWQsIHN1YlR5cGUgOiAnS2FsdHVyYUJhc2VTeW5kaWNhdGlvbkZlZWQnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==