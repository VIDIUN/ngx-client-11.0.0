/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
export class DistributionProfileUpdateStatusAction extends KalturaRequest {
    /**
     * @param {?} data
     */
    constructor(data) {
        super(data, { responseType: 'o', responseSubType: 'KalturaDistributionProfile', responseConstructor: KalturaDistributionProfile });
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            service: { type: 'c', default: 'contentdistribution_distributionprofile' },
            action: { type: 'c', default: 'updateStatus' },
            id: { type: 'n' },
            status: { type: 'en', subTypeConstructor: KalturaDistributionProfileStatus, subType: 'KalturaDistributionProfileStatus' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    DistributionProfileUpdateStatusAction.prototype.id;
    /** @type {?} */
    DistributionProfileUpdateStatusAction.prototype.status;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGlzdHJpYnV0aW9uUHJvZmlsZVVwZGF0ZVN0YXR1c0FjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvRGlzdHJpYnV0aW9uUHJvZmlsZVVwZGF0ZVN0YXR1c0FjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFFMUUsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDdEYsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFleEUsTUFBTSw0Q0FBNkMsU0FBUSxjQUEwQzs7OztJQUtqRyxZQUFZLElBQWdEO1FBRXhELEtBQUssQ0FBQyxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRyw0QkFBNEIsRUFBRSxtQkFBbUIsRUFBRywwQkFBMEIsRUFBRyxDQUFDLENBQUM7S0FDekk7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHlDQUF5QyxFQUFFO1lBQ3pGLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGNBQWMsRUFBRTtZQUNqRCxFQUFFLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ25CLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsZ0NBQWdDLEVBQUUsT0FBTyxFQUFHLGtDQUFrQyxFQUFFO1NBQ3BILENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSiIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhRGlzdHJpYnV0aW9uUHJvZmlsZSB9IGZyb20gJy4vS2FsdHVyYURpc3RyaWJ1dGlvblByb2ZpbGUnO1xuXG5pbXBvcnQgeyBLYWx0dXJhRGlzdHJpYnV0aW9uUHJvZmlsZVN0YXR1cyB9IGZyb20gJy4vS2FsdHVyYURpc3RyaWJ1dGlvblByb2ZpbGVTdGF0dXMnO1xuaW1wb3J0IHsgS2FsdHVyYVJlcXVlc3QsIEthbHR1cmFSZXF1ZXN0QXJncyB9IGZyb20gJy4uL2thbHR1cmEtcmVxdWVzdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGlzdHJpYnV0aW9uUHJvZmlsZVVwZGF0ZVN0YXR1c0FjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3RBcmdzIHtcbiAgICBpZCA6IG51bWJlcjtcblx0c3RhdHVzIDogS2FsdHVyYURpc3RyaWJ1dGlvblByb2ZpbGVTdGF0dXM7XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICdkaXN0cmlidXRpb25Qcm9maWxlJyBhY3Rpb24gJ3VwZGF0ZVN0YXR1cycuXG4gKlxuICogVXNhZ2U6IFVwZGF0ZSBEaXN0cmlidXRpb24gUHJvZmlsZSBzdGF0dXMgYnkgaWRcbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICBLYWx0dXJhRGlzdHJpYnV0aW9uUHJvZmlsZVxuICogU2VydmVyIGZhaWx1cmUgcmVzcG9uc2UgdHlwZTogS2FsdHVyYUFQSUV4Y2VwdGlvblxuICovXG5leHBvcnQgY2xhc3MgRGlzdHJpYnV0aW9uUHJvZmlsZVVwZGF0ZVN0YXR1c0FjdGlvbiBleHRlbmRzIEthbHR1cmFSZXF1ZXN0PEthbHR1cmFEaXN0cmlidXRpb25Qcm9maWxlPiB7XG5cbiAgICBpZCA6IG51bWJlcjtcblx0c3RhdHVzIDogS2FsdHVyYURpc3RyaWJ1dGlvblByb2ZpbGVTdGF0dXM7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogRGlzdHJpYnV0aW9uUHJvZmlsZVVwZGF0ZVN0YXR1c0FjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ28nLCByZXNwb25zZVN1YlR5cGUgOiAnS2FsdHVyYURpc3RyaWJ1dGlvblByb2ZpbGUnLCByZXNwb25zZUNvbnN0cnVjdG9yIDogS2FsdHVyYURpc3RyaWJ1dGlvblByb2ZpbGUgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2NvbnRlbnRkaXN0cmlidXRpb25fZGlzdHJpYnV0aW9ucHJvZmlsZScgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ3VwZGF0ZVN0YXR1cycgfSxcblx0XHRcdFx0aWQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0c3RhdHVzIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYURpc3RyaWJ1dGlvblByb2ZpbGVTdGF0dXMsIHN1YlR5cGUgOiAnS2FsdHVyYURpc3RyaWJ1dGlvblByb2ZpbGVTdGF0dXMnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==