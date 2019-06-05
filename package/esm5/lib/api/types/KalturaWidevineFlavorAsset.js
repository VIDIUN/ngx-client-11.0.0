/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaFlavorAsset } from './KalturaFlavorAsset';
/**
 * @record
 */
export function KalturaWidevineFlavorAssetArgs() { }
/** @type {?|undefined} */
KalturaWidevineFlavorAssetArgs.prototype.widevineDistributionStartDate;
/** @type {?|undefined} */
KalturaWidevineFlavorAssetArgs.prototype.widevineDistributionEndDate;
/** @type {?|undefined} */
KalturaWidevineFlavorAssetArgs.prototype.widevineAssetId;
var KalturaWidevineFlavorAsset = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaWidevineFlavorAsset, _super);
    function KalturaWidevineFlavorAsset(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaWidevineFlavorAsset.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaWidevineFlavorAsset' },
            widevineDistributionStartDate: { type: 'n' },
            widevineDistributionEndDate: { type: 'n' },
            widevineAssetId: { type: 'n' }
        });
        return result;
    };
    return KalturaWidevineFlavorAsset;
}(KalturaFlavorAsset));
export { KalturaWidevineFlavorAsset };
if (false) {
    /** @type {?} */
    KalturaWidevineFlavorAsset.prototype.widevineDistributionStartDate;
    /** @type {?} */
    KalturaWidevineFlavorAsset.prototype.widevineDistributionEndDate;
    /** @type {?} */
    KalturaWidevineFlavorAsset.prototype.widevineAssetId;
}
typesMappingStorage['KalturaWidevineFlavorAsset'] = KalturaWidevineFlavorAsset;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVdpZGV2aW5lRmxhdm9yQXNzZXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFXaWRldmluZUZsYXZvckFzc2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxrQkFBa0IsRUFBMEIsTUFBTSxzQkFBc0IsQ0FBQzs7Ozs7Ozs7Ozs7QUFTbEYsSUFBQTtJQUFnRCxzREFBa0I7SUFNOUQsb0NBQVksSUFBc0M7ZUFFOUMsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyxpREFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyw0QkFBNEIsRUFBRTtZQUMvRSw2QkFBNkIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDOUMsMkJBQTJCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVDLGVBQWUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDdkIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtxQ0FuQ0w7RUFXZ0Qsa0JBQWtCLEVBeUJqRSxDQUFBO0FBekJELHNDQXlCQzs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsNEJBQTRCLENBQUMsR0FBRywwQkFBMEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhRmxhdm9yQXNzZXQsIEthbHR1cmFGbGF2b3JBc3NldEFyZ3MgfSBmcm9tICcuL0thbHR1cmFGbGF2b3JBc3NldCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYVdpZGV2aW5lRmxhdm9yQXNzZXRBcmdzICBleHRlbmRzIEthbHR1cmFGbGF2b3JBc3NldEFyZ3Mge1xuICAgIHdpZGV2aW5lRGlzdHJpYnV0aW9uU3RhcnREYXRlPyA6IG51bWJlcjtcblx0d2lkZXZpbmVEaXN0cmlidXRpb25FbmREYXRlPyA6IG51bWJlcjtcblx0d2lkZXZpbmVBc3NldElkPyA6IG51bWJlcjtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYVdpZGV2aW5lRmxhdm9yQXNzZXQgZXh0ZW5kcyBLYWx0dXJhRmxhdm9yQXNzZXQge1xuXG4gICAgd2lkZXZpbmVEaXN0cmlidXRpb25TdGFydERhdGUgOiBudW1iZXI7XG5cdHdpZGV2aW5lRGlzdHJpYnV0aW9uRW5kRGF0ZSA6IG51bWJlcjtcblx0d2lkZXZpbmVBc3NldElkIDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhV2lkZXZpbmVGbGF2b3JBc3NldEFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhV2lkZXZpbmVGbGF2b3JBc3NldCcgfSxcblx0XHRcdFx0d2lkZXZpbmVEaXN0cmlidXRpb25TdGFydERhdGUgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0d2lkZXZpbmVEaXN0cmlidXRpb25FbmREYXRlIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHdpZGV2aW5lQXNzZXRJZCA6IHsgdHlwZSA6ICduJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhV2lkZXZpbmVGbGF2b3JBc3NldCddID0gS2FsdHVyYVdpZGV2aW5lRmxhdm9yQXNzZXQ7Il19