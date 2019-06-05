/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaDrmProviderType } from './KalturaDrmProviderType';
import { KalturaDrmPolicyStatus } from './KalturaDrmPolicyStatus';
import { KalturaDrmLicenseScenario } from './KalturaDrmLicenseScenario';
import { KalturaFilter } from './KalturaFilter';
/**
 * @record
 */
export function KalturaDrmPolicyBaseFilterArgs() { }
/** @type {?|undefined} */
KalturaDrmPolicyBaseFilterArgs.prototype.partnerIdEqual;
/** @type {?|undefined} */
KalturaDrmPolicyBaseFilterArgs.prototype.partnerIdIn;
/** @type {?|undefined} */
KalturaDrmPolicyBaseFilterArgs.prototype.nameLike;
/** @type {?|undefined} */
KalturaDrmPolicyBaseFilterArgs.prototype.systemNameLike;
/** @type {?|undefined} */
KalturaDrmPolicyBaseFilterArgs.prototype.providerEqual;
/** @type {?|undefined} */
KalturaDrmPolicyBaseFilterArgs.prototype.providerIn;
/** @type {?|undefined} */
KalturaDrmPolicyBaseFilterArgs.prototype.statusEqual;
/** @type {?|undefined} */
KalturaDrmPolicyBaseFilterArgs.prototype.statusIn;
/** @type {?|undefined} */
KalturaDrmPolicyBaseFilterArgs.prototype.scenarioEqual;
/** @type {?|undefined} */
KalturaDrmPolicyBaseFilterArgs.prototype.scenarioIn;
export class KalturaDrmPolicyBaseFilter extends KalturaFilter {
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
            objectType: { type: 'c', default: 'KalturaDrmPolicyBaseFilter' },
            partnerIdEqual: { type: 'n' },
            partnerIdIn: { type: 's' },
            nameLike: { type: 's' },
            systemNameLike: { type: 's' },
            providerEqual: { type: 'es', subTypeConstructor: KalturaDrmProviderType, subType: 'KalturaDrmProviderType' },
            providerIn: { type: 's' },
            statusEqual: { type: 'en', subTypeConstructor: KalturaDrmPolicyStatus, subType: 'KalturaDrmPolicyStatus' },
            statusIn: { type: 's' },
            scenarioEqual: { type: 'es', subTypeConstructor: KalturaDrmLicenseScenario, subType: 'KalturaDrmLicenseScenario' },
            scenarioIn: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaDrmPolicyBaseFilter.prototype.partnerIdEqual;
    /** @type {?} */
    KalturaDrmPolicyBaseFilter.prototype.partnerIdIn;
    /** @type {?} */
    KalturaDrmPolicyBaseFilter.prototype.nameLike;
    /** @type {?} */
    KalturaDrmPolicyBaseFilter.prototype.systemNameLike;
    /** @type {?} */
    KalturaDrmPolicyBaseFilter.prototype.providerEqual;
    /** @type {?} */
    KalturaDrmPolicyBaseFilter.prototype.providerIn;
    /** @type {?} */
    KalturaDrmPolicyBaseFilter.prototype.statusEqual;
    /** @type {?} */
    KalturaDrmPolicyBaseFilter.prototype.statusIn;
    /** @type {?} */
    KalturaDrmPolicyBaseFilter.prototype.scenarioEqual;
    /** @type {?} */
    KalturaDrmPolicyBaseFilter.prototype.scenarioIn;
}
typesMappingStorage['KalturaDrmPolicyBaseFilter'] = KalturaDrmPolicyBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYURybVBvbGljeUJhc2VGaWx0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFEcm1Qb2xpY3lCYXNlRmlsdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDbEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDbEUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDeEUsT0FBTyxFQUFFLGFBQWEsRUFBcUIsTUFBTSxpQkFBaUIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdCbkUsTUFBTSxpQ0FBa0MsU0FBUSxhQUFhOzs7O0lBYXpELFlBQVksSUFBc0M7UUFFOUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLDRCQUE0QixFQUFFO1lBQy9FLGNBQWMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDL0IsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1QixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLGNBQWMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDL0IsYUFBYSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxzQkFBc0IsRUFBRSxPQUFPLEVBQUcsd0JBQXdCLEVBQUU7WUFDaEgsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMzQixXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHNCQUFzQixFQUFFLE9BQU8sRUFBRyx3QkFBd0IsRUFBRTtZQUM5RyxRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLGFBQWEsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcseUJBQXlCLEVBQUUsT0FBTyxFQUFHLDJCQUEyQixFQUFFO1lBQ3RILFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDbEIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLDRCQUE0QixDQUFDLEdBQUcsMEJBQTBCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYURybVByb3ZpZGVyVHlwZSB9IGZyb20gJy4vS2FsdHVyYURybVByb3ZpZGVyVHlwZSc7XG5pbXBvcnQgeyBLYWx0dXJhRHJtUG9saWN5U3RhdHVzIH0gZnJvbSAnLi9LYWx0dXJhRHJtUG9saWN5U3RhdHVzJztcbmltcG9ydCB7IEthbHR1cmFEcm1MaWNlbnNlU2NlbmFyaW8gfSBmcm9tICcuL0thbHR1cmFEcm1MaWNlbnNlU2NlbmFyaW8nO1xuaW1wb3J0IHsgS2FsdHVyYUZpbHRlciwgS2FsdHVyYUZpbHRlckFyZ3MgfSBmcm9tICcuL0thbHR1cmFGaWx0ZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFEcm1Qb2xpY3lCYXNlRmlsdGVyQXJncyAgZXh0ZW5kcyBLYWx0dXJhRmlsdGVyQXJncyB7XG4gICAgcGFydG5lcklkRXF1YWw/IDogbnVtYmVyO1xuXHRwYXJ0bmVySWRJbj8gOiBzdHJpbmc7XG5cdG5hbWVMaWtlPyA6IHN0cmluZztcblx0c3lzdGVtTmFtZUxpa2U/IDogc3RyaW5nO1xuXHRwcm92aWRlckVxdWFsPyA6IEthbHR1cmFEcm1Qcm92aWRlclR5cGU7XG5cdHByb3ZpZGVySW4/IDogc3RyaW5nO1xuXHRzdGF0dXNFcXVhbD8gOiBLYWx0dXJhRHJtUG9saWN5U3RhdHVzO1xuXHRzdGF0dXNJbj8gOiBzdHJpbmc7XG5cdHNjZW5hcmlvRXF1YWw/IDogS2FsdHVyYURybUxpY2Vuc2VTY2VuYXJpbztcblx0c2NlbmFyaW9Jbj8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFEcm1Qb2xpY3lCYXNlRmlsdGVyIGV4dGVuZHMgS2FsdHVyYUZpbHRlciB7XG5cbiAgICBwYXJ0bmVySWRFcXVhbCA6IG51bWJlcjtcblx0cGFydG5lcklkSW4gOiBzdHJpbmc7XG5cdG5hbWVMaWtlIDogc3RyaW5nO1xuXHRzeXN0ZW1OYW1lTGlrZSA6IHN0cmluZztcblx0cHJvdmlkZXJFcXVhbCA6IEthbHR1cmFEcm1Qcm92aWRlclR5cGU7XG5cdHByb3ZpZGVySW4gOiBzdHJpbmc7XG5cdHN0YXR1c0VxdWFsIDogS2FsdHVyYURybVBvbGljeVN0YXR1cztcblx0c3RhdHVzSW4gOiBzdHJpbmc7XG5cdHNjZW5hcmlvRXF1YWwgOiBLYWx0dXJhRHJtTGljZW5zZVNjZW5hcmlvO1xuXHRzY2VuYXJpb0luIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhRHJtUG9saWN5QmFzZUZpbHRlckFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhRHJtUG9saWN5QmFzZUZpbHRlcicgfSxcblx0XHRcdFx0cGFydG5lcklkRXF1YWwgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0cGFydG5lcklkSW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0bmFtZUxpa2UgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c3lzdGVtTmFtZUxpa2UgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cHJvdmlkZXJFcXVhbCA6IHsgdHlwZSA6ICdlcycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFEcm1Qcm92aWRlclR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYURybVByb3ZpZGVyVHlwZScgfSxcblx0XHRcdFx0cHJvdmlkZXJJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzdGF0dXNFcXVhbCA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFEcm1Qb2xpY3lTdGF0dXMsIHN1YlR5cGUgOiAnS2FsdHVyYURybVBvbGljeVN0YXR1cycgfSxcblx0XHRcdFx0c3RhdHVzSW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c2NlbmFyaW9FcXVhbCA6IHsgdHlwZSA6ICdlcycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFEcm1MaWNlbnNlU2NlbmFyaW8sIHN1YlR5cGUgOiAnS2FsdHVyYURybUxpY2Vuc2VTY2VuYXJpbycgfSxcblx0XHRcdFx0c2NlbmFyaW9JbiA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhRHJtUG9saWN5QmFzZUZpbHRlciddID0gS2FsdHVyYURybVBvbGljeUJhc2VGaWx0ZXI7Il19