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
export function KalturaTubeMogulSyndicationFeedBaseFilterArgs() { }
var KalturaTubeMogulSyndicationFeedBaseFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaTubeMogulSyndicationFeedBaseFilter, _super);
    function KalturaTubeMogulSyndicationFeedBaseFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaTubeMogulSyndicationFeedBaseFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaTubeMogulSyndicationFeedBaseFilter' }
        });
        return result;
    };
    return KalturaTubeMogulSyndicationFeedBaseFilter;
}(KalturaBaseSyndicationFeedFilter));
export { KalturaTubeMogulSyndicationFeedBaseFilter };
typesMappingStorage['KalturaTubeMogulSyndicationFeedBaseFilter'] = KalturaTubeMogulSyndicationFeedBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVR1YmVNb2d1bFN5bmRpY2F0aW9uRmVlZEJhc2VGaWx0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFUdWJlTW9ndWxTeW5kaWNhdGlvbkZlZWRCYXNlRmlsdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBd0MsTUFBTSxvQ0FBb0MsQ0FBQzs7Ozs7QUFPNUgsSUFBQTtJQUErRCxxRUFBZ0M7SUFJM0YsbURBQVksSUFBcUQ7ZUFFN0Qsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyxnRUFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRywyQ0FBMkMsRUFBRTtTQUNyRixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO29EQTVCTDtFQVMrRCxnQ0FBZ0MsRUFvQjlGLENBQUE7QUFwQkQscURBb0JDO0FBRUQsbUJBQW1CLENBQUMsMkNBQTJDLENBQUMsR0FBRyx5Q0FBeUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhQmFzZVN5bmRpY2F0aW9uRmVlZEZpbHRlciwgS2FsdHVyYUJhc2VTeW5kaWNhdGlvbkZlZWRGaWx0ZXJBcmdzIH0gZnJvbSAnLi9LYWx0dXJhQmFzZVN5bmRpY2F0aW9uRmVlZEZpbHRlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYVR1YmVNb2d1bFN5bmRpY2F0aW9uRmVlZEJhc2VGaWx0ZXJBcmdzICBleHRlbmRzIEthbHR1cmFCYXNlU3luZGljYXRpb25GZWVkRmlsdGVyQXJncyB7XG4gICAgXG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFUdWJlTW9ndWxTeW5kaWNhdGlvbkZlZWRCYXNlRmlsdGVyIGV4dGVuZHMgS2FsdHVyYUJhc2VTeW5kaWNhdGlvbkZlZWRGaWx0ZXIge1xuXG4gICAgXG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFUdWJlTW9ndWxTeW5kaWNhdGlvbkZlZWRCYXNlRmlsdGVyQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFUdWJlTW9ndWxTeW5kaWNhdGlvbkZlZWRCYXNlRmlsdGVyJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhVHViZU1vZ3VsU3luZGljYXRpb25GZWVkQmFzZUZpbHRlciddID0gS2FsdHVyYVR1YmVNb2d1bFN5bmRpY2F0aW9uRmVlZEJhc2VGaWx0ZXI7Il19