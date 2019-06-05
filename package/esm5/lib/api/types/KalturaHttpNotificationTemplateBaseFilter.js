/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaEventNotificationTemplateFilter } from './KalturaEventNotificationTemplateFilter';
/**
 * @record
 */
export function KalturaHttpNotificationTemplateBaseFilterArgs() { }
var KalturaHttpNotificationTemplateBaseFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaHttpNotificationTemplateBaseFilter, _super);
    function KalturaHttpNotificationTemplateBaseFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaHttpNotificationTemplateBaseFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaHttpNotificationTemplateBaseFilter' }
        });
        return result;
    };
    return KalturaHttpNotificationTemplateBaseFilter;
}(KalturaEventNotificationTemplateFilter));
export { KalturaHttpNotificationTemplateBaseFilter };
typesMappingStorage['KalturaHttpNotificationTemplateBaseFilter'] = KalturaHttpNotificationTemplateBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUh0dHBOb3RpZmljYXRpb25UZW1wbGF0ZUJhc2VGaWx0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFIdHRwTm90aWZpY2F0aW9uVGVtcGxhdGVCYXNlRmlsdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxzQ0FBc0MsRUFBOEMsTUFBTSwwQ0FBMEMsQ0FBQzs7Ozs7QUFPOUksSUFBQTtJQUErRCxxRUFBc0M7SUFJakcsbURBQVksSUFBcUQ7ZUFFN0Qsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyxnRUFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRywyQ0FBMkMsRUFBRTtTQUNyRixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO29EQTVCTDtFQVMrRCxzQ0FBc0MsRUFvQnBHLENBQUE7QUFwQkQscURBb0JDO0FBRUQsbUJBQW1CLENBQUMsMkNBQTJDLENBQUMsR0FBRyx5Q0FBeUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhRXZlbnROb3RpZmljYXRpb25UZW1wbGF0ZUZpbHRlciwgS2FsdHVyYUV2ZW50Tm90aWZpY2F0aW9uVGVtcGxhdGVGaWx0ZXJBcmdzIH0gZnJvbSAnLi9LYWx0dXJhRXZlbnROb3RpZmljYXRpb25UZW1wbGF0ZUZpbHRlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUh0dHBOb3RpZmljYXRpb25UZW1wbGF0ZUJhc2VGaWx0ZXJBcmdzICBleHRlbmRzIEthbHR1cmFFdmVudE5vdGlmaWNhdGlvblRlbXBsYXRlRmlsdGVyQXJncyB7XG4gICAgXG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFIdHRwTm90aWZpY2F0aW9uVGVtcGxhdGVCYXNlRmlsdGVyIGV4dGVuZHMgS2FsdHVyYUV2ZW50Tm90aWZpY2F0aW9uVGVtcGxhdGVGaWx0ZXIge1xuXG4gICAgXG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFIdHRwTm90aWZpY2F0aW9uVGVtcGxhdGVCYXNlRmlsdGVyQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFIdHRwTm90aWZpY2F0aW9uVGVtcGxhdGVCYXNlRmlsdGVyJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhSHR0cE5vdGlmaWNhdGlvblRlbXBsYXRlQmFzZUZpbHRlciddID0gS2FsdHVyYUh0dHBOb3RpZmljYXRpb25UZW1wbGF0ZUJhc2VGaWx0ZXI7Il19