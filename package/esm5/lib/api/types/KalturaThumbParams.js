/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaThumbCropType } from './KalturaThumbCropType';
import { KalturaContainerFormat } from './KalturaContainerFormat';
import { KalturaAssetParams } from './KalturaAssetParams';
/**
 * @record
 */
export function KalturaThumbParamsArgs() { }
/** @type {?|undefined} */
KalturaThumbParamsArgs.prototype.cropType;
/** @type {?|undefined} */
KalturaThumbParamsArgs.prototype.quality;
/** @type {?|undefined} */
KalturaThumbParamsArgs.prototype.cropX;
/** @type {?|undefined} */
KalturaThumbParamsArgs.prototype.cropY;
/** @type {?|undefined} */
KalturaThumbParamsArgs.prototype.cropWidth;
/** @type {?|undefined} */
KalturaThumbParamsArgs.prototype.cropHeight;
/** @type {?|undefined} */
KalturaThumbParamsArgs.prototype.videoOffset;
/** @type {?|undefined} */
KalturaThumbParamsArgs.prototype.width;
/** @type {?|undefined} */
KalturaThumbParamsArgs.prototype.height;
/** @type {?|undefined} */
KalturaThumbParamsArgs.prototype.scaleWidth;
/** @type {?|undefined} */
KalturaThumbParamsArgs.prototype.scaleHeight;
/** @type {?|undefined} */
KalturaThumbParamsArgs.prototype.backgroundColor;
/** @type {?|undefined} */
KalturaThumbParamsArgs.prototype.sourceParamsId;
/** @type {?|undefined} */
KalturaThumbParamsArgs.prototype.format;
/** @type {?|undefined} */
KalturaThumbParamsArgs.prototype.density;
/** @type {?|undefined} */
KalturaThumbParamsArgs.prototype.stripProfiles;
/** @type {?|undefined} */
KalturaThumbParamsArgs.prototype.videoOffsetInPercentage;
var KalturaThumbParams = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaThumbParams, _super);
    function KalturaThumbParams(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaThumbParams.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaThumbParams' },
            cropType: { type: 'en', subTypeConstructor: KalturaThumbCropType, subType: 'KalturaThumbCropType' },
            quality: { type: 'n' },
            cropX: { type: 'n' },
            cropY: { type: 'n' },
            cropWidth: { type: 'n' },
            cropHeight: { type: 'n' },
            videoOffset: { type: 'n' },
            width: { type: 'n' },
            height: { type: 'n' },
            scaleWidth: { type: 'n' },
            scaleHeight: { type: 'n' },
            backgroundColor: { type: 's' },
            sourceParamsId: { type: 'n' },
            format: { type: 'es', subTypeConstructor: KalturaContainerFormat, subType: 'KalturaContainerFormat' },
            density: { type: 'n' },
            stripProfiles: { type: 'b' },
            videoOffsetInPercentage: { type: 'n' }
        });
        return result;
    };
    return KalturaThumbParams;
}(KalturaAssetParams));
export { KalturaThumbParams };
if (false) {
    /** @type {?} */
    KalturaThumbParams.prototype.cropType;
    /** @type {?} */
    KalturaThumbParams.prototype.quality;
    /** @type {?} */
    KalturaThumbParams.prototype.cropX;
    /** @type {?} */
    KalturaThumbParams.prototype.cropY;
    /** @type {?} */
    KalturaThumbParams.prototype.cropWidth;
    /** @type {?} */
    KalturaThumbParams.prototype.cropHeight;
    /** @type {?} */
    KalturaThumbParams.prototype.videoOffset;
    /** @type {?} */
    KalturaThumbParams.prototype.width;
    /** @type {?} */
    KalturaThumbParams.prototype.height;
    /** @type {?} */
    KalturaThumbParams.prototype.scaleWidth;
    /** @type {?} */
    KalturaThumbParams.prototype.scaleHeight;
    /** @type {?} */
    KalturaThumbParams.prototype.backgroundColor;
    /** @type {?} */
    KalturaThumbParams.prototype.sourceParamsId;
    /** @type {?} */
    KalturaThumbParams.prototype.format;
    /** @type {?} */
    KalturaThumbParams.prototype.density;
    /** @type {?} */
    KalturaThumbParams.prototype.stripProfiles;
    /** @type {?} */
    KalturaThumbParams.prototype.videoOffsetInPercentage;
}
typesMappingStorage['KalturaThumbParams'] = KalturaThumbParams;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVRodW1iUGFyYW1zLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhVGh1bWJQYXJhbXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDOUQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGtCQUFrQixFQUEwQixNQUFNLHNCQUFzQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1QmxGLElBQUE7SUFBd0MsOENBQWtCO0lBb0J0RCw0QkFBWSxJQUE4QjtlQUV0QyxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLHlDQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLG9CQUFvQixFQUFFO1lBQ3ZFLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsb0JBQW9CLEVBQUUsT0FBTyxFQUFHLHNCQUFzQixFQUFFO1lBQ3ZHLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEIsS0FBSyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN0QixLQUFLLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3RCLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDMUIsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMzQixXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVCLEtBQUssRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDdEIsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN2QixVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzNCLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUIsZUFBZSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNoQyxjQUFjLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQy9CLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsc0JBQXNCLEVBQUUsT0FBTyxFQUFHLHdCQUF3QixFQUFFO1lBQ3pHLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEIsYUFBYSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM5Qix1QkFBdUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDL0IsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjs2QkEvRUw7RUEyQndDLGtCQUFrQixFQXFEekQsQ0FBQTtBQXJERCw4QkFxREM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLGtCQUFrQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFUaHVtYkNyb3BUeXBlIH0gZnJvbSAnLi9LYWx0dXJhVGh1bWJDcm9wVHlwZSc7XG5pbXBvcnQgeyBLYWx0dXJhQ29udGFpbmVyRm9ybWF0IH0gZnJvbSAnLi9LYWx0dXJhQ29udGFpbmVyRm9ybWF0JztcbmltcG9ydCB7IEthbHR1cmFBc3NldFBhcmFtcywgS2FsdHVyYUFzc2V0UGFyYW1zQXJncyB9IGZyb20gJy4vS2FsdHVyYUFzc2V0UGFyYW1zJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhVGh1bWJQYXJhbXNBcmdzICBleHRlbmRzIEthbHR1cmFBc3NldFBhcmFtc0FyZ3Mge1xuICAgIGNyb3BUeXBlPyA6IEthbHR1cmFUaHVtYkNyb3BUeXBlO1xuXHRxdWFsaXR5PyA6IG51bWJlcjtcblx0Y3JvcFg/IDogbnVtYmVyO1xuXHRjcm9wWT8gOiBudW1iZXI7XG5cdGNyb3BXaWR0aD8gOiBudW1iZXI7XG5cdGNyb3BIZWlnaHQ/IDogbnVtYmVyO1xuXHR2aWRlb09mZnNldD8gOiBudW1iZXI7XG5cdHdpZHRoPyA6IG51bWJlcjtcblx0aGVpZ2h0PyA6IG51bWJlcjtcblx0c2NhbGVXaWR0aD8gOiBudW1iZXI7XG5cdHNjYWxlSGVpZ2h0PyA6IG51bWJlcjtcblx0YmFja2dyb3VuZENvbG9yPyA6IHN0cmluZztcblx0c291cmNlUGFyYW1zSWQ/IDogbnVtYmVyO1xuXHRmb3JtYXQ/IDogS2FsdHVyYUNvbnRhaW5lckZvcm1hdDtcblx0ZGVuc2l0eT8gOiBudW1iZXI7XG5cdHN0cmlwUHJvZmlsZXM/IDogYm9vbGVhbjtcblx0dmlkZW9PZmZzZXRJblBlcmNlbnRhZ2U/IDogbnVtYmVyO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhVGh1bWJQYXJhbXMgZXh0ZW5kcyBLYWx0dXJhQXNzZXRQYXJhbXMge1xuXG4gICAgY3JvcFR5cGUgOiBLYWx0dXJhVGh1bWJDcm9wVHlwZTtcblx0cXVhbGl0eSA6IG51bWJlcjtcblx0Y3JvcFggOiBudW1iZXI7XG5cdGNyb3BZIDogbnVtYmVyO1xuXHRjcm9wV2lkdGggOiBudW1iZXI7XG5cdGNyb3BIZWlnaHQgOiBudW1iZXI7XG5cdHZpZGVvT2Zmc2V0IDogbnVtYmVyO1xuXHR3aWR0aCA6IG51bWJlcjtcblx0aGVpZ2h0IDogbnVtYmVyO1xuXHRzY2FsZVdpZHRoIDogbnVtYmVyO1xuXHRzY2FsZUhlaWdodCA6IG51bWJlcjtcblx0YmFja2dyb3VuZENvbG9yIDogc3RyaW5nO1xuXHRzb3VyY2VQYXJhbXNJZCA6IG51bWJlcjtcblx0Zm9ybWF0IDogS2FsdHVyYUNvbnRhaW5lckZvcm1hdDtcblx0ZGVuc2l0eSA6IG51bWJlcjtcblx0c3RyaXBQcm9maWxlcyA6IGJvb2xlYW47XG5cdHZpZGVvT2Zmc2V0SW5QZXJjZW50YWdlIDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhVGh1bWJQYXJhbXNBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYVRodW1iUGFyYW1zJyB9LFxuXHRcdFx0XHRjcm9wVHlwZSA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFUaHVtYkNyb3BUeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFUaHVtYkNyb3BUeXBlJyB9LFxuXHRcdFx0XHRxdWFsaXR5IDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGNyb3BYIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGNyb3BZIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGNyb3BXaWR0aCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRjcm9wSGVpZ2h0IDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHZpZGVvT2Zmc2V0IDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHdpZHRoIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGhlaWdodCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRzY2FsZVdpZHRoIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHNjYWxlSGVpZ2h0IDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGJhY2tncm91bmRDb2xvciA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzb3VyY2VQYXJhbXNJZCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRmb3JtYXQgOiB7IHR5cGUgOiAnZXMnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhQ29udGFpbmVyRm9ybWF0LCBzdWJUeXBlIDogJ0thbHR1cmFDb250YWluZXJGb3JtYXQnIH0sXG5cdFx0XHRcdGRlbnNpdHkgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0c3RyaXBQcm9maWxlcyA6IHsgdHlwZSA6ICdiJyB9LFxuXHRcdFx0XHR2aWRlb09mZnNldEluUGVyY2VudGFnZSA6IHsgdHlwZSA6ICduJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhVGh1bWJQYXJhbXMnXSA9IEthbHR1cmFUaHVtYlBhcmFtczsiXX0=