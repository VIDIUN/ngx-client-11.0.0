/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaUploadToken } from './KalturaUploadToken';
import { KalturaUploadRequest } from '../kaltura-upload-request';
/**
 * @record
 */
export function UploadTokenUploadActionArgs() { }
/** @type {?} */
UploadTokenUploadActionArgs.prototype.uploadTokenId;
/** @type {?} */
UploadTokenUploadActionArgs.prototype.fileData;
/** @type {?|undefined} */
UploadTokenUploadActionArgs.prototype.resume;
/** @type {?|undefined} */
UploadTokenUploadActionArgs.prototype.finalChunk;
/** @type {?|undefined} */
UploadTokenUploadActionArgs.prototype.resumeAt;
/**
 * Build request payload for service 'uploadToken' action 'upload'.
 *
 * Usage: Upload a file using the upload token id, returns an error on failure (an exception will be thrown when using one of the Kaltura clients)
 * Chunks can be uploaded in parallel and they will be appended according to their resumeAt position.
 * A parallel upload session should have three stages:
 * 1. A single upload with resume=false and finalChunk=false
 * 2. Parallel upload requests each with resume=true,finalChunk=false and the expected resumetAt position.
 * If a chunk fails to upload it can be re-uploaded.
 * 3. After all of the chunks have been uploaded a final chunk (can be of zero size) should be uploaded
 * with resume=true, finalChunk=true and the expected resumeAt position. In case an UPLOAD_TOKEN_CANNOT_MATCH_EXPECTED_SIZE exception
 * has been returned (indicating not all of the chunks were appended yet) the final request can be retried
 *
 * Server response type:         KalturaUploadToken
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'uploadToken' action 'upload'.
 *
 * Usage: Upload a file using the upload token id, returns an error on failure (an exception will be thrown when using one of the Kaltura clients)
 * Chunks can be uploaded in parallel and they will be appended according to their resumeAt position.
 * A parallel upload session should have three stages:
 * 1. A single upload with resume=false and finalChunk=false
 * 2. Parallel upload requests each with resume=true,finalChunk=false and the expected resumetAt position.
 * If a chunk fails to upload it can be re-uploaded.
 * 3. After all of the chunks have been uploaded a final chunk (can be of zero size) should be uploaded
 * with resume=true, finalChunk=true and the expected resumeAt position. In case an UPLOAD_TOKEN_CANNOT_MATCH_EXPECTED_SIZE exception
 * has been returned (indicating not all of the chunks were appended yet) the final request can be retried
 *
 * Server response type:         KalturaUploadToken
 * Server failure response type: KalturaAPIException
 */
UploadTokenUploadAction = /** @class */ (function (_super) {
    tslib_1.__extends(UploadTokenUploadAction, _super);
    function UploadTokenUploadAction(data) {
        var _this = _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaUploadToken', responseConstructor: KalturaUploadToken }) || this;
        if (typeof _this.resume === 'undefined')
            _this.resume = false;
        if (typeof _this.finalChunk === 'undefined')
            _this.finalChunk = true;
        if (typeof _this.resumeAt === 'undefined')
            _this.resumeAt = -1;
        return _this;
    }
    /**
     * @return {?}
     */
    UploadTokenUploadAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'uploadtoken' },
            action: { type: 'c', default: 'upload' },
            uploadTokenId: { type: 's' },
            fileData: { type: 'f' },
            resume: { type: 'b' },
            finalChunk: { type: 'b' },
            resumeAt: { type: 'n' }
        });
        return result;
    };
    return UploadTokenUploadAction;
}(KalturaUploadRequest));
/**
 * Build request payload for service 'uploadToken' action 'upload'.
 *
 * Usage: Upload a file using the upload token id, returns an error on failure (an exception will be thrown when using one of the Kaltura clients)
 * Chunks can be uploaded in parallel and they will be appended according to their resumeAt position.
 * A parallel upload session should have three stages:
 * 1. A single upload with resume=false and finalChunk=false
 * 2. Parallel upload requests each with resume=true,finalChunk=false and the expected resumetAt position.
 * If a chunk fails to upload it can be re-uploaded.
 * 3. After all of the chunks have been uploaded a final chunk (can be of zero size) should be uploaded
 * with resume=true, finalChunk=true and the expected resumeAt position. In case an UPLOAD_TOKEN_CANNOT_MATCH_EXPECTED_SIZE exception
 * has been returned (indicating not all of the chunks were appended yet) the final request can be retried
 *
 * Server response type:         KalturaUploadToken
 * Server failure response type: KalturaAPIException
 */
export { UploadTokenUploadAction };
if (false) {
    /** @type {?} */
    UploadTokenUploadAction.prototype.uploadTokenId;
    /** @type {?} */
    UploadTokenUploadAction.prototype.fileData;
    /** @type {?} */
    UploadTokenUploadAction.prototype.resume;
    /** @type {?} */
    UploadTokenUploadAction.prototype.finalChunk;
    /** @type {?} */
    UploadTokenUploadAction.prototype.resumeAt;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXBsb2FkVG9rZW5VcGxvYWRBY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL1VwbG9hZFRva2VuVXBsb2FkQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFMUQsT0FBTyxFQUFFLG9CQUFvQixFQUE0QixNQUFNLDJCQUEyQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMEIzRjs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0lBQTZDLG1EQUF3QztJQVFqRixpQ0FBWSxJQUFrQztRQUE5QyxZQUVJLGtCQUFNLElBQUksRUFBRSxFQUFDLFlBQVksRUFBRyxHQUFHLEVBQUUsZUFBZSxFQUFHLG9CQUFvQixFQUFFLG1CQUFtQixFQUFHLGtCQUFrQixFQUFHLENBQUMsU0FJeEg7UUFIRyxFQUFFLENBQUMsQ0FBQyxPQUFPLEtBQUksQ0FBQyxNQUFNLEtBQUssV0FBVyxDQUFDO1lBQUMsS0FBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDbEUsRUFBRSxDQUFDLENBQUMsT0FBTyxLQUFJLENBQUMsVUFBVSxLQUFLLFdBQVcsQ0FBQztZQUFDLEtBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ25FLEVBQUUsQ0FBQyxDQUFDLE9BQU8sS0FBSSxDQUFDLFFBQVEsS0FBSyxXQUFXLENBQUM7WUFBQyxLQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDOztLQUMxRDs7OztJQUVTLDhDQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGFBQWEsRUFBRTtZQUM3RCxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxRQUFRLEVBQUU7WUFDM0MsYUFBYSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM5QixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDdkIsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMzQixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ2hCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7a0NBOURMO0VBOEI2QyxvQkFBb0IsRUFpQ2hFLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBakNELG1DQWlDQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhVXBsb2FkVG9rZW4gfSBmcm9tICcuL0thbHR1cmFVcGxvYWRUb2tlbic7XG5cbmltcG9ydCB7IEthbHR1cmFVcGxvYWRSZXF1ZXN0LCBLYWx0dXJhVXBsb2FkUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLXVwbG9hZC1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBVcGxvYWRUb2tlblVwbG9hZEFjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVVwbG9hZFJlcXVlc3RBcmdzIHtcbiAgICB1cGxvYWRUb2tlbklkIDogc3RyaW5nO1xuXHRmaWxlRGF0YSA6IEZpbGU7XG5cdHJlc3VtZT8gOiBib29sZWFuO1xuXHRmaW5hbENodW5rPyA6IGJvb2xlYW47XG5cdHJlc3VtZUF0PyA6IG51bWJlcjtcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ3VwbG9hZFRva2VuJyBhY3Rpb24gJ3VwbG9hZCcuXG4gKlxuICogVXNhZ2U6IFVwbG9hZCBhIGZpbGUgdXNpbmcgdGhlIHVwbG9hZCB0b2tlbiBpZCwgcmV0dXJucyBhbiBlcnJvciBvbiBmYWlsdXJlIChhbiBleGNlcHRpb24gd2lsbCBiZSB0aHJvd24gd2hlbiB1c2luZyBvbmUgb2YgdGhlIEthbHR1cmEgY2xpZW50cylcbiAqIENodW5rcyBjYW4gYmUgdXBsb2FkZWQgaW4gcGFyYWxsZWwgYW5kIHRoZXkgd2lsbCBiZSBhcHBlbmRlZCBhY2NvcmRpbmcgdG8gdGhlaXIgcmVzdW1lQXQgcG9zaXRpb24uXG4gKiBBIHBhcmFsbGVsIHVwbG9hZCBzZXNzaW9uIHNob3VsZCBoYXZlIHRocmVlIHN0YWdlczpcbiAqIDEuIEEgc2luZ2xlIHVwbG9hZCB3aXRoIHJlc3VtZT1mYWxzZSBhbmQgZmluYWxDaHVuaz1mYWxzZVxuICogMi4gUGFyYWxsZWwgdXBsb2FkIHJlcXVlc3RzIGVhY2ggd2l0aCByZXN1bWU9dHJ1ZSxmaW5hbENodW5rPWZhbHNlIGFuZCB0aGUgZXhwZWN0ZWQgcmVzdW1ldEF0IHBvc2l0aW9uLlxuICogSWYgYSBjaHVuayBmYWlscyB0byB1cGxvYWQgaXQgY2FuIGJlIHJlLXVwbG9hZGVkLlxuICogMy4gQWZ0ZXIgYWxsIG9mIHRoZSBjaHVua3MgaGF2ZSBiZWVuIHVwbG9hZGVkIGEgZmluYWwgY2h1bmsgKGNhbiBiZSBvZiB6ZXJvIHNpemUpIHNob3VsZCBiZSB1cGxvYWRlZFxuICogd2l0aCByZXN1bWU9dHJ1ZSwgZmluYWxDaHVuaz10cnVlIGFuZCB0aGUgZXhwZWN0ZWQgcmVzdW1lQXQgcG9zaXRpb24uIEluIGNhc2UgYW4gVVBMT0FEX1RPS0VOX0NBTk5PVF9NQVRDSF9FWFBFQ1RFRF9TSVpFIGV4Y2VwdGlvblxuICogaGFzIGJlZW4gcmV0dXJuZWQgKGluZGljYXRpbmcgbm90IGFsbCBvZiB0aGUgY2h1bmtzIHdlcmUgYXBwZW5kZWQgeWV0KSB0aGUgZmluYWwgcmVxdWVzdCBjYW4gYmUgcmV0cmllZFxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIEthbHR1cmFVcGxvYWRUb2tlblxuICogU2VydmVyIGZhaWx1cmUgcmVzcG9uc2UgdHlwZTogS2FsdHVyYUFQSUV4Y2VwdGlvblxuICovXG5leHBvcnQgY2xhc3MgVXBsb2FkVG9rZW5VcGxvYWRBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhVXBsb2FkUmVxdWVzdDxLYWx0dXJhVXBsb2FkVG9rZW4+IHtcblxuICAgIHVwbG9hZFRva2VuSWQgOiBzdHJpbmc7XG5cdGZpbGVEYXRhIDogRmlsZTtcblx0cmVzdW1lIDogYm9vbGVhbjtcblx0ZmluYWxDaHVuayA6IGJvb2xlYW47XG5cdHJlc3VtZUF0IDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YSA6IFVwbG9hZFRva2VuVXBsb2FkQWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAnbycsIHJlc3BvbnNlU3ViVHlwZSA6ICdLYWx0dXJhVXBsb2FkVG9rZW4nLCByZXNwb25zZUNvbnN0cnVjdG9yIDogS2FsdHVyYVVwbG9hZFRva2VuICB9KTtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnJlc3VtZSA9PT0gJ3VuZGVmaW5lZCcpIHRoaXMucmVzdW1lID0gZmFsc2U7XG5cdFx0aWYgKHR5cGVvZiB0aGlzLmZpbmFsQ2h1bmsgPT09ICd1bmRlZmluZWQnKSB0aGlzLmZpbmFsQ2h1bmsgPSB0cnVlO1xuXHRcdGlmICh0eXBlb2YgdGhpcy5yZXN1bWVBdCA9PT0gJ3VuZGVmaW5lZCcpIHRoaXMucmVzdW1lQXQgPSAtMTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VydmljZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICd1cGxvYWR0b2tlbicgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ3VwbG9hZCcgfSxcblx0XHRcdFx0dXBsb2FkVG9rZW5JZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRmaWxlRGF0YSA6IHsgdHlwZSA6ICdmJyB9LFxuXHRcdFx0XHRyZXN1bWUgOiB7IHR5cGUgOiAnYicgfSxcblx0XHRcdFx0ZmluYWxDaHVuayA6IHsgdHlwZSA6ICdiJyB9LFxuXHRcdFx0XHRyZXN1bWVBdCA6IHsgdHlwZSA6ICduJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=