/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
export class KalturaUser extends KalturaObjectBase {
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
    }
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVVzZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFVc2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsaUJBQWlCLEVBQXlCLE1BQU0sd0JBQXdCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1DbEYsTUFBTSxrQkFBbUIsU0FBUSxpQkFBaUI7Ozs7SUF3QzlDLFlBQVksSUFBdUI7UUFFL0IsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGFBQWEsRUFBRTtZQUNoRSxFQUFFLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ25CLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUMzQyxJQUFJLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLGVBQWUsRUFBRSxPQUFPLEVBQUcsaUJBQWlCLEVBQUU7WUFDekYsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMzQixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLEtBQUssRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDdEIsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1QixPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3hCLEtBQUssRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDdEIsSUFBSSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNyQixHQUFHLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3BCLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDN0IsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1QixJQUFJLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3JCLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDMUIsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxhQUFhLEVBQUUsT0FBTyxFQUFHLGVBQWUsRUFBRTtZQUN2RixNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLGlCQUFpQixFQUFFLE9BQU8sRUFBRyxtQkFBbUIsRUFBRTtZQUMvRixTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDM0MsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQzNDLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUIscUJBQXFCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3RDLHdCQUF3QixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QyxXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDN0MsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzFCLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN4QixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLG1CQUFtQixFQUFFLE9BQU8sRUFBRyxxQkFBcUIsRUFBRTtZQUNyRyxhQUFhLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDL0MsZUFBZSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQ2pELFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUMzQyxZQUFZLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzdCLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEIsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQzNDLGNBQWMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDL0IsaUJBQWlCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2xDLHNCQUFzQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUM5QixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsYUFBYSxDQUFDLEdBQUcsV0FBVyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFVc2VyVHlwZSB9IGZyb20gJy4vS2FsdHVyYVVzZXJUeXBlJztcbmltcG9ydCB7IEthbHR1cmFHZW5kZXIgfSBmcm9tICcuL0thbHR1cmFHZW5kZXInO1xuaW1wb3J0IHsgS2FsdHVyYVVzZXJTdGF0dXMgfSBmcm9tICcuL0thbHR1cmFVc2VyU3RhdHVzJztcbmltcG9ydCB7IEthbHR1cmFMYW5ndWFnZUNvZGUgfSBmcm9tICcuL0thbHR1cmFMYW5ndWFnZUNvZGUnO1xuaW1wb3J0IHsgS2FsdHVyYU9iamVjdEJhc2UsIEthbHR1cmFPYmplY3RCYXNlQXJncyB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFVc2VyQXJncyAgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZUFyZ3Mge1xuICAgIGlkPyA6IHN0cmluZztcblx0dHlwZT8gOiBLYWx0dXJhVXNlclR5cGU7XG5cdHNjcmVlbk5hbWU/IDogc3RyaW5nO1xuXHRmdWxsTmFtZT8gOiBzdHJpbmc7XG5cdGVtYWlsPyA6IHN0cmluZztcblx0ZGF0ZU9mQmlydGg/IDogbnVtYmVyO1xuXHRjb3VudHJ5PyA6IHN0cmluZztcblx0c3RhdGU/IDogc3RyaW5nO1xuXHRjaXR5PyA6IHN0cmluZztcblx0emlwPyA6IHN0cmluZztcblx0dGh1bWJuYWlsVXJsPyA6IHN0cmluZztcblx0ZGVzY3JpcHRpb24/IDogc3RyaW5nO1xuXHR0YWdzPyA6IHN0cmluZztcblx0YWRtaW5UYWdzPyA6IHN0cmluZztcblx0Z2VuZGVyPyA6IEthbHR1cmFHZW5kZXI7XG5cdHN0YXR1cz8gOiBLYWx0dXJhVXNlclN0YXR1cztcblx0cGFydG5lckRhdGE/IDogc3RyaW5nO1xuXHRpbmRleGVkUGFydG5lckRhdGFJbnQ/IDogbnVtYmVyO1xuXHRpbmRleGVkUGFydG5lckRhdGFTdHJpbmc/IDogc3RyaW5nO1xuXHRwYXNzd29yZD8gOiBzdHJpbmc7XG5cdGZpcnN0TmFtZT8gOiBzdHJpbmc7XG5cdGxhc3ROYW1lPyA6IHN0cmluZztcblx0aXNBZG1pbj8gOiBib29sZWFuO1xuXHRsYW5ndWFnZT8gOiBLYWx0dXJhTGFuZ3VhZ2VDb2RlO1xuXHRsb2dpbkVuYWJsZWQ/IDogYm9vbGVhbjtcblx0cm9sZUlkcz8gOiBzdHJpbmc7XG5cdGlzQWNjb3VudE93bmVyPyA6IGJvb2xlYW47XG5cdGFsbG93ZWRQYXJ0bmVySWRzPyA6IHN0cmluZztcblx0YWxsb3dlZFBhcnRuZXJQYWNrYWdlcz8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFVc2VyIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2Uge1xuXG4gICAgaWQgOiBzdHJpbmc7XG5cdHJlYWRvbmx5IHBhcnRuZXJJZCA6IG51bWJlcjtcblx0dHlwZSA6IEthbHR1cmFVc2VyVHlwZTtcblx0c2NyZWVuTmFtZSA6IHN0cmluZztcblx0ZnVsbE5hbWUgOiBzdHJpbmc7XG5cdGVtYWlsIDogc3RyaW5nO1xuXHRkYXRlT2ZCaXJ0aCA6IG51bWJlcjtcblx0Y291bnRyeSA6IHN0cmluZztcblx0c3RhdGUgOiBzdHJpbmc7XG5cdGNpdHkgOiBzdHJpbmc7XG5cdHppcCA6IHN0cmluZztcblx0dGh1bWJuYWlsVXJsIDogc3RyaW5nO1xuXHRkZXNjcmlwdGlvbiA6IHN0cmluZztcblx0dGFncyA6IHN0cmluZztcblx0YWRtaW5UYWdzIDogc3RyaW5nO1xuXHRnZW5kZXIgOiBLYWx0dXJhR2VuZGVyO1xuXHRzdGF0dXMgOiBLYWx0dXJhVXNlclN0YXR1cztcblx0cmVhZG9ubHkgY3JlYXRlZEF0IDogRGF0ZTtcblx0cmVhZG9ubHkgdXBkYXRlZEF0IDogRGF0ZTtcblx0cGFydG5lckRhdGEgOiBzdHJpbmc7XG5cdGluZGV4ZWRQYXJ0bmVyRGF0YUludCA6IG51bWJlcjtcblx0aW5kZXhlZFBhcnRuZXJEYXRhU3RyaW5nIDogc3RyaW5nO1xuXHRyZWFkb25seSBzdG9yYWdlU2l6ZSA6IG51bWJlcjtcblx0cGFzc3dvcmQgOiBzdHJpbmc7XG5cdGZpcnN0TmFtZSA6IHN0cmluZztcblx0bGFzdE5hbWUgOiBzdHJpbmc7XG5cdGlzQWRtaW4gOiBib29sZWFuO1xuXHRsYW5ndWFnZSA6IEthbHR1cmFMYW5ndWFnZUNvZGU7XG5cdHJlYWRvbmx5IGxhc3RMb2dpblRpbWUgOiBudW1iZXI7XG5cdHJlYWRvbmx5IHN0YXR1c1VwZGF0ZWRBdCA6IG51bWJlcjtcblx0cmVhZG9ubHkgZGVsZXRlZEF0IDogRGF0ZTtcblx0bG9naW5FbmFibGVkIDogYm9vbGVhbjtcblx0cm9sZUlkcyA6IHN0cmluZztcblx0cmVhZG9ubHkgcm9sZU5hbWVzIDogc3RyaW5nO1xuXHRpc0FjY291bnRPd25lciA6IGJvb2xlYW47XG5cdGFsbG93ZWRQYXJ0bmVySWRzIDogc3RyaW5nO1xuXHRhbGxvd2VkUGFydG5lclBhY2thZ2VzIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhVXNlckFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhVXNlcicgfSxcblx0XHRcdFx0aWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cGFydG5lcklkIDogeyB0eXBlIDogJ24nLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0dHlwZSA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFVc2VyVHlwZSwgc3ViVHlwZSA6ICdLYWx0dXJhVXNlclR5cGUnIH0sXG5cdFx0XHRcdHNjcmVlbk5hbWUgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZnVsbE5hbWUgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZW1haWwgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZGF0ZU9mQmlydGggOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0Y291bnRyeSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzdGF0ZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRjaXR5IDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHppcCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR0aHVtYm5haWxVcmwgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZGVzY3JpcHRpb24gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0dGFncyA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRhZG1pblRhZ3MgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Z2VuZGVyIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUdlbmRlciwgc3ViVHlwZSA6ICdLYWx0dXJhR2VuZGVyJyB9LFxuXHRcdFx0XHRzdGF0dXMgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhVXNlclN0YXR1cywgc3ViVHlwZSA6ICdLYWx0dXJhVXNlclN0YXR1cycgfSxcblx0XHRcdFx0Y3JlYXRlZEF0IDogeyB0eXBlIDogJ2QnLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0dXBkYXRlZEF0IDogeyB0eXBlIDogJ2QnLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0cGFydG5lckRhdGEgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0aW5kZXhlZFBhcnRuZXJEYXRhSW50IDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGluZGV4ZWRQYXJ0bmVyRGF0YVN0cmluZyA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzdG9yYWdlU2l6ZSA6IHsgdHlwZSA6ICduJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdHBhc3N3b3JkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGZpcnN0TmFtZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRsYXN0TmFtZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRpc0FkbWluIDogeyB0eXBlIDogJ2InIH0sXG5cdFx0XHRcdGxhbmd1YWdlIDogeyB0eXBlIDogJ2VzJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUxhbmd1YWdlQ29kZSwgc3ViVHlwZSA6ICdLYWx0dXJhTGFuZ3VhZ2VDb2RlJyB9LFxuXHRcdFx0XHRsYXN0TG9naW5UaW1lIDogeyB0eXBlIDogJ24nLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0c3RhdHVzVXBkYXRlZEF0IDogeyB0eXBlIDogJ24nLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0ZGVsZXRlZEF0IDogeyB0eXBlIDogJ2QnLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0bG9naW5FbmFibGVkIDogeyB0eXBlIDogJ2InIH0sXG5cdFx0XHRcdHJvbGVJZHMgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cm9sZU5hbWVzIDogeyB0eXBlIDogJ3MnLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0aXNBY2NvdW50T3duZXIgOiB7IHR5cGUgOiAnYicgfSxcblx0XHRcdFx0YWxsb3dlZFBhcnRuZXJJZHMgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0YWxsb3dlZFBhcnRuZXJQYWNrYWdlcyA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhVXNlciddID0gS2FsdHVyYVVzZXI7Il19