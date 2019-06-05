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
export function KalturaESearchRangeArgs() { }
/** @type {?|undefined} */
KalturaESearchRangeArgs.prototype.greaterThanOrEqual;
/** @type {?|undefined} */
KalturaESearchRangeArgs.prototype.lessThanOrEqual;
/** @type {?|undefined} */
KalturaESearchRangeArgs.prototype.greaterThan;
/** @type {?|undefined} */
KalturaESearchRangeArgs.prototype.lessThan;
var KalturaESearchRange = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaESearchRange, _super);
    function KalturaESearchRange(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaESearchRange.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaESearchRange' },
            greaterThanOrEqual: { type: 'n' },
            lessThanOrEqual: { type: 'n' },
            greaterThan: { type: 'n' },
            lessThan: { type: 'n' }
        });
        return result;
    };
    return KalturaESearchRange;
}(KalturaObjectBase));
export { KalturaESearchRange };
if (false) {
    /** @type {?} */
    KalturaESearchRange.prototype.greaterThanOrEqual;
    /** @type {?} */
    KalturaESearchRange.prototype.lessThanOrEqual;
    /** @type {?} */
    KalturaESearchRange.prototype.greaterThan;
    /** @type {?} */
    KalturaESearchRange.prototype.lessThan;
}
typesMappingStorage['KalturaESearchRange'] = KalturaESearchRange;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUVTZWFyY2hSYW5nZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUVTZWFyY2hSYW5nZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsaUJBQWlCLEVBQXlCLE1BQU0sd0JBQXdCLENBQUM7Ozs7Ozs7Ozs7Ozs7QUFVbEYsSUFBQTtJQUF5QywrQ0FBaUI7SUFPdEQsNkJBQVksSUFBK0I7ZUFFdkMsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUywwQ0FBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxxQkFBcUIsRUFBRTtZQUN4RSxrQkFBa0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDbkMsZUFBZSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNoQyxXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVCLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDaEIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjs4QkF0Q0w7RUFZeUMsaUJBQWlCLEVBMkJ6RCxDQUFBO0FBM0JELCtCQTJCQzs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLG1CQUFtQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFPYmplY3RCYXNlLCBLYWx0dXJhT2JqZWN0QmFzZUFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhRVNlYXJjaFJhbmdlQXJncyAgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZUFyZ3Mge1xuICAgIGdyZWF0ZXJUaGFuT3JFcXVhbD8gOiBudW1iZXI7XG5cdGxlc3NUaGFuT3JFcXVhbD8gOiBudW1iZXI7XG5cdGdyZWF0ZXJUaGFuPyA6IG51bWJlcjtcblx0bGVzc1RoYW4/IDogbnVtYmVyO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhRVNlYXJjaFJhbmdlIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2Uge1xuXG4gICAgZ3JlYXRlclRoYW5PckVxdWFsIDogbnVtYmVyO1xuXHRsZXNzVGhhbk9yRXF1YWwgOiBudW1iZXI7XG5cdGdyZWF0ZXJUaGFuIDogbnVtYmVyO1xuXHRsZXNzVGhhbiA6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUVTZWFyY2hSYW5nZUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhRVNlYXJjaFJhbmdlJyB9LFxuXHRcdFx0XHRncmVhdGVyVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0bGVzc1RoYW5PckVxdWFsIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGdyZWF0ZXJUaGFuIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGxlc3NUaGFuIDogeyB0eXBlIDogJ24nIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFFU2VhcmNoUmFuZ2UnXSA9IEthbHR1cmFFU2VhcmNoUmFuZ2U7Il19