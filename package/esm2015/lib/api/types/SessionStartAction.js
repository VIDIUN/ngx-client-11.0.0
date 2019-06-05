/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { KalturaSessionType } from './KalturaSessionType';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function SessionStartActionArgs() { }
/** @type {?} */
SessionStartActionArgs.prototype.secret;
/** @type {?|undefined} */
SessionStartActionArgs.prototype.userId;
/** @type {?|undefined} */
SessionStartActionArgs.prototype.type;
/** @type {?|undefined} */
SessionStartActionArgs.prototype.partnerId;
/** @type {?|undefined} */
SessionStartActionArgs.prototype.expiry;
/** @type {?|undefined} */
SessionStartActionArgs.prototype.privileges;
/**
 * Build request payload for service 'session' action 'start'.
 *
 * Usage: Start a session with Kaltura's server.
 * The result KS is the session key that you should pass to all services that requires a ticket
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 */
export class SessionStartAction extends KalturaRequest {
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
            action: { type: 'c', default: 'start' },
            secret: { type: 's' },
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
    SessionStartAction.prototype.secret;
    /** @type {?} */
    SessionStartAction.prototype.userId;
    /** @type {?} */
    SessionStartAction.prototype.type;
    /** @type {?} */
    SessionStartAction.prototype.partnerId;
    /** @type {?} */
    SessionStartAction.prototype.expiry;
    /** @type {?} */
    SessionStartAction.prototype.privileges;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2Vzc2lvblN0YXJ0QWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9TZXNzaW9uU3RhcnRBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUlBLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzFELE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0J4RSxNQUFNLHlCQUEwQixTQUFRLGNBQXNCOzs7O0lBUzFELFlBQVksSUFBNkI7UUFFckMsS0FBSyxDQUFDLElBQUksRUFBRSxFQUFDLFlBQVksRUFBRyxHQUFHLEVBQUUsZUFBZSxFQUFHLEVBQUUsRUFBRSxtQkFBbUIsRUFBRyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ3JGLEVBQUUsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLE1BQU0sS0FBSyxXQUFXLENBQUM7WUFBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztLQUMvRDs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsU0FBUyxFQUFFO1lBQ3pELE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLE9BQU8sRUFBRTtZQUMxQyxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3ZCLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDdkIsSUFBSSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxrQkFBa0IsRUFBRSxPQUFPLEVBQUcsb0JBQW9CLEVBQUU7WUFDL0YsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMxQixNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3ZCLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDbEIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcblxuXG5pbXBvcnQgeyBLYWx0dXJhU2Vzc2lvblR5cGUgfSBmcm9tICcuL0thbHR1cmFTZXNzaW9uVHlwZSc7XG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBTZXNzaW9uU3RhcnRBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAgc2VjcmV0IDogc3RyaW5nO1xuXHR1c2VySWQ/IDogc3RyaW5nO1xuXHR0eXBlPyA6IEthbHR1cmFTZXNzaW9uVHlwZTtcblx0cGFydG5lcklkPyA6IG51bWJlcjtcblx0ZXhwaXJ5PyA6IG51bWJlcjtcblx0cHJpdmlsZWdlcz8gOiBzdHJpbmc7XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICdzZXNzaW9uJyBhY3Rpb24gJ3N0YXJ0Jy5cbiAqXG4gKiBVc2FnZTogU3RhcnQgYSBzZXNzaW9uIHdpdGggS2FsdHVyYSdzIHNlcnZlci5cbiAqIFRoZSByZXN1bHQgS1MgaXMgdGhlIHNlc3Npb24ga2V5IHRoYXQgeW91IHNob3VsZCBwYXNzIHRvIGFsbCBzZXJ2aWNlcyB0aGF0IHJlcXVpcmVzIGEgdGlja2V0XG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgc3RyaW5nXG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBTZXNzaW9uU3RhcnRBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdDxzdHJpbmc+IHtcblxuICAgIHNlY3JldCA6IHN0cmluZztcblx0dXNlcklkIDogc3RyaW5nO1xuXHR0eXBlIDogS2FsdHVyYVNlc3Npb25UeXBlO1xuXHRwYXJ0bmVySWQgOiBudW1iZXI7XG5cdGV4cGlyeSA6IG51bWJlcjtcblx0cHJpdmlsZWdlcyA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBTZXNzaW9uU3RhcnRBY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSwge3Jlc3BvbnNlVHlwZSA6ICdzJywgcmVzcG9uc2VTdWJUeXBlIDogJycsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBudWxsIH0pO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuZXhwaXJ5ID09PSAndW5kZWZpbmVkJykgdGhpcy5leHBpcnkgPSA4NjQwMDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VydmljZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdzZXNzaW9uJyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnc3RhcnQnIH0sXG5cdFx0XHRcdHNlY3JldCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR1c2VySWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0dHlwZSA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFTZXNzaW9uVHlwZSwgc3ViVHlwZSA6ICdLYWx0dXJhU2Vzc2lvblR5cGUnIH0sXG5cdFx0XHRcdHBhcnRuZXJJZCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRleHBpcnkgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0cHJpdmlsZWdlcyA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=