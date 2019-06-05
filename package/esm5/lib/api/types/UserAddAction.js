/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaUser } from './KalturaUser';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function UserAddActionArgs() { }
/** @type {?} */
UserAddActionArgs.prototype.user;
/**
 * Build request payload for service 'user' action 'add'.
 *
 * Usage: Adds a new user to an existing account in the Kaltura database.
 * Input param $id is the unique identifier in the partner's system
 *
 * Server response type:         KalturaUser
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'user' action 'add'.
 *
 * Usage: Adds a new user to an existing account in the Kaltura database.
 * Input param $id is the unique identifier in the partner's system
 *
 * Server response type:         KalturaUser
 * Server failure response type: KalturaAPIException
 */
UserAddAction = /** @class */ (function (_super) {
    tslib_1.__extends(UserAddAction, _super);
    function UserAddAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaUser', responseConstructor: KalturaUser }) || this;
    }
    /**
     * @return {?}
     */
    UserAddAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'user' },
            action: { type: 'c', default: 'add' },
            user: { type: 'o', subTypeConstructor: KalturaUser, subType: 'KalturaUser' }
        });
        return result;
    };
    return UserAddAction;
}(KalturaRequest));
/**
 * Build request payload for service 'user' action 'add'.
 *
 * Usage: Adds a new user to an existing account in the Kaltura database.
 * Input param $id is the unique identifier in the partner's system
 *
 * Server response type:         KalturaUser
 * Server failure response type: KalturaAPIException
 */
export { UserAddAction };
if (false) {
    /** @type {?} */
    UserAddAction.prototype.user;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlckFkZEFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvVXNlckFkZEFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFNUMsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQWV4RTs7Ozs7Ozs7O0FBQUE7SUFBbUMseUNBQTJCO0lBSTFELHVCQUFZLElBQXdCO2VBRWhDLGtCQUFNLElBQUksRUFBRSxFQUFDLFlBQVksRUFBRyxHQUFHLEVBQUUsZUFBZSxFQUFHLGFBQWEsRUFBRSxtQkFBbUIsRUFBRyxXQUFXLEVBQUcsQ0FBQztLQUMxRzs7OztJQUVTLG9DQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLE1BQU0sRUFBRTtZQUN0RCxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxLQUFLLEVBQUU7WUFDeEMsSUFBSSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxXQUFXLEVBQUUsT0FBTyxFQUFHLGFBQWEsRUFBRTtTQUN2RSxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO3dCQXhDTDtFQW1CbUMsY0FBYyxFQXNCaEQsQ0FBQTs7Ozs7Ozs7OztBQXRCRCx5QkFzQkMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVVzZXIgfSBmcm9tICcuL0thbHR1cmFVc2VyJztcblxuaW1wb3J0IHsgS2FsdHVyYVJlcXVlc3QsIEthbHR1cmFSZXF1ZXN0QXJncyB9IGZyb20gJy4uL2thbHR1cmEtcmVxdWVzdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXNlckFkZEFjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3RBcmdzIHtcbiAgICB1c2VyIDogS2FsdHVyYVVzZXI7XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICd1c2VyJyBhY3Rpb24gJ2FkZCcuXG4gKlxuICogVXNhZ2U6IEFkZHMgYSBuZXcgdXNlciB0byBhbiBleGlzdGluZyBhY2NvdW50IGluIHRoZSBLYWx0dXJhIGRhdGFiYXNlLlxuICogSW5wdXQgcGFyYW0gJGlkIGlzIHRoZSB1bmlxdWUgaWRlbnRpZmllciBpbiB0aGUgcGFydG5lcidzIHN5c3RlbVxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIEthbHR1cmFVc2VyXG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBVc2VyQWRkQWN0aW9uIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3Q8S2FsdHVyYVVzZXI+IHtcblxuICAgIHVzZXIgOiBLYWx0dXJhVXNlcjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBVc2VyQWRkQWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAnbycsIHJlc3BvbnNlU3ViVHlwZSA6ICdLYWx0dXJhVXNlcicsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBLYWx0dXJhVXNlciAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAndXNlcicgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2FkZCcgfSxcblx0XHRcdFx0dXNlciA6IHsgdHlwZSA6ICdvJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVVzZXIsIHN1YlR5cGUgOiAnS2FsdHVyYVVzZXInIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==