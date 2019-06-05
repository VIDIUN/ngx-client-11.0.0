/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaThumbAsset } from './KalturaThumbAsset';
/**
 * @record
 */
export function KalturaTimedThumbAssetArgs() { }
/** @type {?|undefined} */
KalturaTimedThumbAssetArgs.prototype.cuePointId;
var KalturaTimedThumbAsset = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaTimedThumbAsset, _super);
    function KalturaTimedThumbAsset(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaTimedThumbAsset.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaTimedThumbAsset' },
            cuePointId: { type: 's' }
        });
        return result;
    };
    return KalturaTimedThumbAsset;
}(KalturaThumbAsset));
export { KalturaTimedThumbAsset };
if (false) {
    /** @type {?} */
    KalturaTimedThumbAsset.prototype.cuePointId;
}
typesMappingStorage['KalturaTimedThumbAsset'] = KalturaTimedThumbAsset;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVRpbWVkVGh1bWJBc3NldC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYVRpbWVkVGh1bWJBc3NldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsaUJBQWlCLEVBQXlCLE1BQU0scUJBQXFCLENBQUM7Ozs7Ozs7QUFPL0UsSUFBQTtJQUE0QyxrREFBaUI7SUFJekQsZ0NBQVksSUFBa0M7ZUFFMUMsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyw2Q0FBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyx3QkFBd0IsRUFBRTtZQUMzRSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ2xCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7aUNBN0JMO0VBUzRDLGlCQUFpQixFQXFCNUQsQ0FBQTtBQXJCRCxrQ0FxQkM7Ozs7O0FBRUQsbUJBQW1CLENBQUMsd0JBQXdCLENBQUMsR0FBRyxzQkFBc0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhVGh1bWJBc3NldCwgS2FsdHVyYVRodW1iQXNzZXRBcmdzIH0gZnJvbSAnLi9LYWx0dXJhVGh1bWJBc3NldCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYVRpbWVkVGh1bWJBc3NldEFyZ3MgIGV4dGVuZHMgS2FsdHVyYVRodW1iQXNzZXRBcmdzIHtcbiAgICBjdWVQb2ludElkPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYVRpbWVkVGh1bWJBc3NldCBleHRlbmRzIEthbHR1cmFUaHVtYkFzc2V0IHtcblxuICAgIGN1ZVBvaW50SWQgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFUaW1lZFRodW1iQXNzZXRBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYVRpbWVkVGh1bWJBc3NldCcgfSxcblx0XHRcdFx0Y3VlUG9pbnRJZCA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhVGltZWRUaHVtYkFzc2V0J10gPSBLYWx0dXJhVGltZWRUaHVtYkFzc2V0OyJdfQ==