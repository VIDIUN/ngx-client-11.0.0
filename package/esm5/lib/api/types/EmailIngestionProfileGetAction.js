/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaEmailIngestionProfile } from './KalturaEmailIngestionProfile';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function EmailIngestionProfileGetActionArgs() { }
/** @type {?} */
EmailIngestionProfileGetActionArgs.prototype.id;
/**
 * Build request payload for service 'EmailIngestionProfile' action 'get'.
 *
 * Usage: Retrieve a EmailIngestionProfile by id
 *
 * Server response type:         KalturaEmailIngestionProfile
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'EmailIngestionProfile' action 'get'.
 *
 * Usage: Retrieve a EmailIngestionProfile by id
 *
 * Server response type:         KalturaEmailIngestionProfile
 * Server failure response type: KalturaAPIException
 */
EmailIngestionProfileGetAction = /** @class */ (function (_super) {
    tslib_1.__extends(EmailIngestionProfileGetAction, _super);
    function EmailIngestionProfileGetAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaEmailIngestionProfile', responseConstructor: KalturaEmailIngestionProfile }) || this;
    }
    /**
     * @return {?}
     */
    EmailIngestionProfileGetAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'emailingestionprofile' },
            action: { type: 'c', default: 'get' },
            id: { type: 'n' }
        });
        return result;
    };
    return EmailIngestionProfileGetAction;
}(KalturaRequest));
/**
 * Build request payload for service 'EmailIngestionProfile' action 'get'.
 *
 * Usage: Retrieve a EmailIngestionProfile by id
 *
 * Server response type:         KalturaEmailIngestionProfile
 * Server failure response type: KalturaAPIException
 */
export { EmailIngestionProfileGetAction };
if (false) {
    /** @type {?} */
    EmailIngestionProfileGetAction.prototype.id;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW1haWxJbmdlc3Rpb25Qcm9maWxlR2V0QWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9FbWFpbEluZ2VzdGlvblByb2ZpbGVHZXRBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUU5RSxPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUFjeEU7Ozs7Ozs7O0FBQUE7SUFBb0QsMERBQTRDO0lBSTVGLHdDQUFZLElBQXlDO2VBRWpELGtCQUFNLElBQUksRUFBRSxFQUFDLFlBQVksRUFBRyxHQUFHLEVBQUUsZUFBZSxFQUFHLDhCQUE4QixFQUFFLG1CQUFtQixFQUFHLDRCQUE0QixFQUFHLENBQUM7S0FDNUk7Ozs7SUFFUyxxREFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyx1QkFBdUIsRUFBRTtZQUN2RSxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxLQUFLLEVBQUU7WUFDeEMsRUFBRSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNWLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7eUNBdkNMO0VBa0JvRCxjQUFjLEVBc0JqRSxDQUFBOzs7Ozs7Ozs7QUF0QkQsMENBc0JDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFFbWFpbEluZ2VzdGlvblByb2ZpbGUgfSBmcm9tICcuL0thbHR1cmFFbWFpbEluZ2VzdGlvblByb2ZpbGUnO1xuXG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBFbWFpbEluZ2VzdGlvblByb2ZpbGVHZXRBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAgaWQgOiBudW1iZXI7XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICdFbWFpbEluZ2VzdGlvblByb2ZpbGUnIGFjdGlvbiAnZ2V0Jy5cbiAqXG4gKiBVc2FnZTogUmV0cmlldmUgYSBFbWFpbEluZ2VzdGlvblByb2ZpbGUgYnkgaWRcbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICBLYWx0dXJhRW1haWxJbmdlc3Rpb25Qcm9maWxlXG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBFbWFpbEluZ2VzdGlvblByb2ZpbGVHZXRBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdDxLYWx0dXJhRW1haWxJbmdlc3Rpb25Qcm9maWxlPiB7XG5cbiAgICBpZCA6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBFbWFpbEluZ2VzdGlvblByb2ZpbGVHZXRBY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSwge3Jlc3BvbnNlVHlwZSA6ICdvJywgcmVzcG9uc2VTdWJUeXBlIDogJ0thbHR1cmFFbWFpbEluZ2VzdGlvblByb2ZpbGUnLCByZXNwb25zZUNvbnN0cnVjdG9yIDogS2FsdHVyYUVtYWlsSW5nZXN0aW9uUHJvZmlsZSAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnZW1haWxpbmdlc3Rpb25wcm9maWxlJyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnZ2V0JyB9LFxuXHRcdFx0XHRpZCA6IHsgdHlwZSA6ICduJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=