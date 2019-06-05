/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaCommercialUseType } from './KalturaCommercialUseType';
import { KalturaPartnerType } from './KalturaPartnerType';
import { KalturaPartnerStatus } from './KalturaPartnerStatus';
import { KalturaKeyValue } from './KalturaKeyValue';
import { KalturaPartnerGroupType } from './KalturaPartnerGroupType';
import { KalturaPlayerDeliveryType } from './KalturaPlayerDeliveryType';
import { KalturaPlayerEmbedCodeType } from './KalturaPlayerEmbedCodeType';
import { KalturaESearchLanguageItem } from './KalturaESearchLanguageItem';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaPartnerArgs() { }
/** @type {?|undefined} */
KalturaPartnerArgs.prototype.name;
/** @type {?|undefined} */
KalturaPartnerArgs.prototype.website;
/** @type {?|undefined} */
KalturaPartnerArgs.prototype.notificationUrl;
/** @type {?|undefined} */
KalturaPartnerArgs.prototype.appearInSearch;
/** @type {?|undefined} */
KalturaPartnerArgs.prototype.adminName;
/** @type {?|undefined} */
KalturaPartnerArgs.prototype.adminEmail;
/** @type {?|undefined} */
KalturaPartnerArgs.prototype.description;
/** @type {?|undefined} */
KalturaPartnerArgs.prototype.commercialUse;
/** @type {?|undefined} */
KalturaPartnerArgs.prototype.landingPage;
/** @type {?|undefined} */
KalturaPartnerArgs.prototype.userLandingPage;
/** @type {?|undefined} */
KalturaPartnerArgs.prototype.contentCategories;
/** @type {?|undefined} */
KalturaPartnerArgs.prototype.type;
/** @type {?|undefined} */
KalturaPartnerArgs.prototype.phone;
/** @type {?|undefined} */
KalturaPartnerArgs.prototype.describeYourself;
/** @type {?|undefined} */
KalturaPartnerArgs.prototype.adultContent;
/** @type {?|undefined} */
KalturaPartnerArgs.prototype.defConversionProfileType;
/** @type {?|undefined} */
KalturaPartnerArgs.prototype.notify;
/** @type {?|undefined} */
KalturaPartnerArgs.prototype.allowQuickEdit;
/** @type {?|undefined} */
KalturaPartnerArgs.prototype.mergeEntryLists;
/** @type {?|undefined} */
KalturaPartnerArgs.prototype.notificationsConfig;
/** @type {?|undefined} */
KalturaPartnerArgs.prototype.maxUploadSize;
/** @type {?|undefined} */
KalturaPartnerArgs.prototype.partnerPackage;
/** @type {?|undefined} */
KalturaPartnerArgs.prototype.allowMultiNotification;
/** @type {?|undefined} */
KalturaPartnerArgs.prototype.adminUserId;
/** @type {?|undefined} */
KalturaPartnerArgs.prototype.firstName;
/** @type {?|undefined} */
KalturaPartnerArgs.prototype.lastName;
/** @type {?|undefined} */
KalturaPartnerArgs.prototype.country;
/** @type {?|undefined} */
KalturaPartnerArgs.prototype.state;
/** @type {?|undefined} */
KalturaPartnerArgs.prototype.additionalParams;
/** @type {?|undefined} */
KalturaPartnerArgs.prototype.partnerParentId;
/** @type {?|undefined} */
KalturaPartnerArgs.prototype.referenceId;
/** @type {?|undefined} */
KalturaPartnerArgs.prototype.eSearchLanguages;
var KalturaPartner = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaPartner, _super);
    function KalturaPartner(data) {
        var _this = _super.call(this, data) || this;
        if (typeof _this.additionalParams === 'undefined')
            _this.additionalParams = [];
        if (typeof _this.deliveryTypes === 'undefined')
            _this.deliveryTypes = [];
        if (typeof _this.embedCodeTypes === 'undefined')
            _this.embedCodeTypes = [];
        if (typeof _this.eSearchLanguages === 'undefined')
            _this.eSearchLanguages = [];
        return _this;
    }
    /**
     * @return {?}
     */
    KalturaPartner.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaPartner' },
            id: { type: 'n', readOnly: true },
            name: { type: 's' },
            website: { type: 's' },
            notificationUrl: { type: 's' },
            appearInSearch: { type: 'n' },
            createdAt: { type: 'd', readOnly: true },
            adminName: { type: 's' },
            adminEmail: { type: 's' },
            description: { type: 's' },
            commercialUse: { type: 'en', subTypeConstructor: KalturaCommercialUseType, subType: 'KalturaCommercialUseType' },
            landingPage: { type: 's' },
            userLandingPage: { type: 's' },
            contentCategories: { type: 's' },
            type: { type: 'en', subTypeConstructor: KalturaPartnerType, subType: 'KalturaPartnerType' },
            phone: { type: 's' },
            describeYourself: { type: 's' },
            adultContent: { type: 'b' },
            defConversionProfileType: { type: 's' },
            notify: { type: 'n' },
            status: { type: 'en', readOnly: true, subTypeConstructor: KalturaPartnerStatus, subType: 'KalturaPartnerStatus' },
            allowQuickEdit: { type: 'n' },
            mergeEntryLists: { type: 'n' },
            notificationsConfig: { type: 's' },
            maxUploadSize: { type: 'n' },
            partnerPackage: { type: 'n' },
            secret: { type: 's', readOnly: true },
            adminSecret: { type: 's', readOnly: true },
            cmsPassword: { type: 's', readOnly: true },
            allowMultiNotification: { type: 'n' },
            adminLoginUsersQuota: { type: 'n', readOnly: true },
            adminUserId: { type: 's' },
            firstName: { type: 's' },
            lastName: { type: 's' },
            country: { type: 's' },
            state: { type: 's' },
            additionalParams: { type: 'a', subTypeConstructor: KalturaKeyValue, subType: 'KalturaKeyValue' },
            publishersQuota: { type: 'n', readOnly: true },
            partnerGroupType: { type: 'en', readOnly: true, subTypeConstructor: KalturaPartnerGroupType, subType: 'KalturaPartnerGroupType' },
            defaultEntitlementEnforcement: { type: 'b', readOnly: true },
            defaultDeliveryType: { type: 's', readOnly: true },
            defaultEmbedCodeType: { type: 's', readOnly: true },
            deliveryTypes: { type: 'a', readOnly: true, subTypeConstructor: KalturaPlayerDeliveryType, subType: 'KalturaPlayerDeliveryType' },
            embedCodeTypes: { type: 'a', readOnly: true, subTypeConstructor: KalturaPlayerEmbedCodeType, subType: 'KalturaPlayerEmbedCodeType' },
            templatePartnerId: { type: 'n', readOnly: true },
            ignoreSeoLinks: { type: 'b', readOnly: true },
            host: { type: 's', readOnly: true },
            cdnHost: { type: 's', readOnly: true },
            isFirstLogin: { type: 'b', readOnly: true },
            logoutUrl: { type: 's', readOnly: true },
            partnerParentId: { type: 'n' },
            crmId: { type: 's', readOnly: true },
            referenceId: { type: 's' },
            timeAlignedRenditions: { type: 'b', readOnly: true },
            eSearchLanguages: { type: 'a', subTypeConstructor: KalturaESearchLanguageItem, subType: 'KalturaESearchLanguageItem' },
            publisherEnvironmentType: { type: 'n', readOnly: true },
            ovpEnvironmentUrl: { type: 's', readOnly: true },
            ottEnvironmentUrl: { type: 's', readOnly: true }
        });
        return result;
    };
    return KalturaPartner;
}(KalturaObjectBase));
export { KalturaPartner };
if (false) {
    /** @type {?} */
    KalturaPartner.prototype.id;
    /** @type {?} */
    KalturaPartner.prototype.name;
    /** @type {?} */
    KalturaPartner.prototype.website;
    /** @type {?} */
    KalturaPartner.prototype.notificationUrl;
    /** @type {?} */
    KalturaPartner.prototype.appearInSearch;
    /** @type {?} */
    KalturaPartner.prototype.createdAt;
    /** @type {?} */
    KalturaPartner.prototype.adminName;
    /** @type {?} */
    KalturaPartner.prototype.adminEmail;
    /** @type {?} */
    KalturaPartner.prototype.description;
    /** @type {?} */
    KalturaPartner.prototype.commercialUse;
    /** @type {?} */
    KalturaPartner.prototype.landingPage;
    /** @type {?} */
    KalturaPartner.prototype.userLandingPage;
    /** @type {?} */
    KalturaPartner.prototype.contentCategories;
    /** @type {?} */
    KalturaPartner.prototype.type;
    /** @type {?} */
    KalturaPartner.prototype.phone;
    /** @type {?} */
    KalturaPartner.prototype.describeYourself;
    /** @type {?} */
    KalturaPartner.prototype.adultContent;
    /** @type {?} */
    KalturaPartner.prototype.defConversionProfileType;
    /** @type {?} */
    KalturaPartner.prototype.notify;
    /** @type {?} */
    KalturaPartner.prototype.status;
    /** @type {?} */
    KalturaPartner.prototype.allowQuickEdit;
    /** @type {?} */
    KalturaPartner.prototype.mergeEntryLists;
    /** @type {?} */
    KalturaPartner.prototype.notificationsConfig;
    /** @type {?} */
    KalturaPartner.prototype.maxUploadSize;
    /** @type {?} */
    KalturaPartner.prototype.partnerPackage;
    /** @type {?} */
    KalturaPartner.prototype.secret;
    /** @type {?} */
    KalturaPartner.prototype.adminSecret;
    /** @type {?} */
    KalturaPartner.prototype.cmsPassword;
    /** @type {?} */
    KalturaPartner.prototype.allowMultiNotification;
    /** @type {?} */
    KalturaPartner.prototype.adminLoginUsersQuota;
    /** @type {?} */
    KalturaPartner.prototype.adminUserId;
    /** @type {?} */
    KalturaPartner.prototype.firstName;
    /** @type {?} */
    KalturaPartner.prototype.lastName;
    /** @type {?} */
    KalturaPartner.prototype.country;
    /** @type {?} */
    KalturaPartner.prototype.state;
    /** @type {?} */
    KalturaPartner.prototype.additionalParams;
    /** @type {?} */
    KalturaPartner.prototype.publishersQuota;
    /** @type {?} */
    KalturaPartner.prototype.partnerGroupType;
    /** @type {?} */
    KalturaPartner.prototype.defaultEntitlementEnforcement;
    /** @type {?} */
    KalturaPartner.prototype.defaultDeliveryType;
    /** @type {?} */
    KalturaPartner.prototype.defaultEmbedCodeType;
    /** @type {?} */
    KalturaPartner.prototype.deliveryTypes;
    /** @type {?} */
    KalturaPartner.prototype.embedCodeTypes;
    /** @type {?} */
    KalturaPartner.prototype.templatePartnerId;
    /** @type {?} */
    KalturaPartner.prototype.ignoreSeoLinks;
    /** @type {?} */
    KalturaPartner.prototype.host;
    /** @type {?} */
    KalturaPartner.prototype.cdnHost;
    /** @type {?} */
    KalturaPartner.prototype.isFirstLogin;
    /** @type {?} */
    KalturaPartner.prototype.logoutUrl;
    /** @type {?} */
    KalturaPartner.prototype.partnerParentId;
    /** @type {?} */
    KalturaPartner.prototype.crmId;
    /** @type {?} */
    KalturaPartner.prototype.referenceId;
    /** @type {?} */
    KalturaPartner.prototype.timeAlignedRenditions;
    /** @type {?} */
    KalturaPartner.prototype.eSearchLanguages;
    /** @type {?} */
    KalturaPartner.prototype.publisherEnvironmentType;
    /** @type {?} */
    KalturaPartner.prototype.ovpEnvironmentUrl;
    /** @type {?} */
    KalturaPartner.prototype.ottEnvironmentUrl;
}
typesMappingStorage['KalturaPartner'] = KalturaPartner;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVBhcnRuZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFQYXJ0bmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzFELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzlELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNwRSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUN4RSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMxRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMxRSxPQUFPLEVBQUUsaUJBQWlCLEVBQXlCLE1BQU0sd0JBQXdCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNDbEYsSUFBQTtJQUFvQywwQ0FBaUI7SUE0RGpELHdCQUFZLElBQTBCO1FBQXRDLFlBRUksa0JBQU0sSUFBSSxDQUFDLFNBS2Q7UUFKRyxFQUFFLENBQUMsQ0FBQyxPQUFPLEtBQUksQ0FBQyxnQkFBZ0IsS0FBSyxXQUFXLENBQUM7WUFBQyxLQUFJLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO1FBQ25GLEVBQUUsQ0FBQyxDQUFDLE9BQU8sS0FBSSxDQUFDLGFBQWEsS0FBSyxXQUFXLENBQUM7WUFB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RUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtTQUMxQyxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO3lCQXhMTDtFQWdEb0MsaUJBQWlCLEVBeUlwRCxDQUFBO0FBeklELDBCQXlJQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxjQUFjLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUNvbW1lcmNpYWxVc2VUeXBlIH0gZnJvbSAnLi9LYWx0dXJhQ29tbWVyY2lhbFVzZVR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYVBhcnRuZXJUeXBlIH0gZnJvbSAnLi9LYWx0dXJhUGFydG5lclR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYVBhcnRuZXJTdGF0dXMgfSBmcm9tICcuL0thbHR1cmFQYXJ0bmVyU3RhdHVzJztcbmltcG9ydCB7IEthbHR1cmFLZXlWYWx1ZSB9IGZyb20gJy4vS2FsdHVyYUtleVZhbHVlJztcbmltcG9ydCB7IEthbHR1cmFQYXJ0bmVyR3JvdXBUeXBlIH0gZnJvbSAnLi9LYWx0dXJhUGFydG5lckdyb3VwVHlwZSc7XG5pbXBvcnQgeyBLYWx0dXJhUGxheWVyRGVsaXZlcnlUeXBlIH0gZnJvbSAnLi9LYWx0dXJhUGxheWVyRGVsaXZlcnlUeXBlJztcbmltcG9ydCB7IEthbHR1cmFQbGF5ZXJFbWJlZENvZGVUeXBlIH0gZnJvbSAnLi9LYWx0dXJhUGxheWVyRW1iZWRDb2RlVHlwZSc7XG5pbXBvcnQgeyBLYWx0dXJhRVNlYXJjaExhbmd1YWdlSXRlbSB9IGZyb20gJy4vS2FsdHVyYUVTZWFyY2hMYW5ndWFnZUl0ZW0nO1xuaW1wb3J0IHsgS2FsdHVyYU9iamVjdEJhc2UsIEthbHR1cmFPYmplY3RCYXNlQXJncyB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFQYXJ0bmVyQXJncyAgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZUFyZ3Mge1xuICAgIG5hbWU/IDogc3RyaW5nO1xuXHR3ZWJzaXRlPyA6IHN0cmluZztcblx0bm90aWZpY2F0aW9uVXJsPyA6IHN0cmluZztcblx0YXBwZWFySW5TZWFyY2g/IDogbnVtYmVyO1xuXHRhZG1pbk5hbWU/IDogc3RyaW5nO1xuXHRhZG1pbkVtYWlsPyA6IHN0cmluZztcblx0ZGVzY3JpcHRpb24/IDogc3RyaW5nO1xuXHRjb21tZXJjaWFsVXNlPyA6IEthbHR1cmFDb21tZXJjaWFsVXNlVHlwZTtcblx0bGFuZGluZ1BhZ2U/IDogc3RyaW5nO1xuXHR1c2VyTGFuZGluZ1BhZ2U/IDogc3RyaW5nO1xuXHRjb250ZW50Q2F0ZWdvcmllcz8gOiBzdHJpbmc7XG5cdHR5cGU/IDogS2FsdHVyYVBhcnRuZXJUeXBlO1xuXHRwaG9uZT8gOiBzdHJpbmc7XG5cdGRlc2NyaWJlWW91cnNlbGY/IDogc3RyaW5nO1xuXHRhZHVsdENvbnRlbnQ/IDogYm9vbGVhbjtcblx0ZGVmQ29udmVyc2lvblByb2ZpbGVUeXBlPyA6IHN0cmluZztcblx0bm90aWZ5PyA6IG51bWJlcjtcblx0YWxsb3dRdWlja0VkaXQ/IDogbnVtYmVyO1xuXHRtZXJnZUVudHJ5TGlzdHM/IDogbnVtYmVyO1xuXHRub3RpZmljYXRpb25zQ29uZmlnPyA6IHN0cmluZztcblx0bWF4VXBsb2FkU2l6ZT8gOiBudW1iZXI7XG5cdHBhcnRuZXJQYWNrYWdlPyA6IG51bWJlcjtcblx0YWxsb3dNdWx0aU5vdGlmaWNhdGlvbj8gOiBudW1iZXI7XG5cdGFkbWluVXNlcklkPyA6IHN0cmluZztcblx0Zmlyc3ROYW1lPyA6IHN0cmluZztcblx0bGFzdE5hbWU/IDogc3RyaW5nO1xuXHRjb3VudHJ5PyA6IHN0cmluZztcblx0c3RhdGU/IDogc3RyaW5nO1xuXHRhZGRpdGlvbmFsUGFyYW1zPyA6IEthbHR1cmFLZXlWYWx1ZVtdO1xuXHRwYXJ0bmVyUGFyZW50SWQ/IDogbnVtYmVyO1xuXHRyZWZlcmVuY2VJZD8gOiBzdHJpbmc7XG5cdGVTZWFyY2hMYW5ndWFnZXM/IDogS2FsdHVyYUVTZWFyY2hMYW5ndWFnZUl0ZW1bXTtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYVBhcnRuZXIgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZSB7XG5cbiAgICByZWFkb25seSBpZCA6IG51bWJlcjtcblx0bmFtZSA6IHN0cmluZztcblx0d2Vic2l0ZSA6IHN0cmluZztcblx0bm90aWZpY2F0aW9uVXJsIDogc3RyaW5nO1xuXHRhcHBlYXJJblNlYXJjaCA6IG51bWJlcjtcblx0cmVhZG9ubHkgY3JlYXRlZEF0IDogRGF0ZTtcblx0YWRtaW5OYW1lIDogc3RyaW5nO1xuXHRhZG1pbkVtYWlsIDogc3RyaW5nO1xuXHRkZXNjcmlwdGlvbiA6IHN0cmluZztcblx0Y29tbWVyY2lhbFVzZSA6IEthbHR1cmFDb21tZXJjaWFsVXNlVHlwZTtcblx0bGFuZGluZ1BhZ2UgOiBzdHJpbmc7XG5cdHVzZXJMYW5kaW5nUGFnZSA6IHN0cmluZztcblx0Y29udGVudENhdGVnb3JpZXMgOiBzdHJpbmc7XG5cdHR5cGUgOiBLYWx0dXJhUGFydG5lclR5cGU7XG5cdHBob25lIDogc3RyaW5nO1xuXHRkZXNjcmliZVlvdXJzZWxmIDogc3RyaW5nO1xuXHRhZHVsdENvbnRlbnQgOiBib29sZWFuO1xuXHRkZWZDb252ZXJzaW9uUHJvZmlsZVR5cGUgOiBzdHJpbmc7XG5cdG5vdGlmeSA6IG51bWJlcjtcblx0cmVhZG9ubHkgc3RhdHVzIDogS2FsdHVyYVBhcnRuZXJTdGF0dXM7XG5cdGFsbG93UXVpY2tFZGl0IDogbnVtYmVyO1xuXHRtZXJnZUVudHJ5TGlzdHMgOiBudW1iZXI7XG5cdG5vdGlmaWNhdGlvbnNDb25maWcgOiBzdHJpbmc7XG5cdG1heFVwbG9hZFNpemUgOiBudW1iZXI7XG5cdHBhcnRuZXJQYWNrYWdlIDogbnVtYmVyO1xuXHRyZWFkb25seSBzZWNyZXQgOiBzdHJpbmc7XG5cdHJlYWRvbmx5IGFkbWluU2VjcmV0IDogc3RyaW5nO1xuXHRyZWFkb25seSBjbXNQYXNzd29yZCA6IHN0cmluZztcblx0YWxsb3dNdWx0aU5vdGlmaWNhdGlvbiA6IG51bWJlcjtcblx0cmVhZG9ubHkgYWRtaW5Mb2dpblVzZXJzUXVvdGEgOiBudW1iZXI7XG5cdGFkbWluVXNlcklkIDogc3RyaW5nO1xuXHRmaXJzdE5hbWUgOiBzdHJpbmc7XG5cdGxhc3ROYW1lIDogc3RyaW5nO1xuXHRjb3VudHJ5IDogc3RyaW5nO1xuXHRzdGF0ZSA6IHN0cmluZztcblx0YWRkaXRpb25hbFBhcmFtcyA6IEthbHR1cmFLZXlWYWx1ZVtdO1xuXHRyZWFkb25seSBwdWJsaXNoZXJzUXVvdGEgOiBudW1iZXI7XG5cdHJlYWRvbmx5IHBhcnRuZXJHcm91cFR5cGUgOiBLYWx0dXJhUGFydG5lckdyb3VwVHlwZTtcblx0cmVhZG9ubHkgZGVmYXVsdEVudGl0bGVtZW50RW5mb3JjZW1lbnQgOiBib29sZWFuO1xuXHRyZWFkb25seSBkZWZhdWx0RGVsaXZlcnlUeXBlIDogc3RyaW5nO1xuXHRyZWFkb25seSBkZWZhdWx0RW1iZWRDb2RlVHlwZSA6IHN0cmluZztcblx0cmVhZG9ubHkgZGVsaXZlcnlUeXBlcyA6IEthbHR1cmFQbGF5ZXJEZWxpdmVyeVR5cGVbXTtcblx0cmVhZG9ubHkgZW1iZWRDb2RlVHlwZXMgOiBLYWx0dXJhUGxheWVyRW1iZWRDb2RlVHlwZVtdO1xuXHRyZWFkb25seSB0ZW1wbGF0ZVBhcnRuZXJJZCA6IG51bWJlcjtcblx0cmVhZG9ubHkgaWdub3JlU2VvTGlua3MgOiBib29sZWFuO1xuXHRyZWFkb25seSBob3N0IDogc3RyaW5nO1xuXHRyZWFkb25seSBjZG5Ib3N0IDogc3RyaW5nO1xuXHRyZWFkb25seSBpc0ZpcnN0TG9naW4gOiBib29sZWFuO1xuXHRyZWFkb25seSBsb2dvdXRVcmwgOiBzdHJpbmc7XG5cdHBhcnRuZXJQYXJlbnRJZCA6IG51bWJlcjtcblx0cmVhZG9ubHkgY3JtSWQgOiBzdHJpbmc7XG5cdHJlZmVyZW5jZUlkIDogc3RyaW5nO1xuXHRyZWFkb25seSB0aW1lQWxpZ25lZFJlbmRpdGlvbnMgOiBib29sZWFuO1xuXHRlU2VhcmNoTGFuZ3VhZ2VzIDogS2FsdHVyYUVTZWFyY2hMYW5ndWFnZUl0ZW1bXTtcblx0cmVhZG9ubHkgcHVibGlzaGVyRW52aXJvbm1lbnRUeXBlIDogbnVtYmVyO1xuXHRyZWFkb25seSBvdnBFbnZpcm9ubWVudFVybCA6IHN0cmluZztcblx0cmVhZG9ubHkgb3R0RW52aXJvbm1lbnRVcmwgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFQYXJ0bmVyQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuYWRkaXRpb25hbFBhcmFtcyA9PT0gJ3VuZGVmaW5lZCcpIHRoaXMuYWRkaXRpb25hbFBhcmFtcyA9IFtdO1xuXHRcdGlmICh0eXBlb2YgdGhpcy5kZWxpdmVyeVR5cGVzID09PSAndW5kZWZpbmVkJykgdGhpcy5kZWxpdmVyeVR5cGVzID0gW107XG5cdFx0aWYgKHR5cGVvZiB0aGlzLmVtYmVkQ29kZVR5cGVzID09PSAndW5kZWZpbmVkJykgdGhpcy5lbWJlZENvZGVUeXBlcyA9IFtdO1xuXHRcdGlmICh0eXBlb2YgdGhpcy5lU2VhcmNoTGFuZ3VhZ2VzID09PSAndW5kZWZpbmVkJykgdGhpcy5lU2VhcmNoTGFuZ3VhZ2VzID0gW107XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYVBhcnRuZXInIH0sXG5cdFx0XHRcdGlkIDogeyB0eXBlIDogJ24nLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0bmFtZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR3ZWJzaXRlIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdG5vdGlmaWNhdGlvblVybCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRhcHBlYXJJblNlYXJjaCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRjcmVhdGVkQXQgOiB7IHR5cGUgOiAnZCcsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRhZG1pbk5hbWUgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0YWRtaW5FbWFpbCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRkZXNjcmlwdGlvbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRjb21tZXJjaWFsVXNlIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUNvbW1lcmNpYWxVc2VUeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFDb21tZXJjaWFsVXNlVHlwZScgfSxcblx0XHRcdFx0bGFuZGluZ1BhZ2UgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0dXNlckxhbmRpbmdQYWdlIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGNvbnRlbnRDYXRlZ29yaWVzIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHR5cGUgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhUGFydG5lclR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYVBhcnRuZXJUeXBlJyB9LFxuXHRcdFx0XHRwaG9uZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRkZXNjcmliZVlvdXJzZWxmIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGFkdWx0Q29udGVudCA6IHsgdHlwZSA6ICdiJyB9LFxuXHRcdFx0XHRkZWZDb252ZXJzaW9uUHJvZmlsZVR5cGUgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0bm90aWZ5IDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHN0YXR1cyA6IHsgdHlwZSA6ICdlbicsIHJlYWRPbmx5IDogdHJ1ZSwgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVBhcnRuZXJTdGF0dXMsIHN1YlR5cGUgOiAnS2FsdHVyYVBhcnRuZXJTdGF0dXMnIH0sXG5cdFx0XHRcdGFsbG93UXVpY2tFZGl0IDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdG1lcmdlRW50cnlMaXN0cyA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRub3RpZmljYXRpb25zQ29uZmlnIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdG1heFVwbG9hZFNpemUgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0cGFydG5lclBhY2thZ2UgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0c2VjcmV0IDogeyB0eXBlIDogJ3MnLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0YWRtaW5TZWNyZXQgOiB7IHR5cGUgOiAncycsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRjbXNQYXNzd29yZCA6IHsgdHlwZSA6ICdzJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdGFsbG93TXVsdGlOb3RpZmljYXRpb24gOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0YWRtaW5Mb2dpblVzZXJzUXVvdGEgOiB7IHR5cGUgOiAnbicsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRhZG1pblVzZXJJZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRmaXJzdE5hbWUgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0bGFzdE5hbWUgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Y291bnRyeSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzdGF0ZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRhZGRpdGlvbmFsUGFyYW1zIDogeyB0eXBlIDogJ2EnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhS2V5VmFsdWUsIHN1YlR5cGUgOiAnS2FsdHVyYUtleVZhbHVlJyB9LFxuXHRcdFx0XHRwdWJsaXNoZXJzUXVvdGEgOiB7IHR5cGUgOiAnbicsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRwYXJ0bmVyR3JvdXBUeXBlIDogeyB0eXBlIDogJ2VuJywgcmVhZE9ubHkgOiB0cnVlLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhUGFydG5lckdyb3VwVHlwZSwgc3ViVHlwZSA6ICdLYWx0dXJhUGFydG5lckdyb3VwVHlwZScgfSxcblx0XHRcdFx0ZGVmYXVsdEVudGl0bGVtZW50RW5mb3JjZW1lbnQgOiB7IHR5cGUgOiAnYicsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRkZWZhdWx0RGVsaXZlcnlUeXBlIDogeyB0eXBlIDogJ3MnLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0ZGVmYXVsdEVtYmVkQ29kZVR5cGUgOiB7IHR5cGUgOiAncycsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRkZWxpdmVyeVR5cGVzIDogeyB0eXBlIDogJ2EnLCByZWFkT25seSA6IHRydWUsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFQbGF5ZXJEZWxpdmVyeVR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYVBsYXllckRlbGl2ZXJ5VHlwZScgfSxcblx0XHRcdFx0ZW1iZWRDb2RlVHlwZXMgOiB7IHR5cGUgOiAnYScsIHJlYWRPbmx5IDogdHJ1ZSwgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVBsYXllckVtYmVkQ29kZVR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYVBsYXllckVtYmVkQ29kZVR5cGUnIH0sXG5cdFx0XHRcdHRlbXBsYXRlUGFydG5lcklkIDogeyB0eXBlIDogJ24nLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0aWdub3JlU2VvTGlua3MgOiB7IHR5cGUgOiAnYicsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRob3N0IDogeyB0eXBlIDogJ3MnLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0Y2RuSG9zdCA6IHsgdHlwZSA6ICdzJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdGlzRmlyc3RMb2dpbiA6IHsgdHlwZSA6ICdiJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdGxvZ291dFVybCA6IHsgdHlwZSA6ICdzJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdHBhcnRuZXJQYXJlbnRJZCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRjcm1JZCA6IHsgdHlwZSA6ICdzJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdHJlZmVyZW5jZUlkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHRpbWVBbGlnbmVkUmVuZGl0aW9ucyA6IHsgdHlwZSA6ICdiJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdGVTZWFyY2hMYW5ndWFnZXMgOiB7IHR5cGUgOiAnYScsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFFU2VhcmNoTGFuZ3VhZ2VJdGVtLCBzdWJUeXBlIDogJ0thbHR1cmFFU2VhcmNoTGFuZ3VhZ2VJdGVtJyB9LFxuXHRcdFx0XHRwdWJsaXNoZXJFbnZpcm9ubWVudFR5cGUgOiB7IHR5cGUgOiAnbicsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRvdnBFbnZpcm9ubWVudFVybCA6IHsgdHlwZSA6ICdzJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdG90dEVudmlyb25tZW50VXJsIDogeyB0eXBlIDogJ3MnLCByZWFkT25seSA6IHRydWUgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYVBhcnRuZXInXSA9IEthbHR1cmFQYXJ0bmVyOyJdfQ==