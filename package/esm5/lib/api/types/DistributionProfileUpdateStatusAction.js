/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaDistributionProfile } from './KalturaDistributionProfile';
import { KalturaDistributionProfileStatus } from './KalturaDistributionProfileStatus';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function DistributionProfileUpdateStatusActionArgs() { }
/** @type {?} */
DistributionProfileUpdateStatusActionArgs.prototype.id;
/** @type {?} */
DistributionProfileUpdateStatusActionArgs.prototype.status;
/**
 * Build request payload for service 'distributionProfile' action 'updateStatus'.
 *
 * Usage: Update Distribution Profile status by id
 *
 * Server response type:         KalturaDistributionProfile
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'distributionProfile' action 'updateStatus'.
 *
 * Usage: Update Distribution Profile status by id
 *
 * Server response type:         KalturaDistributionProfile
 * Server failure response type: KalturaAPIException
 */
DistributionProfileUpdateStatusAction = /** @class */ (function (_super) {
    tslib_1.__extends(DistributionProfileUpdateStatusAction, _super);
    function DistributionProfileUpdateStatusAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaDistributionProfile', responseConstructor: KalturaDistributionProfile }) || this;
    }
    /**
     * @return {?}
     */
    DistributionProfileUpdateStatusAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'contentdistribution_distributionprofile' },
            action: { type: 'c', default: 'updateStatus' },
            id: { type: 'n' },
            status: { type: 'en', subTypeConstructor: KalturaDistributionProfileStatus, subType: 'KalturaDistributionProfileStatus' }
        });
        return result;
    };
    return DistributionProfileUpdateStatusAction;
}(KalturaRequest));
/**
 * Build request payload for service 'distributionProfile' action 'updateStatus'.
 *
 * Usage: Update Distribution Profile status by id
 *
 * Server response type:         KalturaDistributionProfile
 * Server failure response type: KalturaAPIException
 */
export { DistributionProfileUpdateStatusAction };
if (false) {
    /** @type {?} */
    DistributionProfileUpdateStatusAction.prototype.id;
    /** @type {?} */
    DistributionProfileUpdateStatusAction.prototype.status;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGlzdHJpYnV0aW9uUHJvZmlsZVVwZGF0ZVN0YXR1c0FjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvRGlzdHJpYnV0aW9uUHJvZmlsZVVwZGF0ZVN0YXR1c0FjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRTFFLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZXhFOzs7Ozs7OztBQUFBO0lBQTJELGlFQUEwQztJQUtqRywrQ0FBWSxJQUFnRDtlQUV4RCxrQkFBTSxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRyw0QkFBNEIsRUFBRSxtQkFBbUIsRUFBRywwQkFBMEIsRUFBRyxDQUFDO0tBQ3hJOzs7O0lBRVMsNERBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcseUNBQXlDLEVBQUU7WUFDekYsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsY0FBYyxFQUFFO1lBQ2pELEVBQUUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDbkIsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxnQ0FBZ0MsRUFBRSxPQUFPLEVBQUcsa0NBQWtDLEVBQUU7U0FDcEgsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtnREEzQ0w7RUFvQjJELGNBQWMsRUF3QnhFLENBQUE7Ozs7Ozs7OztBQXhCRCxpREF3QkMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYURpc3RyaWJ1dGlvblByb2ZpbGUgfSBmcm9tICcuL0thbHR1cmFEaXN0cmlidXRpb25Qcm9maWxlJztcblxuaW1wb3J0IHsgS2FsdHVyYURpc3RyaWJ1dGlvblByb2ZpbGVTdGF0dXMgfSBmcm9tICcuL0thbHR1cmFEaXN0cmlidXRpb25Qcm9maWxlU3RhdHVzJztcbmltcG9ydCB7IEthbHR1cmFSZXF1ZXN0LCBLYWx0dXJhUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIERpc3RyaWJ1dGlvblByb2ZpbGVVcGRhdGVTdGF0dXNBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAgaWQgOiBudW1iZXI7XG5cdHN0YXR1cyA6IEthbHR1cmFEaXN0cmlidXRpb25Qcm9maWxlU3RhdHVzO1xufVxuXG4vKipcbiAqIEJ1aWxkIHJlcXVlc3QgcGF5bG9hZCBmb3Igc2VydmljZSAnZGlzdHJpYnV0aW9uUHJvZmlsZScgYWN0aW9uICd1cGRhdGVTdGF0dXMnLlxuICpcbiAqIFVzYWdlOiBVcGRhdGUgRGlzdHJpYnV0aW9uIFByb2ZpbGUgc3RhdHVzIGJ5IGlkXG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgS2FsdHVyYURpc3RyaWJ1dGlvblByb2ZpbGVcbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIERpc3RyaWJ1dGlvblByb2ZpbGVVcGRhdGVTdGF0dXNBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdDxLYWx0dXJhRGlzdHJpYnV0aW9uUHJvZmlsZT4ge1xuXG4gICAgaWQgOiBudW1iZXI7XG5cdHN0YXR1cyA6IEthbHR1cmFEaXN0cmlidXRpb25Qcm9maWxlU3RhdHVzO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YSA6IERpc3RyaWJ1dGlvblByb2ZpbGVVcGRhdGVTdGF0dXNBY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSwge3Jlc3BvbnNlVHlwZSA6ICdvJywgcmVzcG9uc2VTdWJUeXBlIDogJ0thbHR1cmFEaXN0cmlidXRpb25Qcm9maWxlJywgcmVzcG9uc2VDb25zdHJ1Y3RvciA6IEthbHR1cmFEaXN0cmlidXRpb25Qcm9maWxlICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VydmljZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdjb250ZW50ZGlzdHJpYnV0aW9uX2Rpc3RyaWJ1dGlvbnByb2ZpbGUnIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICd1cGRhdGVTdGF0dXMnIH0sXG5cdFx0XHRcdGlkIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHN0YXR1cyA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFEaXN0cmlidXRpb25Qcm9maWxlU3RhdHVzLCBzdWJUeXBlIDogJ0thbHR1cmFEaXN0cmlidXRpb25Qcm9maWxlU3RhdHVzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=