/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { KalturaAccessControlProfile } from './KalturaAccessControlProfile';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function AccessControlProfileAddActionArgs() { }
/** @type {?} */
AccessControlProfileAddActionArgs.prototype.accessControlProfile;
/**
 * Build request payload for service 'accessControlProfile' action 'add'.
 *
 * Usage: Add new access control profile
 *
 * Server response type:         KalturaAccessControlProfile
 * Server failure response type: KalturaAPIException
 */
export class AccessControlProfileAddAction extends KalturaRequest {
    /**
     * @param {?} data
     */
    constructor(data) {
        super(data, { responseType: 'o', responseSubType: 'KalturaAccessControlProfile', responseConstructor: KalturaAccessControlProfile });
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            service: { type: 'c', default: 'accesscontrolprofile' },
            action: { type: 'c', default: 'add' },
            accessControlProfile: { type: 'o', subTypeConstructor: KalturaAccessControlProfile, subType: 'KalturaAccessControlProfile' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    AccessControlProfileAddAction.prototype.accessControlProfile;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWNjZXNzQ29udHJvbFByb2ZpbGVBZGRBY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0FjY2Vzc0NvbnRyb2xQcm9maWxlQWRkQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUU1RSxPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUFjeEUsTUFBTSxvQ0FBcUMsU0FBUSxjQUEyQzs7OztJQUkxRixZQUFZLElBQXdDO1FBRWhELEtBQUssQ0FBQyxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRyw2QkFBNkIsRUFBRSxtQkFBbUIsRUFBRywyQkFBMkIsRUFBRyxDQUFDLENBQUM7S0FDM0k7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHNCQUFzQixFQUFFO1lBQ3RFLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLEtBQUssRUFBRTtZQUN4QyxvQkFBb0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsMkJBQTJCLEVBQUUsT0FBTyxFQUFHLDZCQUE2QixFQUFFO1NBQ3ZILENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSiIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhQWNjZXNzQ29udHJvbFByb2ZpbGUgfSBmcm9tICcuL0thbHR1cmFBY2Nlc3NDb250cm9sUHJvZmlsZSc7XG5cbmltcG9ydCB7IEthbHR1cmFSZXF1ZXN0LCBLYWx0dXJhUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFjY2Vzc0NvbnRyb2xQcm9maWxlQWRkQWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdEFyZ3Mge1xuICAgIGFjY2Vzc0NvbnRyb2xQcm9maWxlIDogS2FsdHVyYUFjY2Vzc0NvbnRyb2xQcm9maWxlO1xufVxuXG4vKipcbiAqIEJ1aWxkIHJlcXVlc3QgcGF5bG9hZCBmb3Igc2VydmljZSAnYWNjZXNzQ29udHJvbFByb2ZpbGUnIGFjdGlvbiAnYWRkJy5cbiAqXG4gKiBVc2FnZTogQWRkIG5ldyBhY2Nlc3MgY29udHJvbCBwcm9maWxlXG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgS2FsdHVyYUFjY2Vzc0NvbnRyb2xQcm9maWxlXG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBBY2Nlc3NDb250cm9sUHJvZmlsZUFkZEFjdGlvbiBleHRlbmRzIEthbHR1cmFSZXF1ZXN0PEthbHR1cmFBY2Nlc3NDb250cm9sUHJvZmlsZT4ge1xuXG4gICAgYWNjZXNzQ29udHJvbFByb2ZpbGUgOiBLYWx0dXJhQWNjZXNzQ29udHJvbFByb2ZpbGU7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogQWNjZXNzQ29udHJvbFByb2ZpbGVBZGRBY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSwge3Jlc3BvbnNlVHlwZSA6ICdvJywgcmVzcG9uc2VTdWJUeXBlIDogJ0thbHR1cmFBY2Nlc3NDb250cm9sUHJvZmlsZScsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBLYWx0dXJhQWNjZXNzQ29udHJvbFByb2ZpbGUgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2FjY2Vzc2NvbnRyb2xwcm9maWxlJyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnYWRkJyB9LFxuXHRcdFx0XHRhY2Nlc3NDb250cm9sUHJvZmlsZSA6IHsgdHlwZSA6ICdvJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUFjY2Vzc0NvbnRyb2xQcm9maWxlLCBzdWJUeXBlIDogJ0thbHR1cmFBY2Nlc3NDb250cm9sUHJvZmlsZScgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuIl19