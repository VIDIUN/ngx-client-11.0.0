/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var KalturaPlayReadyPolicy = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaPlayReadyPolicy, _super);
    function KalturaPlayReadyPolicy(data) {
        var _this = _super.call(this, data) || this;
        if (typeof _this.rights === 'undefined')
            _this.rights = [];
        return _this;
    }
    /**
     * @return {?}
     */
    KalturaPlayReadyPolicy.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaPlayReadyPolicy' },
            gracePeriod: { type: 'n' },
            licenseRemovalPolicy: { type: 'en', subTypeConstructor: KalturaPlayReadyLicenseRemovalPolicy, subType: 'KalturaPlayReadyLicenseRemovalPolicy' },
            licenseRemovalDuration: { type: 'n' },
            minSecurityLevel: { type: 'en', subTypeConstructor: KalturaPlayReadyMinimumLicenseSecurityLevel, subType: 'KalturaPlayReadyMinimumLicenseSecurityLevel' },
            rights: { type: 'a', subTypeConstructor: KalturaPlayReadyRight, subType: 'KalturaPlayReadyRight' }
        });
        return result;
    };
    return KalturaPlayReadyPolicy;
}(KalturaDrmPolicy));
export { KalturaPlayReadyPolicy };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVBsYXlSZWFkeVBvbGljeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYVBsYXlSZWFkeVBvbGljeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsb0NBQW9DLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUM5RixPQUFPLEVBQUUsMkNBQTJDLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUM1RyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQXdCLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQVc1RSxJQUFBO0lBQTRDLGtEQUFnQjtJQVF4RCxnQ0FBWSxJQUFrQztRQUE5QyxZQUVJLGtCQUFNLElBQUksQ0FBQyxTQUVkO1FBREcsRUFBRSxDQUFDLENBQUMsT0FBTyxLQUFJLENBQUMsTUFBTSxLQUFLLFdBQVcsQ0FBQztZQUFDLEtBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDOztLQUM1RDs7OztJQUVTLDZDQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHdCQUF3QixFQUFFO1lBQzNFLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUIsb0JBQW9CLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLG9DQUFvQyxFQUFFLE9BQU8sRUFBRyxzQ0FBc0MsRUFBRTtZQUNuSixzQkFBc0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDdkMsZ0JBQWdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLDJDQUEyQyxFQUFFLE9BQU8sRUFBRyw2Q0FBNkMsRUFBRTtZQUM3SixNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLHFCQUFxQixFQUFFLE9BQU8sRUFBRyx1QkFBdUIsRUFBRTtTQUM3RixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO2lDQTdDTDtFQWdCNEMsZ0JBQWdCLEVBOEIzRCxDQUFBO0FBOUJELGtDQThCQzs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLHdCQUF3QixDQUFDLEdBQUcsc0JBQXNCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVBsYXlSZWFkeUxpY2Vuc2VSZW1vdmFsUG9saWN5IH0gZnJvbSAnLi9LYWx0dXJhUGxheVJlYWR5TGljZW5zZVJlbW92YWxQb2xpY3knO1xuaW1wb3J0IHsgS2FsdHVyYVBsYXlSZWFkeU1pbmltdW1MaWNlbnNlU2VjdXJpdHlMZXZlbCB9IGZyb20gJy4vS2FsdHVyYVBsYXlSZWFkeU1pbmltdW1MaWNlbnNlU2VjdXJpdHlMZXZlbCc7XG5pbXBvcnQgeyBLYWx0dXJhUGxheVJlYWR5UmlnaHQgfSBmcm9tICcuL0thbHR1cmFQbGF5UmVhZHlSaWdodCc7XG5pbXBvcnQgeyBLYWx0dXJhRHJtUG9saWN5LCBLYWx0dXJhRHJtUG9saWN5QXJncyB9IGZyb20gJy4vS2FsdHVyYURybVBvbGljeSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYVBsYXlSZWFkeVBvbGljeUFyZ3MgIGV4dGVuZHMgS2FsdHVyYURybVBvbGljeUFyZ3Mge1xuICAgIGdyYWNlUGVyaW9kPyA6IG51bWJlcjtcblx0bGljZW5zZVJlbW92YWxQb2xpY3k/IDogS2FsdHVyYVBsYXlSZWFkeUxpY2Vuc2VSZW1vdmFsUG9saWN5O1xuXHRsaWNlbnNlUmVtb3ZhbER1cmF0aW9uPyA6IG51bWJlcjtcblx0bWluU2VjdXJpdHlMZXZlbD8gOiBLYWx0dXJhUGxheVJlYWR5TWluaW11bUxpY2Vuc2VTZWN1cml0eUxldmVsO1xuXHRyaWdodHM/IDogS2FsdHVyYVBsYXlSZWFkeVJpZ2h0W107XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFQbGF5UmVhZHlQb2xpY3kgZXh0ZW5kcyBLYWx0dXJhRHJtUG9saWN5IHtcblxuICAgIGdyYWNlUGVyaW9kIDogbnVtYmVyO1xuXHRsaWNlbnNlUmVtb3ZhbFBvbGljeSA6IEthbHR1cmFQbGF5UmVhZHlMaWNlbnNlUmVtb3ZhbFBvbGljeTtcblx0bGljZW5zZVJlbW92YWxEdXJhdGlvbiA6IG51bWJlcjtcblx0bWluU2VjdXJpdHlMZXZlbCA6IEthbHR1cmFQbGF5UmVhZHlNaW5pbXVtTGljZW5zZVNlY3VyaXR5TGV2ZWw7XG5cdHJpZ2h0cyA6IEthbHR1cmFQbGF5UmVhZHlSaWdodFtdO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhUGxheVJlYWR5UG9saWN5QXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMucmlnaHRzID09PSAndW5kZWZpbmVkJykgdGhpcy5yaWdodHMgPSBbXTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhUGxheVJlYWR5UG9saWN5JyB9LFxuXHRcdFx0XHRncmFjZVBlcmlvZCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRsaWNlbnNlUmVtb3ZhbFBvbGljeSA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFQbGF5UmVhZHlMaWNlbnNlUmVtb3ZhbFBvbGljeSwgc3ViVHlwZSA6ICdLYWx0dXJhUGxheVJlYWR5TGljZW5zZVJlbW92YWxQb2xpY3knIH0sXG5cdFx0XHRcdGxpY2Vuc2VSZW1vdmFsRHVyYXRpb24gOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0bWluU2VjdXJpdHlMZXZlbCA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFQbGF5UmVhZHlNaW5pbXVtTGljZW5zZVNlY3VyaXR5TGV2ZWwsIHN1YlR5cGUgOiAnS2FsdHVyYVBsYXlSZWFkeU1pbmltdW1MaWNlbnNlU2VjdXJpdHlMZXZlbCcgfSxcblx0XHRcdFx0cmlnaHRzIDogeyB0eXBlIDogJ2EnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhUGxheVJlYWR5UmlnaHQsIHN1YlR5cGUgOiAnS2FsdHVyYVBsYXlSZWFkeVJpZ2h0JyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhUGxheVJlYWR5UG9saWN5J10gPSBLYWx0dXJhUGxheVJlYWR5UG9saWN5OyJdfQ==