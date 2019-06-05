/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaMediaEntry } from './KalturaMediaEntry';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function EmailIngestionProfileAddMediaEntryActionArgs() { }
/** @type {?} */
EmailIngestionProfileAddMediaEntryActionArgs.prototype.mediaEntry;
/** @type {?} */
EmailIngestionProfileAddMediaEntryActionArgs.prototype.uploadTokenId;
/** @type {?} */
EmailIngestionProfileAddMediaEntryActionArgs.prototype.emailProfId;
/** @type {?} */
EmailIngestionProfileAddMediaEntryActionArgs.prototype.fromAddress;
/** @type {?} */
EmailIngestionProfileAddMediaEntryActionArgs.prototype.emailMsgId;
/**
 * Build request payload for service 'EmailIngestionProfile' action 'addMediaEntry'.
 *
 * Usage: add KalturaMediaEntry from email ingestion
 *
 * Server response type:         KalturaMediaEntry
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'EmailIngestionProfile' action 'addMediaEntry'.
 *
 * Usage: add KalturaMediaEntry from email ingestion
 *
 * Server response type:         KalturaMediaEntry
 * Server failure response type: KalturaAPIException
 */
EmailIngestionProfileAddMediaEntryAction = /** @class */ (function (_super) {
    tslib_1.__extends(EmailIngestionProfileAddMediaEntryAction, _super);
    function EmailIngestionProfileAddMediaEntryAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaMediaEntry', responseConstructor: KalturaMediaEntry }) || this;
    }
    /**
     * @return {?}
     */
    EmailIngestionProfileAddMediaEntryAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'emailingestionprofile' },
            action: { type: 'c', default: 'addMediaEntry' },
            mediaEntry: { type: 'o', subTypeConstructor: KalturaMediaEntry, subType: 'KalturaMediaEntry' },
            uploadTokenId: { type: 's' },
            emailProfId: { type: 'n' },
            fromAddress: { type: 's' },
            emailMsgId: { type: 's' }
        });
        return result;
    };
    return EmailIngestionProfileAddMediaEntryAction;
}(KalturaRequest));
/**
 * Build request payload for service 'EmailIngestionProfile' action 'addMediaEntry'.
 *
 * Usage: add KalturaMediaEntry from email ingestion
 *
 * Server response type:         KalturaMediaEntry
 * Server failure response type: KalturaAPIException
 */
export { EmailIngestionProfileAddMediaEntryAction };
if (false) {
    /** @type {?} */
    EmailIngestionProfileAddMediaEntryAction.prototype.mediaEntry;
    /** @type {?} */
    EmailIngestionProfileAddMediaEntryAction.prototype.uploadTokenId;
    /** @type {?} */
    EmailIngestionProfileAddMediaEntryAction.prototype.emailProfId;
    /** @type {?} */
    EmailIngestionProfileAddMediaEntryAction.prototype.fromAddress;
    /** @type {?} */
    EmailIngestionProfileAddMediaEntryAction.prototype.emailMsgId;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW1haWxJbmdlc3Rpb25Qcm9maWxlQWRkTWVkaWFFbnRyeUFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvRW1haWxJbmdlc3Rpb25Qcm9maWxlQWRkTWVkaWFFbnRyeUFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRXhELE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0J4RTs7Ozs7Ozs7QUFBQTtJQUE4RCxvRUFBaUM7SUFRM0Ysa0RBQVksSUFBbUQ7ZUFFM0Qsa0JBQU0sSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcsbUJBQW1CLEVBQUUsbUJBQW1CLEVBQUcsaUJBQWlCLEVBQUcsQ0FBQztLQUN0SDs7OztJQUVTLCtEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHVCQUF1QixFQUFFO1lBQ3ZFLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGVBQWUsRUFBRTtZQUNsRCxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLGlCQUFpQixFQUFFLE9BQU8sRUFBRyxtQkFBbUIsRUFBRTtZQUNsRyxhQUFhLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzlCLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUIsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1QixVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ2xCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7bURBbkRMO0VBc0I4RCxjQUFjLEVBOEIzRSxDQUFBOzs7Ozs7Ozs7QUE5QkQsb0RBOEJDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFNZWRpYUVudHJ5IH0gZnJvbSAnLi9LYWx0dXJhTWVkaWFFbnRyeSc7XG5cbmltcG9ydCB7IEthbHR1cmFSZXF1ZXN0LCBLYWx0dXJhUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEVtYWlsSW5nZXN0aW9uUHJvZmlsZUFkZE1lZGlhRW50cnlBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAgbWVkaWFFbnRyeSA6IEthbHR1cmFNZWRpYUVudHJ5O1xuXHR1cGxvYWRUb2tlbklkIDogc3RyaW5nO1xuXHRlbWFpbFByb2ZJZCA6IG51bWJlcjtcblx0ZnJvbUFkZHJlc3MgOiBzdHJpbmc7XG5cdGVtYWlsTXNnSWQgOiBzdHJpbmc7XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICdFbWFpbEluZ2VzdGlvblByb2ZpbGUnIGFjdGlvbiAnYWRkTWVkaWFFbnRyeScuXG4gKlxuICogVXNhZ2U6IGFkZCBLYWx0dXJhTWVkaWFFbnRyeSBmcm9tIGVtYWlsIGluZ2VzdGlvblxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIEthbHR1cmFNZWRpYUVudHJ5XG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBFbWFpbEluZ2VzdGlvblByb2ZpbGVBZGRNZWRpYUVudHJ5QWN0aW9uIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3Q8S2FsdHVyYU1lZGlhRW50cnk+IHtcblxuICAgIG1lZGlhRW50cnkgOiBLYWx0dXJhTWVkaWFFbnRyeTtcblx0dXBsb2FkVG9rZW5JZCA6IHN0cmluZztcblx0ZW1haWxQcm9mSWQgOiBudW1iZXI7XG5cdGZyb21BZGRyZXNzIDogc3RyaW5nO1xuXHRlbWFpbE1zZ0lkIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YSA6IEVtYWlsSW5nZXN0aW9uUHJvZmlsZUFkZE1lZGlhRW50cnlBY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSwge3Jlc3BvbnNlVHlwZSA6ICdvJywgcmVzcG9uc2VTdWJUeXBlIDogJ0thbHR1cmFNZWRpYUVudHJ5JywgcmVzcG9uc2VDb25zdHJ1Y3RvciA6IEthbHR1cmFNZWRpYUVudHJ5ICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VydmljZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdlbWFpbGluZ2VzdGlvbnByb2ZpbGUnIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdhZGRNZWRpYUVudHJ5JyB9LFxuXHRcdFx0XHRtZWRpYUVudHJ5IDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhTWVkaWFFbnRyeSwgc3ViVHlwZSA6ICdLYWx0dXJhTWVkaWFFbnRyeScgfSxcblx0XHRcdFx0dXBsb2FkVG9rZW5JZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRlbWFpbFByb2ZJZCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRmcm9tQWRkcmVzcyA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRlbWFpbE1zZ0lkIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==