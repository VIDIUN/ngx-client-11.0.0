/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaConfigurableDistributionProfile } from './KalturaConfigurableDistributionProfile';
/**
 * @record
 */
export function KalturaUverseClickToOrderDistributionProfileArgs() { }
/** @type {?|undefined} */
KalturaUverseClickToOrderDistributionProfileArgs.prototype.backgroundImageWide;
/** @type {?|undefined} */
KalturaUverseClickToOrderDistributionProfileArgs.prototype.backgroundImageStandard;
var KalturaUverseClickToOrderDistributionProfile = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaUverseClickToOrderDistributionProfile, _super);
    function KalturaUverseClickToOrderDistributionProfile(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaUverseClickToOrderDistributionProfile.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaUverseClickToOrderDistributionProfile' },
            feedUrl: { type: 's', readOnly: true },
            backgroundImageWide: { type: 's' },
            backgroundImageStandard: { type: 's' }
        });
        return result;
    };
    return KalturaUverseClickToOrderDistributionProfile;
}(KalturaConfigurableDistributionProfile));
export { KalturaUverseClickToOrderDistributionProfile };
if (false) {
    /** @type {?} */
    KalturaUverseClickToOrderDistributionProfile.prototype.feedUrl;
    /** @type {?} */
    KalturaUverseClickToOrderDistributionProfile.prototype.backgroundImageWide;
    /** @type {?} */
    KalturaUverseClickToOrderDistributionProfile.prototype.backgroundImageStandard;
}
typesMappingStorage['KalturaUverseClickToOrderDistributionProfile'] = KalturaUverseClickToOrderDistributionProfile;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVV2ZXJzZUNsaWNrVG9PcmRlckRpc3RyaWJ1dGlvblByb2ZpbGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFVdmVyc2VDbGlja1RvT3JkZXJEaXN0cmlidXRpb25Qcm9maWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxzQ0FBc0MsRUFBOEMsTUFBTSwwQ0FBMEMsQ0FBQzs7Ozs7Ozs7O0FBUTlJLElBQUE7SUFBa0Usd0VBQXNDO0lBTXBHLHNEQUFZLElBQXdEO2VBRWhFLGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsbUVBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsOENBQThDLEVBQUU7WUFDakcsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQ3pDLG1CQUFtQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNwQyx1QkFBdUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDL0IsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjt1REFsQ0w7RUFVa0Usc0NBQXNDLEVBeUJ2RyxDQUFBO0FBekJELHdEQXlCQzs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsOENBQThDLENBQUMsR0FBRyw0Q0FBNEMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhQ29uZmlndXJhYmxlRGlzdHJpYnV0aW9uUHJvZmlsZSwgS2FsdHVyYUNvbmZpZ3VyYWJsZURpc3RyaWJ1dGlvblByb2ZpbGVBcmdzIH0gZnJvbSAnLi9LYWx0dXJhQ29uZmlndXJhYmxlRGlzdHJpYnV0aW9uUHJvZmlsZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYVV2ZXJzZUNsaWNrVG9PcmRlckRpc3RyaWJ1dGlvblByb2ZpbGVBcmdzICBleHRlbmRzIEthbHR1cmFDb25maWd1cmFibGVEaXN0cmlidXRpb25Qcm9maWxlQXJncyB7XG4gICAgYmFja2dyb3VuZEltYWdlV2lkZT8gOiBzdHJpbmc7XG5cdGJhY2tncm91bmRJbWFnZVN0YW5kYXJkPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYVV2ZXJzZUNsaWNrVG9PcmRlckRpc3RyaWJ1dGlvblByb2ZpbGUgZXh0ZW5kcyBLYWx0dXJhQ29uZmlndXJhYmxlRGlzdHJpYnV0aW9uUHJvZmlsZSB7XG5cbiAgICByZWFkb25seSBmZWVkVXJsIDogc3RyaW5nO1xuXHRiYWNrZ3JvdW5kSW1hZ2VXaWRlIDogc3RyaW5nO1xuXHRiYWNrZ3JvdW5kSW1hZ2VTdGFuZGFyZCA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYVV2ZXJzZUNsaWNrVG9PcmRlckRpc3RyaWJ1dGlvblByb2ZpbGVBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYVV2ZXJzZUNsaWNrVG9PcmRlckRpc3RyaWJ1dGlvblByb2ZpbGUnIH0sXG5cdFx0XHRcdGZlZWRVcmwgOiB7IHR5cGUgOiAncycsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRiYWNrZ3JvdW5kSW1hZ2VXaWRlIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGJhY2tncm91bmRJbWFnZVN0YW5kYXJkIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFVdmVyc2VDbGlja1RvT3JkZXJEaXN0cmlidXRpb25Qcm9maWxlJ10gPSBLYWx0dXJhVXZlcnNlQ2xpY2tUb09yZGVyRGlzdHJpYnV0aW9uUHJvZmlsZTsiXX0=