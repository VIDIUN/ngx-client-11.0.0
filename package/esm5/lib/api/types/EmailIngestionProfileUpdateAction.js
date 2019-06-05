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
export function EmailIngestionProfileUpdateActionArgs() { }
/** @type {?} */
EmailIngestionProfileUpdateActionArgs.prototype.id;
/** @type {?} */
EmailIngestionProfileUpdateActionArgs.prototype.EmailIP;
/**
 * Build request payload for service 'EmailIngestionProfile' action 'update'.
 *
 * Usage: Update an existing EmailIngestionProfile
 *
 * Server response type:         KalturaEmailIngestionProfile
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'EmailIngestionProfile' action 'update'.
 *
 * Usage: Update an existing EmailIngestionProfile
 *
 * Server response type:         KalturaEmailIngestionProfile
 * Server failure response type: KalturaAPIException
 */
EmailIngestionProfileUpdateAction = /** @class */ (function (_super) {
    tslib_1.__extends(EmailIngestionProfileUpdateAction, _super);
    function EmailIngestionProfileUpdateAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaEmailIngestionProfile', responseConstructor: KalturaEmailIngestionProfile }) || this;
    }
    /**
     * @return {?}
     */
    EmailIngestionProfileUpdateAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'emailingestionprofile' },
            action: { type: 'c', default: 'update' },
            id: { type: 'n' },
            EmailIP: { type: 'o', subTypeConstructor: KalturaEmailIngestionProfile, subType: 'KalturaEmailIngestionProfile' }
        });
        return result;
    };
    return EmailIngestionProfileUpdateAction;
}(KalturaRequest));
/**
 * Build request payload for service 'EmailIngestionProfile' action 'update'.
 *
 * Usage: Update an existing EmailIngestionProfile
 *
 * Server response type:         KalturaEmailIngestionProfile
 * Server failure response type: KalturaAPIException
 */
export { EmailIngestionProfileUpdateAction };
if (false) {
    /** @type {?} */
    EmailIngestionProfileUpdateAction.prototype.id;
    /** @type {?} */
    EmailIngestionProfileUpdateAction.prototype.EmailIP;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW1haWxJbmdlc3Rpb25Qcm9maWxlVXBkYXRlQWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9FbWFpbEluZ2VzdGlvblByb2ZpbGVVcGRhdGVBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUU5RSxPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQWV4RTs7Ozs7Ozs7QUFBQTtJQUF1RCw2REFBNEM7SUFLL0YsMkNBQVksSUFBNEM7ZUFFcEQsa0JBQU0sSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcsOEJBQThCLEVBQUUsbUJBQW1CLEVBQUcsNEJBQTRCLEVBQUcsQ0FBQztLQUM1STs7OztJQUVTLHdEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHVCQUF1QixFQUFFO1lBQ3ZFLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLFFBQVEsRUFBRTtZQUMzQyxFQUFFLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ25CLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsNEJBQTRCLEVBQUUsT0FBTyxFQUFHLDhCQUE4QixFQUFFO1NBQzVHLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7NENBMUNMO0VBbUJ1RCxjQUFjLEVBd0JwRSxDQUFBOzs7Ozs7Ozs7QUF4QkQsNkNBd0JDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFFbWFpbEluZ2VzdGlvblByb2ZpbGUgfSBmcm9tICcuL0thbHR1cmFFbWFpbEluZ2VzdGlvblByb2ZpbGUnO1xuXG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBFbWFpbEluZ2VzdGlvblByb2ZpbGVVcGRhdGVBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAgaWQgOiBudW1iZXI7XG5cdEVtYWlsSVAgOiBLYWx0dXJhRW1haWxJbmdlc3Rpb25Qcm9maWxlO1xufVxuXG4vKipcbiAqIEJ1aWxkIHJlcXVlc3QgcGF5bG9hZCBmb3Igc2VydmljZSAnRW1haWxJbmdlc3Rpb25Qcm9maWxlJyBhY3Rpb24gJ3VwZGF0ZScuXG4gKlxuICogVXNhZ2U6IFVwZGF0ZSBhbiBleGlzdGluZyBFbWFpbEluZ2VzdGlvblByb2ZpbGVcbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICBLYWx0dXJhRW1haWxJbmdlc3Rpb25Qcm9maWxlXG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBFbWFpbEluZ2VzdGlvblByb2ZpbGVVcGRhdGVBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdDxLYWx0dXJhRW1haWxJbmdlc3Rpb25Qcm9maWxlPiB7XG5cbiAgICBpZCA6IG51bWJlcjtcblx0RW1haWxJUCA6IEthbHR1cmFFbWFpbEluZ2VzdGlvblByb2ZpbGU7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogRW1haWxJbmdlc3Rpb25Qcm9maWxlVXBkYXRlQWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAnbycsIHJlc3BvbnNlU3ViVHlwZSA6ICdLYWx0dXJhRW1haWxJbmdlc3Rpb25Qcm9maWxlJywgcmVzcG9uc2VDb25zdHJ1Y3RvciA6IEthbHR1cmFFbWFpbEluZ2VzdGlvblByb2ZpbGUgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2VtYWlsaW5nZXN0aW9ucHJvZmlsZScgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ3VwZGF0ZScgfSxcblx0XHRcdFx0aWQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0RW1haWxJUCA6IHsgdHlwZSA6ICdvJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUVtYWlsSW5nZXN0aW9uUHJvZmlsZSwgc3ViVHlwZSA6ICdLYWx0dXJhRW1haWxJbmdlc3Rpb25Qcm9maWxlJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=