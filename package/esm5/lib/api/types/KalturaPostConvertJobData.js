/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaConvartableJobData } from './KalturaConvartableJobData';
/**
 * @record
 */
export function KalturaPostConvertJobDataArgs() { }
/** @type {?|undefined} */
KalturaPostConvertJobDataArgs.prototype.flavorAssetId;
/** @type {?|undefined} */
KalturaPostConvertJobDataArgs.prototype.createThumb;
/** @type {?|undefined} */
KalturaPostConvertJobDataArgs.prototype.thumbPath;
/** @type {?|undefined} */
KalturaPostConvertJobDataArgs.prototype.thumbOffset;
/** @type {?|undefined} */
KalturaPostConvertJobDataArgs.prototype.thumbHeight;
/** @type {?|undefined} */
KalturaPostConvertJobDataArgs.prototype.thumbBitrate;
/** @type {?|undefined} */
KalturaPostConvertJobDataArgs.prototype.customData;
var KalturaPostConvertJobData = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaPostConvertJobData, _super);
    function KalturaPostConvertJobData(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaPostConvertJobData.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaPostConvertJobData' },
            flavorAssetId: { type: 's' },
            createThumb: { type: 'b' },
            thumbPath: { type: 's' },
            thumbOffset: { type: 'n' },
            thumbHeight: { type: 'n' },
            thumbBitrate: { type: 'n' },
            customData: { type: 's' }
        });
        return result;
    };
    return KalturaPostConvertJobData;
}(KalturaConvartableJobData));
export { KalturaPostConvertJobData };
if (false) {
    /** @type {?} */
    KalturaPostConvertJobData.prototype.flavorAssetId;
    /** @type {?} */
    KalturaPostConvertJobData.prototype.createThumb;
    /** @type {?} */
    KalturaPostConvertJobData.prototype.thumbPath;
    /** @type {?} */
    KalturaPostConvertJobData.prototype.thumbOffset;
    /** @type {?} */
    KalturaPostConvertJobData.prototype.thumbHeight;
    /** @type {?} */
    KalturaPostConvertJobData.prototype.thumbBitrate;
    /** @type {?} */
    KalturaPostConvertJobData.prototype.customData;
}
typesMappingStorage['KalturaPostConvertJobData'] = KalturaPostConvertJobData;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVBvc3RDb252ZXJ0Sm9iRGF0YS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYVBvc3RDb252ZXJ0Sm9iRGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUseUJBQXlCLEVBQWlDLE1BQU0sNkJBQTZCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFhdkcsSUFBQTtJQUErQyxxREFBeUI7SUFVcEUsbUNBQVksSUFBcUM7ZUFFN0Msa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyxnREFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRywyQkFBMkIsRUFBRTtZQUM5RSxhQUFhLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzlCLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUIsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMxQixXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVCLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUIsWUFBWSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM3QixVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ2xCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7b0NBL0NMO0VBZStDLHlCQUF5QixFQWlDdkUsQ0FBQTtBQWpDRCxxQ0FpQ0M7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsMkJBQTJCLENBQUMsR0FBRyx5QkFBeUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhQ29udmFydGFibGVKb2JEYXRhLCBLYWx0dXJhQ29udmFydGFibGVKb2JEYXRhQXJncyB9IGZyb20gJy4vS2FsdHVyYUNvbnZhcnRhYmxlSm9iRGF0YSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYVBvc3RDb252ZXJ0Sm9iRGF0YUFyZ3MgIGV4dGVuZHMgS2FsdHVyYUNvbnZhcnRhYmxlSm9iRGF0YUFyZ3Mge1xuICAgIGZsYXZvckFzc2V0SWQ/IDogc3RyaW5nO1xuXHRjcmVhdGVUaHVtYj8gOiBib29sZWFuO1xuXHR0aHVtYlBhdGg/IDogc3RyaW5nO1xuXHR0aHVtYk9mZnNldD8gOiBudW1iZXI7XG5cdHRodW1iSGVpZ2h0PyA6IG51bWJlcjtcblx0dGh1bWJCaXRyYXRlPyA6IG51bWJlcjtcblx0Y3VzdG9tRGF0YT8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFQb3N0Q29udmVydEpvYkRhdGEgZXh0ZW5kcyBLYWx0dXJhQ29udmFydGFibGVKb2JEYXRhIHtcblxuICAgIGZsYXZvckFzc2V0SWQgOiBzdHJpbmc7XG5cdGNyZWF0ZVRodW1iIDogYm9vbGVhbjtcblx0dGh1bWJQYXRoIDogc3RyaW5nO1xuXHR0aHVtYk9mZnNldCA6IG51bWJlcjtcblx0dGh1bWJIZWlnaHQgOiBudW1iZXI7XG5cdHRodW1iQml0cmF0ZSA6IG51bWJlcjtcblx0Y3VzdG9tRGF0YSA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYVBvc3RDb252ZXJ0Sm9iRGF0YUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhUG9zdENvbnZlcnRKb2JEYXRhJyB9LFxuXHRcdFx0XHRmbGF2b3JBc3NldElkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGNyZWF0ZVRodW1iIDogeyB0eXBlIDogJ2InIH0sXG5cdFx0XHRcdHRodW1iUGF0aCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR0aHVtYk9mZnNldCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHR0aHVtYkhlaWdodCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHR0aHVtYkJpdHJhdGUgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0Y3VzdG9tRGF0YSA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhUG9zdENvbnZlcnRKb2JEYXRhJ10gPSBLYWx0dXJhUG9zdENvbnZlcnRKb2JEYXRhOyJdfQ==