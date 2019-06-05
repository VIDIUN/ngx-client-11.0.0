/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaDrmProviderType } from './KalturaDrmProviderType';
import { KalturaDrmPolicyStatus } from './KalturaDrmPolicyStatus';
import { KalturaDrmLicenseScenario } from './KalturaDrmLicenseScenario';
import { KalturaFilter } from './KalturaFilter';
/**
 * @record
 */
export function KalturaDrmPolicyBaseFilterArgs() { }
/** @type {?|undefined} */
KalturaDrmPolicyBaseFilterArgs.prototype.partnerIdEqual;
/** @type {?|undefined} */
KalturaDrmPolicyBaseFilterArgs.prototype.partnerIdIn;
/** @type {?|undefined} */
KalturaDrmPolicyBaseFilterArgs.prototype.nameLike;
/** @type {?|undefined} */
KalturaDrmPolicyBaseFilterArgs.prototype.systemNameLike;
/** @type {?|undefined} */
KalturaDrmPolicyBaseFilterArgs.prototype.providerEqual;
/** @type {?|undefined} */
KalturaDrmPolicyBaseFilterArgs.prototype.providerIn;
/** @type {?|undefined} */
KalturaDrmPolicyBaseFilterArgs.prototype.statusEqual;
/** @type {?|undefined} */
KalturaDrmPolicyBaseFilterArgs.prototype.statusIn;
/** @type {?|undefined} */
KalturaDrmPolicyBaseFilterArgs.prototype.scenarioEqual;
/** @type {?|undefined} */
KalturaDrmPolicyBaseFilterArgs.prototype.scenarioIn;
var KalturaDrmPolicyBaseFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaDrmPolicyBaseFilter, _super);
    function KalturaDrmPolicyBaseFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaDrmPolicyBaseFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaDrmPolicyBaseFilter' },
            partnerIdEqual: { type: 'n' },
            partnerIdIn: { type: 's' },
            nameLike: { type: 's' },
            systemNameLike: { type: 's' },
            providerEqual: { type: 'es', subTypeConstructor: KalturaDrmProviderType, subType: 'KalturaDrmProviderType' },
            providerIn: { type: 's' },
            statusEqual: { type: 'en', subTypeConstructor: KalturaDrmPolicyStatus, subType: 'KalturaDrmPolicyStatus' },
            statusIn: { type: 's' },
            scenarioEqual: { type: 'es', subTypeConstructor: KalturaDrmLicenseScenario, subType: 'KalturaDrmLicenseScenario' },
            scenarioIn: { type: 's' }
        });
        return result;
    };
    return KalturaDrmPolicyBaseFilter;
}(KalturaFilter));
export { KalturaDrmPolicyBaseFilter };
if (false) {
    /** @type {?} */
    KalturaDrmPolicyBaseFilter.prototype.partnerIdEqual;
    /** @type {?} */
    KalturaDrmPolicyBaseFilter.prototype.partnerIdIn;
    /** @type {?} */
    KalturaDrmPolicyBaseFilter.prototype.nameLike;
    /** @type {?} */
    KalturaDrmPolicyBaseFilter.prototype.systemNameLike;
    /** @type {?} */
    KalturaDrmPolicyBaseFilter.prototype.providerEqual;
    /** @type {?} */
    KalturaDrmPolicyBaseFilter.prototype.providerIn;
    /** @type {?} */
    KalturaDrmPolicyBaseFilter.prototype.statusEqual;
    /** @type {?} */
    KalturaDrmPolicyBaseFilter.prototype.statusIn;
    /** @type {?} */
    KalturaDrmPolicyBaseFilter.prototype.scenarioEqual;
    /** @type {?} */
    KalturaDrmPolicyBaseFilter.prototype.scenarioIn;
}
typesMappingStorage['KalturaDrmPolicyBaseFilter'] = KalturaDrmPolicyBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYURybVBvbGljeUJhc2VGaWx0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFEcm1Qb2xpY3lCYXNlRmlsdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxhQUFhLEVBQXFCLE1BQU0saUJBQWlCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQm5FLElBQUE7SUFBZ0Qsc0RBQWE7SUFhekQsb0NBQVksSUFBc0M7ZUFFOUMsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyxpREFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyw0QkFBNEIsRUFBRTtZQUMvRSxjQUFjLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQy9CLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUIsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixjQUFjLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQy9CLGFBQWEsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsc0JBQXNCLEVBQUUsT0FBTyxFQUFHLHdCQUF3QixFQUFFO1lBQ2hILFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDM0IsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxzQkFBc0IsRUFBRSxPQUFPLEVBQUcsd0JBQXdCLEVBQUU7WUFDOUcsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixhQUFhLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHlCQUF5QixFQUFFLE9BQU8sRUFBRywyQkFBMkIsRUFBRTtZQUN0SCxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ2xCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7cUNBM0RMO0VBcUJnRCxhQUFhLEVBdUM1RCxDQUFBO0FBdkNELHNDQXVDQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyw0QkFBNEIsQ0FBQyxHQUFHLDBCQUEwQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFEcm1Qcm92aWRlclR5cGUgfSBmcm9tICcuL0thbHR1cmFEcm1Qcm92aWRlclR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYURybVBvbGljeVN0YXR1cyB9IGZyb20gJy4vS2FsdHVyYURybVBvbGljeVN0YXR1cyc7XG5pbXBvcnQgeyBLYWx0dXJhRHJtTGljZW5zZVNjZW5hcmlvIH0gZnJvbSAnLi9LYWx0dXJhRHJtTGljZW5zZVNjZW5hcmlvJztcbmltcG9ydCB7IEthbHR1cmFGaWx0ZXIsIEthbHR1cmFGaWx0ZXJBcmdzIH0gZnJvbSAnLi9LYWx0dXJhRmlsdGVyJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhRHJtUG9saWN5QmFzZUZpbHRlckFyZ3MgIGV4dGVuZHMgS2FsdHVyYUZpbHRlckFyZ3Mge1xuICAgIHBhcnRuZXJJZEVxdWFsPyA6IG51bWJlcjtcblx0cGFydG5lcklkSW4/IDogc3RyaW5nO1xuXHRuYW1lTGlrZT8gOiBzdHJpbmc7XG5cdHN5c3RlbU5hbWVMaWtlPyA6IHN0cmluZztcblx0cHJvdmlkZXJFcXVhbD8gOiBLYWx0dXJhRHJtUHJvdmlkZXJUeXBlO1xuXHRwcm92aWRlckluPyA6IHN0cmluZztcblx0c3RhdHVzRXF1YWw/IDogS2FsdHVyYURybVBvbGljeVN0YXR1cztcblx0c3RhdHVzSW4/IDogc3RyaW5nO1xuXHRzY2VuYXJpb0VxdWFsPyA6IEthbHR1cmFEcm1MaWNlbnNlU2NlbmFyaW87XG5cdHNjZW5hcmlvSW4/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhRHJtUG9saWN5QmFzZUZpbHRlciBleHRlbmRzIEthbHR1cmFGaWx0ZXIge1xuXG4gICAgcGFydG5lcklkRXF1YWwgOiBudW1iZXI7XG5cdHBhcnRuZXJJZEluIDogc3RyaW5nO1xuXHRuYW1lTGlrZSA6IHN0cmluZztcblx0c3lzdGVtTmFtZUxpa2UgOiBzdHJpbmc7XG5cdHByb3ZpZGVyRXF1YWwgOiBLYWx0dXJhRHJtUHJvdmlkZXJUeXBlO1xuXHRwcm92aWRlckluIDogc3RyaW5nO1xuXHRzdGF0dXNFcXVhbCA6IEthbHR1cmFEcm1Qb2xpY3lTdGF0dXM7XG5cdHN0YXR1c0luIDogc3RyaW5nO1xuXHRzY2VuYXJpb0VxdWFsIDogS2FsdHVyYURybUxpY2Vuc2VTY2VuYXJpbztcblx0c2NlbmFyaW9JbiA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYURybVBvbGljeUJhc2VGaWx0ZXJBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYURybVBvbGljeUJhc2VGaWx0ZXInIH0sXG5cdFx0XHRcdHBhcnRuZXJJZEVxdWFsIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHBhcnRuZXJJZEluIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdG5hbWVMaWtlIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHN5c3RlbU5hbWVMaWtlIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHByb3ZpZGVyRXF1YWwgOiB7IHR5cGUgOiAnZXMnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRHJtUHJvdmlkZXJUeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFEcm1Qcm92aWRlclR5cGUnIH0sXG5cdFx0XHRcdHByb3ZpZGVySW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c3RhdHVzRXF1YWwgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRHJtUG9saWN5U3RhdHVzLCBzdWJUeXBlIDogJ0thbHR1cmFEcm1Qb2xpY3lTdGF0dXMnIH0sXG5cdFx0XHRcdHN0YXR1c0luIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHNjZW5hcmlvRXF1YWwgOiB7IHR5cGUgOiAnZXMnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRHJtTGljZW5zZVNjZW5hcmlvLCBzdWJUeXBlIDogJ0thbHR1cmFEcm1MaWNlbnNlU2NlbmFyaW8nIH0sXG5cdFx0XHRcdHNjZW5hcmlvSW4gOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYURybVBvbGljeUJhc2VGaWx0ZXInXSA9IEthbHR1cmFEcm1Qb2xpY3lCYXNlRmlsdGVyOyJdfQ==