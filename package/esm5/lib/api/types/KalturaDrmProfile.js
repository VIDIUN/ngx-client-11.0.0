/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var KalturaDrmProfile = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaDrmProfile, _super);
    function KalturaDrmProfile(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaDrmProfile.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
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
    };
    return KalturaDrmProfile;
}(KalturaObjectBase));
export { KalturaDrmProfile };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYURybVByb2ZpbGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFEcm1Qcm9maWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxpQkFBaUIsRUFBeUIsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBY2xGLElBQUE7SUFBdUMsNkNBQWlCO0lBY3BELDJCQUFZLElBQTZCO2VBRXJDLGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsd0NBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsbUJBQW1CLEVBQUU7WUFDdEUsRUFBRSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQ3BDLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDMUIsSUFBSSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNyQixXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVCLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsc0JBQXNCLEVBQUUsT0FBTyxFQUFHLHdCQUF3QixFQUFFO1lBQzNHLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsdUJBQXVCLEVBQUUsT0FBTyxFQUFHLHlCQUF5QixFQUFFO1lBQzNHLGdCQUFnQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNqQyxhQUFhLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzlCLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUMzQyxTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDM0MsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNsQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCOzRCQTFETDtFQWtCdUMsaUJBQWlCLEVBeUN2RCxDQUFBO0FBekNELDZCQXlDQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLG1CQUFtQixDQUFDLEdBQUcsaUJBQWlCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYURybVByb3ZpZGVyVHlwZSB9IGZyb20gJy4vS2FsdHVyYURybVByb3ZpZGVyVHlwZSc7XG5pbXBvcnQgeyBLYWx0dXJhRHJtUHJvZmlsZVN0YXR1cyB9IGZyb20gJy4vS2FsdHVyYURybVByb2ZpbGVTdGF0dXMnO1xuaW1wb3J0IHsgS2FsdHVyYU9iamVjdEJhc2UsIEthbHR1cmFPYmplY3RCYXNlQXJncyB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFEcm1Qcm9maWxlQXJncyAgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZUFyZ3Mge1xuICAgIHBhcnRuZXJJZD8gOiBudW1iZXI7XG5cdG5hbWU/IDogc3RyaW5nO1xuXHRkZXNjcmlwdGlvbj8gOiBzdHJpbmc7XG5cdHByb3ZpZGVyPyA6IEthbHR1cmFEcm1Qcm92aWRlclR5cGU7XG5cdHN0YXR1cz8gOiBLYWx0dXJhRHJtUHJvZmlsZVN0YXR1cztcblx0bGljZW5zZVNlcnZlclVybD8gOiBzdHJpbmc7XG5cdGRlZmF1bHRQb2xpY3k/IDogc3RyaW5nO1xuXHRzaWduaW5nS2V5PyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYURybVByb2ZpbGUgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZSB7XG5cbiAgICByZWFkb25seSBpZCA6IG51bWJlcjtcblx0cGFydG5lcklkIDogbnVtYmVyO1xuXHRuYW1lIDogc3RyaW5nO1xuXHRkZXNjcmlwdGlvbiA6IHN0cmluZztcblx0cHJvdmlkZXIgOiBLYWx0dXJhRHJtUHJvdmlkZXJUeXBlO1xuXHRzdGF0dXMgOiBLYWx0dXJhRHJtUHJvZmlsZVN0YXR1cztcblx0bGljZW5zZVNlcnZlclVybCA6IHN0cmluZztcblx0ZGVmYXVsdFBvbGljeSA6IHN0cmluZztcblx0cmVhZG9ubHkgY3JlYXRlZEF0IDogbnVtYmVyO1xuXHRyZWFkb25seSB1cGRhdGVkQXQgOiBudW1iZXI7XG5cdHNpZ25pbmdLZXkgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFEcm1Qcm9maWxlQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFEcm1Qcm9maWxlJyB9LFxuXHRcdFx0XHRpZCA6IHsgdHlwZSA6ICduJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdHBhcnRuZXJJZCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRuYW1lIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGRlc2NyaXB0aW9uIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHByb3ZpZGVyIDogeyB0eXBlIDogJ2VzJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYURybVByb3ZpZGVyVHlwZSwgc3ViVHlwZSA6ICdLYWx0dXJhRHJtUHJvdmlkZXJUeXBlJyB9LFxuXHRcdFx0XHRzdGF0dXMgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRHJtUHJvZmlsZVN0YXR1cywgc3ViVHlwZSA6ICdLYWx0dXJhRHJtUHJvZmlsZVN0YXR1cycgfSxcblx0XHRcdFx0bGljZW5zZVNlcnZlclVybCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRkZWZhdWx0UG9saWN5IDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGNyZWF0ZWRBdCA6IHsgdHlwZSA6ICduJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdHVwZGF0ZWRBdCA6IHsgdHlwZSA6ICduJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdHNpZ25pbmdLZXkgOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYURybVByb2ZpbGUnXSA9IEthbHR1cmFEcm1Qcm9maWxlOyJdfQ==