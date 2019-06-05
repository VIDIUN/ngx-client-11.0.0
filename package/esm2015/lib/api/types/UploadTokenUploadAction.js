/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
export class UploadTokenUploadAction extends KalturaUploadRequest {
    /**
     * @param {?} data
     */
    constructor(data) {
        super(data, { responseType: 'o', responseSubType: 'KalturaUploadToken', responseConstructor: KalturaUploadToken });
        if (typeof this.resume === 'undefined')
            this.resume = false;
        if (typeof this.finalChunk === 'undefined')
            this.finalChunk = true;
        if (typeof this.resumeAt === 'undefined')
            this.resumeAt = -1;
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
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
    }
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXBsb2FkVG9rZW5VcGxvYWRBY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL1VwbG9hZFRva2VuVXBsb2FkQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUUxRCxPQUFPLEVBQUUsb0JBQW9CLEVBQTRCLE1BQU0sMkJBQTJCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwQjNGLE1BQU0sOEJBQStCLFNBQVEsb0JBQXdDOzs7O0lBUWpGLFlBQVksSUFBa0M7UUFFMUMsS0FBSyxDQUFDLElBQUksRUFBRSxFQUFDLFlBQVksRUFBRyxHQUFHLEVBQUUsZUFBZSxFQUFHLG9CQUFvQixFQUFFLG1CQUFtQixFQUFHLGtCQUFrQixFQUFHLENBQUMsQ0FBQztRQUN0SCxFQUFFLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxNQUFNLEtBQUssV0FBVyxDQUFDO1lBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDbEUsRUFBRSxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsVUFBVSxLQUFLLFdBQVcsQ0FBQztZQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ25FLEVBQUUsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLFFBQVEsS0FBSyxXQUFXLENBQUM7WUFBQyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDO0tBQzFEOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxhQUFhLEVBQUU7WUFDN0QsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsUUFBUSxFQUFFO1lBQzNDLGFBQWEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDOUIsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3ZCLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDM0IsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNoQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVVwbG9hZFRva2VuIH0gZnJvbSAnLi9LYWx0dXJhVXBsb2FkVG9rZW4nO1xuXG5pbXBvcnQgeyBLYWx0dXJhVXBsb2FkUmVxdWVzdCwgS2FsdHVyYVVwbG9hZFJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS11cGxvYWQtcmVxdWVzdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXBsb2FkVG9rZW5VcGxvYWRBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFVcGxvYWRSZXF1ZXN0QXJncyB7XG4gICAgdXBsb2FkVG9rZW5JZCA6IHN0cmluZztcblx0ZmlsZURhdGEgOiBGaWxlO1xuXHRyZXN1bWU/IDogYm9vbGVhbjtcblx0ZmluYWxDaHVuaz8gOiBib29sZWFuO1xuXHRyZXN1bWVBdD8gOiBudW1iZXI7XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICd1cGxvYWRUb2tlbicgYWN0aW9uICd1cGxvYWQnLlxuICpcbiAqIFVzYWdlOiBVcGxvYWQgYSBmaWxlIHVzaW5nIHRoZSB1cGxvYWQgdG9rZW4gaWQsIHJldHVybnMgYW4gZXJyb3Igb24gZmFpbHVyZSAoYW4gZXhjZXB0aW9uIHdpbGwgYmUgdGhyb3duIHdoZW4gdXNpbmcgb25lIG9mIHRoZSBLYWx0dXJhIGNsaWVudHMpXG4gKiBDaHVua3MgY2FuIGJlIHVwbG9hZGVkIGluIHBhcmFsbGVsIGFuZCB0aGV5IHdpbGwgYmUgYXBwZW5kZWQgYWNjb3JkaW5nIHRvIHRoZWlyIHJlc3VtZUF0IHBvc2l0aW9uLlxuICogQSBwYXJhbGxlbCB1cGxvYWQgc2Vzc2lvbiBzaG91bGQgaGF2ZSB0aHJlZSBzdGFnZXM6XG4gKiAxLiBBIHNpbmdsZSB1cGxvYWQgd2l0aCByZXN1bWU9ZmFsc2UgYW5kIGZpbmFsQ2h1bms9ZmFsc2VcbiAqIDIuIFBhcmFsbGVsIHVwbG9hZCByZXF1ZXN0cyBlYWNoIHdpdGggcmVzdW1lPXRydWUsZmluYWxDaHVuaz1mYWxzZSBhbmQgdGhlIGV4cGVjdGVkIHJlc3VtZXRBdCBwb3NpdGlvbi5cbiAqIElmIGEgY2h1bmsgZmFpbHMgdG8gdXBsb2FkIGl0IGNhbiBiZSByZS11cGxvYWRlZC5cbiAqIDMuIEFmdGVyIGFsbCBvZiB0aGUgY2h1bmtzIGhhdmUgYmVlbiB1cGxvYWRlZCBhIGZpbmFsIGNodW5rIChjYW4gYmUgb2YgemVybyBzaXplKSBzaG91bGQgYmUgdXBsb2FkZWRcbiAqIHdpdGggcmVzdW1lPXRydWUsIGZpbmFsQ2h1bms9dHJ1ZSBhbmQgdGhlIGV4cGVjdGVkIHJlc3VtZUF0IHBvc2l0aW9uLiBJbiBjYXNlIGFuIFVQTE9BRF9UT0tFTl9DQU5OT1RfTUFUQ0hfRVhQRUNURURfU0laRSBleGNlcHRpb25cbiAqIGhhcyBiZWVuIHJldHVybmVkIChpbmRpY2F0aW5nIG5vdCBhbGwgb2YgdGhlIGNodW5rcyB3ZXJlIGFwcGVuZGVkIHlldCkgdGhlIGZpbmFsIHJlcXVlc3QgY2FuIGJlIHJldHJpZWRcbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICBLYWx0dXJhVXBsb2FkVG9rZW5cbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIFVwbG9hZFRva2VuVXBsb2FkQWN0aW9uIGV4dGVuZHMgS2FsdHVyYVVwbG9hZFJlcXVlc3Q8S2FsdHVyYVVwbG9hZFRva2VuPiB7XG5cbiAgICB1cGxvYWRUb2tlbklkIDogc3RyaW5nO1xuXHRmaWxlRGF0YSA6IEZpbGU7XG5cdHJlc3VtZSA6IGJvb2xlYW47XG5cdGZpbmFsQ2h1bmsgOiBib29sZWFuO1xuXHRyZXN1bWVBdCA6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBVcGxvYWRUb2tlblVwbG9hZEFjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ28nLCByZXNwb25zZVN1YlR5cGUgOiAnS2FsdHVyYVVwbG9hZFRva2VuJywgcmVzcG9uc2VDb25zdHJ1Y3RvciA6IEthbHR1cmFVcGxvYWRUb2tlbiAgfSk7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5yZXN1bWUgPT09ICd1bmRlZmluZWQnKSB0aGlzLnJlc3VtZSA9IGZhbHNlO1xuXHRcdGlmICh0eXBlb2YgdGhpcy5maW5hbENodW5rID09PSAndW5kZWZpbmVkJykgdGhpcy5maW5hbENodW5rID0gdHJ1ZTtcblx0XHRpZiAodHlwZW9mIHRoaXMucmVzdW1lQXQgPT09ICd1bmRlZmluZWQnKSB0aGlzLnJlc3VtZUF0ID0gLTE7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAndXBsb2FkdG9rZW4nIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICd1cGxvYWQnIH0sXG5cdFx0XHRcdHVwbG9hZFRva2VuSWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZmlsZURhdGEgOiB7IHR5cGUgOiAnZicgfSxcblx0XHRcdFx0cmVzdW1lIDogeyB0eXBlIDogJ2InIH0sXG5cdFx0XHRcdGZpbmFsQ2h1bmsgOiB7IHR5cGUgOiAnYicgfSxcblx0XHRcdFx0cmVzdW1lQXQgOiB7IHR5cGUgOiAnbicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuIl19