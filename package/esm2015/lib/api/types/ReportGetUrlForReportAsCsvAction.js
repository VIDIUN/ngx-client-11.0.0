/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { KalturaReportType } from './KalturaReportType';
import { KalturaReportInputFilter } from './KalturaReportInputFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function ReportGetUrlForReportAsCsvActionArgs() { }
/** @type {?} */
ReportGetUrlForReportAsCsvActionArgs.prototype.reportTitle;
/** @type {?} */
ReportGetUrlForReportAsCsvActionArgs.prototype.reportText;
/** @type {?} */
ReportGetUrlForReportAsCsvActionArgs.prototype.headers;
/** @type {?} */
ReportGetUrlForReportAsCsvActionArgs.prototype.reportType;
/** @type {?} */
ReportGetUrlForReportAsCsvActionArgs.prototype.reportInputFilter;
/** @type {?|undefined} */
ReportGetUrlForReportAsCsvActionArgs.prototype.dimension;
/** @type {?|undefined} */
ReportGetUrlForReportAsCsvActionArgs.prototype.pager;
/** @type {?|undefined} */
ReportGetUrlForReportAsCsvActionArgs.prototype.order;
/** @type {?|undefined} */
ReportGetUrlForReportAsCsvActionArgs.prototype.objectIds;
/**
 * Build request payload for service 'report' action 'getUrlForReportAsCsv'.
 *
 * Usage: will create a Csv file for the given report and return the URL to access it
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 */
export class ReportGetUrlForReportAsCsvAction extends KalturaRequest {
    /**
     * @param {?} data
     */
    constructor(data) {
        super(data, { responseType: 's', responseSubType: '', responseConstructor: null });
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            service: { type: 'c', default: 'report' },
            action: { type: 'c', default: 'getUrlForReportAsCsv' },
            reportTitle: { type: 's' },
            reportText: { type: 's' },
            headers: { type: 's' },
            reportType: { type: 'es', subTypeConstructor: KalturaReportType, subType: 'KalturaReportType' },
            reportInputFilter: { type: 'o', subTypeConstructor: KalturaReportInputFilter, subType: 'KalturaReportInputFilter' },
            dimension: { type: 's' },
            pager: { type: 'o', subTypeConstructor: KalturaFilterPager, subType: 'KalturaFilterPager' },
            order: { type: 's' },
            objectIds: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    ReportGetUrlForReportAsCsvAction.prototype.reportTitle;
    /** @type {?} */
    ReportGetUrlForReportAsCsvAction.prototype.reportText;
    /** @type {?} */
    ReportGetUrlForReportAsCsvAction.prototype.headers;
    /** @type {?} */
    ReportGetUrlForReportAsCsvAction.prototype.reportType;
    /** @type {?} */
    ReportGetUrlForReportAsCsvAction.prototype.reportInputFilter;
    /** @type {?} */
    ReportGetUrlForReportAsCsvAction.prototype.dimension;
    /** @type {?} */
    ReportGetUrlForReportAsCsvAction.prototype.pager;
    /** @type {?} */
    ReportGetUrlForReportAsCsvAction.prototype.order;
    /** @type {?} */
    ReportGetUrlForReportAsCsvAction.prototype.objectIds;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVwb3J0R2V0VXJsRm9yUmVwb3J0QXNDc3ZBY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL1JlcG9ydEdldFVybEZvclJlcG9ydEFzQ3N2QWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFJQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN0RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0J4RSxNQUFNLHVDQUF3QyxTQUFRLGNBQXNCOzs7O0lBWXhFLFlBQVksSUFBMkM7UUFFbkQsS0FBSyxDQUFDLElBQUksRUFBRSxFQUFDLFlBQVksRUFBRyxHQUFHLEVBQUUsZUFBZSxFQUFHLEVBQUUsRUFBRSxtQkFBbUIsRUFBRyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0tBQ3hGOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxRQUFRLEVBQUU7WUFDeEQsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsc0JBQXNCLEVBQUU7WUFDekQsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1QixVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzNCLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEIsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxpQkFBaUIsRUFBRSxPQUFPLEVBQUcsbUJBQW1CLEVBQUU7WUFDbkcsaUJBQWlCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLHdCQUF3QixFQUFFLE9BQU8sRUFBRywwQkFBMEIsRUFBRTtZQUN2SCxTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzFCLEtBQUssRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsa0JBQWtCLEVBQUUsT0FBTyxFQUFHLG9CQUFvQixFQUFFO1lBQy9GLEtBQUssRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDdEIsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNqQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuXG5cbmltcG9ydCB7IEthbHR1cmFSZXBvcnRUeXBlIH0gZnJvbSAnLi9LYWx0dXJhUmVwb3J0VHlwZSc7XG5pbXBvcnQgeyBLYWx0dXJhUmVwb3J0SW5wdXRGaWx0ZXIgfSBmcm9tICcuL0thbHR1cmFSZXBvcnRJbnB1dEZpbHRlcic7XG5pbXBvcnQgeyBLYWx0dXJhRmlsdGVyUGFnZXIgfSBmcm9tICcuL0thbHR1cmFGaWx0ZXJQYWdlcic7XG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBSZXBvcnRHZXRVcmxGb3JSZXBvcnRBc0NzdkFjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3RBcmdzIHtcbiAgICByZXBvcnRUaXRsZSA6IHN0cmluZztcblx0cmVwb3J0VGV4dCA6IHN0cmluZztcblx0aGVhZGVycyA6IHN0cmluZztcblx0cmVwb3J0VHlwZSA6IEthbHR1cmFSZXBvcnRUeXBlO1xuXHRyZXBvcnRJbnB1dEZpbHRlciA6IEthbHR1cmFSZXBvcnRJbnB1dEZpbHRlcjtcblx0ZGltZW5zaW9uPyA6IHN0cmluZztcblx0cGFnZXI/IDogS2FsdHVyYUZpbHRlclBhZ2VyO1xuXHRvcmRlcj8gOiBzdHJpbmc7XG5cdG9iamVjdElkcz8gOiBzdHJpbmc7XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICdyZXBvcnQnIGFjdGlvbiAnZ2V0VXJsRm9yUmVwb3J0QXNDc3YnLlxuICpcbiAqIFVzYWdlOiB3aWxsIGNyZWF0ZSBhIENzdiBmaWxlIGZvciB0aGUgZ2l2ZW4gcmVwb3J0IGFuZCByZXR1cm4gdGhlIFVSTCB0byBhY2Nlc3MgaXRcbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICBzdHJpbmdcbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIFJlcG9ydEdldFVybEZvclJlcG9ydEFzQ3N2QWN0aW9uIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3Q8c3RyaW5nPiB7XG5cbiAgICByZXBvcnRUaXRsZSA6IHN0cmluZztcblx0cmVwb3J0VGV4dCA6IHN0cmluZztcblx0aGVhZGVycyA6IHN0cmluZztcblx0cmVwb3J0VHlwZSA6IEthbHR1cmFSZXBvcnRUeXBlO1xuXHRyZXBvcnRJbnB1dEZpbHRlciA6IEthbHR1cmFSZXBvcnRJbnB1dEZpbHRlcjtcblx0ZGltZW5zaW9uIDogc3RyaW5nO1xuXHRwYWdlciA6IEthbHR1cmFGaWx0ZXJQYWdlcjtcblx0b3JkZXIgOiBzdHJpbmc7XG5cdG9iamVjdElkcyA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBSZXBvcnRHZXRVcmxGb3JSZXBvcnRBc0NzdkFjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ3MnLCByZXNwb25zZVN1YlR5cGUgOiAnJywgcmVzcG9uc2VDb25zdHJ1Y3RvciA6IG51bGwgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAncmVwb3J0JyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnZ2V0VXJsRm9yUmVwb3J0QXNDc3YnIH0sXG5cdFx0XHRcdHJlcG9ydFRpdGxlIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHJlcG9ydFRleHQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0aGVhZGVycyA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRyZXBvcnRUeXBlIDogeyB0eXBlIDogJ2VzJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVJlcG9ydFR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYVJlcG9ydFR5cGUnIH0sXG5cdFx0XHRcdHJlcG9ydElucHV0RmlsdGVyIDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhUmVwb3J0SW5wdXRGaWx0ZXIsIHN1YlR5cGUgOiAnS2FsdHVyYVJlcG9ydElucHV0RmlsdGVyJyB9LFxuXHRcdFx0XHRkaW1lbnNpb24gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cGFnZXIgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFGaWx0ZXJQYWdlciwgc3ViVHlwZSA6ICdLYWx0dXJhRmlsdGVyUGFnZXInIH0sXG5cdFx0XHRcdG9yZGVyIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdG9iamVjdElkcyA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=