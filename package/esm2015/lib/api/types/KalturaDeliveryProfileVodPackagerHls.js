/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaDeliveryProfileVodPackagerPlayServer } from './KalturaDeliveryProfileVodPackagerPlayServer';
/**
 * @record
 */
export function KalturaDeliveryProfileVodPackagerHlsArgs() { }
/** @type {?|undefined} */
KalturaDeliveryProfileVodPackagerHlsArgs.prototype.allowFairplayOffline;
export class KalturaDeliveryProfileVodPackagerHls extends KalturaDeliveryProfileVodPackagerPlayServer {
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
            objectType: { type: 'c', default: 'KalturaDeliveryProfileVodPackagerHls' },
            allowFairplayOffline: { type: 'b' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaDeliveryProfileVodPackagerHls.prototype.allowFairplayOffline;
}
typesMappingStorage['KalturaDeliveryProfileVodPackagerHls'] = KalturaDeliveryProfileVodPackagerHls;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYURlbGl2ZXJ5UHJvZmlsZVZvZFBhY2thZ2VySGxzLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhRGVsaXZlcnlQcm9maWxlVm9kUGFja2FnZXJIbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsMkNBQTJDLEVBQW1ELE1BQU0sK0NBQStDLENBQUM7Ozs7Ozs7QUFPN0osTUFBTSwyQ0FBNEMsU0FBUSwyQ0FBMkM7Ozs7SUFJakcsWUFBWSxJQUFnRDtRQUV4RCxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDZjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsc0NBQXNDLEVBQUU7WUFDekYsb0JBQW9CLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQzVCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxzQ0FBc0MsQ0FBQyxHQUFHLG9DQUFvQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFEZWxpdmVyeVByb2ZpbGVWb2RQYWNrYWdlclBsYXlTZXJ2ZXIsIEthbHR1cmFEZWxpdmVyeVByb2ZpbGVWb2RQYWNrYWdlclBsYXlTZXJ2ZXJBcmdzIH0gZnJvbSAnLi9LYWx0dXJhRGVsaXZlcnlQcm9maWxlVm9kUGFja2FnZXJQbGF5U2VydmVyJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhRGVsaXZlcnlQcm9maWxlVm9kUGFja2FnZXJIbHNBcmdzICBleHRlbmRzIEthbHR1cmFEZWxpdmVyeVByb2ZpbGVWb2RQYWNrYWdlclBsYXlTZXJ2ZXJBcmdzIHtcbiAgICBhbGxvd0ZhaXJwbGF5T2ZmbGluZT8gOiBib29sZWFuO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhRGVsaXZlcnlQcm9maWxlVm9kUGFja2FnZXJIbHMgZXh0ZW5kcyBLYWx0dXJhRGVsaXZlcnlQcm9maWxlVm9kUGFja2FnZXJQbGF5U2VydmVyIHtcblxuICAgIGFsbG93RmFpcnBsYXlPZmZsaW5lIDogYm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYURlbGl2ZXJ5UHJvZmlsZVZvZFBhY2thZ2VySGxzQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFEZWxpdmVyeVByb2ZpbGVWb2RQYWNrYWdlckhscycgfSxcblx0XHRcdFx0YWxsb3dGYWlycGxheU9mZmxpbmUgOiB7IHR5cGUgOiAnYicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYURlbGl2ZXJ5UHJvZmlsZVZvZFBhY2thZ2VySGxzJ10gPSBLYWx0dXJhRGVsaXZlcnlQcm9maWxlVm9kUGFja2FnZXJIbHM7Il19