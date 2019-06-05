/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaDrmProviderType } from './KalturaDrmProviderType';
import { KalturaDrmProfileStatus } from './KalturaDrmProfileStatus';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaDrmProfileArgs() { }
/** @type {?|undefined} */
KalturaDrmProfileArgs.prototype.partnerId;
/** @type {?|undefined} */
KalturaDrmProfileArgs.prototype.name;
/** @type {?|undefined} */
KalturaDrmProfileArgs.prototype.description;
/** @type {?|undefined} */
KalturaDrmProfileArgs.prototype.provider;
/** @type {?|undefined} */
KalturaDrmProfileArgs.prototype.status;
/** @type {?|undefined} */
KalturaDrmProfileArgs.prototype.licenseServerUrl;
/** @type {?|undefined} */
KalturaDrmProfileArgs.prototype.defaultPolicy;
/** @type {?|undefined} */
KalturaDrmProfileArgs.prototype.signingKey;
export class KalturaDrmProfile extends KalturaObjectBase {
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
            objectType: { type: 'c', default: 'KalturaDrmProfile' },
            id: { type: 'n', readOnly: true },
            partnerId: { type: 'n' },
            name: { type: 's' },
            description: { type: 's' },
            provider: { type: 'es', subTypeConstructor: KalturaDrmProviderType, subType: 'KalturaDrmProviderType' },
            status: { type: 'en', subTypeConstructor: KalturaDrmProfileStatus, subType: 'KalturaDrmProfileStatus' },
            licenseServerUrl: { type: 's' },
            defaultPolicy: { type: 's' },
            createdAt: { type: 'n', readOnly: true },
            updatedAt: { type: 'n', readOnly: true },
            signingKey: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaDrmProfile.prototype.id;
    /** @type {?} */
    KalturaDrmProfile.prototype.partnerId;
    /** @type {?} */
    KalturaDrmProfile.prototype.name;
    /** @type {?} */
    KalturaDrmProfile.prototype.description;
    /** @type {?} */
    KalturaDrmProfile.prototype.provider;
    /** @type {?} */
    KalturaDrmProfile.prototype.status;
    /** @type {?} */
    KalturaDrmProfile.prototype.licenseServerUrl;
    /** @type {?} */
    KalturaDrmProfile.prototype.defaultPolicy;
    /** @type {?} */
    KalturaDrmProfile.prototype.createdAt;
    /** @type {?} */
    KalturaDrmProfile.prototype.updatedAt;
    /** @type {?} */
    KalturaDrmProfile.prototype.signingKey;
}
typesMappingStorage['KalturaDrmProfile'] = KalturaDrmProfile;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYURybVByb2ZpbGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFEcm1Qcm9maWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDbEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDcEUsT0FBTyxFQUFFLGlCQUFpQixFQUF5QixNQUFNLHdCQUF3QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFjbEYsTUFBTSx3QkFBeUIsU0FBUSxpQkFBaUI7Ozs7SUFjcEQsWUFBWSxJQUE2QjtRQUVyQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDZjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsbUJBQW1CLEVBQUU7WUFDdEUsRUFBRSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQ3BDLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDMUIsSUFBSSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNyQixXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVCLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsc0JBQXNCLEVBQUUsT0FBTyxFQUFHLHdCQUF3QixFQUFFO1lBQzNHLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsdUJBQXVCLEVBQUUsT0FBTyxFQUFHLHlCQUF5QixFQUFFO1lBQzNHLGdCQUFnQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNqQyxhQUFhLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzlCLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUMzQyxTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDM0MsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNsQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLGlCQUFpQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFEcm1Qcm92aWRlclR5cGUgfSBmcm9tICcuL0thbHR1cmFEcm1Qcm92aWRlclR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYURybVByb2ZpbGVTdGF0dXMgfSBmcm9tICcuL0thbHR1cmFEcm1Qcm9maWxlU3RhdHVzJztcbmltcG9ydCB7IEthbHR1cmFPYmplY3RCYXNlLCBLYWx0dXJhT2JqZWN0QmFzZUFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhRHJtUHJvZmlsZUFyZ3MgIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2VBcmdzIHtcbiAgICBwYXJ0bmVySWQ/IDogbnVtYmVyO1xuXHRuYW1lPyA6IHN0cmluZztcblx0ZGVzY3JpcHRpb24/IDogc3RyaW5nO1xuXHRwcm92aWRlcj8gOiBLYWx0dXJhRHJtUHJvdmlkZXJUeXBlO1xuXHRzdGF0dXM/IDogS2FsdHVyYURybVByb2ZpbGVTdGF0dXM7XG5cdGxpY2Vuc2VTZXJ2ZXJVcmw/IDogc3RyaW5nO1xuXHRkZWZhdWx0UG9saWN5PyA6IHN0cmluZztcblx0c2lnbmluZ0tleT8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFEcm1Qcm9maWxlIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2Uge1xuXG4gICAgcmVhZG9ubHkgaWQgOiBudW1iZXI7XG5cdHBhcnRuZXJJZCA6IG51bWJlcjtcblx0bmFtZSA6IHN0cmluZztcblx0ZGVzY3JpcHRpb24gOiBzdHJpbmc7XG5cdHByb3ZpZGVyIDogS2FsdHVyYURybVByb3ZpZGVyVHlwZTtcblx0c3RhdHVzIDogS2FsdHVyYURybVByb2ZpbGVTdGF0dXM7XG5cdGxpY2Vuc2VTZXJ2ZXJVcmwgOiBzdHJpbmc7XG5cdGRlZmF1bHRQb2xpY3kgOiBzdHJpbmc7XG5cdHJlYWRvbmx5IGNyZWF0ZWRBdCA6IG51bWJlcjtcblx0cmVhZG9ubHkgdXBkYXRlZEF0IDogbnVtYmVyO1xuXHRzaWduaW5nS2V5IDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhRHJtUHJvZmlsZUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhRHJtUHJvZmlsZScgfSxcblx0XHRcdFx0aWQgOiB7IHR5cGUgOiAnbicsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRwYXJ0bmVySWQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0bmFtZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRkZXNjcmlwdGlvbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRwcm92aWRlciA6IHsgdHlwZSA6ICdlcycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFEcm1Qcm92aWRlclR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYURybVByb3ZpZGVyVHlwZScgfSxcblx0XHRcdFx0c3RhdHVzIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYURybVByb2ZpbGVTdGF0dXMsIHN1YlR5cGUgOiAnS2FsdHVyYURybVByb2ZpbGVTdGF0dXMnIH0sXG5cdFx0XHRcdGxpY2Vuc2VTZXJ2ZXJVcmwgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZGVmYXVsdFBvbGljeSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRjcmVhdGVkQXQgOiB7IHR5cGUgOiAnbicsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHR1cGRhdGVkQXQgOiB7IHR5cGUgOiAnbicsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRzaWduaW5nS2V5IDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFEcm1Qcm9maWxlJ10gPSBLYWx0dXJhRHJtUHJvZmlsZTsiXX0=