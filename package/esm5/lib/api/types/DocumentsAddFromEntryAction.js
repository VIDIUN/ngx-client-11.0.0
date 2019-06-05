/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaDocumentEntry } from './KalturaDocumentEntry';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function DocumentsAddFromEntryActionArgs() { }
/** @type {?} */
DocumentsAddFromEntryActionArgs.prototype.sourceEntryId;
/** @type {?|undefined} */
DocumentsAddFromEntryActionArgs.prototype.documentEntry;
/** @type {?|undefined} */
DocumentsAddFromEntryActionArgs.prototype.sourceFlavorParamsId;
/**
 * Build request payload for service 'documents' action 'addFromEntry'.
 *
 * Usage: Copy entry into new entry
 *
 * Server response type:         KalturaDocumentEntry
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'documents' action 'addFromEntry'.
 *
 * Usage: Copy entry into new entry
 *
 * Server response type:         KalturaDocumentEntry
 * Server failure response type: KalturaAPIException
 */
DocumentsAddFromEntryAction = /** @class */ (function (_super) {
    tslib_1.__extends(DocumentsAddFromEntryAction, _super);
    function DocumentsAddFromEntryAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaDocumentEntry', responseConstructor: KalturaDocumentEntry }) || this;
    }
    /**
     * @return {?}
     */
    DocumentsAddFromEntryAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'document_documents' },
            action: { type: 'c', default: 'addFromEntry' },
            sourceEntryId: { type: 's' },
            documentEntry: { type: 'o', subTypeConstructor: KalturaDocumentEntry, subType: 'KalturaDocumentEntry' },
            sourceFlavorParamsId: { type: 'n' }
        });
        return result;
    };
    return DocumentsAddFromEntryAction;
}(KalturaRequest));
/**
 * Build request payload for service 'documents' action 'addFromEntry'.
 *
 * Usage: Copy entry into new entry
 *
 * Server response type:         KalturaDocumentEntry
 * Server failure response type: KalturaAPIException
 */
export { DocumentsAddFromEntryAction };
if (false) {
    /** @type {?} */
    DocumentsAddFromEntryAction.prototype.sourceEntryId;
    /** @type {?} */
    DocumentsAddFromEntryAction.prototype.documentEntry;
    /** @type {?} */
    DocumentsAddFromEntryAction.prototype.sourceFlavorParamsId;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG9jdW1lbnRzQWRkRnJvbUVudHJ5QWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9Eb2N1bWVudHNBZGRGcm9tRW50cnlBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUU5RCxPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0J4RTs7Ozs7Ozs7QUFBQTtJQUFpRCx1REFBb0M7SUFNakYscUNBQVksSUFBc0M7ZUFFOUMsa0JBQU0sSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcsc0JBQXNCLEVBQUUsbUJBQW1CLEVBQUcsb0JBQW9CLEVBQUcsQ0FBQztLQUM1SDs7OztJQUVTLGtEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLG9CQUFvQixFQUFFO1lBQ3BFLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGNBQWMsRUFBRTtZQUNqRCxhQUFhLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzlCLGFBQWEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsb0JBQW9CLEVBQUUsT0FBTyxFQUFHLHNCQUFzQixFQUFFO1lBQzNHLG9CQUFvQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUM1QixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO3NDQTdDTDtFQW9CaUQsY0FBYyxFQTBCOUQsQ0FBQTs7Ozs7Ozs7O0FBMUJELHVDQTBCQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhRG9jdW1lbnRFbnRyeSB9IGZyb20gJy4vS2FsdHVyYURvY3VtZW50RW50cnknO1xuXG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBEb2N1bWVudHNBZGRGcm9tRW50cnlBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAgc291cmNlRW50cnlJZCA6IHN0cmluZztcblx0ZG9jdW1lbnRFbnRyeT8gOiBLYWx0dXJhRG9jdW1lbnRFbnRyeTtcblx0c291cmNlRmxhdm9yUGFyYW1zSWQ/IDogbnVtYmVyO1xufVxuXG4vKipcbiAqIEJ1aWxkIHJlcXVlc3QgcGF5bG9hZCBmb3Igc2VydmljZSAnZG9jdW1lbnRzJyBhY3Rpb24gJ2FkZEZyb21FbnRyeScuXG4gKlxuICogVXNhZ2U6IENvcHkgZW50cnkgaW50byBuZXcgZW50cnlcbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICBLYWx0dXJhRG9jdW1lbnRFbnRyeVxuICogU2VydmVyIGZhaWx1cmUgcmVzcG9uc2UgdHlwZTogS2FsdHVyYUFQSUV4Y2VwdGlvblxuICovXG5leHBvcnQgY2xhc3MgRG9jdW1lbnRzQWRkRnJvbUVudHJ5QWN0aW9uIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3Q8S2FsdHVyYURvY3VtZW50RW50cnk+IHtcblxuICAgIHNvdXJjZUVudHJ5SWQgOiBzdHJpbmc7XG5cdGRvY3VtZW50RW50cnkgOiBLYWx0dXJhRG9jdW1lbnRFbnRyeTtcblx0c291cmNlRmxhdm9yUGFyYW1zSWQgOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogRG9jdW1lbnRzQWRkRnJvbUVudHJ5QWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAnbycsIHJlc3BvbnNlU3ViVHlwZSA6ICdLYWx0dXJhRG9jdW1lbnRFbnRyeScsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBLYWx0dXJhRG9jdW1lbnRFbnRyeSAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnZG9jdW1lbnRfZG9jdW1lbnRzJyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnYWRkRnJvbUVudHJ5JyB9LFxuXHRcdFx0XHRzb3VyY2VFbnRyeUlkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGRvY3VtZW50RW50cnkgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFEb2N1bWVudEVudHJ5LCBzdWJUeXBlIDogJ0thbHR1cmFEb2N1bWVudEVudHJ5JyB9LFxuXHRcdFx0XHRzb3VyY2VGbGF2b3JQYXJhbXNJZCA6IHsgdHlwZSA6ICduJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=