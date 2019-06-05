/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { KalturaLiveReportExportResponse } from './KalturaLiveReportExportResponse';
import { KalturaLiveReportExportType } from './KalturaLiveReportExportType';
import { KalturaLiveReportExportParams } from './KalturaLiveReportExportParams';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function LiveReportsExportToCsvActionArgs() { }
/** @type {?} */
LiveReportsExportToCsvActionArgs.prototype.reportType;
/** @type {?} */
LiveReportsExportToCsvActionArgs.prototype.params;
/**
 * Build request payload for service 'liveReports' action 'exportToCsv'.
 *
 *
 *
 * Server response type:         KalturaLiveReportExportResponse
 * Server failure response type: KalturaAPIException
 */
export class LiveReportsExportToCsvAction extends KalturaRequest {
    /**
     * @param {?} data
     */
    constructor(data) {
        super(data, { responseType: 'o', responseSubType: 'KalturaLiveReportExportResponse', responseConstructor: KalturaLiveReportExportResponse });
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            service: { type: 'c', default: 'livereports' },
            action: { type: 'c', default: 'exportToCsv' },
            reportType: { type: 'en', subTypeConstructor: KalturaLiveReportExportType, subType: 'KalturaLiveReportExportType' },
            params: { type: 'o', subTypeConstructor: KalturaLiveReportExportParams, subType: 'KalturaLiveReportExportParams' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    LiveReportsExportToCsvAction.prototype.reportType;
    /** @type {?} */
    LiveReportsExportToCsvAction.prototype.params;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGl2ZVJlcG9ydHNFeHBvcnRUb0NzdkFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvTGl2ZVJlcG9ydHNFeHBvcnRUb0NzdkFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFFcEYsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDNUUsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDaEYsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFleEUsTUFBTSxtQ0FBb0MsU0FBUSxjQUErQzs7OztJQUs3RixZQUFZLElBQXVDO1FBRS9DLEtBQUssQ0FBQyxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRyxpQ0FBaUMsRUFBRSxtQkFBbUIsRUFBRywrQkFBK0IsRUFBRyxDQUFDLENBQUM7S0FDbko7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGFBQWEsRUFBRTtZQUM3RCxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxhQUFhLEVBQUU7WUFDaEQsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRywyQkFBMkIsRUFBRSxPQUFPLEVBQUcsNkJBQTZCLEVBQUU7WUFDdkgsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyw2QkFBNkIsRUFBRSxPQUFPLEVBQUcsK0JBQStCLEVBQUU7U0FDN0csQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFMaXZlUmVwb3J0RXhwb3J0UmVzcG9uc2UgfSBmcm9tICcuL0thbHR1cmFMaXZlUmVwb3J0RXhwb3J0UmVzcG9uc2UnO1xuXG5pbXBvcnQgeyBLYWx0dXJhTGl2ZVJlcG9ydEV4cG9ydFR5cGUgfSBmcm9tICcuL0thbHR1cmFMaXZlUmVwb3J0RXhwb3J0VHlwZSc7XG5pbXBvcnQgeyBLYWx0dXJhTGl2ZVJlcG9ydEV4cG9ydFBhcmFtcyB9IGZyb20gJy4vS2FsdHVyYUxpdmVSZXBvcnRFeHBvcnRQYXJhbXMnO1xuaW1wb3J0IHsgS2FsdHVyYVJlcXVlc3QsIEthbHR1cmFSZXF1ZXN0QXJncyB9IGZyb20gJy4uL2thbHR1cmEtcmVxdWVzdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGl2ZVJlcG9ydHNFeHBvcnRUb0NzdkFjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3RBcmdzIHtcbiAgICByZXBvcnRUeXBlIDogS2FsdHVyYUxpdmVSZXBvcnRFeHBvcnRUeXBlO1xuXHRwYXJhbXMgOiBLYWx0dXJhTGl2ZVJlcG9ydEV4cG9ydFBhcmFtcztcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ2xpdmVSZXBvcnRzJyBhY3Rpb24gJ2V4cG9ydFRvQ3N2Jy5cbiAqXG4gKiBcbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICBLYWx0dXJhTGl2ZVJlcG9ydEV4cG9ydFJlc3BvbnNlXG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBMaXZlUmVwb3J0c0V4cG9ydFRvQ3N2QWN0aW9uIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3Q8S2FsdHVyYUxpdmVSZXBvcnRFeHBvcnRSZXNwb25zZT4ge1xuXG4gICAgcmVwb3J0VHlwZSA6IEthbHR1cmFMaXZlUmVwb3J0RXhwb3J0VHlwZTtcblx0cGFyYW1zIDogS2FsdHVyYUxpdmVSZXBvcnRFeHBvcnRQYXJhbXM7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogTGl2ZVJlcG9ydHNFeHBvcnRUb0NzdkFjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ28nLCByZXNwb25zZVN1YlR5cGUgOiAnS2FsdHVyYUxpdmVSZXBvcnRFeHBvcnRSZXNwb25zZScsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBLYWx0dXJhTGl2ZVJlcG9ydEV4cG9ydFJlc3BvbnNlICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VydmljZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdsaXZlcmVwb3J0cycgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2V4cG9ydFRvQ3N2JyB9LFxuXHRcdFx0XHRyZXBvcnRUeXBlIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUxpdmVSZXBvcnRFeHBvcnRUeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFMaXZlUmVwb3J0RXhwb3J0VHlwZScgfSxcblx0XHRcdFx0cGFyYW1zIDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhTGl2ZVJlcG9ydEV4cG9ydFBhcmFtcywgc3ViVHlwZSA6ICdLYWx0dXJhTGl2ZVJlcG9ydEV4cG9ydFBhcmFtcycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuIl19