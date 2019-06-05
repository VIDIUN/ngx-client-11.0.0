/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var /**
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
StatsCollectAction = /** @class */ (function (_super) {
    tslib_1.__extends(StatsCollectAction, _super);
    function StatsCollectAction(data) {
        return _super.call(this, data, { responseType: 'b', responseSubType: '', responseConstructor: null }) || this;
    }
    /**
     * @return {?}
     */
    StatsCollectAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'stats' },
            action: { type: 'c', default: 'collect' },
            event: { type: 'o', subTypeConstructor: KalturaStatsEvent, subType: 'KalturaStatsEvent' }
        });
        return result;
    };
    return StatsCollectAction;
}(KalturaRequest));
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
export { StatsCollectAction };
if (false) {
    /** @type {?} */
    StatsCollectAction.prototype.event;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RhdHNDb2xsZWN0QWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9TdGF0c0NvbGxlY3RBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFJQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQ3hFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0lBQXdDLDhDQUF1QjtJQUkzRCw0QkFBWSxJQUE2QjtlQUVyQyxrQkFBTSxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRyxFQUFFLEVBQUUsbUJBQW1CLEVBQUcsSUFBSSxFQUFFLENBQUM7S0FDdkY7Ozs7SUFFUyx5Q0FBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxPQUFPLEVBQUU7WUFDdkQsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsU0FBUyxFQUFFO1lBQzVDLEtBQUssRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsaUJBQWlCLEVBQUUsT0FBTyxFQUFHLG1CQUFtQixFQUFFO1NBQ3BGLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7NkJBN0RMO0VBd0N3QyxjQUFjLEVBc0JyRCxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF0QkQsOEJBc0JDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcblxuXG5pbXBvcnQgeyBLYWx0dXJhU3RhdHNFdmVudCB9IGZyb20gJy4vS2FsdHVyYVN0YXRzRXZlbnQnO1xuaW1wb3J0IHsgS2FsdHVyYVJlcXVlc3QsIEthbHR1cmFSZXF1ZXN0QXJncyB9IGZyb20gJy4uL2thbHR1cmEtcmVxdWVzdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3RhdHNDb2xsZWN0QWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdEFyZ3Mge1xuICAgIGV2ZW50IDogS2FsdHVyYVN0YXRzRXZlbnQ7XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICdzdGF0cycgYWN0aW9uICdjb2xsZWN0Jy5cbiAqXG4gKiBVc2FnZTogV2lsbCB3cml0ZSB0byB0aGUgZXZlbnQgbG9nIGEgc2luZ2xlIGxpbmUgcmVwcmVzZW50aW5nIHRoZSBldmVudFxuICogY2xpZW50IHZlcnNpb24gLSB3aWxsIGhlbHAgaW50ZXJwcmV0ZSB0aGUgbGluZSBzdHJ1Y3R1cmUuIGRpZmZlcmVudCBjbGllbnQgdmVyc2lvbnMgbWlnaHQgaGF2ZSBzbGlnaHRseSBkaWZmZXJlbnQgZGF0YS9kYXRhIGZvcm1hdHMgaW4gdGhlIGxpbmVcbiAqIGV2ZW50X2lkIC0gbnVtYmVyIGlzIHRoZSByb3cgbnVtYmVyIGluIHl1dmFsJ3MgZXhjZWxcbiAqIGRhdGV0aW1lIC0gc2FtZSBmb3JtYXQgYXMgTXlTcWwncyBkYXRldGltZSAtIGNhbiBjaGFuZ2UgYW5kIHNob3VsZCByZWZsZWN0IHRoZSB0aW1lIHpvbmVcbiAqIHNlc3Npb24gaWQgLSBjYW4gYmUgc29tZSBiaWcgcmFuZG9tIG51bWJlciBvciBndWlkXG4gKiBwYXJ0bmVyIGlkXG4gKiBlbnRyeSBpZFxuICogdW5pcXVlIHZpZXdlclxuICogd2lkZ2V0IGlkXG4gKiB1aV9jb25mIGlkXG4gKiB1aWQgLSB0aGUgcHVzZXIgaWQgYXMgc2V0IGJ5IHRoZSBwcGFydG5lclxuICogY3VycmVudCBwb2ludCAtIGluIG1pbGxpc2Vjb25kc1xuICogZHVyYXRpb24gLSBtaWxsaXNlY29uZHNcbiAqIHVzZXIgaXBcbiAqIHByb2Nlc3MgZHVyYXRpb24gLSBpbiBtaWxsaXNlY29uZHNcbiAqIGNvbnRyb2wgaWRcbiAqIHNlZWtcbiAqIG5ldyBwb2ludFxuICogcmVmZXJyZXJcbiAqIFxuICogXG4gKiBLYWx0dXJhU3RhdHNFdmVudCAkZXZlbnRcbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICBib29sZWFuXG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBTdGF0c0NvbGxlY3RBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdDxib29sZWFuPiB7XG5cbiAgICBldmVudCA6IEthbHR1cmFTdGF0c0V2ZW50O1xuXG4gICAgY29uc3RydWN0b3IoZGF0YSA6IFN0YXRzQ29sbGVjdEFjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ2InLCByZXNwb25zZVN1YlR5cGUgOiAnJywgcmVzcG9uc2VDb25zdHJ1Y3RvciA6IG51bGwgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnc3RhdHMnIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdjb2xsZWN0JyB9LFxuXHRcdFx0XHRldmVudCA6IHsgdHlwZSA6ICdvJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVN0YXRzRXZlbnQsIHN1YlR5cGUgOiAnS2FsdHVyYVN0YXRzRXZlbnQnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==