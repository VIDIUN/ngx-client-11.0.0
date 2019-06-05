/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
export class KalturaPostConvertJobData extends KalturaConvartableJobData {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data);
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
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
    }
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVBvc3RDb252ZXJ0Sm9iRGF0YS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYVBvc3RDb252ZXJ0Sm9iRGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSx5QkFBeUIsRUFBaUMsTUFBTSw2QkFBNkIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWF2RyxNQUFNLGdDQUFpQyxTQUFRLHlCQUF5Qjs7OztJQVVwRSxZQUFZLElBQXFDO1FBRTdDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRywyQkFBMkIsRUFBRTtZQUM5RSxhQUFhLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzlCLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUIsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMxQixXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVCLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUIsWUFBWSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM3QixVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ2xCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQywyQkFBMkIsQ0FBQyxHQUFHLHlCQUF5QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFDb252YXJ0YWJsZUpvYkRhdGEsIEthbHR1cmFDb252YXJ0YWJsZUpvYkRhdGFBcmdzIH0gZnJvbSAnLi9LYWx0dXJhQ29udmFydGFibGVKb2JEYXRhJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhUG9zdENvbnZlcnRKb2JEYXRhQXJncyAgZXh0ZW5kcyBLYWx0dXJhQ29udmFydGFibGVKb2JEYXRhQXJncyB7XG4gICAgZmxhdm9yQXNzZXRJZD8gOiBzdHJpbmc7XG5cdGNyZWF0ZVRodW1iPyA6IGJvb2xlYW47XG5cdHRodW1iUGF0aD8gOiBzdHJpbmc7XG5cdHRodW1iT2Zmc2V0PyA6IG51bWJlcjtcblx0dGh1bWJIZWlnaHQ/IDogbnVtYmVyO1xuXHR0aHVtYkJpdHJhdGU/IDogbnVtYmVyO1xuXHRjdXN0b21EYXRhPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYVBvc3RDb252ZXJ0Sm9iRGF0YSBleHRlbmRzIEthbHR1cmFDb252YXJ0YWJsZUpvYkRhdGEge1xuXG4gICAgZmxhdm9yQXNzZXRJZCA6IHN0cmluZztcblx0Y3JlYXRlVGh1bWIgOiBib29sZWFuO1xuXHR0aHVtYlBhdGggOiBzdHJpbmc7XG5cdHRodW1iT2Zmc2V0IDogbnVtYmVyO1xuXHR0aHVtYkhlaWdodCA6IG51bWJlcjtcblx0dGh1bWJCaXRyYXRlIDogbnVtYmVyO1xuXHRjdXN0b21EYXRhIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhUG9zdENvbnZlcnRKb2JEYXRhQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFQb3N0Q29udmVydEpvYkRhdGEnIH0sXG5cdFx0XHRcdGZsYXZvckFzc2V0SWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Y3JlYXRlVGh1bWIgOiB7IHR5cGUgOiAnYicgfSxcblx0XHRcdFx0dGh1bWJQYXRoIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHRodW1iT2Zmc2V0IDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHRodW1iSGVpZ2h0IDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHRodW1iQml0cmF0ZSA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRjdXN0b21EYXRhIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFQb3N0Q29udmVydEpvYkRhdGEnXSA9IEthbHR1cmFQb3N0Q29udmVydEpvYkRhdGE7Il19