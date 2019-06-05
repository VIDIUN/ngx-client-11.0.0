/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaRemotePathListResponse } from './KalturaRemotePathListResponse';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function CaptionAssetGetRemotePathsActionArgs() { }
/** @type {?} */
CaptionAssetGetRemotePathsActionArgs.prototype.id;
/**
 * Build request payload for service 'captionAsset' action 'getRemotePaths'.
 *
 * Usage: Get remote storage existing paths for the asset
 *
 * Server response type:         KalturaRemotePathListResponse
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'captionAsset' action 'getRemotePaths'.
 *
 * Usage: Get remote storage existing paths for the asset
 *
 * Server response type:         KalturaRemotePathListResponse
 * Server failure response type: KalturaAPIException
 */
CaptionAssetGetRemotePathsAction = /** @class */ (function (_super) {
    tslib_1.__extends(CaptionAssetGetRemotePathsAction, _super);
    function CaptionAssetGetRemotePathsAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaRemotePathListResponse', responseConstructor: KalturaRemotePathListResponse }) || this;
    }
    /**
     * @return {?}
     */
    CaptionAssetGetRemotePathsAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'caption_captionasset' },
            action: { type: 'c', default: 'getRemotePaths' },
            id: { type: 's' }
        });
        return result;
    };
    return CaptionAssetGetRemotePathsAction;
}(KalturaRequest));
/**
 * Build request payload for service 'captionAsset' action 'getRemotePaths'.
 *
 * Usage: Get remote storage existing paths for the asset
 *
 * Server response type:         KalturaRemotePathListResponse
 * Server failure response type: KalturaAPIException
 */
export { CaptionAssetGetRemotePathsAction };
if (false) {
    /** @type {?} */
    CaptionAssetGetRemotePathsAction.prototype.id;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FwdGlvbkFzc2V0R2V0UmVtb3RlUGF0aHNBY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0NhcHRpb25Bc3NldEdldFJlbW90ZVBhdGhzQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFFaEYsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FBY3hFOzs7Ozs7OztBQUFBO0lBQXNELDREQUE2QztJQUkvRiwwQ0FBWSxJQUEyQztlQUVuRCxrQkFBTSxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRywrQkFBK0IsRUFBRSxtQkFBbUIsRUFBRyw2QkFBNkIsRUFBRyxDQUFDO0tBQzlJOzs7O0lBRVMsdURBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsc0JBQXNCLEVBQUU7WUFDdEUsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsZ0JBQWdCLEVBQUU7WUFDbkQsRUFBRSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNWLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7MkNBdkNMO0VBa0JzRCxjQUFjLEVBc0JuRSxDQUFBOzs7Ozs7Ozs7QUF0QkQsNENBc0JDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFSZW1vdGVQYXRoTGlzdFJlc3BvbnNlIH0gZnJvbSAnLi9LYWx0dXJhUmVtb3RlUGF0aExpc3RSZXNwb25zZSc7XG5cbmltcG9ydCB7IEthbHR1cmFSZXF1ZXN0LCBLYWx0dXJhUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIENhcHRpb25Bc3NldEdldFJlbW90ZVBhdGhzQWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdEFyZ3Mge1xuICAgIGlkIDogc3RyaW5nO1xufVxuXG4vKipcbiAqIEJ1aWxkIHJlcXVlc3QgcGF5bG9hZCBmb3Igc2VydmljZSAnY2FwdGlvbkFzc2V0JyBhY3Rpb24gJ2dldFJlbW90ZVBhdGhzJy5cbiAqXG4gKiBVc2FnZTogR2V0IHJlbW90ZSBzdG9yYWdlIGV4aXN0aW5nIHBhdGhzIGZvciB0aGUgYXNzZXRcbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICBLYWx0dXJhUmVtb3RlUGF0aExpc3RSZXNwb25zZVxuICogU2VydmVyIGZhaWx1cmUgcmVzcG9uc2UgdHlwZTogS2FsdHVyYUFQSUV4Y2VwdGlvblxuICovXG5leHBvcnQgY2xhc3MgQ2FwdGlvbkFzc2V0R2V0UmVtb3RlUGF0aHNBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdDxLYWx0dXJhUmVtb3RlUGF0aExpc3RSZXNwb25zZT4ge1xuXG4gICAgaWQgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogQ2FwdGlvbkFzc2V0R2V0UmVtb3RlUGF0aHNBY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSwge3Jlc3BvbnNlVHlwZSA6ICdvJywgcmVzcG9uc2VTdWJUeXBlIDogJ0thbHR1cmFSZW1vdGVQYXRoTGlzdFJlc3BvbnNlJywgcmVzcG9uc2VDb25zdHJ1Y3RvciA6IEthbHR1cmFSZW1vdGVQYXRoTGlzdFJlc3BvbnNlICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VydmljZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdjYXB0aW9uX2NhcHRpb25hc3NldCcgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2dldFJlbW90ZVBhdGhzJyB9LFxuXHRcdFx0XHRpZCA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=