/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaFlavorAssetStatus } from './KalturaFlavorAssetStatus';
import { KalturaLanguage } from './KalturaLanguage';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaAsset } from './KalturaAsset';
/**
 * @record
 */
export function KalturaFlavorAssetArgs() { }
/** @type {?|undefined} */
KalturaFlavorAssetArgs.prototype.flavorParamsId;
/** @type {?|undefined} */
KalturaFlavorAssetArgs.prototype.language;
/** @type {?|undefined} */
KalturaFlavorAssetArgs.prototype.label;
/** @type {?|undefined} */
KalturaFlavorAssetArgs.prototype.isDefault;
export class KalturaFlavorAsset extends KalturaAsset {
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
            objectType: { type: 'c', default: 'KalturaFlavorAsset' },
            flavorParamsId: { type: 'n' },
            width: { type: 'n', readOnly: true },
            height: { type: 'n', readOnly: true },
            bitrate: { type: 'n', readOnly: true },
            frameRate: { type: 'n', readOnly: true },
            isOriginal: { type: 'b', readOnly: true },
            isWeb: { type: 'b', readOnly: true },
            containerFormat: { type: 's', readOnly: true },
            videoCodecId: { type: 's', readOnly: true },
            status: { type: 'en', readOnly: true, subTypeConstructor: KalturaFlavorAssetStatus, subType: 'KalturaFlavorAssetStatus' },
            language: { type: 'es', subTypeConstructor: KalturaLanguage, subType: 'KalturaLanguage' },
            label: { type: 's' },
            isDefault: { type: 'en', subTypeConstructor: KalturaNullableBoolean, subType: 'KalturaNullableBoolean' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaFlavorAsset.prototype.flavorParamsId;
    /** @type {?} */
    KalturaFlavorAsset.prototype.width;
    /** @type {?} */
    KalturaFlavorAsset.prototype.height;
    /** @type {?} */
    KalturaFlavorAsset.prototype.bitrate;
    /** @type {?} */
    KalturaFlavorAsset.prototype.frameRate;
    /** @type {?} */
    KalturaFlavorAsset.prototype.isOriginal;
    /** @type {?} */
    KalturaFlavorAsset.prototype.isWeb;
    /** @type {?} */
    KalturaFlavorAsset.prototype.containerFormat;
    /** @type {?} */
    KalturaFlavorAsset.prototype.videoCodecId;
    /** @type {?} */
    KalturaFlavorAsset.prototype.status;
    /** @type {?} */
    KalturaFlavorAsset.prototype.language;
    /** @type {?} */
    KalturaFlavorAsset.prototype.label;
    /** @type {?} */
    KalturaFlavorAsset.prototype.isDefault;
}
typesMappingStorage['KalturaFlavorAsset'] = KalturaFlavorAsset;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUZsYXZvckFzc2V0LmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhRmxhdm9yQXNzZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN0RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDcEQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDbEUsT0FBTyxFQUFFLFlBQVksRUFBb0IsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7Ozs7OztBQVVoRSxNQUFNLHlCQUEwQixTQUFRLFlBQVk7Ozs7SUFnQmhELFlBQVksSUFBOEI7UUFFdEMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLG9CQUFvQixFQUFFO1lBQ3ZFLGNBQWMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDL0IsS0FBSyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQ3ZDLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUN4QyxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDekMsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQzNDLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUM1QyxLQUFLLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDdkMsZUFBZSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQ2pELFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUM5QyxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsd0JBQXdCLEVBQUUsT0FBTyxFQUFHLDBCQUEwQixFQUFFO1lBQzlILFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsZUFBZSxFQUFFLE9BQU8sRUFBRyxpQkFBaUIsRUFBRTtZQUM3RixLQUFLLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3RCLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsc0JBQXNCLEVBQUUsT0FBTyxFQUFHLHdCQUF3QixFQUFFO1NBQ25HLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLGtCQUFrQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFGbGF2b3JBc3NldFN0YXR1cyB9IGZyb20gJy4vS2FsdHVyYUZsYXZvckFzc2V0U3RhdHVzJztcbmltcG9ydCB7IEthbHR1cmFMYW5ndWFnZSB9IGZyb20gJy4vS2FsdHVyYUxhbmd1YWdlJztcbmltcG9ydCB7IEthbHR1cmFOdWxsYWJsZUJvb2xlYW4gfSBmcm9tICcuL0thbHR1cmFOdWxsYWJsZUJvb2xlYW4nO1xuaW1wb3J0IHsgS2FsdHVyYUFzc2V0LCBLYWx0dXJhQXNzZXRBcmdzIH0gZnJvbSAnLi9LYWx0dXJhQXNzZXQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFGbGF2b3JBc3NldEFyZ3MgIGV4dGVuZHMgS2FsdHVyYUFzc2V0QXJncyB7XG4gICAgZmxhdm9yUGFyYW1zSWQ/IDogbnVtYmVyO1xuXHRsYW5ndWFnZT8gOiBLYWx0dXJhTGFuZ3VhZ2U7XG5cdGxhYmVsPyA6IHN0cmluZztcblx0aXNEZWZhdWx0PyA6IEthbHR1cmFOdWxsYWJsZUJvb2xlYW47XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFGbGF2b3JBc3NldCBleHRlbmRzIEthbHR1cmFBc3NldCB7XG5cbiAgICBmbGF2b3JQYXJhbXNJZCA6IG51bWJlcjtcblx0cmVhZG9ubHkgd2lkdGggOiBudW1iZXI7XG5cdHJlYWRvbmx5IGhlaWdodCA6IG51bWJlcjtcblx0cmVhZG9ubHkgYml0cmF0ZSA6IG51bWJlcjtcblx0cmVhZG9ubHkgZnJhbWVSYXRlIDogbnVtYmVyO1xuXHRyZWFkb25seSBpc09yaWdpbmFsIDogYm9vbGVhbjtcblx0cmVhZG9ubHkgaXNXZWIgOiBib29sZWFuO1xuXHRyZWFkb25seSBjb250YWluZXJGb3JtYXQgOiBzdHJpbmc7XG5cdHJlYWRvbmx5IHZpZGVvQ29kZWNJZCA6IHN0cmluZztcblx0cmVhZG9ubHkgc3RhdHVzIDogS2FsdHVyYUZsYXZvckFzc2V0U3RhdHVzO1xuXHRsYW5ndWFnZSA6IEthbHR1cmFMYW5ndWFnZTtcblx0bGFiZWwgOiBzdHJpbmc7XG5cdGlzRGVmYXVsdCA6IEthbHR1cmFOdWxsYWJsZUJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFGbGF2b3JBc3NldEFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhRmxhdm9yQXNzZXQnIH0sXG5cdFx0XHRcdGZsYXZvclBhcmFtc0lkIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHdpZHRoIDogeyB0eXBlIDogJ24nLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0aGVpZ2h0IDogeyB0eXBlIDogJ24nLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0Yml0cmF0ZSA6IHsgdHlwZSA6ICduJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdGZyYW1lUmF0ZSA6IHsgdHlwZSA6ICduJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdGlzT3JpZ2luYWwgOiB7IHR5cGUgOiAnYicsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRpc1dlYiA6IHsgdHlwZSA6ICdiJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdGNvbnRhaW5lckZvcm1hdCA6IHsgdHlwZSA6ICdzJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdHZpZGVvQ29kZWNJZCA6IHsgdHlwZSA6ICdzJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdHN0YXR1cyA6IHsgdHlwZSA6ICdlbicsIHJlYWRPbmx5IDogdHJ1ZSwgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUZsYXZvckFzc2V0U3RhdHVzLCBzdWJUeXBlIDogJ0thbHR1cmFGbGF2b3JBc3NldFN0YXR1cycgfSxcblx0XHRcdFx0bGFuZ3VhZ2UgOiB7IHR5cGUgOiAnZXMnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhTGFuZ3VhZ2UsIHN1YlR5cGUgOiAnS2FsdHVyYUxhbmd1YWdlJyB9LFxuXHRcdFx0XHRsYWJlbCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRpc0RlZmF1bHQgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhTnVsbGFibGVCb29sZWFuLCBzdWJUeXBlIDogJ0thbHR1cmFOdWxsYWJsZUJvb2xlYW4nIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFGbGF2b3JBc3NldCddID0gS2FsdHVyYUZsYXZvckFzc2V0OyJdfQ==