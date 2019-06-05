/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaFileRequest } from '../kaltura-file-request';
/**
 * @record
 */
export function DocumentsServeByFlavorParamsIdActionArgs() { }
/** @type {?} */
DocumentsServeByFlavorParamsIdActionArgs.prototype.entryId;
/** @type {?|undefined} */
DocumentsServeByFlavorParamsIdActionArgs.prototype.flavorParamsId;
/** @type {?|undefined} */
DocumentsServeByFlavorParamsIdActionArgs.prototype.forceProxy;
/**
 * Build request payload for service 'documents' action 'serveByFlavorParamsId'.
 *
 * Usage: Serves the file content
 *
 * Server response type:         { url: string }
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'documents' action 'serveByFlavorParamsId'.
 *
 * Usage: Serves the file content
 *
 * Server response type:         { url: string }
 * Server failure response type: KalturaAPIException
 */
DocumentsServeByFlavorParamsIdAction = /** @class */ (function (_super) {
    tslib_1.__extends(DocumentsServeByFlavorParamsIdAction, _super);
    function DocumentsServeByFlavorParamsIdAction(data) {
        var _this = _super.call(this, data) || this;
        if (typeof _this.forceProxy === 'undefined')
            _this.forceProxy = false;
        return _this;
    }
    /**
     * @return {?}
     */
    DocumentsServeByFlavorParamsIdAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'document_documents' },
            action: { type: 'c', default: 'serveByFlavorParamsId' },
            entryId: { type: 's' },
            flavorParamsId: { type: 's' },
            forceProxy: { type: 'b' }
        });
        return result;
    };
    return DocumentsServeByFlavorParamsIdAction;
}(KalturaFileRequest));
/**
 * Build request payload for service 'documents' action 'serveByFlavorParamsId'.
 *
 * Usage: Serves the file content
 *
 * Server response type:         { url: string }
 * Server failure response type: KalturaAPIException
 */
export { DocumentsServeByFlavorParamsIdAction };
if (false) {
    /** @type {?} */
    DocumentsServeByFlavorParamsIdAction.prototype.entryId;
    /** @type {?} */
    DocumentsServeByFlavorParamsIdAction.prototype.flavorParamsId;
    /** @type {?} */
    DocumentsServeByFlavorParamsIdAction.prototype.forceProxy;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG9jdW1lbnRzU2VydmVCeUZsYXZvclBhcmFtc0lkQWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9Eb2N1bWVudHNTZXJ2ZUJ5Rmxhdm9yUGFyYW1zSWRBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFJQSxPQUFPLEVBQUUsa0JBQWtCLEVBQTBCLE1BQU0seUJBQXlCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQnJGOzs7Ozs7OztBQUFBO0lBQTBELGdFQUFrQjtJQU14RSw4Q0FBWSxJQUErQztRQUEzRCxZQUVJLGtCQUFNLElBQUksQ0FBQyxTQUVkO1FBREcsRUFBRSxDQUFDLENBQUMsT0FBTyxLQUFJLENBQUMsVUFBVSxLQUFLLFdBQVcsQ0FBQztZQUFDLEtBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDOztLQUN2RTs7OztJQUVTLDJEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLG9CQUFvQixFQUFFO1lBQ3BFLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHVCQUF1QixFQUFFO1lBQzFELE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEIsY0FBYyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMvQixVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ2xCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7K0NBOUNMO0VBb0IwRCxrQkFBa0IsRUEyQjNFLENBQUE7Ozs7Ozs7OztBQTNCRCxnREEyQkMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuXG5cbmltcG9ydCB7IEthbHR1cmFGaWxlUmVxdWVzdCwgS2FsdHVyYUZpbGVSZXF1ZXN0QXJncyB9IGZyb20gJy4uL2thbHR1cmEtZmlsZS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBEb2N1bWVudHNTZXJ2ZUJ5Rmxhdm9yUGFyYW1zSWRBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFGaWxlUmVxdWVzdEFyZ3Mge1xuICAgIGVudHJ5SWQgOiBzdHJpbmc7XG5cdGZsYXZvclBhcmFtc0lkPyA6IHN0cmluZztcblx0Zm9yY2VQcm94eT8gOiBib29sZWFuO1xufVxuXG4vKipcbiAqIEJ1aWxkIHJlcXVlc3QgcGF5bG9hZCBmb3Igc2VydmljZSAnZG9jdW1lbnRzJyBhY3Rpb24gJ3NlcnZlQnlGbGF2b3JQYXJhbXNJZCcuXG4gKlxuICogVXNhZ2U6IFNlcnZlcyB0aGUgZmlsZSBjb250ZW50XG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgeyB1cmw6IHN0cmluZyB9XG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBEb2N1bWVudHNTZXJ2ZUJ5Rmxhdm9yUGFyYW1zSWRBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhRmlsZVJlcXVlc3Qge1xuXG4gICAgZW50cnlJZCA6IHN0cmluZztcblx0Zmxhdm9yUGFyYW1zSWQgOiBzdHJpbmc7XG5cdGZvcmNlUHJveHkgOiBib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YSA6IERvY3VtZW50c1NlcnZlQnlGbGF2b3JQYXJhbXNJZEFjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmZvcmNlUHJveHkgPT09ICd1bmRlZmluZWQnKSB0aGlzLmZvcmNlUHJveHkgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VydmljZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdkb2N1bWVudF9kb2N1bWVudHMnIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdzZXJ2ZUJ5Rmxhdm9yUGFyYW1zSWQnIH0sXG5cdFx0XHRcdGVudHJ5SWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Zmxhdm9yUGFyYW1zSWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Zm9yY2VQcm94eSA6IHsgdHlwZSA6ICdiJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=