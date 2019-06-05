/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaDrmProviderType } from './KalturaDrmProviderType';
import { KalturaDrmPolicyStatus } from './KalturaDrmPolicyStatus';
import { KalturaDrmLicenseScenario } from './KalturaDrmLicenseScenario';
import { KalturaDrmLicenseType } from './KalturaDrmLicenseType';
import { KalturaDrmLicenseExpirationPolicy } from './KalturaDrmLicenseExpirationPolicy';
import { KalturaKeyValue } from './KalturaKeyValue';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaDrmPolicyArgs() { }
/** @type {?|undefined} */
KalturaDrmPolicyArgs.prototype.partnerId;
/** @type {?|undefined} */
KalturaDrmPolicyArgs.prototype.name;
/** @type {?|undefined} */
KalturaDrmPolicyArgs.prototype.systemName;
/** @type {?|undefined} */
KalturaDrmPolicyArgs.prototype.description;
/** @type {?|undefined} */
KalturaDrmPolicyArgs.prototype.provider;
/** @type {?|undefined} */
KalturaDrmPolicyArgs.prototype.status;
/** @type {?|undefined} */
KalturaDrmPolicyArgs.prototype.scenario;
/** @type {?|undefined} */
KalturaDrmPolicyArgs.prototype.licenseType;
/** @type {?|undefined} */
KalturaDrmPolicyArgs.prototype.licenseExpirationPolicy;
/** @type {?|undefined} */
KalturaDrmPolicyArgs.prototype.duration;
/** @type {?|undefined} */
KalturaDrmPolicyArgs.prototype.licenseParams;
var KalturaDrmPolicy = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaDrmPolicy, _super);
    function KalturaDrmPolicy(data) {
        var _this = _super.call(this, data) || this;
        if (typeof _this.licenseParams === 'undefined')
            _this.licenseParams = [];
        return _this;
    }
    /**
     * @return {?}
     */
    KalturaDrmPolicy.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaDrmPolicy' },
            id: { type: 'n', readOnly: true },
            partnerId: { type: 'n' },
            name: { type: 's' },
            systemName: { type: 's' },
            description: { type: 's' },
            provider: { type: 'es', subTypeConstructor: KalturaDrmProviderType, subType: 'KalturaDrmProviderType' },
            status: { type: 'en', subTypeConstructor: KalturaDrmPolicyStatus, subType: 'KalturaDrmPolicyStatus' },
            scenario: { type: 'es', subTypeConstructor: KalturaDrmLicenseScenario, subType: 'KalturaDrmLicenseScenario' },
            licenseType: { type: 'es', subTypeConstructor: KalturaDrmLicenseType, subType: 'KalturaDrmLicenseType' },
            licenseExpirationPolicy: { type: 'en', subTypeConstructor: KalturaDrmLicenseExpirationPolicy, subType: 'KalturaDrmLicenseExpirationPolicy' },
            duration: { type: 'n' },
            createdAt: { type: 'n', readOnly: true },
            updatedAt: { type: 'n', readOnly: true },
            licenseParams: { type: 'a', subTypeConstructor: KalturaKeyValue, subType: 'KalturaKeyValue' }
        });
        return result;
    };
    return KalturaDrmPolicy;
}(KalturaObjectBase));
export { KalturaDrmPolicy };
if (false) {
    /** @type {?} */
    KalturaDrmPolicy.prototype.id;
    /** @type {?} */
    KalturaDrmPolicy.prototype.partnerId;
    /** @type {?} */
    KalturaDrmPolicy.prototype.name;
    /** @type {?} */
    KalturaDrmPolicy.prototype.systemName;
    /** @type {?} */
    KalturaDrmPolicy.prototype.description;
    /** @type {?} */
    KalturaDrmPolicy.prototype.provider;
    /** @type {?} */
    KalturaDrmPolicy.prototype.status;
    /** @type {?} */
    KalturaDrmPolicy.prototype.scenario;
    /** @type {?} */
    KalturaDrmPolicy.prototype.licenseType;
    /** @type {?} */
    KalturaDrmPolicy.prototype.licenseExpirationPolicy;
    /** @type {?} */
    KalturaDrmPolicy.prototype.duration;
    /** @type {?} */
    KalturaDrmPolicy.prototype.createdAt;
    /** @type {?} */
    KalturaDrmPolicy.prototype.updatedAt;
    /** @type {?} */
    KalturaDrmPolicy.prototype.licenseParams;
}
typesMappingStorage['KalturaDrmPolicy'] = KalturaDrmPolicy;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYURybVBvbGljeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYURybVBvbGljeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUN4RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUN4RixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDcEQsT0FBTyxFQUFFLGlCQUFpQixFQUF5QixNQUFNLHdCQUF3QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQmxGLElBQUE7SUFBc0MsNENBQWlCO0lBaUJuRCwwQkFBWSxJQUE0QjtRQUF4QyxZQUVJLGtCQUFNLElBQUksQ0FBQyxTQUVkO1FBREcsRUFBRSxDQUFDLENBQUMsT0FBTyxLQUFJLENBQUMsYUFBYSxLQUFLLFdBQVcsQ0FBQztZQUFDLEtBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDOztLQUMxRTs7OztJQUVTLHVDQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGtCQUFrQixFQUFFO1lBQ3JFLEVBQUUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUNwQyxTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzFCLElBQUksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDckIsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMzQixXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVCLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsc0JBQXNCLEVBQUUsT0FBTyxFQUFHLHdCQUF3QixFQUFFO1lBQzNHLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsc0JBQXNCLEVBQUUsT0FBTyxFQUFHLHdCQUF3QixFQUFFO1lBQ3pHLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcseUJBQXlCLEVBQUUsT0FBTyxFQUFHLDJCQUEyQixFQUFFO1lBQ2pILFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcscUJBQXFCLEVBQUUsT0FBTyxFQUFHLHVCQUF1QixFQUFFO1lBQzVHLHVCQUF1QixFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxpQ0FBaUMsRUFBRSxPQUFPLEVBQUcsbUNBQW1DLEVBQUU7WUFDaEosUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDM0MsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQzNDLGFBQWEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsZUFBZSxFQUFFLE9BQU8sRUFBRyxpQkFBaUIsRUFBRTtTQUN4RixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCOzJCQXhFTDtFQXlCc0MsaUJBQWlCLEVBZ0R0RCxDQUFBO0FBaERELDRCQWdEQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLGtCQUFrQixDQUFDLEdBQUcsZ0JBQWdCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYURybVByb3ZpZGVyVHlwZSB9IGZyb20gJy4vS2FsdHVyYURybVByb3ZpZGVyVHlwZSc7XG5pbXBvcnQgeyBLYWx0dXJhRHJtUG9saWN5U3RhdHVzIH0gZnJvbSAnLi9LYWx0dXJhRHJtUG9saWN5U3RhdHVzJztcbmltcG9ydCB7IEthbHR1cmFEcm1MaWNlbnNlU2NlbmFyaW8gfSBmcm9tICcuL0thbHR1cmFEcm1MaWNlbnNlU2NlbmFyaW8nO1xuaW1wb3J0IHsgS2FsdHVyYURybUxpY2Vuc2VUeXBlIH0gZnJvbSAnLi9LYWx0dXJhRHJtTGljZW5zZVR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYURybUxpY2Vuc2VFeHBpcmF0aW9uUG9saWN5IH0gZnJvbSAnLi9LYWx0dXJhRHJtTGljZW5zZUV4cGlyYXRpb25Qb2xpY3knO1xuaW1wb3J0IHsgS2FsdHVyYUtleVZhbHVlIH0gZnJvbSAnLi9LYWx0dXJhS2V5VmFsdWUnO1xuaW1wb3J0IHsgS2FsdHVyYU9iamVjdEJhc2UsIEthbHR1cmFPYmplY3RCYXNlQXJncyB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFEcm1Qb2xpY3lBcmdzICBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlQXJncyB7XG4gICAgcGFydG5lcklkPyA6IG51bWJlcjtcblx0bmFtZT8gOiBzdHJpbmc7XG5cdHN5c3RlbU5hbWU/IDogc3RyaW5nO1xuXHRkZXNjcmlwdGlvbj8gOiBzdHJpbmc7XG5cdHByb3ZpZGVyPyA6IEthbHR1cmFEcm1Qcm92aWRlclR5cGU7XG5cdHN0YXR1cz8gOiBLYWx0dXJhRHJtUG9saWN5U3RhdHVzO1xuXHRzY2VuYXJpbz8gOiBLYWx0dXJhRHJtTGljZW5zZVNjZW5hcmlvO1xuXHRsaWNlbnNlVHlwZT8gOiBLYWx0dXJhRHJtTGljZW5zZVR5cGU7XG5cdGxpY2Vuc2VFeHBpcmF0aW9uUG9saWN5PyA6IEthbHR1cmFEcm1MaWNlbnNlRXhwaXJhdGlvblBvbGljeTtcblx0ZHVyYXRpb24/IDogbnVtYmVyO1xuXHRsaWNlbnNlUGFyYW1zPyA6IEthbHR1cmFLZXlWYWx1ZVtdO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhRHJtUG9saWN5IGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2Uge1xuXG4gICAgcmVhZG9ubHkgaWQgOiBudW1iZXI7XG5cdHBhcnRuZXJJZCA6IG51bWJlcjtcblx0bmFtZSA6IHN0cmluZztcblx0c3lzdGVtTmFtZSA6IHN0cmluZztcblx0ZGVzY3JpcHRpb24gOiBzdHJpbmc7XG5cdHByb3ZpZGVyIDogS2FsdHVyYURybVByb3ZpZGVyVHlwZTtcblx0c3RhdHVzIDogS2FsdHVyYURybVBvbGljeVN0YXR1cztcblx0c2NlbmFyaW8gOiBLYWx0dXJhRHJtTGljZW5zZVNjZW5hcmlvO1xuXHRsaWNlbnNlVHlwZSA6IEthbHR1cmFEcm1MaWNlbnNlVHlwZTtcblx0bGljZW5zZUV4cGlyYXRpb25Qb2xpY3kgOiBLYWx0dXJhRHJtTGljZW5zZUV4cGlyYXRpb25Qb2xpY3k7XG5cdGR1cmF0aW9uIDogbnVtYmVyO1xuXHRyZWFkb25seSBjcmVhdGVkQXQgOiBudW1iZXI7XG5cdHJlYWRvbmx5IHVwZGF0ZWRBdCA6IG51bWJlcjtcblx0bGljZW5zZVBhcmFtcyA6IEthbHR1cmFLZXlWYWx1ZVtdO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhRHJtUG9saWN5QXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMubGljZW5zZVBhcmFtcyA9PT0gJ3VuZGVmaW5lZCcpIHRoaXMubGljZW5zZVBhcmFtcyA9IFtdO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFEcm1Qb2xpY3knIH0sXG5cdFx0XHRcdGlkIDogeyB0eXBlIDogJ24nLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0cGFydG5lcklkIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdG5hbWUgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c3lzdGVtTmFtZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRkZXNjcmlwdGlvbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRwcm92aWRlciA6IHsgdHlwZSA6ICdlcycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFEcm1Qcm92aWRlclR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYURybVByb3ZpZGVyVHlwZScgfSxcblx0XHRcdFx0c3RhdHVzIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYURybVBvbGljeVN0YXR1cywgc3ViVHlwZSA6ICdLYWx0dXJhRHJtUG9saWN5U3RhdHVzJyB9LFxuXHRcdFx0XHRzY2VuYXJpbyA6IHsgdHlwZSA6ICdlcycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFEcm1MaWNlbnNlU2NlbmFyaW8sIHN1YlR5cGUgOiAnS2FsdHVyYURybUxpY2Vuc2VTY2VuYXJpbycgfSxcblx0XHRcdFx0bGljZW5zZVR5cGUgOiB7IHR5cGUgOiAnZXMnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRHJtTGljZW5zZVR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYURybUxpY2Vuc2VUeXBlJyB9LFxuXHRcdFx0XHRsaWNlbnNlRXhwaXJhdGlvblBvbGljeSA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFEcm1MaWNlbnNlRXhwaXJhdGlvblBvbGljeSwgc3ViVHlwZSA6ICdLYWx0dXJhRHJtTGljZW5zZUV4cGlyYXRpb25Qb2xpY3knIH0sXG5cdFx0XHRcdGR1cmF0aW9uIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGNyZWF0ZWRBdCA6IHsgdHlwZSA6ICduJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdHVwZGF0ZWRBdCA6IHsgdHlwZSA6ICduJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdGxpY2Vuc2VQYXJhbXMgOiB7IHR5cGUgOiAnYScsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFLZXlWYWx1ZSwgc3ViVHlwZSA6ICdLYWx0dXJhS2V5VmFsdWUnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFEcm1Qb2xpY3knXSA9IEthbHR1cmFEcm1Qb2xpY3k7Il19