/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
export class EmailIngestionProfileAddMediaEntryAction extends KalturaRequest {
    /**
     * @param {?} data
     */
    constructor(data) {
        super(data, { responseType: 'o', responseSubType: 'KalturaMediaEntry', responseConstructor: KalturaMediaEntry });
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
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
    }
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW1haWxJbmdlc3Rpb25Qcm9maWxlQWRkTWVkaWFFbnRyeUFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvRW1haWxJbmdlc3Rpb25Qcm9maWxlQWRkTWVkaWFFbnRyeUFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFeEQsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQnhFLE1BQU0sK0NBQWdELFNBQVEsY0FBaUM7Ozs7SUFRM0YsWUFBWSxJQUFtRDtRQUUzRCxLQUFLLENBQUMsSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcsbUJBQW1CLEVBQUUsbUJBQW1CLEVBQUcsaUJBQWlCLEVBQUcsQ0FBQyxDQUFDO0tBQ3ZIOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyx1QkFBdUIsRUFBRTtZQUN2RSxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxlQUFlLEVBQUU7WUFDbEQsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxpQkFBaUIsRUFBRSxPQUFPLEVBQUcsbUJBQW1CLEVBQUU7WUFDbEcsYUFBYSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM5QixXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVCLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUIsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNsQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYU1lZGlhRW50cnkgfSBmcm9tICcuL0thbHR1cmFNZWRpYUVudHJ5JztcblxuaW1wb3J0IHsgS2FsdHVyYVJlcXVlc3QsIEthbHR1cmFSZXF1ZXN0QXJncyB9IGZyb20gJy4uL2thbHR1cmEtcmVxdWVzdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRW1haWxJbmdlc3Rpb25Qcm9maWxlQWRkTWVkaWFFbnRyeUFjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3RBcmdzIHtcbiAgICBtZWRpYUVudHJ5IDogS2FsdHVyYU1lZGlhRW50cnk7XG5cdHVwbG9hZFRva2VuSWQgOiBzdHJpbmc7XG5cdGVtYWlsUHJvZklkIDogbnVtYmVyO1xuXHRmcm9tQWRkcmVzcyA6IHN0cmluZztcblx0ZW1haWxNc2dJZCA6IHN0cmluZztcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ0VtYWlsSW5nZXN0aW9uUHJvZmlsZScgYWN0aW9uICdhZGRNZWRpYUVudHJ5Jy5cbiAqXG4gKiBVc2FnZTogYWRkIEthbHR1cmFNZWRpYUVudHJ5IGZyb20gZW1haWwgaW5nZXN0aW9uXG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgS2FsdHVyYU1lZGlhRW50cnlcbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIEVtYWlsSW5nZXN0aW9uUHJvZmlsZUFkZE1lZGlhRW50cnlBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdDxLYWx0dXJhTWVkaWFFbnRyeT4ge1xuXG4gICAgbWVkaWFFbnRyeSA6IEthbHR1cmFNZWRpYUVudHJ5O1xuXHR1cGxvYWRUb2tlbklkIDogc3RyaW5nO1xuXHRlbWFpbFByb2ZJZCA6IG51bWJlcjtcblx0ZnJvbUFkZHJlc3MgOiBzdHJpbmc7XG5cdGVtYWlsTXNnSWQgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogRW1haWxJbmdlc3Rpb25Qcm9maWxlQWRkTWVkaWFFbnRyeUFjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ28nLCByZXNwb25zZVN1YlR5cGUgOiAnS2FsdHVyYU1lZGlhRW50cnknLCByZXNwb25zZUNvbnN0cnVjdG9yIDogS2FsdHVyYU1lZGlhRW50cnkgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2VtYWlsaW5nZXN0aW9ucHJvZmlsZScgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2FkZE1lZGlhRW50cnknIH0sXG5cdFx0XHRcdG1lZGlhRW50cnkgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFNZWRpYUVudHJ5LCBzdWJUeXBlIDogJ0thbHR1cmFNZWRpYUVudHJ5JyB9LFxuXHRcdFx0XHR1cGxvYWRUb2tlbklkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGVtYWlsUHJvZklkIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGZyb21BZGRyZXNzIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGVtYWlsTXNnSWQgOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuIl19