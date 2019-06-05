/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaCuePoint } from './KalturaCuePoint';
import { KalturaString } from './KalturaString';
import { KalturaConfigurableDistributionJobProviderData } from './KalturaConfigurableDistributionJobProviderData';
/**
 * @record
 */
export function KalturaHuluDistributionJobProviderDataArgs() { }
/** @type {?|undefined} */
KalturaHuluDistributionJobProviderDataArgs.prototype.videoAssetFilePath;
/** @type {?|undefined} */
KalturaHuluDistributionJobProviderDataArgs.prototype.thumbAssetFilePath;
/** @type {?|undefined} */
KalturaHuluDistributionJobProviderDataArgs.prototype.cuePoints;
/** @type {?|undefined} */
KalturaHuluDistributionJobProviderDataArgs.prototype.fileBaseName;
/** @type {?|undefined} */
KalturaHuluDistributionJobProviderDataArgs.prototype.captionLocalPaths;
var KalturaHuluDistributionJobProviderData = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaHuluDistributionJobProviderData, _super);
    function KalturaHuluDistributionJobProviderData(data) {
        var _this = _super.call(this, data) || this;
        if (typeof _this.cuePoints === 'undefined')
            _this.cuePoints = [];
        if (typeof _this.captionLocalPaths === 'undefined')
            _this.captionLocalPaths = [];
        return _this;
    }
    /**
     * @return {?}
     */
    KalturaHuluDistributionJobProviderData.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaHuluDistributionJobProviderData' },
            videoAssetFilePath: { type: 's' },
            thumbAssetFilePath: { type: 's' },
            cuePoints: { type: 'a', subTypeConstructor: KalturaCuePoint, subType: 'KalturaCuePoint' },
            fileBaseName: { type: 's' },
            captionLocalPaths: { type: 'a', subTypeConstructor: KalturaString, subType: 'KalturaString' }
        });
        return result;
    };
    return KalturaHuluDistributionJobProviderData;
}(KalturaConfigurableDistributionJobProviderData));
export { KalturaHuluDistributionJobProviderData };
if (false) {
    /** @type {?} */
    KalturaHuluDistributionJobProviderData.prototype.videoAssetFilePath;
    /** @type {?} */
    KalturaHuluDistributionJobProviderData.prototype.thumbAssetFilePath;
    /** @type {?} */
    KalturaHuluDistributionJobProviderData.prototype.cuePoints;
    /** @type {?} */
    KalturaHuluDistributionJobProviderData.prototype.fileBaseName;
    /** @type {?} */
    KalturaHuluDistributionJobProviderData.prototype.captionLocalPaths;
}
typesMappingStorage['KalturaHuluDistributionJobProviderData'] = KalturaHuluDistributionJobProviderData;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUh1bHVEaXN0cmlidXRpb25Kb2JQcm92aWRlckRhdGEuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFIdWx1RGlzdHJpYnV0aW9uSm9iUHJvdmlkZXJEYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDaEQsT0FBTyxFQUFFLDhDQUE4QyxFQUFzRCxNQUFNLGtEQUFrRCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUFXdEssSUFBQTtJQUE0RCxrRUFBOEM7SUFRdEcsZ0RBQVksSUFBa0Q7UUFBOUQsWUFFSSxrQkFBTSxJQUFJLENBQUMsU0FHZDtRQUZHLEVBQUUsQ0FBQyxDQUFDLE9BQU8sS0FBSSxDQUFDLFNBQVMsS0FBSyxXQUFXLENBQUM7WUFBQyxLQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNyRSxFQUFFLENBQUMsQ0FBQyxPQUFPLEtBQUksQ0FBQyxpQkFBaUIsS0FBSyxXQUFXLENBQUM7WUFBQyxLQUFJLENBQUMsaUJBQWlCLEdBQUcsRUFBRSxDQUFDOztLQUM1RTs7OztJQUVTLDZEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHdDQUF3QyxFQUFFO1lBQzNGLGtCQUFrQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNuQyxrQkFBa0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDbkMsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxlQUFlLEVBQUUsT0FBTyxFQUFHLGlCQUFpQixFQUFFO1lBQzdGLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDN0IsaUJBQWlCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLGFBQWEsRUFBRSxPQUFPLEVBQUcsZUFBZSxFQUFFO1NBQ3hGLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7aURBN0NMO0VBZTRELDhDQUE4QyxFQStCekcsQ0FBQTtBQS9CRCxrREErQkM7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyx3Q0FBd0MsQ0FBQyxHQUFHLHNDQUFzQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFDdWVQb2ludCB9IGZyb20gJy4vS2FsdHVyYUN1ZVBvaW50JztcbmltcG9ydCB7IEthbHR1cmFTdHJpbmcgfSBmcm9tICcuL0thbHR1cmFTdHJpbmcnO1xuaW1wb3J0IHsgS2FsdHVyYUNvbmZpZ3VyYWJsZURpc3RyaWJ1dGlvbkpvYlByb3ZpZGVyRGF0YSwgS2FsdHVyYUNvbmZpZ3VyYWJsZURpc3RyaWJ1dGlvbkpvYlByb3ZpZGVyRGF0YUFyZ3MgfSBmcm9tICcuL0thbHR1cmFDb25maWd1cmFibGVEaXN0cmlidXRpb25Kb2JQcm92aWRlckRhdGEnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFIdWx1RGlzdHJpYnV0aW9uSm9iUHJvdmlkZXJEYXRhQXJncyAgZXh0ZW5kcyBLYWx0dXJhQ29uZmlndXJhYmxlRGlzdHJpYnV0aW9uSm9iUHJvdmlkZXJEYXRhQXJncyB7XG4gICAgdmlkZW9Bc3NldEZpbGVQYXRoPyA6IHN0cmluZztcblx0dGh1bWJBc3NldEZpbGVQYXRoPyA6IHN0cmluZztcblx0Y3VlUG9pbnRzPyA6IEthbHR1cmFDdWVQb2ludFtdO1xuXHRmaWxlQmFzZU5hbWU/IDogc3RyaW5nO1xuXHRjYXB0aW9uTG9jYWxQYXRocz8gOiBLYWx0dXJhU3RyaW5nW107XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFIdWx1RGlzdHJpYnV0aW9uSm9iUHJvdmlkZXJEYXRhIGV4dGVuZHMgS2FsdHVyYUNvbmZpZ3VyYWJsZURpc3RyaWJ1dGlvbkpvYlByb3ZpZGVyRGF0YSB7XG5cbiAgICB2aWRlb0Fzc2V0RmlsZVBhdGggOiBzdHJpbmc7XG5cdHRodW1iQXNzZXRGaWxlUGF0aCA6IHN0cmluZztcblx0Y3VlUG9pbnRzIDogS2FsdHVyYUN1ZVBvaW50W107XG5cdGZpbGVCYXNlTmFtZSA6IHN0cmluZztcblx0Y2FwdGlvbkxvY2FsUGF0aHMgOiBLYWx0dXJhU3RyaW5nW107XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFIdWx1RGlzdHJpYnV0aW9uSm9iUHJvdmlkZXJEYXRhQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuY3VlUG9pbnRzID09PSAndW5kZWZpbmVkJykgdGhpcy5jdWVQb2ludHMgPSBbXTtcblx0XHRpZiAodHlwZW9mIHRoaXMuY2FwdGlvbkxvY2FsUGF0aHMgPT09ICd1bmRlZmluZWQnKSB0aGlzLmNhcHRpb25Mb2NhbFBhdGhzID0gW107XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUh1bHVEaXN0cmlidXRpb25Kb2JQcm92aWRlckRhdGEnIH0sXG5cdFx0XHRcdHZpZGVvQXNzZXRGaWxlUGF0aCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR0aHVtYkFzc2V0RmlsZVBhdGggOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Y3VlUG9pbnRzIDogeyB0eXBlIDogJ2EnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhQ3VlUG9pbnQsIHN1YlR5cGUgOiAnS2FsdHVyYUN1ZVBvaW50JyB9LFxuXHRcdFx0XHRmaWxlQmFzZU5hbWUgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Y2FwdGlvbkxvY2FsUGF0aHMgOiB7IHR5cGUgOiAnYScsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFTdHJpbmcsIHN1YlR5cGUgOiAnS2FsdHVyYVN0cmluZycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUh1bHVEaXN0cmlidXRpb25Kb2JQcm92aWRlckRhdGEnXSA9IEthbHR1cmFIdWx1RGlzdHJpYnV0aW9uSm9iUHJvdmlkZXJEYXRhOyJdfQ==