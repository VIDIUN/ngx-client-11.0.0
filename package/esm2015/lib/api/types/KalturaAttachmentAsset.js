/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
export class KalturaAttachmentAsset extends KalturaAsset {
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
            objectType: { type: 'c', default: 'KalturaAttachmentAsset' },
            filename: { type: 's' },
            title: { type: 's' },
            format: { type: 'es', subTypeConstructor: KalturaAttachmentType, subType: 'KalturaAttachmentType' },
            status: { type: 'en', readOnly: true, subTypeConstructor: KalturaAttachmentAssetStatus, subType: 'KalturaAttachmentAssetStatus' }
        });
        return result;
    }
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUF0dGFjaG1lbnRBc3NldC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUF0dGFjaG1lbnRBc3NldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxZQUFZLEVBQW9CLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7Ozs7O0FBU2hFLE1BQU0sNkJBQThCLFNBQVEsWUFBWTs7OztJQU9wRCxZQUFZLElBQWtDO1FBRTFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyx3QkFBd0IsRUFBRTtZQUMzRSxRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLEtBQUssRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDdEIsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxxQkFBcUIsRUFBRSxPQUFPLEVBQUcsdUJBQXVCLEVBQUU7WUFDdkcsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLDRCQUE0QixFQUFFLE9BQU8sRUFBRyw4QkFBOEIsRUFBRTtTQUM3SCxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsd0JBQXdCLENBQUMsR0FBRyxzQkFBc0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhQXR0YWNobWVudFR5cGUgfSBmcm9tICcuL0thbHR1cmFBdHRhY2htZW50VHlwZSc7XG5pbXBvcnQgeyBLYWx0dXJhQXR0YWNobWVudEFzc2V0U3RhdHVzIH0gZnJvbSAnLi9LYWx0dXJhQXR0YWNobWVudEFzc2V0U3RhdHVzJztcbmltcG9ydCB7IEthbHR1cmFBc3NldCwgS2FsdHVyYUFzc2V0QXJncyB9IGZyb20gJy4vS2FsdHVyYUFzc2V0JztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhQXR0YWNobWVudEFzc2V0QXJncyAgZXh0ZW5kcyBLYWx0dXJhQXNzZXRBcmdzIHtcbiAgICBmaWxlbmFtZT8gOiBzdHJpbmc7XG5cdHRpdGxlPyA6IHN0cmluZztcblx0Zm9ybWF0PyA6IEthbHR1cmFBdHRhY2htZW50VHlwZTtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUF0dGFjaG1lbnRBc3NldCBleHRlbmRzIEthbHR1cmFBc3NldCB7XG5cbiAgICBmaWxlbmFtZSA6IHN0cmluZztcblx0dGl0bGUgOiBzdHJpbmc7XG5cdGZvcm1hdCA6IEthbHR1cmFBdHRhY2htZW50VHlwZTtcblx0cmVhZG9ubHkgc3RhdHVzIDogS2FsdHVyYUF0dGFjaG1lbnRBc3NldFN0YXR1cztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUF0dGFjaG1lbnRBc3NldEFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhQXR0YWNobWVudEFzc2V0JyB9LFxuXHRcdFx0XHRmaWxlbmFtZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR0aXRsZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRmb3JtYXQgOiB7IHR5cGUgOiAnZXMnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhQXR0YWNobWVudFR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYUF0dGFjaG1lbnRUeXBlJyB9LFxuXHRcdFx0XHRzdGF0dXMgOiB7IHR5cGUgOiAnZW4nLCByZWFkT25seSA6IHRydWUsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFBdHRhY2htZW50QXNzZXRTdGF0dXMsIHN1YlR5cGUgOiAnS2FsdHVyYUF0dGFjaG1lbnRBc3NldFN0YXR1cycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUF0dGFjaG1lbnRBc3NldCddID0gS2FsdHVyYUF0dGFjaG1lbnRBc3NldDsiXX0=