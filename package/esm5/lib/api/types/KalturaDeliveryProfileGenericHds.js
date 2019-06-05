/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaDeliveryProfile } from './KalturaDeliveryProfile';
/**
 * @record
 */
export function KalturaDeliveryProfileGenericHdsArgs() { }
/** @type {?|undefined} */
KalturaDeliveryProfileGenericHdsArgs.prototype.pattern;
/** @type {?|undefined} */
KalturaDeliveryProfileGenericHdsArgs.prototype.rendererClass;
var KalturaDeliveryProfileGenericHds = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaDeliveryProfileGenericHds, _super);
    function KalturaDeliveryProfileGenericHds(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaDeliveryProfileGenericHds.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaDeliveryProfileGenericHds' },
            pattern: { type: 's' },
            rendererClass: { type: 's' }
        });
        return result;
    };
    return KalturaDeliveryProfileGenericHds;
}(KalturaDeliveryProfile));
export { KalturaDeliveryProfileGenericHds };
if (false) {
    /** @type {?} */
    KalturaDeliveryProfileGenericHds.prototype.pattern;
    /** @type {?} */
    KalturaDeliveryProfileGenericHds.prototype.rendererClass;
}
typesMappingStorage['KalturaDeliveryProfileGenericHds'] = KalturaDeliveryProfileGenericHds;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYURlbGl2ZXJ5UHJvZmlsZUdlbmVyaWNIZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFEZWxpdmVyeVByb2ZpbGVHZW5lcmljSGRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxzQkFBc0IsRUFBOEIsTUFBTSwwQkFBMEIsQ0FBQzs7Ozs7Ozs7O0FBUTlGLElBQUE7SUFBc0QsNERBQXNCO0lBS3hFLDBDQUFZLElBQTRDO2VBRXBELGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsdURBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsa0NBQWtDLEVBQUU7WUFDckYsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN4QixhQUFhLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ3JCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7MkNBaENMO0VBVXNELHNCQUFzQixFQXVCM0UsQ0FBQTtBQXZCRCw0Q0F1QkM7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxrQ0FBa0MsQ0FBQyxHQUFHLGdDQUFnQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFEZWxpdmVyeVByb2ZpbGUsIEthbHR1cmFEZWxpdmVyeVByb2ZpbGVBcmdzIH0gZnJvbSAnLi9LYWx0dXJhRGVsaXZlcnlQcm9maWxlJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhRGVsaXZlcnlQcm9maWxlR2VuZXJpY0hkc0FyZ3MgIGV4dGVuZHMgS2FsdHVyYURlbGl2ZXJ5UHJvZmlsZUFyZ3Mge1xuICAgIHBhdHRlcm4/IDogc3RyaW5nO1xuXHRyZW5kZXJlckNsYXNzPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYURlbGl2ZXJ5UHJvZmlsZUdlbmVyaWNIZHMgZXh0ZW5kcyBLYWx0dXJhRGVsaXZlcnlQcm9maWxlIHtcblxuICAgIHBhdHRlcm4gOiBzdHJpbmc7XG5cdHJlbmRlcmVyQ2xhc3MgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFEZWxpdmVyeVByb2ZpbGVHZW5lcmljSGRzQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFEZWxpdmVyeVByb2ZpbGVHZW5lcmljSGRzJyB9LFxuXHRcdFx0XHRwYXR0ZXJuIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHJlbmRlcmVyQ2xhc3MgOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYURlbGl2ZXJ5UHJvZmlsZUdlbmVyaWNIZHMnXSA9IEthbHR1cmFEZWxpdmVyeVByb2ZpbGVHZW5lcmljSGRzOyJdfQ==