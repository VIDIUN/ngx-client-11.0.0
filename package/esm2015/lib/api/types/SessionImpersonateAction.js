/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { KalturaSessionType } from './KalturaSessionType';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function SessionImpersonateActionArgs() { }
/** @type {?} */
SessionImpersonateActionArgs.prototype.secret;
/** @type {?} */
SessionImpersonateActionArgs.prototype.impersonatedPartnerId;
/** @type {?|undefined} */
SessionImpersonateActionArgs.prototype.userId;
/** @type {?|undefined} */
SessionImpersonateActionArgs.prototype.type;
/** @type {?|undefined} */
SessionImpersonateActionArgs.prototype.partnerId;
/** @type {?|undefined} */
SessionImpersonateActionArgs.prototype.expiry;
/** @type {?|undefined} */
SessionImpersonateActionArgs.prototype.privileges;
/**
 * Build request payload for service 'session' action 'impersonate'.
 *
 * Usage: Start an impersonated session with Kaltura's server.
 * The result KS is the session key that you should pass to all services that requires a ticket
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 */
export class SessionImpersonateAction extends KalturaRequest {
    /**
     * @param {?} data
     */
    constructor(data) {
        super(data, { responseType: 's', responseSubType: '', responseConstructor: null });
        if (typeof this.expiry === 'undefined')
            this.expiry = 86400;
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            service: { type: 'c', default: 'session' },
            action: { type: 'c', default: 'impersonate' },
            secret: { type: 's' },
            impersonatedPartnerId: { type: 'n' },
            userId: { type: 's' },
            type: { type: 'en', subTypeConstructor: KalturaSessionType, subType: 'KalturaSessionType' },
            partnerId: { type: 'n' },
            expiry: { type: 'n' },
            privileges: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    SessionImpersonateAction.prototype.secret;
    /** @type {?} */
    SessionImpersonateAction.prototype.impersonatedPartnerId;
    /** @type {?} */
    SessionImpersonateAction.prototype.userId;
    /** @type {?} */
    SessionImpersonateAction.prototype.type;
    /** @type {?} */
    SessionImpersonateAction.prototype.partnerId;
    /** @type {?} */
    SessionImpersonateAction.prototype.expiry;
    /** @type {?} */
    SessionImpersonateAction.prototype.privileges;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2Vzc2lvbkltcGVyc29uYXRlQWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9TZXNzaW9uSW1wZXJzb25hdGVBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUlBLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzFELE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQnhFLE1BQU0sK0JBQWdDLFNBQVEsY0FBc0I7Ozs7SUFVaEUsWUFBWSxJQUFtQztRQUUzQyxLQUFLLENBQUMsSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcsRUFBRSxFQUFFLG1CQUFtQixFQUFHLElBQUksRUFBRSxDQUFDLENBQUM7UUFDckYsRUFBRSxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsTUFBTSxLQUFLLFdBQVcsQ0FBQztZQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0tBQy9EOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxTQUFTLEVBQUU7WUFDekQsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsYUFBYSxFQUFFO1lBQ2hELE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDdkIscUJBQXFCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3RDLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDdkIsSUFBSSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxrQkFBa0IsRUFBRSxPQUFPLEVBQUcsb0JBQW9CLEVBQUU7WUFDL0YsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMxQixNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3ZCLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDbEIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcblxuXG5pbXBvcnQgeyBLYWx0dXJhU2Vzc2lvblR5cGUgfSBmcm9tICcuL0thbHR1cmFTZXNzaW9uVHlwZSc7XG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBTZXNzaW9uSW1wZXJzb25hdGVBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAgc2VjcmV0IDogc3RyaW5nO1xuXHRpbXBlcnNvbmF0ZWRQYXJ0bmVySWQgOiBudW1iZXI7XG5cdHVzZXJJZD8gOiBzdHJpbmc7XG5cdHR5cGU/IDogS2FsdHVyYVNlc3Npb25UeXBlO1xuXHRwYXJ0bmVySWQ/IDogbnVtYmVyO1xuXHRleHBpcnk/IDogbnVtYmVyO1xuXHRwcml2aWxlZ2VzPyA6IHN0cmluZztcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ3Nlc3Npb24nIGFjdGlvbiAnaW1wZXJzb25hdGUnLlxuICpcbiAqIFVzYWdlOiBTdGFydCBhbiBpbXBlcnNvbmF0ZWQgc2Vzc2lvbiB3aXRoIEthbHR1cmEncyBzZXJ2ZXIuXG4gKiBUaGUgcmVzdWx0IEtTIGlzIHRoZSBzZXNzaW9uIGtleSB0aGF0IHlvdSBzaG91bGQgcGFzcyB0byBhbGwgc2VydmljZXMgdGhhdCByZXF1aXJlcyBhIHRpY2tldFxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIHN0cmluZ1xuICogU2VydmVyIGZhaWx1cmUgcmVzcG9uc2UgdHlwZTogS2FsdHVyYUFQSUV4Y2VwdGlvblxuICovXG5leHBvcnQgY2xhc3MgU2Vzc2lvbkltcGVyc29uYXRlQWN0aW9uIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3Q8c3RyaW5nPiB7XG5cbiAgICBzZWNyZXQgOiBzdHJpbmc7XG5cdGltcGVyc29uYXRlZFBhcnRuZXJJZCA6IG51bWJlcjtcblx0dXNlcklkIDogc3RyaW5nO1xuXHR0eXBlIDogS2FsdHVyYVNlc3Npb25UeXBlO1xuXHRwYXJ0bmVySWQgOiBudW1iZXI7XG5cdGV4cGlyeSA6IG51bWJlcjtcblx0cHJpdmlsZWdlcyA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBTZXNzaW9uSW1wZXJzb25hdGVBY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSwge3Jlc3BvbnNlVHlwZSA6ICdzJywgcmVzcG9uc2VTdWJUeXBlIDogJycsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBudWxsIH0pO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuZXhwaXJ5ID09PSAndW5kZWZpbmVkJykgdGhpcy5leHBpcnkgPSA4NjQwMDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VydmljZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdzZXNzaW9uJyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnaW1wZXJzb25hdGUnIH0sXG5cdFx0XHRcdHNlY3JldCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRpbXBlcnNvbmF0ZWRQYXJ0bmVySWQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0dXNlcklkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHR5cGUgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhU2Vzc2lvblR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYVNlc3Npb25UeXBlJyB9LFxuXHRcdFx0XHRwYXJ0bmVySWQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0ZXhwaXJ5IDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHByaXZpbGVnZXMgOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuIl19