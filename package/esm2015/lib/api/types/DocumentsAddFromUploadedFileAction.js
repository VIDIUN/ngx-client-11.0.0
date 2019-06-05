/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
export class DocumentsAddFromUploadedFileAction extends KalturaRequest {
    /**
     * @param {?} data
     */
    constructor(data) {
        super(data, { responseType: 'o', responseSubType: 'KalturaDocumentEntry', responseConstructor: KalturaDocumentEntry });
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            service: { type: 'c', default: 'document_documents' },
            action: { type: 'c', default: 'addFromUploadedFile' },
            documentEntry: { type: 'o', subTypeConstructor: KalturaDocumentEntry, subType: 'KalturaDocumentEntry' },
            uploadTokenId: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    DocumentsAddFromUploadedFileAction.prototype.documentEntry;
    /** @type {?} */
    DocumentsAddFromUploadedFileAction.prototype.uploadTokenId;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG9jdW1lbnRzQWRkRnJvbVVwbG9hZGVkRmlsZUFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvRG9jdW1lbnRzQWRkRnJvbVVwbG9hZGVkRmlsZUFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFOUQsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFleEUsTUFBTSx5Q0FBMEMsU0FBUSxjQUFvQzs7OztJQUt4RixZQUFZLElBQTZDO1FBRXJELEtBQUssQ0FBQyxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRyxzQkFBc0IsRUFBRSxtQkFBbUIsRUFBRyxvQkFBb0IsRUFBRyxDQUFDLENBQUM7S0FDN0g7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLG9CQUFvQixFQUFFO1lBQ3BFLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHFCQUFxQixFQUFFO1lBQ3hELGFBQWEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsb0JBQW9CLEVBQUUsT0FBTyxFQUFHLHNCQUFzQixFQUFFO1lBQzNHLGFBQWEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDckIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFEb2N1bWVudEVudHJ5IH0gZnJvbSAnLi9LYWx0dXJhRG9jdW1lbnRFbnRyeSc7XG5cbmltcG9ydCB7IEthbHR1cmFSZXF1ZXN0LCBLYWx0dXJhUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIERvY3VtZW50c0FkZEZyb21VcGxvYWRlZEZpbGVBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAgZG9jdW1lbnRFbnRyeSA6IEthbHR1cmFEb2N1bWVudEVudHJ5O1xuXHR1cGxvYWRUb2tlbklkIDogc3RyaW5nO1xufVxuXG4vKipcbiAqIEJ1aWxkIHJlcXVlc3QgcGF5bG9hZCBmb3Igc2VydmljZSAnZG9jdW1lbnRzJyBhY3Rpb24gJ2FkZEZyb21VcGxvYWRlZEZpbGUnLlxuICpcbiAqIFVzYWdlOiBBZGQgbmV3IGRvY3VtZW50IGVudHJ5IGFmdGVyIHRoZSBzcGVjaWZpYyBkb2N1bWVudCBmaWxlIHdhcyB1cGxvYWRlZCBhbmQgdGhlIHVwbG9hZCB0b2tlbiBpZCBleGlzdHNcbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICBLYWx0dXJhRG9jdW1lbnRFbnRyeVxuICogU2VydmVyIGZhaWx1cmUgcmVzcG9uc2UgdHlwZTogS2FsdHVyYUFQSUV4Y2VwdGlvblxuICovXG5leHBvcnQgY2xhc3MgRG9jdW1lbnRzQWRkRnJvbVVwbG9hZGVkRmlsZUFjdGlvbiBleHRlbmRzIEthbHR1cmFSZXF1ZXN0PEthbHR1cmFEb2N1bWVudEVudHJ5PiB7XG5cbiAgICBkb2N1bWVudEVudHJ5IDogS2FsdHVyYURvY3VtZW50RW50cnk7XG5cdHVwbG9hZFRva2VuSWQgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogRG9jdW1lbnRzQWRkRnJvbVVwbG9hZGVkRmlsZUFjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ28nLCByZXNwb25zZVN1YlR5cGUgOiAnS2FsdHVyYURvY3VtZW50RW50cnknLCByZXNwb25zZUNvbnN0cnVjdG9yIDogS2FsdHVyYURvY3VtZW50RW50cnkgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2RvY3VtZW50X2RvY3VtZW50cycgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2FkZEZyb21VcGxvYWRlZEZpbGUnIH0sXG5cdFx0XHRcdGRvY3VtZW50RW50cnkgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFEb2N1bWVudEVudHJ5LCBzdWJUeXBlIDogJ0thbHR1cmFEb2N1bWVudEVudHJ5JyB9LFxuXHRcdFx0XHR1cGxvYWRUb2tlbklkIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==