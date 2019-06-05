/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaConfigurableDistributionJobProviderData } from './KalturaConfigurableDistributionJobProviderData';
/**
 * @record
 */
export function KalturaYahooDistributionJobProviderDataArgs() { }
/** @type {?|undefined} */
KalturaYahooDistributionJobProviderDataArgs.prototype.smallThumbPath;
/** @type {?|undefined} */
KalturaYahooDistributionJobProviderDataArgs.prototype.largeThumbPath;
/** @type {?|undefined} */
KalturaYahooDistributionJobProviderDataArgs.prototype.videoAssetFilePath;
var KalturaYahooDistributionJobProviderData = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaYahooDistributionJobProviderData, _super);
    function KalturaYahooDistributionJobProviderData(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaYahooDistributionJobProviderData.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaYahooDistributionJobProviderData' },
            smallThumbPath: { type: 's' },
            largeThumbPath: { type: 's' },
            videoAssetFilePath: { type: 's' }
        });
        return result;
    };
    return KalturaYahooDistributionJobProviderData;
}(KalturaConfigurableDistributionJobProviderData));
export { KalturaYahooDistributionJobProviderData };
if (false) {
    /** @type {?} */
    KalturaYahooDistributionJobProviderData.prototype.smallThumbPath;
    /** @type {?} */
    KalturaYahooDistributionJobProviderData.prototype.largeThumbPath;
    /** @type {?} */
    KalturaYahooDistributionJobProviderData.prototype.videoAssetFilePath;
}
typesMappingStorage['KalturaYahooDistributionJobProviderData'] = KalturaYahooDistributionJobProviderData;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVlhaG9vRGlzdHJpYnV0aW9uSm9iUHJvdmlkZXJEYXRhLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhWWFob29EaXN0cmlidXRpb25Kb2JQcm92aWRlckRhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLDhDQUE4QyxFQUFzRCxNQUFNLGtEQUFrRCxDQUFDOzs7Ozs7Ozs7OztBQVN0SyxJQUFBO0lBQTZELG1FQUE4QztJQU12RyxpREFBWSxJQUFtRDtlQUUzRCxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLDhEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHlDQUF5QyxFQUFFO1lBQzVGLGNBQWMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDL0IsY0FBYyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMvQixrQkFBa0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDMUIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtrREFuQ0w7RUFXNkQsOENBQThDLEVBeUIxRyxDQUFBO0FBekJELG1EQXlCQzs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMseUNBQXlDLENBQUMsR0FBRyx1Q0FBdUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhQ29uZmlndXJhYmxlRGlzdHJpYnV0aW9uSm9iUHJvdmlkZXJEYXRhLCBLYWx0dXJhQ29uZmlndXJhYmxlRGlzdHJpYnV0aW9uSm9iUHJvdmlkZXJEYXRhQXJncyB9IGZyb20gJy4vS2FsdHVyYUNvbmZpZ3VyYWJsZURpc3RyaWJ1dGlvbkpvYlByb3ZpZGVyRGF0YSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYVlhaG9vRGlzdHJpYnV0aW9uSm9iUHJvdmlkZXJEYXRhQXJncyAgZXh0ZW5kcyBLYWx0dXJhQ29uZmlndXJhYmxlRGlzdHJpYnV0aW9uSm9iUHJvdmlkZXJEYXRhQXJncyB7XG4gICAgc21hbGxUaHVtYlBhdGg/IDogc3RyaW5nO1xuXHRsYXJnZVRodW1iUGF0aD8gOiBzdHJpbmc7XG5cdHZpZGVvQXNzZXRGaWxlUGF0aD8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFZYWhvb0Rpc3RyaWJ1dGlvbkpvYlByb3ZpZGVyRGF0YSBleHRlbmRzIEthbHR1cmFDb25maWd1cmFibGVEaXN0cmlidXRpb25Kb2JQcm92aWRlckRhdGEge1xuXG4gICAgc21hbGxUaHVtYlBhdGggOiBzdHJpbmc7XG5cdGxhcmdlVGh1bWJQYXRoIDogc3RyaW5nO1xuXHR2aWRlb0Fzc2V0RmlsZVBhdGggOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFZYWhvb0Rpc3RyaWJ1dGlvbkpvYlByb3ZpZGVyRGF0YUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhWWFob29EaXN0cmlidXRpb25Kb2JQcm92aWRlckRhdGEnIH0sXG5cdFx0XHRcdHNtYWxsVGh1bWJQYXRoIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGxhcmdlVGh1bWJQYXRoIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHZpZGVvQXNzZXRGaWxlUGF0aCA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhWWFob29EaXN0cmlidXRpb25Kb2JQcm92aWRlckRhdGEnXSA9IEthbHR1cmFZYWhvb0Rpc3RyaWJ1dGlvbkpvYlByb3ZpZGVyRGF0YTsiXX0=