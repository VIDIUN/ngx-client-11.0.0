/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { KalturaAdminUser } from './KalturaAdminUser';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function AdminUserUpdatePasswordActionArgs() { }
/** @type {?} */
AdminUserUpdatePasswordActionArgs.prototype.email;
/** @type {?} */
AdminUserUpdatePasswordActionArgs.prototype.password;
/** @type {?|undefined} */
AdminUserUpdatePasswordActionArgs.prototype.newEmail;
/** @type {?|undefined} */
AdminUserUpdatePasswordActionArgs.prototype.newPassword;
/**
 * Build request payload for service 'adminUser' action 'updatePassword'.
 *
 * Usage: Update admin user password and email
 *
 * Server response type:         KalturaAdminUser
 * Server failure response type: KalturaAPIException
 */
export class AdminUserUpdatePasswordAction extends KalturaRequest {
    /**
     * @param {?} data
     */
    constructor(data) {
        super(data, { responseType: 'o', responseSubType: 'KalturaAdminUser', responseConstructor: KalturaAdminUser });
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            service: { type: 'c', default: 'adminuser' },
            action: { type: 'c', default: 'updatePassword' },
            email: { type: 's' },
            password: { type: 's' },
            newEmail: { type: 's' },
            newPassword: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    AdminUserUpdatePasswordAction.prototype.email;
    /** @type {?} */
    AdminUserUpdatePasswordAction.prototype.password;
    /** @type {?} */
    AdminUserUpdatePasswordAction.prototype.newEmail;
    /** @type {?} */
    AdminUserUpdatePasswordAction.prototype.newPassword;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWRtaW5Vc2VyVXBkYXRlUGFzc3dvcmRBY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0FkbWluVXNlclVwZGF0ZVBhc3N3b3JkQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV0RCxPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQnhFLE1BQU0sb0NBQXFDLFNBQVEsY0FBZ0M7Ozs7SUFPL0UsWUFBWSxJQUF3QztRQUVoRCxLQUFLLENBQUMsSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcsa0JBQWtCLEVBQUUsbUJBQW1CLEVBQUcsZ0JBQWdCLEVBQUcsQ0FBQyxDQUFDO0tBQ3JIOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxXQUFXLEVBQUU7WUFDM0QsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsZ0JBQWdCLEVBQUU7WUFDbkQsS0FBSyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN0QixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNuQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUFkbWluVXNlciB9IGZyb20gJy4vS2FsdHVyYUFkbWluVXNlcic7XG5cbmltcG9ydCB7IEthbHR1cmFSZXF1ZXN0LCBLYWx0dXJhUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFkbWluVXNlclVwZGF0ZVBhc3N3b3JkQWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdEFyZ3Mge1xuICAgIGVtYWlsIDogc3RyaW5nO1xuXHRwYXNzd29yZCA6IHN0cmluZztcblx0bmV3RW1haWw/IDogc3RyaW5nO1xuXHRuZXdQYXNzd29yZD8gOiBzdHJpbmc7XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICdhZG1pblVzZXInIGFjdGlvbiAndXBkYXRlUGFzc3dvcmQnLlxuICpcbiAqIFVzYWdlOiBVcGRhdGUgYWRtaW4gdXNlciBwYXNzd29yZCBhbmQgZW1haWxcbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICBLYWx0dXJhQWRtaW5Vc2VyXG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBBZG1pblVzZXJVcGRhdGVQYXNzd29yZEFjdGlvbiBleHRlbmRzIEthbHR1cmFSZXF1ZXN0PEthbHR1cmFBZG1pblVzZXI+IHtcblxuICAgIGVtYWlsIDogc3RyaW5nO1xuXHRwYXNzd29yZCA6IHN0cmluZztcblx0bmV3RW1haWwgOiBzdHJpbmc7XG5cdG5ld1Bhc3N3b3JkIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YSA6IEFkbWluVXNlclVwZGF0ZVBhc3N3b3JkQWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAnbycsIHJlc3BvbnNlU3ViVHlwZSA6ICdLYWx0dXJhQWRtaW5Vc2VyJywgcmVzcG9uc2VDb25zdHJ1Y3RvciA6IEthbHR1cmFBZG1pblVzZXIgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2FkbWludXNlcicgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ3VwZGF0ZVBhc3N3b3JkJyB9LFxuXHRcdFx0XHRlbWFpbCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRwYXNzd29yZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRuZXdFbWFpbCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRuZXdQYXNzd29yZCA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=