/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaESearchItemData } from './KalturaESearchItemData';
/**
 * @record
 */
export function KalturaESearchMetadataItemDataArgs() { }
/** @type {?|undefined} */
KalturaESearchMetadataItemDataArgs.prototype.xpath;
/** @type {?|undefined} */
KalturaESearchMetadataItemDataArgs.prototype.metadataProfileId;
/** @type {?|undefined} */
KalturaESearchMetadataItemDataArgs.prototype.metadataFieldId;
/** @type {?|undefined} */
KalturaESearchMetadataItemDataArgs.prototype.valueText;
/** @type {?|undefined} */
KalturaESearchMetadataItemDataArgs.prototype.valueInt;
export class KalturaESearchMetadataItemData extends KalturaESearchItemData {
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
            objectType: { type: 'c', default: 'KalturaESearchMetadataItemData' },
            xpath: { type: 's' },
            metadataProfileId: { type: 'n' },
            metadataFieldId: { type: 'n' },
            valueText: { type: 's' },
            valueInt: { type: 'n' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaESearchMetadataItemData.prototype.xpath;
    /** @type {?} */
    KalturaESearchMetadataItemData.prototype.metadataProfileId;
    /** @type {?} */
    KalturaESearchMetadataItemData.prototype.metadataFieldId;
    /** @type {?} */
    KalturaESearchMetadataItemData.prototype.valueText;
    /** @type {?} */
    KalturaESearchMetadataItemData.prototype.valueInt;
}
typesMappingStorage['KalturaESearchMetadataItemData'] = KalturaESearchMetadataItemData;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUVTZWFyY2hNZXRhZGF0YUl0ZW1EYXRhLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhRVNlYXJjaE1ldGFkYXRhSXRlbURhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsc0JBQXNCLEVBQThCLE1BQU0sMEJBQTBCLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQVc5RixNQUFNLHFDQUFzQyxTQUFRLHNCQUFzQjs7OztJQVF0RSxZQUFZLElBQTBDO1FBRWxELEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxnQ0FBZ0MsRUFBRTtZQUNuRixLQUFLLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3RCLGlCQUFpQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNsQyxlQUFlLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2hDLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDMUIsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNoQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxnQ0FBZ0MsQ0FBQyxHQUFHLDhCQUE4QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFFU2VhcmNoSXRlbURhdGEsIEthbHR1cmFFU2VhcmNoSXRlbURhdGFBcmdzIH0gZnJvbSAnLi9LYWx0dXJhRVNlYXJjaEl0ZW1EYXRhJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhRVNlYXJjaE1ldGFkYXRhSXRlbURhdGFBcmdzICBleHRlbmRzIEthbHR1cmFFU2VhcmNoSXRlbURhdGFBcmdzIHtcbiAgICB4cGF0aD8gOiBzdHJpbmc7XG5cdG1ldGFkYXRhUHJvZmlsZUlkPyA6IG51bWJlcjtcblx0bWV0YWRhdGFGaWVsZElkPyA6IG51bWJlcjtcblx0dmFsdWVUZXh0PyA6IHN0cmluZztcblx0dmFsdWVJbnQ/IDogbnVtYmVyO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhRVNlYXJjaE1ldGFkYXRhSXRlbURhdGEgZXh0ZW5kcyBLYWx0dXJhRVNlYXJjaEl0ZW1EYXRhIHtcblxuICAgIHhwYXRoIDogc3RyaW5nO1xuXHRtZXRhZGF0YVByb2ZpbGVJZCA6IG51bWJlcjtcblx0bWV0YWRhdGFGaWVsZElkIDogbnVtYmVyO1xuXHR2YWx1ZVRleHQgOiBzdHJpbmc7XG5cdHZhbHVlSW50IDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhRVNlYXJjaE1ldGFkYXRhSXRlbURhdGFBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUVTZWFyY2hNZXRhZGF0YUl0ZW1EYXRhJyB9LFxuXHRcdFx0XHR4cGF0aCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRtZXRhZGF0YVByb2ZpbGVJZCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRtZXRhZGF0YUZpZWxkSWQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0dmFsdWVUZXh0IDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHZhbHVlSW50IDogeyB0eXBlIDogJ24nIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFFU2VhcmNoTWV0YWRhdGFJdGVtRGF0YSddID0gS2FsdHVyYUVTZWFyY2hNZXRhZGF0YUl0ZW1EYXRhOyJdfQ==