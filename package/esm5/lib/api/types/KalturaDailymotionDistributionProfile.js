/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaDailymotionGeoBlockingMapping } from './KalturaDailymotionGeoBlockingMapping';
import { KalturaConfigurableDistributionProfile } from './KalturaConfigurableDistributionProfile';
/**
 * @record
 */
export function KalturaDailymotionDistributionProfileArgs() { }
/** @type {?|undefined} */
KalturaDailymotionDistributionProfileArgs.prototype.user;
/** @type {?|undefined} */
KalturaDailymotionDistributionProfileArgs.prototype.password;
/** @type {?|undefined} */
KalturaDailymotionDistributionProfileArgs.prototype.geoBlockingMapping;
var KalturaDailymotionDistributionProfile = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaDailymotionDistributionProfile, _super);
    function KalturaDailymotionDistributionProfile(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaDailymotionDistributionProfile.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaDailymotionDistributionProfile' },
            user: { type: 's' },
            password: { type: 's' },
            geoBlockingMapping: { type: 'en', subTypeConstructor: KalturaDailymotionGeoBlockingMapping, subType: 'KalturaDailymotionGeoBlockingMapping' }
        });
        return result;
    };
    return KalturaDailymotionDistributionProfile;
}(KalturaConfigurableDistributionProfile));
export { KalturaDailymotionDistributionProfile };
if (false) {
    /** @type {?} */
    KalturaDailymotionDistributionProfile.prototype.user;
    /** @type {?} */
    KalturaDailymotionDistributionProfile.prototype.password;
    /** @type {?} */
    KalturaDailymotionDistributionProfile.prototype.geoBlockingMapping;
}
typesMappingStorage['KalturaDailymotionDistributionProfile'] = KalturaDailymotionDistributionProfile;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYURhaWx5bW90aW9uRGlzdHJpYnV0aW9uUHJvZmlsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYURhaWx5bW90aW9uRGlzdHJpYnV0aW9uUHJvZmlsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsb0NBQW9DLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUM5RixPQUFPLEVBQUUsc0NBQXNDLEVBQThDLE1BQU0sMENBQTBDLENBQUM7Ozs7Ozs7Ozs7O0FBUzlJLElBQUE7SUFBMkQsaUVBQXNDO0lBTTdGLCtDQUFZLElBQWlEO2VBRXpELGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsNERBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsdUNBQXVDLEVBQUU7WUFDMUYsSUFBSSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNyQixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLGtCQUFrQixFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxvQ0FBb0MsRUFBRSxPQUFPLEVBQUcsc0NBQXNDLEVBQUU7U0FDeEksQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtnREFwQ0w7RUFZMkQsc0NBQXNDLEVBeUJoRyxDQUFBO0FBekJELGlEQXlCQzs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsdUNBQXVDLENBQUMsR0FBRyxxQ0FBcUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhRGFpbHltb3Rpb25HZW9CbG9ja2luZ01hcHBpbmcgfSBmcm9tICcuL0thbHR1cmFEYWlseW1vdGlvbkdlb0Jsb2NraW5nTWFwcGluZyc7XG5pbXBvcnQgeyBLYWx0dXJhQ29uZmlndXJhYmxlRGlzdHJpYnV0aW9uUHJvZmlsZSwgS2FsdHVyYUNvbmZpZ3VyYWJsZURpc3RyaWJ1dGlvblByb2ZpbGVBcmdzIH0gZnJvbSAnLi9LYWx0dXJhQ29uZmlndXJhYmxlRGlzdHJpYnV0aW9uUHJvZmlsZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYURhaWx5bW90aW9uRGlzdHJpYnV0aW9uUHJvZmlsZUFyZ3MgIGV4dGVuZHMgS2FsdHVyYUNvbmZpZ3VyYWJsZURpc3RyaWJ1dGlvblByb2ZpbGVBcmdzIHtcbiAgICB1c2VyPyA6IHN0cmluZztcblx0cGFzc3dvcmQ/IDogc3RyaW5nO1xuXHRnZW9CbG9ja2luZ01hcHBpbmc/IDogS2FsdHVyYURhaWx5bW90aW9uR2VvQmxvY2tpbmdNYXBwaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhRGFpbHltb3Rpb25EaXN0cmlidXRpb25Qcm9maWxlIGV4dGVuZHMgS2FsdHVyYUNvbmZpZ3VyYWJsZURpc3RyaWJ1dGlvblByb2ZpbGUge1xuXG4gICAgdXNlciA6IHN0cmluZztcblx0cGFzc3dvcmQgOiBzdHJpbmc7XG5cdGdlb0Jsb2NraW5nTWFwcGluZyA6IEthbHR1cmFEYWlseW1vdGlvbkdlb0Jsb2NraW5nTWFwcGluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYURhaWx5bW90aW9uRGlzdHJpYnV0aW9uUHJvZmlsZUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhRGFpbHltb3Rpb25EaXN0cmlidXRpb25Qcm9maWxlJyB9LFxuXHRcdFx0XHR1c2VyIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHBhc3N3b3JkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGdlb0Jsb2NraW5nTWFwcGluZyA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFEYWlseW1vdGlvbkdlb0Jsb2NraW5nTWFwcGluZywgc3ViVHlwZSA6ICdLYWx0dXJhRGFpbHltb3Rpb25HZW9CbG9ja2luZ01hcHBpbmcnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFEYWlseW1vdGlvbkRpc3RyaWJ1dGlvblByb2ZpbGUnXSA9IEthbHR1cmFEYWlseW1vdGlvbkRpc3RyaWJ1dGlvblByb2ZpbGU7Il19