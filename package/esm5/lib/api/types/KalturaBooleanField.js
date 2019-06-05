/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaBooleanValue } from './KalturaBooleanValue';
/**
 * @record
 */
export function KalturaBooleanFieldArgs() { }
var KalturaBooleanField = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaBooleanField, _super);
    function KalturaBooleanField(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaBooleanField.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaBooleanField' }
        });
        return result;
    };
    return KalturaBooleanField;
}(KalturaBooleanValue));
export { KalturaBooleanField };
typesMappingStorage['KalturaBooleanField'] = KalturaBooleanField;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUJvb2xlYW5GaWVsZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUJvb2xlYW5GaWVsZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsbUJBQW1CLEVBQTJCLE1BQU0sdUJBQXVCLENBQUM7Ozs7O0FBT3JGLElBQUE7SUFBeUMsK0NBQW1CO0lBSXhELDZCQUFZLElBQStCO2VBRXZDLGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsMENBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcscUJBQXFCLEVBQUU7U0FDL0QsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjs4QkE1Qkw7RUFTeUMsbUJBQW1CLEVBb0IzRCxDQUFBO0FBcEJELCtCQW9CQztBQUVELG1CQUFtQixDQUFDLHFCQUFxQixDQUFDLEdBQUcsbUJBQW1CLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUJvb2xlYW5WYWx1ZSwgS2FsdHVyYUJvb2xlYW5WYWx1ZUFyZ3MgfSBmcm9tICcuL0thbHR1cmFCb29sZWFuVmFsdWUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFCb29sZWFuRmllbGRBcmdzICBleHRlbmRzIEthbHR1cmFCb29sZWFuVmFsdWVBcmdzIHtcbiAgICBcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUJvb2xlYW5GaWVsZCBleHRlbmRzIEthbHR1cmFCb29sZWFuVmFsdWUge1xuXG4gICAgXG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFCb29sZWFuRmllbGRBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUJvb2xlYW5GaWVsZCcgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUJvb2xlYW5GaWVsZCddID0gS2FsdHVyYUJvb2xlYW5GaWVsZDsiXX0=