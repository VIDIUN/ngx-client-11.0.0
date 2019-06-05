/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { KalturaScheduledTaskProfile } from './KalturaScheduledTaskProfile';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function ScheduledTaskProfileUpdateActionArgs() { }
/** @type {?} */
ScheduledTaskProfileUpdateActionArgs.prototype.id;
/** @type {?} */
ScheduledTaskProfileUpdateActionArgs.prototype.scheduledTaskProfile;
/**
 * Build request payload for service 'scheduledTaskProfile' action 'update'.
 *
 * Usage: Update an existing scheduled task profile
 *
 * Server response type:         KalturaScheduledTaskProfile
 * Server failure response type: KalturaAPIException
 */
export class ScheduledTaskProfileUpdateAction extends KalturaRequest {
    /**
     * @param {?} data
     */
    constructor(data) {
        super(data, { responseType: 'o', responseSubType: 'KalturaScheduledTaskProfile', responseConstructor: KalturaScheduledTaskProfile });
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            service: { type: 'c', default: 'scheduledtask_scheduledtaskprofile' },
            action: { type: 'c', default: 'update' },
            id: { type: 'n' },
            scheduledTaskProfile: { type: 'o', subTypeConstructor: KalturaScheduledTaskProfile, subType: 'KalturaScheduledTaskProfile' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    ScheduledTaskProfileUpdateAction.prototype.id;
    /** @type {?} */
    ScheduledTaskProfileUpdateAction.prototype.scheduledTaskProfile;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2NoZWR1bGVkVGFza1Byb2ZpbGVVcGRhdGVBY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL1NjaGVkdWxlZFRhc2tQcm9maWxlVXBkYXRlQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUU1RSxPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQWV4RSxNQUFNLHVDQUF3QyxTQUFRLGNBQTJDOzs7O0lBSzdGLFlBQVksSUFBMkM7UUFFbkQsS0FBSyxDQUFDLElBQUksRUFBRSxFQUFDLFlBQVksRUFBRyxHQUFHLEVBQUUsZUFBZSxFQUFHLDZCQUE2QixFQUFFLG1CQUFtQixFQUFHLDJCQUEyQixFQUFHLENBQUMsQ0FBQztLQUMzSTs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsb0NBQW9DLEVBQUU7WUFDcEYsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsUUFBUSxFQUFFO1lBQzNDLEVBQUUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDbkIsb0JBQW9CLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLDJCQUEyQixFQUFFLE9BQU8sRUFBRyw2QkFBNkIsRUFBRTtTQUN2SCxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVNjaGVkdWxlZFRhc2tQcm9maWxlIH0gZnJvbSAnLi9LYWx0dXJhU2NoZWR1bGVkVGFza1Byb2ZpbGUnO1xuXG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBTY2hlZHVsZWRUYXNrUHJvZmlsZVVwZGF0ZUFjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3RBcmdzIHtcbiAgICBpZCA6IG51bWJlcjtcblx0c2NoZWR1bGVkVGFza1Byb2ZpbGUgOiBLYWx0dXJhU2NoZWR1bGVkVGFza1Byb2ZpbGU7XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICdzY2hlZHVsZWRUYXNrUHJvZmlsZScgYWN0aW9uICd1cGRhdGUnLlxuICpcbiAqIFVzYWdlOiBVcGRhdGUgYW4gZXhpc3Rpbmcgc2NoZWR1bGVkIHRhc2sgcHJvZmlsZVxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIEthbHR1cmFTY2hlZHVsZWRUYXNrUHJvZmlsZVxuICogU2VydmVyIGZhaWx1cmUgcmVzcG9uc2UgdHlwZTogS2FsdHVyYUFQSUV4Y2VwdGlvblxuICovXG5leHBvcnQgY2xhc3MgU2NoZWR1bGVkVGFza1Byb2ZpbGVVcGRhdGVBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdDxLYWx0dXJhU2NoZWR1bGVkVGFza1Byb2ZpbGU+IHtcblxuICAgIGlkIDogbnVtYmVyO1xuXHRzY2hlZHVsZWRUYXNrUHJvZmlsZSA6IEthbHR1cmFTY2hlZHVsZWRUYXNrUHJvZmlsZTtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBTY2hlZHVsZWRUYXNrUHJvZmlsZVVwZGF0ZUFjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ28nLCByZXNwb25zZVN1YlR5cGUgOiAnS2FsdHVyYVNjaGVkdWxlZFRhc2tQcm9maWxlJywgcmVzcG9uc2VDb25zdHJ1Y3RvciA6IEthbHR1cmFTY2hlZHVsZWRUYXNrUHJvZmlsZSAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnc2NoZWR1bGVkdGFza19zY2hlZHVsZWR0YXNrcHJvZmlsZScgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ3VwZGF0ZScgfSxcblx0XHRcdFx0aWQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0c2NoZWR1bGVkVGFza1Byb2ZpbGUgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFTY2hlZHVsZWRUYXNrUHJvZmlsZSwgc3ViVHlwZSA6ICdLYWx0dXJhU2NoZWR1bGVkVGFza1Byb2ZpbGUnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==