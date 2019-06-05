/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { KalturaFlavorParamsListResponse } from './KalturaFlavorParamsListResponse';
import { KalturaFlavorParamsFilter } from './KalturaFlavorParamsFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function FlavorParamsListActionArgs() { }
/** @type {?|undefined} */
FlavorParamsListActionArgs.prototype.filter;
/** @type {?|undefined} */
FlavorParamsListActionArgs.prototype.pager;
/**
 * Build request payload for service 'flavorParams' action 'list'.
 *
 * Usage: List Flavor Params by filter with paging support (By default - all system default params will be listed too)
 *
 * Server response type:         KalturaFlavorParamsListResponse
 * Server failure response type: KalturaAPIException
 */
export class FlavorParamsListAction extends KalturaRequest {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data, { responseType: 'o', responseSubType: 'KalturaFlavorParamsListResponse', responseConstructor: KalturaFlavorParamsListResponse });
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            service: { type: 'c', default: 'flavorparams' },
            action: { type: 'c', default: 'list' },
            filter: { type: 'o', subTypeConstructor: KalturaFlavorParamsFilter, subType: 'KalturaFlavorParamsFilter' },
            pager: { type: 'o', subTypeConstructor: KalturaFilterPager, subType: 'KalturaFilterPager' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    FlavorParamsListAction.prototype.filter;
    /** @type {?} */
    FlavorParamsListAction.prototype.pager;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmxhdm9yUGFyYW1zTGlzdEFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvRmxhdm9yUGFyYW1zTGlzdEFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFFcEYsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDeEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFleEUsTUFBTSw2QkFBOEIsU0FBUSxjQUErQzs7OztJQUt2RixZQUFZLElBQWtDO1FBRTFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRyxpQ0FBaUMsRUFBRSxtQkFBbUIsRUFBRywrQkFBK0IsRUFBRyxDQUFDLENBQUM7S0FDbko7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGNBQWMsRUFBRTtZQUM5RCxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxNQUFNLEVBQUU7WUFDekMsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyx5QkFBeUIsRUFBRSxPQUFPLEVBQUcsMkJBQTJCLEVBQUU7WUFDOUcsS0FBSyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxrQkFBa0IsRUFBRSxPQUFPLEVBQUcsb0JBQW9CLEVBQUU7U0FDdEYsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFGbGF2b3JQYXJhbXNMaXN0UmVzcG9uc2UgfSBmcm9tICcuL0thbHR1cmFGbGF2b3JQYXJhbXNMaXN0UmVzcG9uc2UnO1xuXG5pbXBvcnQgeyBLYWx0dXJhRmxhdm9yUGFyYW1zRmlsdGVyIH0gZnJvbSAnLi9LYWx0dXJhRmxhdm9yUGFyYW1zRmlsdGVyJztcbmltcG9ydCB7IEthbHR1cmFGaWx0ZXJQYWdlciB9IGZyb20gJy4vS2FsdHVyYUZpbHRlclBhZ2VyJztcbmltcG9ydCB7IEthbHR1cmFSZXF1ZXN0LCBLYWx0dXJhUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEZsYXZvclBhcmFtc0xpc3RBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAgZmlsdGVyPyA6IEthbHR1cmFGbGF2b3JQYXJhbXNGaWx0ZXI7XG5cdHBhZ2VyPyA6IEthbHR1cmFGaWx0ZXJQYWdlcjtcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ2ZsYXZvclBhcmFtcycgYWN0aW9uICdsaXN0Jy5cbiAqXG4gKiBVc2FnZTogTGlzdCBGbGF2b3IgUGFyYW1zIGJ5IGZpbHRlciB3aXRoIHBhZ2luZyBzdXBwb3J0IChCeSBkZWZhdWx0IC0gYWxsIHN5c3RlbSBkZWZhdWx0IHBhcmFtcyB3aWxsIGJlIGxpc3RlZCB0b28pXG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgS2FsdHVyYUZsYXZvclBhcmFtc0xpc3RSZXNwb25zZVxuICogU2VydmVyIGZhaWx1cmUgcmVzcG9uc2UgdHlwZTogS2FsdHVyYUFQSUV4Y2VwdGlvblxuICovXG5leHBvcnQgY2xhc3MgRmxhdm9yUGFyYW1zTGlzdEFjdGlvbiBleHRlbmRzIEthbHR1cmFSZXF1ZXN0PEthbHR1cmFGbGF2b3JQYXJhbXNMaXN0UmVzcG9uc2U+IHtcblxuICAgIGZpbHRlciA6IEthbHR1cmFGbGF2b3JQYXJhbXNGaWx0ZXI7XG5cdHBhZ2VyIDogS2FsdHVyYUZpbHRlclBhZ2VyO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBGbGF2b3JQYXJhbXNMaXN0QWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAnbycsIHJlc3BvbnNlU3ViVHlwZSA6ICdLYWx0dXJhRmxhdm9yUGFyYW1zTGlzdFJlc3BvbnNlJywgcmVzcG9uc2VDb25zdHJ1Y3RvciA6IEthbHR1cmFGbGF2b3JQYXJhbXNMaXN0UmVzcG9uc2UgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2ZsYXZvcnBhcmFtcycgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2xpc3QnIH0sXG5cdFx0XHRcdGZpbHRlciA6IHsgdHlwZSA6ICdvJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUZsYXZvclBhcmFtc0ZpbHRlciwgc3ViVHlwZSA6ICdLYWx0dXJhRmxhdm9yUGFyYW1zRmlsdGVyJyB9LFxuXHRcdFx0XHRwYWdlciA6IHsgdHlwZSA6ICdvJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUZpbHRlclBhZ2VyLCBzdWJUeXBlIDogJ0thbHR1cmFGaWx0ZXJQYWdlcicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuIl19