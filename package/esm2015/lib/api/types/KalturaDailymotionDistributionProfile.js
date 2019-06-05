/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaDailymotionGeoBlockingMapping } from './KalturaDailymotionGeoBlockingMapping';
import { KalturaConfigurableDistributionProfile } from './KalturaConfigurableDistributionProfile';
/**
 * @record
 */
export function KalturaDailymotionDistributionProfileArgs() { }
/** @type {?|undefined} */
KalturaDailymotionDistributionProfileArgs.prototype.user;
/** @type {?|undefined} */
KalturaDailymotionDistributionProfileArgs.prototype.password;
/** @type {?|undefined} */
KalturaDailymotionDistributionProfileArgs.prototype.geoBlockingMapping;
export class KalturaDailymotionDistributionProfile extends KalturaConfigurableDistributionProfile {
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
            objectType: { type: 'c', default: 'KalturaDailymotionDistributionProfile' },
            user: { type: 's' },
            password: { type: 's' },
            geoBlockingMapping: { type: 'en', subTypeConstructor: KalturaDailymotionGeoBlockingMapping, subType: 'KalturaDailymotionGeoBlockingMapping' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaDailymotionDistributionProfile.prototype.user;
    /** @type {?} */
    KalturaDailymotionDistributionProfile.prototype.password;
    /** @type {?} */
    KalturaDailymotionDistributionProfile.prototype.geoBlockingMapping;
}
typesMappingStorage['KalturaDailymotionDistributionProfile'] = KalturaDailymotionDistributionProfile;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYURhaWx5bW90aW9uRGlzdHJpYnV0aW9uUHJvZmlsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYURhaWx5bW90aW9uRGlzdHJpYnV0aW9uUHJvZmlsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxvQ0FBb0MsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQzlGLE9BQU8sRUFBRSxzQ0FBc0MsRUFBOEMsTUFBTSwwQ0FBMEMsQ0FBQzs7Ozs7Ozs7Ozs7QUFTOUksTUFBTSw0Q0FBNkMsU0FBUSxzQ0FBc0M7Ozs7SUFNN0YsWUFBWSxJQUFpRDtRQUV6RCxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDZjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsdUNBQXVDLEVBQUU7WUFDMUYsSUFBSSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNyQixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLGtCQUFrQixFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxvQ0FBb0MsRUFBRSxPQUFPLEVBQUcsc0NBQXNDLEVBQUU7U0FDeEksQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyx1Q0FBdUMsQ0FBQyxHQUFHLHFDQUFxQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFEYWlseW1vdGlvbkdlb0Jsb2NraW5nTWFwcGluZyB9IGZyb20gJy4vS2FsdHVyYURhaWx5bW90aW9uR2VvQmxvY2tpbmdNYXBwaW5nJztcbmltcG9ydCB7IEthbHR1cmFDb25maWd1cmFibGVEaXN0cmlidXRpb25Qcm9maWxlLCBLYWx0dXJhQ29uZmlndXJhYmxlRGlzdHJpYnV0aW9uUHJvZmlsZUFyZ3MgfSBmcm9tICcuL0thbHR1cmFDb25maWd1cmFibGVEaXN0cmlidXRpb25Qcm9maWxlJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhRGFpbHltb3Rpb25EaXN0cmlidXRpb25Qcm9maWxlQXJncyAgZXh0ZW5kcyBLYWx0dXJhQ29uZmlndXJhYmxlRGlzdHJpYnV0aW9uUHJvZmlsZUFyZ3Mge1xuICAgIHVzZXI/IDogc3RyaW5nO1xuXHRwYXNzd29yZD8gOiBzdHJpbmc7XG5cdGdlb0Jsb2NraW5nTWFwcGluZz8gOiBLYWx0dXJhRGFpbHltb3Rpb25HZW9CbG9ja2luZ01hcHBpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFEYWlseW1vdGlvbkRpc3RyaWJ1dGlvblByb2ZpbGUgZXh0ZW5kcyBLYWx0dXJhQ29uZmlndXJhYmxlRGlzdHJpYnV0aW9uUHJvZmlsZSB7XG5cbiAgICB1c2VyIDogc3RyaW5nO1xuXHRwYXNzd29yZCA6IHN0cmluZztcblx0Z2VvQmxvY2tpbmdNYXBwaW5nIDogS2FsdHVyYURhaWx5bW90aW9uR2VvQmxvY2tpbmdNYXBwaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhRGFpbHltb3Rpb25EaXN0cmlidXRpb25Qcm9maWxlQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFEYWlseW1vdGlvbkRpc3RyaWJ1dGlvblByb2ZpbGUnIH0sXG5cdFx0XHRcdHVzZXIgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cGFzc3dvcmQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Z2VvQmxvY2tpbmdNYXBwaW5nIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYURhaWx5bW90aW9uR2VvQmxvY2tpbmdNYXBwaW5nLCBzdWJUeXBlIDogJ0thbHR1cmFEYWlseW1vdGlvbkdlb0Jsb2NraW5nTWFwcGluZycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYURhaWx5bW90aW9uRGlzdHJpYnV0aW9uUHJvZmlsZSddID0gS2FsdHVyYURhaWx5bW90aW9uRGlzdHJpYnV0aW9uUHJvZmlsZTsiXX0=