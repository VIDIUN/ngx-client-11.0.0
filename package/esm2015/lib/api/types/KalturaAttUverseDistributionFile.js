/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
export class KalturaAttUverseDistributionFile extends KalturaObjectBase {
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
            objectType: { type: 'c', default: 'KalturaAttUverseDistributionFile' },
            remoteFilename: { type: 's' },
            localFilePath: { type: 's' },
            assetType: { type: 'es', subTypeConstructor: KalturaAssetType, subType: 'KalturaAssetType' },
            assetId: { type: 's' }
        });
        return result;
    }
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUF0dFV2ZXJzZURpc3RyaWJ1dGlvbkZpbGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFBdHRVdmVyc2VEaXN0cmlidXRpb25GaWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDdEQsT0FBTyxFQUFFLGlCQUFpQixFQUF5QixNQUFNLHdCQUF3QixDQUFDOzs7Ozs7Ozs7Ozs7O0FBVWxGLE1BQU0sdUNBQXdDLFNBQVEsaUJBQWlCOzs7O0lBT25FLFlBQVksSUFBNEM7UUFFcEQsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGtDQUFrQyxFQUFFO1lBQ3JGLGNBQWMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDL0IsYUFBYSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM5QixTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLGdCQUFnQixFQUFFLE9BQU8sRUFBRyxrQkFBa0IsRUFBRTtZQUNoRyxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ2YsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLGtDQUFrQyxDQUFDLEdBQUcsZ0NBQWdDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUFzc2V0VHlwZSB9IGZyb20gJy4vS2FsdHVyYUFzc2V0VHlwZSc7XG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0QmFzZSwgS2FsdHVyYU9iamVjdEJhc2VBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUF0dFV2ZXJzZURpc3RyaWJ1dGlvbkZpbGVBcmdzICBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlQXJncyB7XG4gICAgcmVtb3RlRmlsZW5hbWU/IDogc3RyaW5nO1xuXHRsb2NhbEZpbGVQYXRoPyA6IHN0cmluZztcblx0YXNzZXRUeXBlPyA6IEthbHR1cmFBc3NldFR5cGU7XG5cdGFzc2V0SWQ/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhQXR0VXZlcnNlRGlzdHJpYnV0aW9uRmlsZSBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlIHtcblxuICAgIHJlbW90ZUZpbGVuYW1lIDogc3RyaW5nO1xuXHRsb2NhbEZpbGVQYXRoIDogc3RyaW5nO1xuXHRhc3NldFR5cGUgOiBLYWx0dXJhQXNzZXRUeXBlO1xuXHRhc3NldElkIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhQXR0VXZlcnNlRGlzdHJpYnV0aW9uRmlsZUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhQXR0VXZlcnNlRGlzdHJpYnV0aW9uRmlsZScgfSxcblx0XHRcdFx0cmVtb3RlRmlsZW5hbWUgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0bG9jYWxGaWxlUGF0aCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRhc3NldFR5cGUgOiB7IHR5cGUgOiAnZXMnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhQXNzZXRUeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFBc3NldFR5cGUnIH0sXG5cdFx0XHRcdGFzc2V0SWQgOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUF0dFV2ZXJzZURpc3RyaWJ1dGlvbkZpbGUnXSA9IEthbHR1cmFBdHRVdmVyc2VEaXN0cmlidXRpb25GaWxlOyJdfQ==