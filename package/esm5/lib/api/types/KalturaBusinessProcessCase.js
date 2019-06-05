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
export function KalturaBusinessProcessCaseArgs() { }
/** @type {?|undefined} */
KalturaBusinessProcessCaseArgs.prototype.id;
/** @type {?|undefined} */
KalturaBusinessProcessCaseArgs.prototype.businessProcessId;
/** @type {?|undefined} */
KalturaBusinessProcessCaseArgs.prototype.businessProcessStartNotificationTemplateId;
/** @type {?|undefined} */
KalturaBusinessProcessCaseArgs.prototype.suspended;
/** @type {?|undefined} */
KalturaBusinessProcessCaseArgs.prototype.activityId;
var KalturaBusinessProcessCase = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaBusinessProcessCase, _super);
    function KalturaBusinessProcessCase(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaBusinessProcessCase.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaBusinessProcessCase' },
            id: { type: 's' },
            businessProcessId: { type: 's' },
            businessProcessStartNotificationTemplateId: { type: 'n' },
            suspended: { type: 'b' },
            activityId: { type: 's' }
        });
        return result;
    };
    return KalturaBusinessProcessCase;
}(KalturaObjectBase));
export { KalturaBusinessProcessCase };
if (false) {
    /** @type {?} */
    KalturaBusinessProcessCase.prototype.id;
    /** @type {?} */
    KalturaBusinessProcessCase.prototype.businessProcessId;
    /** @type {?} */
    KalturaBusinessProcessCase.prototype.businessProcessStartNotificationTemplateId;
    /** @type {?} */
    KalturaBusinessProcessCase.prototype.suspended;
    /** @type {?} */
    KalturaBusinessProcessCase.prototype.activityId;
}
typesMappingStorage['KalturaBusinessProcessCase'] = KalturaBusinessProcessCase;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUJ1c2luZXNzUHJvY2Vzc0Nhc2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFCdXNpbmVzc1Byb2Nlc3NDYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxpQkFBaUIsRUFBeUIsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FBV2xGLElBQUE7SUFBZ0Qsc0RBQWlCO0lBUTdELG9DQUFZLElBQXNDO2VBRTlDLGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsaURBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsNEJBQTRCLEVBQUU7WUFDL0UsRUFBRSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNuQixpQkFBaUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDbEMsMENBQTBDLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzNELFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDMUIsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNsQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO3FDQXpDTDtFQWFnRCxpQkFBaUIsRUE2QmhFLENBQUE7QUE3QkQsc0NBNkJDOzs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsNEJBQTRCLENBQUMsR0FBRywwQkFBMEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0QmFzZSwgS2FsdHVyYU9iamVjdEJhc2VBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUJ1c2luZXNzUHJvY2Vzc0Nhc2VBcmdzICBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlQXJncyB7XG4gICAgaWQ/IDogc3RyaW5nO1xuXHRidXNpbmVzc1Byb2Nlc3NJZD8gOiBzdHJpbmc7XG5cdGJ1c2luZXNzUHJvY2Vzc1N0YXJ0Tm90aWZpY2F0aW9uVGVtcGxhdGVJZD8gOiBudW1iZXI7XG5cdHN1c3BlbmRlZD8gOiBib29sZWFuO1xuXHRhY3Rpdml0eUlkPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUJ1c2luZXNzUHJvY2Vzc0Nhc2UgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZSB7XG5cbiAgICBpZCA6IHN0cmluZztcblx0YnVzaW5lc3NQcm9jZXNzSWQgOiBzdHJpbmc7XG5cdGJ1c2luZXNzUHJvY2Vzc1N0YXJ0Tm90aWZpY2F0aW9uVGVtcGxhdGVJZCA6IG51bWJlcjtcblx0c3VzcGVuZGVkIDogYm9vbGVhbjtcblx0YWN0aXZpdHlJZCA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUJ1c2luZXNzUHJvY2Vzc0Nhc2VBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUJ1c2luZXNzUHJvY2Vzc0Nhc2UnIH0sXG5cdFx0XHRcdGlkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGJ1c2luZXNzUHJvY2Vzc0lkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGJ1c2luZXNzUHJvY2Vzc1N0YXJ0Tm90aWZpY2F0aW9uVGVtcGxhdGVJZCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRzdXNwZW5kZWQgOiB7IHR5cGUgOiAnYicgfSxcblx0XHRcdFx0YWN0aXZpdHlJZCA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhQnVzaW5lc3NQcm9jZXNzQ2FzZSddID0gS2FsdHVyYUJ1c2luZXNzUHJvY2Vzc0Nhc2U7Il19