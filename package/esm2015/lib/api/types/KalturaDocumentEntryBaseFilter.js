/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaDocumentType } from './KalturaDocumentType';
import { KalturaBaseEntryFilter } from './KalturaBaseEntryFilter';
/**
 * @record
 */
export function KalturaDocumentEntryBaseFilterArgs() { }
/** @type {?|undefined} */
KalturaDocumentEntryBaseFilterArgs.prototype.documentTypeEqual;
/** @type {?|undefined} */
KalturaDocumentEntryBaseFilterArgs.prototype.documentTypeIn;
/** @type {?|undefined} */
KalturaDocumentEntryBaseFilterArgs.prototype.assetParamsIdsMatchOr;
/** @type {?|undefined} */
KalturaDocumentEntryBaseFilterArgs.prototype.assetParamsIdsMatchAnd;
export class KalturaDocumentEntryBaseFilter extends KalturaBaseEntryFilter {
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
            objectType: { type: 'c', default: 'KalturaDocumentEntryBaseFilter' },
            documentTypeEqual: { type: 'en', subTypeConstructor: KalturaDocumentType, subType: 'KalturaDocumentType' },
            documentTypeIn: { type: 's' },
            assetParamsIdsMatchOr: { type: 's' },
            assetParamsIdsMatchAnd: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaDocumentEntryBaseFilter.prototype.documentTypeEqual;
    /** @type {?} */
    KalturaDocumentEntryBaseFilter.prototype.documentTypeIn;
    /** @type {?} */
    KalturaDocumentEntryBaseFilter.prototype.assetParamsIdsMatchOr;
    /** @type {?} */
    KalturaDocumentEntryBaseFilter.prototype.assetParamsIdsMatchAnd;
}
typesMappingStorage['KalturaDocumentEntryBaseFilter'] = KalturaDocumentEntryBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYURvY3VtZW50RW50cnlCYXNlRmlsdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhRG9jdW1lbnRFbnRyeUJhc2VGaWx0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsc0JBQXNCLEVBQThCLE1BQU0sMEJBQTBCLENBQUM7Ozs7Ozs7Ozs7Ozs7QUFVOUYsTUFBTSxxQ0FBc0MsU0FBUSxzQkFBc0I7Ozs7SUFPdEUsWUFBWSxJQUEwQztRQUVsRCxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDZjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsZ0NBQWdDLEVBQUU7WUFDbkYsaUJBQWlCLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLG1CQUFtQixFQUFFLE9BQU8sRUFBRyxxQkFBcUIsRUFBRTtZQUM5RyxjQUFjLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQy9CLHFCQUFxQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN0QyxzQkFBc0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDOUIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLGdDQUFnQyxDQUFDLEdBQUcsOEJBQThCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYURvY3VtZW50VHlwZSB9IGZyb20gJy4vS2FsdHVyYURvY3VtZW50VHlwZSc7XG5pbXBvcnQgeyBLYWx0dXJhQmFzZUVudHJ5RmlsdGVyLCBLYWx0dXJhQmFzZUVudHJ5RmlsdGVyQXJncyB9IGZyb20gJy4vS2FsdHVyYUJhc2VFbnRyeUZpbHRlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYURvY3VtZW50RW50cnlCYXNlRmlsdGVyQXJncyAgZXh0ZW5kcyBLYWx0dXJhQmFzZUVudHJ5RmlsdGVyQXJncyB7XG4gICAgZG9jdW1lbnRUeXBlRXF1YWw/IDogS2FsdHVyYURvY3VtZW50VHlwZTtcblx0ZG9jdW1lbnRUeXBlSW4/IDogc3RyaW5nO1xuXHRhc3NldFBhcmFtc0lkc01hdGNoT3I/IDogc3RyaW5nO1xuXHRhc3NldFBhcmFtc0lkc01hdGNoQW5kPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYURvY3VtZW50RW50cnlCYXNlRmlsdGVyIGV4dGVuZHMgS2FsdHVyYUJhc2VFbnRyeUZpbHRlciB7XG5cbiAgICBkb2N1bWVudFR5cGVFcXVhbCA6IEthbHR1cmFEb2N1bWVudFR5cGU7XG5cdGRvY3VtZW50VHlwZUluIDogc3RyaW5nO1xuXHRhc3NldFBhcmFtc0lkc01hdGNoT3IgOiBzdHJpbmc7XG5cdGFzc2V0UGFyYW1zSWRzTWF0Y2hBbmQgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFEb2N1bWVudEVudHJ5QmFzZUZpbHRlckFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhRG9jdW1lbnRFbnRyeUJhc2VGaWx0ZXInIH0sXG5cdFx0XHRcdGRvY3VtZW50VHlwZUVxdWFsIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYURvY3VtZW50VHlwZSwgc3ViVHlwZSA6ICdLYWx0dXJhRG9jdW1lbnRUeXBlJyB9LFxuXHRcdFx0XHRkb2N1bWVudFR5cGVJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRhc3NldFBhcmFtc0lkc01hdGNoT3IgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0YXNzZXRQYXJhbXNJZHNNYXRjaEFuZCA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhRG9jdW1lbnRFbnRyeUJhc2VGaWx0ZXInXSA9IEthbHR1cmFEb2N1bWVudEVudHJ5QmFzZUZpbHRlcjsiXX0=