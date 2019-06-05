/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaKeyValue } from './KalturaKeyValue';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaDrmLicenseAccessDetailsArgs() { }
/** @type {?|undefined} */
KalturaDrmLicenseAccessDetailsArgs.prototype.policy;
/** @type {?|undefined} */
KalturaDrmLicenseAccessDetailsArgs.prototype.duration;
/** @type {?|undefined} */
KalturaDrmLicenseAccessDetailsArgs.prototype.absolute_duration;
/** @type {?|undefined} */
KalturaDrmLicenseAccessDetailsArgs.prototype.licenseParams;
var KalturaDrmLicenseAccessDetails = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaDrmLicenseAccessDetails, _super);
    function KalturaDrmLicenseAccessDetails(data) {
        var _this = _super.call(this, data) || this;
        if (typeof _this.licenseParams === 'undefined')
            _this.licenseParams = [];
        return _this;
    }
    /**
     * @return {?}
     */
    KalturaDrmLicenseAccessDetails.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaDrmLicenseAccessDetails' },
            policy: { type: 's' },
            duration: { type: 'n' },
            absolute_duration: { type: 'n' },
            licenseParams: { type: 'a', subTypeConstructor: KalturaKeyValue, subType: 'KalturaKeyValue' }
        });
        return result;
    };
    return KalturaDrmLicenseAccessDetails;
}(KalturaObjectBase));
export { KalturaDrmLicenseAccessDetails };
if (false) {
    /** @type {?} */
    KalturaDrmLicenseAccessDetails.prototype.policy;
    /** @type {?} */
    KalturaDrmLicenseAccessDetails.prototype.duration;
    /** @type {?} */
    KalturaDrmLicenseAccessDetails.prototype.absolute_duration;
    /** @type {?} */
    KalturaDrmLicenseAccessDetails.prototype.licenseParams;
}
typesMappingStorage['KalturaDrmLicenseAccessDetails'] = KalturaDrmLicenseAccessDetails;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYURybUxpY2Vuc2VBY2Nlc3NEZXRhaWxzLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhRHJtTGljZW5zZUFjY2Vzc0RldGFpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxpQkFBaUIsRUFBeUIsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7Ozs7Ozs7OztBQVVsRixJQUFBO0lBQW9ELDBEQUFpQjtJQU9qRSx3Q0FBWSxJQUEwQztRQUF0RCxZQUVJLGtCQUFNLElBQUksQ0FBQyxTQUVkO1FBREcsRUFBRSxDQUFDLENBQUMsT0FBTyxLQUFJLENBQUMsYUFBYSxLQUFLLFdBQVcsQ0FBQztZQUFDLEtBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDOztLQUMxRTs7OztJQUVTLHFEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGdDQUFnQyxFQUFFO1lBQ25GLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDdkIsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixpQkFBaUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDbEMsYUFBYSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxlQUFlLEVBQUUsT0FBTyxFQUFHLGlCQUFpQixFQUFFO1NBQ3hGLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7eUNBeENMO0VBYW9ELGlCQUFpQixFQTRCcEUsQ0FBQTtBQTVCRCwwQ0E0QkM7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsZ0NBQWdDLENBQUMsR0FBRyw4QkFBOEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhS2V5VmFsdWUgfSBmcm9tICcuL0thbHR1cmFLZXlWYWx1ZSc7XG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0QmFzZSwgS2FsdHVyYU9iamVjdEJhc2VBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYURybUxpY2Vuc2VBY2Nlc3NEZXRhaWxzQXJncyAgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZUFyZ3Mge1xuICAgIHBvbGljeT8gOiBzdHJpbmc7XG5cdGR1cmF0aW9uPyA6IG51bWJlcjtcblx0YWJzb2x1dGVfZHVyYXRpb24/IDogbnVtYmVyO1xuXHRsaWNlbnNlUGFyYW1zPyA6IEthbHR1cmFLZXlWYWx1ZVtdO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhRHJtTGljZW5zZUFjY2Vzc0RldGFpbHMgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZSB7XG5cbiAgICBwb2xpY3kgOiBzdHJpbmc7XG5cdGR1cmF0aW9uIDogbnVtYmVyO1xuXHRhYnNvbHV0ZV9kdXJhdGlvbiA6IG51bWJlcjtcblx0bGljZW5zZVBhcmFtcyA6IEthbHR1cmFLZXlWYWx1ZVtdO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhRHJtTGljZW5zZUFjY2Vzc0RldGFpbHNBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5saWNlbnNlUGFyYW1zID09PSAndW5kZWZpbmVkJykgdGhpcy5saWNlbnNlUGFyYW1zID0gW107XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYURybUxpY2Vuc2VBY2Nlc3NEZXRhaWxzJyB9LFxuXHRcdFx0XHRwb2xpY3kgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZHVyYXRpb24gOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0YWJzb2x1dGVfZHVyYXRpb24gOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0bGljZW5zZVBhcmFtcyA6IHsgdHlwZSA6ICdhJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUtleVZhbHVlLCBzdWJUeXBlIDogJ0thbHR1cmFLZXlWYWx1ZScgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYURybUxpY2Vuc2VBY2Nlc3NEZXRhaWxzJ10gPSBLYWx0dXJhRHJtTGljZW5zZUFjY2Vzc0RldGFpbHM7Il19