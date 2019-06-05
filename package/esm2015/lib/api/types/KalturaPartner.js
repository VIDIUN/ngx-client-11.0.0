/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
export class KalturaPartner extends KalturaObjectBase {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data);
        if (typeof this.additionalParams === 'undefined')
            this.additionalParams = [];
        if (typeof this.deliveryTypes === 'undefined')
            this.deliveryTypes = [];
        if (typeof this.embedCodeTypes === 'undefined')
            this.embedCodeTypes = [];
        if (typeof this.eSearchLanguages === 'undefined')
            this.eSearchLanguages = [];
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
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
    }
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVBhcnRuZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFQYXJ0bmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDdEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDMUQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3BELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3hFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzFFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBeUIsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0NsRixNQUFNLHFCQUFzQixTQUFRLGlCQUFpQjs7OztJQTREakQsWUFBWSxJQUEwQjtRQUVsQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDWixFQUFFLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsS0FBSyxXQUFXLENBQUM7WUFBQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO1FBQ25GLEVBQUUsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLGFBQWEsS0FBSyxXQUFXLENB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LEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7U0FDMUMsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLGNBQWMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhQ29tbWVyY2lhbFVzZVR5cGUgfSBmcm9tICcuL0thbHR1cmFDb21tZXJjaWFsVXNlVHlwZSc7XG5pbXBvcnQgeyBLYWx0dXJhUGFydG5lclR5cGUgfSBmcm9tICcuL0thbHR1cmFQYXJ0bmVyVHlwZSc7XG5pbXBvcnQgeyBLYWx0dXJhUGFydG5lclN0YXR1cyB9IGZyb20gJy4vS2FsdHVyYVBhcnRuZXJTdGF0dXMnO1xuaW1wb3J0IHsgS2FsdHVyYUtleVZhbHVlIH0gZnJvbSAnLi9LYWx0dXJhS2V5VmFsdWUnO1xuaW1wb3J0IHsgS2FsdHVyYVBhcnRuZXJHcm91cFR5cGUgfSBmcm9tICcuL0thbHR1cmFQYXJ0bmVyR3JvdXBUeXBlJztcbmltcG9ydCB7IEthbHR1cmFQbGF5ZXJEZWxpdmVyeVR5cGUgfSBmcm9tICcuL0thbHR1cmFQbGF5ZXJEZWxpdmVyeVR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYVBsYXllckVtYmVkQ29kZVR5cGUgfSBmcm9tICcuL0thbHR1cmFQbGF5ZXJFbWJlZENvZGVUeXBlJztcbmltcG9ydCB7IEthbHR1cmFFU2VhcmNoTGFuZ3VhZ2VJdGVtIH0gZnJvbSAnLi9LYWx0dXJhRVNlYXJjaExhbmd1YWdlSXRlbSc7XG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0QmFzZSwgS2FsdHVyYU9iamVjdEJhc2VBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYVBhcnRuZXJBcmdzICBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlQXJncyB7XG4gICAgbmFtZT8gOiBzdHJpbmc7XG5cdHdlYnNpdGU/IDogc3RyaW5nO1xuXHRub3RpZmljYXRpb25Vcmw/IDogc3RyaW5nO1xuXHRhcHBlYXJJblNlYXJjaD8gOiBudW1iZXI7XG5cdGFkbWluTmFtZT8gOiBzdHJpbmc7XG5cdGFkbWluRW1haWw/IDogc3RyaW5nO1xuXHRkZXNjcmlwdGlvbj8gOiBzdHJpbmc7XG5cdGNvbW1lcmNpYWxVc2U/IDogS2FsdHVyYUNvbW1lcmNpYWxVc2VUeXBlO1xuXHRsYW5kaW5nUGFnZT8gOiBzdHJpbmc7XG5cdHVzZXJMYW5kaW5nUGFnZT8gOiBzdHJpbmc7XG5cdGNvbnRlbnRDYXRlZ29yaWVzPyA6IHN0cmluZztcblx0dHlwZT8gOiBLYWx0dXJhUGFydG5lclR5cGU7XG5cdHBob25lPyA6IHN0cmluZztcblx0ZGVzY3JpYmVZb3Vyc2VsZj8gOiBzdHJpbmc7XG5cdGFkdWx0Q29udGVudD8gOiBib29sZWFuO1xuXHRkZWZDb252ZXJzaW9uUHJvZmlsZVR5cGU/IDogc3RyaW5nO1xuXHRub3RpZnk/IDogbnVtYmVyO1xuXHRhbGxvd1F1aWNrRWRpdD8gOiBudW1iZXI7XG5cdG1lcmdlRW50cnlMaXN0cz8gOiBudW1iZXI7XG5cdG5vdGlmaWNhdGlvbnNDb25maWc/IDogc3RyaW5nO1xuXHRtYXhVcGxvYWRTaXplPyA6IG51bWJlcjtcblx0cGFydG5lclBhY2thZ2U/IDogbnVtYmVyO1xuXHRhbGxvd011bHRpTm90aWZpY2F0aW9uPyA6IG51bWJlcjtcblx0YWRtaW5Vc2VySWQ/IDogc3RyaW5nO1xuXHRmaXJzdE5hbWU/IDogc3RyaW5nO1xuXHRsYXN0TmFtZT8gOiBzdHJpbmc7XG5cdGNvdW50cnk/IDogc3RyaW5nO1xuXHRzdGF0ZT8gOiBzdHJpbmc7XG5cdGFkZGl0aW9uYWxQYXJhbXM/IDogS2FsdHVyYUtleVZhbHVlW107XG5cdHBhcnRuZXJQYXJlbnRJZD8gOiBudW1iZXI7XG5cdHJlZmVyZW5jZUlkPyA6IHN0cmluZztcblx0ZVNlYXJjaExhbmd1YWdlcz8gOiBLYWx0dXJhRVNlYXJjaExhbmd1YWdlSXRlbVtdO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhUGFydG5lciBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlIHtcblxuICAgIHJlYWRvbmx5IGlkIDogbnVtYmVyO1xuXHRuYW1lIDogc3RyaW5nO1xuXHR3ZWJzaXRlIDogc3RyaW5nO1xuXHRub3RpZmljYXRpb25VcmwgOiBzdHJpbmc7XG5cdGFwcGVhckluU2VhcmNoIDogbnVtYmVyO1xuXHRyZWFkb25seSBjcmVhdGVkQXQgOiBEYXRlO1xuXHRhZG1pbk5hbWUgOiBzdHJpbmc7XG5cdGFkbWluRW1haWwgOiBzdHJpbmc7XG5cdGRlc2NyaXB0aW9uIDogc3RyaW5nO1xuXHRjb21tZXJjaWFsVXNlIDogS2FsdHVyYUNvbW1lcmNpYWxVc2VUeXBlO1xuXHRsYW5kaW5nUGFnZSA6IHN0cmluZztcblx0dXNlckxhbmRpbmdQYWdlIDogc3RyaW5nO1xuXHRjb250ZW50Q2F0ZWdvcmllcyA6IHN0cmluZztcblx0dHlwZSA6IEthbHR1cmFQYXJ0bmVyVHlwZTtcblx0cGhvbmUgOiBzdHJpbmc7XG5cdGRlc2NyaWJlWW91cnNlbGYgOiBzdHJpbmc7XG5cdGFkdWx0Q29udGVudCA6IGJvb2xlYW47XG5cdGRlZkNvbnZlcnNpb25Qcm9maWxlVHlwZSA6IHN0cmluZztcblx0bm90aWZ5IDogbnVtYmVyO1xuXHRyZWFkb25seSBzdGF0dXMgOiBLYWx0dXJhUGFydG5lclN0YXR1cztcblx0YWxsb3dRdWlja0VkaXQgOiBudW1iZXI7XG5cdG1lcmdlRW50cnlMaXN0cyA6IG51bWJlcjtcblx0bm90aWZpY2F0aW9uc0NvbmZpZyA6IHN0cmluZztcblx0bWF4VXBsb2FkU2l6ZSA6IG51bWJlcjtcblx0cGFydG5lclBhY2thZ2UgOiBudW1iZXI7XG5cdHJlYWRvbmx5IHNlY3JldCA6IHN0cmluZztcblx0cmVhZG9ubHkgYWRtaW5TZWNyZXQgOiBzdHJpbmc7XG5cdHJlYWRvbmx5IGNtc1Bhc3N3b3JkIDogc3RyaW5nO1xuXHRhbGxvd011bHRpTm90aWZpY2F0aW9uIDogbnVtYmVyO1xuXHRyZWFkb25seSBhZG1pbkxvZ2luVXNlcnNRdW90YSA6IG51bWJlcjtcblx0YWRtaW5Vc2VySWQgOiBzdHJpbmc7XG5cdGZpcnN0TmFtZSA6IHN0cmluZztcblx0bGFzdE5hbWUgOiBzdHJpbmc7XG5cdGNvdW50cnkgOiBzdHJpbmc7XG5cdHN0YXRlIDogc3RyaW5nO1xuXHRhZGRpdGlvbmFsUGFyYW1zIDogS2FsdHVyYUtleVZhbHVlW107XG5cdHJlYWRvbmx5IHB1Ymxpc2hlcnNRdW90YSA6IG51bWJlcjtcblx0cmVhZG9ubHkgcGFydG5lckdyb3VwVHlwZSA6IEthbHR1cmFQYXJ0bmVyR3JvdXBUeXBlO1xuXHRyZWFkb25seSBkZWZhdWx0RW50aXRsZW1lbnRFbmZvcmNlbWVudCA6IGJvb2xlYW47XG5cdHJlYWRvbmx5IGRlZmF1bHREZWxpdmVyeVR5cGUgOiBzdHJpbmc7XG5cdHJlYWRvbmx5IGRlZmF1bHRFbWJlZENvZGVUeXBlIDogc3RyaW5nO1xuXHRyZWFkb25seSBkZWxpdmVyeVR5cGVzIDogS2FsdHVyYVBsYXllckRlbGl2ZXJ5VHlwZVtdO1xuXHRyZWFkb25seSBlbWJlZENvZGVUeXBlcyA6IEthbHR1cmFQbGF5ZXJFbWJlZENvZGVUeXBlW107XG5cdHJlYWRvbmx5IHRlbXBsYXRlUGFydG5lcklkIDogbnVtYmVyO1xuXHRyZWFkb25seSBpZ25vcmVTZW9MaW5rcyA6IGJvb2xlYW47XG5cdHJlYWRvbmx5IGhvc3QgOiBzdHJpbmc7XG5cdHJlYWRvbmx5IGNkbkhvc3QgOiBzdHJpbmc7XG5cdHJlYWRvbmx5IGlzRmlyc3RMb2dpbiA6IGJvb2xlYW47XG5cdHJlYWRvbmx5IGxvZ291dFVybCA6IHN0cmluZztcblx0cGFydG5lclBhcmVudElkIDogbnVtYmVyO1xuXHRyZWFkb25seSBjcm1JZCA6IHN0cmluZztcblx0cmVmZXJlbmNlSWQgOiBzdHJpbmc7XG5cdHJlYWRvbmx5IHRpbWVBbGlnbmVkUmVuZGl0aW9ucyA6IGJvb2xlYW47XG5cdGVTZWFyY2hMYW5ndWFnZXMgOiBLYWx0dXJhRVNlYXJjaExhbmd1YWdlSXRlbVtdO1xuXHRyZWFkb25seSBwdWJsaXNoZXJFbnZpcm9ubWVudFR5cGUgOiBudW1iZXI7XG5cdHJlYWRvbmx5IG92cEVudmlyb25tZW50VXJsIDogc3RyaW5nO1xuXHRyZWFkb25seSBvdHRFbnZpcm9ubWVudFVybCA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYVBhcnRuZXJBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5hZGRpdGlvbmFsUGFyYW1zID09PSAndW5kZWZpbmVkJykgdGhpcy5hZGRpdGlvbmFsUGFyYW1zID0gW107XG5cdFx0aWYgKHR5cGVvZiB0aGlzLmRlbGl2ZXJ5VHlwZXMgPT09ICd1bmRlZmluZWQnKSB0aGlzLmRlbGl2ZXJ5VHlwZXMgPSBbXTtcblx0XHRpZiAodHlwZW9mIHRoaXMuZW1iZWRDb2RlVHlwZXMgPT09ICd1bmRlZmluZWQnKSB0aGlzLmVtYmVkQ29kZVR5cGVzID0gW107XG5cdFx0aWYgKHR5cGVvZiB0aGlzLmVTZWFyY2hMYW5ndWFnZXMgPT09ICd1bmRlZmluZWQnKSB0aGlzLmVTZWFyY2hMYW5ndWFnZXMgPSBbXTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhUGFydG5lcicgfSxcblx0XHRcdFx0aWQgOiB7IHR5cGUgOiAnbicsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRuYW1lIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHdlYnNpdGUgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0bm90aWZpY2F0aW9uVXJsIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGFwcGVhckluU2VhcmNoIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGNyZWF0ZWRBdCA6IHsgdHlwZSA6ICdkJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdGFkbWluTmFtZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRhZG1pbkVtYWlsIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGRlc2NyaXB0aW9uIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGNvbW1lcmNpYWxVc2UgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhQ29tbWVyY2lhbFVzZVR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYUNvbW1lcmNpYWxVc2VUeXBlJyB9LFxuXHRcdFx0XHRsYW5kaW5nUGFnZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR1c2VyTGFuZGluZ1BhZ2UgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Y29udGVudENhdGVnb3JpZXMgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0dHlwZSA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFQYXJ0bmVyVHlwZSwgc3ViVHlwZSA6ICdLYWx0dXJhUGFydG5lclR5cGUnIH0sXG5cdFx0XHRcdHBob25lIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGRlc2NyaWJlWW91cnNlbGYgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0YWR1bHRDb250ZW50IDogeyB0eXBlIDogJ2InIH0sXG5cdFx0XHRcdGRlZkNvbnZlcnNpb25Qcm9maWxlVHlwZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRub3RpZnkgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0c3RhdHVzIDogeyB0eXBlIDogJ2VuJywgcmVhZE9ubHkgOiB0cnVlLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhUGFydG5lclN0YXR1cywgc3ViVHlwZSA6ICdLYWx0dXJhUGFydG5lclN0YXR1cycgfSxcblx0XHRcdFx0YWxsb3dRdWlja0VkaXQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0bWVyZ2VFbnRyeUxpc3RzIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdG5vdGlmaWNhdGlvbnNDb25maWcgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0bWF4VXBsb2FkU2l6ZSA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRwYXJ0bmVyUGFja2FnZSA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRzZWNyZXQgOiB7IHR5cGUgOiAncycsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRhZG1pblNlY3JldCA6IHsgdHlwZSA6ICdzJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdGNtc1Bhc3N3b3JkIDogeyB0eXBlIDogJ3MnLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0YWxsb3dNdWx0aU5vdGlmaWNhdGlvbiA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRhZG1pbkxvZ2luVXNlcnNRdW90YSA6IHsgdHlwZSA6ICduJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdGFkbWluVXNlcklkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGZpcnN0TmFtZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRsYXN0TmFtZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRjb3VudHJ5IDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHN0YXRlIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGFkZGl0aW9uYWxQYXJhbXMgOiB7IHR5cGUgOiAnYScsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFLZXlWYWx1ZSwgc3ViVHlwZSA6ICdLYWx0dXJhS2V5VmFsdWUnIH0sXG5cdFx0XHRcdHB1Ymxpc2hlcnNRdW90YSA6IHsgdHlwZSA6ICduJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdHBhcnRuZXJHcm91cFR5cGUgOiB7IHR5cGUgOiAnZW4nLCByZWFkT25seSA6IHRydWUsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFQYXJ0bmVyR3JvdXBUeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFQYXJ0bmVyR3JvdXBUeXBlJyB9LFxuXHRcdFx0XHRkZWZhdWx0RW50aXRsZW1lbnRFbmZvcmNlbWVudCA6IHsgdHlwZSA6ICdiJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdGRlZmF1bHREZWxpdmVyeVR5cGUgOiB7IHR5cGUgOiAncycsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRkZWZhdWx0RW1iZWRDb2RlVHlwZSA6IHsgdHlwZSA6ICdzJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdGRlbGl2ZXJ5VHlwZXMgOiB7IHR5cGUgOiAnYScsIHJlYWRPbmx5IDogdHJ1ZSwgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVBsYXllckRlbGl2ZXJ5VHlwZSwgc3ViVHlwZSA6ICdLYWx0dXJhUGxheWVyRGVsaXZlcnlUeXBlJyB9LFxuXHRcdFx0XHRlbWJlZENvZGVUeXBlcyA6IHsgdHlwZSA6ICdhJywgcmVhZE9ubHkgOiB0cnVlLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhUGxheWVyRW1iZWRDb2RlVHlwZSwgc3ViVHlwZSA6ICdLYWx0dXJhUGxheWVyRW1iZWRDb2RlVHlwZScgfSxcblx0XHRcdFx0dGVtcGxhdGVQYXJ0bmVySWQgOiB7IHR5cGUgOiAnbicsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRpZ25vcmVTZW9MaW5rcyA6IHsgdHlwZSA6ICdiJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdGhvc3QgOiB7IHR5cGUgOiAncycsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRjZG5Ib3N0IDogeyB0eXBlIDogJ3MnLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0aXNGaXJzdExvZ2luIDogeyB0eXBlIDogJ2InLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0bG9nb3V0VXJsIDogeyB0eXBlIDogJ3MnLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0cGFydG5lclBhcmVudElkIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGNybUlkIDogeyB0eXBlIDogJ3MnLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0cmVmZXJlbmNlSWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0dGltZUFsaWduZWRSZW5kaXRpb25zIDogeyB0eXBlIDogJ2InLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0ZVNlYXJjaExhbmd1YWdlcyA6IHsgdHlwZSA6ICdhJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUVTZWFyY2hMYW5ndWFnZUl0ZW0sIHN1YlR5cGUgOiAnS2FsdHVyYUVTZWFyY2hMYW5ndWFnZUl0ZW0nIH0sXG5cdFx0XHRcdHB1Ymxpc2hlckVudmlyb25tZW50VHlwZSA6IHsgdHlwZSA6ICduJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdG92cEVudmlyb25tZW50VXJsIDogeyB0eXBlIDogJ3MnLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0b3R0RW52aXJvbm1lbnRVcmwgOiB7IHR5cGUgOiAncycsIHJlYWRPbmx5IDogdHJ1ZSB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhUGFydG5lciddID0gS2FsdHVyYVBhcnRuZXI7Il19