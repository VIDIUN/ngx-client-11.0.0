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
export function KalturaTVComDistributionProfileArgs() { }
/** @type {?|undefined} */
KalturaTVComDistributionProfileArgs.prototype.metadataProfileId;
/** @type {?|undefined} */
KalturaTVComDistributionProfileArgs.prototype.feedTitle;
/** @type {?|undefined} */
KalturaTVComDistributionProfileArgs.prototype.feedLink;
/** @type {?|undefined} */
KalturaTVComDistributionProfileArgs.prototype.feedDescription;
/** @type {?|undefined} */
KalturaTVComDistributionProfileArgs.prototype.feedLanguage;
/** @type {?|undefined} */
KalturaTVComDistributionProfileArgs.prototype.feedCopyright;
/** @type {?|undefined} */
KalturaTVComDistributionProfileArgs.prototype.feedImageTitle;
/** @type {?|undefined} */
KalturaTVComDistributionProfileArgs.prototype.feedImageUrl;
/** @type {?|undefined} */
KalturaTVComDistributionProfileArgs.prototype.feedImageLink;
/** @type {?|undefined} */
KalturaTVComDistributionProfileArgs.prototype.feedImageWidth;
/** @type {?|undefined} */
KalturaTVComDistributionProfileArgs.prototype.feedImageHeight;
var KalturaTVComDistributionProfile = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaTVComDistributionProfile, _super);
    function KalturaTVComDistributionProfile(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaTVComDistributionProfile.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaTVComDistributionProfile' },
            metadataProfileId: { type: 'n' },
            feedUrl: { type: 's', readOnly: true },
            feedTitle: { type: 's' },
            feedLink: { type: 's' },
            feedDescription: { type: 's' },
            feedLanguage: { type: 's' },
            feedCopyright: { type: 's' },
            feedImageTitle: { type: 's' },
            feedImageUrl: { type: 's' },
            feedImageLink: { type: 's' },
            feedImageWidth: { type: 'n' },
            feedImageHeight: { type: 'n' }
        });
        return result;
    };
    return KalturaTVComDistributionProfile;
}(KalturaConfigurableDistributionProfile));
export { KalturaTVComDistributionProfile };
if (false) {
    /** @type {?} */
    KalturaTVComDistributionProfile.prototype.metadataProfileId;
    /** @type {?} */
    KalturaTVComDistributionProfile.prototype.feedUrl;
    /** @type {?} */
    KalturaTVComDistributionProfile.prototype.feedTitle;
    /** @type {?} */
    KalturaTVComDistributionProfile.prototype.feedLink;
    /** @type {?} */
    KalturaTVComDistributionProfile.prototype.feedDescription;
    /** @type {?} */
    KalturaTVComDistributionProfile.prototype.feedLanguage;
    /** @type {?} */
    KalturaTVComDistributionProfile.prototype.feedCopyright;
    /** @type {?} */
    KalturaTVComDistributionProfile.prototype.feedImageTitle;
    /** @type {?} */
    KalturaTVComDistributionProfile.prototype.feedImageUrl;
    /** @type {?} */
    KalturaTVComDistributionProfile.prototype.feedImageLink;
    /** @type {?} */
    KalturaTVComDistributionProfile.prototype.feedImageWidth;
    /** @type {?} */
    KalturaTVComDistributionProfile.prototype.feedImageHeight;
}
typesMappingStorage['KalturaTVComDistributionProfile'] = KalturaTVComDistributionProfile;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVRWQ29tRGlzdHJpYnV0aW9uUHJvZmlsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYVRWQ29tRGlzdHJpYnV0aW9uUHJvZmlsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsc0NBQXNDLEVBQThDLE1BQU0sMENBQTBDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlCOUksSUFBQTtJQUFxRCwyREFBc0M7SUFldkYseUNBQVksSUFBMkM7ZUFFbkQsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyxzREFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxpQ0FBaUMsRUFBRTtZQUNwRixpQkFBaUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDbEMsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQ3pDLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDMUIsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixlQUFlLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2hDLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDN0IsYUFBYSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM5QixjQUFjLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQy9CLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDN0IsYUFBYSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM5QixjQUFjLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQy9CLGVBQWUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDdkIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjswQ0E3REw7RUFtQnFELHNDQUFzQyxFQTJDMUYsQ0FBQTtBQTNDRCwyQ0EyQ0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLGlDQUFpQyxDQUFDLEdBQUcsK0JBQStCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUNvbmZpZ3VyYWJsZURpc3RyaWJ1dGlvblByb2ZpbGUsIEthbHR1cmFDb25maWd1cmFibGVEaXN0cmlidXRpb25Qcm9maWxlQXJncyB9IGZyb20gJy4vS2FsdHVyYUNvbmZpZ3VyYWJsZURpc3RyaWJ1dGlvblByb2ZpbGUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFUVkNvbURpc3RyaWJ1dGlvblByb2ZpbGVBcmdzICBleHRlbmRzIEthbHR1cmFDb25maWd1cmFibGVEaXN0cmlidXRpb25Qcm9maWxlQXJncyB7XG4gICAgbWV0YWRhdGFQcm9maWxlSWQ/IDogbnVtYmVyO1xuXHRmZWVkVGl0bGU/IDogc3RyaW5nO1xuXHRmZWVkTGluaz8gOiBzdHJpbmc7XG5cdGZlZWREZXNjcmlwdGlvbj8gOiBzdHJpbmc7XG5cdGZlZWRMYW5ndWFnZT8gOiBzdHJpbmc7XG5cdGZlZWRDb3B5cmlnaHQ/IDogc3RyaW5nO1xuXHRmZWVkSW1hZ2VUaXRsZT8gOiBzdHJpbmc7XG5cdGZlZWRJbWFnZVVybD8gOiBzdHJpbmc7XG5cdGZlZWRJbWFnZUxpbms/IDogc3RyaW5nO1xuXHRmZWVkSW1hZ2VXaWR0aD8gOiBudW1iZXI7XG5cdGZlZWRJbWFnZUhlaWdodD8gOiBudW1iZXI7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFUVkNvbURpc3RyaWJ1dGlvblByb2ZpbGUgZXh0ZW5kcyBLYWx0dXJhQ29uZmlndXJhYmxlRGlzdHJpYnV0aW9uUHJvZmlsZSB7XG5cbiAgICBtZXRhZGF0YVByb2ZpbGVJZCA6IG51bWJlcjtcblx0cmVhZG9ubHkgZmVlZFVybCA6IHN0cmluZztcblx0ZmVlZFRpdGxlIDogc3RyaW5nO1xuXHRmZWVkTGluayA6IHN0cmluZztcblx0ZmVlZERlc2NyaXB0aW9uIDogc3RyaW5nO1xuXHRmZWVkTGFuZ3VhZ2UgOiBzdHJpbmc7XG5cdGZlZWRDb3B5cmlnaHQgOiBzdHJpbmc7XG5cdGZlZWRJbWFnZVRpdGxlIDogc3RyaW5nO1xuXHRmZWVkSW1hZ2VVcmwgOiBzdHJpbmc7XG5cdGZlZWRJbWFnZUxpbmsgOiBzdHJpbmc7XG5cdGZlZWRJbWFnZVdpZHRoIDogbnVtYmVyO1xuXHRmZWVkSW1hZ2VIZWlnaHQgOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFUVkNvbURpc3RyaWJ1dGlvblByb2ZpbGVBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYVRWQ29tRGlzdHJpYnV0aW9uUHJvZmlsZScgfSxcblx0XHRcdFx0bWV0YWRhdGFQcm9maWxlSWQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0ZmVlZFVybCA6IHsgdHlwZSA6ICdzJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdGZlZWRUaXRsZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRmZWVkTGluayA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRmZWVkRGVzY3JpcHRpb24gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZmVlZExhbmd1YWdlIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGZlZWRDb3B5cmlnaHQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZmVlZEltYWdlVGl0bGUgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZmVlZEltYWdlVXJsIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGZlZWRJbWFnZUxpbmsgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZmVlZEltYWdlV2lkdGggOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0ZmVlZEltYWdlSGVpZ2h0IDogeyB0eXBlIDogJ24nIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFUVkNvbURpc3RyaWJ1dGlvblByb2ZpbGUnXSA9IEthbHR1cmFUVkNvbURpc3RyaWJ1dGlvblByb2ZpbGU7Il19