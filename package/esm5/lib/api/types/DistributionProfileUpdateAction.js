/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaDistributionProfile } from './KalturaDistributionProfile';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function DistributionProfileUpdateActionArgs() { }
/** @type {?} */
DistributionProfileUpdateActionArgs.prototype.id;
/** @type {?} */
DistributionProfileUpdateActionArgs.prototype.distributionProfile;
/**
 * Build request payload for service 'distributionProfile' action 'update'.
 *
 * Usage: Update Distribution Profile by id
 *
 * Server response type:         KalturaDistributionProfile
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'distributionProfile' action 'update'.
 *
 * Usage: Update Distribution Profile by id
 *
 * Server response type:         KalturaDistributionProfile
 * Server failure response type: KalturaAPIException
 */
DistributionProfileUpdateAction = /** @class */ (function (_super) {
    tslib_1.__extends(DistributionProfileUpdateAction, _super);
    function DistributionProfileUpdateAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaDistributionProfile', responseConstructor: KalturaDistributionProfile }) || this;
    }
    /**
     * @return {?}
     */
    DistributionProfileUpdateAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'contentdistribution_distributionprofile' },
            action: { type: 'c', default: 'update' },
            id: { type: 'n' },
            distributionProfile: { type: 'o', subTypeConstructor: KalturaDistributionProfile, subType: 'KalturaDistributionProfile' }
        });
        return result;
    };
    return DistributionProfileUpdateAction;
}(KalturaRequest));
/**
 * Build request payload for service 'distributionProfile' action 'update'.
 *
 * Usage: Update Distribution Profile by id
 *
 * Server response type:         KalturaDistributionProfile
 * Server failure response type: KalturaAPIException
 */
export { DistributionProfileUpdateAction };
if (false) {
    /** @type {?} */
    DistributionProfileUpdateAction.prototype.id;
    /** @type {?} */
    DistributionProfileUpdateAction.prototype.distributionProfile;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGlzdHJpYnV0aW9uUHJvZmlsZVVwZGF0ZUFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvRGlzdHJpYnV0aW9uUHJvZmlsZVVwZGF0ZUFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRTFFLE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZXhFOzs7Ozs7OztBQUFBO0lBQXFELDJEQUEwQztJQUszRix5Q0FBWSxJQUEwQztlQUVsRCxrQkFBTSxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRyw0QkFBNEIsRUFBRSxtQkFBbUIsRUFBRywwQkFBMEIsRUFBRyxDQUFDO0tBQ3hJOzs7O0lBRVMsc0RBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcseUNBQXlDLEVBQUU7WUFDekYsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsUUFBUSxFQUFFO1lBQzNDLEVBQUUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDbkIsbUJBQW1CLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLDBCQUEwQixFQUFFLE9BQU8sRUFBRyw0QkFBNEIsRUFBRTtTQUNwSCxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCOzBDQTFDTDtFQW1CcUQsY0FBYyxFQXdCbEUsQ0FBQTs7Ozs7Ozs7O0FBeEJELDJDQXdCQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhRGlzdHJpYnV0aW9uUHJvZmlsZSB9IGZyb20gJy4vS2FsdHVyYURpc3RyaWJ1dGlvblByb2ZpbGUnO1xuXG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBEaXN0cmlidXRpb25Qcm9maWxlVXBkYXRlQWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdEFyZ3Mge1xuICAgIGlkIDogbnVtYmVyO1xuXHRkaXN0cmlidXRpb25Qcm9maWxlIDogS2FsdHVyYURpc3RyaWJ1dGlvblByb2ZpbGU7XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICdkaXN0cmlidXRpb25Qcm9maWxlJyBhY3Rpb24gJ3VwZGF0ZScuXG4gKlxuICogVXNhZ2U6IFVwZGF0ZSBEaXN0cmlidXRpb24gUHJvZmlsZSBieSBpZFxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIEthbHR1cmFEaXN0cmlidXRpb25Qcm9maWxlXG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBEaXN0cmlidXRpb25Qcm9maWxlVXBkYXRlQWN0aW9uIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3Q8S2FsdHVyYURpc3RyaWJ1dGlvblByb2ZpbGU+IHtcblxuICAgIGlkIDogbnVtYmVyO1xuXHRkaXN0cmlidXRpb25Qcm9maWxlIDogS2FsdHVyYURpc3RyaWJ1dGlvblByb2ZpbGU7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogRGlzdHJpYnV0aW9uUHJvZmlsZVVwZGF0ZUFjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ28nLCByZXNwb25zZVN1YlR5cGUgOiAnS2FsdHVyYURpc3RyaWJ1dGlvblByb2ZpbGUnLCByZXNwb25zZUNvbnN0cnVjdG9yIDogS2FsdHVyYURpc3RyaWJ1dGlvblByb2ZpbGUgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2NvbnRlbnRkaXN0cmlidXRpb25fZGlzdHJpYnV0aW9ucHJvZmlsZScgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ3VwZGF0ZScgfSxcblx0XHRcdFx0aWQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0ZGlzdHJpYnV0aW9uUHJvZmlsZSA6IHsgdHlwZSA6ICdvJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYURpc3RyaWJ1dGlvblByb2ZpbGUsIHN1YlR5cGUgOiAnS2FsdHVyYURpc3RyaWJ1dGlvblByb2ZpbGUnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==