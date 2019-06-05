/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { KalturaUploadRequest } from '../kaltura-upload-request';
/**
 * @record
 */
export function DocumentsUploadActionArgs() { }
/** @type {?} */
DocumentsUploadActionArgs.prototype.fileData;
/**
 * Build request payload for service 'documents' action 'upload'.
 *
 * Usage: Upload a document file to Kaltura, then the file can be used to create a document entry
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 */
export class DocumentsUploadAction extends KalturaUploadRequest {
    /**
     * @param {?} data
     */
    constructor(data) {
        super(data, { responseType: 's', responseSubType: '', responseConstructor: null });
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            service: { type: 'c', default: 'document_documents' },
            action: { type: 'c', default: 'upload' },
            fileData: { type: 'f' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    DocumentsUploadAction.prototype.fileData;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG9jdW1lbnRzVXBsb2FkQWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9Eb2N1bWVudHNVcGxvYWRBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUlBLE9BQU8sRUFBRSxvQkFBb0IsRUFBNEIsTUFBTSwyQkFBMkIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FBYzNGLE1BQU0sNEJBQTZCLFNBQVEsb0JBQTRCOzs7O0lBSW5FLFlBQVksSUFBZ0M7UUFFeEMsS0FBSyxDQUFDLElBQUksRUFBRSxFQUFDLFlBQVksRUFBRyxHQUFHLEVBQUUsZUFBZSxFQUFHLEVBQUUsRUFBRSxtQkFBbUIsRUFBRyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0tBQ3hGOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxvQkFBb0IsRUFBRTtZQUNwRSxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxRQUFRLEVBQUU7WUFDM0MsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNoQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuXG5cbmltcG9ydCB7IEthbHR1cmFVcGxvYWRSZXF1ZXN0LCBLYWx0dXJhVXBsb2FkUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLXVwbG9hZC1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBEb2N1bWVudHNVcGxvYWRBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFVcGxvYWRSZXF1ZXN0QXJncyB7XG4gICAgZmlsZURhdGEgOiBGaWxlO1xufVxuXG4vKipcbiAqIEJ1aWxkIHJlcXVlc3QgcGF5bG9hZCBmb3Igc2VydmljZSAnZG9jdW1lbnRzJyBhY3Rpb24gJ3VwbG9hZCcuXG4gKlxuICogVXNhZ2U6IFVwbG9hZCBhIGRvY3VtZW50IGZpbGUgdG8gS2FsdHVyYSwgdGhlbiB0aGUgZmlsZSBjYW4gYmUgdXNlZCB0byBjcmVhdGUgYSBkb2N1bWVudCBlbnRyeVxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIHN0cmluZ1xuICogU2VydmVyIGZhaWx1cmUgcmVzcG9uc2UgdHlwZTogS2FsdHVyYUFQSUV4Y2VwdGlvblxuICovXG5leHBvcnQgY2xhc3MgRG9jdW1lbnRzVXBsb2FkQWN0aW9uIGV4dGVuZHMgS2FsdHVyYVVwbG9hZFJlcXVlc3Q8c3RyaW5nPiB7XG5cbiAgICBmaWxlRGF0YSA6IEZpbGU7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogRG9jdW1lbnRzVXBsb2FkQWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAncycsIHJlc3BvbnNlU3ViVHlwZSA6ICcnLCByZXNwb25zZUNvbnN0cnVjdG9yIDogbnVsbCB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VydmljZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdkb2N1bWVudF9kb2N1bWVudHMnIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICd1cGxvYWQnIH0sXG5cdFx0XHRcdGZpbGVEYXRhIDogeyB0eXBlIDogJ2YnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==