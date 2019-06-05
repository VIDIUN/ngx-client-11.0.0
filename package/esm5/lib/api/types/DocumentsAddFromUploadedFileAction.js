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
export function DocumentsAddFromUploadedFileActionArgs() { }
/** @type {?} */
DocumentsAddFromUploadedFileActionArgs.prototype.documentEntry;
/** @type {?} */
DocumentsAddFromUploadedFileActionArgs.prototype.uploadTokenId;
/**
 * Build request payload for service 'documents' action 'addFromUploadedFile'.
 *
 * Usage: Add new document entry after the specific document file was uploaded and the upload token id exists
 *
 * Server response type:         KalturaDocumentEntry
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'documents' action 'addFromUploadedFile'.
 *
 * Usage: Add new document entry after the specific document file was uploaded and the upload token id exists
 *
 * Server response type:         KalturaDocumentEntry
 * Server failure response type: KalturaAPIException
 */
DocumentsAddFromUploadedFileAction = /** @class */ (function (_super) {
    tslib_1.__extends(DocumentsAddFromUploadedFileAction, _super);
    function DocumentsAddFromUploadedFileAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaDocumentEntry', responseConstructor: KalturaDocumentEntry }) || this;
    }
    /**
     * @return {?}
     */
    DocumentsAddFromUploadedFileAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'document_documents' },
            action: { type: 'c', default: 'addFromUploadedFile' },
            documentEntry: { type: 'o', subTypeConstructor: KalturaDocumentEntry, subType: 'KalturaDocumentEntry' },
            uploadTokenId: { type: 's' }
        });
        return result;
    };
    return DocumentsAddFromUploadedFileAction;
}(KalturaRequest));
/**
 * Build request payload for service 'documents' action 'addFromUploadedFile'.
 *
 * Usage: Add new document entry after the specific document file was uploaded and the upload token id exists
 *
 * Server response type:         KalturaDocumentEntry
 * Server failure response type: KalturaAPIException
 */
export { DocumentsAddFromUploadedFileAction };
if (false) {
    /** @type {?} */
    DocumentsAddFromUploadedFileAction.prototype.documentEntry;
    /** @type {?} */
    DocumentsAddFromUploadedFileAction.prototype.uploadTokenId;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG9jdW1lbnRzQWRkRnJvbVVwbG9hZGVkRmlsZUFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvRG9jdW1lbnRzQWRkRnJvbVVwbG9hZGVkRmlsZUFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRTlELE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZXhFOzs7Ozs7OztBQUFBO0lBQXdELDhEQUFvQztJQUt4Riw0Q0FBWSxJQUE2QztlQUVyRCxrQkFBTSxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRyxzQkFBc0IsRUFBRSxtQkFBbUIsRUFBRyxvQkFBb0IsRUFBRyxDQUFDO0tBQzVIOzs7O0lBRVMseURBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsb0JBQW9CLEVBQUU7WUFDcEUsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcscUJBQXFCLEVBQUU7WUFDeEQsYUFBYSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxvQkFBb0IsRUFBRSxPQUFPLEVBQUcsc0JBQXNCLEVBQUU7WUFDM0csYUFBYSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNyQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCOzZDQTFDTDtFQW1Cd0QsY0FBYyxFQXdCckUsQ0FBQTs7Ozs7Ozs7O0FBeEJELDhDQXdCQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhRG9jdW1lbnRFbnRyeSB9IGZyb20gJy4vS2FsdHVyYURvY3VtZW50RW50cnknO1xuXG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBEb2N1bWVudHNBZGRGcm9tVXBsb2FkZWRGaWxlQWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdEFyZ3Mge1xuICAgIGRvY3VtZW50RW50cnkgOiBLYWx0dXJhRG9jdW1lbnRFbnRyeTtcblx0dXBsb2FkVG9rZW5JZCA6IHN0cmluZztcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ2RvY3VtZW50cycgYWN0aW9uICdhZGRGcm9tVXBsb2FkZWRGaWxlJy5cbiAqXG4gKiBVc2FnZTogQWRkIG5ldyBkb2N1bWVudCBlbnRyeSBhZnRlciB0aGUgc3BlY2lmaWMgZG9jdW1lbnQgZmlsZSB3YXMgdXBsb2FkZWQgYW5kIHRoZSB1cGxvYWQgdG9rZW4gaWQgZXhpc3RzXG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgS2FsdHVyYURvY3VtZW50RW50cnlcbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIERvY3VtZW50c0FkZEZyb21VcGxvYWRlZEZpbGVBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdDxLYWx0dXJhRG9jdW1lbnRFbnRyeT4ge1xuXG4gICAgZG9jdW1lbnRFbnRyeSA6IEthbHR1cmFEb2N1bWVudEVudHJ5O1xuXHR1cGxvYWRUb2tlbklkIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YSA6IERvY3VtZW50c0FkZEZyb21VcGxvYWRlZEZpbGVBY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSwge3Jlc3BvbnNlVHlwZSA6ICdvJywgcmVzcG9uc2VTdWJUeXBlIDogJ0thbHR1cmFEb2N1bWVudEVudHJ5JywgcmVzcG9uc2VDb25zdHJ1Y3RvciA6IEthbHR1cmFEb2N1bWVudEVudHJ5ICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VydmljZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdkb2N1bWVudF9kb2N1bWVudHMnIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdhZGRGcm9tVXBsb2FkZWRGaWxlJyB9LFxuXHRcdFx0XHRkb2N1bWVudEVudHJ5IDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRG9jdW1lbnRFbnRyeSwgc3ViVHlwZSA6ICdLYWx0dXJhRG9jdW1lbnRFbnRyeScgfSxcblx0XHRcdFx0dXBsb2FkVG9rZW5JZCA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=