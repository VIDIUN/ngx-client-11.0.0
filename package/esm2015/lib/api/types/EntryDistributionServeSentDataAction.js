/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { KalturaDistributionAction } from './KalturaDistributionAction';
import { KalturaFileRequest } from '../kaltura-file-request';
/**
 * @record
 */
export function EntryDistributionServeSentDataActionArgs() { }
/** @type {?} */
EntryDistributionServeSentDataActionArgs.prototype.id;
/** @type {?} */
EntryDistributionServeSentDataActionArgs.prototype.actionType;
/**
 * Build request payload for service 'entryDistribution' action 'serveSentData'.
 *
 * Usage: Serves entry distribution sent data
 *
 * Server response type:         { url: string }
 * Server failure response type: KalturaAPIException
 */
export class EntryDistributionServeSentDataAction extends KalturaFileRequest {
    /**
     * @param {?} data
     */
    constructor(data) {
        super(data);
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            service: { type: 'c', default: 'contentdistribution_entrydistribution' },
            action: { type: 'c', default: 'serveSentData' },
            id: { type: 'n' },
            actionType: { type: 'en', subTypeConstructor: KalturaDistributionAction, subType: 'KalturaDistributionAction' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    EntryDistributionServeSentDataAction.prototype.id;
    /** @type {?} */
    EntryDistributionServeSentDataAction.prototype.actionType;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW50cnlEaXN0cmlidXRpb25TZXJ2ZVNlbnREYXRhQWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9FbnRyeURpc3RyaWJ1dGlvblNlcnZlU2VudERhdGFBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUlBLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxrQkFBa0IsRUFBMEIsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlckYsTUFBTSwyQ0FBNEMsU0FBUSxrQkFBa0I7Ozs7SUFLeEUsWUFBWSxJQUErQztRQUV2RCxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDZjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsdUNBQXVDLEVBQUU7WUFDdkYsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsZUFBZSxFQUFFO1lBQ2xELEVBQUUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDbkIsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyx5QkFBeUIsRUFBRSxPQUFPLEVBQUcsMkJBQTJCLEVBQUU7U0FDMUcsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcblxuXG5pbXBvcnQgeyBLYWx0dXJhRGlzdHJpYnV0aW9uQWN0aW9uIH0gZnJvbSAnLi9LYWx0dXJhRGlzdHJpYnV0aW9uQWN0aW9uJztcbmltcG9ydCB7IEthbHR1cmFGaWxlUmVxdWVzdCwgS2FsdHVyYUZpbGVSZXF1ZXN0QXJncyB9IGZyb20gJy4uL2thbHR1cmEtZmlsZS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBFbnRyeURpc3RyaWJ1dGlvblNlcnZlU2VudERhdGFBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFGaWxlUmVxdWVzdEFyZ3Mge1xuICAgIGlkIDogbnVtYmVyO1xuXHRhY3Rpb25UeXBlIDogS2FsdHVyYURpc3RyaWJ1dGlvbkFjdGlvbjtcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ2VudHJ5RGlzdHJpYnV0aW9uJyBhY3Rpb24gJ3NlcnZlU2VudERhdGEnLlxuICpcbiAqIFVzYWdlOiBTZXJ2ZXMgZW50cnkgZGlzdHJpYnV0aW9uIHNlbnQgZGF0YVxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIHsgdXJsOiBzdHJpbmcgfVxuICogU2VydmVyIGZhaWx1cmUgcmVzcG9uc2UgdHlwZTogS2FsdHVyYUFQSUV4Y2VwdGlvblxuICovXG5leHBvcnQgY2xhc3MgRW50cnlEaXN0cmlidXRpb25TZXJ2ZVNlbnREYXRhQWN0aW9uIGV4dGVuZHMgS2FsdHVyYUZpbGVSZXF1ZXN0IHtcblxuICAgIGlkIDogbnVtYmVyO1xuXHRhY3Rpb25UeXBlIDogS2FsdHVyYURpc3RyaWJ1dGlvbkFjdGlvbjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBFbnRyeURpc3RyaWJ1dGlvblNlcnZlU2VudERhdGFBY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnY29udGVudGRpc3RyaWJ1dGlvbl9lbnRyeWRpc3RyaWJ1dGlvbicgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ3NlcnZlU2VudERhdGEnIH0sXG5cdFx0XHRcdGlkIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGFjdGlvblR5cGUgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRGlzdHJpYnV0aW9uQWN0aW9uLCBzdWJUeXBlIDogJ0thbHR1cmFEaXN0cmlidXRpb25BY3Rpb24nIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==