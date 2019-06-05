/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
export class KalturaThumbParams extends KalturaAssetParams {
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
    }
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVRodW1iUGFyYW1zLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhVGh1bWJQYXJhbXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM5RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsa0JBQWtCLEVBQTBCLE1BQU0sc0JBQXNCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVCbEYsTUFBTSx5QkFBMEIsU0FBUSxrQkFBa0I7Ozs7SUFvQnRELFlBQVksSUFBOEI7UUFFdEMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLG9CQUFvQixFQUFFO1lBQ3ZFLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsb0JBQW9CLEVBQUUsT0FBTyxFQUFHLHNCQUFzQixFQUFFO1lBQ3ZHLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEIsS0FBSyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN0QixLQUFLLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3RCLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDMUIsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMzQixXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVCLEtBQUssRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDdEIsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN2QixVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzNCLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUIsZUFBZSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNoQyxjQUFjLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQy9CLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsc0JBQXNCLEVBQUUsT0FBTyxFQUFHLHdCQUF3QixFQUFFO1lBQ3pHLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEIsYUFBYSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM5Qix1QkFBdUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDL0IsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsb0JBQW9CLENBQUMsR0FBRyxrQkFBa0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhVGh1bWJDcm9wVHlwZSB9IGZyb20gJy4vS2FsdHVyYVRodW1iQ3JvcFR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYUNvbnRhaW5lckZvcm1hdCB9IGZyb20gJy4vS2FsdHVyYUNvbnRhaW5lckZvcm1hdCc7XG5pbXBvcnQgeyBLYWx0dXJhQXNzZXRQYXJhbXMsIEthbHR1cmFBc3NldFBhcmFtc0FyZ3MgfSBmcm9tICcuL0thbHR1cmFBc3NldFBhcmFtcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYVRodW1iUGFyYW1zQXJncyAgZXh0ZW5kcyBLYWx0dXJhQXNzZXRQYXJhbXNBcmdzIHtcbiAgICBjcm9wVHlwZT8gOiBLYWx0dXJhVGh1bWJDcm9wVHlwZTtcblx0cXVhbGl0eT8gOiBudW1iZXI7XG5cdGNyb3BYPyA6IG51bWJlcjtcblx0Y3JvcFk/IDogbnVtYmVyO1xuXHRjcm9wV2lkdGg/IDogbnVtYmVyO1xuXHRjcm9wSGVpZ2h0PyA6IG51bWJlcjtcblx0dmlkZW9PZmZzZXQ/IDogbnVtYmVyO1xuXHR3aWR0aD8gOiBudW1iZXI7XG5cdGhlaWdodD8gOiBudW1iZXI7XG5cdHNjYWxlV2lkdGg/IDogbnVtYmVyO1xuXHRzY2FsZUhlaWdodD8gOiBudW1iZXI7XG5cdGJhY2tncm91bmRDb2xvcj8gOiBzdHJpbmc7XG5cdHNvdXJjZVBhcmFtc0lkPyA6IG51bWJlcjtcblx0Zm9ybWF0PyA6IEthbHR1cmFDb250YWluZXJGb3JtYXQ7XG5cdGRlbnNpdHk/IDogbnVtYmVyO1xuXHRzdHJpcFByb2ZpbGVzPyA6IGJvb2xlYW47XG5cdHZpZGVvT2Zmc2V0SW5QZXJjZW50YWdlPyA6IG51bWJlcjtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYVRodW1iUGFyYW1zIGV4dGVuZHMgS2FsdHVyYUFzc2V0UGFyYW1zIHtcblxuICAgIGNyb3BUeXBlIDogS2FsdHVyYVRodW1iQ3JvcFR5cGU7XG5cdHF1YWxpdHkgOiBudW1iZXI7XG5cdGNyb3BYIDogbnVtYmVyO1xuXHRjcm9wWSA6IG51bWJlcjtcblx0Y3JvcFdpZHRoIDogbnVtYmVyO1xuXHRjcm9wSGVpZ2h0IDogbnVtYmVyO1xuXHR2aWRlb09mZnNldCA6IG51bWJlcjtcblx0d2lkdGggOiBudW1iZXI7XG5cdGhlaWdodCA6IG51bWJlcjtcblx0c2NhbGVXaWR0aCA6IG51bWJlcjtcblx0c2NhbGVIZWlnaHQgOiBudW1iZXI7XG5cdGJhY2tncm91bmRDb2xvciA6IHN0cmluZztcblx0c291cmNlUGFyYW1zSWQgOiBudW1iZXI7XG5cdGZvcm1hdCA6IEthbHR1cmFDb250YWluZXJGb3JtYXQ7XG5cdGRlbnNpdHkgOiBudW1iZXI7XG5cdHN0cmlwUHJvZmlsZXMgOiBib29sZWFuO1xuXHR2aWRlb09mZnNldEluUGVyY2VudGFnZSA6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYVRodW1iUGFyYW1zQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFUaHVtYlBhcmFtcycgfSxcblx0XHRcdFx0Y3JvcFR5cGUgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhVGh1bWJDcm9wVHlwZSwgc3ViVHlwZSA6ICdLYWx0dXJhVGh1bWJDcm9wVHlwZScgfSxcblx0XHRcdFx0cXVhbGl0eSA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRjcm9wWCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRjcm9wWSA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRjcm9wV2lkdGggOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0Y3JvcEhlaWdodCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHR2aWRlb09mZnNldCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHR3aWR0aCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRoZWlnaHQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0c2NhbGVXaWR0aCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRzY2FsZUhlaWdodCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3IgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c291cmNlUGFyYW1zSWQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0Zm9ybWF0IDogeyB0eXBlIDogJ2VzJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUNvbnRhaW5lckZvcm1hdCwgc3ViVHlwZSA6ICdLYWx0dXJhQ29udGFpbmVyRm9ybWF0JyB9LFxuXHRcdFx0XHRkZW5zaXR5IDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHN0cmlwUHJvZmlsZXMgOiB7IHR5cGUgOiAnYicgfSxcblx0XHRcdFx0dmlkZW9PZmZzZXRJblBlcmNlbnRhZ2UgOiB7IHR5cGUgOiAnbicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYVRodW1iUGFyYW1zJ10gPSBLYWx0dXJhVGh1bWJQYXJhbXM7Il19