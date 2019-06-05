/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaAttachmentType } from './KalturaAttachmentType';
import { KalturaAttachmentAssetStatus } from './KalturaAttachmentAssetStatus';
import { KalturaAssetFilter } from './KalturaAssetFilter';
/**
 * @record
 */
export function KalturaAttachmentAssetBaseFilterArgs() { }
/** @type {?|undefined} */
KalturaAttachmentAssetBaseFilterArgs.prototype.formatEqual;
/** @type {?|undefined} */
KalturaAttachmentAssetBaseFilterArgs.prototype.formatIn;
/** @type {?|undefined} */
KalturaAttachmentAssetBaseFilterArgs.prototype.statusEqual;
/** @type {?|undefined} */
KalturaAttachmentAssetBaseFilterArgs.prototype.statusIn;
/** @type {?|undefined} */
KalturaAttachmentAssetBaseFilterArgs.prototype.statusNotIn;
var KalturaAttachmentAssetBaseFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaAttachmentAssetBaseFilter, _super);
    function KalturaAttachmentAssetBaseFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaAttachmentAssetBaseFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaAttachmentAssetBaseFilter' },
            formatEqual: { type: 'es', subTypeConstructor: KalturaAttachmentType, subType: 'KalturaAttachmentType' },
            formatIn: { type: 's' },
            statusEqual: { type: 'en', subTypeConstructor: KalturaAttachmentAssetStatus, subType: 'KalturaAttachmentAssetStatus' },
            statusIn: { type: 's' },
            statusNotIn: { type: 's' }
        });
        return result;
    };
    return KalturaAttachmentAssetBaseFilter;
}(KalturaAssetFilter));
export { KalturaAttachmentAssetBaseFilter };
if (false) {
    /** @type {?} */
    KalturaAttachmentAssetBaseFilter.prototype.formatEqual;
    /** @type {?} */
    KalturaAttachmentAssetBaseFilter.prototype.formatIn;
    /** @type {?} */
    KalturaAttachmentAssetBaseFilter.prototype.statusEqual;
    /** @type {?} */
    KalturaAttachmentAssetBaseFilter.prototype.statusIn;
    /** @type {?} */
    KalturaAttachmentAssetBaseFilter.prototype.statusNotIn;
}
typesMappingStorage['KalturaAttachmentAssetBaseFilter'] = KalturaAttachmentAssetBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUF0dGFjaG1lbnRBc3NldEJhc2VGaWx0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFBdHRhY2htZW50QXNzZXRCYXNlRmlsdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxrQkFBa0IsRUFBMEIsTUFBTSxzQkFBc0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FBV2xGLElBQUE7SUFBc0QsNERBQWtCO0lBUXBFLDBDQUFZLElBQTRDO2VBRXBELGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsdURBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsa0NBQWtDLEVBQUU7WUFDckYsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxxQkFBcUIsRUFBRSxPQUFPLEVBQUcsdUJBQXVCLEVBQUU7WUFDNUcsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLDRCQUE0QixFQUFFLE9BQU8sRUFBRyw4QkFBOEIsRUFBRTtZQUMxSCxRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDbkIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjsyQ0EzQ0w7RUFlc0Qsa0JBQWtCLEVBNkJ2RSxDQUFBO0FBN0JELDRDQTZCQzs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLGtDQUFrQyxDQUFDLEdBQUcsZ0NBQWdDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUF0dGFjaG1lbnRUeXBlIH0gZnJvbSAnLi9LYWx0dXJhQXR0YWNobWVudFR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYUF0dGFjaG1lbnRBc3NldFN0YXR1cyB9IGZyb20gJy4vS2FsdHVyYUF0dGFjaG1lbnRBc3NldFN0YXR1cyc7XG5pbXBvcnQgeyBLYWx0dXJhQXNzZXRGaWx0ZXIsIEthbHR1cmFBc3NldEZpbHRlckFyZ3MgfSBmcm9tICcuL0thbHR1cmFBc3NldEZpbHRlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUF0dGFjaG1lbnRBc3NldEJhc2VGaWx0ZXJBcmdzICBleHRlbmRzIEthbHR1cmFBc3NldEZpbHRlckFyZ3Mge1xuICAgIGZvcm1hdEVxdWFsPyA6IEthbHR1cmFBdHRhY2htZW50VHlwZTtcblx0Zm9ybWF0SW4/IDogc3RyaW5nO1xuXHRzdGF0dXNFcXVhbD8gOiBLYWx0dXJhQXR0YWNobWVudEFzc2V0U3RhdHVzO1xuXHRzdGF0dXNJbj8gOiBzdHJpbmc7XG5cdHN0YXR1c05vdEluPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUF0dGFjaG1lbnRBc3NldEJhc2VGaWx0ZXIgZXh0ZW5kcyBLYWx0dXJhQXNzZXRGaWx0ZXIge1xuXG4gICAgZm9ybWF0RXF1YWwgOiBLYWx0dXJhQXR0YWNobWVudFR5cGU7XG5cdGZvcm1hdEluIDogc3RyaW5nO1xuXHRzdGF0dXNFcXVhbCA6IEthbHR1cmFBdHRhY2htZW50QXNzZXRTdGF0dXM7XG5cdHN0YXR1c0luIDogc3RyaW5nO1xuXHRzdGF0dXNOb3RJbiA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUF0dGFjaG1lbnRBc3NldEJhc2VGaWx0ZXJBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUF0dGFjaG1lbnRBc3NldEJhc2VGaWx0ZXInIH0sXG5cdFx0XHRcdGZvcm1hdEVxdWFsIDogeyB0eXBlIDogJ2VzJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUF0dGFjaG1lbnRUeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFBdHRhY2htZW50VHlwZScgfSxcblx0XHRcdFx0Zm9ybWF0SW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c3RhdHVzRXF1YWwgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhQXR0YWNobWVudEFzc2V0U3RhdHVzLCBzdWJUeXBlIDogJ0thbHR1cmFBdHRhY2htZW50QXNzZXRTdGF0dXMnIH0sXG5cdFx0XHRcdHN0YXR1c0luIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHN0YXR1c05vdEluIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFBdHRhY2htZW50QXNzZXRCYXNlRmlsdGVyJ10gPSBLYWx0dXJhQXR0YWNobWVudEFzc2V0QmFzZUZpbHRlcjsiXX0=