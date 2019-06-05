/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectIdentifier } from './KalturaObjectIdentifier';
import { KalturaMrssExtensionMode } from './KalturaMrssExtensionMode';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaExtendingItemMrssParameterArgs() { }
/** @type {?|undefined} */
KalturaExtendingItemMrssParameterArgs.prototype.xpath;
/** @type {?|undefined} */
KalturaExtendingItemMrssParameterArgs.prototype.identifier;
/** @type {?|undefined} */
KalturaExtendingItemMrssParameterArgs.prototype.extensionMode;
var KalturaExtendingItemMrssParameter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaExtendingItemMrssParameter, _super);
    function KalturaExtendingItemMrssParameter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaExtendingItemMrssParameter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaExtendingItemMrssParameter' },
            xpath: { type: 's' },
            identifier: { type: 'o', subTypeConstructor: KalturaObjectIdentifier, subType: 'KalturaObjectIdentifier' },
            extensionMode: { type: 'en', subTypeConstructor: KalturaMrssExtensionMode, subType: 'KalturaMrssExtensionMode' }
        });
        return result;
    };
    return KalturaExtendingItemMrssParameter;
}(KalturaObjectBase));
export { KalturaExtendingItemMrssParameter };
if (false) {
    /** @type {?} */
    KalturaExtendingItemMrssParameter.prototype.xpath;
    /** @type {?} */
    KalturaExtendingItemMrssParameter.prototype.identifier;
    /** @type {?} */
    KalturaExtendingItemMrssParameter.prototype.extensionMode;
}
typesMappingStorage['KalturaExtendingItemMrssParameter'] = KalturaExtendingItemMrssParameter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUV4dGVuZGluZ0l0ZW1NcnNzUGFyYW1ldGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhRXh0ZW5kaW5nSXRlbU1yc3NQYXJhbWV0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDcEUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDdEUsT0FBTyxFQUFFLGlCQUFpQixFQUF5QixNQUFNLHdCQUF3QixDQUFDOzs7Ozs7Ozs7OztBQVNsRixJQUFBO0lBQXVELDZEQUFpQjtJQU1wRSwyQ0FBWSxJQUE2QztlQUVyRCxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLHdEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLG1DQUFtQyxFQUFFO1lBQ3RGLEtBQUssRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDdEIsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyx1QkFBdUIsRUFBRSxPQUFPLEVBQUcseUJBQXlCLEVBQUU7WUFDOUcsYUFBYSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyx3QkFBd0IsRUFBRSxPQUFPLEVBQUcsMEJBQTBCLEVBQUU7U0FDM0csQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjs0Q0FyQ0w7RUFhdUQsaUJBQWlCLEVBeUJ2RSxDQUFBO0FBekJELDZDQXlCQzs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsbUNBQW1DLENBQUMsR0FBRyxpQ0FBaUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0SWRlbnRpZmllciB9IGZyb20gJy4vS2FsdHVyYU9iamVjdElkZW50aWZpZXInO1xuaW1wb3J0IHsgS2FsdHVyYU1yc3NFeHRlbnNpb25Nb2RlIH0gZnJvbSAnLi9LYWx0dXJhTXJzc0V4dGVuc2lvbk1vZGUnO1xuaW1wb3J0IHsgS2FsdHVyYU9iamVjdEJhc2UsIEthbHR1cmFPYmplY3RCYXNlQXJncyB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFFeHRlbmRpbmdJdGVtTXJzc1BhcmFtZXRlckFyZ3MgIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2VBcmdzIHtcbiAgICB4cGF0aD8gOiBzdHJpbmc7XG5cdGlkZW50aWZpZXI/IDogS2FsdHVyYU9iamVjdElkZW50aWZpZXI7XG5cdGV4dGVuc2lvbk1vZGU/IDogS2FsdHVyYU1yc3NFeHRlbnNpb25Nb2RlO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhRXh0ZW5kaW5nSXRlbU1yc3NQYXJhbWV0ZXIgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZSB7XG5cbiAgICB4cGF0aCA6IHN0cmluZztcblx0aWRlbnRpZmllciA6IEthbHR1cmFPYmplY3RJZGVudGlmaWVyO1xuXHRleHRlbnNpb25Nb2RlIDogS2FsdHVyYU1yc3NFeHRlbnNpb25Nb2RlO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhRXh0ZW5kaW5nSXRlbU1yc3NQYXJhbWV0ZXJBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUV4dGVuZGluZ0l0ZW1NcnNzUGFyYW1ldGVyJyB9LFxuXHRcdFx0XHR4cGF0aCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRpZGVudGlmaWVyIDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhT2JqZWN0SWRlbnRpZmllciwgc3ViVHlwZSA6ICdLYWx0dXJhT2JqZWN0SWRlbnRpZmllcicgfSxcblx0XHRcdFx0ZXh0ZW5zaW9uTW9kZSA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFNcnNzRXh0ZW5zaW9uTW9kZSwgc3ViVHlwZSA6ICdLYWx0dXJhTXJzc0V4dGVuc2lvbk1vZGUnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFFeHRlbmRpbmdJdGVtTXJzc1BhcmFtZXRlciddID0gS2FsdHVyYUV4dGVuZGluZ0l0ZW1NcnNzUGFyYW1ldGVyOyJdfQ==