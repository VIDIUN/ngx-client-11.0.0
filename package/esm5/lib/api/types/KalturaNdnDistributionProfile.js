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
export function KalturaNdnDistributionProfileArgs() { }
/** @type {?|undefined} */
KalturaNdnDistributionProfileArgs.prototype.channelTitle;
/** @type {?|undefined} */
KalturaNdnDistributionProfileArgs.prototype.channelLink;
/** @type {?|undefined} */
KalturaNdnDistributionProfileArgs.prototype.channelDescription;
/** @type {?|undefined} */
KalturaNdnDistributionProfileArgs.prototype.channelLanguage;
/** @type {?|undefined} */
KalturaNdnDistributionProfileArgs.prototype.channelCopyright;
/** @type {?|undefined} */
KalturaNdnDistributionProfileArgs.prototype.channelImageTitle;
/** @type {?|undefined} */
KalturaNdnDistributionProfileArgs.prototype.channelImageUrl;
/** @type {?|undefined} */
KalturaNdnDistributionProfileArgs.prototype.channelImageLink;
/** @type {?|undefined} */
KalturaNdnDistributionProfileArgs.prototype.itemMediaRating;
var KalturaNdnDistributionProfile = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaNdnDistributionProfile, _super);
    function KalturaNdnDistributionProfile(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaNdnDistributionProfile.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaNdnDistributionProfile' },
            feedUrl: { type: 's', readOnly: true },
            channelTitle: { type: 's' },
            channelLink: { type: 's' },
            channelDescription: { type: 's' },
            channelLanguage: { type: 's' },
            channelCopyright: { type: 's' },
            channelImageTitle: { type: 's' },
            channelImageUrl: { type: 's' },
            channelImageLink: { type: 's' },
            itemMediaRating: { type: 's' }
        });
        return result;
    };
    return KalturaNdnDistributionProfile;
}(KalturaConfigurableDistributionProfile));
export { KalturaNdnDistributionProfile };
if (false) {
    /** @type {?} */
    KalturaNdnDistributionProfile.prototype.feedUrl;
    /** @type {?} */
    KalturaNdnDistributionProfile.prototype.channelTitle;
    /** @type {?} */
    KalturaNdnDistributionProfile.prototype.channelLink;
    /** @type {?} */
    KalturaNdnDistributionProfile.prototype.channelDescription;
    /** @type {?} */
    KalturaNdnDistributionProfile.prototype.channelLanguage;
    /** @type {?} */
    KalturaNdnDistributionProfile.prototype.channelCopyright;
    /** @type {?} */
    KalturaNdnDistributionProfile.prototype.channelImageTitle;
    /** @type {?} */
    KalturaNdnDistributionProfile.prototype.channelImageUrl;
    /** @type {?} */
    KalturaNdnDistributionProfile.prototype.channelImageLink;
    /** @type {?} */
    KalturaNdnDistributionProfile.prototype.itemMediaRating;
}
typesMappingStorage['KalturaNdnDistributionProfile'] = KalturaNdnDistributionProfile;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYU5kbkRpc3RyaWJ1dGlvblByb2ZpbGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFOZG5EaXN0cmlidXRpb25Qcm9maWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxzQ0FBc0MsRUFBOEMsTUFBTSwwQ0FBMEMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlOUksSUFBQTtJQUFtRCx5REFBc0M7SUFhckYsdUNBQVksSUFBeUM7ZUFFakQsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyxvREFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRywrQkFBK0IsRUFBRTtZQUNsRixPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDekMsWUFBWSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM3QixXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVCLGtCQUFrQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNuQyxlQUFlLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2hDLGdCQUFnQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNqQyxpQkFBaUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDbEMsZUFBZSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNoQyxnQkFBZ0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDakMsZUFBZSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUN2QixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO3dDQXZETDtFQWlCbUQsc0NBQXNDLEVBdUN4RixDQUFBO0FBdkNELHlDQXVDQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQywrQkFBK0IsQ0FBQyxHQUFHLDZCQUE2QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFDb25maWd1cmFibGVEaXN0cmlidXRpb25Qcm9maWxlLCBLYWx0dXJhQ29uZmlndXJhYmxlRGlzdHJpYnV0aW9uUHJvZmlsZUFyZ3MgfSBmcm9tICcuL0thbHR1cmFDb25maWd1cmFibGVEaXN0cmlidXRpb25Qcm9maWxlJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhTmRuRGlzdHJpYnV0aW9uUHJvZmlsZUFyZ3MgIGV4dGVuZHMgS2FsdHVyYUNvbmZpZ3VyYWJsZURpc3RyaWJ1dGlvblByb2ZpbGVBcmdzIHtcbiAgICBjaGFubmVsVGl0bGU/IDogc3RyaW5nO1xuXHRjaGFubmVsTGluaz8gOiBzdHJpbmc7XG5cdGNoYW5uZWxEZXNjcmlwdGlvbj8gOiBzdHJpbmc7XG5cdGNoYW5uZWxMYW5ndWFnZT8gOiBzdHJpbmc7XG5cdGNoYW5uZWxDb3B5cmlnaHQ/IDogc3RyaW5nO1xuXHRjaGFubmVsSW1hZ2VUaXRsZT8gOiBzdHJpbmc7XG5cdGNoYW5uZWxJbWFnZVVybD8gOiBzdHJpbmc7XG5cdGNoYW5uZWxJbWFnZUxpbms/IDogc3RyaW5nO1xuXHRpdGVtTWVkaWFSYXRpbmc/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhTmRuRGlzdHJpYnV0aW9uUHJvZmlsZSBleHRlbmRzIEthbHR1cmFDb25maWd1cmFibGVEaXN0cmlidXRpb25Qcm9maWxlIHtcblxuICAgIHJlYWRvbmx5IGZlZWRVcmwgOiBzdHJpbmc7XG5cdGNoYW5uZWxUaXRsZSA6IHN0cmluZztcblx0Y2hhbm5lbExpbmsgOiBzdHJpbmc7XG5cdGNoYW5uZWxEZXNjcmlwdGlvbiA6IHN0cmluZztcblx0Y2hhbm5lbExhbmd1YWdlIDogc3RyaW5nO1xuXHRjaGFubmVsQ29weXJpZ2h0IDogc3RyaW5nO1xuXHRjaGFubmVsSW1hZ2VUaXRsZSA6IHN0cmluZztcblx0Y2hhbm5lbEltYWdlVXJsIDogc3RyaW5nO1xuXHRjaGFubmVsSW1hZ2VMaW5rIDogc3RyaW5nO1xuXHRpdGVtTWVkaWFSYXRpbmcgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFOZG5EaXN0cmlidXRpb25Qcm9maWxlQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFOZG5EaXN0cmlidXRpb25Qcm9maWxlJyB9LFxuXHRcdFx0XHRmZWVkVXJsIDogeyB0eXBlIDogJ3MnLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0Y2hhbm5lbFRpdGxlIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGNoYW5uZWxMaW5rIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGNoYW5uZWxEZXNjcmlwdGlvbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRjaGFubmVsTGFuZ3VhZ2UgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Y2hhbm5lbENvcHlyaWdodCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRjaGFubmVsSW1hZ2VUaXRsZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRjaGFubmVsSW1hZ2VVcmwgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Y2hhbm5lbEltYWdlTGluayA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRpdGVtTWVkaWFSYXRpbmcgOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYU5kbkRpc3RyaWJ1dGlvblByb2ZpbGUnXSA9IEthbHR1cmFOZG5EaXN0cmlidXRpb25Qcm9maWxlOyJdfQ==