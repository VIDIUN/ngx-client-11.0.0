/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaEntryDistribution } from './KalturaEntryDistribution';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function EntryDistributionSubmitFetchReportActionArgs() { }
/** @type {?} */
EntryDistributionSubmitFetchReportActionArgs.prototype.id;
/**
 * Build request payload for service 'entryDistribution' action 'submitFetchReport'.
 *
 * Usage: Submits Entry Distribution report request
 *
 * Server response type:         KalturaEntryDistribution
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'entryDistribution' action 'submitFetchReport'.
 *
 * Usage: Submits Entry Distribution report request
 *
 * Server response type:         KalturaEntryDistribution
 * Server failure response type: KalturaAPIException
 */
EntryDistributionSubmitFetchReportAction = /** @class */ (function (_super) {
    tslib_1.__extends(EntryDistributionSubmitFetchReportAction, _super);
    function EntryDistributionSubmitFetchReportAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaEntryDistribution', responseConstructor: KalturaEntryDistribution }) || this;
    }
    /**
     * @return {?}
     */
    EntryDistributionSubmitFetchReportAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'contentdistribution_entrydistribution' },
            action: { type: 'c', default: 'submitFetchReport' },
            id: { type: 'n' }
        });
        return result;
    };
    return EntryDistributionSubmitFetchReportAction;
}(KalturaRequest));
/**
 * Build request payload for service 'entryDistribution' action 'submitFetchReport'.
 *
 * Usage: Submits Entry Distribution report request
 *
 * Server response type:         KalturaEntryDistribution
 * Server failure response type: KalturaAPIException
 */
export { EntryDistributionSubmitFetchReportAction };
if (false) {
    /** @type {?} */
    EntryDistributionSubmitFetchReportAction.prototype.id;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW50cnlEaXN0cmlidXRpb25TdWJtaXRGZXRjaFJlcG9ydEFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvRW50cnlEaXN0cmlidXRpb25TdWJtaXRGZXRjaFJlcG9ydEFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRXRFLE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQWN4RTs7Ozs7Ozs7QUFBQTtJQUE4RCxvRUFBd0M7SUFJbEcsa0RBQVksSUFBbUQ7ZUFFM0Qsa0JBQU0sSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcsMEJBQTBCLEVBQUUsbUJBQW1CLEVBQUcsd0JBQXdCLEVBQUcsQ0FBQztLQUNwSTs7OztJQUVTLCtEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHVDQUF1QyxFQUFFO1lBQ3ZGLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLG1CQUFtQixFQUFFO1lBQ3RELEVBQUUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDVixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO21EQXZDTDtFQWtCOEQsY0FBYyxFQXNCM0UsQ0FBQTs7Ozs7Ozs7O0FBdEJELG9EQXNCQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhRW50cnlEaXN0cmlidXRpb24gfSBmcm9tICcuL0thbHR1cmFFbnRyeURpc3RyaWJ1dGlvbic7XG5cbmltcG9ydCB7IEthbHR1cmFSZXF1ZXN0LCBLYWx0dXJhUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEVudHJ5RGlzdHJpYnV0aW9uU3VibWl0RmV0Y2hSZXBvcnRBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAgaWQgOiBudW1iZXI7XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICdlbnRyeURpc3RyaWJ1dGlvbicgYWN0aW9uICdzdWJtaXRGZXRjaFJlcG9ydCcuXG4gKlxuICogVXNhZ2U6IFN1Ym1pdHMgRW50cnkgRGlzdHJpYnV0aW9uIHJlcG9ydCByZXF1ZXN0XG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgS2FsdHVyYUVudHJ5RGlzdHJpYnV0aW9uXG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBFbnRyeURpc3RyaWJ1dGlvblN1Ym1pdEZldGNoUmVwb3J0QWN0aW9uIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3Q8S2FsdHVyYUVudHJ5RGlzdHJpYnV0aW9uPiB7XG5cbiAgICBpZCA6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBFbnRyeURpc3RyaWJ1dGlvblN1Ym1pdEZldGNoUmVwb3J0QWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAnbycsIHJlc3BvbnNlU3ViVHlwZSA6ICdLYWx0dXJhRW50cnlEaXN0cmlidXRpb24nLCByZXNwb25zZUNvbnN0cnVjdG9yIDogS2FsdHVyYUVudHJ5RGlzdHJpYnV0aW9uICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VydmljZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdjb250ZW50ZGlzdHJpYnV0aW9uX2VudHJ5ZGlzdHJpYnV0aW9uJyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnc3VibWl0RmV0Y2hSZXBvcnQnIH0sXG5cdFx0XHRcdGlkIDogeyB0eXBlIDogJ24nIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==