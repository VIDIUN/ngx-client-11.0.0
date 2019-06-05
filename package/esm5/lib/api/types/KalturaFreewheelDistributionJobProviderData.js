/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaFreewheelDistributionAssetPath } from './KalturaFreewheelDistributionAssetPath';
import { KalturaDistributionJobProviderData } from './KalturaDistributionJobProviderData';
/**
 * @record
 */
export function KalturaFreewheelDistributionJobProviderDataArgs() { }
/** @type {?|undefined} */
KalturaFreewheelDistributionJobProviderDataArgs.prototype.videoAssetFilePaths;
/** @type {?|undefined} */
KalturaFreewheelDistributionJobProviderDataArgs.prototype.thumbAssetFilePath;
var KalturaFreewheelDistributionJobProviderData = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaFreewheelDistributionJobProviderData, _super);
    function KalturaFreewheelDistributionJobProviderData(data) {
        var _this = _super.call(this, data) || this;
        if (typeof _this.videoAssetFilePaths === 'undefined')
            _this.videoAssetFilePaths = [];
        return _this;
    }
    /**
     * @return {?}
     */
    KalturaFreewheelDistributionJobProviderData.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaFreewheelDistributionJobProviderData' },
            videoAssetFilePaths: { type: 'a', subTypeConstructor: KalturaFreewheelDistributionAssetPath, subType: 'KalturaFreewheelDistributionAssetPath' },
            thumbAssetFilePath: { type: 's' }
        });
        return result;
    };
    return KalturaFreewheelDistributionJobProviderData;
}(KalturaDistributionJobProviderData));
export { KalturaFreewheelDistributionJobProviderData };
if (false) {
    /** @type {?} */
    KalturaFreewheelDistributionJobProviderData.prototype.videoAssetFilePaths;
    /** @type {?} */
    KalturaFreewheelDistributionJobProviderData.prototype.thumbAssetFilePath;
}
typesMappingStorage['KalturaFreewheelDistributionJobProviderData'] = KalturaFreewheelDistributionJobProviderData;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUZyZWV3aGVlbERpc3RyaWJ1dGlvbkpvYlByb3ZpZGVyRGF0YS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUZyZWV3aGVlbERpc3RyaWJ1dGlvbkpvYlByb3ZpZGVyRGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUscUNBQXFDLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUNoRyxPQUFPLEVBQUUsa0NBQWtDLEVBQTBDLE1BQU0sc0NBQXNDLENBQUM7Ozs7Ozs7OztBQVFsSSxJQUFBO0lBQWlFLHVFQUFrQztJQUsvRixxREFBWSxJQUF1RDtRQUFuRSxZQUVJLGtCQUFNLElBQUksQ0FBQyxTQUVkO1FBREcsRUFBRSxDQUFDLENBQUMsT0FBTyxLQUFJLENBQUMsbUJBQW1CLEtBQUssV0FBVyxDQUFDO1lBQUMsS0FBSSxDQUFDLG1CQUFtQixHQUFHLEVBQUUsQ0FBQzs7S0FDdEY7Ozs7SUFFUyxrRUFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyw2Q0FBNkMsRUFBRTtZQUNoRyxtQkFBbUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcscUNBQXFDLEVBQUUsT0FBTyxFQUFHLHVDQUF1QyxFQUFFO1lBQ25KLGtCQUFrQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUMxQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO3NEQWxDTDtFQVdpRSxrQ0FBa0MsRUF3QmxHLENBQUE7QUF4QkQsdURBd0JDOzs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsNkNBQTZDLENBQUMsR0FBRywyQ0FBMkMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhRnJlZXdoZWVsRGlzdHJpYnV0aW9uQXNzZXRQYXRoIH0gZnJvbSAnLi9LYWx0dXJhRnJlZXdoZWVsRGlzdHJpYnV0aW9uQXNzZXRQYXRoJztcbmltcG9ydCB7IEthbHR1cmFEaXN0cmlidXRpb25Kb2JQcm92aWRlckRhdGEsIEthbHR1cmFEaXN0cmlidXRpb25Kb2JQcm92aWRlckRhdGFBcmdzIH0gZnJvbSAnLi9LYWx0dXJhRGlzdHJpYnV0aW9uSm9iUHJvdmlkZXJEYXRhJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhRnJlZXdoZWVsRGlzdHJpYnV0aW9uSm9iUHJvdmlkZXJEYXRhQXJncyAgZXh0ZW5kcyBLYWx0dXJhRGlzdHJpYnV0aW9uSm9iUHJvdmlkZXJEYXRhQXJncyB7XG4gICAgdmlkZW9Bc3NldEZpbGVQYXRocz8gOiBLYWx0dXJhRnJlZXdoZWVsRGlzdHJpYnV0aW9uQXNzZXRQYXRoW107XG5cdHRodW1iQXNzZXRGaWxlUGF0aD8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFGcmVld2hlZWxEaXN0cmlidXRpb25Kb2JQcm92aWRlckRhdGEgZXh0ZW5kcyBLYWx0dXJhRGlzdHJpYnV0aW9uSm9iUHJvdmlkZXJEYXRhIHtcblxuICAgIHZpZGVvQXNzZXRGaWxlUGF0aHMgOiBLYWx0dXJhRnJlZXdoZWVsRGlzdHJpYnV0aW9uQXNzZXRQYXRoW107XG5cdHRodW1iQXNzZXRGaWxlUGF0aCA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUZyZWV3aGVlbERpc3RyaWJ1dGlvbkpvYlByb3ZpZGVyRGF0YUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnZpZGVvQXNzZXRGaWxlUGF0aHMgPT09ICd1bmRlZmluZWQnKSB0aGlzLnZpZGVvQXNzZXRGaWxlUGF0aHMgPSBbXTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhRnJlZXdoZWVsRGlzdHJpYnV0aW9uSm9iUHJvdmlkZXJEYXRhJyB9LFxuXHRcdFx0XHR2aWRlb0Fzc2V0RmlsZVBhdGhzIDogeyB0eXBlIDogJ2EnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRnJlZXdoZWVsRGlzdHJpYnV0aW9uQXNzZXRQYXRoLCBzdWJUeXBlIDogJ0thbHR1cmFGcmVld2hlZWxEaXN0cmlidXRpb25Bc3NldFBhdGgnIH0sXG5cdFx0XHRcdHRodW1iQXNzZXRGaWxlUGF0aCA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhRnJlZXdoZWVsRGlzdHJpYnV0aW9uSm9iUHJvdmlkZXJEYXRhJ10gPSBLYWx0dXJhRnJlZXdoZWVsRGlzdHJpYnV0aW9uSm9iUHJvdmlkZXJEYXRhOyJdfQ==