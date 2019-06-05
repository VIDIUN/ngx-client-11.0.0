/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function FlavorAssetServeAdStitchCmdActionArgs() { }
/** @type {?} */
FlavorAssetServeAdStitchCmdActionArgs.prototype.assetId;
/** @type {?|undefined} */
FlavorAssetServeAdStitchCmdActionArgs.prototype.ffprobeJson;
/** @type {?|undefined} */
FlavorAssetServeAdStitchCmdActionArgs.prototype.duration;
/**
 * Build request payload for service 'flavorAsset' action 'serveAdStitchCmd'.
 *
 * Usage: serve cmd line to transcode the ad
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'flavorAsset' action 'serveAdStitchCmd'.
 *
 * Usage: serve cmd line to transcode the ad
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 */
FlavorAssetServeAdStitchCmdAction = /** @class */ (function (_super) {
    tslib_1.__extends(FlavorAssetServeAdStitchCmdAction, _super);
    function FlavorAssetServeAdStitchCmdAction(data) {
        return _super.call(this, data, { responseType: 's', responseSubType: '', responseConstructor: null }) || this;
    }
    /**
     * @return {?}
     */
    FlavorAssetServeAdStitchCmdAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'flavorasset' },
            action: { type: 'c', default: 'serveAdStitchCmd' },
            assetId: { type: 's' },
            ffprobeJson: { type: 's' },
            duration: { type: 's' }
        });
        return result;
    };
    return FlavorAssetServeAdStitchCmdAction;
}(KalturaRequest));
/**
 * Build request payload for service 'flavorAsset' action 'serveAdStitchCmd'.
 *
 * Usage: serve cmd line to transcode the ad
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 */
export { FlavorAssetServeAdStitchCmdAction };
if (false) {
    /** @type {?} */
    FlavorAssetServeAdStitchCmdAction.prototype.assetId;
    /** @type {?} */
    FlavorAssetServeAdStitchCmdAction.prototype.ffprobeJson;
    /** @type {?} */
    FlavorAssetServeAdStitchCmdAction.prototype.duration;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmxhdm9yQXNzZXRTZXJ2ZUFkU3RpdGNoQ21kQWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9GbGF2b3JBc3NldFNlcnZlQWRTdGl0Y2hDbWRBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFJQSxPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0J4RTs7Ozs7Ozs7QUFBQTtJQUF1RCw2REFBc0I7SUFNekUsMkNBQVksSUFBNEM7ZUFFcEQsa0JBQU0sSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcsRUFBRSxFQUFFLG1CQUFtQixFQUFHLElBQUksRUFBRSxDQUFDO0tBQ3ZGOzs7O0lBRVMsd0RBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsYUFBYSxFQUFFO1lBQzdELE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGtCQUFrQixFQUFFO1lBQ3JELE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEIsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1QixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ2hCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7NENBN0NMO0VBb0J1RCxjQUFjLEVBMEJwRSxDQUFBOzs7Ozs7Ozs7QUExQkQsNkNBMEJDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcblxuXG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBGbGF2b3JBc3NldFNlcnZlQWRTdGl0Y2hDbWRBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAgYXNzZXRJZCA6IHN0cmluZztcblx0ZmZwcm9iZUpzb24/IDogc3RyaW5nO1xuXHRkdXJhdGlvbj8gOiBzdHJpbmc7XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICdmbGF2b3JBc3NldCcgYWN0aW9uICdzZXJ2ZUFkU3RpdGNoQ21kJy5cbiAqXG4gKiBVc2FnZTogc2VydmUgY21kIGxpbmUgdG8gdHJhbnNjb2RlIHRoZSBhZFxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIHN0cmluZ1xuICogU2VydmVyIGZhaWx1cmUgcmVzcG9uc2UgdHlwZTogS2FsdHVyYUFQSUV4Y2VwdGlvblxuICovXG5leHBvcnQgY2xhc3MgRmxhdm9yQXNzZXRTZXJ2ZUFkU3RpdGNoQ21kQWN0aW9uIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3Q8c3RyaW5nPiB7XG5cbiAgICBhc3NldElkIDogc3RyaW5nO1xuXHRmZnByb2JlSnNvbiA6IHN0cmluZztcblx0ZHVyYXRpb24gOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogRmxhdm9yQXNzZXRTZXJ2ZUFkU3RpdGNoQ21kQWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAncycsIHJlc3BvbnNlU3ViVHlwZSA6ICcnLCByZXNwb25zZUNvbnN0cnVjdG9yIDogbnVsbCB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VydmljZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdmbGF2b3Jhc3NldCcgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ3NlcnZlQWRTdGl0Y2hDbWQnIH0sXG5cdFx0XHRcdGFzc2V0SWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZmZwcm9iZUpzb24gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZHVyYXRpb24gOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuIl19