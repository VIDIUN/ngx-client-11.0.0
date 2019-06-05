/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var /**
 * Build request payload for service 'documents' action 'upload'.
 *
 * Usage: Upload a document file to Kaltura, then the file can be used to create a document entry
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 */
DocumentsUploadAction = /** @class */ (function (_super) {
    tslib_1.__extends(DocumentsUploadAction, _super);
    function DocumentsUploadAction(data) {
        return _super.call(this, data, { responseType: 's', responseSubType: '', responseConstructor: null }) || this;
    }
    /**
     * @return {?}
     */
    DocumentsUploadAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'document_documents' },
            action: { type: 'c', default: 'upload' },
            fileData: { type: 'f' }
        });
        return result;
    };
    return DocumentsUploadAction;
}(KalturaUploadRequest));
/**
 * Build request payload for service 'documents' action 'upload'.
 *
 * Usage: Upload a document file to Kaltura, then the file can be used to create a document entry
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 */
export { DocumentsUploadAction };
if (false) {
    /** @type {?} */
    DocumentsUploadAction.prototype.fileData;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG9jdW1lbnRzVXBsb2FkQWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9Eb2N1bWVudHNVcGxvYWRBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFJQSxPQUFPLEVBQUUsb0JBQW9CLEVBQTRCLE1BQU0sMkJBQTJCLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQWMzRjs7Ozs7Ozs7QUFBQTtJQUEyQyxpREFBNEI7SUFJbkUsK0JBQVksSUFBZ0M7ZUFFeEMsa0JBQU0sSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcsRUFBRSxFQUFFLG1CQUFtQixFQUFHLElBQUksRUFBRSxDQUFDO0tBQ3ZGOzs7O0lBRVMsNENBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsb0JBQW9CLEVBQUU7WUFDcEUsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsUUFBUSxFQUFFO1lBQzNDLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDaEIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtnQ0F2Q0w7RUFrQjJDLG9CQUFvQixFQXNCOUQsQ0FBQTs7Ozs7Ozs7O0FBdEJELGlDQXNCQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5cblxuaW1wb3J0IHsgS2FsdHVyYVVwbG9hZFJlcXVlc3QsIEthbHR1cmFVcGxvYWRSZXF1ZXN0QXJncyB9IGZyb20gJy4uL2thbHR1cmEtdXBsb2FkLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIERvY3VtZW50c1VwbG9hZEFjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVVwbG9hZFJlcXVlc3RBcmdzIHtcbiAgICBmaWxlRGF0YSA6IEZpbGU7XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICdkb2N1bWVudHMnIGFjdGlvbiAndXBsb2FkJy5cbiAqXG4gKiBVc2FnZTogVXBsb2FkIGEgZG9jdW1lbnQgZmlsZSB0byBLYWx0dXJhLCB0aGVuIHRoZSBmaWxlIGNhbiBiZSB1c2VkIHRvIGNyZWF0ZSBhIGRvY3VtZW50IGVudHJ5XG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgc3RyaW5nXG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBEb2N1bWVudHNVcGxvYWRBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhVXBsb2FkUmVxdWVzdDxzdHJpbmc+IHtcblxuICAgIGZpbGVEYXRhIDogRmlsZTtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBEb2N1bWVudHNVcGxvYWRBY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSwge3Jlc3BvbnNlVHlwZSA6ICdzJywgcmVzcG9uc2VTdWJUeXBlIDogJycsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBudWxsIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2RvY3VtZW50X2RvY3VtZW50cycgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ3VwbG9hZCcgfSxcblx0XHRcdFx0ZmlsZURhdGEgOiB7IHR5cGUgOiAnZicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuIl19