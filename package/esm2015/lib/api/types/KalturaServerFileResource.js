/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaGenericDataCenterContentResource } from './KalturaGenericDataCenterContentResource';
/**
 * @record
 */
export function KalturaServerFileResourceArgs() { }
/** @type {?|undefined} */
KalturaServerFileResourceArgs.prototype.localFilePath;
/** @type {?|undefined} */
KalturaServerFileResourceArgs.prototype.keepOriginalFile;
export class KalturaServerFileResource extends KalturaGenericDataCenterContentResource {
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
            objectType: { type: 'c', default: 'KalturaServerFileResource' },
            localFilePath: { type: 's' },
            keepOriginalFile: { type: 'b' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaServerFileResource.prototype.localFilePath;
    /** @type {?} */
    KalturaServerFileResource.prototype.keepOriginalFile;
}
typesMappingStorage['KalturaServerFileResource'] = KalturaServerFileResource;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVNlcnZlckZpbGVSZXNvdXJjZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYVNlcnZlckZpbGVSZXNvdXJjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSx1Q0FBdUMsRUFBK0MsTUFBTSwyQ0FBMkMsQ0FBQzs7Ozs7Ozs7O0FBUWpKLE1BQU0sZ0NBQWlDLFNBQVEsdUNBQXVDOzs7O0lBS2xGLFlBQVksSUFBcUM7UUFFN0MsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLDJCQUEyQixFQUFFO1lBQzlFLGFBQWEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDOUIsZ0JBQWdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ3hCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjs7Ozs7OztBQUVELG1CQUFtQixDQUFDLDJCQUEyQixDQUFDLEdBQUcseUJBQXlCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUdlbmVyaWNEYXRhQ2VudGVyQ29udGVudFJlc291cmNlLCBLYWx0dXJhR2VuZXJpY0RhdGFDZW50ZXJDb250ZW50UmVzb3VyY2VBcmdzIH0gZnJvbSAnLi9LYWx0dXJhR2VuZXJpY0RhdGFDZW50ZXJDb250ZW50UmVzb3VyY2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFTZXJ2ZXJGaWxlUmVzb3VyY2VBcmdzICBleHRlbmRzIEthbHR1cmFHZW5lcmljRGF0YUNlbnRlckNvbnRlbnRSZXNvdXJjZUFyZ3Mge1xuICAgIGxvY2FsRmlsZVBhdGg/IDogc3RyaW5nO1xuXHRrZWVwT3JpZ2luYWxGaWxlPyA6IGJvb2xlYW47XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFTZXJ2ZXJGaWxlUmVzb3VyY2UgZXh0ZW5kcyBLYWx0dXJhR2VuZXJpY0RhdGFDZW50ZXJDb250ZW50UmVzb3VyY2Uge1xuXG4gICAgbG9jYWxGaWxlUGF0aCA6IHN0cmluZztcblx0a2VlcE9yaWdpbmFsRmlsZSA6IGJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFTZXJ2ZXJGaWxlUmVzb3VyY2VBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYVNlcnZlckZpbGVSZXNvdXJjZScgfSxcblx0XHRcdFx0bG9jYWxGaWxlUGF0aCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRrZWVwT3JpZ2luYWxGaWxlIDogeyB0eXBlIDogJ2InIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFTZXJ2ZXJGaWxlUmVzb3VyY2UnXSA9IEthbHR1cmFTZXJ2ZXJGaWxlUmVzb3VyY2U7Il19