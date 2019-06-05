/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaDistributionProfileFilter } from './KalturaDistributionProfileFilter';
/**
 * @record
 */
export function KalturaSyndicationDistributionProfileBaseFilterArgs() { }
var KalturaSyndicationDistributionProfileBaseFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaSyndicationDistributionProfileBaseFilter, _super);
    function KalturaSyndicationDistributionProfileBaseFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaSyndicationDistributionProfileBaseFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaSyndicationDistributionProfileBaseFilter' }
        });
        return result;
    };
    return KalturaSyndicationDistributionProfileBaseFilter;
}(KalturaDistributionProfileFilter));
export { KalturaSyndicationDistributionProfileBaseFilter };
typesMappingStorage['KalturaSyndicationDistributionProfileBaseFilter'] = KalturaSyndicationDistributionProfileBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVN5bmRpY2F0aW9uRGlzdHJpYnV0aW9uUHJvZmlsZUJhc2VGaWx0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFTeW5kaWNhdGlvbkRpc3RyaWJ1dGlvblByb2ZpbGVCYXNlRmlsdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBd0MsTUFBTSxvQ0FBb0MsQ0FBQzs7Ozs7QUFPNUgsSUFBQTtJQUFxRSwyRUFBZ0M7SUFJakcseURBQVksSUFBMkQ7ZUFFbkUsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyxzRUFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxpREFBaUQsRUFBRTtTQUMzRixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCOzBEQTVCTDtFQVNxRSxnQ0FBZ0MsRUFvQnBHLENBQUE7QUFwQkQsMkRBb0JDO0FBRUQsbUJBQW1CLENBQUMsaURBQWlELENBQUMsR0FBRywrQ0FBK0MsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhRGlzdHJpYnV0aW9uUHJvZmlsZUZpbHRlciwgS2FsdHVyYURpc3RyaWJ1dGlvblByb2ZpbGVGaWx0ZXJBcmdzIH0gZnJvbSAnLi9LYWx0dXJhRGlzdHJpYnV0aW9uUHJvZmlsZUZpbHRlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYVN5bmRpY2F0aW9uRGlzdHJpYnV0aW9uUHJvZmlsZUJhc2VGaWx0ZXJBcmdzICBleHRlbmRzIEthbHR1cmFEaXN0cmlidXRpb25Qcm9maWxlRmlsdGVyQXJncyB7XG4gICAgXG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFTeW5kaWNhdGlvbkRpc3RyaWJ1dGlvblByb2ZpbGVCYXNlRmlsdGVyIGV4dGVuZHMgS2FsdHVyYURpc3RyaWJ1dGlvblByb2ZpbGVGaWx0ZXIge1xuXG4gICAgXG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFTeW5kaWNhdGlvbkRpc3RyaWJ1dGlvblByb2ZpbGVCYXNlRmlsdGVyQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFTeW5kaWNhdGlvbkRpc3RyaWJ1dGlvblByb2ZpbGVCYXNlRmlsdGVyJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhU3luZGljYXRpb25EaXN0cmlidXRpb25Qcm9maWxlQmFzZUZpbHRlciddID0gS2FsdHVyYVN5bmRpY2F0aW9uRGlzdHJpYnV0aW9uUHJvZmlsZUJhc2VGaWx0ZXI7Il19