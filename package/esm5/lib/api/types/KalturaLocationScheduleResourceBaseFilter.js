/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaScheduleResourceFilter } from './KalturaScheduleResourceFilter';
/**
 * @record
 */
export function KalturaLocationScheduleResourceBaseFilterArgs() { }
var KalturaLocationScheduleResourceBaseFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaLocationScheduleResourceBaseFilter, _super);
    function KalturaLocationScheduleResourceBaseFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaLocationScheduleResourceBaseFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaLocationScheduleResourceBaseFilter' }
        });
        return result;
    };
    return KalturaLocationScheduleResourceBaseFilter;
}(KalturaScheduleResourceFilter));
export { KalturaLocationScheduleResourceBaseFilter };
typesMappingStorage['KalturaLocationScheduleResourceBaseFilter'] = KalturaLocationScheduleResourceBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUxvY2F0aW9uU2NoZWR1bGVSZXNvdXJjZUJhc2VGaWx0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFMb2NhdGlvblNjaGVkdWxlUmVzb3VyY2VCYXNlRmlsdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSw2QkFBNkIsRUFBcUMsTUFBTSxpQ0FBaUMsQ0FBQzs7Ozs7QUFPbkgsSUFBQTtJQUErRCxxRUFBNkI7SUFJeEYsbURBQVksSUFBcUQ7ZUFFN0Qsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyxnRUFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRywyQ0FBMkMsRUFBRTtTQUNyRixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO29EQTVCTDtFQVMrRCw2QkFBNkIsRUFvQjNGLENBQUE7QUFwQkQscURBb0JDO0FBRUQsbUJBQW1CLENBQUMsMkNBQTJDLENBQUMsR0FBRyx5Q0FBeUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhU2NoZWR1bGVSZXNvdXJjZUZpbHRlciwgS2FsdHVyYVNjaGVkdWxlUmVzb3VyY2VGaWx0ZXJBcmdzIH0gZnJvbSAnLi9LYWx0dXJhU2NoZWR1bGVSZXNvdXJjZUZpbHRlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUxvY2F0aW9uU2NoZWR1bGVSZXNvdXJjZUJhc2VGaWx0ZXJBcmdzICBleHRlbmRzIEthbHR1cmFTY2hlZHVsZVJlc291cmNlRmlsdGVyQXJncyB7XG4gICAgXG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFMb2NhdGlvblNjaGVkdWxlUmVzb3VyY2VCYXNlRmlsdGVyIGV4dGVuZHMgS2FsdHVyYVNjaGVkdWxlUmVzb3VyY2VGaWx0ZXIge1xuXG4gICAgXG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFMb2NhdGlvblNjaGVkdWxlUmVzb3VyY2VCYXNlRmlsdGVyQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFMb2NhdGlvblNjaGVkdWxlUmVzb3VyY2VCYXNlRmlsdGVyJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhTG9jYXRpb25TY2hlZHVsZVJlc291cmNlQmFzZUZpbHRlciddID0gS2FsdHVyYUxvY2F0aW9uU2NoZWR1bGVSZXNvdXJjZUJhc2VGaWx0ZXI7Il19