/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { KalturaUserFilter } from './KalturaUserFilter';
import { KalturaCsvAdditionalFieldInfo } from './KalturaCsvAdditionalFieldInfo';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function UserExportToCsvActionArgs() { }
/** @type {?|undefined} */
UserExportToCsvActionArgs.prototype.filter;
/** @type {?|undefined} */
UserExportToCsvActionArgs.prototype.metadataProfileId;
/** @type {?|undefined} */
UserExportToCsvActionArgs.prototype.additionalFields;
/**
 * Build request payload for service 'user' action 'exportToCsv'.
 *
 * Usage: add batch job that sends an email with a link to download an updated CSV that contains list of users
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 */
export class UserExportToCsvAction extends KalturaRequest {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data, { responseType: 's', responseSubType: '', responseConstructor: null });
        if (typeof this.additionalFields === 'undefined')
            this.additionalFields = [];
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            service: { type: 'c', default: 'user' },
            action: { type: 'c', default: 'exportToCsv' },
            filter: { type: 'o', subTypeConstructor: KalturaUserFilter, subType: 'KalturaUserFilter' },
            metadataProfileId: { type: 'n' },
            additionalFields: { type: 'a', subTypeConstructor: KalturaCsvAdditionalFieldInfo, subType: 'KalturaCsvAdditionalFieldInfo' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    UserExportToCsvAction.prototype.filter;
    /** @type {?} */
    UserExportToCsvAction.prototype.metadataProfileId;
    /** @type {?} */
    UserExportToCsvAction.prototype.additionalFields;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlckV4cG9ydFRvQ3N2QWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9Vc2VyRXhwb3J0VG9Dc3ZBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUlBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3hELE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQnhFLE1BQU0sNEJBQTZCLFNBQVEsY0FBc0I7Ozs7SUFNN0QsWUFBWSxJQUFpQztRQUV6QyxLQUFLLENBQUMsSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcsRUFBRSxFQUFFLG1CQUFtQixFQUFHLElBQUksRUFBRSxDQUFDLENBQUM7UUFDckYsRUFBRSxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLEtBQUssV0FBVyxDQUFDO1lBQUMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEVBQUUsQ0FBQztLQUNoRjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsTUFBTSxFQUFFO1lBQ3RELE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGFBQWEsRUFBRTtZQUNoRCxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLGlCQUFpQixFQUFFLE9BQU8sRUFBRyxtQkFBbUIsRUFBRTtZQUM5RixpQkFBaUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDbEMsZ0JBQWdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLDZCQUE2QixFQUFFLE9BQU8sRUFBRywrQkFBK0IsRUFBRTtTQUN2SCxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuXG5cbmltcG9ydCB7IEthbHR1cmFVc2VyRmlsdGVyIH0gZnJvbSAnLi9LYWx0dXJhVXNlckZpbHRlcic7XG5pbXBvcnQgeyBLYWx0dXJhQ3N2QWRkaXRpb25hbEZpZWxkSW5mbyB9IGZyb20gJy4vS2FsdHVyYUNzdkFkZGl0aW9uYWxGaWVsZEluZm8nO1xuaW1wb3J0IHsgS2FsdHVyYVJlcXVlc3QsIEthbHR1cmFSZXF1ZXN0QXJncyB9IGZyb20gJy4uL2thbHR1cmEtcmVxdWVzdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXNlckV4cG9ydFRvQ3N2QWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdEFyZ3Mge1xuICAgIGZpbHRlcj8gOiBLYWx0dXJhVXNlckZpbHRlcjtcblx0bWV0YWRhdGFQcm9maWxlSWQ/IDogbnVtYmVyO1xuXHRhZGRpdGlvbmFsRmllbGRzPyA6IEthbHR1cmFDc3ZBZGRpdGlvbmFsRmllbGRJbmZvW107XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICd1c2VyJyBhY3Rpb24gJ2V4cG9ydFRvQ3N2Jy5cbiAqXG4gKiBVc2FnZTogYWRkIGJhdGNoIGpvYiB0aGF0IHNlbmRzIGFuIGVtYWlsIHdpdGggYSBsaW5rIHRvIGRvd25sb2FkIGFuIHVwZGF0ZWQgQ1NWIHRoYXQgY29udGFpbnMgbGlzdCBvZiB1c2Vyc1xuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIHN0cmluZ1xuICogU2VydmVyIGZhaWx1cmUgcmVzcG9uc2UgdHlwZTogS2FsdHVyYUFQSUV4Y2VwdGlvblxuICovXG5leHBvcnQgY2xhc3MgVXNlckV4cG9ydFRvQ3N2QWN0aW9uIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3Q8c3RyaW5nPiB7XG5cbiAgICBmaWx0ZXIgOiBLYWx0dXJhVXNlckZpbHRlcjtcblx0bWV0YWRhdGFQcm9maWxlSWQgOiBudW1iZXI7XG5cdGFkZGl0aW9uYWxGaWVsZHMgOiBLYWx0dXJhQ3N2QWRkaXRpb25hbEZpZWxkSW5mb1tdO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBVc2VyRXhwb3J0VG9Dc3ZBY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSwge3Jlc3BvbnNlVHlwZSA6ICdzJywgcmVzcG9uc2VTdWJUeXBlIDogJycsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBudWxsIH0pO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuYWRkaXRpb25hbEZpZWxkcyA9PT0gJ3VuZGVmaW5lZCcpIHRoaXMuYWRkaXRpb25hbEZpZWxkcyA9IFtdO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ3VzZXInIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdleHBvcnRUb0NzdicgfSxcblx0XHRcdFx0ZmlsdGVyIDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhVXNlckZpbHRlciwgc3ViVHlwZSA6ICdLYWx0dXJhVXNlckZpbHRlcicgfSxcblx0XHRcdFx0bWV0YWRhdGFQcm9maWxlSWQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0YWRkaXRpb25hbEZpZWxkcyA6IHsgdHlwZSA6ICdhJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUNzdkFkZGl0aW9uYWxGaWVsZEluZm8sIHN1YlR5cGUgOiAnS2FsdHVyYUNzdkFkZGl0aW9uYWxGaWVsZEluZm8nIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==