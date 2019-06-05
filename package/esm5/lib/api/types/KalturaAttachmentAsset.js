/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaAttachmentType } from './KalturaAttachmentType';
import { KalturaAttachmentAssetStatus } from './KalturaAttachmentAssetStatus';
import { KalturaAsset } from './KalturaAsset';
/**
 * @record
 */
export function KalturaAttachmentAssetArgs() { }
/** @type {?|undefined} */
KalturaAttachmentAssetArgs.prototype.filename;
/** @type {?|undefined} */
KalturaAttachmentAssetArgs.prototype.title;
/** @type {?|undefined} */
KalturaAttachmentAssetArgs.prototype.format;
var KalturaAttachmentAsset = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaAttachmentAsset, _super);
    function KalturaAttachmentAsset(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaAttachmentAsset.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaAttachmentAsset' },
            filename: { type: 's' },
            title: { type: 's' },
            format: { type: 'es', subTypeConstructor: KalturaAttachmentType, subType: 'KalturaAttachmentType' },
            status: { type: 'en', readOnly: true, subTypeConstructor: KalturaAttachmentAssetStatus, subType: 'KalturaAttachmentAssetStatus' }
        });
        return result;
    };
    return KalturaAttachmentAsset;
}(KalturaAsset));
export { KalturaAttachmentAsset };
if (false) {
    /** @type {?} */
    KalturaAttachmentAsset.prototype.filename;
    /** @type {?} */
    KalturaAttachmentAsset.prototype.title;
    /** @type {?} */
    KalturaAttachmentAsset.prototype.format;
    /** @type {?} */
    KalturaAttachmentAsset.prototype.status;
}
typesMappingStorage['KalturaAttachmentAsset'] = KalturaAttachmentAsset;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUF0dGFjaG1lbnRBc3NldC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUF0dGFjaG1lbnRBc3NldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM5RSxPQUFPLEVBQUUsWUFBWSxFQUFvQixNQUFNLGdCQUFnQixDQUFDOzs7Ozs7Ozs7OztBQVNoRSxJQUFBO0lBQTRDLGtEQUFZO0lBT3BELGdDQUFZLElBQWtDO2VBRTFDLGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsNkNBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsd0JBQXdCLEVBQUU7WUFDM0UsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixLQUFLLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3RCLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcscUJBQXFCLEVBQUUsT0FBTyxFQUFHLHVCQUF1QixFQUFFO1lBQ3ZHLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyw0QkFBNEIsRUFBRSxPQUFPLEVBQUcsOEJBQThCLEVBQUU7U0FDN0gsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtpQ0F2Q0w7RUFhNEMsWUFBWSxFQTJCdkQsQ0FBQTtBQTNCRCxrQ0EyQkM7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsd0JBQXdCLENBQUMsR0FBRyxzQkFBc0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhQXR0YWNobWVudFR5cGUgfSBmcm9tICcuL0thbHR1cmFBdHRhY2htZW50VHlwZSc7XG5pbXBvcnQgeyBLYWx0dXJhQXR0YWNobWVudEFzc2V0U3RhdHVzIH0gZnJvbSAnLi9LYWx0dXJhQXR0YWNobWVudEFzc2V0U3RhdHVzJztcbmltcG9ydCB7IEthbHR1cmFBc3NldCwgS2FsdHVyYUFzc2V0QXJncyB9IGZyb20gJy4vS2FsdHVyYUFzc2V0JztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhQXR0YWNobWVudEFzc2V0QXJncyAgZXh0ZW5kcyBLYWx0dXJhQXNzZXRBcmdzIHtcbiAgICBmaWxlbmFtZT8gOiBzdHJpbmc7XG5cdHRpdGxlPyA6IHN0cmluZztcblx0Zm9ybWF0PyA6IEthbHR1cmFBdHRhY2htZW50VHlwZTtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUF0dGFjaG1lbnRBc3NldCBleHRlbmRzIEthbHR1cmFBc3NldCB7XG5cbiAgICBmaWxlbmFtZSA6IHN0cmluZztcblx0dGl0bGUgOiBzdHJpbmc7XG5cdGZvcm1hdCA6IEthbHR1cmFBdHRhY2htZW50VHlwZTtcblx0cmVhZG9ubHkgc3RhdHVzIDogS2FsdHVyYUF0dGFjaG1lbnRBc3NldFN0YXR1cztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUF0dGFjaG1lbnRBc3NldEFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhQXR0YWNobWVudEFzc2V0JyB9LFxuXHRcdFx0XHRmaWxlbmFtZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR0aXRsZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRmb3JtYXQgOiB7IHR5cGUgOiAnZXMnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhQXR0YWNobWVudFR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYUF0dGFjaG1lbnRUeXBlJyB9LFxuXHRcdFx0XHRzdGF0dXMgOiB7IHR5cGUgOiAnZW4nLCByZWFkT25seSA6IHRydWUsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFBdHRhY2htZW50QXNzZXRTdGF0dXMsIHN1YlR5cGUgOiAnS2FsdHVyYUF0dGFjaG1lbnRBc3NldFN0YXR1cycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUF0dGFjaG1lbnRBc3NldCddID0gS2FsdHVyYUF0dGFjaG1lbnRBc3NldDsiXX0=