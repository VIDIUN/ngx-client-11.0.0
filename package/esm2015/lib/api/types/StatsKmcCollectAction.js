/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { KalturaStatsKmcEvent } from './KalturaStatsKmcEvent';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function StatsKmcCollectActionArgs() { }
/** @type {?} */
StatsKmcCollectActionArgs.prototype.kmcEvent;
/**
 * Build request payload for service 'stats' action 'kmcCollect'.
 *
 * Usage: Will collect the kmcEvent sent form the KMC client
 * // this will actually be an empty function because all events will be sent using GET and will anyway be logged in the apache log
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
export class StatsKmcCollectAction extends KalturaRequest {
    /**
     * @param {?} data
     */
    constructor(data) {
        super(data, { responseType: 'v', responseSubType: '', responseConstructor: null });
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            service: { type: 'c', default: 'stats' },
            action: { type: 'c', default: 'kmcCollect' },
            kmcEvent: { type: 'o', subTypeConstructor: KalturaStatsKmcEvent, subType: 'KalturaStatsKmcEvent' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    StatsKmcCollectAction.prototype.kmcEvent;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RhdHNLbWNDb2xsZWN0QWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9TdGF0c0ttY0NvbGxlY3RBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUlBLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzlELE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUFleEUsTUFBTSw0QkFBNkIsU0FBUSxjQUFvQjs7OztJQUkzRCxZQUFZLElBQWdDO1FBRXhDLEtBQUssQ0FBQyxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRyxFQUFFLEVBQUUsbUJBQW1CLEVBQUcsSUFBSSxFQUFFLENBQUMsQ0FBQztLQUN4Rjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsT0FBTyxFQUFFO1lBQ3ZELE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLFlBQVksRUFBRTtZQUMvQyxRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLG9CQUFvQixFQUFFLE9BQU8sRUFBRyxzQkFBc0IsRUFBRTtTQUM3RixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuXG5cbmltcG9ydCB7IEthbHR1cmFTdGF0c0ttY0V2ZW50IH0gZnJvbSAnLi9LYWx0dXJhU3RhdHNLbWNFdmVudCc7XG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBTdGF0c0ttY0NvbGxlY3RBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAga21jRXZlbnQgOiBLYWx0dXJhU3RhdHNLbWNFdmVudDtcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ3N0YXRzJyBhY3Rpb24gJ2ttY0NvbGxlY3QnLlxuICpcbiAqIFVzYWdlOiBXaWxsIGNvbGxlY3QgdGhlIGttY0V2ZW50IHNlbnQgZm9ybSB0aGUgS01DIGNsaWVudFxuICogLy8gdGhpcyB3aWxsIGFjdHVhbGx5IGJlIGFuIGVtcHR5IGZ1bmN0aW9uIGJlY2F1c2UgYWxsIGV2ZW50cyB3aWxsIGJlIHNlbnQgdXNpbmcgR0VUIGFuZCB3aWxsIGFueXdheSBiZSBsb2dnZWQgaW4gdGhlIGFwYWNoZSBsb2dcbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICB2b2lkXG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBTdGF0c0ttY0NvbGxlY3RBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdDx2b2lkPiB7XG5cbiAgICBrbWNFdmVudCA6IEthbHR1cmFTdGF0c0ttY0V2ZW50O1xuXG4gICAgY29uc3RydWN0b3IoZGF0YSA6IFN0YXRzS21jQ29sbGVjdEFjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ3YnLCByZXNwb25zZVN1YlR5cGUgOiAnJywgcmVzcG9uc2VDb25zdHJ1Y3RvciA6IG51bGwgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnc3RhdHMnIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdrbWNDb2xsZWN0JyB9LFxuXHRcdFx0XHRrbWNFdmVudCA6IHsgdHlwZSA6ICdvJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVN0YXRzS21jRXZlbnQsIHN1YlR5cGUgOiAnS2FsdHVyYVN0YXRzS21jRXZlbnQnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==