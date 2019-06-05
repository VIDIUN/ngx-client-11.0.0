/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaUserType } from './KalturaUserType';
import { KalturaGender } from './KalturaGender';
import { KalturaUserStatus } from './KalturaUserStatus';
import { KalturaLanguageCode } from './KalturaLanguageCode';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaUserArgs() { }
/** @type {?|undefined} */
KalturaUserArgs.prototype.id;
/** @type {?|undefined} */
KalturaUserArgs.prototype.type;
/** @type {?|undefined} */
KalturaUserArgs.prototype.screenName;
/** @type {?|undefined} */
KalturaUserArgs.prototype.fullName;
/** @type {?|undefined} */
KalturaUserArgs.prototype.email;
/** @type {?|undefined} */
KalturaUserArgs.prototype.dateOfBirth;
/** @type {?|undefined} */
KalturaUserArgs.prototype.country;
/** @type {?|undefined} */
KalturaUserArgs.prototype.state;
/** @type {?|undefined} */
KalturaUserArgs.prototype.city;
/** @type {?|undefined} */
KalturaUserArgs.prototype.zip;
/** @type {?|undefined} */
KalturaUserArgs.prototype.thumbnailUrl;
/** @type {?|undefined} */
KalturaUserArgs.prototype.description;
/** @type {?|undefined} */
KalturaUserArgs.prototype.tags;
/** @type {?|undefined} */
KalturaUserArgs.prototype.adminTags;
/** @type {?|undefined} */
KalturaUserArgs.prototype.gender;
/** @type {?|undefined} */
KalturaUserArgs.prototype.status;
/** @type {?|undefined} */
KalturaUserArgs.prototype.partnerData;
/** @type {?|undefined} */
KalturaUserArgs.prototype.indexedPartnerDataInt;
/** @type {?|undefined} */
KalturaUserArgs.prototype.indexedPartnerDataString;
/** @type {?|undefined} */
KalturaUserArgs.prototype.password;
/** @type {?|undefined} */
KalturaUserArgs.prototype.firstName;
/** @type {?|undefined} */
KalturaUserArgs.prototype.lastName;
/** @type {?|undefined} */
KalturaUserArgs.prototype.isAdmin;
/** @type {?|undefined} */
KalturaUserArgs.prototype.language;
/** @type {?|undefined} */
KalturaUserArgs.prototype.loginEnabled;
/** @type {?|undefined} */
KalturaUserArgs.prototype.roleIds;
/** @type {?|undefined} */
KalturaUserArgs.prototype.isAccountOwner;
/** @type {?|undefined} */
KalturaUserArgs.prototype.allowedPartnerIds;
/** @type {?|undefined} */
KalturaUserArgs.prototype.allowedPartnerPackages;
var KalturaUser = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaUser, _super);
    function KalturaUser(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaUser.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaUser' },
            id: { type: 's' },
            partnerId: { type: 'n', readOnly: true },
            type: { type: 'en', subTypeConstructor: KalturaUserType, subType: 'KalturaUserType' },
            screenName: { type: 's' },
            fullName: { type: 's' },
            email: { type: 's' },
            dateOfBirth: { type: 'n' },
            country: { type: 's' },
            state: { type: 's' },
            city: { type: 's' },
            zip: { type: 's' },
            thumbnailUrl: { type: 's' },
            description: { type: 's' },
            tags: { type: 's' },
            adminTags: { type: 's' },
            gender: { type: 'en', subTypeConstructor: KalturaGender, subType: 'KalturaGender' },
            status: { type: 'en', subTypeConstructor: KalturaUserStatus, subType: 'KalturaUserStatus' },
            createdAt: { type: 'd', readOnly: true },
            updatedAt: { type: 'd', readOnly: true },
            partnerData: { type: 's' },
            indexedPartnerDataInt: { type: 'n' },
            indexedPartnerDataString: { type: 's' },
            storageSize: { type: 'n', readOnly: true },
            password: { type: 's' },
            firstName: { type: 's' },
            lastName: { type: 's' },
            isAdmin: { type: 'b' },
            language: { type: 'es', subTypeConstructor: KalturaLanguageCode, subType: 'KalturaLanguageCode' },
            lastLoginTime: { type: 'n', readOnly: true },
            statusUpdatedAt: { type: 'n', readOnly: true },
            deletedAt: { type: 'd', readOnly: true },
            loginEnabled: { type: 'b' },
            roleIds: { type: 's' },
            roleNames: { type: 's', readOnly: true },
            isAccountOwner: { type: 'b' },
            allowedPartnerIds: { type: 's' },
            allowedPartnerPackages: { type: 's' }
        });
        return result;
    };
    return KalturaUser;
}(KalturaObjectBase));
export { KalturaUser };
if (false) {
    /** @type {?} */
    KalturaUser.prototype.id;
    /** @type {?} */
    KalturaUser.prototype.partnerId;
    /** @type {?} */
    KalturaUser.prototype.type;
    /** @type {?} */
    KalturaUser.prototype.screenName;
    /** @type {?} */
    KalturaUser.prototype.fullName;
    /** @type {?} */
    KalturaUser.prototype.email;
    /** @type {?} */
    KalturaUser.prototype.dateOfBirth;
    /** @type {?} */
    KalturaUser.prototype.country;
    /** @type {?} */
    KalturaUser.prototype.state;
    /** @type {?} */
    KalturaUser.prototype.city;
    /** @type {?} */
    KalturaUser.prototype.zip;
    /** @type {?} */
    KalturaUser.prototype.thumbnailUrl;
    /** @type {?} */
    KalturaUser.prototype.description;
    /** @type {?} */
    KalturaUser.prototype.tags;
    /** @type {?} */
    KalturaUser.prototype.adminTags;
    /** @type {?} */
    KalturaUser.prototype.gender;
    /** @type {?} */
    KalturaUser.prototype.status;
    /** @type {?} */
    KalturaUser.prototype.createdAt;
    /** @type {?} */
    KalturaUser.prototype.updatedAt;
    /** @type {?} */
    KalturaUser.prototype.partnerData;
    /** @type {?} */
    KalturaUser.prototype.indexedPartnerDataInt;
    /** @type {?} */
    KalturaUser.prototype.indexedPartnerDataString;
    /** @type {?} */
    KalturaUser.prototype.storageSize;
    /** @type {?} */
    KalturaUser.prototype.password;
    /** @type {?} */
    KalturaUser.prototype.firstName;
    /** @type {?} */
    KalturaUser.prototype.lastName;
    /** @type {?} */
    KalturaUser.prototype.isAdmin;
    /** @type {?} */
    KalturaUser.prototype.language;
    /** @type {?} */
    KalturaUser.prototype.lastLoginTime;
    /** @type {?} */
    KalturaUser.prototype.statusUpdatedAt;
    /** @type {?} */
    KalturaUser.prototype.deletedAt;
    /** @type {?} */
    KalturaUser.prototype.loginEnabled;
    /** @type {?} */
    KalturaUser.prototype.roleIds;
    /** @type {?} */
    KalturaUser.prototype.roleNames;
    /** @type {?} */
    KalturaUser.prototype.isAccountOwner;
    /** @type {?} */
    KalturaUser.prototype.allowedPartnerIds;
    /** @type {?} */
    KalturaUser.prototype.allowedPartnerPackages;
}
typesMappingStorage['KalturaUser'] = KalturaUser;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVVzZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFVc2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDaEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDeEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGlCQUFpQixFQUF5QixNQUFNLHdCQUF3QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQ2xGLElBQUE7SUFBaUMsdUNBQWlCO0lBd0M5QyxxQkFBWSxJQUF1QjtlQUUvQixrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLGtDQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGFBQWEsRUFBRTtZQUNoRSxFQUFFLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ25CLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUMzQyxJQUFJLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLGVBQWUsRUFBRSxPQUFPLEVBQUcsaUJBQWlC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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxhQUFhLENBQUMsR0FBRyxXQUFXLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVVzZXJUeXBlIH0gZnJvbSAnLi9LYWx0dXJhVXNlclR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYUdlbmRlciB9IGZyb20gJy4vS2FsdHVyYUdlbmRlcic7XG5pbXBvcnQgeyBLYWx0dXJhVXNlclN0YXR1cyB9IGZyb20gJy4vS2FsdHVyYVVzZXJTdGF0dXMnO1xuaW1wb3J0IHsgS2FsdHVyYUxhbmd1YWdlQ29kZSB9IGZyb20gJy4vS2FsdHVyYUxhbmd1YWdlQ29kZSc7XG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0QmFzZSwgS2FsdHVyYU9iamVjdEJhc2VBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYVVzZXJBcmdzICBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlQXJncyB7XG4gICAgaWQ/IDogc3RyaW5nO1xuXHR0eXBlPyA6IEthbHR1cmFVc2VyVHlwZTtcblx0c2NyZWVuTmFtZT8gOiBzdHJpbmc7XG5cdGZ1bGxOYW1lPyA6IHN0cmluZztcblx0ZW1haWw/IDogc3RyaW5nO1xuXHRkYXRlT2ZCaXJ0aD8gOiBudW1iZXI7XG5cdGNvdW50cnk/IDogc3RyaW5nO1xuXHRzdGF0ZT8gOiBzdHJpbmc7XG5cdGNpdHk/IDogc3RyaW5nO1xuXHR6aXA/IDogc3RyaW5nO1xuXHR0aHVtYm5haWxVcmw/IDogc3RyaW5nO1xuXHRkZXNjcmlwdGlvbj8gOiBzdHJpbmc7XG5cdHRhZ3M/IDogc3RyaW5nO1xuXHRhZG1pblRhZ3M/IDogc3RyaW5nO1xuXHRnZW5kZXI/IDogS2FsdHVyYUdlbmRlcjtcblx0c3RhdHVzPyA6IEthbHR1cmFVc2VyU3RhdHVzO1xuXHRwYXJ0bmVyRGF0YT8gOiBzdHJpbmc7XG5cdGluZGV4ZWRQYXJ0bmVyRGF0YUludD8gOiBudW1iZXI7XG5cdGluZGV4ZWRQYXJ0bmVyRGF0YVN0cmluZz8gOiBzdHJpbmc7XG5cdHBhc3N3b3JkPyA6IHN0cmluZztcblx0Zmlyc3ROYW1lPyA6IHN0cmluZztcblx0bGFzdE5hbWU/IDogc3RyaW5nO1xuXHRpc0FkbWluPyA6IGJvb2xlYW47XG5cdGxhbmd1YWdlPyA6IEthbHR1cmFMYW5ndWFnZUNvZGU7XG5cdGxvZ2luRW5hYmxlZD8gOiBib29sZWFuO1xuXHRyb2xlSWRzPyA6IHN0cmluZztcblx0aXNBY2NvdW50T3duZXI/IDogYm9vbGVhbjtcblx0YWxsb3dlZFBhcnRuZXJJZHM/IDogc3RyaW5nO1xuXHRhbGxvd2VkUGFydG5lclBhY2thZ2VzPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYVVzZXIgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZSB7XG5cbiAgICBpZCA6IHN0cmluZztcblx0cmVhZG9ubHkgcGFydG5lcklkIDogbnVtYmVyO1xuXHR0eXBlIDogS2FsdHVyYVVzZXJUeXBlO1xuXHRzY3JlZW5OYW1lIDogc3RyaW5nO1xuXHRmdWxsTmFtZSA6IHN0cmluZztcblx0ZW1haWwgOiBzdHJpbmc7XG5cdGRhdGVPZkJpcnRoIDogbnVtYmVyO1xuXHRjb3VudHJ5IDogc3RyaW5nO1xuXHRzdGF0ZSA6IHN0cmluZztcblx0Y2l0eSA6IHN0cmluZztcblx0emlwIDogc3RyaW5nO1xuXHR0aHVtYm5haWxVcmwgOiBzdHJpbmc7XG5cdGRlc2NyaXB0aW9uIDogc3RyaW5nO1xuXHR0YWdzIDogc3RyaW5nO1xuXHRhZG1pblRhZ3MgOiBzdHJpbmc7XG5cdGdlbmRlciA6IEthbHR1cmFHZW5kZXI7XG5cdHN0YXR1cyA6IEthbHR1cmFVc2VyU3RhdHVzO1xuXHRyZWFkb25seSBjcmVhdGVkQXQgOiBEYXRlO1xuXHRyZWFkb25seSB1cGRhdGVkQXQgOiBEYXRlO1xuXHRwYXJ0bmVyRGF0YSA6IHN0cmluZztcblx0aW5kZXhlZFBhcnRuZXJEYXRhSW50IDogbnVtYmVyO1xuXHRpbmRleGVkUGFydG5lckRhdGFTdHJpbmcgOiBzdHJpbmc7XG5cdHJlYWRvbmx5IHN0b3JhZ2VTaXplIDogbnVtYmVyO1xuXHRwYXNzd29yZCA6IHN0cmluZztcblx0Zmlyc3ROYW1lIDogc3RyaW5nO1xuXHRsYXN0TmFtZSA6IHN0cmluZztcblx0aXNBZG1pbiA6IGJvb2xlYW47XG5cdGxhbmd1YWdlIDogS2FsdHVyYUxhbmd1YWdlQ29kZTtcblx0cmVhZG9ubHkgbGFzdExvZ2luVGltZSA6IG51bWJlcjtcblx0cmVhZG9ubHkgc3RhdHVzVXBkYXRlZEF0IDogbnVtYmVyO1xuXHRyZWFkb25seSBkZWxldGVkQXQgOiBEYXRlO1xuXHRsb2dpbkVuYWJsZWQgOiBib29sZWFuO1xuXHRyb2xlSWRzIDogc3RyaW5nO1xuXHRyZWFkb25seSByb2xlTmFtZXMgOiBzdHJpbmc7XG5cdGlzQWNjb3VudE93bmVyIDogYm9vbGVhbjtcblx0YWxsb3dlZFBhcnRuZXJJZHMgOiBzdHJpbmc7XG5cdGFsbG93ZWRQYXJ0bmVyUGFja2FnZXMgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFVc2VyQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFVc2VyJyB9LFxuXHRcdFx0XHRpZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRwYXJ0bmVySWQgOiB7IHR5cGUgOiAnbicsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHR0eXBlIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVVzZXJUeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFVc2VyVHlwZScgfSxcblx0XHRcdFx0c2NyZWVuTmFtZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRmdWxsTmFtZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRlbWFpbCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRkYXRlT2ZCaXJ0aCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRjb3VudHJ5IDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHN0YXRlIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGNpdHkgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0emlwIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHRodW1ibmFpbFVybCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRkZXNjcmlwdGlvbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR0YWdzIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGFkbWluVGFncyA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRnZW5kZXIgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhR2VuZGVyLCBzdWJUeXBlIDogJ0thbHR1cmFHZW5kZXInIH0sXG5cdFx0XHRcdHN0YXR1cyA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFVc2VyU3RhdHVzLCBzdWJUeXBlIDogJ0thbHR1cmFVc2VyU3RhdHVzJyB9LFxuXHRcdFx0XHRjcmVhdGVkQXQgOiB7IHR5cGUgOiAnZCcsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHR1cGRhdGVkQXQgOiB7IHR5cGUgOiAnZCcsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRwYXJ0bmVyRGF0YSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRpbmRleGVkUGFydG5lckRhdGFJbnQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0aW5kZXhlZFBhcnRuZXJEYXRhU3RyaW5nIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHN0b3JhZ2VTaXplIDogeyB0eXBlIDogJ24nLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0cGFzc3dvcmQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Zmlyc3ROYW1lIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGxhc3ROYW1lIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGlzQWRtaW4gOiB7IHR5cGUgOiAnYicgfSxcblx0XHRcdFx0bGFuZ3VhZ2UgOiB7IHR5cGUgOiAnZXMnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhTGFuZ3VhZ2VDb2RlLCBzdWJUeXBlIDogJ0thbHR1cmFMYW5ndWFnZUNvZGUnIH0sXG5cdFx0XHRcdGxhc3RMb2dpblRpbWUgOiB7IHR5cGUgOiAnbicsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRzdGF0dXNVcGRhdGVkQXQgOiB7IHR5cGUgOiAnbicsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRkZWxldGVkQXQgOiB7IHR5cGUgOiAnZCcsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRsb2dpbkVuYWJsZWQgOiB7IHR5cGUgOiAnYicgfSxcblx0XHRcdFx0cm9sZUlkcyA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRyb2xlTmFtZXMgOiB7IHR5cGUgOiAncycsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRpc0FjY291bnRPd25lciA6IHsgdHlwZSA6ICdiJyB9LFxuXHRcdFx0XHRhbGxvd2VkUGFydG5lcklkcyA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRhbGxvd2VkUGFydG5lclBhY2thZ2VzIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFVc2VyJ10gPSBLYWx0dXJhVXNlcjsiXX0=