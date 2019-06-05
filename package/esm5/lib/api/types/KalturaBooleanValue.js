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
export function KalturaBooleanValueArgs() { }
/** @type {?|undefined} */
KalturaBooleanValueArgs.prototype.value;
var KalturaBooleanValue = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaBooleanValue, _super);
    function KalturaBooleanValue(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaBooleanValue.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaBooleanValue' },
            value: { type: 'b' }
        });
        return result;
    };
    return KalturaBooleanValue;
}(KalturaValue));
export { KalturaBooleanValue };
if (false) {
    /** @type {?} */
    KalturaBooleanValue.prototype.value;
}
typesMappingStorage['KalturaBooleanValue'] = KalturaBooleanValue;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUJvb2xlYW5WYWx1ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUJvb2xlYW5WYWx1ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsWUFBWSxFQUFvQixNQUFNLGdCQUFnQixDQUFDOzs7Ozs7O0FBT2hFLElBQUE7SUFBeUMsK0NBQVk7SUFJakQsNkJBQVksSUFBK0I7ZUFFdkMsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUywwQ0FBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxxQkFBcUIsRUFBRTtZQUN4RSxLQUFLLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ2IsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjs4QkE3Qkw7RUFTeUMsWUFBWSxFQXFCcEQsQ0FBQTtBQXJCRCwrQkFxQkM7Ozs7O0FBRUQsbUJBQW1CLENBQUMscUJBQXFCLENBQUMsR0FBRyxtQkFBbUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhVmFsdWUsIEthbHR1cmFWYWx1ZUFyZ3MgfSBmcm9tICcuL0thbHR1cmFWYWx1ZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUJvb2xlYW5WYWx1ZUFyZ3MgIGV4dGVuZHMgS2FsdHVyYVZhbHVlQXJncyB7XG4gICAgdmFsdWU/IDogYm9vbGVhbjtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUJvb2xlYW5WYWx1ZSBleHRlbmRzIEthbHR1cmFWYWx1ZSB7XG5cbiAgICB2YWx1ZSA6IGJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFCb29sZWFuVmFsdWVBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUJvb2xlYW5WYWx1ZScgfSxcblx0XHRcdFx0dmFsdWUgOiB7IHR5cGUgOiAnYicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUJvb2xlYW5WYWx1ZSddID0gS2FsdHVyYUJvb2xlYW5WYWx1ZTsiXX0=