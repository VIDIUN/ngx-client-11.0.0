/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaContentResource } from './KalturaContentResource';
/**
 * @record
 */
export function KalturaFileSyncResourceArgs() { }
/** @type {?|undefined} */
KalturaFileSyncResourceArgs.prototype.fileSyncObjectType;
/** @type {?|undefined} */
KalturaFileSyncResourceArgs.prototype.objectSubType;
/** @type {?|undefined} */
KalturaFileSyncResourceArgs.prototype.objectId;
/** @type {?|undefined} */
KalturaFileSyncResourceArgs.prototype.version;
var KalturaFileSyncResource = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaFileSyncResource, _super);
    function KalturaFileSyncResource(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaFileSyncResource.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaFileSyncResource' },
            fileSyncObjectType: { type: 'n' },
            objectSubType: { type: 'n' },
            objectId: { type: 's' },
            version: { type: 's' }
        });
        return result;
    };
    return KalturaFileSyncResource;
}(KalturaContentResource));
export { KalturaFileSyncResource };
if (false) {
    /** @type {?} */
    KalturaFileSyncResource.prototype.fileSyncObjectType;
    /** @type {?} */
    KalturaFileSyncResource.prototype.objectSubType;
    /** @type {?} */
    KalturaFileSyncResource.prototype.objectId;
    /** @type {?} */
    KalturaFileSyncResource.prototype.version;
}
typesMappingStorage['KalturaFileSyncResource'] = KalturaFileSyncResource;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUZpbGVTeW5jUmVzb3VyY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFGaWxlU3luY1Jlc291cmNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxzQkFBc0IsRUFBOEIsTUFBTSwwQkFBMEIsQ0FBQzs7Ozs7Ozs7Ozs7OztBQVU5RixJQUFBO0lBQTZDLG1EQUFzQjtJQU8vRCxpQ0FBWSxJQUFtQztlQUUzQyxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLDhDQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHlCQUF5QixFQUFFO1lBQzVFLGtCQUFrQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNuQyxhQUFhLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzlCLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNmLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7a0NBdENMO0VBWTZDLHNCQUFzQixFQTJCbEUsQ0FBQTtBQTNCRCxtQ0EyQkM7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMseUJBQXlCLENBQUMsR0FBRyx1QkFBdUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhQ29udGVudFJlc291cmNlLCBLYWx0dXJhQ29udGVudFJlc291cmNlQXJncyB9IGZyb20gJy4vS2FsdHVyYUNvbnRlbnRSZXNvdXJjZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUZpbGVTeW5jUmVzb3VyY2VBcmdzICBleHRlbmRzIEthbHR1cmFDb250ZW50UmVzb3VyY2VBcmdzIHtcbiAgICBmaWxlU3luY09iamVjdFR5cGU/IDogbnVtYmVyO1xuXHRvYmplY3RTdWJUeXBlPyA6IG51bWJlcjtcblx0b2JqZWN0SWQ/IDogc3RyaW5nO1xuXHR2ZXJzaW9uPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUZpbGVTeW5jUmVzb3VyY2UgZXh0ZW5kcyBLYWx0dXJhQ29udGVudFJlc291cmNlIHtcblxuICAgIGZpbGVTeW5jT2JqZWN0VHlwZSA6IG51bWJlcjtcblx0b2JqZWN0U3ViVHlwZSA6IG51bWJlcjtcblx0b2JqZWN0SWQgOiBzdHJpbmc7XG5cdHZlcnNpb24gOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFGaWxlU3luY1Jlc291cmNlQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFGaWxlU3luY1Jlc291cmNlJyB9LFxuXHRcdFx0XHRmaWxlU3luY09iamVjdFR5cGUgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0b2JqZWN0U3ViVHlwZSA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRvYmplY3RJZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR2ZXJzaW9uIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFGaWxlU3luY1Jlc291cmNlJ10gPSBLYWx0dXJhRmlsZVN5bmNSZXNvdXJjZTsiXX0=