/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaClientNotification } from './KalturaClientNotification';
import { KalturaNotificationType } from './KalturaNotificationType';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function NotificationGetClientNotificationActionArgs() { }
/** @type {?} */
NotificationGetClientNotificationActionArgs.prototype.entryId;
/** @type {?} */
NotificationGetClientNotificationActionArgs.prototype.type;
/**
 * Build request payload for service 'notification' action 'getClientNotification'.
 *
 * Usage: Return the notifications for a specific entry id and type
 *
 * Server response type:         KalturaClientNotification
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'notification' action 'getClientNotification'.
 *
 * Usage: Return the notifications for a specific entry id and type
 *
 * Server response type:         KalturaClientNotification
 * Server failure response type: KalturaAPIException
 */
NotificationGetClientNotificationAction = /** @class */ (function (_super) {
    tslib_1.__extends(NotificationGetClientNotificationAction, _super);
    function NotificationGetClientNotificationAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaClientNotification', responseConstructor: KalturaClientNotification }) || this;
    }
    /**
     * @return {?}
     */
    NotificationGetClientNotificationAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'notification' },
            action: { type: 'c', default: 'getClientNotification' },
            entryId: { type: 's' },
            type: { type: 'en', subTypeConstructor: KalturaNotificationType, subType: 'KalturaNotificationType' }
        });
        return result;
    };
    return NotificationGetClientNotificationAction;
}(KalturaRequest));
/**
 * Build request payload for service 'notification' action 'getClientNotification'.
 *
 * Usage: Return the notifications for a specific entry id and type
 *
 * Server response type:         KalturaClientNotification
 * Server failure response type: KalturaAPIException
 */
export { NotificationGetClientNotificationAction };
if (false) {
    /** @type {?} */
    NotificationGetClientNotificationAction.prototype.entryId;
    /** @type {?} */
    NotificationGetClientNotificationAction.prototype.type;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTm90aWZpY2F0aW9uR2V0Q2xpZW50Tm90aWZpY2F0aW9uQWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9Ob3RpZmljYXRpb25HZXRDbGllbnROb3RpZmljYXRpb25BY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUV4RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQWV4RTs7Ozs7Ozs7QUFBQTtJQUE2RCxtRUFBeUM7SUFLbEcsaURBQVksSUFBa0Q7ZUFFMUQsa0JBQU0sSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcsMkJBQTJCLEVBQUUsbUJBQW1CLEVBQUcseUJBQXlCLEVBQUcsQ0FBQztLQUN0STs7OztJQUVTLDhEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGNBQWMsRUFBRTtZQUM5RCxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyx1QkFBdUIsRUFBRTtZQUMxRCxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3hCLElBQUksRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsdUJBQXVCLEVBQUUsT0FBTyxFQUFHLHlCQUF5QixFQUFFO1NBQ2hHLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7a0RBM0NMO0VBb0I2RCxjQUFjLEVBd0IxRSxDQUFBOzs7Ozs7Ozs7QUF4QkQsbURBd0JDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFDbGllbnROb3RpZmljYXRpb24gfSBmcm9tICcuL0thbHR1cmFDbGllbnROb3RpZmljYXRpb24nO1xuXG5pbXBvcnQgeyBLYWx0dXJhTm90aWZpY2F0aW9uVHlwZSB9IGZyb20gJy4vS2FsdHVyYU5vdGlmaWNhdGlvblR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYVJlcXVlc3QsIEthbHR1cmFSZXF1ZXN0QXJncyB9IGZyb20gJy4uL2thbHR1cmEtcmVxdWVzdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTm90aWZpY2F0aW9uR2V0Q2xpZW50Tm90aWZpY2F0aW9uQWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdEFyZ3Mge1xuICAgIGVudHJ5SWQgOiBzdHJpbmc7XG5cdHR5cGUgOiBLYWx0dXJhTm90aWZpY2F0aW9uVHlwZTtcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ25vdGlmaWNhdGlvbicgYWN0aW9uICdnZXRDbGllbnROb3RpZmljYXRpb24nLlxuICpcbiAqIFVzYWdlOiBSZXR1cm4gdGhlIG5vdGlmaWNhdGlvbnMgZm9yIGEgc3BlY2lmaWMgZW50cnkgaWQgYW5kIHR5cGVcbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICBLYWx0dXJhQ2xpZW50Tm90aWZpY2F0aW9uXG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBOb3RpZmljYXRpb25HZXRDbGllbnROb3RpZmljYXRpb25BY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdDxLYWx0dXJhQ2xpZW50Tm90aWZpY2F0aW9uPiB7XG5cbiAgICBlbnRyeUlkIDogc3RyaW5nO1xuXHR0eXBlIDogS2FsdHVyYU5vdGlmaWNhdGlvblR5cGU7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogTm90aWZpY2F0aW9uR2V0Q2xpZW50Tm90aWZpY2F0aW9uQWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAnbycsIHJlc3BvbnNlU3ViVHlwZSA6ICdLYWx0dXJhQ2xpZW50Tm90aWZpY2F0aW9uJywgcmVzcG9uc2VDb25zdHJ1Y3RvciA6IEthbHR1cmFDbGllbnROb3RpZmljYXRpb24gIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ25vdGlmaWNhdGlvbicgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2dldENsaWVudE5vdGlmaWNhdGlvbicgfSxcblx0XHRcdFx0ZW50cnlJZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR0eXBlIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYU5vdGlmaWNhdGlvblR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYU5vdGlmaWNhdGlvblR5cGUnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==