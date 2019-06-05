/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaUploadToken } from './KalturaUploadToken';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function UploadTokenAddActionArgs() { }
/** @type {?|undefined} */
UploadTokenAddActionArgs.prototype.uploadToken;
/**
 * Build request payload for service 'uploadToken' action 'add'.
 *
 * Usage: Adds new upload token to upload a file
 *
 * Server response type:         KalturaUploadToken
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'uploadToken' action 'add'.
 *
 * Usage: Adds new upload token to upload a file
 *
 * Server response type:         KalturaUploadToken
 * Server failure response type: KalturaAPIException
 */
UploadTokenAddAction = /** @class */ (function (_super) {
    tslib_1.__extends(UploadTokenAddAction, _super);
    function UploadTokenAddAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaUploadToken', responseConstructor: KalturaUploadToken }) || this;
    }
    /**
     * @return {?}
     */
    UploadTokenAddAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'uploadtoken' },
            action: { type: 'c', default: 'add' },
            uploadToken: { type: 'o', subTypeConstructor: KalturaUploadToken, subType: 'KalturaUploadToken' }
        });
        return result;
    };
    return UploadTokenAddAction;
}(KalturaRequest));
/**
 * Build request payload for service 'uploadToken' action 'add'.
 *
 * Usage: Adds new upload token to upload a file
 *
 * Server response type:         KalturaUploadToken
 * Server failure response type: KalturaAPIException
 */
export { UploadTokenAddAction };
if (false) {
    /** @type {?} */
    UploadTokenAddAction.prototype.uploadToken;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXBsb2FkVG9rZW5BZGRBY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL1VwbG9hZFRva2VuQWRkQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFMUQsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FBY3hFOzs7Ozs7OztBQUFBO0lBQTBDLGdEQUFrQztJQUl4RSw4QkFBWSxJQUFnQztlQUV4QyxrQkFBTSxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRyxvQkFBb0IsRUFBRSxtQkFBbUIsRUFBRyxrQkFBa0IsRUFBRyxDQUFDO0tBQ3hIOzs7O0lBRVMsMkNBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsYUFBYSxFQUFFO1lBQzdELE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLEtBQUssRUFBRTtZQUN4QyxXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLGtCQUFrQixFQUFFLE9BQU8sRUFBRyxvQkFBb0IsRUFBRTtTQUM1RixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCOytCQXZDTDtFQWtCMEMsY0FBYyxFQXNCdkQsQ0FBQTs7Ozs7Ozs7O0FBdEJELGdDQXNCQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhVXBsb2FkVG9rZW4gfSBmcm9tICcuL0thbHR1cmFVcGxvYWRUb2tlbic7XG5cbmltcG9ydCB7IEthbHR1cmFSZXF1ZXN0LCBLYWx0dXJhUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFVwbG9hZFRva2VuQWRkQWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdEFyZ3Mge1xuICAgIHVwbG9hZFRva2VuPyA6IEthbHR1cmFVcGxvYWRUb2tlbjtcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ3VwbG9hZFRva2VuJyBhY3Rpb24gJ2FkZCcuXG4gKlxuICogVXNhZ2U6IEFkZHMgbmV3IHVwbG9hZCB0b2tlbiB0byB1cGxvYWQgYSBmaWxlXG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgS2FsdHVyYVVwbG9hZFRva2VuXG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBVcGxvYWRUb2tlbkFkZEFjdGlvbiBleHRlbmRzIEthbHR1cmFSZXF1ZXN0PEthbHR1cmFVcGxvYWRUb2tlbj4ge1xuXG4gICAgdXBsb2FkVG9rZW4gOiBLYWx0dXJhVXBsb2FkVG9rZW47XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IFVwbG9hZFRva2VuQWRkQWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAnbycsIHJlc3BvbnNlU3ViVHlwZSA6ICdLYWx0dXJhVXBsb2FkVG9rZW4nLCByZXNwb25zZUNvbnN0cnVjdG9yIDogS2FsdHVyYVVwbG9hZFRva2VuICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VydmljZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICd1cGxvYWR0b2tlbicgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2FkZCcgfSxcblx0XHRcdFx0dXBsb2FkVG9rZW4gOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFVcGxvYWRUb2tlbiwgc3ViVHlwZSA6ICdLYWx0dXJhVXBsb2FkVG9rZW4nIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==