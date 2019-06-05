/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaMediaEntry } from './KalturaMediaEntry';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function MediaAddFromRecordedWebcamActionArgs() { }
/** @type {?} */
MediaAddFromRecordedWebcamActionArgs.prototype.mediaEntry;
/** @type {?} */
MediaAddFromRecordedWebcamActionArgs.prototype.webcamTokenId;
/**
 * Build request payload for service 'media' action 'addFromRecordedWebcam'.
 *
 * Usage: Add new entry after the file was recored on the server and the token id exists
 *
 * Server response type:         KalturaMediaEntry
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'media' action 'addFromRecordedWebcam'.
 *
 * Usage: Add new entry after the file was recored on the server and the token id exists
 *
 * Server response type:         KalturaMediaEntry
 * Server failure response type: KalturaAPIException
 */
MediaAddFromRecordedWebcamAction = /** @class */ (function (_super) {
    tslib_1.__extends(MediaAddFromRecordedWebcamAction, _super);
    function MediaAddFromRecordedWebcamAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaMediaEntry', responseConstructor: KalturaMediaEntry }) || this;
    }
    /**
     * @return {?}
     */
    MediaAddFromRecordedWebcamAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'media' },
            action: { type: 'c', default: 'addFromRecordedWebcam' },
            mediaEntry: { type: 'o', subTypeConstructor: KalturaMediaEntry, subType: 'KalturaMediaEntry' },
            webcamTokenId: { type: 's' }
        });
        return result;
    };
    return MediaAddFromRecordedWebcamAction;
}(KalturaRequest));
/**
 * Build request payload for service 'media' action 'addFromRecordedWebcam'.
 *
 * Usage: Add new entry after the file was recored on the server and the token id exists
 *
 * Server response type:         KalturaMediaEntry
 * Server failure response type: KalturaAPIException
 */
export { MediaAddFromRecordedWebcamAction };
if (false) {
    /** @type {?} */
    MediaAddFromRecordedWebcamAction.prototype.mediaEntry;
    /** @type {?} */
    MediaAddFromRecordedWebcamAction.prototype.webcamTokenId;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVkaWFBZGRGcm9tUmVjb3JkZWRXZWJjYW1BY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL01lZGlhQWRkRnJvbVJlY29yZGVkV2ViY2FtQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFeEQsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFleEU7Ozs7Ozs7O0FBQUE7SUFBc0QsNERBQWlDO0lBS25GLDBDQUFZLElBQTJDO2VBRW5ELGtCQUFNLElBQUksRUFBRSxFQUFDLFlBQVksRUFBRyxHQUFHLEVBQUUsZUFBZSxFQUFHLG1CQUFtQixFQUFFLG1CQUFtQixFQUFHLGlCQUFpQixFQUFHLENBQUM7S0FDdEg7Ozs7SUFFUyx1REFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxPQUFPLEVBQUU7WUFDdkQsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsdUJBQXVCLEVBQUU7WUFDMUQsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxpQkFBaUIsRUFBRSxPQUFPLEVBQUcsbUJBQW1CLEVBQUU7WUFDbEcsYUFBYSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNyQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCOzJDQTFDTDtFQW1Cc0QsY0FBYyxFQXdCbkUsQ0FBQTs7Ozs7Ozs7O0FBeEJELDRDQXdCQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhTWVkaWFFbnRyeSB9IGZyb20gJy4vS2FsdHVyYU1lZGlhRW50cnknO1xuXG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBNZWRpYUFkZEZyb21SZWNvcmRlZFdlYmNhbUFjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3RBcmdzIHtcbiAgICBtZWRpYUVudHJ5IDogS2FsdHVyYU1lZGlhRW50cnk7XG5cdHdlYmNhbVRva2VuSWQgOiBzdHJpbmc7XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICdtZWRpYScgYWN0aW9uICdhZGRGcm9tUmVjb3JkZWRXZWJjYW0nLlxuICpcbiAqIFVzYWdlOiBBZGQgbmV3IGVudHJ5IGFmdGVyIHRoZSBmaWxlIHdhcyByZWNvcmVkIG9uIHRoZSBzZXJ2ZXIgYW5kIHRoZSB0b2tlbiBpZCBleGlzdHNcbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICBLYWx0dXJhTWVkaWFFbnRyeVxuICogU2VydmVyIGZhaWx1cmUgcmVzcG9uc2UgdHlwZTogS2FsdHVyYUFQSUV4Y2VwdGlvblxuICovXG5leHBvcnQgY2xhc3MgTWVkaWFBZGRGcm9tUmVjb3JkZWRXZWJjYW1BY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdDxLYWx0dXJhTWVkaWFFbnRyeT4ge1xuXG4gICAgbWVkaWFFbnRyeSA6IEthbHR1cmFNZWRpYUVudHJ5O1xuXHR3ZWJjYW1Ub2tlbklkIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YSA6IE1lZGlhQWRkRnJvbVJlY29yZGVkV2ViY2FtQWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAnbycsIHJlc3BvbnNlU3ViVHlwZSA6ICdLYWx0dXJhTWVkaWFFbnRyeScsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBLYWx0dXJhTWVkaWFFbnRyeSAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnbWVkaWEnIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdhZGRGcm9tUmVjb3JkZWRXZWJjYW0nIH0sXG5cdFx0XHRcdG1lZGlhRW50cnkgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFNZWRpYUVudHJ5LCBzdWJUeXBlIDogJ0thbHR1cmFNZWRpYUVudHJ5JyB9LFxuXHRcdFx0XHR3ZWJjYW1Ub2tlbklkIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==