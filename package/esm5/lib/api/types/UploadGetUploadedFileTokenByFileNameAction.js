/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaUploadResponse } from './KalturaUploadResponse';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function UploadGetUploadedFileTokenByFileNameActionArgs() { }
/** @type {?} */
UploadGetUploadedFileTokenByFileNameActionArgs.prototype.fileName;
/**
 * Build request payload for service 'upload' action 'getUploadedFileTokenByFileName'.
 *
 *
 *
 * Server response type:         KalturaUploadResponse
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'upload' action 'getUploadedFileTokenByFileName'.
 *
 *
 *
 * Server response type:         KalturaUploadResponse
 * Server failure response type: KalturaAPIException
 */
UploadGetUploadedFileTokenByFileNameAction = /** @class */ (function (_super) {
    tslib_1.__extends(UploadGetUploadedFileTokenByFileNameAction, _super);
    function UploadGetUploadedFileTokenByFileNameAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaUploadResponse', responseConstructor: KalturaUploadResponse }) || this;
    }
    /**
     * @return {?}
     */
    UploadGetUploadedFileTokenByFileNameAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'upload' },
            action: { type: 'c', default: 'getUploadedFileTokenByFileName' },
            fileName: { type: 's' }
        });
        return result;
    };
    return UploadGetUploadedFileTokenByFileNameAction;
}(KalturaRequest));
/**
 * Build request payload for service 'upload' action 'getUploadedFileTokenByFileName'.
 *
 *
 *
 * Server response type:         KalturaUploadResponse
 * Server failure response type: KalturaAPIException
 */
export { UploadGetUploadedFileTokenByFileNameAction };
if (false) {
    /** @type {?} */
    UploadGetUploadedFileTokenByFileNameAction.prototype.fileName;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXBsb2FkR2V0VXBsb2FkZWRGaWxlVG9rZW5CeUZpbGVOYW1lQWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9VcGxvYWRHZXRVcGxvYWRlZEZpbGVUb2tlbkJ5RmlsZU5hbWVBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUVoRSxPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUFjeEU7Ozs7Ozs7O0FBQUE7SUFBZ0Usc0VBQXFDO0lBSWpHLG9EQUFZLElBQXFEO2VBRTdELGtCQUFNLElBQUksRUFBRSxFQUFDLFlBQVksRUFBRyxHQUFHLEVBQUUsZUFBZSxFQUFHLHVCQUF1QixFQUFFLG1CQUFtQixFQUFHLHFCQUFxQixFQUFHLENBQUM7S0FDOUg7Ozs7SUFFUyxpRUFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxRQUFRLEVBQUU7WUFDeEQsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsZ0NBQWdDLEVBQUU7WUFDbkUsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNoQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO3FEQXZDTDtFQWtCZ0UsY0FBYyxFQXNCN0UsQ0FBQTs7Ozs7Ozs7O0FBdEJELHNEQXNCQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhVXBsb2FkUmVzcG9uc2UgfSBmcm9tICcuL0thbHR1cmFVcGxvYWRSZXNwb25zZSc7XG5cbmltcG9ydCB7IEthbHR1cmFSZXF1ZXN0LCBLYWx0dXJhUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFVwbG9hZEdldFVwbG9hZGVkRmlsZVRva2VuQnlGaWxlTmFtZUFjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3RBcmdzIHtcbiAgICBmaWxlTmFtZSA6IHN0cmluZztcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ3VwbG9hZCcgYWN0aW9uICdnZXRVcGxvYWRlZEZpbGVUb2tlbkJ5RmlsZU5hbWUnLlxuICpcbiAqIFxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIEthbHR1cmFVcGxvYWRSZXNwb25zZVxuICogU2VydmVyIGZhaWx1cmUgcmVzcG9uc2UgdHlwZTogS2FsdHVyYUFQSUV4Y2VwdGlvblxuICovXG5leHBvcnQgY2xhc3MgVXBsb2FkR2V0VXBsb2FkZWRGaWxlVG9rZW5CeUZpbGVOYW1lQWN0aW9uIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3Q8S2FsdHVyYVVwbG9hZFJlc3BvbnNlPiB7XG5cbiAgICBmaWxlTmFtZSA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBVcGxvYWRHZXRVcGxvYWRlZEZpbGVUb2tlbkJ5RmlsZU5hbWVBY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSwge3Jlc3BvbnNlVHlwZSA6ICdvJywgcmVzcG9uc2VTdWJUeXBlIDogJ0thbHR1cmFVcGxvYWRSZXNwb25zZScsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBLYWx0dXJhVXBsb2FkUmVzcG9uc2UgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ3VwbG9hZCcgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2dldFVwbG9hZGVkRmlsZVRva2VuQnlGaWxlTmFtZScgfSxcblx0XHRcdFx0ZmlsZU5hbWUgOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuIl19