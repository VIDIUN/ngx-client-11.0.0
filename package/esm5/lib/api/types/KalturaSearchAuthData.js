/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaSearchAuthDataArgs() { }
/** @type {?|undefined} */
KalturaSearchAuthDataArgs.prototype.authData;
/** @type {?|undefined} */
KalturaSearchAuthDataArgs.prototype.loginUrl;
/** @type {?|undefined} */
KalturaSearchAuthDataArgs.prototype.message;
var KalturaSearchAuthData = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaSearchAuthData, _super);
    function KalturaSearchAuthData(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaSearchAuthData.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaSearchAuthData' },
            authData: { type: 's' },
            loginUrl: { type: 's' },
            message: { type: 's' }
        });
        return result;
    };
    return KalturaSearchAuthData;
}(KalturaObjectBase));
export { KalturaSearchAuthData };
if (false) {
    /** @type {?} */
    KalturaSearchAuthData.prototype.authData;
    /** @type {?} */
    KalturaSearchAuthData.prototype.loginUrl;
    /** @type {?} */
    KalturaSearchAuthData.prototype.message;
}
typesMappingStorage['KalturaSearchAuthData'] = KalturaSearchAuthData;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVNlYXJjaEF1dGhEYXRhLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhU2VhcmNoQXV0aERhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLGlCQUFpQixFQUF5QixNQUFNLHdCQUF3QixDQUFDOzs7Ozs7Ozs7OztBQVNsRixJQUFBO0lBQTJDLGlEQUFpQjtJQU14RCwrQkFBWSxJQUFpQztlQUV6QyxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLDRDQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHVCQUF1QixFQUFFO1lBQzFFLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ2YsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtnQ0FuQ0w7RUFXMkMsaUJBQWlCLEVBeUIzRCxDQUFBO0FBekJELGlDQXlCQzs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsdUJBQXVCLENBQUMsR0FBRyxxQkFBcUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0QmFzZSwgS2FsdHVyYU9iamVjdEJhc2VBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYVNlYXJjaEF1dGhEYXRhQXJncyAgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZUFyZ3Mge1xuICAgIGF1dGhEYXRhPyA6IHN0cmluZztcblx0bG9naW5Vcmw/IDogc3RyaW5nO1xuXHRtZXNzYWdlPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYVNlYXJjaEF1dGhEYXRhIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2Uge1xuXG4gICAgYXV0aERhdGEgOiBzdHJpbmc7XG5cdGxvZ2luVXJsIDogc3RyaW5nO1xuXHRtZXNzYWdlIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhU2VhcmNoQXV0aERhdGFBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYVNlYXJjaEF1dGhEYXRhJyB9LFxuXHRcdFx0XHRhdXRoRGF0YSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRsb2dpblVybCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRtZXNzYWdlIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFTZWFyY2hBdXRoRGF0YSddID0gS2FsdHVyYVNlYXJjaEF1dGhEYXRhOyJdfQ==