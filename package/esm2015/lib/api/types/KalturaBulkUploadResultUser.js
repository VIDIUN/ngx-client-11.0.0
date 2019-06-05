/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaBulkUploadResult } from './KalturaBulkUploadResult';
/**
 * @record
 */
export function KalturaBulkUploadResultUserArgs() { }
/** @type {?|undefined} */
KalturaBulkUploadResultUserArgs.prototype.userId;
/** @type {?|undefined} */
KalturaBulkUploadResultUserArgs.prototype.screenName;
/** @type {?|undefined} */
KalturaBulkUploadResultUserArgs.prototype.email;
/** @type {?|undefined} */
KalturaBulkUploadResultUserArgs.prototype.description;
/** @type {?|undefined} */
KalturaBulkUploadResultUserArgs.prototype.tags;
/** @type {?|undefined} */
KalturaBulkUploadResultUserArgs.prototype.dateOfBirth;
/** @type {?|undefined} */
KalturaBulkUploadResultUserArgs.prototype.country;
/** @type {?|undefined} */
KalturaBulkUploadResultUserArgs.prototype.state;
/** @type {?|undefined} */
KalturaBulkUploadResultUserArgs.prototype.city;
/** @type {?|undefined} */
KalturaBulkUploadResultUserArgs.prototype.zip;
/** @type {?|undefined} */
KalturaBulkUploadResultUserArgs.prototype.gender;
/** @type {?|undefined} */
KalturaBulkUploadResultUserArgs.prototype.firstName;
/** @type {?|undefined} */
KalturaBulkUploadResultUserArgs.prototype.lastName;
/** @type {?|undefined} */
KalturaBulkUploadResultUserArgs.prototype.group;
export class KalturaBulkUploadResultUser extends KalturaBulkUploadResult {
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
            objectType: { type: 'c', default: 'KalturaBulkUploadResultUser' },
            userId: { type: 's' },
            screenName: { type: 's' },
            email: { type: 's' },
            description: { type: 's' },
            tags: { type: 's' },
            dateOfBirth: { type: 'n' },
            country: { type: 's' },
            state: { type: 's' },
            city: { type: 's' },
            zip: { type: 's' },
            gender: { type: 'n' },
            firstName: { type: 's' },
            lastName: { type: 's' },
            group: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaBulkUploadResultUser.prototype.userId;
    /** @type {?} */
    KalturaBulkUploadResultUser.prototype.screenName;
    /** @type {?} */
    KalturaBulkUploadResultUser.prototype.email;
    /** @type {?} */
    KalturaBulkUploadResultUser.prototype.description;
    /** @type {?} */
    KalturaBulkUploadResultUser.prototype.tags;
    /** @type {?} */
    KalturaBulkUploadResultUser.prototype.dateOfBirth;
    /** @type {?} */
    KalturaBulkUploadResultUser.prototype.country;
    /** @type {?} */
    KalturaBulkUploadResultUser.prototype.state;
    /** @type {?} */
    KalturaBulkUploadResultUser.prototype.city;
    /** @type {?} */
    KalturaBulkUploadResultUser.prototype.zip;
    /** @type {?} */
    KalturaBulkUploadResultUser.prototype.gender;
    /** @type {?} */
    KalturaBulkUploadResultUser.prototype.firstName;
    /** @type {?} */
    KalturaBulkUploadResultUser.prototype.lastName;
    /** @type {?} */
    KalturaBulkUploadResultUser.prototype.group;
}
typesMappingStorage['KalturaBulkUploadResultUser'] = KalturaBulkUploadResultUser;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUJ1bGtVcGxvYWRSZXN1bHRVc2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhQnVsa1VwbG9hZFJlc3VsdFVzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsdUJBQXVCLEVBQStCLE1BQU0sMkJBQTJCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CakcsTUFBTSxrQ0FBbUMsU0FBUSx1QkFBdUI7Ozs7SUFpQnBFLFlBQVksSUFBdUM7UUFFL0MsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLDZCQUE2QixFQUFFO1lBQ2hGLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDdkIsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMzQixLQUFLLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3RCLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUIsSUFBSSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNyQixXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVCLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEIsS0FBSyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN0QixJQUFJLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3JCLEdBQUcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDcEIsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN2QixTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzFCLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsS0FBSyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNiLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLDZCQUE2QixDQUFDLEdBQUcsMkJBQTJCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUJ1bGtVcGxvYWRSZXN1bHQsIEthbHR1cmFCdWxrVXBsb2FkUmVzdWx0QXJncyB9IGZyb20gJy4vS2FsdHVyYUJ1bGtVcGxvYWRSZXN1bHQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFCdWxrVXBsb2FkUmVzdWx0VXNlckFyZ3MgIGV4dGVuZHMgS2FsdHVyYUJ1bGtVcGxvYWRSZXN1bHRBcmdzIHtcbiAgICB1c2VySWQ/IDogc3RyaW5nO1xuXHRzY3JlZW5OYW1lPyA6IHN0cmluZztcblx0ZW1haWw/IDogc3RyaW5nO1xuXHRkZXNjcmlwdGlvbj8gOiBzdHJpbmc7XG5cdHRhZ3M/IDogc3RyaW5nO1xuXHRkYXRlT2ZCaXJ0aD8gOiBudW1iZXI7XG5cdGNvdW50cnk/IDogc3RyaW5nO1xuXHRzdGF0ZT8gOiBzdHJpbmc7XG5cdGNpdHk/IDogc3RyaW5nO1xuXHR6aXA/IDogc3RyaW5nO1xuXHRnZW5kZXI/IDogbnVtYmVyO1xuXHRmaXJzdE5hbWU/IDogc3RyaW5nO1xuXHRsYXN0TmFtZT8gOiBzdHJpbmc7XG5cdGdyb3VwPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUJ1bGtVcGxvYWRSZXN1bHRVc2VyIGV4dGVuZHMgS2FsdHVyYUJ1bGtVcGxvYWRSZXN1bHQge1xuXG4gICAgdXNlcklkIDogc3RyaW5nO1xuXHRzY3JlZW5OYW1lIDogc3RyaW5nO1xuXHRlbWFpbCA6IHN0cmluZztcblx0ZGVzY3JpcHRpb24gOiBzdHJpbmc7XG5cdHRhZ3MgOiBzdHJpbmc7XG5cdGRhdGVPZkJpcnRoIDogbnVtYmVyO1xuXHRjb3VudHJ5IDogc3RyaW5nO1xuXHRzdGF0ZSA6IHN0cmluZztcblx0Y2l0eSA6IHN0cmluZztcblx0emlwIDogc3RyaW5nO1xuXHRnZW5kZXIgOiBudW1iZXI7XG5cdGZpcnN0TmFtZSA6IHN0cmluZztcblx0bGFzdE5hbWUgOiBzdHJpbmc7XG5cdGdyb3VwIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhQnVsa1VwbG9hZFJlc3VsdFVzZXJBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUJ1bGtVcGxvYWRSZXN1bHRVc2VyJyB9LFxuXHRcdFx0XHR1c2VySWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c2NyZWVuTmFtZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRlbWFpbCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRkZXNjcmlwdGlvbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR0YWdzIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGRhdGVPZkJpcnRoIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGNvdW50cnkgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c3RhdGUgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Y2l0eSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR6aXAgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Z2VuZGVyIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGZpcnN0TmFtZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRsYXN0TmFtZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRncm91cCA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhQnVsa1VwbG9hZFJlc3VsdFVzZXInXSA9IEthbHR1cmFCdWxrVXBsb2FkUmVzdWx0VXNlcjsiXX0=