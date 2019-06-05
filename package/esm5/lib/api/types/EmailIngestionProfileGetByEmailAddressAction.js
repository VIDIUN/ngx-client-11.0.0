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
export function EmailIngestionProfileGetByEmailAddressActionArgs() { }
/** @type {?} */
EmailIngestionProfileGetByEmailAddressActionArgs.prototype.emailAddress;
/**
 * Build request payload for service 'EmailIngestionProfile' action 'getByEmailAddress'.
 *
 * Usage: Retrieve a EmailIngestionProfile by email address
 *
 * Server response type:         KalturaEmailIngestionProfile
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'EmailIngestionProfile' action 'getByEmailAddress'.
 *
 * Usage: Retrieve a EmailIngestionProfile by email address
 *
 * Server response type:         KalturaEmailIngestionProfile
 * Server failure response type: KalturaAPIException
 */
EmailIngestionProfileGetByEmailAddressAction = /** @class */ (function (_super) {
    tslib_1.__extends(EmailIngestionProfileGetByEmailAddressAction, _super);
    function EmailIngestionProfileGetByEmailAddressAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaEmailIngestionProfile', responseConstructor: KalturaEmailIngestionProfile }) || this;
    }
    /**
     * @return {?}
     */
    EmailIngestionProfileGetByEmailAddressAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'emailingestionprofile' },
            action: { type: 'c', default: 'getByEmailAddress' },
            emailAddress: { type: 's' }
        });
        return result;
    };
    return EmailIngestionProfileGetByEmailAddressAction;
}(KalturaRequest));
/**
 * Build request payload for service 'EmailIngestionProfile' action 'getByEmailAddress'.
 *
 * Usage: Retrieve a EmailIngestionProfile by email address
 *
 * Server response type:         KalturaEmailIngestionProfile
 * Server failure response type: KalturaAPIException
 */
export { EmailIngestionProfileGetByEmailAddressAction };
if (false) {
    /** @type {?} */
    EmailIngestionProfileGetByEmailAddressAction.prototype.emailAddress;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW1haWxJbmdlc3Rpb25Qcm9maWxlR2V0QnlFbWFpbEFkZHJlc3NBY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0VtYWlsSW5nZXN0aW9uUHJvZmlsZUdldEJ5RW1haWxBZGRyZXNzQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFFOUUsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FBY3hFOzs7Ozs7OztBQUFBO0lBQWtFLHdFQUE0QztJQUkxRyxzREFBWSxJQUF1RDtlQUUvRCxrQkFBTSxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRyw4QkFBOEIsRUFBRSxtQkFBbUIsRUFBRyw0QkFBNEIsRUFBRyxDQUFDO0tBQzVJOzs7O0lBRVMsbUVBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsdUJBQXVCLEVBQUU7WUFDdkUsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsbUJBQW1CLEVBQUU7WUFDdEQsWUFBWSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNwQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO3VEQXZDTDtFQWtCa0UsY0FBYyxFQXNCL0UsQ0FBQTs7Ozs7Ozs7O0FBdEJELHdEQXNCQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhRW1haWxJbmdlc3Rpb25Qcm9maWxlIH0gZnJvbSAnLi9LYWx0dXJhRW1haWxJbmdlc3Rpb25Qcm9maWxlJztcblxuaW1wb3J0IHsgS2FsdHVyYVJlcXVlc3QsIEthbHR1cmFSZXF1ZXN0QXJncyB9IGZyb20gJy4uL2thbHR1cmEtcmVxdWVzdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRW1haWxJbmdlc3Rpb25Qcm9maWxlR2V0QnlFbWFpbEFkZHJlc3NBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAgZW1haWxBZGRyZXNzIDogc3RyaW5nO1xufVxuXG4vKipcbiAqIEJ1aWxkIHJlcXVlc3QgcGF5bG9hZCBmb3Igc2VydmljZSAnRW1haWxJbmdlc3Rpb25Qcm9maWxlJyBhY3Rpb24gJ2dldEJ5RW1haWxBZGRyZXNzJy5cbiAqXG4gKiBVc2FnZTogUmV0cmlldmUgYSBFbWFpbEluZ2VzdGlvblByb2ZpbGUgYnkgZW1haWwgYWRkcmVzc1xuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIEthbHR1cmFFbWFpbEluZ2VzdGlvblByb2ZpbGVcbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIEVtYWlsSW5nZXN0aW9uUHJvZmlsZUdldEJ5RW1haWxBZGRyZXNzQWN0aW9uIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3Q8S2FsdHVyYUVtYWlsSW5nZXN0aW9uUHJvZmlsZT4ge1xuXG4gICAgZW1haWxBZGRyZXNzIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YSA6IEVtYWlsSW5nZXN0aW9uUHJvZmlsZUdldEJ5RW1haWxBZGRyZXNzQWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAnbycsIHJlc3BvbnNlU3ViVHlwZSA6ICdLYWx0dXJhRW1haWxJbmdlc3Rpb25Qcm9maWxlJywgcmVzcG9uc2VDb25zdHJ1Y3RvciA6IEthbHR1cmFFbWFpbEluZ2VzdGlvblByb2ZpbGUgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2VtYWlsaW5nZXN0aW9ucHJvZmlsZScgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2dldEJ5RW1haWxBZGRyZXNzJyB9LFxuXHRcdFx0XHRlbWFpbEFkZHJlc3MgOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuIl19