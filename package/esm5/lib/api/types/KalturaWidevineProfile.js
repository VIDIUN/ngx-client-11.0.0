/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaDrmProfile } from './KalturaDrmProfile';
/**
 * @record
 */
export function KalturaWidevineProfileArgs() { }
/** @type {?|undefined} */
KalturaWidevineProfileArgs.prototype.key;
/** @type {?|undefined} */
KalturaWidevineProfileArgs.prototype.iv;
/** @type {?|undefined} */
KalturaWidevineProfileArgs.prototype.owner;
/** @type {?|undefined} */
KalturaWidevineProfileArgs.prototype.portal;
/** @type {?|undefined} */
KalturaWidevineProfileArgs.prototype.maxGop;
/** @type {?|undefined} */
KalturaWidevineProfileArgs.prototype.regServerHost;
var KalturaWidevineProfile = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaWidevineProfile, _super);
    function KalturaWidevineProfile(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaWidevineProfile.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaWidevineProfile' },
            key: { type: 's' },
            iv: { type: 's' },
            owner: { type: 's' },
            portal: { type: 's' },
            maxGop: { type: 'n' },
            regServerHost: { type: 's' }
        });
        return result;
    };
    return KalturaWidevineProfile;
}(KalturaDrmProfile));
export { KalturaWidevineProfile };
if (false) {
    /** @type {?} */
    KalturaWidevineProfile.prototype.key;
    /** @type {?} */
    KalturaWidevineProfile.prototype.iv;
    /** @type {?} */
    KalturaWidevineProfile.prototype.owner;
    /** @type {?} */
    KalturaWidevineProfile.prototype.portal;
    /** @type {?} */
    KalturaWidevineProfile.prototype.maxGop;
    /** @type {?} */
    KalturaWidevineProfile.prototype.regServerHost;
}
typesMappingStorage['KalturaWidevineProfile'] = KalturaWidevineProfile;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVdpZGV2aW5lUHJvZmlsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYVdpZGV2aW5lUHJvZmlsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsaUJBQWlCLEVBQXlCLE1BQU0scUJBQXFCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBWS9FLElBQUE7SUFBNEMsa0RBQWlCO0lBU3pELGdDQUFZLElBQWtDO2VBRTFDLGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsNkNBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsd0JBQXdCLEVBQUU7WUFDM0UsR0FBRyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNwQixFQUFFLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ25CLEtBQUssRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDdEIsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN2QixNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3ZCLGFBQWEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDckIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtpQ0E1Q0w7RUFjNEMsaUJBQWlCLEVBK0I1RCxDQUFBO0FBL0JELGtDQStCQzs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsd0JBQXdCLENBQUMsR0FBRyxzQkFBc0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhRHJtUHJvZmlsZSwgS2FsdHVyYURybVByb2ZpbGVBcmdzIH0gZnJvbSAnLi9LYWx0dXJhRHJtUHJvZmlsZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYVdpZGV2aW5lUHJvZmlsZUFyZ3MgIGV4dGVuZHMgS2FsdHVyYURybVByb2ZpbGVBcmdzIHtcbiAgICBrZXk/IDogc3RyaW5nO1xuXHRpdj8gOiBzdHJpbmc7XG5cdG93bmVyPyA6IHN0cmluZztcblx0cG9ydGFsPyA6IHN0cmluZztcblx0bWF4R29wPyA6IG51bWJlcjtcblx0cmVnU2VydmVySG9zdD8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFXaWRldmluZVByb2ZpbGUgZXh0ZW5kcyBLYWx0dXJhRHJtUHJvZmlsZSB7XG5cbiAgICBrZXkgOiBzdHJpbmc7XG5cdGl2IDogc3RyaW5nO1xuXHRvd25lciA6IHN0cmluZztcblx0cG9ydGFsIDogc3RyaW5nO1xuXHRtYXhHb3AgOiBudW1iZXI7XG5cdHJlZ1NlcnZlckhvc3QgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFXaWRldmluZVByb2ZpbGVBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYVdpZGV2aW5lUHJvZmlsZScgfSxcblx0XHRcdFx0a2V5IDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGl2IDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdG93bmVyIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHBvcnRhbCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRtYXhHb3AgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0cmVnU2VydmVySG9zdCA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhV2lkZXZpbmVQcm9maWxlJ10gPSBLYWx0dXJhV2lkZXZpbmVQcm9maWxlOyJdfQ==