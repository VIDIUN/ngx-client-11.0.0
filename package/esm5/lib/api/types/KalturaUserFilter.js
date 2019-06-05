/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaUserBaseFilter } from './KalturaUserBaseFilter';
/**
 * @record
 */
export function KalturaUserFilterArgs() { }
/** @type {?|undefined} */
KalturaUserFilterArgs.prototype.idOrScreenNameStartsWith;
/** @type {?|undefined} */
KalturaUserFilterArgs.prototype.idEqual;
/** @type {?|undefined} */
KalturaUserFilterArgs.prototype.idIn;
/** @type {?|undefined} */
KalturaUserFilterArgs.prototype.loginEnabledEqual;
/** @type {?|undefined} */
KalturaUserFilterArgs.prototype.roleIdEqual;
/** @type {?|undefined} */
KalturaUserFilterArgs.prototype.roleIdsEqual;
/** @type {?|undefined} */
KalturaUserFilterArgs.prototype.roleIdsIn;
/** @type {?|undefined} */
KalturaUserFilterArgs.prototype.firstNameOrLastNameStartsWith;
/** @type {?|undefined} */
KalturaUserFilterArgs.prototype.permissionNamesMultiLikeOr;
/** @type {?|undefined} */
KalturaUserFilterArgs.prototype.permissionNamesMultiLikeAnd;
var KalturaUserFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaUserFilter, _super);
    function KalturaUserFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaUserFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaUserFilter' },
            idOrScreenNameStartsWith: { type: 's' },
            idEqual: { type: 's' },
            idIn: { type: 's' },
            loginEnabledEqual: { type: 'en', subTypeConstructor: KalturaNullableBoolean, subType: 'KalturaNullableBoolean' },
            roleIdEqual: { type: 's' },
            roleIdsEqual: { type: 's' },
            roleIdsIn: { type: 's' },
            firstNameOrLastNameStartsWith: { type: 's' },
            permissionNamesMultiLikeOr: { type: 's' },
            permissionNamesMultiLikeAnd: { type: 's' }
        });
        return result;
    };
    return KalturaUserFilter;
}(KalturaUserBaseFilter));
export { KalturaUserFilter };
if (false) {
    /** @type {?} */
    KalturaUserFilter.prototype.idOrScreenNameStartsWith;
    /** @type {?} */
    KalturaUserFilter.prototype.idEqual;
    /** @type {?} */
    KalturaUserFilter.prototype.idIn;
    /** @type {?} */
    KalturaUserFilter.prototype.loginEnabledEqual;
    /** @type {?} */
    KalturaUserFilter.prototype.roleIdEqual;
    /** @type {?} */
    KalturaUserFilter.prototype.roleIdsEqual;
    /** @type {?} */
    KalturaUserFilter.prototype.roleIdsIn;
    /** @type {?} */
    KalturaUserFilter.prototype.firstNameOrLastNameStartsWith;
    /** @type {?} */
    KalturaUserFilter.prototype.permissionNamesMultiLikeOr;
    /** @type {?} */
    KalturaUserFilter.prototype.permissionNamesMultiLikeAnd;
}
typesMappingStorage['KalturaUserFilter'] = KalturaUserFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVVzZXJGaWx0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFVc2VyRmlsdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxxQkFBcUIsRUFBNkIsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdCM0YsSUFBQTtJQUF1Qyw2Q0FBcUI7SUFheEQsMkJBQVksSUFBNkI7ZUFFckMsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyx3Q0FBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxtQkFBbUIsRUFBRTtZQUN0RSx3QkFBd0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekMsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN4QixJQUFJLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3JCLGlCQUFpQixFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxzQkFBc0IsRUFBRSxPQUFPLEVBQUcsd0JBQXdCLEVBQUU7WUFDcEgsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1QixZQUFZLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzdCLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDMUIsNkJBQTZCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzlDLDBCQUEwQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMzQywyQkFBMkIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDbkMsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjs0QkF6REw7RUFtQnVDLHFCQUFxQixFQXVDM0QsQ0FBQTtBQXZDRCw2QkF1Q0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsbUJBQW1CLENBQUMsR0FBRyxpQkFBaUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhTnVsbGFibGVCb29sZWFuIH0gZnJvbSAnLi9LYWx0dXJhTnVsbGFibGVCb29sZWFuJztcbmltcG9ydCB7IEthbHR1cmFVc2VyQmFzZUZpbHRlciwgS2FsdHVyYVVzZXJCYXNlRmlsdGVyQXJncyB9IGZyb20gJy4vS2FsdHVyYVVzZXJCYXNlRmlsdGVyJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhVXNlckZpbHRlckFyZ3MgIGV4dGVuZHMgS2FsdHVyYVVzZXJCYXNlRmlsdGVyQXJncyB7XG4gICAgaWRPclNjcmVlbk5hbWVTdGFydHNXaXRoPyA6IHN0cmluZztcblx0aWRFcXVhbD8gOiBzdHJpbmc7XG5cdGlkSW4/IDogc3RyaW5nO1xuXHRsb2dpbkVuYWJsZWRFcXVhbD8gOiBLYWx0dXJhTnVsbGFibGVCb29sZWFuO1xuXHRyb2xlSWRFcXVhbD8gOiBzdHJpbmc7XG5cdHJvbGVJZHNFcXVhbD8gOiBzdHJpbmc7XG5cdHJvbGVJZHNJbj8gOiBzdHJpbmc7XG5cdGZpcnN0TmFtZU9yTGFzdE5hbWVTdGFydHNXaXRoPyA6IHN0cmluZztcblx0cGVybWlzc2lvbk5hbWVzTXVsdGlMaWtlT3I/IDogc3RyaW5nO1xuXHRwZXJtaXNzaW9uTmFtZXNNdWx0aUxpa2VBbmQ/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhVXNlckZpbHRlciBleHRlbmRzIEthbHR1cmFVc2VyQmFzZUZpbHRlciB7XG5cbiAgICBpZE9yU2NyZWVuTmFtZVN0YXJ0c1dpdGggOiBzdHJpbmc7XG5cdGlkRXF1YWwgOiBzdHJpbmc7XG5cdGlkSW4gOiBzdHJpbmc7XG5cdGxvZ2luRW5hYmxlZEVxdWFsIDogS2FsdHVyYU51bGxhYmxlQm9vbGVhbjtcblx0cm9sZUlkRXF1YWwgOiBzdHJpbmc7XG5cdHJvbGVJZHNFcXVhbCA6IHN0cmluZztcblx0cm9sZUlkc0luIDogc3RyaW5nO1xuXHRmaXJzdE5hbWVPckxhc3ROYW1lU3RhcnRzV2l0aCA6IHN0cmluZztcblx0cGVybWlzc2lvbk5hbWVzTXVsdGlMaWtlT3IgOiBzdHJpbmc7XG5cdHBlcm1pc3Npb25OYW1lc011bHRpTGlrZUFuZCA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYVVzZXJGaWx0ZXJBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYVVzZXJGaWx0ZXInIH0sXG5cdFx0XHRcdGlkT3JTY3JlZW5OYW1lU3RhcnRzV2l0aCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRpZEVxdWFsIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGlkSW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0bG9naW5FbmFibGVkRXF1YWwgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhTnVsbGFibGVCb29sZWFuLCBzdWJUeXBlIDogJ0thbHR1cmFOdWxsYWJsZUJvb2xlYW4nIH0sXG5cdFx0XHRcdHJvbGVJZEVxdWFsIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHJvbGVJZHNFcXVhbCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRyb2xlSWRzSW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Zmlyc3ROYW1lT3JMYXN0TmFtZVN0YXJ0c1dpdGggOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cGVybWlzc2lvbk5hbWVzTXVsdGlMaWtlT3IgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cGVybWlzc2lvbk5hbWVzTXVsdGlMaWtlQW5kIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFVc2VyRmlsdGVyJ10gPSBLYWx0dXJhVXNlckZpbHRlcjsiXX0=