/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { KalturaStatsEvent } from './KalturaStatsEvent';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function StatsCollectActionArgs() { }
/** @type {?} */
StatsCollectActionArgs.prototype.event;
/**
 * Build request payload for service 'stats' action 'collect'.
 *
 * Usage: Will write to the event log a single line representing the event
 * client version - will help interprete the line structure. different client versions might have slightly different data/data formats in the line
 * event_id - number is the row number in yuval's excel
 * datetime - same format as MySql's datetime - can change and should reflect the time zone
 * session id - can be some big random number or guid
 * partner id
 * entry id
 * unique viewer
 * widget id
 * ui_conf id
 * uid - the puser id as set by the ppartner
 * current point - in milliseconds
 * duration - milliseconds
 * user ip
 * process duration - in milliseconds
 * control id
 * seek
 * new point
 * referrer
 *
 *
 * KalturaStatsEvent $event
 *
 * Server response type:         boolean
 * Server failure response type: KalturaAPIException
 */
export class StatsCollectAction extends KalturaRequest {
    /**
     * @param {?} data
     */
    constructor(data) {
        super(data, { responseType: 'b', responseSubType: '', responseConstructor: null });
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            service: { type: 'c', default: 'stats' },
            action: { type: 'c', default: 'collect' },
            event: { type: 'o', subTypeConstructor: KalturaStatsEvent, subType: 'KalturaStatsEvent' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    StatsCollectAction.prototype.event;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RhdHNDb2xsZWN0QWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9TdGF0c0NvbGxlY3RBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUlBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1DeEUsTUFBTSx5QkFBMEIsU0FBUSxjQUF1Qjs7OztJQUkzRCxZQUFZLElBQTZCO1FBRXJDLEtBQUssQ0FBQyxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRyxFQUFFLEVBQUUsbUJBQW1CLEVBQUcsSUFBSSxFQUFFLENBQUMsQ0FBQztLQUN4Rjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsT0FBTyxFQUFFO1lBQ3ZELE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLFNBQVMsRUFBRTtZQUM1QyxLQUFLLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLGlCQUFpQixFQUFFLE9BQU8sRUFBRyxtQkFBbUIsRUFBRTtTQUNwRixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuXG5cbmltcG9ydCB7IEthbHR1cmFTdGF0c0V2ZW50IH0gZnJvbSAnLi9LYWx0dXJhU3RhdHNFdmVudCc7XG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBTdGF0c0NvbGxlY3RBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAgZXZlbnQgOiBLYWx0dXJhU3RhdHNFdmVudDtcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ3N0YXRzJyBhY3Rpb24gJ2NvbGxlY3QnLlxuICpcbiAqIFVzYWdlOiBXaWxsIHdyaXRlIHRvIHRoZSBldmVudCBsb2cgYSBzaW5nbGUgbGluZSByZXByZXNlbnRpbmcgdGhlIGV2ZW50XG4gKiBjbGllbnQgdmVyc2lvbiAtIHdpbGwgaGVscCBpbnRlcnByZXRlIHRoZSBsaW5lIHN0cnVjdHVyZS4gZGlmZmVyZW50IGNsaWVudCB2ZXJzaW9ucyBtaWdodCBoYXZlIHNsaWdodGx5IGRpZmZlcmVudCBkYXRhL2RhdGEgZm9ybWF0cyBpbiB0aGUgbGluZVxuICogZXZlbnRfaWQgLSBudW1iZXIgaXMgdGhlIHJvdyBudW1iZXIgaW4geXV2YWwncyBleGNlbFxuICogZGF0ZXRpbWUgLSBzYW1lIGZvcm1hdCBhcyBNeVNxbCdzIGRhdGV0aW1lIC0gY2FuIGNoYW5nZSBhbmQgc2hvdWxkIHJlZmxlY3QgdGhlIHRpbWUgem9uZVxuICogc2Vzc2lvbiBpZCAtIGNhbiBiZSBzb21lIGJpZyByYW5kb20gbnVtYmVyIG9yIGd1aWRcbiAqIHBhcnRuZXIgaWRcbiAqIGVudHJ5IGlkXG4gKiB1bmlxdWUgdmlld2VyXG4gKiB3aWRnZXQgaWRcbiAqIHVpX2NvbmYgaWRcbiAqIHVpZCAtIHRoZSBwdXNlciBpZCBhcyBzZXQgYnkgdGhlIHBwYXJ0bmVyXG4gKiBjdXJyZW50IHBvaW50IC0gaW4gbWlsbGlzZWNvbmRzXG4gKiBkdXJhdGlvbiAtIG1pbGxpc2Vjb25kc1xuICogdXNlciBpcFxuICogcHJvY2VzcyBkdXJhdGlvbiAtIGluIG1pbGxpc2Vjb25kc1xuICogY29udHJvbCBpZFxuICogc2Vla1xuICogbmV3IHBvaW50XG4gKiByZWZlcnJlclxuICogXG4gKiBcbiAqIEthbHR1cmFTdGF0c0V2ZW50ICRldmVudFxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIGJvb2xlYW5cbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIFN0YXRzQ29sbGVjdEFjdGlvbiBleHRlbmRzIEthbHR1cmFSZXF1ZXN0PGJvb2xlYW4+IHtcblxuICAgIGV2ZW50IDogS2FsdHVyYVN0YXRzRXZlbnQ7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogU3RhdHNDb2xsZWN0QWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAnYicsIHJlc3BvbnNlU3ViVHlwZSA6ICcnLCByZXNwb25zZUNvbnN0cnVjdG9yIDogbnVsbCB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VydmljZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdzdGF0cycgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2NvbGxlY3QnIH0sXG5cdFx0XHRcdGV2ZW50IDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhU3RhdHNFdmVudCwgc3ViVHlwZSA6ICdLYWx0dXJhU3RhdHNFdmVudCcgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuIl19