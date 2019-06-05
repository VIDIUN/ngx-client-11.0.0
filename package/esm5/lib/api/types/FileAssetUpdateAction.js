/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaFileAsset } from './KalturaFileAsset';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function FileAssetUpdateActionArgs() { }
/** @type {?} */
FileAssetUpdateActionArgs.prototype.id;
/** @type {?} */
FileAssetUpdateActionArgs.prototype.fileAsset;
/**
 * Build request payload for service 'fileAsset' action 'update'.
 *
 * Usage: Update file asset by id
 *
 * Server response type:         KalturaFileAsset
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'fileAsset' action 'update'.
 *
 * Usage: Update file asset by id
 *
 * Server response type:         KalturaFileAsset
 * Server failure response type: KalturaAPIException
 */
FileAssetUpdateAction = /** @class */ (function (_super) {
    tslib_1.__extends(FileAssetUpdateAction, _super);
    function FileAssetUpdateAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaFileAsset', responseConstructor: KalturaFileAsset }) || this;
    }
    /**
     * @return {?}
     */
    FileAssetUpdateAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'fileasset' },
            action: { type: 'c', default: 'update' },
            id: { type: 'n' },
            fileAsset: { type: 'o', subTypeConstructor: KalturaFileAsset, subType: 'KalturaFileAsset' }
        });
        return result;
    };
    return FileAssetUpdateAction;
}(KalturaRequest));
/**
 * Build request payload for service 'fileAsset' action 'update'.
 *
 * Usage: Update file asset by id
 *
 * Server response type:         KalturaFileAsset
 * Server failure response type: KalturaAPIException
 */
export { FileAssetUpdateAction };
if (false) {
    /** @type {?} */
    FileAssetUpdateAction.prototype.id;
    /** @type {?} */
    FileAssetUpdateAction.prototype.fileAsset;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlsZUFzc2V0VXBkYXRlQWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9GaWxlQXNzZXRVcGRhdGVBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV0RCxPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQWV4RTs7Ozs7Ozs7QUFBQTtJQUEyQyxpREFBZ0M7SUFLdkUsK0JBQVksSUFBZ0M7ZUFFeEMsa0JBQU0sSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcsa0JBQWtCLEVBQUUsbUJBQW1CLEVBQUcsZ0JBQWdCLEVBQUcsQ0FBQztLQUNwSDs7OztJQUVTLDRDQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLFdBQVcsRUFBRTtZQUMzRCxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxRQUFRLEVBQUU7WUFDM0MsRUFBRSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNuQixTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLGdCQUFnQixFQUFFLE9BQU8sRUFBRyxrQkFBa0IsRUFBRTtTQUN0RixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO2dDQTFDTDtFQW1CMkMsY0FBYyxFQXdCeEQsQ0FBQTs7Ozs7Ozs7O0FBeEJELGlDQXdCQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhRmlsZUFzc2V0IH0gZnJvbSAnLi9LYWx0dXJhRmlsZUFzc2V0JztcblxuaW1wb3J0IHsgS2FsdHVyYVJlcXVlc3QsIEthbHR1cmFSZXF1ZXN0QXJncyB9IGZyb20gJy4uL2thbHR1cmEtcmVxdWVzdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmlsZUFzc2V0VXBkYXRlQWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdEFyZ3Mge1xuICAgIGlkIDogbnVtYmVyO1xuXHRmaWxlQXNzZXQgOiBLYWx0dXJhRmlsZUFzc2V0O1xufVxuXG4vKipcbiAqIEJ1aWxkIHJlcXVlc3QgcGF5bG9hZCBmb3Igc2VydmljZSAnZmlsZUFzc2V0JyBhY3Rpb24gJ3VwZGF0ZScuXG4gKlxuICogVXNhZ2U6IFVwZGF0ZSBmaWxlIGFzc2V0IGJ5IGlkXG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgS2FsdHVyYUZpbGVBc3NldFxuICogU2VydmVyIGZhaWx1cmUgcmVzcG9uc2UgdHlwZTogS2FsdHVyYUFQSUV4Y2VwdGlvblxuICovXG5leHBvcnQgY2xhc3MgRmlsZUFzc2V0VXBkYXRlQWN0aW9uIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3Q8S2FsdHVyYUZpbGVBc3NldD4ge1xuXG4gICAgaWQgOiBudW1iZXI7XG5cdGZpbGVBc3NldCA6IEthbHR1cmFGaWxlQXNzZXQ7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogRmlsZUFzc2V0VXBkYXRlQWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAnbycsIHJlc3BvbnNlU3ViVHlwZSA6ICdLYWx0dXJhRmlsZUFzc2V0JywgcmVzcG9uc2VDb25zdHJ1Y3RvciA6IEthbHR1cmFGaWxlQXNzZXQgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2ZpbGVhc3NldCcgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ3VwZGF0ZScgfSxcblx0XHRcdFx0aWQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0ZmlsZUFzc2V0IDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRmlsZUFzc2V0LCBzdWJUeXBlIDogJ0thbHR1cmFGaWxlQXNzZXQnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==