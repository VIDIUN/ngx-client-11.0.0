/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaValue } from './KalturaValue';
/**
 * @record
 */
export function KalturaIntegerValueArgs() { }
/** @type {?|undefined} */
KalturaIntegerValueArgs.prototype.value;
var KalturaIntegerValue = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaIntegerValue, _super);
    function KalturaIntegerValue(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaIntegerValue.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaIntegerValue' },
            value: { type: 'n' }
        });
        return result;
    };
    return KalturaIntegerValue;
}(KalturaValue));
export { KalturaIntegerValue };
if (false) {
    /** @type {?} */
    KalturaIntegerValue.prototype.value;
}
typesMappingStorage['KalturaIntegerValue'] = KalturaIntegerValue;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUludGVnZXJWYWx1ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUludGVnZXJWYWx1ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsWUFBWSxFQUFvQixNQUFNLGdCQUFnQixDQUFDOzs7Ozs7O0FBT2hFLElBQUE7SUFBeUMsK0NBQVk7SUFJakQsNkJBQVksSUFBK0I7ZUFFdkMsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUywwQ0FBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxxQkFBcUIsRUFBRTtZQUN4RSxLQUFLLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ2IsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjs4QkE3Qkw7RUFTeUMsWUFBWSxFQXFCcEQsQ0FBQTtBQXJCRCwrQkFxQkM7Ozs7O0FBRUQsbUJBQW1CLENBQUMscUJBQXFCLENBQUMsR0FBRyxtQkFBbUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhVmFsdWUsIEthbHR1cmFWYWx1ZUFyZ3MgfSBmcm9tICcuL0thbHR1cmFWYWx1ZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUludGVnZXJWYWx1ZUFyZ3MgIGV4dGVuZHMgS2FsdHVyYVZhbHVlQXJncyB7XG4gICAgdmFsdWU/IDogbnVtYmVyO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhSW50ZWdlclZhbHVlIGV4dGVuZHMgS2FsdHVyYVZhbHVlIHtcblxuICAgIHZhbHVlIDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhSW50ZWdlclZhbHVlQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFJbnRlZ2VyVmFsdWUnIH0sXG5cdFx0XHRcdHZhbHVlIDogeyB0eXBlIDogJ24nIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFJbnRlZ2VyVmFsdWUnXSA9IEthbHR1cmFJbnRlZ2VyVmFsdWU7Il19