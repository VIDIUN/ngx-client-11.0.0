/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { KalturaIntegrationJobData } from './KalturaIntegrationJobData';
import { KalturaBatchJobObjectType } from './KalturaBatchJobObjectType';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function IntegrationDispatchActionArgs() { }
/** @type {?} */
IntegrationDispatchActionArgs.prototype.data;
/** @type {?} */
IntegrationDispatchActionArgs.prototype.objectType;
/** @type {?} */
IntegrationDispatchActionArgs.prototype.objectId;
/**
 * Build request payload for service 'integration' action 'dispatch'.
 *
 * Usage: Dispatch integration task
 *
 * Server response type:         number
 * Server failure response type: KalturaAPIException
 */
export class IntegrationDispatchAction extends KalturaRequest {
    /**
     * @param {?} data
     */
    constructor(data) {
        super(data, { responseType: 'n', responseSubType: '', responseConstructor: null });
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            service: { type: 'c', default: 'integration_integration' },
            action: { type: 'c', default: 'dispatch' },
            data: { type: 'o', subTypeConstructor: KalturaIntegrationJobData, subType: 'KalturaIntegrationJobData' },
            objectType: { type: 'es', subTypeConstructor: KalturaBatchJobObjectType, subType: 'KalturaBatchJobObjectType' },
            objectId: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    IntegrationDispatchAction.prototype.data;
    /** @type {?} */
    IntegrationDispatchAction.prototype.objectType;
    /** @type {?} */
    IntegrationDispatchAction.prototype.objectId;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW50ZWdyYXRpb25EaXNwYXRjaEFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvSW50ZWdyYXRpb25EaXNwYXRjaEFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBSUEsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDeEUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDeEUsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdCeEUsTUFBTSxnQ0FBaUMsU0FBUSxjQUFzQjs7OztJQU1qRSxZQUFZLElBQW9DO1FBRTVDLEtBQUssQ0FBQyxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRyxFQUFFLEVBQUUsbUJBQW1CLEVBQUcsSUFBSSxFQUFFLENBQUMsQ0FBQztLQUN4Rjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcseUJBQXlCLEVBQUU7WUFDekUsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsVUFBVSxFQUFFO1lBQzdDLElBQUksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcseUJBQXlCLEVBQUUsT0FBTyxFQUFHLDJCQUEyQixFQUFFO1lBQzVHLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcseUJBQXlCLEVBQUUsT0FBTyxFQUFHLDJCQUEyQixFQUFFO1lBQ25ILFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDaEIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcblxuXG5pbXBvcnQgeyBLYWx0dXJhSW50ZWdyYXRpb25Kb2JEYXRhIH0gZnJvbSAnLi9LYWx0dXJhSW50ZWdyYXRpb25Kb2JEYXRhJztcbmltcG9ydCB7IEthbHR1cmFCYXRjaEpvYk9iamVjdFR5cGUgfSBmcm9tICcuL0thbHR1cmFCYXRjaEpvYk9iamVjdFR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYVJlcXVlc3QsIEthbHR1cmFSZXF1ZXN0QXJncyB9IGZyb20gJy4uL2thbHR1cmEtcmVxdWVzdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSW50ZWdyYXRpb25EaXNwYXRjaEFjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3RBcmdzIHtcbiAgICBkYXRhIDogS2FsdHVyYUludGVncmF0aW9uSm9iRGF0YTtcblx0b2JqZWN0VHlwZSA6IEthbHR1cmFCYXRjaEpvYk9iamVjdFR5cGU7XG5cdG9iamVjdElkIDogc3RyaW5nO1xufVxuXG4vKipcbiAqIEJ1aWxkIHJlcXVlc3QgcGF5bG9hZCBmb3Igc2VydmljZSAnaW50ZWdyYXRpb24nIGFjdGlvbiAnZGlzcGF0Y2gnLlxuICpcbiAqIFVzYWdlOiBEaXNwYXRjaCBpbnRlZ3JhdGlvbiB0YXNrXG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgbnVtYmVyXG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBJbnRlZ3JhdGlvbkRpc3BhdGNoQWN0aW9uIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3Q8bnVtYmVyPiB7XG5cbiAgICBkYXRhIDogS2FsdHVyYUludGVncmF0aW9uSm9iRGF0YTtcblx0b2JqZWN0VHlwZSA6IEthbHR1cmFCYXRjaEpvYk9iamVjdFR5cGU7XG5cdG9iamVjdElkIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YSA6IEludGVncmF0aW9uRGlzcGF0Y2hBY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSwge3Jlc3BvbnNlVHlwZSA6ICduJywgcmVzcG9uc2VTdWJUeXBlIDogJycsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBudWxsIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2ludGVncmF0aW9uX2ludGVncmF0aW9uJyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnZGlzcGF0Y2gnIH0sXG5cdFx0XHRcdGRhdGEgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFJbnRlZ3JhdGlvbkpvYkRhdGEsIHN1YlR5cGUgOiAnS2FsdHVyYUludGVncmF0aW9uSm9iRGF0YScgfSxcblx0XHRcdFx0b2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdlcycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFCYXRjaEpvYk9iamVjdFR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYUJhdGNoSm9iT2JqZWN0VHlwZScgfSxcblx0XHRcdFx0b2JqZWN0SWQgOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuIl19