/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { KalturaReportGraph } from './KalturaReportGraph';
import { KalturaLiveReportType } from './KalturaLiveReportType';
import { KalturaLiveReportInputFilter } from './KalturaLiveReportInputFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function LiveReportsGetEventsActionArgs() { }
/** @type {?} */
LiveReportsGetEventsActionArgs.prototype.reportType;
/** @type {?|undefined} */
LiveReportsGetEventsActionArgs.prototype.filter;
/** @type {?|undefined} */
LiveReportsGetEventsActionArgs.prototype.pager;
/**
 * Build request payload for service 'liveReports' action 'getEvents'.
 *
 *
 *
 * Server response type:         KalturaReportGraph[]
 * Server failure response type: KalturaAPIException
 */
export class LiveReportsGetEventsAction extends KalturaRequest {
    /**
     * @param {?} data
     */
    constructor(data) {
        super(data, { responseType: 'a', responseSubType: 'KalturaReportGraph', responseConstructor: KalturaReportGraph });
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            service: { type: 'c', default: 'livereports' },
            action: { type: 'c', default: 'getEvents' },
            reportType: { type: 'es', subTypeConstructor: KalturaLiveReportType, subType: 'KalturaLiveReportType' },
            filter: { type: 'o', subTypeConstructor: KalturaLiveReportInputFilter, subType: 'KalturaLiveReportInputFilter' },
            pager: { type: 'o', subTypeConstructor: KalturaFilterPager, subType: 'KalturaFilterPager' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    LiveReportsGetEventsAction.prototype.reportType;
    /** @type {?} */
    LiveReportsGetEventsAction.prototype.filter;
    /** @type {?} */
    LiveReportsGetEventsAction.prototype.pager;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGl2ZVJlcG9ydHNHZXRFdmVudHNBY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0xpdmVSZXBvcnRzR2V0RXZlbnRzQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUUxRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM5RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0J4RSxNQUFNLGlDQUFrQyxTQUFRLGNBQW9DOzs7O0lBTWhGLFlBQVksSUFBcUM7UUFFN0MsS0FBSyxDQUFDLElBQUksRUFBRSxFQUFDLFlBQVksRUFBRyxHQUFHLEVBQUUsZUFBZSxFQUFHLG9CQUFvQixFQUFFLG1CQUFtQixFQUFHLGtCQUFrQixFQUFHLENBQUMsQ0FBQztLQUN6SDs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsYUFBYSxFQUFFO1lBQzdELE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLFdBQVcsRUFBRTtZQUM5QyxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHFCQUFxQixFQUFFLE9BQU8sRUFBRyx1QkFBdUIsRUFBRTtZQUMzRyxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLDRCQUE0QixFQUFFLE9BQU8sRUFBRyw4QkFBOEIsRUFBRTtZQUNwSCxLQUFLLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLGtCQUFrQixFQUFFLE9BQU8sRUFBRyxvQkFBb0IsRUFBRTtTQUN0RixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVJlcG9ydEdyYXBoIH0gZnJvbSAnLi9LYWx0dXJhUmVwb3J0R3JhcGgnO1xuXG5pbXBvcnQgeyBLYWx0dXJhTGl2ZVJlcG9ydFR5cGUgfSBmcm9tICcuL0thbHR1cmFMaXZlUmVwb3J0VHlwZSc7XG5pbXBvcnQgeyBLYWx0dXJhTGl2ZVJlcG9ydElucHV0RmlsdGVyIH0gZnJvbSAnLi9LYWx0dXJhTGl2ZVJlcG9ydElucHV0RmlsdGVyJztcbmltcG9ydCB7IEthbHR1cmFGaWx0ZXJQYWdlciB9IGZyb20gJy4vS2FsdHVyYUZpbHRlclBhZ2VyJztcbmltcG9ydCB7IEthbHR1cmFSZXF1ZXN0LCBLYWx0dXJhUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIExpdmVSZXBvcnRzR2V0RXZlbnRzQWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdEFyZ3Mge1xuICAgIHJlcG9ydFR5cGUgOiBLYWx0dXJhTGl2ZVJlcG9ydFR5cGU7XG5cdGZpbHRlcj8gOiBLYWx0dXJhTGl2ZVJlcG9ydElucHV0RmlsdGVyO1xuXHRwYWdlcj8gOiBLYWx0dXJhRmlsdGVyUGFnZXI7XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICdsaXZlUmVwb3J0cycgYWN0aW9uICdnZXRFdmVudHMnLlxuICpcbiAqIFxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIEthbHR1cmFSZXBvcnRHcmFwaFtdXG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBMaXZlUmVwb3J0c0dldEV2ZW50c0FjdGlvbiBleHRlbmRzIEthbHR1cmFSZXF1ZXN0PEthbHR1cmFSZXBvcnRHcmFwaFtdPiB7XG5cbiAgICByZXBvcnRUeXBlIDogS2FsdHVyYUxpdmVSZXBvcnRUeXBlO1xuXHRmaWx0ZXIgOiBLYWx0dXJhTGl2ZVJlcG9ydElucHV0RmlsdGVyO1xuXHRwYWdlciA6IEthbHR1cmFGaWx0ZXJQYWdlcjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBMaXZlUmVwb3J0c0dldEV2ZW50c0FjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ2EnLCByZXNwb25zZVN1YlR5cGUgOiAnS2FsdHVyYVJlcG9ydEdyYXBoJywgcmVzcG9uc2VDb25zdHJ1Y3RvciA6IEthbHR1cmFSZXBvcnRHcmFwaCAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnbGl2ZXJlcG9ydHMnIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdnZXRFdmVudHMnIH0sXG5cdFx0XHRcdHJlcG9ydFR5cGUgOiB7IHR5cGUgOiAnZXMnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhTGl2ZVJlcG9ydFR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYUxpdmVSZXBvcnRUeXBlJyB9LFxuXHRcdFx0XHRmaWx0ZXIgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFMaXZlUmVwb3J0SW5wdXRGaWx0ZXIsIHN1YlR5cGUgOiAnS2FsdHVyYUxpdmVSZXBvcnRJbnB1dEZpbHRlcicgfSxcblx0XHRcdFx0cGFnZXIgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFGaWx0ZXJQYWdlciwgc3ViVHlwZSA6ICdLYWx0dXJhRmlsdGVyUGFnZXInIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==