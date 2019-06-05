/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaESearchOrderBy } from './KalturaESearchOrderBy';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaESearchParamsArgs() { }
/** @type {?|undefined} */
KalturaESearchParamsArgs.prototype.objectStatuses;
/** @type {?|undefined} */
KalturaESearchParamsArgs.prototype.objectId;
/** @type {?|undefined} */
KalturaESearchParamsArgs.prototype.orderBy;
var KalturaESearchParams = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaESearchParams, _super);
    function KalturaESearchParams(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaESearchParams.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaESearchParams' },
            objectStatuses: { type: 's' },
            objectId: { type: 's' },
            orderBy: { type: 'o', subTypeConstructor: KalturaESearchOrderBy, subType: 'KalturaESearchOrderBy' }
        });
        return result;
    };
    return KalturaESearchParams;
}(KalturaObjectBase));
export { KalturaESearchParams };
if (false) {
    /** @type {?} */
    KalturaESearchParams.prototype.objectStatuses;
    /** @type {?} */
    KalturaESearchParams.prototype.objectId;
    /** @type {?} */
    KalturaESearchParams.prototype.orderBy;
}
typesMappingStorage['KalturaESearchParams'] = KalturaESearchParams;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUVTZWFyY2hQYXJhbXMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFFU2VhcmNoUGFyYW1zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxpQkFBaUIsRUFBeUIsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7Ozs7Ozs7QUFTbEYsSUFBQTtJQUEwQyxnREFBaUI7SUFNdkQsOEJBQVksSUFBZ0M7ZUFFeEMsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUywyQ0FBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxzQkFBc0IsRUFBRTtZQUN6RSxjQUFjLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQy9CLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxxQkFBcUIsRUFBRSxPQUFPLEVBQUcsdUJBQXVCLEVBQUU7U0FDOUYsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjsrQkFwQ0w7RUFZMEMsaUJBQWlCLEVBeUIxRCxDQUFBO0FBekJELGdDQXlCQzs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsc0JBQXNCLENBQUMsR0FBRyxvQkFBb0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhRVNlYXJjaE9yZGVyQnkgfSBmcm9tICcuL0thbHR1cmFFU2VhcmNoT3JkZXJCeSc7XG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0QmFzZSwgS2FsdHVyYU9iamVjdEJhc2VBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUVTZWFyY2hQYXJhbXNBcmdzICBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlQXJncyB7XG4gICAgb2JqZWN0U3RhdHVzZXM/IDogc3RyaW5nO1xuXHRvYmplY3RJZD8gOiBzdHJpbmc7XG5cdG9yZGVyQnk/IDogS2FsdHVyYUVTZWFyY2hPcmRlckJ5O1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhRVNlYXJjaFBhcmFtcyBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlIHtcblxuICAgIG9iamVjdFN0YXR1c2VzIDogc3RyaW5nO1xuXHRvYmplY3RJZCA6IHN0cmluZztcblx0b3JkZXJCeSA6IEthbHR1cmFFU2VhcmNoT3JkZXJCeTtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUVTZWFyY2hQYXJhbXNBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUVTZWFyY2hQYXJhbXMnIH0sXG5cdFx0XHRcdG9iamVjdFN0YXR1c2VzIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdG9iamVjdElkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdG9yZGVyQnkgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFFU2VhcmNoT3JkZXJCeSwgc3ViVHlwZSA6ICdLYWx0dXJhRVNlYXJjaE9yZGVyQnknIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFFU2VhcmNoUGFyYW1zJ10gPSBLYWx0dXJhRVNlYXJjaFBhcmFtczsiXX0=