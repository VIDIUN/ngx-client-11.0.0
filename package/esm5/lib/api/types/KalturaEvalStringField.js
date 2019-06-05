/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaStringField } from './KalturaStringField';
/**
 * @record
 */
export function KalturaEvalStringFieldArgs() { }
/** @type {?|undefined} */
KalturaEvalStringFieldArgs.prototype.code;
var KalturaEvalStringField = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaEvalStringField, _super);
    function KalturaEvalStringField(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaEvalStringField.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaEvalStringField' },
            code: { type: 's' }
        });
        return result;
    };
    return KalturaEvalStringField;
}(KalturaStringField));
export { KalturaEvalStringField };
if (false) {
    /** @type {?} */
    KalturaEvalStringField.prototype.code;
}
typesMappingStorage['KalturaEvalStringField'] = KalturaEvalStringField;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUV2YWxTdHJpbmdGaWVsZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUV2YWxTdHJpbmdGaWVsZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsa0JBQWtCLEVBQTBCLE1BQU0sc0JBQXNCLENBQUM7Ozs7Ozs7QUFPbEYsSUFBQTtJQUE0QyxrREFBa0I7SUFJMUQsZ0NBQVksSUFBa0M7ZUFFMUMsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyw2Q0FBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyx3QkFBd0IsRUFBRTtZQUMzRSxJQUFJLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ1osQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtpQ0E3Qkw7RUFTNEMsa0JBQWtCLEVBcUI3RCxDQUFBO0FBckJELGtDQXFCQzs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyx3QkFBd0IsQ0FBQyxHQUFHLHNCQUFzQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFTdHJpbmdGaWVsZCwgS2FsdHVyYVN0cmluZ0ZpZWxkQXJncyB9IGZyb20gJy4vS2FsdHVyYVN0cmluZ0ZpZWxkJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhRXZhbFN0cmluZ0ZpZWxkQXJncyAgZXh0ZW5kcyBLYWx0dXJhU3RyaW5nRmllbGRBcmdzIHtcbiAgICBjb2RlPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUV2YWxTdHJpbmdGaWVsZCBleHRlbmRzIEthbHR1cmFTdHJpbmdGaWVsZCB7XG5cbiAgICBjb2RlIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhRXZhbFN0cmluZ0ZpZWxkQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFFdmFsU3RyaW5nRmllbGQnIH0sXG5cdFx0XHRcdGNvZGUgOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUV2YWxTdHJpbmdGaWVsZCddID0gS2FsdHVyYUV2YWxTdHJpbmdGaWVsZDsiXX0=