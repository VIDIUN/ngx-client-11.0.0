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
export function KalturaCrossKalturaDistributionJobProviderDataArgs() { }
/** @type {?|undefined} */
KalturaCrossKalturaDistributionJobProviderDataArgs.prototype.distributedFlavorAssets;
/** @type {?|undefined} */
KalturaCrossKalturaDistributionJobProviderDataArgs.prototype.distributedThumbAssets;
/** @type {?|undefined} */
KalturaCrossKalturaDistributionJobProviderDataArgs.prototype.distributedMetadata;
/** @type {?|undefined} */
KalturaCrossKalturaDistributionJobProviderDataArgs.prototype.distributedCaptionAssets;
/** @type {?|undefined} */
KalturaCrossKalturaDistributionJobProviderDataArgs.prototype.distributedCuePoints;
/** @type {?|undefined} */
KalturaCrossKalturaDistributionJobProviderDataArgs.prototype.distributedThumbCuePoints;
/** @type {?|undefined} */
KalturaCrossKalturaDistributionJobProviderDataArgs.prototype.distributedTimedThumbAssets;
var KalturaCrossKalturaDistributionJobProviderData = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaCrossKalturaDistributionJobProviderData, _super);
    function KalturaCrossKalturaDistributionJobProviderData(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaCrossKalturaDistributionJobProviderData.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaCrossKalturaDistributionJobProviderData' },
            distributedFlavorAssets: { type: 's' },
            distributedThumbAssets: { type: 's' },
            distributedMetadata: { type: 's' },
            distributedCaptionAssets: { type: 's' },
            distributedCuePoints: { type: 's' },
            distributedThumbCuePoints: { type: 's' },
            distributedTimedThumbAssets: { type: 's' }
        });
        return result;
    };
    return KalturaCrossKalturaDistributionJobProviderData;
}(KalturaConfigurableDistributionJobProviderData));
export { KalturaCrossKalturaDistributionJobProviderData };
if (false) {
    /** @type {?} */
    KalturaCrossKalturaDistributionJobProviderData.prototype.distributedFlavorAssets;
    /** @type {?} */
    KalturaCrossKalturaDistributionJobProviderData.prototype.distributedThumbAssets;
    /** @type {?} */
    KalturaCrossKalturaDistributionJobProviderData.prototype.distributedMetadata;
    /** @type {?} */
    KalturaCrossKalturaDistributionJobProviderData.prototype.distributedCaptionAssets;
    /** @type {?} */
    KalturaCrossKalturaDistributionJobProviderData.prototype.distributedCuePoints;
    /** @type {?} */
    KalturaCrossKalturaDistributionJobProviderData.prototype.distributedThumbCuePoints;
    /** @type {?} */
    KalturaCrossKalturaDistributionJobProviderData.prototype.distributedTimedThumbAssets;
}
typesMappingStorage['KalturaCrossKalturaDistributionJobProviderData'] = KalturaCrossKalturaDistributionJobProviderData;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUNyb3NzS2FsdHVyYURpc3RyaWJ1dGlvbkpvYlByb3ZpZGVyRGF0YS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUNyb3NzS2FsdHVyYURpc3RyaWJ1dGlvbkpvYlByb3ZpZGVyRGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsOENBQThDLEVBQXNELE1BQU0sa0RBQWtELENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFhdEssSUFBQTtJQUFvRSwwRUFBOEM7SUFVOUcsd0RBQVksSUFBMEQ7ZUFFbEUsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyxxRUFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxnREFBZ0QsRUFBRTtZQUNuRyx1QkFBdUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEMsc0JBQXNCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3ZDLG1CQUFtQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNwQyx3QkFBd0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekMsb0JBQW9CLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3JDLHlCQUF5QixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMxQywyQkFBMkIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDbkMsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjt5REEvQ0w7RUFlb0UsOENBQThDLEVBaUNqSCxDQUFBO0FBakNELDBEQWlDQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxnREFBZ0QsQ0FBQyxHQUFHLDhDQUE4QyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFDb25maWd1cmFibGVEaXN0cmlidXRpb25Kb2JQcm92aWRlckRhdGEsIEthbHR1cmFDb25maWd1cmFibGVEaXN0cmlidXRpb25Kb2JQcm92aWRlckRhdGFBcmdzIH0gZnJvbSAnLi9LYWx0dXJhQ29uZmlndXJhYmxlRGlzdHJpYnV0aW9uSm9iUHJvdmlkZXJEYXRhJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhQ3Jvc3NLYWx0dXJhRGlzdHJpYnV0aW9uSm9iUHJvdmlkZXJEYXRhQXJncyAgZXh0ZW5kcyBLYWx0dXJhQ29uZmlndXJhYmxlRGlzdHJpYnV0aW9uSm9iUHJvdmlkZXJEYXRhQXJncyB7XG4gICAgZGlzdHJpYnV0ZWRGbGF2b3JBc3NldHM/IDogc3RyaW5nO1xuXHRkaXN0cmlidXRlZFRodW1iQXNzZXRzPyA6IHN0cmluZztcblx0ZGlzdHJpYnV0ZWRNZXRhZGF0YT8gOiBzdHJpbmc7XG5cdGRpc3RyaWJ1dGVkQ2FwdGlvbkFzc2V0cz8gOiBzdHJpbmc7XG5cdGRpc3RyaWJ1dGVkQ3VlUG9pbnRzPyA6IHN0cmluZztcblx0ZGlzdHJpYnV0ZWRUaHVtYkN1ZVBvaW50cz8gOiBzdHJpbmc7XG5cdGRpc3RyaWJ1dGVkVGltZWRUaHVtYkFzc2V0cz8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFDcm9zc0thbHR1cmFEaXN0cmlidXRpb25Kb2JQcm92aWRlckRhdGEgZXh0ZW5kcyBLYWx0dXJhQ29uZmlndXJhYmxlRGlzdHJpYnV0aW9uSm9iUHJvdmlkZXJEYXRhIHtcblxuICAgIGRpc3RyaWJ1dGVkRmxhdm9yQXNzZXRzIDogc3RyaW5nO1xuXHRkaXN0cmlidXRlZFRodW1iQXNzZXRzIDogc3RyaW5nO1xuXHRkaXN0cmlidXRlZE1ldGFkYXRhIDogc3RyaW5nO1xuXHRkaXN0cmlidXRlZENhcHRpb25Bc3NldHMgOiBzdHJpbmc7XG5cdGRpc3RyaWJ1dGVkQ3VlUG9pbnRzIDogc3RyaW5nO1xuXHRkaXN0cmlidXRlZFRodW1iQ3VlUG9pbnRzIDogc3RyaW5nO1xuXHRkaXN0cmlidXRlZFRpbWVkVGh1bWJBc3NldHMgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFDcm9zc0thbHR1cmFEaXN0cmlidXRpb25Kb2JQcm92aWRlckRhdGFBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUNyb3NzS2FsdHVyYURpc3RyaWJ1dGlvbkpvYlByb3ZpZGVyRGF0YScgfSxcblx0XHRcdFx0ZGlzdHJpYnV0ZWRGbGF2b3JBc3NldHMgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZGlzdHJpYnV0ZWRUaHVtYkFzc2V0cyA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRkaXN0cmlidXRlZE1ldGFkYXRhIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGRpc3RyaWJ1dGVkQ2FwdGlvbkFzc2V0cyA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRkaXN0cmlidXRlZEN1ZVBvaW50cyA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRkaXN0cmlidXRlZFRodW1iQ3VlUG9pbnRzIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGRpc3RyaWJ1dGVkVGltZWRUaHVtYkFzc2V0cyA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhQ3Jvc3NLYWx0dXJhRGlzdHJpYnV0aW9uSm9iUHJvdmlkZXJEYXRhJ10gPSBLYWx0dXJhQ3Jvc3NLYWx0dXJhRGlzdHJpYnV0aW9uSm9iUHJvdmlkZXJEYXRhOyJdfQ==