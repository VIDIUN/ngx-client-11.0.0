/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { KalturaVirusScanProfile } from './KalturaVirusScanProfile';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function VirusScanProfileUpdateActionArgs() { }
/** @type {?} */
VirusScanProfileUpdateActionArgs.prototype.virusScanProfileId;
/** @type {?} */
VirusScanProfileUpdateActionArgs.prototype.virusScanProfile;
/**
 * Build request payload for service 'virusScanProfile' action 'update'.
 *
 * Usage: Update exisitng virus scan profile, it is possible to update the virus scan profile id too
 *
 * Server response type:         KalturaVirusScanProfile
 * Server failure response type: KalturaAPIException
 */
export class VirusScanProfileUpdateAction extends KalturaRequest {
    /**
     * @param {?} data
     */
    constructor(data) {
        super(data, { responseType: 'o', responseSubType: 'KalturaVirusScanProfile', responseConstructor: KalturaVirusScanProfile });
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            service: { type: 'c', default: 'virusscan_virusscanprofile' },
            action: { type: 'c', default: 'update' },
            virusScanProfileId: { type: 'n' },
            virusScanProfile: { type: 'o', subTypeConstructor: KalturaVirusScanProfile, subType: 'KalturaVirusScanProfile' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    VirusScanProfileUpdateAction.prototype.virusScanProfileId;
    /** @type {?} */
    VirusScanProfileUpdateAction.prototype.virusScanProfile;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmlydXNTY2FuUHJvZmlsZVVwZGF0ZUFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvVmlydXNTY2FuUHJvZmlsZVVwZGF0ZUFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFcEUsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFleEUsTUFBTSxtQ0FBb0MsU0FBUSxjQUF1Qzs7OztJQUtyRixZQUFZLElBQXVDO1FBRS9DLEtBQUssQ0FBQyxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRyx5QkFBeUIsRUFBRSxtQkFBbUIsRUFBRyx1QkFBdUIsRUFBRyxDQUFDLENBQUM7S0FDbkk7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLDRCQUE0QixFQUFFO1lBQzVFLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLFFBQVEsRUFBRTtZQUMzQyxrQkFBa0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDbkMsZ0JBQWdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLHVCQUF1QixFQUFFLE9BQU8sRUFBRyx5QkFBeUIsRUFBRTtTQUMzRyxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVZpcnVzU2NhblByb2ZpbGUgfSBmcm9tICcuL0thbHR1cmFWaXJ1c1NjYW5Qcm9maWxlJztcblxuaW1wb3J0IHsgS2FsdHVyYVJlcXVlc3QsIEthbHR1cmFSZXF1ZXN0QXJncyB9IGZyb20gJy4uL2thbHR1cmEtcmVxdWVzdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVmlydXNTY2FuUHJvZmlsZVVwZGF0ZUFjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3RBcmdzIHtcbiAgICB2aXJ1c1NjYW5Qcm9maWxlSWQgOiBudW1iZXI7XG5cdHZpcnVzU2NhblByb2ZpbGUgOiBLYWx0dXJhVmlydXNTY2FuUHJvZmlsZTtcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ3ZpcnVzU2NhblByb2ZpbGUnIGFjdGlvbiAndXBkYXRlJy5cbiAqXG4gKiBVc2FnZTogVXBkYXRlIGV4aXNpdG5nIHZpcnVzIHNjYW4gcHJvZmlsZSwgaXQgaXMgcG9zc2libGUgdG8gdXBkYXRlIHRoZSB2aXJ1cyBzY2FuIHByb2ZpbGUgaWQgdG9vXG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgS2FsdHVyYVZpcnVzU2NhblByb2ZpbGVcbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIFZpcnVzU2NhblByb2ZpbGVVcGRhdGVBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdDxLYWx0dXJhVmlydXNTY2FuUHJvZmlsZT4ge1xuXG4gICAgdmlydXNTY2FuUHJvZmlsZUlkIDogbnVtYmVyO1xuXHR2aXJ1c1NjYW5Qcm9maWxlIDogS2FsdHVyYVZpcnVzU2NhblByb2ZpbGU7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogVmlydXNTY2FuUHJvZmlsZVVwZGF0ZUFjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ28nLCByZXNwb25zZVN1YlR5cGUgOiAnS2FsdHVyYVZpcnVzU2NhblByb2ZpbGUnLCByZXNwb25zZUNvbnN0cnVjdG9yIDogS2FsdHVyYVZpcnVzU2NhblByb2ZpbGUgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ3ZpcnVzc2Nhbl92aXJ1c3NjYW5wcm9maWxlJyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAndXBkYXRlJyB9LFxuXHRcdFx0XHR2aXJ1c1NjYW5Qcm9maWxlSWQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0dmlydXNTY2FuUHJvZmlsZSA6IHsgdHlwZSA6ICdvJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVZpcnVzU2NhblByb2ZpbGUsIHN1YlR5cGUgOiAnS2FsdHVyYVZpcnVzU2NhblByb2ZpbGUnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==