/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaDrmProviderType } from './KalturaDrmProviderType';
import { KalturaDrmPolicyStatus } from './KalturaDrmPolicyStatus';
import { KalturaDrmLicenseScenario } from './KalturaDrmLicenseScenario';
import { KalturaDrmLicenseType } from './KalturaDrmLicenseType';
import { KalturaDrmLicenseExpirationPolicy } from './KalturaDrmLicenseExpirationPolicy';
import { KalturaKeyValue } from './KalturaKeyValue';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaDrmPolicyArgs() { }
/** @type {?|undefined} */
KalturaDrmPolicyArgs.prototype.partnerId;
/** @type {?|undefined} */
KalturaDrmPolicyArgs.prototype.name;
/** @type {?|undefined} */
KalturaDrmPolicyArgs.prototype.systemName;
/** @type {?|undefined} */
KalturaDrmPolicyArgs.prototype.description;
/** @type {?|undefined} */
KalturaDrmPolicyArgs.prototype.provider;
/** @type {?|undefined} */
KalturaDrmPolicyArgs.prototype.status;
/** @type {?|undefined} */
KalturaDrmPolicyArgs.prototype.scenario;
/** @type {?|undefined} */
KalturaDrmPolicyArgs.prototype.licenseType;
/** @type {?|undefined} */
KalturaDrmPolicyArgs.prototype.licenseExpirationPolicy;
/** @type {?|undefined} */
KalturaDrmPolicyArgs.prototype.duration;
/** @type {?|undefined} */
KalturaDrmPolicyArgs.prototype.licenseParams;
export class KalturaDrmPolicy extends KalturaObjectBase {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data);
        if (typeof this.licenseParams === 'undefined')
            this.licenseParams = [];
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaDrmPolicy' },
            id: { type: 'n', readOnly: true },
            partnerId: { type: 'n' },
            name: { type: 's' },
            systemName: { type: 's' },
            description: { type: 's' },
            provider: { type: 'es', subTypeConstructor: KalturaDrmProviderType, subType: 'KalturaDrmProviderType' },
            status: { type: 'en', subTypeConstructor: KalturaDrmPolicyStatus, subType: 'KalturaDrmPolicyStatus' },
            scenario: { type: 'es', subTypeConstructor: KalturaDrmLicenseScenario, subType: 'KalturaDrmLicenseScenario' },
            licenseType: { type: 'es', subTypeConstructor: KalturaDrmLicenseType, subType: 'KalturaDrmLicenseType' },
            licenseExpirationPolicy: { type: 'en', subTypeConstructor: KalturaDrmLicenseExpirationPolicy, subType: 'KalturaDrmLicenseExpirationPolicy' },
            duration: { type: 'n' },
            createdAt: { type: 'n', readOnly: true },
            updatedAt: { type: 'n', readOnly: true },
            licenseParams: { type: 'a', subTypeConstructor: KalturaKeyValue, subType: 'KalturaKeyValue' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaDrmPolicy.prototype.id;
    /** @type {?} */
    KalturaDrmPolicy.prototype.partnerId;
    /** @type {?} */
    KalturaDrmPolicy.prototype.name;
    /** @type {?} */
    KalturaDrmPolicy.prototype.systemName;
    /** @type {?} */
    KalturaDrmPolicy.prototype.description;
    /** @type {?} */
    KalturaDrmPolicy.prototype.provider;
    /** @type {?} */
    KalturaDrmPolicy.prototype.status;
    /** @type {?} */
    KalturaDrmPolicy.prototype.scenario;
    /** @type {?} */
    KalturaDrmPolicy.prototype.licenseType;
    /** @type {?} */
    KalturaDrmPolicy.prototype.licenseExpirationPolicy;
    /** @type {?} */
    KalturaDrmPolicy.prototype.duration;
    /** @type {?} */
    KalturaDrmPolicy.prototype.createdAt;
    /** @type {?} */
    KalturaDrmPolicy.prototype.updatedAt;
    /** @type {?} */
    KalturaDrmPolicy.prototype.licenseParams;
}
typesMappingStorage['KalturaDrmPolicy'] = KalturaDrmPolicy;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYURybVBvbGljeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYURybVBvbGljeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsaUJBQWlCLEVBQXlCLE1BQU0sd0JBQXdCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlCbEYsTUFBTSx1QkFBd0IsU0FBUSxpQkFBaUI7Ozs7SUFpQm5ELFlBQVksSUFBNEI7UUFFcEMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ1osRUFBRSxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsYUFBYSxLQUFLLFdBQVcsQ0FBQztZQUFDLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDO0tBQzFFOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxrQkFBa0IsRUFBRTtZQUNyRSxFQUFFLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDcEMsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMxQixJQUFJLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3JCLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDM0IsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1QixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHNCQUFzQixFQUFFLE9BQU8sRUFBRyx3QkFBd0IsRUFBRTtZQUMzRyxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHNCQUFzQixFQUFFLE9BQU8sRUFBRyx3QkFBd0IsRUFBRTtZQUN6RyxRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHlCQUF5QixFQUFFLE9BQU8sRUFBRywyQkFBMkIsRUFBRTtZQUNqSCxXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHFCQUFxQixFQUFFLE9BQU8sRUFBRyx1QkFBdUIsRUFBRTtZQUM1Ryx1QkFBdUIsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsaUNBQWlDLEVBQUUsT0FBTyxFQUFHLG1DQUFtQyxFQUFFO1lBQ2hKLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQzNDLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUMzQyxhQUFhLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLGVBQWUsRUFBRSxPQUFPLEVBQUcsaUJBQWlCLEVBQUU7U0FDeEYsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsa0JBQWtCLENBQUMsR0FBRyxnQkFBZ0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhRHJtUHJvdmlkZXJUeXBlIH0gZnJvbSAnLi9LYWx0dXJhRHJtUHJvdmlkZXJUeXBlJztcbmltcG9ydCB7IEthbHR1cmFEcm1Qb2xpY3lTdGF0dXMgfSBmcm9tICcuL0thbHR1cmFEcm1Qb2xpY3lTdGF0dXMnO1xuaW1wb3J0IHsgS2FsdHVyYURybUxpY2Vuc2VTY2VuYXJpbyB9IGZyb20gJy4vS2FsdHVyYURybUxpY2Vuc2VTY2VuYXJpbyc7XG5pbXBvcnQgeyBLYWx0dXJhRHJtTGljZW5zZVR5cGUgfSBmcm9tICcuL0thbHR1cmFEcm1MaWNlbnNlVHlwZSc7XG5pbXBvcnQgeyBLYWx0dXJhRHJtTGljZW5zZUV4cGlyYXRpb25Qb2xpY3kgfSBmcm9tICcuL0thbHR1cmFEcm1MaWNlbnNlRXhwaXJhdGlvblBvbGljeSc7XG5pbXBvcnQgeyBLYWx0dXJhS2V5VmFsdWUgfSBmcm9tICcuL0thbHR1cmFLZXlWYWx1ZSc7XG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0QmFzZSwgS2FsdHVyYU9iamVjdEJhc2VBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYURybVBvbGljeUFyZ3MgIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2VBcmdzIHtcbiAgICBwYXJ0bmVySWQ/IDogbnVtYmVyO1xuXHRuYW1lPyA6IHN0cmluZztcblx0c3lzdGVtTmFtZT8gOiBzdHJpbmc7XG5cdGRlc2NyaXB0aW9uPyA6IHN0cmluZztcblx0cHJvdmlkZXI/IDogS2FsdHVyYURybVByb3ZpZGVyVHlwZTtcblx0c3RhdHVzPyA6IEthbHR1cmFEcm1Qb2xpY3lTdGF0dXM7XG5cdHNjZW5hcmlvPyA6IEthbHR1cmFEcm1MaWNlbnNlU2NlbmFyaW87XG5cdGxpY2Vuc2VUeXBlPyA6IEthbHR1cmFEcm1MaWNlbnNlVHlwZTtcblx0bGljZW5zZUV4cGlyYXRpb25Qb2xpY3k/IDogS2FsdHVyYURybUxpY2Vuc2VFeHBpcmF0aW9uUG9saWN5O1xuXHRkdXJhdGlvbj8gOiBudW1iZXI7XG5cdGxpY2Vuc2VQYXJhbXM/IDogS2FsdHVyYUtleVZhbHVlW107XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFEcm1Qb2xpY3kgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZSB7XG5cbiAgICByZWFkb25seSBpZCA6IG51bWJlcjtcblx0cGFydG5lcklkIDogbnVtYmVyO1xuXHRuYW1lIDogc3RyaW5nO1xuXHRzeXN0ZW1OYW1lIDogc3RyaW5nO1xuXHRkZXNjcmlwdGlvbiA6IHN0cmluZztcblx0cHJvdmlkZXIgOiBLYWx0dXJhRHJtUHJvdmlkZXJUeXBlO1xuXHRzdGF0dXMgOiBLYWx0dXJhRHJtUG9saWN5U3RhdHVzO1xuXHRzY2VuYXJpbyA6IEthbHR1cmFEcm1MaWNlbnNlU2NlbmFyaW87XG5cdGxpY2Vuc2VUeXBlIDogS2FsdHVyYURybUxpY2Vuc2VUeXBlO1xuXHRsaWNlbnNlRXhwaXJhdGlvblBvbGljeSA6IEthbHR1cmFEcm1MaWNlbnNlRXhwaXJhdGlvblBvbGljeTtcblx0ZHVyYXRpb24gOiBudW1iZXI7XG5cdHJlYWRvbmx5IGNyZWF0ZWRBdCA6IG51bWJlcjtcblx0cmVhZG9ubHkgdXBkYXRlZEF0IDogbnVtYmVyO1xuXHRsaWNlbnNlUGFyYW1zIDogS2FsdHVyYUtleVZhbHVlW107XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFEcm1Qb2xpY3lBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5saWNlbnNlUGFyYW1zID09PSAndW5kZWZpbmVkJykgdGhpcy5saWNlbnNlUGFyYW1zID0gW107XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYURybVBvbGljeScgfSxcblx0XHRcdFx0aWQgOiB7IHR5cGUgOiAnbicsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRwYXJ0bmVySWQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0bmFtZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzeXN0ZW1OYW1lIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGRlc2NyaXB0aW9uIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHByb3ZpZGVyIDogeyB0eXBlIDogJ2VzJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYURybVByb3ZpZGVyVHlwZSwgc3ViVHlwZSA6ICdLYWx0dXJhRHJtUHJvdmlkZXJUeXBlJyB9LFxuXHRcdFx0XHRzdGF0dXMgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRHJtUG9saWN5U3RhdHVzLCBzdWJUeXBlIDogJ0thbHR1cmFEcm1Qb2xpY3lTdGF0dXMnIH0sXG5cdFx0XHRcdHNjZW5hcmlvIDogeyB0eXBlIDogJ2VzJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYURybUxpY2Vuc2VTY2VuYXJpbywgc3ViVHlwZSA6ICdLYWx0dXJhRHJtTGljZW5zZVNjZW5hcmlvJyB9LFxuXHRcdFx0XHRsaWNlbnNlVHlwZSA6IHsgdHlwZSA6ICdlcycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFEcm1MaWNlbnNlVHlwZSwgc3ViVHlwZSA6ICdLYWx0dXJhRHJtTGljZW5zZVR5cGUnIH0sXG5cdFx0XHRcdGxpY2Vuc2VFeHBpcmF0aW9uUG9saWN5IDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYURybUxpY2Vuc2VFeHBpcmF0aW9uUG9saWN5LCBzdWJUeXBlIDogJ0thbHR1cmFEcm1MaWNlbnNlRXhwaXJhdGlvblBvbGljeScgfSxcblx0XHRcdFx0ZHVyYXRpb24gOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0Y3JlYXRlZEF0IDogeyB0eXBlIDogJ24nLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0dXBkYXRlZEF0IDogeyB0eXBlIDogJ24nLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0bGljZW5zZVBhcmFtcyA6IHsgdHlwZSA6ICdhJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUtleVZhbHVlLCBzdWJUeXBlIDogJ0thbHR1cmFLZXlWYWx1ZScgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYURybVBvbGljeSddID0gS2FsdHVyYURybVBvbGljeTsiXX0=