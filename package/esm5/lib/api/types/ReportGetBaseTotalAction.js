/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaReportBaseTotal } from './KalturaReportBaseTotal';
import { KalturaReportType } from './KalturaReportType';
import { KalturaReportInputFilter } from './KalturaReportInputFilter';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function ReportGetBaseTotalActionArgs() { }
/** @type {?} */
ReportGetBaseTotalActionArgs.prototype.reportType;
/** @type {?} */
ReportGetBaseTotalActionArgs.prototype.reportInputFilter;
/** @type {?|undefined} */
ReportGetBaseTotalActionArgs.prototype.objectIds;
/**
 * Build request payload for service 'report' action 'getBaseTotal'.
 *
 * Usage: report getBaseTotal action allows to get a the total base for storage reports
 *
 * Server response type:         KalturaReportBaseTotal[]
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'report' action 'getBaseTotal'.
 *
 * Usage: report getBaseTotal action allows to get a the total base for storage reports
 *
 * Server response type:         KalturaReportBaseTotal[]
 * Server failure response type: KalturaAPIException
 */
ReportGetBaseTotalAction = /** @class */ (function (_super) {
    tslib_1.__extends(ReportGetBaseTotalAction, _super);
    function ReportGetBaseTotalAction(data) {
        return _super.call(this, data, { responseType: 'a', responseSubType: 'KalturaReportBaseTotal', responseConstructor: KalturaReportBaseTotal }) || this;
    }
    /**
     * @return {?}
     */
    ReportGetBaseTotalAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'report' },
            action: { type: 'c', default: 'getBaseTotal' },
            reportType: { type: 'es', subTypeConstructor: KalturaReportType, subType: 'KalturaReportType' },
            reportInputFilter: { type: 'o', subTypeConstructor: KalturaReportInputFilter, subType: 'KalturaReportInputFilter' },
            objectIds: { type: 's' }
        });
        return result;
    };
    return ReportGetBaseTotalAction;
}(KalturaRequest));
/**
 * Build request payload for service 'report' action 'getBaseTotal'.
 *
 * Usage: report getBaseTotal action allows to get a the total base for storage reports
 *
 * Server response type:         KalturaReportBaseTotal[]
 * Server failure response type: KalturaAPIException
 */
export { ReportGetBaseTotalAction };
if (false) {
    /** @type {?} */
    ReportGetBaseTotalAction.prototype.reportType;
    /** @type {?} */
    ReportGetBaseTotalAction.prototype.reportInputFilter;
    /** @type {?} */
    ReportGetBaseTotalAction.prototype.objectIds;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVwb3J0R2V0QmFzZVRvdGFsQWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9SZXBvcnRHZXRCYXNlVG90YWxBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUVsRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN0RSxPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0J4RTs7Ozs7Ozs7QUFBQTtJQUE4QyxvREFBd0M7SUFNbEYsa0NBQVksSUFBbUM7ZUFFM0Msa0JBQU0sSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcsd0JBQXdCLEVBQUUsbUJBQW1CLEVBQUcsc0JBQXNCLEVBQUcsQ0FBQztLQUNoSTs7OztJQUVTLCtDQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLFFBQVEsRUFBRTtZQUN4RCxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxjQUFjLEVBQUU7WUFDakQsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxpQkFBaUIsRUFBRSxPQUFPLEVBQUcsbUJBQW1CLEVBQUU7WUFDbkcsaUJBQWlCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLHdCQUF3QixFQUFFLE9BQU8sRUFBRywwQkFBMEIsRUFBRTtZQUN2SCxTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ2pCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7bUNBL0NMO0VBc0I4QyxjQUFjLEVBMEIzRCxDQUFBOzs7Ozs7Ozs7QUExQkQsb0NBMEJDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFSZXBvcnRCYXNlVG90YWwgfSBmcm9tICcuL0thbHR1cmFSZXBvcnRCYXNlVG90YWwnO1xuXG5pbXBvcnQgeyBLYWx0dXJhUmVwb3J0VHlwZSB9IGZyb20gJy4vS2FsdHVyYVJlcG9ydFR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYVJlcG9ydElucHV0RmlsdGVyIH0gZnJvbSAnLi9LYWx0dXJhUmVwb3J0SW5wdXRGaWx0ZXInO1xuaW1wb3J0IHsgS2FsdHVyYVJlcXVlc3QsIEthbHR1cmFSZXF1ZXN0QXJncyB9IGZyb20gJy4uL2thbHR1cmEtcmVxdWVzdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVwb3J0R2V0QmFzZVRvdGFsQWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdEFyZ3Mge1xuICAgIHJlcG9ydFR5cGUgOiBLYWx0dXJhUmVwb3J0VHlwZTtcblx0cmVwb3J0SW5wdXRGaWx0ZXIgOiBLYWx0dXJhUmVwb3J0SW5wdXRGaWx0ZXI7XG5cdG9iamVjdElkcz8gOiBzdHJpbmc7XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICdyZXBvcnQnIGFjdGlvbiAnZ2V0QmFzZVRvdGFsJy5cbiAqXG4gKiBVc2FnZTogcmVwb3J0IGdldEJhc2VUb3RhbCBhY3Rpb24gYWxsb3dzIHRvIGdldCBhIHRoZSB0b3RhbCBiYXNlIGZvciBzdG9yYWdlIHJlcG9ydHNcbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICBLYWx0dXJhUmVwb3J0QmFzZVRvdGFsW11cbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIFJlcG9ydEdldEJhc2VUb3RhbEFjdGlvbiBleHRlbmRzIEthbHR1cmFSZXF1ZXN0PEthbHR1cmFSZXBvcnRCYXNlVG90YWxbXT4ge1xuXG4gICAgcmVwb3J0VHlwZSA6IEthbHR1cmFSZXBvcnRUeXBlO1xuXHRyZXBvcnRJbnB1dEZpbHRlciA6IEthbHR1cmFSZXBvcnRJbnB1dEZpbHRlcjtcblx0b2JqZWN0SWRzIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YSA6IFJlcG9ydEdldEJhc2VUb3RhbEFjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ2EnLCByZXNwb25zZVN1YlR5cGUgOiAnS2FsdHVyYVJlcG9ydEJhc2VUb3RhbCcsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBLYWx0dXJhUmVwb3J0QmFzZVRvdGFsICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VydmljZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdyZXBvcnQnIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdnZXRCYXNlVG90YWwnIH0sXG5cdFx0XHRcdHJlcG9ydFR5cGUgOiB7IHR5cGUgOiAnZXMnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhUmVwb3J0VHlwZSwgc3ViVHlwZSA6ICdLYWx0dXJhUmVwb3J0VHlwZScgfSxcblx0XHRcdFx0cmVwb3J0SW5wdXRGaWx0ZXIgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFSZXBvcnRJbnB1dEZpbHRlciwgc3ViVHlwZSA6ICdLYWx0dXJhUmVwb3J0SW5wdXRGaWx0ZXInIH0sXG5cdFx0XHRcdG9iamVjdElkcyA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=