/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaMixEntry } from './KalturaMixEntry';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function MixingAppendMediaEntryActionArgs() { }
/** @type {?} */
MixingAppendMediaEntryActionArgs.prototype.mixEntryId;
/** @type {?} */
MixingAppendMediaEntryActionArgs.prototype.mediaEntryId;
/**
 * Build request payload for service 'mixing' action 'appendMediaEntry'.
 *
 * Usage: Appends a media entry to a the end of the mix timeline, this will save the mix timeline as a new version
 *
 * Server response type:         KalturaMixEntry
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'mixing' action 'appendMediaEntry'.
 *
 * Usage: Appends a media entry to a the end of the mix timeline, this will save the mix timeline as a new version
 *
 * Server response type:         KalturaMixEntry
 * Server failure response type: KalturaAPIException
 */
MixingAppendMediaEntryAction = /** @class */ (function (_super) {
    tslib_1.__extends(MixingAppendMediaEntryAction, _super);
    function MixingAppendMediaEntryAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaMixEntry', responseConstructor: KalturaMixEntry }) || this;
    }
    /**
     * @return {?}
     */
    MixingAppendMediaEntryAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'mixing' },
            action: { type: 'c', default: 'appendMediaEntry' },
            mixEntryId: { type: 's' },
            mediaEntryId: { type: 's' }
        });
        return result;
    };
    return MixingAppendMediaEntryAction;
}(KalturaRequest));
/**
 * Build request payload for service 'mixing' action 'appendMediaEntry'.
 *
 * Usage: Appends a media entry to a the end of the mix timeline, this will save the mix timeline as a new version
 *
 * Server response type:         KalturaMixEntry
 * Server failure response type: KalturaAPIException
 */
export { MixingAppendMediaEntryAction };
if (false) {
    /** @type {?} */
    MixingAppendMediaEntryAction.prototype.mixEntryId;
    /** @type {?} */
    MixingAppendMediaEntryAction.prototype.mediaEntryId;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWl4aW5nQXBwZW5kTWVkaWFFbnRyeUFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvTWl4aW5nQXBwZW5kTWVkaWFFbnRyeUFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVwRCxPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQWV4RTs7Ozs7Ozs7QUFBQTtJQUFrRCx3REFBK0I7SUFLN0Usc0NBQVksSUFBdUM7ZUFFL0Msa0JBQU0sSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcsaUJBQWlCLEVBQUUsbUJBQW1CLEVBQUcsZUFBZSxFQUFHLENBQUM7S0FDbEg7Ozs7SUFFUyxtREFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxRQUFRLEVBQUU7WUFDeEQsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsa0JBQWtCLEVBQUU7WUFDckQsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMzQixZQUFZLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ3BCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7dUNBMUNMO0VBbUJrRCxjQUFjLEVBd0IvRCxDQUFBOzs7Ozs7Ozs7QUF4QkQsd0NBd0JDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFNaXhFbnRyeSB9IGZyb20gJy4vS2FsdHVyYU1peEVudHJ5JztcblxuaW1wb3J0IHsgS2FsdHVyYVJlcXVlc3QsIEthbHR1cmFSZXF1ZXN0QXJncyB9IGZyb20gJy4uL2thbHR1cmEtcmVxdWVzdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWl4aW5nQXBwZW5kTWVkaWFFbnRyeUFjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3RBcmdzIHtcbiAgICBtaXhFbnRyeUlkIDogc3RyaW5nO1xuXHRtZWRpYUVudHJ5SWQgOiBzdHJpbmc7XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICdtaXhpbmcnIGFjdGlvbiAnYXBwZW5kTWVkaWFFbnRyeScuXG4gKlxuICogVXNhZ2U6IEFwcGVuZHMgYSBtZWRpYSBlbnRyeSB0byBhIHRoZSBlbmQgb2YgdGhlIG1peCB0aW1lbGluZSwgdGhpcyB3aWxsIHNhdmUgdGhlIG1peCB0aW1lbGluZSBhcyBhIG5ldyB2ZXJzaW9uXG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgS2FsdHVyYU1peEVudHJ5XG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBNaXhpbmdBcHBlbmRNZWRpYUVudHJ5QWN0aW9uIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3Q8S2FsdHVyYU1peEVudHJ5PiB7XG5cbiAgICBtaXhFbnRyeUlkIDogc3RyaW5nO1xuXHRtZWRpYUVudHJ5SWQgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogTWl4aW5nQXBwZW5kTWVkaWFFbnRyeUFjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ28nLCByZXNwb25zZVN1YlR5cGUgOiAnS2FsdHVyYU1peEVudHJ5JywgcmVzcG9uc2VDb25zdHJ1Y3RvciA6IEthbHR1cmFNaXhFbnRyeSAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnbWl4aW5nJyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnYXBwZW5kTWVkaWFFbnRyeScgfSxcblx0XHRcdFx0bWl4RW50cnlJZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRtZWRpYUVudHJ5SWQgOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuIl19