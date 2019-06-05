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
export function EntryDistributionValidateActionArgs() { }
/** @type {?} */
EntryDistributionValidateActionArgs.prototype.id;
/**
 * Build request payload for service 'entryDistribution' action 'validate'.
 *
 * Usage: Validates Entry Distribution by id for submission
 *
 * Server response type:         KalturaEntryDistribution
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'entryDistribution' action 'validate'.
 *
 * Usage: Validates Entry Distribution by id for submission
 *
 * Server response type:         KalturaEntryDistribution
 * Server failure response type: KalturaAPIException
 */
EntryDistributionValidateAction = /** @class */ (function (_super) {
    tslib_1.__extends(EntryDistributionValidateAction, _super);
    function EntryDistributionValidateAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaEntryDistribution', responseConstructor: KalturaEntryDistribution }) || this;
    }
    /**
     * @return {?}
     */
    EntryDistributionValidateAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'contentdistribution_entrydistribution' },
            action: { type: 'c', default: 'validate' },
            id: { type: 'n' }
        });
        return result;
    };
    return EntryDistributionValidateAction;
}(KalturaRequest));
/**
 * Build request payload for service 'entryDistribution' action 'validate'.
 *
 * Usage: Validates Entry Distribution by id for submission
 *
 * Server response type:         KalturaEntryDistribution
 * Server failure response type: KalturaAPIException
 */
export { EntryDistributionValidateAction };
if (false) {
    /** @type {?} */
    EntryDistributionValidateAction.prototype.id;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW50cnlEaXN0cmlidXRpb25WYWxpZGF0ZUFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvRW50cnlEaXN0cmlidXRpb25WYWxpZGF0ZUFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRXRFLE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQWN4RTs7Ozs7Ozs7QUFBQTtJQUFxRCwyREFBd0M7SUFJekYseUNBQVksSUFBMEM7ZUFFbEQsa0JBQU0sSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcsMEJBQTBCLEVBQUUsbUJBQW1CLEVBQUcsd0JBQXdCLEVBQUcsQ0FBQztLQUNwSTs7OztJQUVTLHNEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHVDQUF1QyxFQUFFO1lBQ3ZGLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLFVBQVUsRUFBRTtZQUM3QyxFQUFFLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ1YsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjswQ0F2Q0w7RUFrQnFELGNBQWMsRUFzQmxFLENBQUE7Ozs7Ozs7OztBQXRCRCwyQ0FzQkMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUVudHJ5RGlzdHJpYnV0aW9uIH0gZnJvbSAnLi9LYWx0dXJhRW50cnlEaXN0cmlidXRpb24nO1xuXG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBFbnRyeURpc3RyaWJ1dGlvblZhbGlkYXRlQWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdEFyZ3Mge1xuICAgIGlkIDogbnVtYmVyO1xufVxuXG4vKipcbiAqIEJ1aWxkIHJlcXVlc3QgcGF5bG9hZCBmb3Igc2VydmljZSAnZW50cnlEaXN0cmlidXRpb24nIGFjdGlvbiAndmFsaWRhdGUnLlxuICpcbiAqIFVzYWdlOiBWYWxpZGF0ZXMgRW50cnkgRGlzdHJpYnV0aW9uIGJ5IGlkIGZvciBzdWJtaXNzaW9uXG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgS2FsdHVyYUVudHJ5RGlzdHJpYnV0aW9uXG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBFbnRyeURpc3RyaWJ1dGlvblZhbGlkYXRlQWN0aW9uIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3Q8S2FsdHVyYUVudHJ5RGlzdHJpYnV0aW9uPiB7XG5cbiAgICBpZCA6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBFbnRyeURpc3RyaWJ1dGlvblZhbGlkYXRlQWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAnbycsIHJlc3BvbnNlU3ViVHlwZSA6ICdLYWx0dXJhRW50cnlEaXN0cmlidXRpb24nLCByZXNwb25zZUNvbnN0cnVjdG9yIDogS2FsdHVyYUVudHJ5RGlzdHJpYnV0aW9uICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VydmljZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdjb250ZW50ZGlzdHJpYnV0aW9uX2VudHJ5ZGlzdHJpYnV0aW9uJyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAndmFsaWRhdGUnIH0sXG5cdFx0XHRcdGlkIDogeyB0eXBlIDogJ24nIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==