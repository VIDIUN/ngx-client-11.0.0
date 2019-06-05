/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaPlayReadyContentKey } from './KalturaPlayReadyContentKey';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function PlayReadyDrmGenerateKeyActionArgs() { }
/**
 * Build request payload for service 'playReadyDrm' action 'generateKey'.
 *
 * Usage: Generate key id and content key for PlayReady encryption
 *
 * Server response type:         KalturaPlayReadyContentKey
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'playReadyDrm' action 'generateKey'.
 *
 * Usage: Generate key id and content key for PlayReady encryption
 *
 * Server response type:         KalturaPlayReadyContentKey
 * Server failure response type: KalturaAPIException
 */
PlayReadyDrmGenerateKeyAction = /** @class */ (function (_super) {
    tslib_1.__extends(PlayReadyDrmGenerateKeyAction, _super);
    function PlayReadyDrmGenerateKeyAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaPlayReadyContentKey', responseConstructor: KalturaPlayReadyContentKey }) || this;
    }
    /**
     * @return {?}
     */
    PlayReadyDrmGenerateKeyAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'playready_playreadydrm' },
            action: { type: 'c', default: 'generateKey' }
        });
        return result;
    };
    return PlayReadyDrmGenerateKeyAction;
}(KalturaRequest));
/**
 * Build request payload for service 'playReadyDrm' action 'generateKey'.
 *
 * Usage: Generate key id and content key for PlayReady encryption
 *
 * Server response type:         KalturaPlayReadyContentKey
 * Server failure response type: KalturaAPIException
 */
export { PlayReadyDrmGenerateKeyAction };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGxheVJlYWR5RHJtR2VuZXJhdGVLZXlBY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL1BsYXlSZWFkeURybUdlbmVyYXRlS2V5QWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFFMUUsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7OztBQWN4RTs7Ozs7Ozs7QUFBQTtJQUFtRCx5REFBMEM7SUFJekYsdUNBQVksSUFBeUM7ZUFFakQsa0JBQU0sSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcsNEJBQTRCLEVBQUUsbUJBQW1CLEVBQUcsMEJBQTBCLEVBQUcsQ0FBQztLQUN4STs7OztJQUVTLG9EQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHdCQUF3QixFQUFFO1lBQ3hFLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGFBQWEsRUFBRTtTQUN2QyxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO3dDQXRDTDtFQWtCbUQsY0FBYyxFQXFCaEUsQ0FBQTs7Ozs7Ozs7O0FBckJELHlDQXFCQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhUGxheVJlYWR5Q29udGVudEtleSB9IGZyb20gJy4vS2FsdHVyYVBsYXlSZWFkeUNvbnRlbnRLZXknO1xuXG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBQbGF5UmVhZHlEcm1HZW5lcmF0ZUtleUFjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3RBcmdzIHtcbiAgICBcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ3BsYXlSZWFkeURybScgYWN0aW9uICdnZW5lcmF0ZUtleScuXG4gKlxuICogVXNhZ2U6IEdlbmVyYXRlIGtleSBpZCBhbmQgY29udGVudCBrZXkgZm9yIFBsYXlSZWFkeSBlbmNyeXB0aW9uXG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgS2FsdHVyYVBsYXlSZWFkeUNvbnRlbnRLZXlcbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIFBsYXlSZWFkeURybUdlbmVyYXRlS2V5QWN0aW9uIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3Q8S2FsdHVyYVBsYXlSZWFkeUNvbnRlbnRLZXk+IHtcblxuICAgIFxuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBQbGF5UmVhZHlEcm1HZW5lcmF0ZUtleUFjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ28nLCByZXNwb25zZVN1YlR5cGUgOiAnS2FsdHVyYVBsYXlSZWFkeUNvbnRlbnRLZXknLCByZXNwb25zZUNvbnN0cnVjdG9yIDogS2FsdHVyYVBsYXlSZWFkeUNvbnRlbnRLZXkgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ3BsYXlyZWFkeV9wbGF5cmVhZHlkcm0nIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdnZW5lcmF0ZUtleScgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuIl19