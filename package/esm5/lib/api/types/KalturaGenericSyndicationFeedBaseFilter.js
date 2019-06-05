/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaBaseSyndicationFeedFilter } from './KalturaBaseSyndicationFeedFilter';
/**
 * @record
 */
export function KalturaGenericSyndicationFeedBaseFilterArgs() { }
var KalturaGenericSyndicationFeedBaseFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaGenericSyndicationFeedBaseFilter, _super);
    function KalturaGenericSyndicationFeedBaseFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaGenericSyndicationFeedBaseFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaGenericSyndicationFeedBaseFilter' }
        });
        return result;
    };
    return KalturaGenericSyndicationFeedBaseFilter;
}(KalturaBaseSyndicationFeedFilter));
export { KalturaGenericSyndicationFeedBaseFilter };
typesMappingStorage['KalturaGenericSyndicationFeedBaseFilter'] = KalturaGenericSyndicationFeedBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUdlbmVyaWNTeW5kaWNhdGlvbkZlZWRCYXNlRmlsdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhR2VuZXJpY1N5bmRpY2F0aW9uRmVlZEJhc2VGaWx0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLGdDQUFnQyxFQUF3QyxNQUFNLG9DQUFvQyxDQUFDOzs7OztBQU81SCxJQUFBO0lBQTZELG1FQUFnQztJQUl6RixpREFBWSxJQUFtRDtlQUUzRCxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLDhEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHlDQUF5QyxFQUFFO1NBQ25GLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7a0RBNUJMO0VBUzZELGdDQUFnQyxFQW9CNUYsQ0FBQTtBQXBCRCxtREFvQkM7QUFFRCxtQkFBbUIsQ0FBQyx5Q0FBeUMsQ0FBQyxHQUFHLHVDQUF1QyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFCYXNlU3luZGljYXRpb25GZWVkRmlsdGVyLCBLYWx0dXJhQmFzZVN5bmRpY2F0aW9uRmVlZEZpbHRlckFyZ3MgfSBmcm9tICcuL0thbHR1cmFCYXNlU3luZGljYXRpb25GZWVkRmlsdGVyJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhR2VuZXJpY1N5bmRpY2F0aW9uRmVlZEJhc2VGaWx0ZXJBcmdzICBleHRlbmRzIEthbHR1cmFCYXNlU3luZGljYXRpb25GZWVkRmlsdGVyQXJncyB7XG4gICAgXG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFHZW5lcmljU3luZGljYXRpb25GZWVkQmFzZUZpbHRlciBleHRlbmRzIEthbHR1cmFCYXNlU3luZGljYXRpb25GZWVkRmlsdGVyIHtcblxuICAgIFxuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhR2VuZXJpY1N5bmRpY2F0aW9uRmVlZEJhc2VGaWx0ZXJBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUdlbmVyaWNTeW5kaWNhdGlvbkZlZWRCYXNlRmlsdGVyJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhR2VuZXJpY1N5bmRpY2F0aW9uRmVlZEJhc2VGaWx0ZXInXSA9IEthbHR1cmFHZW5lcmljU3luZGljYXRpb25GZWVkQmFzZUZpbHRlcjsiXX0=