/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaIntegerValue } from './KalturaIntegerValue';
/**
 * @record
 */
export function KalturaIntegerFieldArgs() { }
var KalturaIntegerField = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaIntegerField, _super);
    function KalturaIntegerField(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaIntegerField.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaIntegerField' }
        });
        return result;
    };
    return KalturaIntegerField;
}(KalturaIntegerValue));
export { KalturaIntegerField };
typesMappingStorage['KalturaIntegerField'] = KalturaIntegerField;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUludGVnZXJGaWVsZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUludGVnZXJGaWVsZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsbUJBQW1CLEVBQTJCLE1BQU0sdUJBQXVCLENBQUM7Ozs7O0FBT3JGLElBQUE7SUFBeUMsK0NBQW1CO0lBSXhELDZCQUFZLElBQStCO2VBRXZDLGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsMENBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcscUJBQXFCLEVBQUU7U0FDL0QsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjs4QkE1Qkw7RUFTeUMsbUJBQW1CLEVBb0IzRCxDQUFBO0FBcEJELCtCQW9CQztBQUVELG1CQUFtQixDQUFDLHFCQUFxQixDQUFDLEdBQUcsbUJBQW1CLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUludGVnZXJWYWx1ZSwgS2FsdHVyYUludGVnZXJWYWx1ZUFyZ3MgfSBmcm9tICcuL0thbHR1cmFJbnRlZ2VyVmFsdWUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFJbnRlZ2VyRmllbGRBcmdzICBleHRlbmRzIEthbHR1cmFJbnRlZ2VyVmFsdWVBcmdzIHtcbiAgICBcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUludGVnZXJGaWVsZCBleHRlbmRzIEthbHR1cmFJbnRlZ2VyVmFsdWUge1xuXG4gICAgXG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFJbnRlZ2VyRmllbGRBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUludGVnZXJGaWVsZCcgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUludGVnZXJGaWVsZCddID0gS2FsdHVyYUludGVnZXJGaWVsZDsiXX0=