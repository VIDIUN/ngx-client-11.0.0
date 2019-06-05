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
export function DocumentsAddFromFlavorAssetActionArgs() { }
/** @type {?} */
DocumentsAddFromFlavorAssetActionArgs.prototype.sourceFlavorAssetId;
/** @type {?|undefined} */
DocumentsAddFromFlavorAssetActionArgs.prototype.documentEntry;
/**
 * Build request payload for service 'documents' action 'addFromFlavorAsset'.
 *
 * Usage: Copy flavor asset into new entry
 *
 * Server response type:         KalturaDocumentEntry
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'documents' action 'addFromFlavorAsset'.
 *
 * Usage: Copy flavor asset into new entry
 *
 * Server response type:         KalturaDocumentEntry
 * Server failure response type: KalturaAPIException
 */
DocumentsAddFromFlavorAssetAction = /** @class */ (function (_super) {
    tslib_1.__extends(DocumentsAddFromFlavorAssetAction, _super);
    function DocumentsAddFromFlavorAssetAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaDocumentEntry', responseConstructor: KalturaDocumentEntry }) || this;
    }
    /**
     * @return {?}
     */
    DocumentsAddFromFlavorAssetAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'document_documents' },
            action: { type: 'c', default: 'addFromFlavorAsset' },
            sourceFlavorAssetId: { type: 's' },
            documentEntry: { type: 'o', subTypeConstructor: KalturaDocumentEntry, subType: 'KalturaDocumentEntry' }
        });
        return result;
    };
    return DocumentsAddFromFlavorAssetAction;
}(KalturaRequest));
/**
 * Build request payload for service 'documents' action 'addFromFlavorAsset'.
 *
 * Usage: Copy flavor asset into new entry
 *
 * Server response type:         KalturaDocumentEntry
 * Server failure response type: KalturaAPIException
 */
export { DocumentsAddFromFlavorAssetAction };
if (false) {
    /** @type {?} */
    DocumentsAddFromFlavorAssetAction.prototype.sourceFlavorAssetId;
    /** @type {?} */
    DocumentsAddFromFlavorAssetAction.prototype.documentEntry;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG9jdW1lbnRzQWRkRnJvbUZsYXZvckFzc2V0QWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9Eb2N1bWVudHNBZGRGcm9tRmxhdm9yQXNzZXRBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUU5RCxPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQWV4RTs7Ozs7Ozs7QUFBQTtJQUF1RCw2REFBb0M7SUFLdkYsMkNBQVksSUFBNEM7ZUFFcEQsa0JBQU0sSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcsc0JBQXNCLEVBQUUsbUJBQW1CLEVBQUcsb0JBQW9CLEVBQUcsQ0FBQztLQUM1SDs7OztJQUVTLHdEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLG9CQUFvQixFQUFFO1lBQ3BFLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLG9CQUFvQixFQUFFO1lBQ3ZELG1CQUFtQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNwQyxhQUFhLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLG9CQUFvQixFQUFFLE9BQU8sRUFBRyxzQkFBc0IsRUFBRTtTQUNsRyxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCOzRDQTFDTDtFQW1CdUQsY0FBYyxFQXdCcEUsQ0FBQTs7Ozs7Ozs7O0FBeEJELDZDQXdCQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhRG9jdW1lbnRFbnRyeSB9IGZyb20gJy4vS2FsdHVyYURvY3VtZW50RW50cnknO1xuXG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBEb2N1bWVudHNBZGRGcm9tRmxhdm9yQXNzZXRBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAgc291cmNlRmxhdm9yQXNzZXRJZCA6IHN0cmluZztcblx0ZG9jdW1lbnRFbnRyeT8gOiBLYWx0dXJhRG9jdW1lbnRFbnRyeTtcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ2RvY3VtZW50cycgYWN0aW9uICdhZGRGcm9tRmxhdm9yQXNzZXQnLlxuICpcbiAqIFVzYWdlOiBDb3B5IGZsYXZvciBhc3NldCBpbnRvIG5ldyBlbnRyeVxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIEthbHR1cmFEb2N1bWVudEVudHJ5XG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBEb2N1bWVudHNBZGRGcm9tRmxhdm9yQXNzZXRBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdDxLYWx0dXJhRG9jdW1lbnRFbnRyeT4ge1xuXG4gICAgc291cmNlRmxhdm9yQXNzZXRJZCA6IHN0cmluZztcblx0ZG9jdW1lbnRFbnRyeSA6IEthbHR1cmFEb2N1bWVudEVudHJ5O1xuXG4gICAgY29uc3RydWN0b3IoZGF0YSA6IERvY3VtZW50c0FkZEZyb21GbGF2b3JBc3NldEFjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ28nLCByZXNwb25zZVN1YlR5cGUgOiAnS2FsdHVyYURvY3VtZW50RW50cnknLCByZXNwb25zZUNvbnN0cnVjdG9yIDogS2FsdHVyYURvY3VtZW50RW50cnkgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2RvY3VtZW50X2RvY3VtZW50cycgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2FkZEZyb21GbGF2b3JBc3NldCcgfSxcblx0XHRcdFx0c291cmNlRmxhdm9yQXNzZXRJZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRkb2N1bWVudEVudHJ5IDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRG9jdW1lbnRFbnRyeSwgc3ViVHlwZSA6ICdLYWx0dXJhRG9jdW1lbnRFbnRyeScgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuIl19