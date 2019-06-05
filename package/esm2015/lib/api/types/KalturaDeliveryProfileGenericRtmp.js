/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaDeliveryProfileRtmp } from './KalturaDeliveryProfileRtmp';
/**
 * @record
 */
export function KalturaDeliveryProfileGenericRtmpArgs() { }
/** @type {?|undefined} */
KalturaDeliveryProfileGenericRtmpArgs.prototype.pattern;
/** @type {?|undefined} */
KalturaDeliveryProfileGenericRtmpArgs.prototype.rendererClass;
export class KalturaDeliveryProfileGenericRtmp extends KalturaDeliveryProfileRtmp {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data);
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaDeliveryProfileGenericRtmp' },
            pattern: { type: 's' },
            rendererClass: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaDeliveryProfileGenericRtmp.prototype.pattern;
    /** @type {?} */
    KalturaDeliveryProfileGenericRtmp.prototype.rendererClass;
}
typesMappingStorage['KalturaDeliveryProfileGenericRtmp'] = KalturaDeliveryProfileGenericRtmp;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYURlbGl2ZXJ5UHJvZmlsZUdlbmVyaWNSdG1wLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhRGVsaXZlcnlQcm9maWxlR2VuZXJpY1J0bXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsMEJBQTBCLEVBQWtDLE1BQU0sOEJBQThCLENBQUM7Ozs7Ozs7OztBQVExRyxNQUFNLHdDQUF5QyxTQUFRLDBCQUEwQjs7OztJQUs3RSxZQUFZLElBQTZDO1FBRXJELEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxtQ0FBbUMsRUFBRTtZQUN0RixPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3hCLGFBQWEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDckIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsbUNBQW1DLENBQUMsR0FBRyxpQ0FBaUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhRGVsaXZlcnlQcm9maWxlUnRtcCwgS2FsdHVyYURlbGl2ZXJ5UHJvZmlsZVJ0bXBBcmdzIH0gZnJvbSAnLi9LYWx0dXJhRGVsaXZlcnlQcm9maWxlUnRtcCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYURlbGl2ZXJ5UHJvZmlsZUdlbmVyaWNSdG1wQXJncyAgZXh0ZW5kcyBLYWx0dXJhRGVsaXZlcnlQcm9maWxlUnRtcEFyZ3Mge1xuICAgIHBhdHRlcm4/IDogc3RyaW5nO1xuXHRyZW5kZXJlckNsYXNzPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYURlbGl2ZXJ5UHJvZmlsZUdlbmVyaWNSdG1wIGV4dGVuZHMgS2FsdHVyYURlbGl2ZXJ5UHJvZmlsZVJ0bXAge1xuXG4gICAgcGF0dGVybiA6IHN0cmluZztcblx0cmVuZGVyZXJDbGFzcyA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYURlbGl2ZXJ5UHJvZmlsZUdlbmVyaWNSdG1wQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFEZWxpdmVyeVByb2ZpbGVHZW5lcmljUnRtcCcgfSxcblx0XHRcdFx0cGF0dGVybiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRyZW5kZXJlckNsYXNzIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFEZWxpdmVyeVByb2ZpbGVHZW5lcmljUnRtcCddID0gS2FsdHVyYURlbGl2ZXJ5UHJvZmlsZUdlbmVyaWNSdG1wOyJdfQ==