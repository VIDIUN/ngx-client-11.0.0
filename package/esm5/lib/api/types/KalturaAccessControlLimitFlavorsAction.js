/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaRuleAction } from './KalturaRuleAction';
/**
 * @record
 */
export function KalturaAccessControlLimitFlavorsActionArgs() { }
/** @type {?|undefined} */
KalturaAccessControlLimitFlavorsActionArgs.prototype.flavorParamsIds;
/** @type {?|undefined} */
KalturaAccessControlLimitFlavorsActionArgs.prototype.isBlockedList;
var KalturaAccessControlLimitFlavorsAction = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaAccessControlLimitFlavorsAction, _super);
    function KalturaAccessControlLimitFlavorsAction(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaAccessControlLimitFlavorsAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaAccessControlLimitFlavorsAction' },
            flavorParamsIds: { type: 's' },
            isBlockedList: { type: 'b' }
        });
        return result;
    };
    return KalturaAccessControlLimitFlavorsAction;
}(KalturaRuleAction));
export { KalturaAccessControlLimitFlavorsAction };
if (false) {
    /** @type {?} */
    KalturaAccessControlLimitFlavorsAction.prototype.flavorParamsIds;
    /** @type {?} */
    KalturaAccessControlLimitFlavorsAction.prototype.isBlockedList;
}
typesMappingStorage['KalturaAccessControlLimitFlavorsAction'] = KalturaAccessControlLimitFlavorsAction;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUFjY2Vzc0NvbnRyb2xMaW1pdEZsYXZvcnNBY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFBY2Nlc3NDb250cm9sTGltaXRGbGF2b3JzQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxpQkFBaUIsRUFBeUIsTUFBTSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7O0FBUS9FLElBQUE7SUFBNEQsa0VBQWlCO0lBS3pFLGdEQUFZLElBQWtEO2VBRTFELGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsNkRBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsd0NBQXdDLEVBQUU7WUFDM0YsZUFBZSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNoQyxhQUFhLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ3JCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7aURBaENMO0VBVTRELGlCQUFpQixFQXVCNUUsQ0FBQTtBQXZCRCxrREF1QkM7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyx3Q0FBd0MsQ0FBQyxHQUFHLHNDQUFzQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFSdWxlQWN0aW9uLCBLYWx0dXJhUnVsZUFjdGlvbkFyZ3MgfSBmcm9tICcuL0thbHR1cmFSdWxlQWN0aW9uJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhQWNjZXNzQ29udHJvbExpbWl0Rmxhdm9yc0FjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJ1bGVBY3Rpb25BcmdzIHtcbiAgICBmbGF2b3JQYXJhbXNJZHM/IDogc3RyaW5nO1xuXHRpc0Jsb2NrZWRMaXN0PyA6IGJvb2xlYW47XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFBY2Nlc3NDb250cm9sTGltaXRGbGF2b3JzQWN0aW9uIGV4dGVuZHMgS2FsdHVyYVJ1bGVBY3Rpb24ge1xuXG4gICAgZmxhdm9yUGFyYW1zSWRzIDogc3RyaW5nO1xuXHRpc0Jsb2NrZWRMaXN0IDogYm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUFjY2Vzc0NvbnRyb2xMaW1pdEZsYXZvcnNBY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUFjY2Vzc0NvbnRyb2xMaW1pdEZsYXZvcnNBY3Rpb24nIH0sXG5cdFx0XHRcdGZsYXZvclBhcmFtc0lkcyA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRpc0Jsb2NrZWRMaXN0IDogeyB0eXBlIDogJ2InIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFBY2Nlc3NDb250cm9sTGltaXRGbGF2b3JzQWN0aW9uJ10gPSBLYWx0dXJhQWNjZXNzQ29udHJvbExpbWl0Rmxhdm9yc0FjdGlvbjsiXX0=