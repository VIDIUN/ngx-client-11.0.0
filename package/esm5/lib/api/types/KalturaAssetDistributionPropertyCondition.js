/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaAssetDistributionCondition } from './KalturaAssetDistributionCondition';
/**
 * @record
 */
export function KalturaAssetDistributionPropertyConditionArgs() { }
/** @type {?|undefined} */
KalturaAssetDistributionPropertyConditionArgs.prototype.propertyName;
/** @type {?|undefined} */
KalturaAssetDistributionPropertyConditionArgs.prototype.propertyValue;
var KalturaAssetDistributionPropertyCondition = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaAssetDistributionPropertyCondition, _super);
    function KalturaAssetDistributionPropertyCondition(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaAssetDistributionPropertyCondition.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaAssetDistributionPropertyCondition' },
            propertyName: { type: 's' },
            propertyValue: { type: 's' }
        });
        return result;
    };
    return KalturaAssetDistributionPropertyCondition;
}(KalturaAssetDistributionCondition));
export { KalturaAssetDistributionPropertyCondition };
if (false) {
    /** @type {?} */
    KalturaAssetDistributionPropertyCondition.prototype.propertyName;
    /** @type {?} */
    KalturaAssetDistributionPropertyCondition.prototype.propertyValue;
}
typesMappingStorage['KalturaAssetDistributionPropertyCondition'] = KalturaAssetDistributionPropertyCondition;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUFzc2V0RGlzdHJpYnV0aW9uUHJvcGVydHlDb25kaXRpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFBc3NldERpc3RyaWJ1dGlvblByb3BlcnR5Q29uZGl0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxpQ0FBaUMsRUFBeUMsTUFBTSxxQ0FBcUMsQ0FBQzs7Ozs7Ozs7O0FBUS9ILElBQUE7SUFBK0QscUVBQWlDO0lBSzVGLG1EQUFZLElBQXFEO2VBRTdELGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsZ0VBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsMkNBQTJDLEVBQUU7WUFDOUYsWUFBWSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM3QixhQUFhLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ3JCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7b0RBaENMO0VBVStELGlDQUFpQyxFQXVCL0YsQ0FBQTtBQXZCRCxxREF1QkM7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQywyQ0FBMkMsQ0FBQyxHQUFHLHlDQUF5QyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFBc3NldERpc3RyaWJ1dGlvbkNvbmRpdGlvbiwgS2FsdHVyYUFzc2V0RGlzdHJpYnV0aW9uQ29uZGl0aW9uQXJncyB9IGZyb20gJy4vS2FsdHVyYUFzc2V0RGlzdHJpYnV0aW9uQ29uZGl0aW9uJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhQXNzZXREaXN0cmlidXRpb25Qcm9wZXJ0eUNvbmRpdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYUFzc2V0RGlzdHJpYnV0aW9uQ29uZGl0aW9uQXJncyB7XG4gICAgcHJvcGVydHlOYW1lPyA6IHN0cmluZztcblx0cHJvcGVydHlWYWx1ZT8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFBc3NldERpc3RyaWJ1dGlvblByb3BlcnR5Q29uZGl0aW9uIGV4dGVuZHMgS2FsdHVyYUFzc2V0RGlzdHJpYnV0aW9uQ29uZGl0aW9uIHtcblxuICAgIHByb3BlcnR5TmFtZSA6IHN0cmluZztcblx0cHJvcGVydHlWYWx1ZSA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUFzc2V0RGlzdHJpYnV0aW9uUHJvcGVydHlDb25kaXRpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUFzc2V0RGlzdHJpYnV0aW9uUHJvcGVydHlDb25kaXRpb24nIH0sXG5cdFx0XHRcdHByb3BlcnR5TmFtZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRwcm9wZXJ0eVZhbHVlIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFBc3NldERpc3RyaWJ1dGlvblByb3BlcnR5Q29uZGl0aW9uJ10gPSBLYWx0dXJhQXNzZXREaXN0cmlidXRpb25Qcm9wZXJ0eUNvbmRpdGlvbjsiXX0=