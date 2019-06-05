/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaAccessControl } from './KalturaAccessControl';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function AccessControlAddActionArgs() { }
/** @type {?} */
AccessControlAddActionArgs.prototype.accessControl;
/**
 * Build request payload for service 'accessControl' action 'add'.
 *
 * Usage: Add new Access Control Profile
 *
 * Server response type:         KalturaAccessControl
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'accessControl' action 'add'.
 *
 * Usage: Add new Access Control Profile
 *
 * Server response type:         KalturaAccessControl
 * Server failure response type: KalturaAPIException
 */
AccessControlAddAction = /** @class */ (function (_super) {
    tslib_1.__extends(AccessControlAddAction, _super);
    function AccessControlAddAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaAccessControl', responseConstructor: KalturaAccessControl }) || this;
    }
    /**
     * @return {?}
     */
    AccessControlAddAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'accesscontrol' },
            action: { type: 'c', default: 'add' },
            accessControl: { type: 'o', subTypeConstructor: KalturaAccessControl, subType: 'KalturaAccessControl' }
        });
        return result;
    };
    return AccessControlAddAction;
}(KalturaRequest));
/**
 * Build request payload for service 'accessControl' action 'add'.
 *
 * Usage: Add new Access Control Profile
 *
 * Server response type:         KalturaAccessControl
 * Server failure response type: KalturaAPIException
 */
export { AccessControlAddAction };
if (false) {
    /** @type {?} */
    AccessControlAddAction.prototype.accessControl;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWNjZXNzQ29udHJvbEFkZEFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvQWNjZXNzQ29udHJvbEFkZEFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRTlELE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQWN4RTs7Ozs7Ozs7QUFBQTtJQUE0QyxrREFBb0M7SUFJNUUsZ0NBQVksSUFBaUM7ZUFFekMsa0JBQU0sSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcsc0JBQXNCLEVBQUUsbUJBQW1CLEVBQUcsb0JBQW9CLEVBQUcsQ0FBQztLQUM1SDs7OztJQUVTLDZDQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGVBQWUsRUFBRTtZQUMvRCxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxLQUFLLEVBQUU7WUFDeEMsYUFBYSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxvQkFBb0IsRUFBRSxPQUFPLEVBQUcsc0JBQXNCLEVBQUU7U0FDbEcsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtpQ0F2Q0w7RUFrQjRDLGNBQWMsRUFzQnpELENBQUE7Ozs7Ozs7OztBQXRCRCxrQ0FzQkMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUFjY2Vzc0NvbnRyb2wgfSBmcm9tICcuL0thbHR1cmFBY2Nlc3NDb250cm9sJztcblxuaW1wb3J0IHsgS2FsdHVyYVJlcXVlc3QsIEthbHR1cmFSZXF1ZXN0QXJncyB9IGZyb20gJy4uL2thbHR1cmEtcmVxdWVzdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWNjZXNzQ29udHJvbEFkZEFjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3RBcmdzIHtcbiAgICBhY2Nlc3NDb250cm9sIDogS2FsdHVyYUFjY2Vzc0NvbnRyb2w7XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICdhY2Nlc3NDb250cm9sJyBhY3Rpb24gJ2FkZCcuXG4gKlxuICogVXNhZ2U6IEFkZCBuZXcgQWNjZXNzIENvbnRyb2wgUHJvZmlsZVxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIEthbHR1cmFBY2Nlc3NDb250cm9sXG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBBY2Nlc3NDb250cm9sQWRkQWN0aW9uIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3Q8S2FsdHVyYUFjY2Vzc0NvbnRyb2w+IHtcblxuICAgIGFjY2Vzc0NvbnRyb2wgOiBLYWx0dXJhQWNjZXNzQ29udHJvbDtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBBY2Nlc3NDb250cm9sQWRkQWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAnbycsIHJlc3BvbnNlU3ViVHlwZSA6ICdLYWx0dXJhQWNjZXNzQ29udHJvbCcsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBLYWx0dXJhQWNjZXNzQ29udHJvbCAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnYWNjZXNzY29udHJvbCcgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2FkZCcgfSxcblx0XHRcdFx0YWNjZXNzQ29udHJvbCA6IHsgdHlwZSA6ICdvJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUFjY2Vzc0NvbnRyb2wsIHN1YlR5cGUgOiAnS2FsdHVyYUFjY2Vzc0NvbnRyb2wnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==