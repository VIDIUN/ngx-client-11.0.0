/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function XInternalXAddBulkDownloadActionArgs() { }
/** @type {?} */
XInternalXAddBulkDownloadActionArgs.prototype.entryIds;
/** @type {?|undefined} */
XInternalXAddBulkDownloadActionArgs.prototype.flavorParamsId;
/**
 * Build request payload for service 'xInternal' action 'xAddBulkDownload'.
 *
 * Usage: Creates new download job for multiple entry ids (comma separated), an email will be sent when the job is done
 * This sevice support the following entries:
 * - MediaEntry
 * - Video will be converted using the flavor params id
 * - Audio will be downloaded as MP3
 * - Image will be downloaded as Jpeg
 * - MixEntry will be flattened using the flavor params id
 * - Other entry types are not supported
 * Returns the admin email that the email message will be sent to
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'xInternal' action 'xAddBulkDownload'.
 *
 * Usage: Creates new download job for multiple entry ids (comma separated), an email will be sent when the job is done
 * This sevice support the following entries:
 * - MediaEntry
 * - Video will be converted using the flavor params id
 * - Audio will be downloaded as MP3
 * - Image will be downloaded as Jpeg
 * - MixEntry will be flattened using the flavor params id
 * - Other entry types are not supported
 * Returns the admin email that the email message will be sent to
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 */
XInternalXAddBulkDownloadAction = /** @class */ (function (_super) {
    tslib_1.__extends(XInternalXAddBulkDownloadAction, _super);
    function XInternalXAddBulkDownloadAction(data) {
        return _super.call(this, data, { responseType: 's', responseSubType: '', responseConstructor: null }) || this;
    }
    /**
     * @return {?}
     */
    XInternalXAddBulkDownloadAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'xinternal' },
            action: { type: 'c', default: 'xAddBulkDownload' },
            entryIds: { type: 's' },
            flavorParamsId: { type: 's' }
        });
        return result;
    };
    return XInternalXAddBulkDownloadAction;
}(KalturaRequest));
/**
 * Build request payload for service 'xInternal' action 'xAddBulkDownload'.
 *
 * Usage: Creates new download job for multiple entry ids (comma separated), an email will be sent when the job is done
 * This sevice support the following entries:
 * - MediaEntry
 * - Video will be converted using the flavor params id
 * - Audio will be downloaded as MP3
 * - Image will be downloaded as Jpeg
 * - MixEntry will be flattened using the flavor params id
 * - Other entry types are not supported
 * Returns the admin email that the email message will be sent to
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 */
export { XInternalXAddBulkDownloadAction };
if (false) {
    /** @type {?} */
    XInternalXAddBulkDownloadAction.prototype.entryIds;
    /** @type {?} */
    XInternalXAddBulkDownloadAction.prototype.flavorParamsId;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiWEludGVybmFsWEFkZEJ1bGtEb3dubG9hZEFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvWEludGVybmFsWEFkZEJ1bGtEb3dubG9hZEFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUlBLE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1QnhFOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFBcUQsMkRBQXNCO0lBS3ZFLHlDQUFZLElBQTBDO2VBRWxELGtCQUFNLElBQUksRUFBRSxFQUFDLFlBQVksRUFBRyxHQUFHLEVBQUUsZUFBZSxFQUFHLEVBQUUsRUFBRSxtQkFBbUIsRUFBRyxJQUFJLEVBQUUsQ0FBQztLQUN2Rjs7OztJQUVTLHNEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLFdBQVcsRUFBRTtZQUMzRCxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxrQkFBa0IsRUFBRTtZQUNyRCxRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLGNBQWMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDdEIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjswQ0FsREw7RUEyQnFELGNBQWMsRUF3QmxFLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeEJELDJDQXdCQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5cblxuaW1wb3J0IHsgS2FsdHVyYVJlcXVlc3QsIEthbHR1cmFSZXF1ZXN0QXJncyB9IGZyb20gJy4uL2thbHR1cmEtcmVxdWVzdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgWEludGVybmFsWEFkZEJ1bGtEb3dubG9hZEFjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3RBcmdzIHtcbiAgICBlbnRyeUlkcyA6IHN0cmluZztcblx0Zmxhdm9yUGFyYW1zSWQ/IDogc3RyaW5nO1xufVxuXG4vKipcbiAqIEJ1aWxkIHJlcXVlc3QgcGF5bG9hZCBmb3Igc2VydmljZSAneEludGVybmFsJyBhY3Rpb24gJ3hBZGRCdWxrRG93bmxvYWQnLlxuICpcbiAqIFVzYWdlOiBDcmVhdGVzIG5ldyBkb3dubG9hZCBqb2IgZm9yIG11bHRpcGxlIGVudHJ5IGlkcyAoY29tbWEgc2VwYXJhdGVkKSwgYW4gZW1haWwgd2lsbCBiZSBzZW50IHdoZW4gdGhlIGpvYiBpcyBkb25lXG4gKiBUaGlzIHNldmljZSBzdXBwb3J0IHRoZSBmb2xsb3dpbmcgZW50cmllczpcbiAqIC0gTWVkaWFFbnRyeVxuICogLSBWaWRlbyB3aWxsIGJlIGNvbnZlcnRlZCB1c2luZyB0aGUgZmxhdm9yIHBhcmFtcyBpZFxuICogLSBBdWRpbyB3aWxsIGJlIGRvd25sb2FkZWQgYXMgTVAzXG4gKiAtIEltYWdlIHdpbGwgYmUgZG93bmxvYWRlZCBhcyBKcGVnXG4gKiAtIE1peEVudHJ5IHdpbGwgYmUgZmxhdHRlbmVkIHVzaW5nIHRoZSBmbGF2b3IgcGFyYW1zIGlkXG4gKiAtIE90aGVyIGVudHJ5IHR5cGVzIGFyZSBub3Qgc3VwcG9ydGVkXG4gKiBSZXR1cm5zIHRoZSBhZG1pbiBlbWFpbCB0aGF0IHRoZSBlbWFpbCBtZXNzYWdlIHdpbGwgYmUgc2VudCB0b1xuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIHN0cmluZ1xuICogU2VydmVyIGZhaWx1cmUgcmVzcG9uc2UgdHlwZTogS2FsdHVyYUFQSUV4Y2VwdGlvblxuICovXG5leHBvcnQgY2xhc3MgWEludGVybmFsWEFkZEJ1bGtEb3dubG9hZEFjdGlvbiBleHRlbmRzIEthbHR1cmFSZXF1ZXN0PHN0cmluZz4ge1xuXG4gICAgZW50cnlJZHMgOiBzdHJpbmc7XG5cdGZsYXZvclBhcmFtc0lkIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YSA6IFhJbnRlcm5hbFhBZGRCdWxrRG93bmxvYWRBY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSwge3Jlc3BvbnNlVHlwZSA6ICdzJywgcmVzcG9uc2VTdWJUeXBlIDogJycsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBudWxsIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ3hpbnRlcm5hbCcgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ3hBZGRCdWxrRG93bmxvYWQnIH0sXG5cdFx0XHRcdGVudHJ5SWRzIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGZsYXZvclBhcmFtc0lkIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==