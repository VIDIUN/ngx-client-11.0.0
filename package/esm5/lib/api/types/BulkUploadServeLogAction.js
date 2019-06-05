/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaFileRequest } from '../kaltura-file-request';
/**
 * @record
 */
export function BulkUploadServeLogActionArgs() { }
/** @type {?} */
BulkUploadServeLogActionArgs.prototype.id;
/**
 * Build request payload for service 'bulkUpload' action 'serveLog'.
 *
 * Usage: serveLog action returan the original file
 *
 * Server response type:         { url: string }
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'bulkUpload' action 'serveLog'.
 *
 * Usage: serveLog action returan the original file
 *
 * Server response type:         { url: string }
 * Server failure response type: KalturaAPIException
 */
BulkUploadServeLogAction = /** @class */ (function (_super) {
    tslib_1.__extends(BulkUploadServeLogAction, _super);
    function BulkUploadServeLogAction(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    BulkUploadServeLogAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'bulkupload' },
            action: { type: 'c', default: 'serveLog' },
            id: { type: 'n' }
        });
        return result;
    };
    return BulkUploadServeLogAction;
}(KalturaFileRequest));
/**
 * Build request payload for service 'bulkUpload' action 'serveLog'.
 *
 * Usage: serveLog action returan the original file
 *
 * Server response type:         { url: string }
 * Server failure response type: KalturaAPIException
 */
export { BulkUploadServeLogAction };
if (false) {
    /** @type {?} */
    BulkUploadServeLogAction.prototype.id;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQnVsa1VwbG9hZFNlcnZlTG9nQWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9CdWxrVXBsb2FkU2VydmVMb2dBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFJQSxPQUFPLEVBQUUsa0JBQWtCLEVBQTBCLE1BQU0seUJBQXlCLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQWNyRjs7Ozs7Ozs7QUFBQTtJQUE4QyxvREFBa0I7SUFJNUQsa0NBQVksSUFBbUM7ZUFFM0Msa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUywrQ0FBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxZQUFZLEVBQUU7WUFDNUQsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsVUFBVSxFQUFFO1lBQzdDLEVBQUUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDVixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO21DQXZDTDtFQWtCOEMsa0JBQWtCLEVBc0IvRCxDQUFBOzs7Ozs7Ozs7QUF0QkQsb0NBc0JDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcblxuXG5pbXBvcnQgeyBLYWx0dXJhRmlsZVJlcXVlc3QsIEthbHR1cmFGaWxlUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLWZpbGUtcmVxdWVzdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQnVsa1VwbG9hZFNlcnZlTG9nQWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhRmlsZVJlcXVlc3RBcmdzIHtcbiAgICBpZCA6IG51bWJlcjtcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ2J1bGtVcGxvYWQnIGFjdGlvbiAnc2VydmVMb2cnLlxuICpcbiAqIFVzYWdlOiBzZXJ2ZUxvZyBhY3Rpb24gcmV0dXJhbiB0aGUgb3JpZ2luYWwgZmlsZVxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIHsgdXJsOiBzdHJpbmcgfVxuICogU2VydmVyIGZhaWx1cmUgcmVzcG9uc2UgdHlwZTogS2FsdHVyYUFQSUV4Y2VwdGlvblxuICovXG5leHBvcnQgY2xhc3MgQnVsa1VwbG9hZFNlcnZlTG9nQWN0aW9uIGV4dGVuZHMgS2FsdHVyYUZpbGVSZXF1ZXN0IHtcblxuICAgIGlkIDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YSA6IEJ1bGtVcGxvYWRTZXJ2ZUxvZ0FjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VydmljZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdidWxrdXBsb2FkJyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnc2VydmVMb2cnIH0sXG5cdFx0XHRcdGlkIDogeyB0eXBlIDogJ24nIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==