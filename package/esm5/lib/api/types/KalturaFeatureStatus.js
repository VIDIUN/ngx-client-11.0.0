/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaFeatureStatusType } from './KalturaFeatureStatusType';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaFeatureStatusArgs() { }
/** @type {?|undefined} */
KalturaFeatureStatusArgs.prototype.type;
/** @type {?|undefined} */
KalturaFeatureStatusArgs.prototype.value;
var KalturaFeatureStatus = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaFeatureStatus, _super);
    function KalturaFeatureStatus(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaFeatureStatus.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaFeatureStatus' },
            type: { type: 'en', subTypeConstructor: KalturaFeatureStatusType, subType: 'KalturaFeatureStatusType' },
            value: { type: 'n' }
        });
        return result;
    };
    return KalturaFeatureStatus;
}(KalturaObjectBase));
export { KalturaFeatureStatus };
if (false) {
    /** @type {?} */
    KalturaFeatureStatus.prototype.type;
    /** @type {?} */
    KalturaFeatureStatus.prototype.value;
}
typesMappingStorage['KalturaFeatureStatus'] = KalturaFeatureStatus;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUZlYXR1cmVTdGF0dXMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFGZWF0dXJlU3RhdHVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxpQkFBaUIsRUFBeUIsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7Ozs7O0FBUWxGLElBQUE7SUFBMEMsZ0RBQWlCO0lBS3ZELDhCQUFZLElBQWdDO2VBRXhDLGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsMkNBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsc0JBQXNCLEVBQUU7WUFDekUsSUFBSSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyx3QkFBd0IsRUFBRSxPQUFPLEVBQUcsMEJBQTBCLEVBQUU7WUFDM0csS0FBSyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNiLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7K0JBakNMO0VBVzBDLGlCQUFpQixFQXVCMUQsQ0FBQTtBQXZCRCxnQ0F1QkM7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxzQkFBc0IsQ0FBQyxHQUFHLG9CQUFvQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFGZWF0dXJlU3RhdHVzVHlwZSB9IGZyb20gJy4vS2FsdHVyYUZlYXR1cmVTdGF0dXNUeXBlJztcbmltcG9ydCB7IEthbHR1cmFPYmplY3RCYXNlLCBLYWx0dXJhT2JqZWN0QmFzZUFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhRmVhdHVyZVN0YXR1c0FyZ3MgIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2VBcmdzIHtcbiAgICB0eXBlPyA6IEthbHR1cmFGZWF0dXJlU3RhdHVzVHlwZTtcblx0dmFsdWU/IDogbnVtYmVyO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhRmVhdHVyZVN0YXR1cyBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlIHtcblxuICAgIHR5cGUgOiBLYWx0dXJhRmVhdHVyZVN0YXR1c1R5cGU7XG5cdHZhbHVlIDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhRmVhdHVyZVN0YXR1c0FyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhRmVhdHVyZVN0YXR1cycgfSxcblx0XHRcdFx0dHlwZSA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFGZWF0dXJlU3RhdHVzVHlwZSwgc3ViVHlwZSA6ICdLYWx0dXJhRmVhdHVyZVN0YXR1c1R5cGUnIH0sXG5cdFx0XHRcdHZhbHVlIDogeyB0eXBlIDogJ24nIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFGZWF0dXJlU3RhdHVzJ10gPSBLYWx0dXJhRmVhdHVyZVN0YXR1czsiXX0=