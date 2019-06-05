/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var KalturaBulkUploadResultUser = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaBulkUploadResultUser, _super);
    function KalturaBulkUploadResultUser(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaBulkUploadResultUser.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
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
    };
    return KalturaBulkUploadResultUser;
}(KalturaBulkUploadResult));
export { KalturaBulkUploadResultUser };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUJ1bGtVcGxvYWRSZXN1bHRVc2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhQnVsa1VwbG9hZFJlc3VsdFVzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHVCQUF1QixFQUErQixNQUFNLDJCQUEyQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQmpHLElBQUE7SUFBaUQsdURBQXVCO0lBaUJwRSxxQ0FBWSxJQUF1QztlQUUvQyxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLGtEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLDZCQUE2QixFQUFFO1lBQ2hGLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDdkIsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMzQixLQUFLLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3RCLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUIsSUFBSSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNyQixXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVCLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEIsS0FBSyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN0QixJQUFJLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3JCLEdBQUcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDcEIsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN2QixTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzFCLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsS0FBSyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNiLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7c0NBcEVMO0VBc0JpRCx1QkFBdUIsRUErQ3ZFLENBQUE7QUEvQ0QsdUNBK0NDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsNkJBQTZCLENBQUMsR0FBRywyQkFBMkIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhQnVsa1VwbG9hZFJlc3VsdCwgS2FsdHVyYUJ1bGtVcGxvYWRSZXN1bHRBcmdzIH0gZnJvbSAnLi9LYWx0dXJhQnVsa1VwbG9hZFJlc3VsdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUJ1bGtVcGxvYWRSZXN1bHRVc2VyQXJncyAgZXh0ZW5kcyBLYWx0dXJhQnVsa1VwbG9hZFJlc3VsdEFyZ3Mge1xuICAgIHVzZXJJZD8gOiBzdHJpbmc7XG5cdHNjcmVlbk5hbWU/IDogc3RyaW5nO1xuXHRlbWFpbD8gOiBzdHJpbmc7XG5cdGRlc2NyaXB0aW9uPyA6IHN0cmluZztcblx0dGFncz8gOiBzdHJpbmc7XG5cdGRhdGVPZkJpcnRoPyA6IG51bWJlcjtcblx0Y291bnRyeT8gOiBzdHJpbmc7XG5cdHN0YXRlPyA6IHN0cmluZztcblx0Y2l0eT8gOiBzdHJpbmc7XG5cdHppcD8gOiBzdHJpbmc7XG5cdGdlbmRlcj8gOiBudW1iZXI7XG5cdGZpcnN0TmFtZT8gOiBzdHJpbmc7XG5cdGxhc3ROYW1lPyA6IHN0cmluZztcblx0Z3JvdXA/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhQnVsa1VwbG9hZFJlc3VsdFVzZXIgZXh0ZW5kcyBLYWx0dXJhQnVsa1VwbG9hZFJlc3VsdCB7XG5cbiAgICB1c2VySWQgOiBzdHJpbmc7XG5cdHNjcmVlbk5hbWUgOiBzdHJpbmc7XG5cdGVtYWlsIDogc3RyaW5nO1xuXHRkZXNjcmlwdGlvbiA6IHN0cmluZztcblx0dGFncyA6IHN0cmluZztcblx0ZGF0ZU9mQmlydGggOiBudW1iZXI7XG5cdGNvdW50cnkgOiBzdHJpbmc7XG5cdHN0YXRlIDogc3RyaW5nO1xuXHRjaXR5IDogc3RyaW5nO1xuXHR6aXAgOiBzdHJpbmc7XG5cdGdlbmRlciA6IG51bWJlcjtcblx0Zmlyc3ROYW1lIDogc3RyaW5nO1xuXHRsYXN0TmFtZSA6IHN0cmluZztcblx0Z3JvdXAgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFCdWxrVXBsb2FkUmVzdWx0VXNlckFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhQnVsa1VwbG9hZFJlc3VsdFVzZXInIH0sXG5cdFx0XHRcdHVzZXJJZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzY3JlZW5OYW1lIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGVtYWlsIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGRlc2NyaXB0aW9uIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHRhZ3MgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZGF0ZU9mQmlydGggOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0Y291bnRyeSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzdGF0ZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRjaXR5IDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHppcCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRnZW5kZXIgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0Zmlyc3ROYW1lIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGxhc3ROYW1lIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGdyb3VwIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFCdWxrVXBsb2FkUmVzdWx0VXNlciddID0gS2FsdHVyYUJ1bGtVcGxvYWRSZXN1bHRVc2VyOyJdfQ==