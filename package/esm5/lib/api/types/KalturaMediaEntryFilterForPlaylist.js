/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaMediaEntryFilter } from './KalturaMediaEntryFilter';
/**
 * @record
 */
export function KalturaMediaEntryFilterForPlaylistArgs() { }
/** @type {?|undefined} */
KalturaMediaEntryFilterForPlaylistArgs.prototype.limit;
/** @type {?|undefined} */
KalturaMediaEntryFilterForPlaylistArgs.prototype.name;
var KalturaMediaEntryFilterForPlaylist = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaMediaEntryFilterForPlaylist, _super);
    function KalturaMediaEntryFilterForPlaylist(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaMediaEntryFilterForPlaylist.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaMediaEntryFilterForPlaylist' },
            limit: { type: 'n' },
            name: { type: 's' }
        });
        return result;
    };
    return KalturaMediaEntryFilterForPlaylist;
}(KalturaMediaEntryFilter));
export { KalturaMediaEntryFilterForPlaylist };
if (false) {
    /** @type {?} */
    KalturaMediaEntryFilterForPlaylist.prototype.limit;
    /** @type {?} */
    KalturaMediaEntryFilterForPlaylist.prototype.name;
}
typesMappingStorage['KalturaMediaEntryFilterForPlaylist'] = KalturaMediaEntryFilterForPlaylist;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYU1lZGlhRW50cnlGaWx0ZXJGb3JQbGF5bGlzdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYU1lZGlhRW50cnlGaWx0ZXJGb3JQbGF5bGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsdUJBQXVCLEVBQStCLE1BQU0sMkJBQTJCLENBQUM7Ozs7Ozs7OztBQVFqRyxJQUFBO0lBQXdELDhEQUF1QjtJQUszRSw0Q0FBWSxJQUE4QztlQUV0RCxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLHlEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLG9DQUFvQyxFQUFFO1lBQ3ZGLEtBQUssRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDdEIsSUFBSSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNaLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7NkNBaENMO0VBVXdELHVCQUF1QixFQXVCOUUsQ0FBQTtBQXZCRCw4Q0F1QkM7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxvQ0FBb0MsQ0FBQyxHQUFHLGtDQUFrQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFNZWRpYUVudHJ5RmlsdGVyLCBLYWx0dXJhTWVkaWFFbnRyeUZpbHRlckFyZ3MgfSBmcm9tICcuL0thbHR1cmFNZWRpYUVudHJ5RmlsdGVyJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhTWVkaWFFbnRyeUZpbHRlckZvclBsYXlsaXN0QXJncyAgZXh0ZW5kcyBLYWx0dXJhTWVkaWFFbnRyeUZpbHRlckFyZ3Mge1xuICAgIGxpbWl0PyA6IG51bWJlcjtcblx0bmFtZT8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFNZWRpYUVudHJ5RmlsdGVyRm9yUGxheWxpc3QgZXh0ZW5kcyBLYWx0dXJhTWVkaWFFbnRyeUZpbHRlciB7XG5cbiAgICBsaW1pdCA6IG51bWJlcjtcblx0bmFtZSA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYU1lZGlhRW50cnlGaWx0ZXJGb3JQbGF5bGlzdEFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhTWVkaWFFbnRyeUZpbHRlckZvclBsYXlsaXN0JyB9LFxuXHRcdFx0XHRsaW1pdCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRuYW1lIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFNZWRpYUVudHJ5RmlsdGVyRm9yUGxheWxpc3QnXSA9IEthbHR1cmFNZWRpYUVudHJ5RmlsdGVyRm9yUGxheWxpc3Q7Il19