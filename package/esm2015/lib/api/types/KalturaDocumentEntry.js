/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaDocumentType } from './KalturaDocumentType';
import { KalturaBaseEntry } from './KalturaBaseEntry';
/**
 * @record
 */
export function KalturaDocumentEntryArgs() { }
/** @type {?|undefined} */
KalturaDocumentEntryArgs.prototype.documentType;
export class KalturaDocumentEntry extends KalturaBaseEntry {
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
            objectType: { type: 'c', default: 'KalturaDocumentEntry' },
            documentType: { type: 'en', subTypeConstructor: KalturaDocumentType, subType: 'KalturaDocumentType' },
            assetParamsIds: { type: 's', readOnly: true }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaDocumentEntry.prototype.documentType;
    /** @type {?} */
    KalturaDocumentEntry.prototype.assetParamsIds;
}
typesMappingStorage['KalturaDocumentEntry'] = KalturaDocumentEntry;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYURvY3VtZW50RW50cnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFEb2N1bWVudEVudHJ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGdCQUFnQixFQUF3QixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7O0FBTzVFLE1BQU0sMkJBQTRCLFNBQVEsZ0JBQWdCOzs7O0lBS3RELFlBQVksSUFBZ0M7UUFFeEMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHNCQUFzQixFQUFFO1lBQ3pFLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsbUJBQW1CLEVBQUUsT0FBTyxFQUFHLHFCQUFxQixFQUFFO1lBQ3pHLGNBQWMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtTQUN2QyxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxzQkFBc0IsQ0FBQyxHQUFHLG9CQUFvQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFEb2N1bWVudFR5cGUgfSBmcm9tICcuL0thbHR1cmFEb2N1bWVudFR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYUJhc2VFbnRyeSwgS2FsdHVyYUJhc2VFbnRyeUFyZ3MgfSBmcm9tICcuL0thbHR1cmFCYXNlRW50cnknO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFEb2N1bWVudEVudHJ5QXJncyAgZXh0ZW5kcyBLYWx0dXJhQmFzZUVudHJ5QXJncyB7XG4gICAgZG9jdW1lbnRUeXBlPyA6IEthbHR1cmFEb2N1bWVudFR5cGU7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFEb2N1bWVudEVudHJ5IGV4dGVuZHMgS2FsdHVyYUJhc2VFbnRyeSB7XG5cbiAgICBkb2N1bWVudFR5cGUgOiBLYWx0dXJhRG9jdW1lbnRUeXBlO1xuXHRyZWFkb25seSBhc3NldFBhcmFtc0lkcyA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYURvY3VtZW50RW50cnlBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYURvY3VtZW50RW50cnknIH0sXG5cdFx0XHRcdGRvY3VtZW50VHlwZSA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFEb2N1bWVudFR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYURvY3VtZW50VHlwZScgfSxcblx0XHRcdFx0YXNzZXRQYXJhbXNJZHMgOiB7IHR5cGUgOiAncycsIHJlYWRPbmx5IDogdHJ1ZSB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhRG9jdW1lbnRFbnRyeSddID0gS2FsdHVyYURvY3VtZW50RW50cnk7Il19