/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaKeyValue } from './KalturaKeyValue';
import { KalturaConfigurableDistributionProfile } from './KalturaConfigurableDistributionProfile';
/**
 * @record
 */
export function KalturaComcastMrssDistributionProfileArgs() { }
/** @type {?|undefined} */
KalturaComcastMrssDistributionProfileArgs.prototype.metadataProfileId;
/** @type {?|undefined} */
KalturaComcastMrssDistributionProfileArgs.prototype.feedTitle;
/** @type {?|undefined} */
KalturaComcastMrssDistributionProfileArgs.prototype.feedLink;
/** @type {?|undefined} */
KalturaComcastMrssDistributionProfileArgs.prototype.feedDescription;
/** @type {?|undefined} */
KalturaComcastMrssDistributionProfileArgs.prototype.feedLastBuildDate;
/** @type {?|undefined} */
KalturaComcastMrssDistributionProfileArgs.prototype.itemLink;
/** @type {?|undefined} */
KalturaComcastMrssDistributionProfileArgs.prototype.cPlatformTvSeries;
/** @type {?|undefined} */
KalturaComcastMrssDistributionProfileArgs.prototype.cPlatformTvSeriesField;
/** @type {?|undefined} */
KalturaComcastMrssDistributionProfileArgs.prototype.shouldIncludeCuePoints;
/** @type {?|undefined} */
KalturaComcastMrssDistributionProfileArgs.prototype.shouldIncludeCaptions;
/** @type {?|undefined} */
KalturaComcastMrssDistributionProfileArgs.prototype.shouldAddThumbExtension;
var KalturaComcastMrssDistributionProfile = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaComcastMrssDistributionProfile, _super);
    function KalturaComcastMrssDistributionProfile(data) {
        var _this = _super.call(this, data) || this;
        if (typeof _this.cPlatformTvSeries === 'undefined')
            _this.cPlatformTvSeries = [];
        return _this;
    }
    /**
     * @return {?}
     */
    KalturaComcastMrssDistributionProfile.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaComcastMrssDistributionProfile' },
            metadataProfileId: { type: 'n' },
            feedUrl: { type: 's', readOnly: true },
            feedTitle: { type: 's' },
            feedLink: { type: 's' },
            feedDescription: { type: 's' },
            feedLastBuildDate: { type: 's' },
            itemLink: { type: 's' },
            cPlatformTvSeries: { type: 'a', subTypeConstructor: KalturaKeyValue, subType: 'KalturaKeyValue' },
            cPlatformTvSeriesField: { type: 's' },
            shouldIncludeCuePoints: { type: 'b' },
            shouldIncludeCaptions: { type: 'b' },
            shouldAddThumbExtension: { type: 'b' }
        });
        return result;
    };
    return KalturaComcastMrssDistributionProfile;
}(KalturaConfigurableDistributionProfile));
export { KalturaComcastMrssDistributionProfile };
if (false) {
    /** @type {?} */
    KalturaComcastMrssDistributionProfile.prototype.metadataProfileId;
    /** @type {?} */
    KalturaComcastMrssDistributionProfile.prototype.feedUrl;
    /** @type {?} */
    KalturaComcastMrssDistributionProfile.prototype.feedTitle;
    /** @type {?} */
    KalturaComcastMrssDistributionProfile.prototype.feedLink;
    /** @type {?} */
    KalturaComcastMrssDistributionProfile.prototype.feedDescription;
    /** @type {?} */
    KalturaComcastMrssDistributionProfile.prototype.feedLastBuildDate;
    /** @type {?} */
    KalturaComcastMrssDistributionProfile.prototype.itemLink;
    /** @type {?} */
    KalturaComcastMrssDistributionProfile.prototype.cPlatformTvSeries;
    /** @type {?} */
    KalturaComcastMrssDistributionProfile.prototype.cPlatformTvSeriesField;
    /** @type {?} */
    KalturaComcastMrssDistributionProfile.prototype.shouldIncludeCuePoints;
    /** @type {?} */
    KalturaComcastMrssDistributionProfile.prototype.shouldIncludeCaptions;
    /** @type {?} */
    KalturaComcastMrssDistributionProfile.prototype.shouldAddThumbExtension;
}
typesMappingStorage['KalturaComcastMrssDistributionProfile'] = KalturaComcastMrssDistributionProfile;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUNvbWNhc3RNcnNzRGlzdHJpYnV0aW9uUHJvZmlsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUNvbWNhc3RNcnNzRGlzdHJpYnV0aW9uUHJvZmlsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDcEQsT0FBTyxFQUFFLHNDQUFzQyxFQUE4QyxNQUFNLDBDQUEwQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQjlJLElBQUE7SUFBMkQsaUVBQXNDO0lBZTdGLCtDQUFZLElBQWlEO1FBQTdELFlBRUksa0JBQU0sSUFBSSxDQUFDLFNBRWQ7UUFERyxFQUFFLENBQUMsQ0FBQyxPQUFPLEtBQUksQ0FBQyxpQkFBaUIsS0FBSyxXQUFXLENBQUM7WUFBQyxLQUFJLENBQUMsaUJBQWlCLEdBQUcsRUFBRSxDQUFDOztLQUNsRjs7OztJQUVTLDREQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHVDQUF1QyxFQUFFO1lBQzFGLGlCQUFpQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNsQyxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDekMsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMxQixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLGVBQWUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDaEMsaUJBQWlCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2xDLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsaUJBQWlCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLGVBQWUsRUFBRSxPQUFPLEVBQUcsaUJBQWlCLEVBQUU7WUFDckcsc0JBQXNCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3ZDLHNCQUFzQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN2QyxxQkFBcUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDdEMsdUJBQXVCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQy9CLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Z0RBL0RMO0VBb0IyRCxzQ0FBc0MsRUE0Q2hHLENBQUE7QUE1Q0QsaURBNENDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyx1Q0FBdUMsQ0FBQyxHQUFHLHFDQUFxQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFLZXlWYWx1ZSB9IGZyb20gJy4vS2FsdHVyYUtleVZhbHVlJztcbmltcG9ydCB7IEthbHR1cmFDb25maWd1cmFibGVEaXN0cmlidXRpb25Qcm9maWxlLCBLYWx0dXJhQ29uZmlndXJhYmxlRGlzdHJpYnV0aW9uUHJvZmlsZUFyZ3MgfSBmcm9tICcuL0thbHR1cmFDb25maWd1cmFibGVEaXN0cmlidXRpb25Qcm9maWxlJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhQ29tY2FzdE1yc3NEaXN0cmlidXRpb25Qcm9maWxlQXJncyAgZXh0ZW5kcyBLYWx0dXJhQ29uZmlndXJhYmxlRGlzdHJpYnV0aW9uUHJvZmlsZUFyZ3Mge1xuICAgIG1ldGFkYXRhUHJvZmlsZUlkPyA6IG51bWJlcjtcblx0ZmVlZFRpdGxlPyA6IHN0cmluZztcblx0ZmVlZExpbms/IDogc3RyaW5nO1xuXHRmZWVkRGVzY3JpcHRpb24/IDogc3RyaW5nO1xuXHRmZWVkTGFzdEJ1aWxkRGF0ZT8gOiBzdHJpbmc7XG5cdGl0ZW1MaW5rPyA6IHN0cmluZztcblx0Y1BsYXRmb3JtVHZTZXJpZXM/IDogS2FsdHVyYUtleVZhbHVlW107XG5cdGNQbGF0Zm9ybVR2U2VyaWVzRmllbGQ/IDogc3RyaW5nO1xuXHRzaG91bGRJbmNsdWRlQ3VlUG9pbnRzPyA6IGJvb2xlYW47XG5cdHNob3VsZEluY2x1ZGVDYXB0aW9ucz8gOiBib29sZWFuO1xuXHRzaG91bGRBZGRUaHVtYkV4dGVuc2lvbj8gOiBib29sZWFuO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhQ29tY2FzdE1yc3NEaXN0cmlidXRpb25Qcm9maWxlIGV4dGVuZHMgS2FsdHVyYUNvbmZpZ3VyYWJsZURpc3RyaWJ1dGlvblByb2ZpbGUge1xuXG4gICAgbWV0YWRhdGFQcm9maWxlSWQgOiBudW1iZXI7XG5cdHJlYWRvbmx5IGZlZWRVcmwgOiBzdHJpbmc7XG5cdGZlZWRUaXRsZSA6IHN0cmluZztcblx0ZmVlZExpbmsgOiBzdHJpbmc7XG5cdGZlZWREZXNjcmlwdGlvbiA6IHN0cmluZztcblx0ZmVlZExhc3RCdWlsZERhdGUgOiBzdHJpbmc7XG5cdGl0ZW1MaW5rIDogc3RyaW5nO1xuXHRjUGxhdGZvcm1UdlNlcmllcyA6IEthbHR1cmFLZXlWYWx1ZVtdO1xuXHRjUGxhdGZvcm1UdlNlcmllc0ZpZWxkIDogc3RyaW5nO1xuXHRzaG91bGRJbmNsdWRlQ3VlUG9pbnRzIDogYm9vbGVhbjtcblx0c2hvdWxkSW5jbHVkZUNhcHRpb25zIDogYm9vbGVhbjtcblx0c2hvdWxkQWRkVGh1bWJFeHRlbnNpb24gOiBib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhQ29tY2FzdE1yc3NEaXN0cmlidXRpb25Qcm9maWxlQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuY1BsYXRmb3JtVHZTZXJpZXMgPT09ICd1bmRlZmluZWQnKSB0aGlzLmNQbGF0Zm9ybVR2U2VyaWVzID0gW107XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUNvbWNhc3RNcnNzRGlzdHJpYnV0aW9uUHJvZmlsZScgfSxcblx0XHRcdFx0bWV0YWRhdGFQcm9maWxlSWQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0ZmVlZFVybCA6IHsgdHlwZSA6ICdzJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdGZlZWRUaXRsZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRmZWVkTGluayA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRmZWVkRGVzY3JpcHRpb24gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZmVlZExhc3RCdWlsZERhdGUgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0aXRlbUxpbmsgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Y1BsYXRmb3JtVHZTZXJpZXMgOiB7IHR5cGUgOiAnYScsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFLZXlWYWx1ZSwgc3ViVHlwZSA6ICdLYWx0dXJhS2V5VmFsdWUnIH0sXG5cdFx0XHRcdGNQbGF0Zm9ybVR2U2VyaWVzRmllbGQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c2hvdWxkSW5jbHVkZUN1ZVBvaW50cyA6IHsgdHlwZSA6ICdiJyB9LFxuXHRcdFx0XHRzaG91bGRJbmNsdWRlQ2FwdGlvbnMgOiB7IHR5cGUgOiAnYicgfSxcblx0XHRcdFx0c2hvdWxkQWRkVGh1bWJFeHRlbnNpb24gOiB7IHR5cGUgOiAnYicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUNvbWNhc3RNcnNzRGlzdHJpYnV0aW9uUHJvZmlsZSddID0gS2FsdHVyYUNvbWNhc3RNcnNzRGlzdHJpYnV0aW9uUHJvZmlsZTsiXX0=