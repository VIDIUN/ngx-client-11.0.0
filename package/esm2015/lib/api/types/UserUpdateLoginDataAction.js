/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function UserUpdateLoginDataActionArgs() { }
/** @type {?} */
UserUpdateLoginDataActionArgs.prototype.oldLoginId;
/** @type {?} */
UserUpdateLoginDataActionArgs.prototype.password;
/** @type {?|undefined} */
UserUpdateLoginDataActionArgs.prototype.newLoginId;
/** @type {?|undefined} */
UserUpdateLoginDataActionArgs.prototype.newPassword;
/** @type {?|undefined} */
UserUpdateLoginDataActionArgs.prototype.newFirstName;
/** @type {?|undefined} */
UserUpdateLoginDataActionArgs.prototype.newLastName;
/**
 * Build request payload for service 'user' action 'updateLoginData'.
 *
 * Usage: Updates a user's login data: email, password, name
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
export class UserUpdateLoginDataAction extends KalturaRequest {
    /**
     * @param {?} data
     */
    constructor(data) {
        super(data, { responseType: 'v', responseSubType: '', responseConstructor: null });
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            service: { type: 'c', default: 'user' },
            action: { type: 'c', default: 'updateLoginData' },
            oldLoginId: { type: 's' },
            password: { type: 's' },
            newLoginId: { type: 's' },
            newPassword: { type: 's' },
            newFirstName: { type: 's' },
            newLastName: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    UserUpdateLoginDataAction.prototype.oldLoginId;
    /** @type {?} */
    UserUpdateLoginDataAction.prototype.password;
    /** @type {?} */
    UserUpdateLoginDataAction.prototype.newLoginId;
    /** @type {?} */
    UserUpdateLoginDataAction.prototype.newPassword;
    /** @type {?} */
    UserUpdateLoginDataAction.prototype.newFirstName;
    /** @type {?} */
    UserUpdateLoginDataAction.prototype.newLastName;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlclVwZGF0ZUxvZ2luRGF0YUFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvVXNlclVwZGF0ZUxvZ2luRGF0YUFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBSUEsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1CeEUsTUFBTSxnQ0FBaUMsU0FBUSxjQUFvQjs7OztJQVMvRCxZQUFZLElBQW9DO1FBRTVDLEtBQUssQ0FBQyxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRyxFQUFFLEVBQUUsbUJBQW1CLEVBQUcsSUFBSSxFQUFFLENBQUMsQ0FBQztLQUN4Rjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsTUFBTSxFQUFFO1lBQ3RELE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGlCQUFpQixFQUFFO1lBQ3BELFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDM0IsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzNCLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUIsWUFBWSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM3QixXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ25CLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSiIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5cblxuaW1wb3J0IHsgS2FsdHVyYVJlcXVlc3QsIEthbHR1cmFSZXF1ZXN0QXJncyB9IGZyb20gJy4uL2thbHR1cmEtcmVxdWVzdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXNlclVwZGF0ZUxvZ2luRGF0YUFjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3RBcmdzIHtcbiAgICBvbGRMb2dpbklkIDogc3RyaW5nO1xuXHRwYXNzd29yZCA6IHN0cmluZztcblx0bmV3TG9naW5JZD8gOiBzdHJpbmc7XG5cdG5ld1Bhc3N3b3JkPyA6IHN0cmluZztcblx0bmV3Rmlyc3ROYW1lPyA6IHN0cmluZztcblx0bmV3TGFzdE5hbWU/IDogc3RyaW5nO1xufVxuXG4vKipcbiAqIEJ1aWxkIHJlcXVlc3QgcGF5bG9hZCBmb3Igc2VydmljZSAndXNlcicgYWN0aW9uICd1cGRhdGVMb2dpbkRhdGEnLlxuICpcbiAqIFVzYWdlOiBVcGRhdGVzIGEgdXNlcidzIGxvZ2luIGRhdGE6IGVtYWlsLCBwYXNzd29yZCwgbmFtZVxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIHZvaWRcbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIFVzZXJVcGRhdGVMb2dpbkRhdGFBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdDx2b2lkPiB7XG5cbiAgICBvbGRMb2dpbklkIDogc3RyaW5nO1xuXHRwYXNzd29yZCA6IHN0cmluZztcblx0bmV3TG9naW5JZCA6IHN0cmluZztcblx0bmV3UGFzc3dvcmQgOiBzdHJpbmc7XG5cdG5ld0ZpcnN0TmFtZSA6IHN0cmluZztcblx0bmV3TGFzdE5hbWUgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogVXNlclVwZGF0ZUxvZ2luRGF0YUFjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ3YnLCByZXNwb25zZVN1YlR5cGUgOiAnJywgcmVzcG9uc2VDb25zdHJ1Y3RvciA6IG51bGwgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAndXNlcicgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ3VwZGF0ZUxvZ2luRGF0YScgfSxcblx0XHRcdFx0b2xkTG9naW5JZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRwYXNzd29yZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRuZXdMb2dpbklkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdG5ld1Bhc3N3b3JkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdG5ld0ZpcnN0TmFtZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRuZXdMYXN0TmFtZSA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=