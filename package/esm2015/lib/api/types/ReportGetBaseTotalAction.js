/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
export class ReportGetBaseTotalAction extends KalturaRequest {
    /**
     * @param {?} data
     */
    constructor(data) {
        super(data, { responseType: 'a', responseSubType: 'KalturaReportBaseTotal', responseConstructor: KalturaReportBaseTotal });
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            service: { type: 'c', default: 'report' },
            action: { type: 'c', default: 'getBaseTotal' },
            reportType: { type: 'es', subTypeConstructor: KalturaReportType, subType: 'KalturaReportType' },
            reportInputFilter: { type: 'o', subTypeConstructor: KalturaReportInputFilter, subType: 'KalturaReportInputFilter' },
            objectIds: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    ReportGetBaseTotalAction.prototype.reportType;
    /** @type {?} */
    ReportGetBaseTotalAction.prototype.reportInputFilter;
    /** @type {?} */
    ReportGetBaseTotalAction.prototype.objectIds;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVwb3J0R2V0QmFzZVRvdGFsQWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9SZXBvcnRHZXRCYXNlVG90YWxBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRWxFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3hELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQnhFLE1BQU0sK0JBQWdDLFNBQVEsY0FBd0M7Ozs7SUFNbEYsWUFBWSxJQUFtQztRQUUzQyxLQUFLLENBQUMsSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcsd0JBQXdCLEVBQUUsbUJBQW1CLEVBQUcsc0JBQXNCLEVBQUcsQ0FBQyxDQUFDO0tBQ2pJOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxRQUFRLEVBQUU7WUFDeEQsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsY0FBYyxFQUFFO1lBQ2pELFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsaUJBQWlCLEVBQUUsT0FBTyxFQUFHLG1CQUFtQixFQUFFO1lBQ25HLGlCQUFpQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyx3QkFBd0IsRUFBRSxPQUFPLEVBQUcsMEJBQTBCLEVBQUU7WUFDdkgsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNqQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVJlcG9ydEJhc2VUb3RhbCB9IGZyb20gJy4vS2FsdHVyYVJlcG9ydEJhc2VUb3RhbCc7XG5cbmltcG9ydCB7IEthbHR1cmFSZXBvcnRUeXBlIH0gZnJvbSAnLi9LYWx0dXJhUmVwb3J0VHlwZSc7XG5pbXBvcnQgeyBLYWx0dXJhUmVwb3J0SW5wdXRGaWx0ZXIgfSBmcm9tICcuL0thbHR1cmFSZXBvcnRJbnB1dEZpbHRlcic7XG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBSZXBvcnRHZXRCYXNlVG90YWxBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAgcmVwb3J0VHlwZSA6IEthbHR1cmFSZXBvcnRUeXBlO1xuXHRyZXBvcnRJbnB1dEZpbHRlciA6IEthbHR1cmFSZXBvcnRJbnB1dEZpbHRlcjtcblx0b2JqZWN0SWRzPyA6IHN0cmluZztcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ3JlcG9ydCcgYWN0aW9uICdnZXRCYXNlVG90YWwnLlxuICpcbiAqIFVzYWdlOiByZXBvcnQgZ2V0QmFzZVRvdGFsIGFjdGlvbiBhbGxvd3MgdG8gZ2V0IGEgdGhlIHRvdGFsIGJhc2UgZm9yIHN0b3JhZ2UgcmVwb3J0c1xuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIEthbHR1cmFSZXBvcnRCYXNlVG90YWxbXVxuICogU2VydmVyIGZhaWx1cmUgcmVzcG9uc2UgdHlwZTogS2FsdHVyYUFQSUV4Y2VwdGlvblxuICovXG5leHBvcnQgY2xhc3MgUmVwb3J0R2V0QmFzZVRvdGFsQWN0aW9uIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3Q8S2FsdHVyYVJlcG9ydEJhc2VUb3RhbFtdPiB7XG5cbiAgICByZXBvcnRUeXBlIDogS2FsdHVyYVJlcG9ydFR5cGU7XG5cdHJlcG9ydElucHV0RmlsdGVyIDogS2FsdHVyYVJlcG9ydElucHV0RmlsdGVyO1xuXHRvYmplY3RJZHMgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogUmVwb3J0R2V0QmFzZVRvdGFsQWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAnYScsIHJlc3BvbnNlU3ViVHlwZSA6ICdLYWx0dXJhUmVwb3J0QmFzZVRvdGFsJywgcmVzcG9uc2VDb25zdHJ1Y3RvciA6IEthbHR1cmFSZXBvcnRCYXNlVG90YWwgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ3JlcG9ydCcgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2dldEJhc2VUb3RhbCcgfSxcblx0XHRcdFx0cmVwb3J0VHlwZSA6IHsgdHlwZSA6ICdlcycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFSZXBvcnRUeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFSZXBvcnRUeXBlJyB9LFxuXHRcdFx0XHRyZXBvcnRJbnB1dEZpbHRlciA6IHsgdHlwZSA6ICdvJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVJlcG9ydElucHV0RmlsdGVyLCBzdWJUeXBlIDogJ0thbHR1cmFSZXBvcnRJbnB1dEZpbHRlcicgfSxcblx0XHRcdFx0b2JqZWN0SWRzIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==