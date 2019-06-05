/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
export class NotificationGetClientNotificationAction extends KalturaRequest {
    /**
     * @param {?} data
     */
    constructor(data) {
        super(data, { responseType: 'o', responseSubType: 'KalturaClientNotification', responseConstructor: KalturaClientNotification });
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            service: { type: 'c', default: 'notification' },
            action: { type: 'c', default: 'getClientNotification' },
            entryId: { type: 's' },
            type: { type: 'en', subTypeConstructor: KalturaNotificationType, subType: 'KalturaNotificationType' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    NotificationGetClientNotificationAction.prototype.entryId;
    /** @type {?} */
    NotificationGetClientNotificationAction.prototype.type;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTm90aWZpY2F0aW9uR2V0Q2xpZW50Tm90aWZpY2F0aW9uQWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9Ob3RpZmljYXRpb25HZXRDbGllbnROb3RpZmljYXRpb25BY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRXhFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZXhFLE1BQU0sOENBQStDLFNBQVEsY0FBeUM7Ozs7SUFLbEcsWUFBWSxJQUFrRDtRQUUxRCxLQUFLLENBQUMsSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcsMkJBQTJCLEVBQUUsbUJBQW1CLEVBQUcseUJBQXlCLEVBQUcsQ0FBQyxDQUFDO0tBQ3ZJOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxjQUFjLEVBQUU7WUFDOUQsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsdUJBQXVCLEVBQUU7WUFDMUQsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN4QixJQUFJLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHVCQUF1QixFQUFFLE9BQU8sRUFBRyx5QkFBeUIsRUFBRTtTQUNoRyxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUNsaWVudE5vdGlmaWNhdGlvbiB9IGZyb20gJy4vS2FsdHVyYUNsaWVudE5vdGlmaWNhdGlvbic7XG5cbmltcG9ydCB7IEthbHR1cmFOb3RpZmljYXRpb25UeXBlIH0gZnJvbSAnLi9LYWx0dXJhTm90aWZpY2F0aW9uVHlwZSc7XG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBOb3RpZmljYXRpb25HZXRDbGllbnROb3RpZmljYXRpb25BY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAgZW50cnlJZCA6IHN0cmluZztcblx0dHlwZSA6IEthbHR1cmFOb3RpZmljYXRpb25UeXBlO1xufVxuXG4vKipcbiAqIEJ1aWxkIHJlcXVlc3QgcGF5bG9hZCBmb3Igc2VydmljZSAnbm90aWZpY2F0aW9uJyBhY3Rpb24gJ2dldENsaWVudE5vdGlmaWNhdGlvbicuXG4gKlxuICogVXNhZ2U6IFJldHVybiB0aGUgbm90aWZpY2F0aW9ucyBmb3IgYSBzcGVjaWZpYyBlbnRyeSBpZCBhbmQgdHlwZVxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIEthbHR1cmFDbGllbnROb3RpZmljYXRpb25cbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIE5vdGlmaWNhdGlvbkdldENsaWVudE5vdGlmaWNhdGlvbkFjdGlvbiBleHRlbmRzIEthbHR1cmFSZXF1ZXN0PEthbHR1cmFDbGllbnROb3RpZmljYXRpb24+IHtcblxuICAgIGVudHJ5SWQgOiBzdHJpbmc7XG5cdHR5cGUgOiBLYWx0dXJhTm90aWZpY2F0aW9uVHlwZTtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBOb3RpZmljYXRpb25HZXRDbGllbnROb3RpZmljYXRpb25BY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSwge3Jlc3BvbnNlVHlwZSA6ICdvJywgcmVzcG9uc2VTdWJUeXBlIDogJ0thbHR1cmFDbGllbnROb3RpZmljYXRpb24nLCByZXNwb25zZUNvbnN0cnVjdG9yIDogS2FsdHVyYUNsaWVudE5vdGlmaWNhdGlvbiAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnbm90aWZpY2F0aW9uJyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnZ2V0Q2xpZW50Tm90aWZpY2F0aW9uJyB9LFxuXHRcdFx0XHRlbnRyeUlkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHR5cGUgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhTm90aWZpY2F0aW9uVHlwZSwgc3ViVHlwZSA6ICdLYWx0dXJhTm90aWZpY2F0aW9uVHlwZScgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuIl19