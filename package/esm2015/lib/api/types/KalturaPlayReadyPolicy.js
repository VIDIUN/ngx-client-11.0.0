/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaPlayReadyLicenseRemovalPolicy } from './KalturaPlayReadyLicenseRemovalPolicy';
import { KalturaPlayReadyMinimumLicenseSecurityLevel } from './KalturaPlayReadyMinimumLicenseSecurityLevel';
import { KalturaPlayReadyRight } from './KalturaPlayReadyRight';
import { KalturaDrmPolicy } from './KalturaDrmPolicy';
/**
 * @record
 */
export function KalturaPlayReadyPolicyArgs() { }
/** @type {?|undefined} */
KalturaPlayReadyPolicyArgs.prototype.gracePeriod;
/** @type {?|undefined} */
KalturaPlayReadyPolicyArgs.prototype.licenseRemovalPolicy;
/** @type {?|undefined} */
KalturaPlayReadyPolicyArgs.prototype.licenseRemovalDuration;
/** @type {?|undefined} */
KalturaPlayReadyPolicyArgs.prototype.minSecurityLevel;
/** @type {?|undefined} */
KalturaPlayReadyPolicyArgs.prototype.rights;
export class KalturaPlayReadyPolicy extends KalturaDrmPolicy {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data);
        if (typeof this.rights === 'undefined')
            this.rights = [];
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaPlayReadyPolicy' },
            gracePeriod: { type: 'n' },
            licenseRemovalPolicy: { type: 'en', subTypeConstructor: KalturaPlayReadyLicenseRemovalPolicy, subType: 'KalturaPlayReadyLicenseRemovalPolicy' },
            licenseRemovalDuration: { type: 'n' },
            minSecurityLevel: { type: 'en', subTypeConstructor: KalturaPlayReadyMinimumLicenseSecurityLevel, subType: 'KalturaPlayReadyMinimumLicenseSecurityLevel' },
            rights: { type: 'a', subTypeConstructor: KalturaPlayReadyRight, subType: 'KalturaPlayReadyRight' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaPlayReadyPolicy.prototype.gracePeriod;
    /** @type {?} */
    KalturaPlayReadyPolicy.prototype.licenseRemovalPolicy;
    /** @type {?} */
    KalturaPlayReadyPolicy.prototype.licenseRemovalDuration;
    /** @type {?} */
    KalturaPlayReadyPolicy.prototype.minSecurityLevel;
    /** @type {?} */
    KalturaPlayReadyPolicy.prototype.rights;
}
typesMappingStorage['KalturaPlayReadyPolicy'] = KalturaPlayReadyPolicy;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVBsYXlSZWFkeVBvbGljeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYVBsYXlSZWFkeVBvbGljeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxvQ0FBb0MsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQzlGLE9BQU8sRUFBRSwyQ0FBMkMsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQzVHLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBd0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FBVzVFLE1BQU0sNkJBQThCLFNBQVEsZ0JBQWdCOzs7O0lBUXhELFlBQVksSUFBa0M7UUFFMUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ1osRUFBRSxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsTUFBTSxLQUFLLFdBQVcsQ0FBQztZQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO0tBQzVEOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyx3QkFBd0IsRUFBRTtZQUMzRSxXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVCLG9CQUFvQixFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxvQ0FBb0MsRUFBRSxPQUFPLEVBQUcsc0NBQXNDLEVBQUU7WUFDbkosc0JBQXNCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3ZDLGdCQUFnQixFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRywyQ0FBMkMsRUFBRSxPQUFPLEVBQUcsNkNBQTZDLEVBQUU7WUFDN0osTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxxQkFBcUIsRUFBRSxPQUFPLEVBQUcsdUJBQXVCLEVBQUU7U0FDN0YsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsd0JBQXdCLENBQUMsR0FBRyxzQkFBc0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhUGxheVJlYWR5TGljZW5zZVJlbW92YWxQb2xpY3kgfSBmcm9tICcuL0thbHR1cmFQbGF5UmVhZHlMaWNlbnNlUmVtb3ZhbFBvbGljeSc7XG5pbXBvcnQgeyBLYWx0dXJhUGxheVJlYWR5TWluaW11bUxpY2Vuc2VTZWN1cml0eUxldmVsIH0gZnJvbSAnLi9LYWx0dXJhUGxheVJlYWR5TWluaW11bUxpY2Vuc2VTZWN1cml0eUxldmVsJztcbmltcG9ydCB7IEthbHR1cmFQbGF5UmVhZHlSaWdodCB9IGZyb20gJy4vS2FsdHVyYVBsYXlSZWFkeVJpZ2h0JztcbmltcG9ydCB7IEthbHR1cmFEcm1Qb2xpY3ksIEthbHR1cmFEcm1Qb2xpY3lBcmdzIH0gZnJvbSAnLi9LYWx0dXJhRHJtUG9saWN5JztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhUGxheVJlYWR5UG9saWN5QXJncyAgZXh0ZW5kcyBLYWx0dXJhRHJtUG9saWN5QXJncyB7XG4gICAgZ3JhY2VQZXJpb2Q/IDogbnVtYmVyO1xuXHRsaWNlbnNlUmVtb3ZhbFBvbGljeT8gOiBLYWx0dXJhUGxheVJlYWR5TGljZW5zZVJlbW92YWxQb2xpY3k7XG5cdGxpY2Vuc2VSZW1vdmFsRHVyYXRpb24/IDogbnVtYmVyO1xuXHRtaW5TZWN1cml0eUxldmVsPyA6IEthbHR1cmFQbGF5UmVhZHlNaW5pbXVtTGljZW5zZVNlY3VyaXR5TGV2ZWw7XG5cdHJpZ2h0cz8gOiBLYWx0dXJhUGxheVJlYWR5UmlnaHRbXTtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYVBsYXlSZWFkeVBvbGljeSBleHRlbmRzIEthbHR1cmFEcm1Qb2xpY3kge1xuXG4gICAgZ3JhY2VQZXJpb2QgOiBudW1iZXI7XG5cdGxpY2Vuc2VSZW1vdmFsUG9saWN5IDogS2FsdHVyYVBsYXlSZWFkeUxpY2Vuc2VSZW1vdmFsUG9saWN5O1xuXHRsaWNlbnNlUmVtb3ZhbER1cmF0aW9uIDogbnVtYmVyO1xuXHRtaW5TZWN1cml0eUxldmVsIDogS2FsdHVyYVBsYXlSZWFkeU1pbmltdW1MaWNlbnNlU2VjdXJpdHlMZXZlbDtcblx0cmlnaHRzIDogS2FsdHVyYVBsYXlSZWFkeVJpZ2h0W107XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFQbGF5UmVhZHlQb2xpY3lBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5yaWdodHMgPT09ICd1bmRlZmluZWQnKSB0aGlzLnJpZ2h0cyA9IFtdO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFQbGF5UmVhZHlQb2xpY3knIH0sXG5cdFx0XHRcdGdyYWNlUGVyaW9kIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGxpY2Vuc2VSZW1vdmFsUG9saWN5IDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVBsYXlSZWFkeUxpY2Vuc2VSZW1vdmFsUG9saWN5LCBzdWJUeXBlIDogJ0thbHR1cmFQbGF5UmVhZHlMaWNlbnNlUmVtb3ZhbFBvbGljeScgfSxcblx0XHRcdFx0bGljZW5zZVJlbW92YWxEdXJhdGlvbiA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRtaW5TZWN1cml0eUxldmVsIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVBsYXlSZWFkeU1pbmltdW1MaWNlbnNlU2VjdXJpdHlMZXZlbCwgc3ViVHlwZSA6ICdLYWx0dXJhUGxheVJlYWR5TWluaW11bUxpY2Vuc2VTZWN1cml0eUxldmVsJyB9LFxuXHRcdFx0XHRyaWdodHMgOiB7IHR5cGUgOiAnYScsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFQbGF5UmVhZHlSaWdodCwgc3ViVHlwZSA6ICdLYWx0dXJhUGxheVJlYWR5UmlnaHQnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFQbGF5UmVhZHlQb2xpY3knXSA9IEthbHR1cmFQbGF5UmVhZHlQb2xpY3k7Il19