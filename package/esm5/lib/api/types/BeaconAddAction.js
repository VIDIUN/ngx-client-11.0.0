/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaBeacon } from './KalturaBeacon';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function BeaconAddActionArgs() { }
/** @type {?} */
BeaconAddActionArgs.prototype.beacon;
/** @type {?|undefined} */
BeaconAddActionArgs.prototype.shouldLog;
/**
 * Build request payload for service 'beacon' action 'add'.
 *
 *
 *
 * Server response type:         boolean
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'beacon' action 'add'.
 *
 *
 *
 * Server response type:         boolean
 * Server failure response type: KalturaAPIException
 */
BeaconAddAction = /** @class */ (function (_super) {
    tslib_1.__extends(BeaconAddAction, _super);
    function BeaconAddAction(data) {
        return _super.call(this, data, { responseType: 'b', responseSubType: '', responseConstructor: null }) || this;
    }
    /**
     * @return {?}
     */
    BeaconAddAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'beacon_beacon' },
            action: { type: 'c', default: 'add' },
            beacon: { type: 'o', subTypeConstructor: KalturaBeacon, subType: 'KalturaBeacon' },
            shouldLog: { type: 'en', subTypeConstructor: KalturaNullableBoolean, subType: 'KalturaNullableBoolean' }
        });
        return result;
    };
    return BeaconAddAction;
}(KalturaRequest));
/**
 * Build request payload for service 'beacon' action 'add'.
 *
 *
 *
 * Server response type:         boolean
 * Server failure response type: KalturaAPIException
 */
export { BeaconAddAction };
if (false) {
    /** @type {?} */
    BeaconAddAction.prototype.beacon;
    /** @type {?} */
    BeaconAddAction.prototype.shouldLog;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmVhY29uQWRkQWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9CZWFjb25BZGRBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFJQSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDaEQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFleEU7Ozs7Ozs7O0FBQUE7SUFBcUMsMkNBQXVCO0lBS3hELHlCQUFZLElBQTBCO2VBRWxDLGtCQUFNLElBQUksRUFBRSxFQUFDLFlBQVksRUFBRyxHQUFHLEVBQUUsZUFBZSxFQUFHLEVBQUUsRUFBRSxtQkFBbUIsRUFBRyxJQUFJLEVBQUUsQ0FBQztLQUN2Rjs7OztJQUVTLHNDQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGVBQWUsRUFBRTtZQUMvRCxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxLQUFLLEVBQUU7WUFDeEMsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxhQUFhLEVBQUUsT0FBTyxFQUFHLGVBQWUsRUFBRTtZQUN0RixTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHNCQUFzQixFQUFFLE9BQU8sRUFBRyx3QkFBd0IsRUFBRTtTQUNuRyxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCOzBCQTVDTDtFQXFCcUMsY0FBYyxFQXdCbEQsQ0FBQTs7Ozs7Ozs7O0FBeEJELDJCQXdCQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5cblxuaW1wb3J0IHsgS2FsdHVyYUJlYWNvbiB9IGZyb20gJy4vS2FsdHVyYUJlYWNvbic7XG5pbXBvcnQgeyBLYWx0dXJhTnVsbGFibGVCb29sZWFuIH0gZnJvbSAnLi9LYWx0dXJhTnVsbGFibGVCb29sZWFuJztcbmltcG9ydCB7IEthbHR1cmFSZXF1ZXN0LCBLYWx0dXJhUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEJlYWNvbkFkZEFjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3RBcmdzIHtcbiAgICBiZWFjb24gOiBLYWx0dXJhQmVhY29uO1xuXHRzaG91bGRMb2c/IDogS2FsdHVyYU51bGxhYmxlQm9vbGVhbjtcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ2JlYWNvbicgYWN0aW9uICdhZGQnLlxuICpcbiAqIFxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIGJvb2xlYW5cbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIEJlYWNvbkFkZEFjdGlvbiBleHRlbmRzIEthbHR1cmFSZXF1ZXN0PGJvb2xlYW4+IHtcblxuICAgIGJlYWNvbiA6IEthbHR1cmFCZWFjb247XG5cdHNob3VsZExvZyA6IEthbHR1cmFOdWxsYWJsZUJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogQmVhY29uQWRkQWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAnYicsIHJlc3BvbnNlU3ViVHlwZSA6ICcnLCByZXNwb25zZUNvbnN0cnVjdG9yIDogbnVsbCB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VydmljZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdiZWFjb25fYmVhY29uJyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnYWRkJyB9LFxuXHRcdFx0XHRiZWFjb24gOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFCZWFjb24sIHN1YlR5cGUgOiAnS2FsdHVyYUJlYWNvbicgfSxcblx0XHRcdFx0c2hvdWxkTG9nIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYU51bGxhYmxlQm9vbGVhbiwgc3ViVHlwZSA6ICdLYWx0dXJhTnVsbGFibGVCb29sZWFuJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=