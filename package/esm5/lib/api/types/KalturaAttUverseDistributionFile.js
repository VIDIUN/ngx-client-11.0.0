/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaAssetType } from './KalturaAssetType';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaAttUverseDistributionFileArgs() { }
/** @type {?|undefined} */
KalturaAttUverseDistributionFileArgs.prototype.remoteFilename;
/** @type {?|undefined} */
KalturaAttUverseDistributionFileArgs.prototype.localFilePath;
/** @type {?|undefined} */
KalturaAttUverseDistributionFileArgs.prototype.assetType;
/** @type {?|undefined} */
KalturaAttUverseDistributionFileArgs.prototype.assetId;
var KalturaAttUverseDistributionFile = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaAttUverseDistributionFile, _super);
    function KalturaAttUverseDistributionFile(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaAttUverseDistributionFile.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaAttUverseDistributionFile' },
            remoteFilename: { type: 's' },
            localFilePath: { type: 's' },
            assetType: { type: 'es', subTypeConstructor: KalturaAssetType, subType: 'KalturaAssetType' },
            assetId: { type: 's' }
        });
        return result;
    };
    return KalturaAttUverseDistributionFile;
}(KalturaObjectBase));
export { KalturaAttUverseDistributionFile };
if (false) {
    /** @type {?} */
    KalturaAttUverseDistributionFile.prototype.remoteFilename;
    /** @type {?} */
    KalturaAttUverseDistributionFile.prototype.localFilePath;
    /** @type {?} */
    KalturaAttUverseDistributionFile.prototype.assetType;
    /** @type {?} */
    KalturaAttUverseDistributionFile.prototype.assetId;
}
typesMappingStorage['KalturaAttUverseDistributionFile'] = KalturaAttUverseDistributionFile;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUF0dFV2ZXJzZURpc3RyaWJ1dGlvbkZpbGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFBdHRVdmVyc2VEaXN0cmlidXRpb25GaWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxpQkFBaUIsRUFBeUIsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7Ozs7Ozs7OztBQVVsRixJQUFBO0lBQXNELDREQUFpQjtJQU9uRSwwQ0FBWSxJQUE0QztlQUVwRCxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLHVEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGtDQUFrQyxFQUFFO1lBQ3JGLGNBQWMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDL0IsYUFBYSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM5QixTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLGdCQUFnQixFQUFFLE9BQU8sRUFBRyxrQkFBa0IsRUFBRTtZQUNoRyxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ2YsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjsyQ0F2Q0w7RUFhc0QsaUJBQWlCLEVBMkJ0RSxDQUFBO0FBM0JELDRDQTJCQzs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxrQ0FBa0MsQ0FBQyxHQUFHLGdDQUFnQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFBc3NldFR5cGUgfSBmcm9tICcuL0thbHR1cmFBc3NldFR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYU9iamVjdEJhc2UsIEthbHR1cmFPYmplY3RCYXNlQXJncyB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFBdHRVdmVyc2VEaXN0cmlidXRpb25GaWxlQXJncyAgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZUFyZ3Mge1xuICAgIHJlbW90ZUZpbGVuYW1lPyA6IHN0cmluZztcblx0bG9jYWxGaWxlUGF0aD8gOiBzdHJpbmc7XG5cdGFzc2V0VHlwZT8gOiBLYWx0dXJhQXNzZXRUeXBlO1xuXHRhc3NldElkPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUF0dFV2ZXJzZURpc3RyaWJ1dGlvbkZpbGUgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZSB7XG5cbiAgICByZW1vdGVGaWxlbmFtZSA6IHN0cmluZztcblx0bG9jYWxGaWxlUGF0aCA6IHN0cmluZztcblx0YXNzZXRUeXBlIDogS2FsdHVyYUFzc2V0VHlwZTtcblx0YXNzZXRJZCA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUF0dFV2ZXJzZURpc3RyaWJ1dGlvbkZpbGVBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUF0dFV2ZXJzZURpc3RyaWJ1dGlvbkZpbGUnIH0sXG5cdFx0XHRcdHJlbW90ZUZpbGVuYW1lIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGxvY2FsRmlsZVBhdGggOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0YXNzZXRUeXBlIDogeyB0eXBlIDogJ2VzJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUFzc2V0VHlwZSwgc3ViVHlwZSA6ICdLYWx0dXJhQXNzZXRUeXBlJyB9LFxuXHRcdFx0XHRhc3NldElkIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFBdHRVdmVyc2VEaXN0cmlidXRpb25GaWxlJ10gPSBLYWx0dXJhQXR0VXZlcnNlRGlzdHJpYnV0aW9uRmlsZTsiXX0=