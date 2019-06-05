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
export function KalturaUverseDistributionProfileArgs() { }
/** @type {?|undefined} */
KalturaUverseDistributionProfileArgs.prototype.channelTitle;
/** @type {?|undefined} */
KalturaUverseDistributionProfileArgs.prototype.channelLink;
/** @type {?|undefined} */
KalturaUverseDistributionProfileArgs.prototype.channelDescription;
/** @type {?|undefined} */
KalturaUverseDistributionProfileArgs.prototype.channelLanguage;
/** @type {?|undefined} */
KalturaUverseDistributionProfileArgs.prototype.channelCopyright;
/** @type {?|undefined} */
KalturaUverseDistributionProfileArgs.prototype.channelImageTitle;
/** @type {?|undefined} */
KalturaUverseDistributionProfileArgs.prototype.channelImageUrl;
/** @type {?|undefined} */
KalturaUverseDistributionProfileArgs.prototype.channelImageLink;
/** @type {?|undefined} */
KalturaUverseDistributionProfileArgs.prototype.ftpHost;
/** @type {?|undefined} */
KalturaUverseDistributionProfileArgs.prototype.ftpLogin;
/** @type {?|undefined} */
KalturaUverseDistributionProfileArgs.prototype.ftpPassword;
var KalturaUverseDistributionProfile = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaUverseDistributionProfile, _super);
    function KalturaUverseDistributionProfile(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaUverseDistributionProfile.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaUverseDistributionProfile' },
            feedUrl: { type: 's', readOnly: true },
            channelTitle: { type: 's' },
            channelLink: { type: 's' },
            channelDescription: { type: 's' },
            channelLanguage: { type: 's' },
            channelCopyright: { type: 's' },
            channelImageTitle: { type: 's' },
            channelImageUrl: { type: 's' },
            channelImageLink: { type: 's' },
            ftpHost: { type: 's' },
            ftpLogin: { type: 's' },
            ftpPassword: { type: 's' }
        });
        return result;
    };
    return KalturaUverseDistributionProfile;
}(KalturaConfigurableDistributionProfile));
export { KalturaUverseDistributionProfile };
if (false) {
    /** @type {?} */
    KalturaUverseDistributionProfile.prototype.feedUrl;
    /** @type {?} */
    KalturaUverseDistributionProfile.prototype.channelTitle;
    /** @type {?} */
    KalturaUverseDistributionProfile.prototype.channelLink;
    /** @type {?} */
    KalturaUverseDistributionProfile.prototype.channelDescription;
    /** @type {?} */
    KalturaUverseDistributionProfile.prototype.channelLanguage;
    /** @type {?} */
    KalturaUverseDistributionProfile.prototype.channelCopyright;
    /** @type {?} */
    KalturaUverseDistributionProfile.prototype.channelImageTitle;
    /** @type {?} */
    KalturaUverseDistributionProfile.prototype.channelImageUrl;
    /** @type {?} */
    KalturaUverseDistributionProfile.prototype.channelImageLink;
    /** @type {?} */
    KalturaUverseDistributionProfile.prototype.ftpHost;
    /** @type {?} */
    KalturaUverseDistributionProfile.prototype.ftpLogin;
    /** @type {?} */
    KalturaUverseDistributionProfile.prototype.ftpPassword;
}
typesMappingStorage['KalturaUverseDistributionProfile'] = KalturaUverseDistributionProfile;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVV2ZXJzZURpc3RyaWJ1dGlvblByb2ZpbGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFVdmVyc2VEaXN0cmlidXRpb25Qcm9maWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxzQ0FBc0MsRUFBOEMsTUFBTSwwQ0FBMEMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUI5SSxJQUFBO0lBQXNELDREQUFzQztJQWV4RiwwQ0FBWSxJQUE0QztlQUVwRCxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLHVEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGtDQUFrQyxFQUFFO1lBQ3JGLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUN6QyxZQUFZLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzdCLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUIsa0JBQWtCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ25DLGVBQWUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDaEMsZ0JBQWdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2pDLGlCQUFpQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNsQyxlQUFlLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2hDLGdCQUFnQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNqQyxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3hCLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNuQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCOzJDQTdETDtFQW1Cc0Qsc0NBQXNDLEVBMkMzRixDQUFBO0FBM0NELDRDQTJDQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsa0NBQWtDLENBQUMsR0FBRyxnQ0FBZ0MsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhQ29uZmlndXJhYmxlRGlzdHJpYnV0aW9uUHJvZmlsZSwgS2FsdHVyYUNvbmZpZ3VyYWJsZURpc3RyaWJ1dGlvblByb2ZpbGVBcmdzIH0gZnJvbSAnLi9LYWx0dXJhQ29uZmlndXJhYmxlRGlzdHJpYnV0aW9uUHJvZmlsZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYVV2ZXJzZURpc3RyaWJ1dGlvblByb2ZpbGVBcmdzICBleHRlbmRzIEthbHR1cmFDb25maWd1cmFibGVEaXN0cmlidXRpb25Qcm9maWxlQXJncyB7XG4gICAgY2hhbm5lbFRpdGxlPyA6IHN0cmluZztcblx0Y2hhbm5lbExpbms/IDogc3RyaW5nO1xuXHRjaGFubmVsRGVzY3JpcHRpb24/IDogc3RyaW5nO1xuXHRjaGFubmVsTGFuZ3VhZ2U/IDogc3RyaW5nO1xuXHRjaGFubmVsQ29weXJpZ2h0PyA6IHN0cmluZztcblx0Y2hhbm5lbEltYWdlVGl0bGU/IDogc3RyaW5nO1xuXHRjaGFubmVsSW1hZ2VVcmw/IDogc3RyaW5nO1xuXHRjaGFubmVsSW1hZ2VMaW5rPyA6IHN0cmluZztcblx0ZnRwSG9zdD8gOiBzdHJpbmc7XG5cdGZ0cExvZ2luPyA6IHN0cmluZztcblx0ZnRwUGFzc3dvcmQ/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhVXZlcnNlRGlzdHJpYnV0aW9uUHJvZmlsZSBleHRlbmRzIEthbHR1cmFDb25maWd1cmFibGVEaXN0cmlidXRpb25Qcm9maWxlIHtcblxuICAgIHJlYWRvbmx5IGZlZWRVcmwgOiBzdHJpbmc7XG5cdGNoYW5uZWxUaXRsZSA6IHN0cmluZztcblx0Y2hhbm5lbExpbmsgOiBzdHJpbmc7XG5cdGNoYW5uZWxEZXNjcmlwdGlvbiA6IHN0cmluZztcblx0Y2hhbm5lbExhbmd1YWdlIDogc3RyaW5nO1xuXHRjaGFubmVsQ29weXJpZ2h0IDogc3RyaW5nO1xuXHRjaGFubmVsSW1hZ2VUaXRsZSA6IHN0cmluZztcblx0Y2hhbm5lbEltYWdlVXJsIDogc3RyaW5nO1xuXHRjaGFubmVsSW1hZ2VMaW5rIDogc3RyaW5nO1xuXHRmdHBIb3N0IDogc3RyaW5nO1xuXHRmdHBMb2dpbiA6IHN0cmluZztcblx0ZnRwUGFzc3dvcmQgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFVdmVyc2VEaXN0cmlidXRpb25Qcm9maWxlQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFVdmVyc2VEaXN0cmlidXRpb25Qcm9maWxlJyB9LFxuXHRcdFx0XHRmZWVkVXJsIDogeyB0eXBlIDogJ3MnLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0Y2hhbm5lbFRpdGxlIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGNoYW5uZWxMaW5rIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGNoYW5uZWxEZXNjcmlwdGlvbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRjaGFubmVsTGFuZ3VhZ2UgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Y2hhbm5lbENvcHlyaWdodCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRjaGFubmVsSW1hZ2VUaXRsZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRjaGFubmVsSW1hZ2VVcmwgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Y2hhbm5lbEltYWdlTGluayA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRmdHBIb3N0IDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGZ0cExvZ2luIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGZ0cFBhc3N3b3JkIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFVdmVyc2VEaXN0cmlidXRpb25Qcm9maWxlJ10gPSBLYWx0dXJhVXZlcnNlRGlzdHJpYnV0aW9uUHJvZmlsZTsiXX0=