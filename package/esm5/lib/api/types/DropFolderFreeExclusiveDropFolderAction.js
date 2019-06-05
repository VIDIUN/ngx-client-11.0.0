/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaDropFolder } from './KalturaDropFolder';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function DropFolderFreeExclusiveDropFolderActionArgs() { }
/** @type {?} */
DropFolderFreeExclusiveDropFolderActionArgs.prototype.dropFolderId;
/** @type {?|undefined} */
DropFolderFreeExclusiveDropFolderActionArgs.prototype.errorCode;
/** @type {?|undefined} */
DropFolderFreeExclusiveDropFolderActionArgs.prototype.errorDescription;
/**
 * Build request payload for service 'dropFolder' action 'freeExclusiveDropFolder'.
 *
 * Usage: freeExclusive KalturaDropFolder object
 *
 * Server response type:         KalturaDropFolder
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'dropFolder' action 'freeExclusiveDropFolder'.
 *
 * Usage: freeExclusive KalturaDropFolder object
 *
 * Server response type:         KalturaDropFolder
 * Server failure response type: KalturaAPIException
 */
DropFolderFreeExclusiveDropFolderAction = /** @class */ (function (_super) {
    tslib_1.__extends(DropFolderFreeExclusiveDropFolderAction, _super);
    function DropFolderFreeExclusiveDropFolderAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaDropFolder', responseConstructor: KalturaDropFolder }) || this;
    }
    /**
     * @return {?}
     */
    DropFolderFreeExclusiveDropFolderAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'dropfolder_dropfolder' },
            action: { type: 'c', default: 'freeExclusiveDropFolder' },
            dropFolderId: { type: 'n' },
            errorCode: { type: 's' },
            errorDescription: { type: 's' }
        });
        return result;
    };
    return DropFolderFreeExclusiveDropFolderAction;
}(KalturaRequest));
/**
 * Build request payload for service 'dropFolder' action 'freeExclusiveDropFolder'.
 *
 * Usage: freeExclusive KalturaDropFolder object
 *
 * Server response type:         KalturaDropFolder
 * Server failure response type: KalturaAPIException
 */
export { DropFolderFreeExclusiveDropFolderAction };
if (false) {
    /** @type {?} */
    DropFolderFreeExclusiveDropFolderAction.prototype.dropFolderId;
    /** @type {?} */
    DropFolderFreeExclusiveDropFolderAction.prototype.errorCode;
    /** @type {?} */
    DropFolderFreeExclusiveDropFolderAction.prototype.errorDescription;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRHJvcEZvbGRlckZyZWVFeGNsdXNpdmVEcm9wRm9sZGVyQWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9Ecm9wRm9sZGVyRnJlZUV4Y2x1c2l2ZURyb3BGb2xkZXJBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUV4RCxPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0J4RTs7Ozs7Ozs7QUFBQTtJQUE2RCxtRUFBaUM7SUFNMUYsaURBQVksSUFBa0Q7ZUFFMUQsa0JBQU0sSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcsbUJBQW1CLEVBQUUsbUJBQW1CLEVBQUcsaUJBQWlCLEVBQUcsQ0FBQztLQUN0SDs7OztJQUVTLDhEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHVCQUF1QixFQUFFO1lBQ3ZFLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHlCQUF5QixFQUFFO1lBQzVELFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDN0IsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMxQixnQkFBZ0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDeEIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtrREE3Q0w7RUFvQjZELGNBQWMsRUEwQjFFLENBQUE7Ozs7Ozs7OztBQTFCRCxtREEwQkMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYURyb3BGb2xkZXIgfSBmcm9tICcuL0thbHR1cmFEcm9wRm9sZGVyJztcblxuaW1wb3J0IHsgS2FsdHVyYVJlcXVlc3QsIEthbHR1cmFSZXF1ZXN0QXJncyB9IGZyb20gJy4uL2thbHR1cmEtcmVxdWVzdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRHJvcEZvbGRlckZyZWVFeGNsdXNpdmVEcm9wRm9sZGVyQWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdEFyZ3Mge1xuICAgIGRyb3BGb2xkZXJJZCA6IG51bWJlcjtcblx0ZXJyb3JDb2RlPyA6IHN0cmluZztcblx0ZXJyb3JEZXNjcmlwdGlvbj8gOiBzdHJpbmc7XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICdkcm9wRm9sZGVyJyBhY3Rpb24gJ2ZyZWVFeGNsdXNpdmVEcm9wRm9sZGVyJy5cbiAqXG4gKiBVc2FnZTogZnJlZUV4Y2x1c2l2ZSBLYWx0dXJhRHJvcEZvbGRlciBvYmplY3RcbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICBLYWx0dXJhRHJvcEZvbGRlclxuICogU2VydmVyIGZhaWx1cmUgcmVzcG9uc2UgdHlwZTogS2FsdHVyYUFQSUV4Y2VwdGlvblxuICovXG5leHBvcnQgY2xhc3MgRHJvcEZvbGRlckZyZWVFeGNsdXNpdmVEcm9wRm9sZGVyQWN0aW9uIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3Q8S2FsdHVyYURyb3BGb2xkZXI+IHtcblxuICAgIGRyb3BGb2xkZXJJZCA6IG51bWJlcjtcblx0ZXJyb3JDb2RlIDogc3RyaW5nO1xuXHRlcnJvckRlc2NyaXB0aW9uIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YSA6IERyb3BGb2xkZXJGcmVlRXhjbHVzaXZlRHJvcEZvbGRlckFjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ28nLCByZXNwb25zZVN1YlR5cGUgOiAnS2FsdHVyYURyb3BGb2xkZXInLCByZXNwb25zZUNvbnN0cnVjdG9yIDogS2FsdHVyYURyb3BGb2xkZXIgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2Ryb3Bmb2xkZXJfZHJvcGZvbGRlcicgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2ZyZWVFeGNsdXNpdmVEcm9wRm9sZGVyJyB9LFxuXHRcdFx0XHRkcm9wRm9sZGVySWQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0ZXJyb3JDb2RlIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGVycm9yRGVzY3JpcHRpb24gOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuIl19