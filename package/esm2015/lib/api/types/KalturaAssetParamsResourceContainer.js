/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaContentResource } from './KalturaContentResource';
import { KalturaResource } from './KalturaResource';
/**
 * @record
 */
export function KalturaAssetParamsResourceContainerArgs() { }
/** @type {?|undefined} */
KalturaAssetParamsResourceContainerArgs.prototype.resource;
/** @type {?|undefined} */
KalturaAssetParamsResourceContainerArgs.prototype.assetParamsId;
export class KalturaAssetParamsResourceContainer extends KalturaResource {
    /**
     * @param {?=} data
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
            objectType: { type: 'c', default: 'KalturaAssetParamsResourceContainer' },
            resource: { type: 'o', subTypeConstructor: KalturaContentResource, subType: 'KalturaContentResource' },
            assetParamsId: { type: 'n' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaAssetParamsResourceContainer.prototype.resource;
    /** @type {?} */
    KalturaAssetParamsResourceContainer.prototype.assetParamsId;
}
typesMappingStorage['KalturaAssetParamsResourceContainer'] = KalturaAssetParamsResourceContainer;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUFzc2V0UGFyYW1zUmVzb3VyY2VDb250YWluZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFBc3NldFBhcmFtc1Jlc291cmNlQ29udGFpbmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGVBQWUsRUFBdUIsTUFBTSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7O0FBUXpFLE1BQU0sMENBQTJDLFNBQVEsZUFBZTs7OztJQUtwRSxZQUFZLElBQStDO1FBRXZELEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxxQ0FBcUMsRUFBRTtZQUN4RixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLHNCQUFzQixFQUFFLE9BQU8sRUFBRyx3QkFBd0IsRUFBRTtZQUMxRyxhQUFhLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ3JCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjs7Ozs7OztBQUVELG1CQUFtQixDQUFDLHFDQUFxQyxDQUFDLEdBQUcsbUNBQW1DLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUNvbnRlbnRSZXNvdXJjZSB9IGZyb20gJy4vS2FsdHVyYUNvbnRlbnRSZXNvdXJjZSc7XG5pbXBvcnQgeyBLYWx0dXJhUmVzb3VyY2UsIEthbHR1cmFSZXNvdXJjZUFyZ3MgfSBmcm9tICcuL0thbHR1cmFSZXNvdXJjZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUFzc2V0UGFyYW1zUmVzb3VyY2VDb250YWluZXJBcmdzICBleHRlbmRzIEthbHR1cmFSZXNvdXJjZUFyZ3Mge1xuICAgIHJlc291cmNlPyA6IEthbHR1cmFDb250ZW50UmVzb3VyY2U7XG5cdGFzc2V0UGFyYW1zSWQ/IDogbnVtYmVyO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhQXNzZXRQYXJhbXNSZXNvdXJjZUNvbnRhaW5lciBleHRlbmRzIEthbHR1cmFSZXNvdXJjZSB7XG5cbiAgICByZXNvdXJjZSA6IEthbHR1cmFDb250ZW50UmVzb3VyY2U7XG5cdGFzc2V0UGFyYW1zSWQgOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFBc3NldFBhcmFtc1Jlc291cmNlQ29udGFpbmVyQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFBc3NldFBhcmFtc1Jlc291cmNlQ29udGFpbmVyJyB9LFxuXHRcdFx0XHRyZXNvdXJjZSA6IHsgdHlwZSA6ICdvJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUNvbnRlbnRSZXNvdXJjZSwgc3ViVHlwZSA6ICdLYWx0dXJhQ29udGVudFJlc291cmNlJyB9LFxuXHRcdFx0XHRhc3NldFBhcmFtc0lkIDogeyB0eXBlIDogJ24nIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFBc3NldFBhcmFtc1Jlc291cmNlQ29udGFpbmVyJ10gPSBLYWx0dXJhQXNzZXRQYXJhbXNSZXNvdXJjZUNvbnRhaW5lcjsiXX0=