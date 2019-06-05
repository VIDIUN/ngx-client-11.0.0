/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
export class KalturaDrmLicenseAccessDetails extends KalturaObjectBase {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data);
        if (typeof this.licenseParams === 'undefined')
            this.licenseParams = [];
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaDrmLicenseAccessDetails' },
            policy: { type: 's' },
            duration: { type: 'n' },
            absolute_duration: { type: 'n' },
            licenseParams: { type: 'a', subTypeConstructor: KalturaKeyValue, subType: 'KalturaKeyValue' }
        });
        return result;
    }
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYURybUxpY2Vuc2VBY2Nlc3NEZXRhaWxzLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhRHJtTGljZW5zZUFjY2Vzc0RldGFpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDcEQsT0FBTyxFQUFFLGlCQUFpQixFQUF5QixNQUFNLHdCQUF3QixDQUFDOzs7Ozs7Ozs7Ozs7O0FBVWxGLE1BQU0scUNBQXNDLFNBQVEsaUJBQWlCOzs7O0lBT2pFLFlBQVksSUFBMEM7UUFFbEQsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ1osRUFBRSxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsYUFBYSxLQUFLLFdBQVcsQ0FBQztZQUFDLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDO0tBQzFFOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxnQ0FBZ0MsRUFBRTtZQUNuRixNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3ZCLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsaUJBQWlCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2xDLGFBQWEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsZUFBZSxFQUFFLE9BQU8sRUFBRyxpQkFBaUIsRUFBRTtTQUN4RixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsZ0NBQWdDLENBQUMsR0FBRyw4QkFBOEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhS2V5VmFsdWUgfSBmcm9tICcuL0thbHR1cmFLZXlWYWx1ZSc7XG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0QmFzZSwgS2FsdHVyYU9iamVjdEJhc2VBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYURybUxpY2Vuc2VBY2Nlc3NEZXRhaWxzQXJncyAgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZUFyZ3Mge1xuICAgIHBvbGljeT8gOiBzdHJpbmc7XG5cdGR1cmF0aW9uPyA6IG51bWJlcjtcblx0YWJzb2x1dGVfZHVyYXRpb24/IDogbnVtYmVyO1xuXHRsaWNlbnNlUGFyYW1zPyA6IEthbHR1cmFLZXlWYWx1ZVtdO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhRHJtTGljZW5zZUFjY2Vzc0RldGFpbHMgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZSB7XG5cbiAgICBwb2xpY3kgOiBzdHJpbmc7XG5cdGR1cmF0aW9uIDogbnVtYmVyO1xuXHRhYnNvbHV0ZV9kdXJhdGlvbiA6IG51bWJlcjtcblx0bGljZW5zZVBhcmFtcyA6IEthbHR1cmFLZXlWYWx1ZVtdO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhRHJtTGljZW5zZUFjY2Vzc0RldGFpbHNBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5saWNlbnNlUGFyYW1zID09PSAndW5kZWZpbmVkJykgdGhpcy5saWNlbnNlUGFyYW1zID0gW107XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYURybUxpY2Vuc2VBY2Nlc3NEZXRhaWxzJyB9LFxuXHRcdFx0XHRwb2xpY3kgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZHVyYXRpb24gOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0YWJzb2x1dGVfZHVyYXRpb24gOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0bGljZW5zZVBhcmFtcyA6IHsgdHlwZSA6ICdhJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUtleVZhbHVlLCBzdWJUeXBlIDogJ0thbHR1cmFLZXlWYWx1ZScgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYURybUxpY2Vuc2VBY2Nlc3NEZXRhaWxzJ10gPSBLYWx0dXJhRHJtTGljZW5zZUFjY2Vzc0RldGFpbHM7Il19