/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { KalturaCuePointListResponse } from './KalturaCuePointListResponse';
import { KalturaUploadRequest } from '../kaltura-upload-request';
/**
 * @record
 */
export function CuePointAddFromBulkActionArgs() { }
/** @type {?} */
CuePointAddFromBulkActionArgs.prototype.fileData;
/**
 * Build request payload for service 'cuePoint' action 'addFromBulk'.
 *
 * Usage: Allows you to add multiple cue points objects by uploading XML that contains multiple cue point definitions
 *
 * Server response type:         KalturaCuePointListResponse
 * Server failure response type: KalturaAPIException
 */
export class CuePointAddFromBulkAction extends KalturaUploadRequest {
    /**
     * @param {?} data
     */
    constructor(data) {
        super(data, { responseType: 'o', responseSubType: 'KalturaCuePointListResponse', responseConstructor: KalturaCuePointListResponse });
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            service: { type: 'c', default: 'cuepoint_cuepoint' },
            action: { type: 'c', default: 'addFromBulk' },
            fileData: { type: 'f' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    CuePointAddFromBulkAction.prototype.fileData;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VlUG9pbnRBZGRGcm9tQnVsa0FjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvQ3VlUG9pbnRBZGRGcm9tQnVsa0FjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFFNUUsT0FBTyxFQUFFLG9CQUFvQixFQUE0QixNQUFNLDJCQUEyQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUFjM0YsTUFBTSxnQ0FBaUMsU0FBUSxvQkFBaUQ7Ozs7SUFJNUYsWUFBWSxJQUFvQztRQUU1QyxLQUFLLENBQUMsSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcsNkJBQTZCLEVBQUUsbUJBQW1CLEVBQUcsMkJBQTJCLEVBQUcsQ0FBQyxDQUFDO0tBQzNJOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxtQkFBbUIsRUFBRTtZQUNuRSxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxhQUFhLEVBQUU7WUFDaEQsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNoQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUN1ZVBvaW50TGlzdFJlc3BvbnNlIH0gZnJvbSAnLi9LYWx0dXJhQ3VlUG9pbnRMaXN0UmVzcG9uc2UnO1xuXG5pbXBvcnQgeyBLYWx0dXJhVXBsb2FkUmVxdWVzdCwgS2FsdHVyYVVwbG9hZFJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS11cGxvYWQtcmVxdWVzdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ3VlUG9pbnRBZGRGcm9tQnVsa0FjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVVwbG9hZFJlcXVlc3RBcmdzIHtcbiAgICBmaWxlRGF0YSA6IEZpbGU7XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICdjdWVQb2ludCcgYWN0aW9uICdhZGRGcm9tQnVsaycuXG4gKlxuICogVXNhZ2U6IEFsbG93cyB5b3UgdG8gYWRkIG11bHRpcGxlIGN1ZSBwb2ludHMgb2JqZWN0cyBieSB1cGxvYWRpbmcgWE1MIHRoYXQgY29udGFpbnMgbXVsdGlwbGUgY3VlIHBvaW50IGRlZmluaXRpb25zXG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgS2FsdHVyYUN1ZVBvaW50TGlzdFJlc3BvbnNlXG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBDdWVQb2ludEFkZEZyb21CdWxrQWN0aW9uIGV4dGVuZHMgS2FsdHVyYVVwbG9hZFJlcXVlc3Q8S2FsdHVyYUN1ZVBvaW50TGlzdFJlc3BvbnNlPiB7XG5cbiAgICBmaWxlRGF0YSA6IEZpbGU7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogQ3VlUG9pbnRBZGRGcm9tQnVsa0FjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ28nLCByZXNwb25zZVN1YlR5cGUgOiAnS2FsdHVyYUN1ZVBvaW50TGlzdFJlc3BvbnNlJywgcmVzcG9uc2VDb25zdHJ1Y3RvciA6IEthbHR1cmFDdWVQb2ludExpc3RSZXNwb25zZSAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnY3VlcG9pbnRfY3VlcG9pbnQnIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdhZGRGcm9tQnVsaycgfSxcblx0XHRcdFx0ZmlsZURhdGEgOiB7IHR5cGUgOiAnZicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuIl19