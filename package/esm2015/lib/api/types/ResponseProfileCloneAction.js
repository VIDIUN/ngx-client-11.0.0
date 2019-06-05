/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { KalturaResponseProfile } from './KalturaResponseProfile';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function ResponseProfileCloneActionArgs() { }
/** @type {?} */
ResponseProfileCloneActionArgs.prototype.id;
/** @type {?} */
ResponseProfileCloneActionArgs.prototype.profile;
/**
 * Build request payload for service 'responseProfile' action 'clone'.
 *
 * Usage: Clone an existing response profile
 *
 * Server response type:         KalturaResponseProfile
 * Server failure response type: KalturaAPIException
 */
export class ResponseProfileCloneAction extends KalturaRequest {
    /**
     * @param {?} data
     */
    constructor(data) {
        super(data, { responseType: 'o', responseSubType: 'KalturaResponseProfile', responseConstructor: KalturaResponseProfile });
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            service: { type: 'c', default: 'responseprofile' },
            action: { type: 'c', default: 'clone' },
            id: { type: 'n' },
            profile: { type: 'o', subTypeConstructor: KalturaResponseProfile, subType: 'KalturaResponseProfile' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    ResponseProfileCloneAction.prototype.id;
    /** @type {?} */
    ResponseProfileCloneAction.prototype.profile;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVzcG9uc2VQcm9maWxlQ2xvbmVBY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL1Jlc3BvbnNlUHJvZmlsZUNsb25lQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUVsRSxPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQWV4RSxNQUFNLGlDQUFrQyxTQUFRLGNBQXNDOzs7O0lBS2xGLFlBQVksSUFBcUM7UUFFN0MsS0FBSyxDQUFDLElBQUksRUFBRSxFQUFDLFlBQVksRUFBRyxHQUFHLEVBQUUsZUFBZSxFQUFHLHdCQUF3QixFQUFFLG1CQUFtQixFQUFHLHNCQUFzQixFQUFHLENBQUMsQ0FBQztLQUNqSTs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsaUJBQWlCLEVBQUU7WUFDakUsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsT0FBTyxFQUFFO1lBQzFDLEVBQUUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDbkIsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxzQkFBc0IsRUFBRSxPQUFPLEVBQUcsd0JBQXdCLEVBQUU7U0FDaEcsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFSZXNwb25zZVByb2ZpbGUgfSBmcm9tICcuL0thbHR1cmFSZXNwb25zZVByb2ZpbGUnO1xuXG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBSZXNwb25zZVByb2ZpbGVDbG9uZUFjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3RBcmdzIHtcbiAgICBpZCA6IG51bWJlcjtcblx0cHJvZmlsZSA6IEthbHR1cmFSZXNwb25zZVByb2ZpbGU7XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICdyZXNwb25zZVByb2ZpbGUnIGFjdGlvbiAnY2xvbmUnLlxuICpcbiAqIFVzYWdlOiBDbG9uZSBhbiBleGlzdGluZyByZXNwb25zZSBwcm9maWxlXG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgS2FsdHVyYVJlc3BvbnNlUHJvZmlsZVxuICogU2VydmVyIGZhaWx1cmUgcmVzcG9uc2UgdHlwZTogS2FsdHVyYUFQSUV4Y2VwdGlvblxuICovXG5leHBvcnQgY2xhc3MgUmVzcG9uc2VQcm9maWxlQ2xvbmVBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdDxLYWx0dXJhUmVzcG9uc2VQcm9maWxlPiB7XG5cbiAgICBpZCA6IG51bWJlcjtcblx0cHJvZmlsZSA6IEthbHR1cmFSZXNwb25zZVByb2ZpbGU7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogUmVzcG9uc2VQcm9maWxlQ2xvbmVBY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSwge3Jlc3BvbnNlVHlwZSA6ICdvJywgcmVzcG9uc2VTdWJUeXBlIDogJ0thbHR1cmFSZXNwb25zZVByb2ZpbGUnLCByZXNwb25zZUNvbnN0cnVjdG9yIDogS2FsdHVyYVJlc3BvbnNlUHJvZmlsZSAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAncmVzcG9uc2Vwcm9maWxlJyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnY2xvbmUnIH0sXG5cdFx0XHRcdGlkIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHByb2ZpbGUgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFSZXNwb25zZVByb2ZpbGUsIHN1YlR5cGUgOiAnS2FsdHVyYVJlc3BvbnNlUHJvZmlsZScgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuIl19