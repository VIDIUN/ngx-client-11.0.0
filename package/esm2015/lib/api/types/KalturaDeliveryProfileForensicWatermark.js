/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaKeyValue } from './KalturaKeyValue';
import { KalturaDeliveryProfile } from './KalturaDeliveryProfile';
/**
 * @record
 */
export function KalturaDeliveryProfileForensicWatermarkArgs() { }
/** @type {?|undefined} */
KalturaDeliveryProfileForensicWatermarkArgs.prototype.internalUrl;
/** @type {?|undefined} */
KalturaDeliveryProfileForensicWatermarkArgs.prototype.encryptionKey;
/** @type {?|undefined} */
KalturaDeliveryProfileForensicWatermarkArgs.prototype.encryptionIv;
/** @type {?|undefined} */
KalturaDeliveryProfileForensicWatermarkArgs.prototype.encryptionRegex;
export class KalturaDeliveryProfileForensicWatermark extends KalturaDeliveryProfile {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data);
        if (typeof this.internalUrl === 'undefined')
            this.internalUrl = [];
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaDeliveryProfileForensicWatermark' },
            internalUrl: { type: 'a', subTypeConstructor: KalturaKeyValue, subType: 'KalturaKeyValue' },
            encryptionKey: { type: 's' },
            encryptionIv: { type: 's' },
            encryptionRegex: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaDeliveryProfileForensicWatermark.prototype.internalUrl;
    /** @type {?} */
    KalturaDeliveryProfileForensicWatermark.prototype.encryptionKey;
    /** @type {?} */
    KalturaDeliveryProfileForensicWatermark.prototype.encryptionIv;
    /** @type {?} */
    KalturaDeliveryProfileForensicWatermark.prototype.encryptionRegex;
}
typesMappingStorage['KalturaDeliveryProfileForensicWatermark'] = KalturaDeliveryProfileForensicWatermark;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYURlbGl2ZXJ5UHJvZmlsZUZvcmVuc2ljV2F0ZXJtYXJrLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhRGVsaXZlcnlQcm9maWxlRm9yZW5zaWNXYXRlcm1hcmsudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDcEQsT0FBTyxFQUFFLHNCQUFzQixFQUE4QixNQUFNLDBCQUEwQixDQUFDOzs7Ozs7Ozs7Ozs7O0FBVTlGLE1BQU0sOENBQStDLFNBQVEsc0JBQXNCOzs7O0lBTy9FLFlBQVksSUFBbUQ7UUFFM0QsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ1osRUFBRSxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsV0FBVyxLQUFLLFdBQVcsQ0FBQztZQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO0tBQ3RFOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyx5Q0FBeUMsRUFBRTtZQUM1RixXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLGVBQWUsRUFBRSxPQUFPLEVBQUcsaUJBQWlCLEVBQUU7WUFDL0YsYUFBYSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM5QixZQUFZLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzdCLGVBQWUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDdkIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLHlDQUF5QyxDQUFDLEdBQUcsdUNBQXVDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUtleVZhbHVlIH0gZnJvbSAnLi9LYWx0dXJhS2V5VmFsdWUnO1xuaW1wb3J0IHsgS2FsdHVyYURlbGl2ZXJ5UHJvZmlsZSwgS2FsdHVyYURlbGl2ZXJ5UHJvZmlsZUFyZ3MgfSBmcm9tICcuL0thbHR1cmFEZWxpdmVyeVByb2ZpbGUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFEZWxpdmVyeVByb2ZpbGVGb3JlbnNpY1dhdGVybWFya0FyZ3MgIGV4dGVuZHMgS2FsdHVyYURlbGl2ZXJ5UHJvZmlsZUFyZ3Mge1xuICAgIGludGVybmFsVXJsPyA6IEthbHR1cmFLZXlWYWx1ZVtdO1xuXHRlbmNyeXB0aW9uS2V5PyA6IHN0cmluZztcblx0ZW5jcnlwdGlvbkl2PyA6IHN0cmluZztcblx0ZW5jcnlwdGlvblJlZ2V4PyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYURlbGl2ZXJ5UHJvZmlsZUZvcmVuc2ljV2F0ZXJtYXJrIGV4dGVuZHMgS2FsdHVyYURlbGl2ZXJ5UHJvZmlsZSB7XG5cbiAgICBpbnRlcm5hbFVybCA6IEthbHR1cmFLZXlWYWx1ZVtdO1xuXHRlbmNyeXB0aW9uS2V5IDogc3RyaW5nO1xuXHRlbmNyeXB0aW9uSXYgOiBzdHJpbmc7XG5cdGVuY3J5cHRpb25SZWdleCA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYURlbGl2ZXJ5UHJvZmlsZUZvcmVuc2ljV2F0ZXJtYXJrQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuaW50ZXJuYWxVcmwgPT09ICd1bmRlZmluZWQnKSB0aGlzLmludGVybmFsVXJsID0gW107XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYURlbGl2ZXJ5UHJvZmlsZUZvcmVuc2ljV2F0ZXJtYXJrJyB9LFxuXHRcdFx0XHRpbnRlcm5hbFVybCA6IHsgdHlwZSA6ICdhJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUtleVZhbHVlLCBzdWJUeXBlIDogJ0thbHR1cmFLZXlWYWx1ZScgfSxcblx0XHRcdFx0ZW5jcnlwdGlvbktleSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRlbmNyeXB0aW9uSXYgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZW5jcnlwdGlvblJlZ2V4IDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFEZWxpdmVyeVByb2ZpbGVGb3JlbnNpY1dhdGVybWFyayddID0gS2FsdHVyYURlbGl2ZXJ5UHJvZmlsZUZvcmVuc2ljV2F0ZXJtYXJrOyJdfQ==