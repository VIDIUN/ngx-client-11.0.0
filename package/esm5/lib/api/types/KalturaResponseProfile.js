/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaResponseProfileStatus } from './KalturaResponseProfileStatus';
import { KalturaDetachedResponseProfile } from './KalturaDetachedResponseProfile';
/**
 * @record
 */
export function KalturaResponseProfileArgs() { }
/** @type {?|undefined} */
KalturaResponseProfileArgs.prototype.systemName;
var KalturaResponseProfile = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaResponseProfile, _super);
    function KalturaResponseProfile(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaResponseProfile.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaResponseProfile' },
            id: { type: 'n', readOnly: true },
            systemName: { type: 's' },
            partnerId: { type: 'n', readOnly: true },
            createdAt: { type: 'd', readOnly: true },
            updatedAt: { type: 'd', readOnly: true },
            status: { type: 'en', readOnly: true, subTypeConstructor: KalturaResponseProfileStatus, subType: 'KalturaResponseProfileStatus' },
            version: { type: 'n', readOnly: true }
        });
        return result;
    };
    return KalturaResponseProfile;
}(KalturaDetachedResponseProfile));
export { KalturaResponseProfile };
if (false) {
    /** @type {?} */
    KalturaResponseProfile.prototype.id;
    /** @type {?} */
    KalturaResponseProfile.prototype.systemName;
    /** @type {?} */
    KalturaResponseProfile.prototype.partnerId;
    /** @type {?} */
    KalturaResponseProfile.prototype.createdAt;
    /** @type {?} */
    KalturaResponseProfile.prototype.updatedAt;
    /** @type {?} */
    KalturaResponseProfile.prototype.status;
    /** @type {?} */
    KalturaResponseProfile.prototype.version;
}
typesMappingStorage['KalturaResponseProfile'] = KalturaResponseProfile;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVJlc3BvbnNlUHJvZmlsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYVJlc3BvbnNlUHJvZmlsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM5RSxPQUFPLEVBQUUsOEJBQThCLEVBQXNDLE1BQU0sa0NBQWtDLENBQUM7Ozs7Ozs7QUFPdEgsSUFBQTtJQUE0QyxrREFBOEI7SUFVdEUsZ0NBQVksSUFBa0M7ZUFFMUMsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyw2Q0FBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyx3QkFBd0IsRUFBRTtZQUMzRSxFQUFFLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDcEMsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMzQixTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDM0MsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQzNDLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUMzQyxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsNEJBQTRCLEVBQUUsT0FBTyxFQUFHLDhCQUE4QixFQUFFO1lBQ3RJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtTQUNoQyxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO2lDQTFDTDtFQVU0Qyw4QkFBOEIsRUFpQ3pFLENBQUE7QUFqQ0Qsa0NBaUNDOzs7Ozs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLHdCQUF3QixDQUFDLEdBQUcsc0JBQXNCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVJlc3BvbnNlUHJvZmlsZVN0YXR1cyB9IGZyb20gJy4vS2FsdHVyYVJlc3BvbnNlUHJvZmlsZVN0YXR1cyc7XG5pbXBvcnQgeyBLYWx0dXJhRGV0YWNoZWRSZXNwb25zZVByb2ZpbGUsIEthbHR1cmFEZXRhY2hlZFJlc3BvbnNlUHJvZmlsZUFyZ3MgfSBmcm9tICcuL0thbHR1cmFEZXRhY2hlZFJlc3BvbnNlUHJvZmlsZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYVJlc3BvbnNlUHJvZmlsZUFyZ3MgIGV4dGVuZHMgS2FsdHVyYURldGFjaGVkUmVzcG9uc2VQcm9maWxlQXJncyB7XG4gICAgc3lzdGVtTmFtZT8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFSZXNwb25zZVByb2ZpbGUgZXh0ZW5kcyBLYWx0dXJhRGV0YWNoZWRSZXNwb25zZVByb2ZpbGUge1xuXG4gICAgcmVhZG9ubHkgaWQgOiBudW1iZXI7XG5cdHN5c3RlbU5hbWUgOiBzdHJpbmc7XG5cdHJlYWRvbmx5IHBhcnRuZXJJZCA6IG51bWJlcjtcblx0cmVhZG9ubHkgY3JlYXRlZEF0IDogRGF0ZTtcblx0cmVhZG9ubHkgdXBkYXRlZEF0IDogRGF0ZTtcblx0cmVhZG9ubHkgc3RhdHVzIDogS2FsdHVyYVJlc3BvbnNlUHJvZmlsZVN0YXR1cztcblx0cmVhZG9ubHkgdmVyc2lvbiA6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYVJlc3BvbnNlUHJvZmlsZUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhUmVzcG9uc2VQcm9maWxlJyB9LFxuXHRcdFx0XHRpZCA6IHsgdHlwZSA6ICduJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdHN5c3RlbU5hbWUgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cGFydG5lcklkIDogeyB0eXBlIDogJ24nLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0Y3JlYXRlZEF0IDogeyB0eXBlIDogJ2QnLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0dXBkYXRlZEF0IDogeyB0eXBlIDogJ2QnLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0c3RhdHVzIDogeyB0eXBlIDogJ2VuJywgcmVhZE9ubHkgOiB0cnVlLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhUmVzcG9uc2VQcm9maWxlU3RhdHVzLCBzdWJUeXBlIDogJ0thbHR1cmFSZXNwb25zZVByb2ZpbGVTdGF0dXMnIH0sXG5cdFx0XHRcdHZlcnNpb24gOiB7IHR5cGUgOiAnbicsIHJlYWRPbmx5IDogdHJ1ZSB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhUmVzcG9uc2VQcm9maWxlJ10gPSBLYWx0dXJhUmVzcG9uc2VQcm9maWxlOyJdfQ==